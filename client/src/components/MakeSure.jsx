import React from "react";

function MakeSure() {
  return (
    <div className="bg-slate-300">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-start max-w-screen-sm md:flex-row sm:mx-auto">
          <div className="mb-4 mr-8">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 border border-red-600">
              <svg
                className="w-12 h-12 text-red-500"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </div>
          <div>
            <p className="mb-2 text-xs font-bold font-sans tracking-wide text-red-600 uppercase">
              MAKE SURE TO
            </p>
            <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl sm:leading-none">
              Use a Test Network
            </h2>
            <p className="text-base text-gray-600 md:text-lg mb-2">
              This is a personal web3 project, thus smart contracts are deployed
              on `Ropsten Test Network`
            </p>
            <a
              target="_blank"
              href="https://ropsten.oregonctf.org/eth"
              rel="no-follow"
              className="text-base text-md font-semibold text-teal-600 hover:text-teal-500"
            >
              Get Ether for Ropsten test network {">"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MakeSure;
