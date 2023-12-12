import { CompletionCreateParams } from "openai/resources/chat/index";

const ids = [
  'ether',
  'bnb',
  'polygon',
  'fantom',
  'cronos',
  'avalanche',
  'velas',
  'oasis',
  'kucoin',
  'metis',
  'optimism',
  'arbitrum',
  'celo',
  'telos',
  'aurora',
  'moonbeam',
  'moonriver',
  'harmony',
  'fuse',
  'heco',
  'okc',
  'astar',
  'klaytn',
  'iotex',
  'milkomeda',
  'dfk',
  'solana',
  'evmos',
  'dogechain',
  'etc',
  'gnosis',
  'bitgert',
  'canto',
  'flare',
  'arbitrumnova',
  'redlight',
  'conflux',
  'smartbch',
  'kardia',
  'tomb',
  'wan',
  'boba',
  'elastos',
  'nova',
  'hoo',
  'shiden',
  'fusion',
  'rsk',
  'cube',
  'syscoin',
  'kava',
  'thundercore',
  'echelon',
  'meter',
  'kek',
  'tomo',
  'ronin',
  'shib',
  'ethw',
  'ethf',
  'muu',
  'sx',
  'alvey',
  'aptos',
  'multiversx',
  'pom',
  'exosama',
  'energi',
  'ethergoerli',
  'coredao',
];

const endpoint = "https://open-api.dextools.io/free/v2/"
const dsEndpoint = "https://api.dexscreener.com/latest/dex/search?q="

const headers = {
  'X-BLOBR-KEY': 'qh4THK7XiJ5T5igpnR3NLu2wCPOguOmu'
}


export const functions: CompletionCreateParams.Function[] = [
  {
    name: "get_top_coins",
    description:
      "Get the top trending crypto coins from DexTools API. Also returns the token address. Always ask for the chain if not provided",
    parameters: {
      type: "object",
      properties: {
        chain: {
          type: "string",
          description: `The chain to retrieve coin info from.`,
          enum: ids
        },
      },
      required: ['chain'],
    },
  },
  {
    name: "get_coin_info",
    description:
      "Get onchain information about any coin by just using the coin name. Also gets the coins address",
    parameters: {
      type: "object",
      properties: {
        coin: {
          type: "string",
          description: `The coin to search for. Also returns the trading metrics and the coin address`,
        },
      },
      required: ["coin"],
    },
  },
  {
    name: "get_coin_socials",
    description:
      "Get the social accounts and website of a coin",
    parameters: {
      type: "object",
      properties: {
        id: {
          type: "number",
          description: "The ID of the story",
        },
      },
      required: ["id"],
    },
  },
  {
    name: "summarize_top_story",
    description:
      "Summarize the top story from Hacker News, including both the story and its comments. Also returns the Hacker News URL to the story and each comment.",
    parameters: {
      type: "object",
      properties: {},
      required: [],
    },
  },
];

async function get_top_coins(chain: string) {
  const response = await fetch(endpoint + `ranking/${chain}/gainers`, {
    headers
  });
  const { data } = await response.json();

  // Use slice to get the first 10 items
  const topCoins = data.slice(0, 10).map((item: any) => ({
    ...item,
    tokenAddress: item.mainToken.address
  }));

  console.log({ url: endpoint + `ranking/${chain}/gainers` });
  return topCoins;
}


async function get_coin_score(chain: string = "ether", address: string) {
  const response = await fetch(endpoint + `token/${chain}/${address}/score`);
  const {data} = await response.json();
  console.log({coin_score: data});
  return data
}

async function get_coin_info(coin: string) {
  const response = await fetch(dsEndpoint + `${coin}`);
  const { pairs } = await response.json();

  const matchingCoin = pairs[0]

  console.log({matchingCoin});

  return {...matchingCoin, address: matchingCoin.baseToken.address}
  
}

async function get_coin_socials(chain: string, address: string) {
  const response = await fetch(endpoint + `/token/${chain}/${address}`);
  const { data } = await response.json();
  
  
  return data
  
}

// async function summarize_top_story() {
//   const topStory = await get_top_stories(1);
//   return await get_story_with_comments(topStory[0].id);
// }

export async function runFunction(name: string, args: any) {
  switch (name) {
    case "get_top_coins":
      return await get_top_coins(args['chain']);
    case "get_coin_info":
      return await get_coin_info(args["coin"]);
    case "get_coin_address":
      return await get_coin_socials(args["chain"], args["address"]);
    // case "summarize_top_story":
    //   return await summarize_top_story();
    default:
      return null;
  }
}
