import React, { useEffect, useContext, useRef } from "react";
import { Loader, Notification } from "../components";
import { ContractsContext } from "../context/ContractsContext";
import { AiFillWarning } from "react-icons/ai";
import { motion } from "framer-motion";

function BuyToken() {
  const {
    initToken,
    token,
    buyTokens,
    inTransaction,
    isEther,
    isLoading,
    login,
    currentAccount,
  } = useContext(ContractsContext);

  const inputRef = useRef();

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

  useEffect(() => {
    initToken();
    if (inTransaction) {
      alert("your transaction is in process.");
    }
  }, []);

  return (
    <section className="flex-1 p-4 space-y-10 bg-slate-900">
      {/* first div */}
      <motion.div
        className="container mx-auto bg-neutral-900 p-6 my-4 shadow-lg border border-slate-700 rounded-lg max-w-lg text-slate-200"
        variants={card}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-xl antialiased font-medium">AiBoost Token (AiB)</h2>
        <h3 className="pt-5 pb-2 text-slate-300 antialiased text-md">
          Current Token Price (AiB) :{" "}
          <span className="text-teal-500 font-medium">{token.price}</span>
        </h3>
        <h3 className="pb-2 text-slate-300 antialiased text-md">
          Tokens Owned :{" "}
          <span className="text-teal-500 font-medium">{token.balance}</span>
        </h3>
        <h3 className="pb-2 text-slate-300 antialiased text-md">
          Total Tokens Sold :{" "}
          <span className="text-teal-500 font-medium">
            {token.sold} / 1000000
          </span>
        </h3>
      </motion.div>

      {/* second div */}
      <motion.div
        className="container mx-auto bg-neutral-900 p-4 my-4 shadow-lg border border-slate-700 rounded-lg max-w-lg text-slate-300"
        variants={card}
        initial="hidden"
        animate="visible"
      >
        {!isLoading && !inTransaction ? (
          <>
            <h2 className="text-xl antialiased font-medium">
              Buy AiBoost (AiB)
            </h2>
            <form>
              <span className="text-xs text-teal-500 antialiased tracking-widest font-normal">
                <AiFillWarning className="inline" /> Please be patient as it can
                take a while.
              </span>
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
                disabled={!currentAccount || inTransaction || isLoading}
                onClick={() => {
                  buyTokens(+inputRef.current.value);
                }}
                className="w-full mt-2 bean disabled:cursor-not-allowed"
              >
                {currentAccount ? "BUY AIBOOST TOKEN" : "⚠️ No Account Found"}
              </button>
            </form>
          </>
        ) : (
          <div className="bg-zinc-900 flex-1 items-center py-4 flex justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-teal-500" />
          </div>
        )}
      </motion.div>
      <Notification
        props={{
          id: "Buy Token",
          isEther,
          account: currentAccount,
          login,
        }}
      />
    </section>
  );
}

export default BuyToken;
