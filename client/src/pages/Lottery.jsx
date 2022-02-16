import React, { useContext, useEffect, useState } from "react";
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
    lotteryPrice,
  } = useContext(ContractsContext);

  const [state, setState] = useState({
    lotteryTimeRemaining: 0,
    lotteryManager: null,
    lotteryEntryFee: 0,
    lotteryPlayers: [],
    lotteryWinner: null,
    lotteryPrice: 0,
  });

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
    <div className="flex-1 bg-main pt-5 space-y-8 text-slate-200">
      <motion.div
        className="container bg-zinc-900 mx-auto border border-slate-500 p-4 my-4 rounded-lg max-w-lg"
        variants={card}
        initial="hidden"
        animate="visible"
      >
        <h1 className="antialiased font-medium text-2xl tracking-wide">
          Lottery Game{" "}
          <span className="text-xs p-2 bg-slate-200 rounded-full text-teal-700 antialiased font-bold">
            Started
          </span>
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
            <span className="text-teal-400 text-xs">{lotteryManager}</span>
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

      <motion.div
        className="container mx-auto bg-zinc-900 border border-slate-500 p-5 my-4 rounded-lg max-w-lg"
        variants={card}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-row gap-2 justify-evenly">
          <button className="px-3 py-2 bg-green-400 rounded-lg text-slate-800 hover:shadow-lg hover:shadow-green-600">
            Start
          </button>
          <button className="px-3 py-2 bg-yellow-400 rounded-lg text-slate-800 hover:shadow-lg hover:shadow-yellow-600">
            Enter
          </button>
          <button className="px-3 py-2 bg-red-400 rounded-lg text-slate-800 hover:shadow-lg hover:shadow-red-600">
            End
          </button>
        </div>
      </motion.div>
      <motion.div
        className="container mx-auto border border-slate-700 text-slate-400 light-gradient p-4 my-4 rounded-lg max-w-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.1 }}
      >
        <h1 className="antialiased font-medium text-2xl tracking-wide">
          Players
        </h1>
        {/* <ul>
          {lotteryPlayers.map((player) => (
            <li>{player}</li>
          ))}
        </ul> */}
      </motion.div>
    </div>
  );
}

export default Lottery;
