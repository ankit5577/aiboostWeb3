import React, { useContext, useEffect, useState } from "react";
import { ContractsContext } from "../context/ContractsContext";

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

  return (
    <div className="flex-1 bg-slate-900 text-slate-400">
      <div className="container mx-auto border border-slate-500 p-4 my-4 rounded-lg max-w-lg">
        <h1 className="antialiased font-medium text-2xl tracking-wide">
          Lottery Game{" "}
          <span className="text-xs p-2 bg-slate-100 rounded-full text-teal-700 antialiased font-bold">
            started
          </span>
        </h1>
        <div>
          <h3 className="text-sm">
            Total Players:{" "}
            <span className="text-teal-400 text-lg">{lotteryPlayers.length}</span>
          </h3>
          <h3 className="text-sm">
            Manager: <span className="text-teal-400 text-xs">{lotteryManager}</span>
          </h3>
          <h3 className="text-sm">
            Entry Fee:{" "}
            <span className="text-teal-400 text-lg">
              {+lotteryEntryFee / 10 ** 18} 
            </span>ETH
          </h3>
          <h3 className="text-sm">
            Total Price:{" "}
            <span className="text-teal-400 text-lg">
              {+lotteryPrice / 10 ** 18}
            </span>ETH
          </h3>
        </div>
      </div>

      <div className="container mx-auto border border-slate-500 p-4 my-4 rounded-lg max-w-lg">
        <div className="flex flex-row gap-2 justify-evenly">
          <button className="px-3 py-2 bg-green-400 rounded-lg text-slate-800 hover:shadow-lg hover:shadow-green-900">
            start
          </button>
          <button className="px-3 py-2 bg-yellow-400 rounded-lg text-slate-800 hover:shadow-lg hover:shadow-yellow-900">
            enter
          </button>
          <button className="px-3 py-2 bg-red-400 rounded-lg text-slate-800 hover:shadow-lg hover:shadow-red-900">
            end
          </button>
        </div>
      </div>
      <div className="container mx-auto border border-slate-500 p-4 my-4 rounded-lg max-w-lg">
        <h1 className="antialiased font-medium text-2xl tracking-wide">
          Players
        </h1>
        <ul>
          {lotteryPlayers.map((player) => (
            <li>{player}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Lottery;
