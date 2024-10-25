import {ethers} from "hardhat";

async function main() {
  const vrfRequestInfo = await ethers.deployContract("VRFRequestInfo"); // adding {gasLimit: 200000}); works
  await vrfRequestInfo.waitForDeployment();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
