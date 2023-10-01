import React, { useContext, useEffect, useState, useRef, useMemo } from "react";
import { Notification } from "../components";
import { AiFillWarning } from "react-icons/ai";
import { ContractsContext } from "../context/ContractsContext";
import { motion } from "framer-motion";
import { shortenAddress } from "../utils/shortenAddress";

import { RiSendPlaneFill } from "react-icons/ri";
import { useParams } from "react-router";
import useFastReload from "../hooks/useReload";

const LotteryStatus = {
  NOT_STARTED: 1,
  STARTED: 2,
  ENDED: 3,
};

const LotteryInfo = ({
  lotteryStatus,
  card,
  lotteryManager,
  lotteryPlayers,
  lotteryEntryFee,
  lotteryPrice,
}) => {
  return (
    <motion.div
      className="container bg-neutral-900 mx-auto shadow-lg border border-slate-700 my-4 rounded-lg max-w-lg p-4"
      variants={card}
      initial="hidden"
      animate="visible"
    >
      <h1 className="antialiased font-medium text-2xl tracking-wide">
        Lottery Game{" "}
        {lotteryStatus == LotteryStatus.STARTED && (
          <span className="text-xs p-2 bg-slate-600 shadow-md shadow-slate-800 rounded-full text-teal-200 antialiased font-bold">
            Started
          </span>
        )}
        {lotteryStatus == LotteryStatus.ENDED && (
          <span className="text-xs p-2 bg-slate-300 shadow-lg shadow-slate-600 rounded-full text-rose-600 antialiased font-bold">
            Ended
          </span>
        )}
        <span className="text-xs p-2 mx-2 bg-slate-800 shadow-sm shadow-slate-900 rounded-full antialiased font-bold">
          <a
            href={`https://mumbai.polygonscan.com/address/${lotteryManager}`}
            target="_blank"
            rel="noreferrer"
            className="text-xs tracking-wider uppercase text-teal-400"
          >
            Manager
            <RiSendPlaneFill className="text-teal-400 inline-block" />
          </a>
        </span>
      </h1>
      <div className="pt-5">
        <h3 className="pb-2 text-slate-300 antialiased text-md">
          Total Players :{" "}
          <span className="text-teal-400 text-lg">{lotteryPlayers.length}</span>
        </h3>
        <h3 className="pb-2 text-slate-300 antialiased text-md">
          Entry Fee :{" "}
          <span className=" text-teal-400 text-md">
            {+lotteryEntryFee / 10 ** 18}
          </span>{" "}
          ETH
        </h3>
        <h3 className="pb-2 text-slate-300 antialiased text-md">
          Winning Price :{" "}
          <span className="text-teal-400 text-md">{lotteryPrice}</span> MATIC
        </h3>
      </div>
    </motion.div>
  );
};

function Lottery() {
  const { lotteryAddress } = useParams();

  const {
    initLotteryContract,
    lotteryManager,
    lotteryEntryFee,
    lotteryPlayers,
    winner,
    lotteryPrice,
    isLoading,
    startLottery,
    lotteryStatus,
    enterLottery,
    lotteryTimeRemaining,
    lotteryTimeRemainingFn,
    endLottery,
    isEther,
    currentAccount,
    provider,
  } = useContext(ContractsContext);

  const fastReload = useFastReload();

  const [blockTimeStamp, setBlockTimeStamp] = useState(0);

  useEffect(() => {
    if (provider) {
      provider.getBlock().then((block) => {
        setBlockTimeStamp(() => +block.timestamp);
      });
    }
  }, [blockTimeStamp]);

  useEffect(async () => {
    await lotteryTimeRemainingFn();
  }, [lotteryStatus, fastReload]);

  const inputRef = useRef();

  useEffect(() => {
    async function load() {
      await initLotteryContract(lotteryAddress);

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
    <div className="flex-1 bg-slate-900 space-y-8 text-slate-200 p-4">
      <LotteryInfo
        card={card}
        lotteryPrice={lotteryPrice}
        lotteryPlayers={lotteryPlayers}
        lotteryManager={lotteryManager}
        lotteryStatus={lotteryStatus}
        lotteryEntryFee={lotteryEntryFee}
      />

      {/* // ? if no wallet connected */}
      {!currentAccount ? (
        <motion.div
          className="container mx-auto bg-neutral-900 shadow-lg border border-slate-700 p-5 my-4 rounded-lg max-w-lg"
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
          className="container mx-auto bg-zinc-900 shadow-lg border border-slate-700 p-5 my-4 rounded-lg max-w-lg"
          variants={card}
          initial="hidden"
          animate="visible"
        >
          {!isLoading ? (
            <div className="container mx-auto">
              <>
                <form action="">
                  <div className="flex justify-center space-x-9">
                    <h6 className="text-xs pt-3 text-teal-500 antialiased tracking-widest uppercase font-semibold">
                      {" "}
                      <AiFillWarning className="inline" /> You are the Lottery
                      Manager
                    </h6>
                    {lotteryStatus == LotteryStatus.ENDED ||
                      (lotteryTimeRemaining <= 0 && !winner && (
                        <button
                          type="button"
                          className="px-7 py-2 bg-red-400 rounded-lg text-slate-800 hover:shadow-lg hover:shadow-red-600"
                          onClick={() => {
                            endLottery();
                          }}
                        >
                          End Now
                        </button>
                      ))}
                  </div>
                </form>
              </>
              <>
                <div className="tracking-wider text-slate-200 justify-evenly">
                  <h6 className="text-xs text-red-500 antialiased tracking-widest uppercase font-semibold">
                    {" "}
                    <AiFillWarning className="inline" /> Only Use Polygon Mumbai
                    Testnet Network
                  </h6>
                  <h1 className="pt-4 text-sm text-slate-400 text-justify">
                    {" "}
                    The lottery Manager can start the lottery and it will end
                    after the remaining time has passed.
                  </h1>

                  {lotteryStatus != LotteryStatus.ENDED &&
                    (lotteryTimeRemaining > 0 && (
                      <div className="pt-5 flex justify-center">
                        <button
                          type="button"
                          className="px-7 py-2 bg-yellow-400 rounded-lg text-slate-800 hover:shadow-lg hover:shadow-yellow-600"
                          disabled={isLoading}
                          onClick={() => {
                            enterLottery();
                          }}
                        >
                          Enter
                        </button>
                      </div>
                    ))}
                </div>
              </>
            </div>
          ) : (
            // loader
            <div className="bg-zinc-900 flex-1 items-center py-4 flex justify-center">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-teal-500" />
            </div>
          )}
        </motion.div>
      )}

      {lotteryPlayers.length >= 1 ? (
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
                href={`https://mumbai.polygonscan.com/address/${player}`}
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

      {/* WINNER */}
      {lotteryStatus == LotteryStatus.ENDED ? (
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
              href={`https://mumbai.polygonscan.com/address/${winner}`}
              target="_blank"
              rel="noreferrer"
              className="tracking-wide uppercase text-teal-400 hover:cursor-pointer"
            >
              {winner}
            </a>
          </p>
        </motion.div>
      ) : (
        " "
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
