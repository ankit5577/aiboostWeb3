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
    isEther,
    isLoading,
    login,
    currentAccount,
  } = useContext(ContractsContext);

  const inputRef = useRef();

  console.log("IsLoading: ", isLoading);

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
  }, []);

  return (
    <div className="flex-1 pt-5 pb-8 space-y-10 bg-main bg-cover bg-fixed">
      <motion.div
        className="container mx-auto bg-zinc-900 p-6 my-4 border border-slate-500 rounded-lg max-w-lg text-slate-200"
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
      <motion.div
        className="container mx-auto bg-zinc-900 p-4 my-4 border border-slate-500 rounded-lg max-w-lg text-slate-300"
        variants={card}
        initial="hidden"
        animate="visible"
      >
        {!isLoading ? (
          <>
            <h2 className="text-xl pb-3 antialiased font-medium">
              Buy AiBoost (AiB)
            </h2>
            <form>
              <h6 className="text-xs text-slate-500 antialiased tracking-widest uppercase font-semibold">
                {" "}
                <AiFillWarning className="inline" /> Please be patient as it can
                take a while.
              </h6>
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
                onClick={() => {
                  {
                    isLoading && <Loader />;
                  }
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
    </div>
  );
}

export default BuyToken;
