import React, { useContext, useEffect, useState } from "react";
import { FaEthereum, FaDrawPolygon } from "react-icons/fa";
import { AiFillWarning } from "react-icons/ai";
import { Loader, Notification } from "../components";
import { ContractsContext } from "../context/ContractsContext";
import { motion } from "framer-motion";

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

function SendEther() {
  const {
    currentAccount,
    handleChange,
    sendTransaction,
    formData,
    isLoading,
    isEther,
    getBalanceOf,
    balance,
  } = useContext(ContractsContext);

  function handleSubmit(e) {
    {
      isLoading && <Loader />;
    }
    const { addressTo, amount, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !message) return;

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
  }, []);

  return (
    <div className="flex-1 bg-slate-900 text-slate-200">
      <div className="container mx-auto p-4">
        {/* eth card */}
        <motion.div
          className="relative group my-6"
          variants={card}
          initial="hidden"
          animate="visible"
        >
          <div
            className="absolute -inset-0.5 bg-gradient-to-r from-pink-700 
                    via-purple-600 to-blue-800 rounded-xl blur-lg opacity-50 max-w-md mx-auto group-hover:opacity-100 transition duration-700 group-hover:duration-300"
          ></div>
          <div
            className=" relative  p-4 max-w-md rounded-lg 
            bg-cover
            mx-auto min-h-[120px] flex flex-col justify-between bg-card"
          >
            <div className="flex flex-row h-[11rem] justify-between">
              <h3 className="text-2xl tracking-wide">
                <div className=" px-[4px] py-[3px] bg-slate-300 rounded-full mx-2 inline-flex my-auto">
                  <FaDrawPolygon className="text-slate-800" />
                </div>
                Polygon Mumbai
              </h3>
              <h5 className="antialiased tracking-wider font-mono">
                {balance}
                <span className="text-xs"> MATIC</span>
              </h5>
            </div>
            <h5 className="font-mono text-xs tracking-wider">
              {currentAccount ? currentAccount : "Not connected to a wallet"}
            </h5>
          </div>
        </motion.div>

        {/* form */}
        <motion.div
          className="max-w-md border bg-neutral-900 rounded-xl border-slate-500 mx-auto p-4 mb-4 "
          variants={card}
          initial="hidden"
          animate="visible"
        >
          {!isLoading ? (
            <>
              <h4 className="text-2xl text-slate-300 antialiased font-medium">
                Send Matic across the world
              </h4>
              <h6 className="text-xs text-red-500 antialiased tracking-widest font-semibold">
                {" "}
                <AiFillWarning className="inline " /> DO NOT USE REAL Matic
              </h6>
              <form>
                <Input
                  placeholder="Address To"
                  name="addressTo"
                  type="text"
                  handleChange={handleChange}
                />
                <Input
                  placeholder="Amount (MATIC)"
                  name="amount"
                  type="number"
                  handleChange={handleChange}
                />
                <Input
                  placeholder="Enter Message"
                  name="message"
                  type="text"
                  handleChange={handleChange}
                />
                <button
                  type="button"
                  disabled={!currentAccount}
                  onClick={handleSubmit}
                  className="w-full mt-2 bean disabled:cursor-not-allowed"
                >
                  {currentAccount ? "SEND NOW" : "⚠️ No Account Found"}
                </button>
              </form>
            </>
          ) : (
            <div className="bg-zinc-900 flex-1 items-center py-4 flex justify-center">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-teal-500" />
            </div>
          )}
        </motion.div>
      </div>
      <Notification
        props={{
          id: "Send MATIC",
          isEther,
          account: currentAccount,
        }}
      />
    </div>
  );
}

export default SendEther;
