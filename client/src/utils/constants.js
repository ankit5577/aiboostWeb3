import { abi as transactionABI } from "../artifacts/contracts/AiboostToken.sol/AiboostToken.json";
import { abi as tokenSaleABI } from "../artifacts/contracts/ICO.sol/ICO.json";
import { abi as aiboostTokenABI } from "../artifacts/contracts/AiboostToken.sol/AiboostToken.json";
import { abi as lotteryPoolABI } from "../artifacts/contracts/LotteryPool.sol/LotteryPool.json";
import { abi as lotteryABI } from "../artifacts/contracts/Lottery.sol/Lottery.json";
import addresses from './addresses.json';

export const transactionContractAddress = addresses.transactionContract;
export const transactionContractABI = transactionABI;

export const aiboostTokenContractAddress = addresses.aiboostTokenContract;
export const aiboostTokenContractABI = aiboostTokenABI;

export const tokenSaleContractAddress = addresses.tokenSaleContract;
export const tokenSaleContractABI = tokenSaleABI;

export const lotteryPoolContractAddress = addresses.lotteryPoolContract;
export const lotteryPoolContractABI = lotteryPoolABI;

export const lotteryContractABI = lotteryABI;
