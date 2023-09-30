import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { promises as fsPromises } from "fs";
import { join } from "path";
import { DeployFunction } from 'hardhat-deploy/types';

async function __asyncWriteFile(filename: string, data: any) {
  try {
    await fsPromises.writeFile(join(__dirname, filename), data, {
      flag: "w",
    });
    const contents = await fsPromises.readFile(join(__dirname, filename), "utf-8");
    return contents;
  } catch (err) {
    console.log(err);
    return "🔴ERROR::WRITE";
  }
}

const deployFunction: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { deployments, getNamedAccounts, network, ethers } = hre;
  const { deploy, all } = deployments;
  const { deployer } = await getNamedAccounts();

  const allContracts = await all();

  const contractsForFrontend = {
    lotteryPoolContract: allContracts['LotteryPool'].address,
    aiboostTokenContract: allContracts['AiboostToken_Proxy'].address,
    tokenSaleContract: allContracts['ICO_Proxy'].address,
    transactionContract: "0x8219163cd9f695718c9dbcd7d4725a85484bcde6"
  }

  await __asyncWriteFile("../../client/src/utils/addresses.json", JSON.stringify(contractsForFrontend));
};

deployFunction.tags = ['FINAL'];

export default deployFunction;
