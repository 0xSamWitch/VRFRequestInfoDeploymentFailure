import {HardhatUserConfig} from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";
import {SolcUserConfig} from "hardhat/types";
import "dotenv/config";

const defaultConfig: SolcUserConfig = {
  version: "0.8.19",
  settings: {
    evmVersion: "paris",
    optimizer: {
      enabled: true,
      runs: 9999999,
      details: {
        yul: true,
      },
    },
    viaIR: process.env.HARDHAT_VIAIR != "false", // This cannot be used with coverage for instance
    outputSelection: {
      "*": {
        "*": ["storageLayout"],
      },
    },
  },
};

const config: HardhatUserConfig = {
  solidity: defaultConfig,
  networks: {
    hardhat: {
      gasPrice: 0,
      initialBaseFeePerGas: 0,
      allowUnlimitedContractSize: true,
    },
    sonic_testnet: {
      url: process.env.SONIC_TESTNET_RPC,
      accounts: [process.env.PRIVATE_KEY as string],
    },
  },
};

export default config;
