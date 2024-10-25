import {ethers} from "hardhat";

async function main() {
  const contract = await ethers.deployContract("Contract");
  //  const contract = await ethers.deployContract("Contract", {gasLimit: 200000}); // works
  await contract.waitForDeployment();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
