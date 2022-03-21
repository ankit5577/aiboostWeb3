import React, { useContext, useRef, useEffect } from "react";
import { ContractsContext } from "../context/ContractsContext";
import { Notification } from "../components";
import { Link } from "react-router-dom";
import { AiFillWarning } from "react-icons/ai";
import { motion } from "framer-motion";

import workingIMG from "../../images/working.svg";

function Stake() {
  const { initToken, token, isEther, isLoading, login, currentAccount } =
    useContext(ContractsContext);

  const inputRef = useRef();
  const allDone = false;

  // console.log("😎", isLoading);

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

  if (allDone) {
    return (
      <div className="flex-1 p-4 space-y-10 bg-main bg-cover bg-fixed">
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
        <motion.div
          className="container mx-auto bg-zinc-900 p-6 my-4 border border-slate-500 rounded-lg max-w-lg text-slate-200"
          variants={card}
          initial="hidden"
          animate="visible"
        >
          {isLoading ? (
            <div className="bg-zinc-900 flex-1 items-center py-4 flex justify-center">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-teal-500" />
            </div>
          ) : (
            <>
              {currentAccount ? (
                <>
                  {token.balance > 0 ? (
                    <>
                      <h2 className="text-xl antialiased font-medium">
                        Stake AiB Token
                      </h2>
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
                          {currentAccount
                            ? "STAKE TOKENS"
                            : "⚠️ No Account Found"}
                        </button>
                      </form>
                    </>
                  ) : (
                    <>
                      <div className="tracking-wider text-slate-200 justify-evenly">
                        <h6 className="text-xs text-yellow-500 antialiased tracking-widest uppercase font-semibold">
                          {" "}
                          <AiFillWarning className="inline" /> You don't have
                          enough tokens to stake
                        </h6>
                        <h1 className="pt-4 pb-2 text-sm text-slate-400 text-justify">
                          {" "}
                          Consider buying some tokens to stake them.
                        </h1>
                      </div>
                      <button
                        type="button"
                        disabled={!currentAccount}
                        className="w-full mt-2 bean disabled:cursor-not-allowed"
                      >
                        <Link
                          to={"/buy-token"}
                          aria-label="Buy AiB Tokens"
                          title="Buy Token"
                          className="font-bold tracking-wide"
                        >
                          Buy Some Tokens
                        </Link>
                      </button>
                    </>
                  )}
                </>
              ) : (
                <>
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
                </>
              )}
            </>
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
  } else {
    return (
      <div className="flex-1 bg-slate-900 text-white">
        <div className="container mx-auto text-center p-4 sm:p-12">
          <img
            src={workingIMG}
            className="mx-auto p-4 sm:max-w-sm w-full"
            alt="working"
          />
          <h1 className="text-2xl sm:text-4xl tracking-wider">Under Construction</h1>
        </div>
      </div>
    );
  }
}

export default Stake;
