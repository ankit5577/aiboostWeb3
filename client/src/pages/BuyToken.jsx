import React, { useState, useEffect, useContext, useRef } from "react";
import { Loader } from "../components";
import { ContractsContext } from "../context/ContractsContext";

function BuyToken() {
  const { initToken, token, buyTokens, isLoading } =
    useContext(ContractsContext);
  const inputRef = useRef();

  useEffect(() => {
    console.log("hellow");
    initToken();
  }, []);

  return (
    <div className="flex-1 bg-slate-900">
      <div className="container mx-auto p-4 my-4 border border-slate-500 rounded-lg max-w-lg text-slate-300">
        <h2 className="text-xl antialiased font-medium">AiBoost Token (AiB)</h2>
        <h3 className="text-slate-400 text-sm">
          Token Price is{" "}
          <span className="text-teal-500 font-medium">{token.price}</span> Ether
          & you have{" "}
          <span className="text-teal-500 font-medium">{token.balance}</span> AiB
        </h3>
        <h3 className="text-slate-400 text-sm">
          Token Sold:{" "}
          <span className="text-teal-500 font-medium">
            {token.sold} / 1000000
          </span>
        </h3>
      </div>

      <div className="container mx-auto p-4 my-4 border border-slate-500 rounded-lg max-w-lg text-slate-300">
        <h2 className="text-xl antialiased font-medium">Buy AiBoost (AiB)</h2>
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
          {isLoading ? <Loader /> : (
            <button
              type="button"
              onClick={() => {
                buyTokens(+inputRef.current.value);
              }}
              className="text-teal-600 font-semibold w-full mt-2 border p-2 border-teal-600 
                 transition duration-200 hover:bg-teal-600 hover:text-slate-800 rounded-full cursor-pointer
                 disabled:bg-slate-300 disabled:text-slate-800 disabled:cursor-not-allowed"
            >
              BUY AIBOOST TOKEN
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default BuyToken;
