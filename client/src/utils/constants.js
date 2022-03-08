import { abi as transactionABI } from "../artifacts/contracts/Transactions.sol/Transactions.json";
import { abi as tokenSaleABI } from "../artifacts/contracts/TokenSale.sol/TokenSale.json";
import { abi as aiboostTokenABI } from "../artifacts/contracts/AiboostToken.sol/AiboostToken.json";
import { abi as lotteryABI } from "../artifacts/contracts/Lottery.sol/Lottery.json";

export const transactionContractAddress =
  "0x21c19E554734C97066478443806aDA00e895c828";
export const transactionContractABI = transactionABI;

export const aiboostTokenContractAddress =
  "0x1680Cff3e126680CF4962DF2f116031a8d4830e7";
export const aiboostTokenContractABI = aiboostTokenABI;

export const tokenSaleContractAddress =
  "0x1f9e433adf5B5564DC50b5Dab6B73E24178076cF";
export const tokenSaleContractABI = tokenSaleABI;

export const lotteryContractAddress =
  "0x6de37853aa274e3b7299d35bf82ba8f7f30d7597";
export const lotteryContractABI = lotteryABI;
