import React, { useContext, useRef, useEffect } from "react";
import { ContractsContext } from "../context/ContractsContext";
import { Loader, Notification } from "../components";
import { motion } from "framer-motion";
// import soon;

function Stake() {
  const {
    initToken,
    token,
    buyTokens,
    isEther,
    isLoading,
    login,
    currentAccount,
  } = useContext(ContractsContext);

  const inputRef = useRef();

  useEffect(() => {
    initToken();
  }, []);
  const card = {
    hidden: {
      opacity: 0,
      y: 300,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 75,
        delay: 0.1,
      },
    },
  };

  return (
    <div className="flex-1 pt-5 space-y-10 bg-main bg-cover bg-fixed">
      <motion.div
        className="container mx-auto bg-zinc-900 p-6 my-4 border border-slate-500 rounded-lg max-w-lg text-slate-200"
        variants={card}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-xl antialiased font-medium">
          Stake AiBoost Tokens
        </h2>
        <h3 className="pt-5 pb-2 text-slate-300 antialiased text-md">
          Tokens Owned (AiB) :{" "}
          <span className="text-teal-500 font-medium">{token.balance}</span>
        </h3>
        <h3 className="text-slate-300 pb-2 antialiased text-md">
          Token Sold :{" "}
          <span className="text-teal-500 font-medium">
            {token.sold} / 1000000
          </span>
        </h3>
      </motion.div>
      {currentAccount ? (
        <motion.div
          className="container mx-auto bg-zinc-900 p-6 my-4 border border-slate-500 rounded-lg max-w-lg text-slate-200"
          variants={card}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-xl antialiased font-medium">Stake AiB Token</h2>
          <form>
            <input
              ref={inputRef}
              placeholder="No. of Tokens"
              name="tokens"
              type="number"
              min="1"
              pattern="[0-9]"
              step="0.0001"
              className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
            />
            <button
              type="button"
              disabled={!currentAccount}
              className="w-full mt-2 bean disabled:cursor-not-allowed"
            >
              {currentAccount ? "STAKE TOKENS" : "⚠️ No Account Found"}
            </button>
          </form>
        </motion.div>
      ) : (
        <motion.div
          className="container mx-auto bg-zinc-900 p-6 my-4 border border-slate-500 rounded-lg max-w-lg text-slate-200"
          variants={card}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-md pb-5 antialiased font-medium">
            Connect Wallet to Stake AiB Token
          </h2>
          <button
            type="button"
            disabled={!currentAccount}
            className="w-full mt-2 bean disabled:cursor-not-allowed"
          >
            {"⚠️ No Account Found"}
          </button>
        </motion.div>
      )}
      <Notification
        props={{
          id: "Buy Token",
          isEther,
          account: currentAccount,
          login,
        }}
      />
    </div>
  );
}

export default Stake;
