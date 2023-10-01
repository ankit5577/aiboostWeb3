import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { GiReceiveMoney } from "react-icons/gi";
import { BsCashCoin } from "react-icons/bs";
import { MdMoney } from "react-icons/md";
import { FaEthereum } from "react-icons/fa";

const Welcome = () => {
  const welcomeVarients = {
    hiddenImg: {
      opacity: 0,
      x: "-50vw",
    },
    visibleImg: {
      opacity: 1,
      x: 10,
      transition: {
        type: "spring",
        mass: 2,
        damping: 14,
        stiffness: 40,
        delay: 0.2,
      },
    },
  };

  return (
    <div>
      <div className="relative bg-slate-800 px-4 py-16 mx-auto block lg:flex-col lg:py-32 xl:py-48 md:px-8 md:max-w-full">
        <motion.div
          variants={welcomeVarients}
          initial="hiddenImg"
          animate="visibleImg"
          className="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-10 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center"
        >
          <img
            src="https://kitwind.io/assets/kometa/laptop.png"
            className="bg-laptop object-cover object-right w-full h-auto lg:w-auto lg:h-full"
            alt=""
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="relative flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl"
        >
          <div className=" lg:pr-5 lg:max-w-lg lg:mb-0">
            <div className="max-w-xl mb-6">
              <p className="inline-block mb-2 text-xs font-semibold tracking-wider text-teal-400 uppercase rounded-full bg-teal-accent-400">
                Fully secured
              </p>
              <h2 className="max-w-lg mb-2 font-sans text-3xl font-bold tracking-wide text-slate-300 sm:text-4xl sm:leading-none">
                Send Cryto across {" "}
                <br className="hidden md:block" />
                 the <span className="inline-block text-indigo-400">world.</span>
              </h2>
              <p className="text-base text-slate-400 md:text-lg">
                Transfer funds, buy tokens and play a game all at one place.
              </p>
            </div>

            <div className="flex flex-row border-b border-slate-600">
              <Link
                to={"/buy-token"}
                className="group flex-1 p-8 border-r border-slate-600 text-indigo-400 font-semibold tracking-widest transition duration-200 hover:text-slate-100 hover:bg-indigo-900"
              >
                <BsCashCoin className="text-4xl inline-block mx-2  text-indigo-500 transition duration-300 group-hover:text-slate-100" />
                Buy Tokens
              </Link>

              <Link
                to={"/stake"}
                className="group relative overflow-hidden flex-1 p-8 text-indigo-400 font-semibold tracking-widest transition duration-200 hover:text-slate-100 hover:bg-indigo-900"
              >
                <GiReceiveMoney className="text-4xl inline-block mx-2  text-indigo-500 transition duration-300 group-hover:text-slate-100" />
                Stake
              </Link>
            </div>

            <div className="flex flex-row">
              <Link
                to={"/lottery"}
                className="group flex-1 p-8 border-r border-slate-600 text-indigo-400 font-semibold tracking-widest transition duration-200 hover:text-slate-100 hover:bg-indigo-900"
              >
                <MdMoney className="text-4xl inline-block mx-2  text-indigo-500 transition duration-300 group-hover:text-slate-100" />
                Lottery
              </Link>

              <Link
                to={"/send-Matic"}
                className="group flex-1 p-8 text-indigo-400 font-semibold tracking-widest transition duration-200 hover:text-slate-100 hover:bg-indigo-900"
              >
                <FaEthereum className="text-4xl inline-block mx-2  text-indigo-500 transition duration-300 group-hover:text-slate-100" />
                Send Matic
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Welcome;
