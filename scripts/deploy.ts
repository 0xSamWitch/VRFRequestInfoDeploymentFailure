import {ethers} from "hardhat";

async function main() {
  const vrfRequestInfo = await ethers.deployContract("VRFRequestInfo");
  //  const vrfRequestInfo = await ethers.deployContract("VRFRequestInfo", {gasLimit: 200000}); // works
  await vrfRequestInfo.waitForDeployment();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
