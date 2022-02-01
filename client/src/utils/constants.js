import { abi as transactionABI } from "../artifacts/contracts/Transactions.sol/Transactions.json";
import { abi as tokenSaleABI } from "../artifacts/contracts/TokenSale.sol/TokenSale.json";
import { abi as aiboostTokenABI } from "../artifacts/contracts/AiboostToken.sol/AiboostToken.json";
import { abi as lotteryABI } from "../artifacts/contracts/Lottery.sol/Lottery.json";
import { abi as stakingPoolABI } from "../artifacts/contracts/StakingPool.sol/StakingPool.json";

export const transactionContractAddress =
  "0x71EC969b097A17073c40288cf8398AaB5C20FD19";
export const transactionContractABI = transactionABI;

export const aiboostTokenContractAddress =
  "0xfcFc0A777B0a5C70eB0ab964C0d83DEb8e1114a0";
export const aiboostTokenContractABI = aiboostTokenABI;

export const tokenSaleContractAddress =
  "0xa33a3808f441C33e4f6e765711d92586e3289002";
export const tokenSaleContractABI = tokenSaleABI;

export const stakingPoolContractAddress =
  "0xa33a3808f441C33e4f6e765711d92586e3289002";
export const stakingPoolContractABI = stakingPoolABI;

export const lotteryContractAddress =
  "0x1D671FbD8Ff207d35D76899c7Adf15Fa61d9113F";
export const lotteryContractABI = lotteryABI;
