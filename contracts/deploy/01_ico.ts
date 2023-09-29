import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const deployFunction: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { deployments, getNamedAccounts, network, ethers } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const tokenContract = await deployments.get("Aiboost")

  const tokenPrice = ethers.parseEther('0.01'); // Set your token price
  const discountRate = 500; // Set your discount rate in basis points (e.g., 5% discount)
  const minPurchase = ethers.parseEther('0.1'); // Set your minimum purchase amount
  const maxPurchase = ethers.parseEther('10'); // Set your maximum purchase amount
  const startTime = Math.floor(Date.now() / 1000); // Set your ICO start time (timestamp)
  const endTime = startTime + 3600; // Set your ICO end time (timestamp)

  await deploy('ICO', {
    from: deployer,
    args: [],
    log: true,
    proxy: {
      proxyContract: 'OpenZeppelinTransparentProxy',
      execute: {
        methodName: 'initialize',
        args: [tokenContract.address, tokenPrice, discountRate, minPurchase, maxPurchase, startTime, endTime]
      },
    }
  });

  console.log('ICO contract deployed to:', (await deployments.get('ICO')).address);
};

deployFunction.tags = ['ICO'];

export default deployFunction;
