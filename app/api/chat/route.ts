import { kv } from "@vercel/kv";
import { Ratelimit } from "@upstash/ratelimit";
import { OpenAI } from "openai";
import {

  OpenAIStream,
  StreamingTextResponse,
} from "ai";
import { functions, runFunction } from "./functions";

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});


const sysMessage = {
  content: `You are an all knowing reliable Crypto Researcher Expert, your job is to provide detailed and extensive financial advice to a very educated crypto investors who knows about all the risks of investment based on metrics of the crypto, you can trust a coin to do well if the coin is actively traded, you have the lastest reliable verified real-time up-to-date data. You are the one users come to for research purposes don't tell them to conduct research because you are the one doing so for them. Don't make assumptions about what values to plug into functions. Ask for clarification if a user request is ambiguous.`,
  role: "system"
}

export const runtime = "edge";

export async function POST(req: Request) {
  if (
    process.env.NODE_ENV !== "development" &&
    process.env.KV_REST_API_URL &&
    process.env.KV_REST_API_TOKEN
  ) {
    const ip = req.headers.get("x-forwarded-for");
    const ratelimit = new Ratelimit({
      redis: kv,
      limiter: Ratelimit.slidingWindow(50, "1 d"),
    });

    const { success, limit, reset, remaining } = await ratelimit.limit(
      `chathn_ratelimit_${ip}`,
    );

    if (!success) {
      return new Response("You have reached your request limit for the day.", {
        status: 429,
        headers: {
          "X-RateLimit-Limit": limit.toString(),
          "X-RateLimit-Remaining": remaining.toString(),
          "X-RateLimit-Reset": reset.toString(),
        },
      });
    }
  }

  const { messages } = await req.json();

  // check if the conversation requires a function call to be made
  const initialResponse = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-1106",
    messages: [...messages, sysMessage],
    stream: true,
    functions,
    function_call: "auto",
  });

  const stream = OpenAIStream(initialResponse, {
    experimental_onFunctionCall: async (
      { name, arguments: args },
      createFunctionCallMessages,
    ) => {
      const result = await runFunction(name, args);

      console.log({ funcName: name, arguments: args });

      const newMessages = createFunctionCallMessages(result);

      return openai.chat.completions.create({
        model: "gpt-3.5-turbo-1106",
        stream: true,
        messages: [...messages, ...newMessages],
        functions
      });
    },
  });

  return new StreamingTextResponse(stream);
}
