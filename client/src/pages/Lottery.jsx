import React, { useContext, useEffect, useState, useRef } from "react";
import { Notification } from "../components";
import { AiFillWarning } from "react-icons/ai";
import { ContractsContext } from "../context/ContractsContext";
import { motion } from "framer-motion";
import { shortenAddress } from "../utils/shortenAddress";

function Lottery() {
  const {
    initLottery,
    lotteryManager,
    lotteryEntryFee,
    lotteryPlayers,
    winner,
    lotteryPrice,
    isLotteryInit,
    startLottery,
    lotteryStatus,
    enterLottery,
    endLottery,
    isEther,
    currentAccount,
  } = useContext(ContractsContext);

  const [state, setState] = useState({
    lotteryTimeRemaining: 0,
    lotteryManager: null,
    lotteryEntryFee: 0,
    lotteryPlayers: [],
    lotteryWinner: null,
    lotteryPrice: 0,
  });

  const [manager, setIsManager] = useState(false);
  const [participate, setIsParticipate] = useState(false);

  useEffect(() => {
    if (
      currentAccount === lotteryManager.toLowerCase() &&
      (currentAccount || lotteryManager.toLowerCase() !== null)
    ) {
      setIsManager(true);
    }
  });

  
  let lotteryWinner = "";
  
  if (winner !== "0x0000000000000000000000000000000000000000") {
    lotteryWinner = winner;
  }
  
  if (
    typeof lotteryStatus === "object" &&
    !Array.isArray(lotteryStatus) &&
    lotteryStatus !== null
  ) {
    alert(
      `Participation Successful! Transaction Hash: ${lotteryStatus.hash} \n From: ${currentAccount}`
      );
    // setIsParticipate(true);
  }
  
  console.log("💀", isLotteryInit, lotteryStatus, participate);

  useEffect(() => {
    async function load() {
      await initLottery();

      setState(() => {
        return {
          ...state,
          lotteryManager,
          lotteryEntryFee,
          lotteryPlayers,
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
          {lotteryStatus == "1" && (
            <span className="text-xs p-2 bg-slate-300 shadow-lg shadow-slate-600 rounded-full text-teal-600 antialiased font-bold">
              Started
            </span>
          )}
          {lotteryStatus == "2" && (
            <span className="text-xs p-2 bg-slate-300 shadow-lg shadow-slate-600 rounded-full text-rose-600 antialiased font-bold">
              Ended
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
            <span className=" text-teal-400 text-lg">
              {+lotteryEntryFee / 10 ** 18}
            </span>{" "}
            ETH
          </h3>
          <h3 className="text-sm">
            Winning Price:{" "}
            <span className="text-teal-400 text-lg">{lotteryPrice}</span> ETH
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
          {isLotteryInit ? (
            <div className="container mx-auto">
              {manager ? (
                <>
                  <form action="">
                    <div className="flex justify-center gap-3">
                      {lotteryStatus != "1" ? (
                        <button
                          type="button"
                          className="px-7 py-2 bg-green-400 rounded-lg text-slate-800 hover:shadow-lg hover:shadow-green-600"
                          onClick={() => {
                            startLottery();
                          }}
                        >
                          Start
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="px-7 py-2 bg-red-400 rounded-lg text-slate-800 hover:shadow-lg hover:shadow-red-600"
                          onClick={() => {
                            endLottery();
                          }}
                        >
                          End Now
                        </button>
                      )}
                    </div>
                  </form>
                </>
              ) : (
                <>
                  {lotteryStatus == "1" && !participate ? (
                    <div className="tracking-wider text-slate-200 justify-evenly">
                      <h6 className="text-xs text-red-500 antialiased tracking-widest uppercase font-semibold">
                        {" "}
                        <AiFillWarning className="inline" /> Only Use Ropsten
                        Test Network
                      </h6>
                      <h1 className="pt-4 text-sm text-slate-400 text-justify">
                        {" "}
                        The lottery Manager can start the lottery and it will
                        end after the remaining time has passed.
                      </h1>
                      <div className="pt-5 flex justify-center">
                        <button
                          type="button"
                          className="px-7 py-2 bg-yellow-400 rounded-lg text-slate-800 hover:shadow-lg hover:shadow-yellow-600"
                          disabled={!isLotteryInit}
                          onClick={() => {
                            enterLottery();
                          }}
                        >
                          Enter
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="tracking-wider text-slate-200 justify-evenly">
                      <h6 className="text-xs text-red-500 antialiased tracking-widest uppercase font-semibold">
                        {" "}
                        <AiFillWarning className="inline" /> Only Use Ropsten
                        Test Network
                      </h6>
                      <h1 className="pt-4 text-sm text-slate-400 text-justify">
                        {" "}
                        The lottery Manager will start the lottery soon don't
                        forget to participate to win the prize money.
                      </h1>
                    </div>
                  )}
                </>
              )}
            </div>
          ) : (
            <div className="bg-zinc-900 flex-1 items-center py-4 flex justify-center">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-teal-500" />
            </div>
          )}
        </motion.div>
      )}
      {currentAccount && (
        <>
          {lotteryPlayers.length > 1 ? (
            <motion.div
              className="container mx-auto border border-slate-700 text-slate-400 light-gradient p-4 my-4 rounded-lg max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2.1 }}
            >
              <h1 className="antialiased font-medium text-2xl tracking-wide">
                Players
              </h1>
              {lotteryPlayers.map((player, i) => (
                <p key={i} className="pt-3 text-teal-400">
                  <a
                    href={`https://ropsten.etherscan.io/address/${player}`}
                    target="_blank"
                    rel="noreferrer"
                    className="tracking-wide uppercase text-teal-400 hover:cursor-pointer"
                  >
                    {shortenAddress(player)}
                  </a>
                </p>
              ))}
            </motion.div>
          ) : (
            ""
          )}
          {lotteryStatus == "2" ? (
            <motion.div
              className="container mx-auto border border-slate-700 text-slate-400 light-gradient p-4 my-4 rounded-lg max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2.1 }}
            >
              <h1 className="antialiased font-medium text-2xl tracking-wide">
                Winner
              </h1>
              <p className="pt-3 text-teal-400 hover:cursor-pointer">
                <a
                  href={`https://ropsten.etherscan.io/address/${lotteryWinner}`}
                  target="_blank"
                  rel="noreferrer"
                  className="tracking-wide uppercase text-teal-400 hover:cursor-pointer"
                >
                  {lotteryWinner}
                </a>
              </p>
            </motion.div>
          ) : (
            " "
          )}
        </>
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
