// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const _feeSharingSystem = "0x673d01ef7F95E2Dc3743066cc5B73E8A721F6dB5";
  const _uniswapRouter = "0xe592427a0aece92de3edee1f18e0157c05861564";

  const AggregatorFeeSharingWithUniswapV3 = await ethers.getContractFactory("AggregatorFeeSharingWithUniswapV3");
  const aggregatorFeeSharingWithUniswapV3 = await AggregatorFeeSharingWithUniswapV3.deploy(
    _feeSharingSystem,
    _uniswapRouter,
  );

  await aggregatorFeeSharingWithUniswapV3.deployed();

  console.log("AggregatorFeeSharingWithUniswapV3 deployed to:", aggregatorFeeSharingWithUniswapV3.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
