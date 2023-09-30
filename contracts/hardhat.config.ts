import { HardhatUserConfig } from 'hardhat/config';
import 'dotenv/config';
import '@nomicfoundation/hardhat-toolbox';
import '@nomicfoundation/hardhat-chai-matchers';
import '@nomicfoundation/hardhat-ethers';
import '@nomicfoundation/hardhat-verify';
import '@nomicfoundation/hardhat-network-helpers';
import 'hardhat-gas-reporter';
import 'solidity-coverage';
import '@nomiclabs/hardhat-solhint';
import '@openzeppelin/hardhat-upgrades';
import 'hardhat-contract-sizer';
import 'hardhat-deploy';

const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  solidity: {
    version: '0.8.10',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    hardhat: {
      chainId: 137,
      allowUnlimitedContractSize: true,
      // forking: {
      //   url: 'https://polygon.llamarpc.com',
      // },
      live: true,
      mining: { auto: true },
      loggingEnabled: true,
      accounts: {
        mnemonic: process.env.MNEMONICS,
        path: "m/44'/60'/0'/0",
        initialIndex: 0,
        count: 10,
        passphrase: '',
        accountsBalance: '10000000000000000000000',
      },

    },
    mumbai: {
      url: 'https://rpc.ankr.com/polygon_mumbai',
      accounts: [process.env.PK],
      allowUnlimitedContractSize: true,
      // blockGasLimit: 1e5,
      // gas: 1e4,
      timeout: 30*60*60
    },
  },
  // ? with use of hardhat-verify, we can verify contracts from here.
  etherscan: {
    apiKey: '59YTKIM92FH2MJCK6IY69A2DV7RX2XVBFX',
  },
  gasReporter: {
    enabled: true,
    currency: 'USD',
    gasPrice: 1e12,
    showTimeSpent: true,
  },
  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: true,
    strict: true,
    // only: [":ERC20$"],
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
  mocha: {
    timeout: 40000,
  },
  paths: {
    sources: './contracts',
    artifacts: './artifacts',
    cache: './cache',
    tests: './test',
  },
};

export default config;
