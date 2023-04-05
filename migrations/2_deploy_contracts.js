const HootSwapRouterV2 = artifacts.require("HootSwapRouterV2");

const factoryAddress = "0x1Ffec29414E83Cd5A97a6727c4F8d7fC5cf9f861";
const WETH = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";

module.exports = async (deployer) => {
  await deployer.deploy(HootSwapRouterV2, factoryAddress, WETH);
};
