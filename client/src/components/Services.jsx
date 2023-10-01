import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Services() {
  const { ref, inView } = useInView();
  const svgVariants = {
    hidden: {
      rotate: -180,
    },
    visible: {
      rotate: 0,
      transition: {
        staggerChildren: 1,
        duration: 1,
      },
    },
  };

  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 1,
        staggerChildren: 1.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div id="#services" className="bg-slate-800">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 text-gray-300">
        <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
          <div className="lg:w-1/2">
            <h2 className="max-w-md mb-6 font-sans text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl sm:leading-none xl:max-w-lg">
              Crypto Services you may{" "}
              <span className="inline-block text-indigo-400">like.</span>
            </h2>
          </div>
          <div className="lg:w-1/2">
            <p className="text-base text-gray-300 md:text-lg">
              For those who have seen the Earth from space, and for the hundreds
              and perhaps thousands more who will, the experience most certainly
              changes your perspective.
            </p>
          </div>
        </div>
        <div
          ref={ref}
          className="grid gap-8 row-gap-10 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4"
        >
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-slate-700">
              <motion.svg
                className="w-7 h-7 text-indigo-400"
                strokeLinecap="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                variants={svgVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <circle
                  cx="11"
                  cy="13"
                  fill="none"
                  r="9"
                  stroke="currentColor"
                />
                <motion.path
                  d=" M21.955,18.005c1.089,2.145,1.378,3.816,0.622,4.572C20.92,24.234,14.799,20.799,9,15S-0.234,3.08,1.423,1.423 C2.18,0.666,3.853,0.956,6,2.047"
                  stroke="currentColor"
                  fill="none"
                  variants={pathVariants}
                />
              </motion.svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Send Matic</h6>
            <p className="mb-3 text-sm text-gray-400 hidden sm:block">
              Transfer your Matic across the world. Play by sending fake Matic
              to friends.
            </p>
            <ul className="mb-4 -ml-1 space-y-2">
              <li className="flex items-start">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-indigo-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Real Time
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-indigo-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Smart Contract
              </li>
              <li className="flex items-start ">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-indigo-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Send Matic
              </li>
            </ul>
            <Link
              to={"/send-matic"}
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-indigo-400 hover:text-deep-purple-800"
            >
              Transfer Matic
            </Link>
          </div>
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-slate-700">
              <motion.svg
                className="w-7 h-7 text-indigo-400"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                variants={svgVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <motion.path
                  d="M2,10C2,5.029,6.47,1,12,1c5.379,0,10,4.029,10,9S15.712,23,12,23C8.212,23,2,14.971,2,10Z"
                  fill="none"
                  strokeWidth="2"
                  stroke="currentColor"
                  variants={pathVariants}
                />
                <motion.path
                  d="M5,9a6.529,6.529,0,0,1,4.393,1.607C10.705,11.92,10,15,10,15a6.59,6.59,0,0,1-3.436-1.564C5.022,11.894,5,9,5,9Z"
                  fill="none"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  variants={pathVariants}
                />
                <motion.path
                  d="M19,9a6.523,6.523,0,0,0-4.392,1.608C13.3,11.92,14,15,14,15a6.59,6.59,0,0,0,3.436-1.564C18.978,11.894,19,9,19,9Z"
                  fill="none"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  variants={pathVariants}
                />
              </motion.svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Lottery</h6>
            <p className="mb-3 text-sm text-gray-400 hidden sm:block">
              Enter a lottery game and get a chance to win Matic.
            </p>
            <ul className="mb-4 -ml-1 space-y-2">
              <li className="flex items-start">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-indigo-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Win Matic
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-indigo-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Transparent
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-indigo-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Smart Contract
              </li>
            </ul>
            <Link
              to={"/lottery"}
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-indigo-400 hover:text-deep-purple-800"
            >
              Enter Lottery
            </Link>
          </div>
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-slate-700">
              <motion.svg
                className="w-7 h-7 text-indigo-400"
                strokeLinecap="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                variants={svgVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <motion.path
                  d="M8.291,18.709,4.182,22.818c-.419.419-1.43.086-2.258-.742s-1.161-1.839-.742-2.258l4.11-4.11"
                  fill="none"
                  stroke="currentColor"
                  variants={pathVariants}
                />
                <ellipse
                  cx="19.078"
                  cy="4.922"
                  fill="none"
                  rx="2.5"
                  ry="4.95"
                  stroke="currentColor"
                  transform="translate(2.107 14.932) rotate(-45)"
                />
                <motion.path
                  d="M9.185,9.815,5.3,13.7c-.7.7-.143,2.382,1.238,3.762S9.6,19.4,10.3,18.7l3.885-3.885"
                  fill="none"
                  stroke="currentColor"
                  variants={pathVariants}
                />
                <motion.path
                  d="M15.578,1.422,9.422,7.578c-.976.976-.2,3.335,1.732,5.268s4.292,2.708,5.268,1.732l6.156-6.156"
                  fill="none"
                  stroke="currentColor"
                  variants={pathVariants}
                />
              </motion.svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Stake</h6>
            <p className="mb-3 text-sm text-gray-400 hidden sm:block">
              Earn interest on Matic staked by you, get upto 13%.
            </p>
            <ul className="mb-4 -ml-1 space-y-2">
              <li className="flex items-start">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-indigo-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Staking
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-indigo-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Earn Matic
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-indigo-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Liquidity
              </li>
            </ul>
            <Link
              to={"/stake"}
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-indigo-400 hover:text-deep-purple-800"
            >
              Stake Matic
            </Link>
          </div>
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-slate-700">
              <motion.svg
                className="w-7 h-7 text-indigo-400"
                strokeLinecap="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                variants={svgVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <motion.path
                  d="M8,13l3,3,9.379-9.379a2.122,2.122,0,0,0,0-3h0a2.122,2.122,0,0,0-3,0Z"
                  fill="none"
                  stroke="currentColor"
                  variants={pathVariants}
                />
                <polyline
                  fill="none"
                  points="10 11 10 6 6 2 3 5 7 9"
                  stroke="currentColor"
                />
                <polyline
                  fill="none"
                  points="15 12 15 17 19 21 22 18 18 14"
                  stroke="currentColor"
                />
                <motion.path
                  d="M8,23a7,7,0,0,1-7-7"
                  fill="none"
                  stroke="currentColor"
                  variants={pathVariants}
                />
                <motion.path
                  d="M8,19a3,3,0,0,1-3-3"
                  fill="none"
                  stroke="currentColor"
                  variants={pathVariants}
                />
              </motion.svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Buy Token</h6>
            <p className="mb-3 text-sm text-gray-400 hidden sm:block">
              For those who have want my token.
            </p>
            <ul className="mb-4 -ml-1 space-y-2">
              <li className="flex items-start">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-indigo-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Listen
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-indigo-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Communicate
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-indigo-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Run
              </li>
            </ul>
            <Link
              to={"/buy-token"}
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-indigo-400 hover:text-deep-purple-800"
            >
              Buy Token
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
