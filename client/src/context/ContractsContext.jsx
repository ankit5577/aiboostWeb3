import React, { useEffect, useReducer, useState } from "react";
import { ethers } from "ethers";

import {
  transactionContractAddress,
  transactionContractABI,
  tokenSaleContractAddress,
  tokenSaleContractABI,
  aiboostTokenContractAddress,
  aiboostTokenContractABI,
  lotteryContractABI,
  lotteryContractAddress,
} from "../utils/constants";

const contractEnum = {
  TRANSACTION_CONTRACT_INIT: "TRANSACTION_CONTRACT_INIT",
  TOKEN_CONTRACT_INIT: "TOKEN_CONTRACT_INIT",
  LOTTERY_CONTRACT_INIT: "LOTTERY_CONTRACT_INIT",
  SALE_CONTRACT_INIT: "SALE_CONTRACT_INIT",
  TRANSACTIONS: "TRANSACTIONS",
  TRANSACTION_COUNT: "TRANSACTION_COUNT",
  TOKEN_PRICE: "TOKEN_PRICE",
  LOTTERY_TIME_REMAINING: "LOTTERY_TIME_REMAINING",
  LOTTERY_MANAGER: "LOTTERY_MANAGER",
  LOTTERY_ENTRY_FEE: "LOTTERY_ENTRY_FEE",
  LOTTERY_PLAYERS: "LOTTERY_PLAYERS",
  LOTTERY_WINNER: "LOTTERY_WINNER",
  LOTTERY_PRICE: "LOTTERY_PRICE",
};

const web3Enum = {
  PROVIDER: "PROVIDER",
};

const tokenEnum = {
  PRICE: "PRICE",
  BALANCE: "BALANCE",
  SOLD: "SOLD",
};

const userEnum = {
  BALANCE: "BALANCE",
  CURR_ACCOUNT: "CURR_ACCOUNT",
};

export const ContractsContext = React.createContext();

