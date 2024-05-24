import { ethers } from "ethers"

export interface LatestRoundData {
  roundId: ethers.BigNumber
  answer: ethers.BigNumber
  startedAt: ethers.BigNumber
  updatedAt: ethers.BigNumber
  answeredInRound: ethers.BigNumber
  decimals: number
}

const provider = new ethers.providers.JsonRpcProvider("https://eth.merkle.io") //ChainList Provider

export const getLatestRoundData = async (address: string, abi: string[]): Promise<LatestRoundData> => {
  const contract = new ethers.Contract(address, abi, provider)
  const price = await contract.latestRoundData()
  const decimals = await contract.decimals()
  return { ...price, decimals }
}

export const formatUnits = ethers.utils.formatUnits
