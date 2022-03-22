import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loader } from "../components";
import { ContractsContext } from "../context/ContractsContext";

function LotteryPool() {
  const [blockTimeStamp, setBlockTimeStamp] = useState(0);

  // lotteriesAddresses
  const {
    lotteriesDetails,
    initLotteryPool,
    startLottery,
    isLoading,
    provider,
  } = useContext(ContractsContext);

  useEffect(() => {
    initLotteryPool();
    if (provider) {
      provider.getBlock().then((block) => {
        setBlockTimeStamp(() => +block.timestamp);
      });
    }
  }, [blockTimeStamp]);

  const createLottery = () => {
    const timeInMinutes = prompt("lottery end time in minutes?");
    startLottery(+timeInMinutes);
  };

  const getRemainingTime = (timestamp) => {
    return Math.floor((timestamp - blockTimeStamp) / 60);
  };

  return (
    <div className="flex-1 bg-slate-900 space-y-8 text-slate-200 p-4">
      <div className="container mx-auto max-w-8xl p-4">
        <button
          className="border border-teal-400 p-2 rounded-lg text-teal-400 my-4 hover:shadow-lg hover:shadow-teal-900"
          onClick={createLottery}
        >
          create lottery
        </button>

        <h2 className="text-4xl font-thin py-2 text-teal-400 tracking-wide">
          Available Lotteries
        </h2>
        <div className="flex flex-row gap-4 flex-wrap">
          {isLoading && <Loader full={true} />}
          {lotteriesDetails.length > 0 &&
            !isLoading &&
            lotteriesDetails.map((lottery, index) => {
              if (index > 5) {
                return;
              }
              if (+getRemainingTime(lottery.endedTimeStamp) > 0) {
                return (
                  <Link
                    to={`/lottery/${lottery.lotteryContract}`}
                    key={lottery.lotteryContract}
                    className="p-4 w-xs border border-indigo-400 rounded-xl bg-slate-800 transition duration-300 hover:shadow-lg hover:shadow-indigo-900"
                  >
                    <h2 className="text-indigo-500 font-bold text-2xl tracking-wider">
                      lottery #{index + 1}
                    </h2>
                    {/*  */}
                    <span>
                      Ending in{" "}
                      <span className="text-teal-600 font-semibold">
                        {getRemainingTime(lottery.endedTimeStamp)}
                        {" mins"}
                      </span>
                    </span>
                    <p className="truncate">
                      address:{" "}
                      <span className="text-xs text-teal-500">
                        {lottery.lotteryContract}
                      </span>
                    </p>
                  </Link>
                );
              }
            })}
          {!(lotteriesDetails.length > 0 || isLoading) && (
            <p>No Lottery Available</p>
          )}
        </div>
        <h2 className="text-4xl font-thin py-2 text-teal-400 tracking-wide mt-4">
          Ended Lotteries
        </h2>
        <div className="flex flex-row gap-4 flex-wrap">
          {isLoading && <Loader full={true} />}
          {lotteriesDetails.length > 0 &&
            !isLoading &&
            lotteriesDetails.map((lottery, index) => {
              if (index > 5) {
                return;
              }
              if (+getRemainingTime(lottery.endedTimeStamp) < 0) {
                return (
                  <Link
                    to={`/lottery/${lottery.lotteryContract}`}
                    key={lottery.lotteryContract}
                    className="p-4 w-xs opacity-50 transform  blur-[0.5px] border border-red-600 rounded-xl bg-slate-800"
                  >
                    <h2 className="text-red-500 font-bold text-2xl tracking-wider">
                      lottery #{index + 1}
                    </h2>
                    {/*  */}
                    <span>
                      Ending in{" "}
                      <span className="text-red-600 font-semibold">
                        {getRemainingTime(lottery.endedTimeStamp)}
                        {" mins"}
                      </span>
                    </span>
                    <p className="truncate">
                      address:{" "}
                      <span className="text-xs text-teal-500">
                        {lottery.lotteryContract}
                      </span>
                    </p>
                  </Link>
                );
              }
            })}
        </div>
        {!(lotteriesDetails.length > 0 || isLoading) && (
          <p>No Lottery Available</p>
        )}
      </div>
    </div>
  );
}

export default LotteryPool;
