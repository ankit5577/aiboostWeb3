import { abi as transactionABI } from "../artifacts/contracts/Transactions.sol/Transactions.json";
import { abi as tokenSaleABI } from "../artifacts/contracts/TokenSale.sol/TokenSale.json";
import { abi as aiboostTokenABI } from "../artifacts/contracts/AiboostToken.sol/AiboostToken.json";
import { abi as lotteryPoolABI } from "../artifacts/contracts/LotteryPool.sol/LotteryPool.json";

import { abi as lotteryABI } from "../artifacts/contracts/Lottery.sol/Lottery.json";

export const transactionContractAddress =
  "0x8219163cd9f695718c9dbcd7d4725a85484bcde6";
export const transactionContractABI = transactionABI;

export const aiboostTokenContractAddress =
  "0x1680Cff3e126680CF4962DF2f116031a8d4830e7";
export const aiboostTokenContractABI = aiboostTokenABI;

export const tokenSaleContractAddress =
  "0x1f9e433adf5B5564DC50b5Dab6B73E24178076cF";
export const tokenSaleContractABI = tokenSaleABI;

export const lotteryPoolContractAddress =
  "0xf796d5902F7609a4BC20A6c9522fDc2eA2C29949";
  // "0x6622e8fEBb8766376a0322Fb3AD8d9913c361a20"; // ganache
export const lotteryPoolContractABI = lotteryPoolABI;

export const lotteryContractABI = lotteryABI;