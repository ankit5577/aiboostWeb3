import React, { useContext, useEffect, useState } from "react";
import { FaEthereum } from "react-icons/fa";
import { AiFillWarning } from "react-icons/ai";
import { Loader } from "../components";
import { ContractsContext } from "../context/ContractsContext";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

function SendEther() {
  const {
    currentAccount,
    handleChange,
    sendTransaction,
    formData,
    isLoading,
    getBalanceOf,
    balance,
  } = useContext(ContractsContext);

  function handleSubmit(e) {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  }

  async function getBalance(address = currentAccount) {
    if (!address) {
      return;
    }
    await getBalanceOf(address);
  }

  useEffect(() => {
    getBalance();
  }, [currentAccount]);

  return (
    <div className="flex-1 bg-slate-900 text-slate-300">
      <div className="container mx-auto p-4">
        {/* eth card */}
        <div className="relative group my-4">
          <div
            className="absolute -inset-0.5 bg-gradient-to-r from-pink-700 
                    via-purple-600 to-blue-800 rounded-lg blur opacity-80 max-w-md mx-auto group-hover:opacity-100 transition duration-700 group-hover:duration-300"
          ></div>
          <div
            className=" relative  p-4 max-w-md rounded-lg 
            bg-cover
            mx-auto min-h-[120px] flex flex-col justify-between bg-[url('https:images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')]"
          >
            <div className="flex flex-row justify-between">
              <h3 className="text-2xl tracking-wide">
                <div className=" px-[4px] py-[3px] bg-slate-300 rounded-full mx-2 inline-flex my-auto">
                  <FaEthereum className="text-slate-800" />
                </div>
                Ethereum
              </h3>
              <h5 className="antialiased tracking-wider font-mono">
                {balance}<span className="text-xs"> ETH</span>
              </h5>
            </div>
            <h5 className="font-mono text-xs tracking-wider">
              {currentAccount ? currentAccount : "Not connected to a wallet"}
            </h5>
          </div>
        </div>

        {/* form */}
        <div className="max-w-md border rounded-xl border-slate-500 mx-auto p-4 bg-zinc-900">
          <h4 className="text-2xl text-slate-400 antialiased font-medium">
            Send Ether across the world
          </h4>
          <h6 className="text-xs text-red-600 antialiased tracking-widest font-semibold">
            {" "}
            <AiFillWarning className="inline " /> DO NOT USE REAL ETHER
          </h6>
          <form>
            <Input
              placeholder="Address To"
              name="addressTo"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Amount (ETH)"
              name="amount"
              type="number"
              handleChange={handleChange}
            />
            <Input
              placeholder="Keyword (Gif)"
              name="keyword"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Enter Message"
              name="message"
              type="text"
              handleChange={handleChange}
            />
            {isLoading ? (
              <Loader />
            ) : (
              <button
                type="button"
                disabled={!currentAccount}
                onClick={handleSubmit}
                className="text-teal-600 font-semibold w-full mt-2 border p-2 border-teal-600 
                 transition duration-200 hover:bg-teal-600 hover:text-slate-800 rounded-full cursor-pointer
                 disabled:bg-slate-300 disabled:text-slate-800 disabled:cursor-not-allowed"
              >
                {currentAccount ? "Send now" : "No Account Found"}
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default SendEther;
