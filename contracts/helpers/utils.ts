import { run } from "hardhat";

export const verify = async function(name: string, contract: string, contractAddress: string, args: any[]) {
  console.log(`\n⌛️ Verifying ${name}...`);
  let _qualifiedPath = false;

  if (contract.includes(".sol:") || contract.includes("contracts/")) {
    _qualifiedPath = true;
  }

  try {
    await run("verify:verify", {
      address: contractAddress,
      contract: _qualifiedPath ? _qualifiedPath : undefined,
      constructorArguments: args,
    })
    console.log(`🟢 Verified ${name}`);
  } catch (e: any) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already verified!");
    } else {
      console.log(e);
    }
  }
}
