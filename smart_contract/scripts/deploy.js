const main = async () => {
  // const transactionsFactory = await hre.ethers.getContractFactory("Transactions");
  // const transactionsContract = await transactionsFactory.deploy();

  // const aiboostTokenFactory = await hre.ethers.getContractFactory("AiboostToken");
  // const aiboostTokenContract = await aiboostTokenFactory.deploy(1000000);

  // // Token price is 0.001 Ether
  // const tokenPrice = 1000000000000000;

  // const tokenSaleFactory = await hre.ethers.getContractFactory("TokenSale");
  // const tokenSaleContract = await tokenSaleFactory.deploy(aiboostTokenContract.address, tokenPrice);

  const lotteryPoolFactory = await hre.ethers.getContractFactory("LotteryPool");
  const lotteryPoolContract = await lotteryPoolFactory.deploy();

  // await transactionsContract.deployed();
  // await aiboostTokenContract.deployed();
  // await tokenSaleContract.deployed();
  await lotteryPoolContract.deployed();

  // console.log("Transactions address: ", transactionsContract.address);
  // console.log("aiboostTokenContract address: ", aiboostTokenContract.address);
  // console.log("tokenSaleContract address: ", tokenSaleContract.address);
  console.log("lotteryPoolContract address: ", lotteryContract.address);
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