export const ContractsProvider = ({ children }) => {
  const { ethereum } = window;
  // const [provider, setProvider] = useState(null);
  const contractReducer = (state, action) => {
    console.log(action.type);
    switch (action.type) {
      case contractEnum.TRANSACTION_CONTRACT_INIT:
        console.log("transaction contract made");
        return { ...state, transactionContract: action.value };
      case contractEnum.TOKEN_CONTRACT_INIT:
        console.log("aiboost token contract made");
        return { ...state, aiboostTokenContract: action.value };
      case contractEnum.LOTTERY_CONTRACT_INIT:
        console.log("lottery contract made");
        return { ...state, lotteryContract: action.value };
      case contractEnum.SALE_CONTRACT_INIT:
        console.log("sale contract made");
        return { ...state, aiboostTokenSaleContract: action.value };
      case contractEnum.TRANSACTIONS:
        console.log("transactions updated");
        return { ...state, transactions: action.value };
      case contractEnum.TRANSACTION_COUNT:
        console.log("transactions count updated");
        return { ...state, transactionCount: action.value };
      case contractEnum.TOKEN_PRICE:
        console.log("token price updated");
        return { ...state, tokenPrice: action.value };
      case contractEnum.LOTTERY_TIME_REMAINING:
        console.log("LOTTERY_TIME_REMAINING updated");
        return { ...state, lotteryTimeRemaining: action.value };
      case contractEnum.LOTTERY_MANAGER:
        console.log("LOTTERY_MANAGER updated");
        return { ...state, lotteryManager: action.value };
      case contractEnum.LOTTERY_ENTRY_FEE:
        console.log("LOTTERY_ENTRY_FEE updated");
        return { ...state, lotteryEntryFee: action.value };
      case contractEnum.LOTTERY_PLAYERS:
        console.log("LOTTERY_PLAYERS updated");
        return { ...state, lotteryPlayers: action.value };
      case contractEnum.LOTTERY_WINNER:
        console.log("LOTTERY_WINNER updated");
        return { ...state, lotteryWinner: action.value };
      case contractEnum.LOTTERY_PRICE:
        console.log("LOTTERY_PRICE updated");
        return { ...state, lotteryPrice: action.value };

      default:
        console.log(
          "invalid value at Transaction Provider",
          action.type,
          action.value
        );
    }
  };

  const web3Reducer = (state, action) => {
    switch (action.type) {
      case web3Enum.PROVIDER:
        console.log("provider init");
        return { ...state, provider: action.value };
      default:
        console.log(
          "invalid value at web3Reducer Provider",
          action.type,
          action.value
        );
    }
  };

  const userReducer = (state, action) => {
    switch (action.type) {
      case userEnum.BALANCE:
        console.log("balance updated");
        return { ...state, balance: action.value };
      case userEnum.CURR_ACCOUNT:
        console.log("curr account updated");
        return { ...state, currentAccount: action.value };
      default:
        console.log(
          "invalid value at web3Reducer Provider",
          action.type,
          action.value
        );
    }
  };

  const tokenReducer = (state, action) => {
    switch (action.type) {
      case tokenEnum.BALANCE:
        console.log("token balance updated");
        return { ...state, balance: action.value };
      case tokenEnum.PRICE:
        console.log("token price updated");
        return { ...state, price: action.value };
      case tokenEnum.SOLD:
        console.log("token sold updated");
        return { ...state, sold: action.value };
      default:
        console.log(
          "invalid value at token reducer Provider",
          action.type,
          action.value
        );
    }
  };

  const [contracts, dispatchContracts] = useReducer(contractReducer, {
    transactionContract: null,
    aiboostTokenContract: null,
    aiboostTokenSaleContract: null,
    lotteryContract: null,
    transactions: [],
    transactionCount: +localStorage.getItem("transactionCount"),
    tokenPrice: 0,
    lotteryTimeRemaining: 0,
    lotteryManager: null,
    lotteryEntryFee: 0,
    lotteryPlayers: [],
    lotteryWinner: null,
    lotteryPrice: 0,
  });

  const [web3, dispatchWeb3] = useReducer(web3Reducer, {
    provider: null,
  });

  const [user, dispatchUser] = useReducer(userReducer, {
    balance: 0,
    currentAccount: null,
  });

  const [token, dispatchToken] = useReducer(tokenReducer, {
    balance: 0,
    price: 0,
    sold: 0,
  });

  const [formData, setformData] = useState({
    addressTo: "",
    amount: "",
    keyword: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e, name) => {
    setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const createEthereumContract = async () => {
    // TODO: Error HERE
    const provider = new ethers.providers.Web3Provider(ethereum);
    dispatchWeb3({ type: web3Enum.PROVIDER, value: provider });
    const signer = provider.getSigner();

    const transactionsContract = new ethers.Contract(
      transactionContractAddress,
      transactionContractABI,
      signer
    );

    const tokenSaleContract = new ethers.Contract(
      tokenSaleContractAddress,
      tokenSaleContractABI,
      signer
    );

    const aiboostTokenContract = new ethers.Contract(
      aiboostTokenContractAddress,
      aiboostTokenContractABI,
      signer
    );

    const lotteryContract = new ethers.Contract(
      lotteryContractAddress,
      lotteryContractABI,
      signer
    );

    dispatchContracts({
      type: contractEnum.TRANSACTION_CONTRACT_INIT,
      value: transactionsContract,
    });

    dispatchContracts({
      type: contractEnum.LOTTERY_CONTRACT_INIT,
      value: lotteryContract,
    });

    dispatchContracts({
      type: contractEnum.TOKEN_CONTRACT_INIT,
      value: aiboostTokenContract,
    });

    dispatchContracts({
      type: contractEnum.SALE_CONTRACT_INIT,
      value: tokenSaleContract,
    });

    return {
      aiboostTokenContract,
      tokenSaleContract,
      transactionsContract,
    };
  };

  const getBalanceOf = async (address = user.currentAccount) => {
    let balance = await web3.provider.getBalance(address);
    let formatBalance = ethers.utils.formatEther(balance);
    dispatchUser({
      type: userEnum.BALANCE,
      value: formatBalance.substring(0, 7),
    });
    return formatBalance.substring(0, 7);
  };

  const initLottery = async () => {
    try {
      if (ethereum && contracts.lotteryContract) {
        //  const timeRemaining = await contracts.lotteryContract.getRemainingTime();
        const manager = await contracts.lotteryContract.manager();
        const entryFee = await contracts.lotteryContract.entryFee();
        const players = await contracts.lotteryContract.getPlayers();
        const winner = await contracts.lotteryContract.winner;
        const price = await contracts.lotteryContract.winningPrice();

        dispatchContracts({
          type: contractEnum.LOTTERY_ENTRY_FEE,
          value: entryFee,
        });
        dispatchContracts({
          type: contractEnum.LOTTERY_MANAGER,
          value: manager,
        });
        dispatchContracts({
          type: contractEnum.LOTTERY_PLAYERS,
          value: players,
        });
        dispatchContracts({ type: contractEnum.LOTTERY_PRICE, value: price });
        dispatchContracts({ type: contractEnum.LOTTERY_WINNER, value: winner });
        //  dispatchContracts({ type: contractEnum.LOTTERY_TIME_REMAINING, value: timeRemaining });
      } else {
        console.log("contract is not initialized @lottery");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const initToken = async () => {
    try {
      if (
        ethereum &&
        contracts.aiboostTokenSaleContract &&
        contracts.aiboostTokenContract
      ) {
        setIsLoading(true);
        console.log(contracts.aiboostTokenSaleContract);
        let tokenPrice = await contracts.aiboostTokenSaleContract.tokenPrice();
        let tokenSold = await contracts.aiboostTokenSaleContract.tokenSold();
        let userBalance = await contracts.aiboostTokenContract.balanceOf(
          user.currentAccount
        );

        tokenPrice = ethers.utils.formatEther(tokenPrice);

        dispatchToken({
          type: tokenEnum.BALANCE,
          value: userBalance.toNumber(),
        });
        dispatchToken({ type: tokenEnum.PRICE, value: tokenPrice });
        dispatchToken({ type: tokenEnum.SOLD, value: tokenSold.toNumber() });
        setIsLoading(false);
      } else {
        console.log("contract is not initialized @initToken");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const buyTokens = async (tokens) => {
    console.log("buying tokens for", tokens);
    if (tokens <= 0) {
      console.log("can not buy tokens");
    } else {
      const value = ethers.BigNumber.from(
        ethers.utils.parseEther(token.price).toString()
      ).mul(tokens);
      const transactionHash =
        await contracts.aiboostTokenSaleContract.buyTokens(tokens, {
          from: user.currentAccount,
          value: value,
          gasLimit: 500000,
        });
      setIsLoading(true);
      console.log(`Loading - ${transactionHash.hash}`);
      await transactionHash.wait();
      console.log(`Success - ${transactionHash.hash}`);
      setIsLoading(false);
      alert(
        `Transaction Confirmed ${transactionHash.hash} \n from: ${user.currentAccount}`
      );
    }
  };

  const getAllTransactions = async () => {
    try {
      if (ethereum && contracts.transactionContract) {
        const availableTransactions =
          await contracts.transactionContract.getTransactions();

        const structuredTransactions = availableTransactions.map(
          (transaction) => {
            return {
              addressTo: transaction.receiver,
              addressFrom: transaction.sender,
              timestamp: new Date(
                +transaction.timestamp * 1000
              ).toLocaleString(),
              message: transaction.message,
              keyword: transaction.keyword,
              amount: +transaction.amount / 10 ** 18,
            };
          }
        );
        dispatchContracts({
          type: contractEnum.TRANSACTIONS,
          value: structuredTransactions,
        });
      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfWalletIsConnect = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        dispatchUser({ type: userEnum.CURR_ACCOUNT, value: accounts[0] });
        getAllTransactions();
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfTransactionsExists = async () => {
    try {
      if (ethereum && contracts.transactionContract) {
        const currentTransactionCount =
          await contracts.transactionContract.transactionCount();

        window.localStorage.setItem(
          "transactionCount",
          currentTransactionCount
        );
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      dispatchUser({ type: userEnum.CURR_ACCOUNT, value: accounts[0] });
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  const sendTransaction = async () => {
    try {
      console.log(contracts);
      if (ethereum && contracts.transactionContract) {
        const { addressTo, amount, keyword, message } = formData;
        const parsedAmount = ethers.utils.parseEther(amount);

        await ethereum.request({
          method: "eth_sendTransaction",
          params: [
            {
              from: user.currentAccount,
              to: addressTo,
              gas: "0x5208",
              value: parsedAmount._hex,
            },
          ],
        });

        const transactionHash =
          await contracts.transactionContract.addTransaction(
            addressTo,
            parsedAmount,
            message,
            keyword
          );

        setIsLoading(true);
        console.log(`Loading - ${transactionHash.hash}`);
        await transactionHash.wait();
        console.log(`Success - ${transactionHash.hash}`);
        setIsLoading(false);
        alert(
          `Transaction Confirmed ${transactionHash.hash} \n from: ${user.currentAccount} \t to: ${addressTo}`
        );
        getBalanceOf();

        const transactionsCount =
          await contracts.transactionContract.transactionCount();

        console.log(`transaction count => ${transactionsCount}`);

        dispatchContracts({
          type: contractEnum.TRANSACTION_COUNT,
          value: +transactionsCount,
        });
      } else {
        console.log("No ethereum object");
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  useEffect(() => {
    async function init() {
      // TODO: ERROR HERE
      await checkIfWalletIsConnect();
      await createEthereumContract();
      await checkIfTransactionsExists();
      window.ethereum.on("chainChanged", async () => {
        console.log("network changed!!");
        window.location.reload();
      });

      window.ethereum.on("accountsChanged", async () => {
        console.log("accounts changed");
        window.location.reload();
      });
    }
    init();
  }, []);

  return (
    <ContractsContext.Provider
      value={{
        transactionCount: contracts.transactionCount,
        transactions: contracts.transactions,
        currentAccount: user.currentAccount,
        balance: user.balance,
        lotteryTimeRemaining: contracts.lotteryTimeRemaining,
        lotteryManager: contracts.lotteryManager,
        lotteryEntryFee: contracts.lotteryEntryFee,
        lotteryPlayers: contracts.lotteryPlayers,
        lotteryWinner: contracts.lotteryWinner,
        lotteryPrice: contracts.lotteryPrice,
        connectWallet,
        isLoading,
        sendTransaction,
        handleChange,
        formData,
        getBalanceOf,
        createEthereumContract,
        token,
        initToken,
        buyTokens,
        initLottery,
      }}
    >
      {children}
    </ContractsContext.Provider>
  );
};
