import React, { useContext, useEffect, useState, useRef } from "react";
import { Notification } from "../components";
import { AiFillWarning, AiOutlineWarning } from "react-icons/ai";
import { ContractsContext } from "../context/ContractsContext";
import { motion } from "framer-motion";

function Lottery() {
  const {
    initLottery,
    lotteryTimeRemaining,
    lotteryManager,
    lotteryEntryFee,
    lotteryPlayers,
    lotteryWinner,
    isLoading,
    isEther,
    lotteryPrice,
    currentAccount,
  } = useContext(ContractsContext);

  const timeRef = useRef();

  const [state, setState] = useState({
    lotteryTimeRemaining: 0,
    lotteryManager: null,
    lotteryEntryFee: 0,
    lotteryPlayers: [],
    lotteryWinner: null,
    lotteryPrice: 0,
  });

  // console.log("Manager", lotteryManager);

  const [manager, setIsManager] = useState(false);

  useEffect(() => {
    if (
      currentAccount == lotteryManager.toLocaleLowerCase() &&
      (currentAccount || lotteryManager.toLocaleLowerCase() !== null)
    ) {
      setIsManager(true);
    }
  }, [currentAccount]);

  useEffect(() => {
    async function load() {
      await initLottery();

      setState(() => {
        return {
          ...state,
          lotteryTimeRemaining,
          lotteryManager,
          lotteryEntryFee,
          lotteryPlayers,
          lotteryWinner,
          lotteryPrice,
        };
      });
    }
    load();
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
    <div className="flex-1 bg-main bg-cover bg-fixed pt-5 space-y-8 text-slate-200">
      <motion.div
        className="container bg-zinc-900 mx-auto border border-slate-500 p-4 my-4 rounded-lg max-w-lg"
        variants={card}
        initial="hidden"
        animate="visible"
      >
        <h1 className="antialiased font-medium text-2xl tracking-wide">
          Lottery Game{" "}
          {currentAccount && (
            <span className="text-xs p-2 bg-slate-200 rounded-full text-teal-700 antialiased font-bold">
              Started
            </span>
          )}
        </h1>
        <div className="pt-3">
          <h3 className="text-sm">
            Total Players:{" "}
            <span className="text-teal-400 text-lg">
              {lotteryPlayers.length}
            </span>
          </h3>
          <h3 className="text-sm">
            Manager:{" "}
            <span className="text-teal-400 text-xs">
              <a
                href={`https://ropsten.etherscan.io/address/${lotteryManager}`}
                target="_blank"
                rel="noreferrer"
                className="text-xs tracking-wide uppercase text-teal-400"
              >
                {lotteryManager}
              </a>
            </span>
          </h3>
          <h3 className="text-sm">
            Entry Fee:{" "}
            <span className="text-teal-400 text-lg">
              {+lotteryEntryFee / 10 ** 18}
            </span>{" "}
            ETH
          </h3>
          <h3 className="text-sm">
            Total Price:{" "}
            <span className="text-teal-400 text-lg">
              {+lotteryPrice / 10 ** 18}
            </span>{" "}
            ETH
          </h3>
        </div>
      </motion.div>
      {!currentAccount ? (
        <motion.div
          className="container mx-auto bg-zinc-900 border border-slate-500 p-5 my-4 rounded-lg max-w-lg"
          variants={card}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-row gap-2 antialiased tracking-wider text-slate-200 justify-evenly">
            ⚠️ Connect your wallet to participate in the lottery
          </div>
        </motion.div>
      ) : (
        <motion.div
          className="container mx-auto bg-zinc-900 border border-slate-500 p-5 my-4 rounded-lg max-w-lg"
          variants={card}
          initial="hidden"
          animate="visible"
        >
          <div className="container mx-auto">
            {!manager ? (
              <div className="tracking-wider text-slate-200 justify-evenly">
                <h6 className="text-xs text-red-500 antialiased tracking-widest uppercase font-semibold">
                  {" "}
                  <AiFillWarning className="inline" /> Only Use Ropsten Test
                  Network
                </h6>
                <h1 className="pt-4 text-sm text-slate-400 text-justify">
                  {" "}
                  The lottery Manager can start the lottery and it will end
                  after the remaining time has passed.
                </h1>
                <div className="pt-5 flex justify-center">
                  <button
                    type="button"
                    className="px-7 py-2 bg-yellow-400 rounded-lg text-slate-800 hover:shadow-lg hover:shadow-yellow-600"
                  >
                    Enter
                  </button>
                </div>
              </div>
            ) : (
              <>
                <form action="">
                  <input
                    ref={timeRef}
                    placeholder="Enter time in minutes"
                    name="time"
                    type="number"
                    min="1"
                    pattern="[0-9]"
                    step="0.0001"
                    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
                  />
                  <div className="flex justify-center gap-3">
                    <button
                      type="button"
                      className="px-7 py-2 bg-green-400 rounded-lg text-slate-800 hover:shadow-lg hover:shadow-green-600"
                    >
                      Start
                    </button>

                    <button
                      type="button"
                      className="px-7 py-2 bg-red-400 rounded-lg text-slate-800 hover:shadow-lg hover:shadow-red-600"
                    >
                      End Now
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </motion.div>
      )}
      {currentAccount && (
        <motion.div
          className="container mx-auto border border-slate-700 text-slate-400 light-gradient p-4 my-4 rounded-lg max-w-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.1 }}
        >
          <h1 className="antialiased font-medium text-2xl tracking-wide">
            Players
          </h1>
          {lotteryPlayers.map((player) => (
            <li>{player}</li>
          ))}
        </motion.div>
      )}
      <Notification
        props={{
          id: "Lottery",
          isEther,
          account: currentAccount,
        }}
      />
    </div>
  );
}

export default Lottery;

// https://github.com/bluebill1049/react-flip-numbers

{
  /* <button
                  type="button"
                  className="px-3 py-2 bg-yellow-400 rounded-lg text-slate-800 hover:shadow-lg hover:shadow-yellow-600"
                  >
                  Enter
                </button> */
}
