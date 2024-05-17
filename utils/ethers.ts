import { ethers } from "ethers"

export interface LatestRoundData {
  roundId: ethers.BigNumber
  answer: ethers.BigNumber
  startedAt: ethers.BigNumber
  updatedAt: ethers.BigNumber
  answeredInRound: ethers.BigNumber
}

const provider = new ethers.providers.JsonRpcProvider("https://eth.merkle.io") //ChainList Provider

const abi = ["function latestRoundData() view returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound) "]

const address = "0x773616E4d11A78F511299002da57A0a94577F1f4"
const contract = new ethers.Contract(address, abi, provider)

export const getLatestRoundData = async (): Promise<LatestRoundData> => {
  const price = await contract.latestRoundData()
  console.log("See DAI price", price)
  return price
}
