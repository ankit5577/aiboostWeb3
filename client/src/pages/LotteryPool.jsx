import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ContractsContext } from "../context/ContractsContext";

function LotteryPool() {
  // lotteriesAddresses
  const { lotteriesDetails, initLotteryPool, startLottery } =
    useContext(ContractsContext);

  useEffect(async () => {
    initLotteryPool();
  }, []);

  const createLottery = () => {
    const timeInMinutes = prompt("lottery end time in minutes?");
    startLottery(+timeInMinutes);
  };

  const getRemainingTime = (timestamp) => {
    let currDateTime = new Date(Date.now());
    let filteredTimestamp = new Date(timestamp);
    console.log(filteredTimestamp, '---', currDateTime)
    
    // return  - currDateTime.getTime();
  }

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
          {lotteriesDetails.length > 0 &&
            lotteriesDetails.map((lottery, index) => (
              <Link to={`/lottery/${lottery.lotteryContract}`}
                key={lottery.lotteryContract}
                className="p-4 w-full md:min-w-[120px] md:min-h-[70px] md:max-w-[340px] md:max-h-[100px] border border-indigo-400 rounded-xl bg-slate-800"
              >
                <h2 className="text-slate-300 font-semibold tracking-wider text-xl">
                  lottery #{index + 1}
                </h2>
                <span>Ending in {getRemainingTime(lottery.endedTimeStamp)}</span>
                <p className="truncate">
                  address: <span className="text-xs text-teal-500">{lottery.lotteryContract}</span>
                </p>
              </Link>
            ))}
        </div>
        {!(lotteriesDetails.length > 0) && <p>No Lottery Available</p>}
      </div>
    </div>
  );
}

export default LotteryPool;
