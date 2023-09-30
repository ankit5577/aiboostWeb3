import React, { useContext, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { ContractsContext } from "../context/ContractsContext";
import { useInView } from "react-intersection-observer";
import { shortenAddress } from "../utils/shortenAddress";

const TransactionsCard = ({
  addressTo,
  addressFrom,
  timestamp,
  message,
  amount,
}) => {
  const dateArr = timestamp.split(" ");
  const meridiem = dateArr[2];
  const timeArr = dateArr[1].split(":");
  timeArr.pop();
  const time = timeArr.join(":");

  const tranDate = new Date(timestamp);
  const date = tranDate.getDate();
  const strDate = tranDate.toString();
  const month = strDate.slice(4, 7).toUpperCase();

  let bigMessage = false;
  let smallMessage = "";
  if (message.length > 130) {
    bigMessage = true;
    smallMessage = message.split(" ").slice(0, 1).join(" ");
  }

  return (
    <>
      {
        <div className="px-4 py-2 flex-1 mx-auto sm:max-w-xl md:max-w-full md:px-0 lg:max-w-xl lg:px-8 lg:py-26">
          <div className="grid gap-5 lg:grid-cols-1 md:grid-cols-1 sm:max-w-sm sm:mx-auto lg:max-auto">
            <div className="bg-[#1B2536] p-8 transition-shadow duration-300 border border-cyan-800 rounded-xl group hover:shadow-slate-700 hover:shadow-xl">
              <div className="grid gap-8 lg:grid-cols-2 sm:max-w-sm sm:mx-auto lg:max-w-full">
                <div className="flex">
                  <div className="pt-1 mr-6 text-center">
                    <div className="px-2 pb-1 mb-1 border-b border-gray-500">
                      <p className="text-sm text-slate-300">{month}</p>
                    </div>
                    <div className="px-2">
                      <p className="text-lg text-slate-300 font-bold">{date}</p>
                    </div>

                    <div className="pt-20 bottom w-full">
                      <div className="flex pb-1 mb-1">
                        <p className="text-lg text-slate-300 font-bold pb-1 border-b border-gray-500">
                          {time}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-slate-300">{meridiem}</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative border-slate-700 duration-300 border-l-4 rounded-full right-3 group-hover:scale-105 group-hover:border-cyan-800" />
                  <div>
                    <div className="mb-2">
                      <a
                        href={`https://mumbai.polygonscan.com/address/${addressFrom}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs tracking-wide uppercase text-slate-300"
                      >
                        From
                      </a>
                    </div>
                    <div className="mb-5">
                      <a
                        href={`https://mumbai.polygonscan.com/address/${addressFrom}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <p className="inline-block text-base font-semibold leading-5 text-slate-300">
                          {shortenAddress(addressFrom)}
                        </p>
                      </a>
                    </div>
                    <p className=" flex flex-1 gap-1 text-teal-500 font-medium">
                      {amount}
                      <svg
                        width="28"
                        height="25"
                        viewBox="0 3 68 104"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="Group 1">
                          <g id="Group">
                            <g id="Ethereum">
                              <g id="Bottom">
                                <g id="Purple2">
                                  <path
                                    id="Vector"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M67.616 58.629L33.9263 103.31V78.2247L67.616 58.629Z"
                                    fill="#7B3EC8"
                                    stroke="#3441C0"
                                    strokeWidth="0.01116"
                                    strokeMiterlimit="7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </g>
                                <g id="Yellow2">
                                  <path
                                    id="Vector_2"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0.239307 58.629L33.929 103.31V78.2247L0.239307 58.629Z"
                                    fill="#7680E3"
                                    stroke="#3441C0"
                                    strokeWidth="0.01116"
                                    strokeMiterlimit="7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </g>
                              </g>
                              <g id="Top">
                                <g id="Blue1">
                                  <path
                                    id="Vector_3"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0.231445 53.451L33.9275 38.4687V72.6233L0.231445 53.451Z"
                                    fill="#7B3EC8"
                                    stroke="#3441C0"
                                    strokeWidth="0.0111628"
                                    strokeMiterlimit="7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </g>
                                <g id="Purple1">
                                  <path
                                    id="Vector_4"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M67.6216 53.451L33.9256 38.4687V72.6233L67.6216 53.451Z"
                                    fill="#354B70"
                                    stroke="#3441C0"
                                    strokeWidth="0.0111628"
                                    strokeMiterlimit="7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </g>
                                <g id="Yellow1">
                                  <path
                                    id="Vector_5"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0.239332 53.45L33.929 0.579742V38.4678L0.239332 53.45Z"
                                    fill="#7680E3"
                                    stroke="#3441C0"
                                    strokeWidth="0.01116"
                                    strokeMiterlimit="7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </g>
                                <g id="Green1">
                                  <path
                                    id="Vector_6"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M67.616 53.45L33.9263 0.579742V38.4678L67.616 53.45Z"
                                    fill="#A894D0"
                                    stroke="#3441C0"
                                    strokeWidth="0.01116"
                                    strokeMiterlimit="7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </p>
                    {message && (
                      <>
                        <p className="mt-2 mb-2 text-justify text-slate-300 font-medium">
                          {bigMessage
                            ? smallMessage + " ...Read More"
                            : message}
                        </p>
                      </>
                    )}
                    <div className="flex items-center">
                      <div className="mb-2">
                        <a
                          href={`https://mumbai.polygonscan.com/address/${addressFrom}`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs tracking-wide uppercase text-slate-300"
                        >
                          <p
                            className={
                              message
                                ? `pt-2 text-xs tracking-wide uppercase text-slate-300`
                                : `pt-11 text-xs tracking-wide uppercase text-slate-300`
                            }
                          >
                            To
                          </p>
                        </a>
                        <a
                          href={`https://mumbai.polygonscan.com/address/${addressTo}`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-base font-semibold leading-[45px] text-slate-300"
                        >
                          {shortenAddress(addressTo)}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

const Transactions = () => {
  const { transactions, currentAccount, getAllTransactions } =
    useContext(ContractsContext);

  useEffect(() => {
    getAllTransactions();
  }, []);

  if (transactions.length > 6) {
    for (let i = 0; i < transactions.length - 6; i++) {
      transactions.shift();
    }
  }

  const { ref, inView } = useInView({ threshold: 0.1 });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        scale: 1,
        transition: {
          type: "spring",
          duration: 1.5,
          bounce: 0.1,
        },
      });
    }

    if (!inView) {
      animation.start({
        y: "100vh",
        scale: 0,
      });
    }
  }, [inView]);

  return (
    <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
      <div ref={ref} className="flex flex-col md:p-12 py-12 px-4">
        {currentAccount ? (
          <h2 className="mx-auto max-w-md mb-6 font-sans text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl sm:leading-none xl:max-w-lg">
            Latest <span className="inline-block text-indigo-400">Transactions.</span>
          </h2>
        ) : (
          <h3 className="text-white text-3xl text-center my-2">
            Connect your account to see the latest transactions
          </h3>
        )}

        <motion.div
          className="flex flex-wrap justify-center items-center mt-10"
          animate={animation}
        >
          {transactions.map((transaction, i) => (
            <TransactionsCard key={i} {...transaction} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Transactions;
