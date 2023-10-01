import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { verify } from '../helpers/utils';

const deployFunction: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { deployments, getNamedAccounts, network, ethers } = hre;
  const { deploy, execute } = deployments;
  const { deployer } = await getNamedAccounts();

  const lotteryPoolContract = await deploy('LotteryPool', {
    from: deployer,
    args: [],
    log: true,
  });

  console.log('✅ lotteryPoolContract deployed at'.toUpperCase(), lotteryPoolContract.address);

  await verify('LotteryPool', 'LotteryPool', lotteryPoolContract.address, []);
};

deployFunction.tags = ['LOTTERY'];

export default deployFunction;
