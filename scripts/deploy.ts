import {ethers} from "hardhat";

async function main() {
  const vrfRequestInfo = await ethers.deployContract("VRFRequestInfo"); // Using gas limit explicitly works ok, like: {gasLimit: 1000000});
  await vrfRequestInfo.waitForDeployment();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
