import React from "react";
import { motion } from "framer-motion";

function MakeSure() {

  return (
    <div className="grey-gradient">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-start max-w-screen-sm md:flex-row sm:mx-auto">
          <div className="mb-4 mr-8">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 border-t-2 border-b-2 border-slate-300">
              <motion.svg
                className="w-12 h-12 text-rose-500"
                stroke="currentColor"
                viewBox="0 0 52 52"
                whileInView={{
                  rotate: 360,
                  transition: { duration: 1 },
                }}
                whileHover={{
                  scale: 1.25,
                  transition: { duration: 0.5 },
                }}
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </motion.svg>
            </div>
          </div>
          <div>
            <p className="mb-2 text-xs font-bold font-sans tracking-wide text-red-500 uppercase">
              MAKE SURE TO
            </p>
            <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl sm:leading-none">
              Use a Test Network
            </h2>
            <p className="text-base text-gray-600 md:text-lg mb-2">
              This is a personal web3 project, thus smart contracts are deployed
              on ‘Ropsten Test Network’
            </p>
            <a
              target="_blank"
              href="https://ropsten.oregonctf.org/eth"
              rel="no-follow"
              className="text-base text-md font-semibold text-teal-600 hover:text-teal-700"
            >
              Get Ether for Ropsten test network {"⇢ "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MakeSure;
