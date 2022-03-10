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
  TRANSACTIONS: "TRANSACTIONS",
  TRANSACTION_COUNT: "TRANSACTION_COUNT",
  TOKEN_CONTRACT_INIT: "TOKEN_CONTRACT_INIT",
  TOKEN_PRICE: "TOKEN_PRICE",
  SALE_CONTRACT_INIT: "SALE_CONTRACT_INIT",
  LOTTERY_CONTRACT_INIT: "LOTTERY_CONTRACT_INIT",
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

  const contractReducer = (state, action) => {
    switch (action.type) {
      case contractEnum.TRANSACTION_CONTRACT_INIT:
        console.log("transaction contract made");
        return { ...state, transactionContract: action.value };

      case contractEnum.TRANSACTIONS:
        console.log("transactions updated");
        return { ...state, transactions: action.value };

      case contractEnum.TRANSACTION_COUNT:
        console.log("transactions count updated");
        return { ...state, transactionCount: action.value };

      case contractEnum.TOKEN_CONTRACT_INIT:
        console.log("aiboost token contract made");
        return { ...state, aiboostTokenContract: action.value };

      case contractEnum.TOKEN_PRICE:
        console.log("token price updated");
        return { ...state, tokenPrice: action.value };

      case contractEnum.SALE_CONTRACT_INIT:
        console.log("sale contract made");
        return { ...state, aiboostTokenSaleContract: action.value };

      case contractEnum.LOTTERY_CONTRACT_INIT:
        console.log("lottery contract init");
        return { ...state, lotteryContract: action.value };

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

      case contractEnum.LOTTERY_TIME_REMAINING:
        console.log("LOTTERY_TIME_REMAINING updated");
        return { ...state, lotteryTimeRemaining: action.value };

      case contractEnum.LOTTERY_STATUS:
        console.log("LOTTERY_STATUS updated");
        return { ...state, lotteryStatus: action.value };

      case contractEnum.LOTTERY_PRICE:
        console.log("LOTTERY_PRICE updated");
        return { ...state, lotteryPrice: action.value };

      case contractEnum.LOTTERY_START:
        console.log("LOTTERY game started");
        return { ...state, lotteryStart: action.value };

      case contractEnum.LOTTERY_ENTER:
        console.log("You have entered the lottery");
        return { ...state, lotteryEnter: action.value };

      case contractEnum.LOTTERY_END:
        console.log("LOTTERY has ended");
        return { ...state, lotteryEnd: action.value };

      default:
        console.log(
          "Invalid value at Transaction Provider",
          action.type,
          action.value
        );
    }
  };

  const [login, setLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isEther, setIsEther] = useState(false);

  const web3Reducer = (state, action) => {
    switch (action.type) {
      case web3Enum.PROVIDER:
        console.log("provider init");
        return { ...state, provider: action.value };
      default:
        console.log(
          "Invalid value at web3Reducer Provider",
          action.type,
          action.value
        );
    }
  };

  const userReducer = (state, action) => {
    switch (action.type) {
      case userEnum.BALANCE:
        console.log("Balance updated");
        return { ...state, balance: action.value };
      case userEnum.CURR_ACCOUNT:
        console.log("Curr account updated");
        if (!login) {
          setLogin(true);
        }
        return { ...state, currentAccount: action.value };
      default:
        console.log(
          "Invalid value at web3Reducer Provider",
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
    transactions: [],
    transactionCount: +localStorage.getItem("transactionCount"),
    tokenPrice: 0,
    lotteryContract: null,
    lotteryManager: "․․․․‥",
    lotteryEntryFee: 0,
    lotteryTimeRemaining: 0,
    lotteryStart: null,
    lotteryEnter: null,
    lotteryEnd: null,
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
    message: "",
  });

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
      type: contractEnum.TOKEN_CONTRACT_INIT,
      value: aiboostTokenContract,
    });

    dispatchContracts({
      type: contractEnum.SALE_CONTRACT_INIT,
      value: tokenSaleContract,
    });

    dispatchContracts({
      type: contractEnum.LOTTERY_CONTRACT_INIT,
      value: lotteryContract,
    });

    return {
      aiboostTokenContract,
      tokenSaleContract,
      transactionsContract,
      lotteryContract,
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
        setIsLoading(true);
        const manager = await contracts.lotteryContract.manager();
        const entryFee = await contracts.lotteryContract.entryFee();
        const getPlayers = await contracts.lotteryContract.getPlayers();
        const price = await contracts.lotteryContract.winningPrice();
        const lotteryWinner = await contracts.lotteryContract.getWinner();
        const lotteryStatus = await contracts.lotteryContract.status();

        console.log(contracts.lotteryContract);

        const ethPrice = ethers.utils.formatEther(price);

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
          value: getPlayers,
        });
        dispatchContracts({
          type: contractEnum.LOTTERY_PRICE,
          value: ethPrice,
        });

        dispatchContracts({
          type: contractEnum.LOTTERY_WINNER,
          value: lotteryWinner,
        });

        dispatchContracts({
          type: contractEnum.LOTTERY_STATUS,
          value: lotteryStatus,
        });

        setIsLoading(false);
      } else {
        console.log("contract is not initialized @lottery");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const startLottery = async (startTime) => {
    try {
      if (startTime <= 0) {
        console.error(`Cannot Start Lottery with ${startTime} time`);
      } else {
        if (ethereum && contracts.lotteryContract) {
          setIsLoading(true);
          const start = await contracts.lotteryContract.start(startTime);
          console.log(`Loading - ${start.hash}`);
          await start.wait();
          console.log(`Success - ${start.hash}`);
          if (
            !alert(
              `Transaction Confirmed ${start.hash} \n from: ${user.currentAccount}`
            )
          ) {
            location.reload();
          }
          dispatchContracts({ type: contractEnum.LOTTERY_START, value: start });
          setIsLoading(false);
        } else {
          console.log("The lottery has not started yet");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const enterLottery = async () => {
    try {
      if (ethereum && contracts.lotteryContract) {
        setIsLoading(true);
        const enter = await contracts.lotteryContract.enter({
          from: user.currentAccount,
          value: contracts.lotteryEntryFee,
          gasLimit: 500000,
        });
        console.log(`Entering Lottery Plz Wait - ${enter.hash}`);
        await start.wait();
        console.log(`Entered Lottery Successfully - ${enter.hash}`);
        if (
          !alert(
            `Transaction Confirmed ${enter.hash} \n from: ${user.currentAccount}`
          )
        ) {
          location.reload();
        }
        dispatchContracts({ type: contractEnum.LOTTERY_ENTER, value: enter });
        setIsLoading(false);
      } else {
        console.log("You have not entered the lottery yet");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const endLottery = async () => {
    try {
      if (ethereum && contracts.lotteryContract) {
        setIsLoading(true);
        const end = await contracts.lotteryContract.end();
        console.log(`Ending Lottery Plz Wait - ${end.hash}`);
        await end.wait();
        console.log(`Lottery Ended Successfully - ${end.hash}`);
        if (
          !alert(
            `Transaction Confirmed ${end.hash} \n from: ${user.currentAccount}`
          )
        ) {
          location.reload();
        }
        dispatchContracts({ type: contractEnum.LOTTERY_END, value: end });
        setIsLoading(false);
      } else {
        console.log("Lottery is not initiated or no ether found");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const lotteryTimeRemaining = async () => {
    try {
      setIsLoading(true);
      if (ethereum && contracts.lotteryContract) {
        const timeRemaining =
          await contracts.lotteryContract.getRemainingTime();
        console.log("Contract ⌚ Remaining", timeRemaining);
        dispatchContracts({
          type: contractEnum.LOTTERY_TIME_REMAINING,
          value: timeRemaining,
        });
        setIsLoading(false);
      } else {
        console.log("Lottery is not initiated or no ether will be found");
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
      if (
        !alert(
          `Transaction Confirmed ${transactionHash.hash} \n from: ${user.currentAccount}`
        )
      ) {
        location.reload();
      }
      setIsLoading(false);
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
    // TODO: Notification for installing metamask will be an error
    try {
      if (!ethereum) {
        console.log("⚓No ether found⚓");
      } else {
        setIsEther(true);
      }

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
      if (!ethereum) {
        return alert(
          "Please install MetaMask and then connect to your wallet."
        );
      }

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
        const { addressTo, amount, message } = formData;
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
            message
          );

        setIsLoading(true);
        console.log(`Loading - ${transactionHash.hash}`);
        await transactionHash.wait();
        console.log(`Success - ${transactionHash.hash}`);
        if (
          !alert(
            `Transaction Confirmed ${transactionHash.hash} \n from: ${user.currentAccount} \t to: ${addressTo}`
          )
        ) {
          location.reload();
        }

        setIsLoading(false);
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
        lotteryManager: contracts.lotteryManager,
        lotteryStatus: contracts.lotteryStatus,
        lotteryEntryFee: contracts.lotteryEntryFee,
        lotteryPlayers: contracts.lotteryPlayers,
        winner: contracts.lotteryWinner,
        lotteryPrice: contracts.lotteryPrice,
        lotteryWinningPrice: contracts.ethPrice,
        startLottery,
        enterLottery,
        endLottery,
        lotteryTimeRemaining,
        connectWallet,
        sendTransaction,
        isEther,
        isLoading,
        login,
        handleChange,
        formData,
        getBalanceOf,
        getAllTransactions,
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
