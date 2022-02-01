import { abi as transactionABI } from "../artifacts/contracts/Transactions.sol/Transactions.json";
import { abi as tokenSaleABI } from "../artifacts/contracts/TokenSale.sol/TokenSale.json";
import { abi as aiboostTokenABI } from "../artifacts/contracts/AiboostToken.sol/AiboostToken.json";
import { abi as lotteryABI } from "../artifacts/contracts/Lottery.sol/Lottery.json";

import "dotenv/config";

export const transactionContractAddress =
  process.env.TRANSACTION_CONTRACT_ADDRESS;
export const transactionContractABI = transactionABI;

export const aiboostTokenContractAddress =
  process.env.AIBOOST_TOKEN_CONTRACT_ADDRESS;
export const aiboostTokenContractABI = aiboostTokenABI;

export const tokenSaleContractAddress = process.env.TOKEN_SALE_CONTRACT_ADDRESS;
export const tokenSaleContractABI = tokenSaleABI;

export const lotteryContractAddress = process.env.LOTTERY_SALE_CONTRACT_ADDRESS;
export const lotteryContractABI = lotteryABI;
