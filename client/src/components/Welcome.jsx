import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
      <div className="relative bg-slate-800 px-4 py-16 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full">
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
          <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
            <div className="max-w-xl mb-6">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-400 uppercase rounded-full bg-teal-accent-400">
                  Fully secured
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-slate-300 sm:text-4xl sm:leading-none">
                Send Cryto across
                <br className="hidden md:block" />
                the <span className="inline-block text-indigo-400">world.</span>
              </h2>
              <p className="text-base text-slate-400 md:text-lg">
                Transfer funds, buy tokens and play a game all at one place.
              </p>
            </div>
            <div className="flex flex-row">
              <button
                type="submit"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white rounded rounded-tl-3xl shadow-inner shadow-cyan-800  hover:shadow-cyan-600  focus:shadow-outline focus:outline-none"
              >
                <Link
                  to={"/buy-token"}
                  aria-label="Buy AiBoost Token"
                  title="Buy Token"
                >
                  Buy Tokens
                </Link>
              </button>
              <button
                type="submit"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white rounded shadow-inner shadow-cyan-800 hover:shadow-cyan-600 focus:shadow-outline focus:outline-none"
              >
                <Link
                  to={"/farm"}
                  aria-label="Farm Crypto"
                  title="Stake Crypto"
                >
                  Farm
                </Link>
              </button>
            </div>
            <div className="flex items-center mt-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white rounded shadow-inner  shadow-cyan-800  hover:shadow-cyan-600 focus:shadow-outline focus:outline-none"
              >
                <Link
                  to={"/lottery"}
                  aria-label="Play Lottery Game"
                  title="Etherium Lottery"
                >
                  Lottery
                </Link>
              </button>
              <button
                type="submit"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white rounded rounded-br-3xl shadow-inner shadow-cyan-800  hover:shadow-cyan-600 focus:shadow-outline focus:outline-none"
              >
                <Link
                  to={"/send-ether"}
                  aria-label="Send ETH anywhere"
                  title="Send Etherium"
                >
                  Send ETH
                </Link>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Welcome;
