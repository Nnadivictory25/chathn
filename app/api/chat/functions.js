"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runFunction = exports.functions = void 0;
var ids = [
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
var resolutions = ['15', '30', '60', '240', '720', '1D'];
var networks = [
    { "id": 1, "name": "eth" },
    { "id": 5, "name": "goerli" },
    { "id": 10, "name": "optimism" },
    { "id": 20, "name": "elastos" },
    { "id": 24, "name": "kardia" },
    { "id": 25, "name": "cronos" },
    { "id": 40, "name": "telos" },
    { "id": 55, "name": "zyx" },
    { "id": 56, "name": "bsc" },
    { "id": 57, "name": "syscoin" },
    { "id": 66, "name": "oec" },
    { "id": 70, "name": "hsc" },
    { "id": 82, "name": "meter" },
    { "id": 100, "name": "xdai" },
    { "id": 106, "name": "velas" },
    { "id": 109, "name": "shibarium" },
    { "id": 122, "name": "fuse" },
    { "id": 128, "name": "heco" },
    { "id": 137, "name": "matic" },
    { "id": 204, "name": "opbnb" },
    { "id": 246, "name": "energyweb" },
    { "id": 250, "name": "fantom" },
    { "id": 288, "name": "boba" },
    { "id": 321, "name": "kcc" },
    { "id": 324, "name": "zksync" },
    { "id": 336, "name": "shiden" },
    { "id": 369, "name": "pulsechain" },
    { "id": 592, "name": "astar" },
    { "id": 820, "name": "callisto" },
    { "id": 888, "name": "wanchain" },
    { "id": 1030, "name": "conflux" },
    { "id": 1088, "name": "metis" },
    { "id": 1101, "name": "polygonzkevm" },
    { "id": 1116, "name": "core" },
    { "id": 1284, "name": "moonbeam" },
    { "id": 1285, "name": "moonriver" },
    { "id": 2000, "name": "dogechain" },
    { "id": 2001, "name": "milkomeda" },
    { "id": 3000, "name": "echelon" },
    { "id": 4689, "name": "iotex" },
    { "id": 5000, "name": "mantle" },
    { "id": 7700, "name": "canto" },
    { "id": 8217, "name": "klaytn" },
    { "id": 8453, "name": "base" },
    { "id": 9001, "name": "evmos" },
    { "id": 10000, "name": "smartbch" },
    { "id": 39797, "name": "energi" },
    { "id": 42161, "name": "arbitrum" },
    { "id": 42170, "name": "nova" },
    { "id": 42220, "name": "celo" },
    { "id": 42262, "name": "oasis" },
    { "id": 43114, "name": "avalanche" },
    { "id": 53935, "name": "dfk" },
    { "id": 59144, "name": "linea" },
    { "id": 69420, "name": "solana" },
    { "id": 80001, "name": "mumbai" },
    { "id": 333999, "name": "polis" },
    { "id": 11155111, "name": "sepolia" },
    { "id": 1313161554, "name": "aurora" },
    { "id": 1666600000, "name": "harmony" }
];
var endpoint = "https://open-api.dextools.io/free/v2/";
var dsEndpoint = "https://api.dexscreener.com/latest/dex/search?q=";
var defineEndpoint = "https://graph.defined.fi/graphql";
var defineKey = "a17ce2d744039898bc2dfa9ee586fb76e1b4c597";
var headers = {
    'X-BLOBR-KEY': 'qh4THK7XiJ5T5igpnR3NLu2wCPOguOmu'
};
function getTopTokensQuery(networkId, resolution) {
    return "\n    {\n      listTopTokens(limit: 5, networkFilter: [".concat(networkId, "], resolution: \"").concat(resolution, "\") {\n        address\n        liquidity\n        name\n        price\n        symbol\n        volume\n      }\n    }\n  ");
}
exports.functions = [
    {
        name: "get_top_coins",
        description: "Get the top trending cryptocurrencies from a realtime data API.",
        parameters: {
            type: "object",
            properties: {
                timeframe: {
                    type: "integer",
                    description: "The timeframe to get the metrics from default is 15, CANNOT BE LESS THAN 15 !.",
                    enum: resolutions
                },
                networkId: {
                    type: "integer",
                    description: "The ID of network to get data from. DO NOT ASSUME A VALUE",
                    enum: networks.map(function (n) { return n.id; })
                },
            },
            required: ["networkId"],
        },
    },
    {
        name: "get_coin_info",
        description: "Get onchain information about any coin by just using the coin name. Also gets the coins address",
        parameters: {
            type: "object",
            properties: {
                coin: {
                    type: "string",
                    description: "The coin to search for. Also returns the trading metrics and the coin address",
                },
            },
            required: ["coin"],
        },
    },
    {
        name: "get_coin_socials",
        description: "Get the social accounts and website of a coin",
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
        name: "get_network_id",
        description: "Get the network ID associated with a particular network.",
        parameters: {
            type: "object",
            properties: {
                network: {
                    type: "string",
                    description: "The network to use and get their id. This returns the network ID to use for query e.g: ethereum,solana",
                    enum: networks.map(function (n) { return n.name; })
                }
            },
            required: ["network"],
        },
    },
];
function get_top_coins(timeframe) {
    if (timeframe === void 0) { timeframe = 15; }
    return __awaiter(this, void 0, void 0, function () {
        var headers, topTokensQuery, response, data, topTokens;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    headers = {
                        'Content-Type': 'application/json',
                        'Authorization': defineKey,
                    };
                    topTokensQuery = getTopTokensQuery(15, timeframe);
                    console.log({ topTokensQuery: topTokensQuery });
                    return [4 /*yield*/, fetch(defineEndpoint, {
                            method: 'POST',
                            headers: headers,
                            body: JSON.stringify({ query: topTokensQuery }),
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = (_a.sent()).data;
                    topTokens = data.listTopTokens;
                    console.log({ topTokens: topTokens });
                    console.log({ timeframe: timeframe });
                    return [2 /*return*/, topTokens];
            }
        });
    });
}
;
get_top_coins();
function get_coin_score(chain, address) {
    if (chain === void 0) { chain = "ether"; }
    return __awaiter(this, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(endpoint + "token/".concat(chain, "/").concat(address, "/score"))];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = (_a.sent()).data;
                    console.log({ coin_score: data });
                    return [2 /*return*/, data];
            }
        });
    });
}
function get_network_id(network) {
    return __awaiter(this, void 0, void 0, function () {
        var lowerCaseQuery, matchedNetwork;
        return __generator(this, function (_a) {
            lowerCaseQuery = network.toLowerCase();
            matchedNetwork = networks.find(function (network) { return lowerCaseQuery.includes(network.name); });
            return [2 /*return*/, matchedNetwork === null || matchedNetwork === void 0 ? void 0 : matchedNetwork.id];
        });
    });
}
function get_coin_info(coin) {
    return __awaiter(this, void 0, void 0, function () {
        var response, pairs, matchingCoin;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(dsEndpoint + "".concat(coin))];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    pairs = (_a.sent()).pairs;
                    matchingCoin = pairs[0];
                    console.log({ matchingCoin: matchingCoin });
                    return [2 /*return*/, __assign(__assign({}, matchingCoin), { address: matchingCoin.baseToken.address })];
            }
        });
    });
}
function get_coin_socials(chain, address) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(endpoint + "/token/".concat(chain, "/").concat(address))];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    });
}
// async function summarize_top_story() {
//   const topStory = await get_top_stories(1);
//   return await get_story_with_comments(topStory[0].id);
// }
function runFunction(name, args) {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = name;
                    switch (_a) {
                        case "get_top_coins": return [3 /*break*/, 1];
                        case "get_coin_info": return [3 /*break*/, 3];
                        case "get_coin_address": return [3 /*break*/, 5];
                        case "get_network_id": return [3 /*break*/, 7];
                    }
                    return [3 /*break*/, 9];
                case 1: return [4 /*yield*/, get_top_coins(args['timeframe'])];
                case 2: return [2 /*return*/, _b.sent()];
                case 3: return [4 /*yield*/, get_coin_info(args["coin"])];
                case 4: return [2 /*return*/, _b.sent()];
                case 5: return [4 /*yield*/, get_coin_socials(args["chain"], args["address"])];
                case 6: return [2 /*return*/, _b.sent()];
                case 7: return [4 /*yield*/, get_network_id(args["network"])];
                case 8: return [2 /*return*/, _b.sent()];
                case 9: return [2 /*return*/, null];
            }
        });
    });
}
exports.runFunction = runFunction;
