import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { verify } from '../helpers/utils';

const deployFunction: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { deployments, getNamedAccounts, network, ethers } = hre;
  const { deploy, execute } = deployments;
  const { deployer } = await getNamedAccounts();

  const tokenContract = await deployments.get("AiboostToken")

  const tokenPrice = ethers.parseEther('0.01'); // Set your token price
  const discountRate = 500; // Set your discount rate in basis points (e.g., 5% discount)
  const startTime = Math.floor(Date.now() / 1000); // Set your ICO start time (timestamp)
  const endTime = startTime + 36000; // Set your ICO end time (timestamp)

  const icoContract = await deploy('ICO', {
    from: deployer,
    args: [],
    log: true,
    proxy: {
      proxyContract: 'OpenZeppelinTransparentProxy',
      execute: {
        methodName: 'initialize',
        args: [tokenContract.address, tokenPrice, discountRate, startTime, endTime]
      },
    }
  });

  console.log('ICO contract deployed to:', (await deployments.get('ICO')).address);

  await execute('AiboostToken', {from: deployer, log: true}, 'addMinter', (await deployments.get('ICO')).address)

  await verify("ICO Contract", "ICO", icoContract.address, [])
};

deployFunction.tags = ['ICO'];

export default deployFunction;
