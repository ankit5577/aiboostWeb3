const deployTransactionsContract = async () => {
  const transactionsFactory = await hre.ethers.getContractFactory(
    "Transactions"
  );
  const transactionsContract = await transactionsFactory.deploy();

  await transactionsContract.deployed();

  console.log("Transactions address: ", transactionsContract.address);
};

const deployStakingPoolContract = async () => {
  const stakingPoolFactory = await hre.ethers.getContractFactory(
    "StakingPool"
  );
  const stakingPoolContract = await stakingPoolFactory.deploy();

  await stakingPoolContract.deployed();

  console.log("satkingPool contract address: ", stakingPoolContract.address);
}

const deployAiBoostTokenContract = async () => {
  const aiboostTokenFactory = await hre.ethers.getContractFactory(
    "AiboostToken"
  );
  const aiboostTokenContract = await aiboostTokenFactory.deploy(1000000);

  await aiboostTokenContract.deployed();
  console.log("aiboostTokenContract address: ", aiboostTokenContract.address);
  return aiboostTokenContract.address;
};

const deployAiBoostTokenSaleContract = async (token_address) => {
  // // Token price is 0.001 Ether
  const tokenPrice = 1000000000000000;
  const tokenSaleFactory = await hre.ethers.getContractFactory("TokenSale");
  const tokenSaleContract = await tokenSaleFactory.deploy(
    token_address,
    tokenPrice
  );

  await tokenSaleContract.deployed();
  console.log("tokenSaleContract address: ", tokenSaleContract.address);
};

const deployLotteryContract = async () => {
  const lotteryFactory = await hre.ethers.getContractFactory("Lottery");
  const lotteryContract = await lotteryFactory.deploy();

  await lotteryContract.deployed();
  console.log("lotteryContract address: ", lotteryContract.address);
};

const main = async () => {
  const token_address = await deployAiBoostTokenContract();
  await deployAiBoostTokenSaleContract(token_address);
  await deployLotteryContract();
  await deployStakingPoolContract();
  await deployTransactionsContract();
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
