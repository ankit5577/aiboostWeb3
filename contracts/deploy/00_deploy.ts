// import { ethers } from 'hardhat';
import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { verify } from '../helpers/utils';
import { formatEther, parseEther } from 'ethers';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments: { deploy, get, execute }, getNamedAccounts, ethers } = hre;
  const { deployer } = await getNamedAccounts();
  const tokenPrice = ethers.parseEther("0.01")
  const deployerSigner = await ethers.provider.getSigner(deployer);

  console.log("deployer", deployer)
  console.log(`balance = ${formatEther((await ethers.provider.getBalance(deployer)).toString())}`);

  // const aib = await ethers.getContractAt("AiboostToken", "0xB7071245A6cD26Fbc482D6245e47FA96Fd975B63", deployerSigner);

  const lotteryPool = await deploy('LotteryPool', {
    from: deployer,
    args: [],
    log: true,
  })
  console.log('✅ lotteryPool deployed at'.toUpperCase(), lotteryPool.address)

  const tokenContract = await deploy('AiboostToken', {
    from: deployer,
    args: [],
    log: true,
    proxy: {
      proxyContract:'OpenZeppelinTransparentProxy',
      execute: {
        methodName: 'initialize',
        args: ["AiBoost", "AiB", deployer]
      },
    }
  })
  
  console.log('✅ AiBoost tokenContract deployed at'.toUpperCase(), tokenContract.address)

  const lotteryPoolContract = await deploy('LotteryPool', {
    from: deployer,
    args: [],
    log: true,
  })

  console.log('✅ lotteryPoolContract deployed at'.toUpperCase(), lotteryPoolContract.address)

  // await verify("AiBoost Token", "AiboostToken", tokenContract.address, [])
}


export default func;
func.tags = ['Deploy Core']
