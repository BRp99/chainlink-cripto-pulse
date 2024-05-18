import React, { useEffect, useState } from "react"
import { getLatestRoundData, LatestRoundData } from "../utils/ethers"
import { contractsConfig } from "../utils/contractsConfig"

const CryptoPriceList = () => {
  const [prices, setPrices] = useState<{ [key: string]: LatestRoundData | null }>({})
  const [nextUpdateTime, setNextUpdateTime] = useState<number>(60)

  useEffect(() => {
    const fetchData = async () => {
      const newPrices: { [key: string]: LatestRoundData | null } = {}
      for (const contract of contractsConfig) {
        try {
          const data = await getLatestRoundData(contract.address, contract.abi)
          newPrices[contract.name] = data
        } catch (error) {
          console.error(`Error fetching data for ${contract.name}:`, error)
          newPrices[contract.name] = null
        }
      }
      setPrices(newPrices)
    }

    const interval = setInterval(() => {
      setNextUpdateTime((prevTime) => {
        if (prevTime === 0) {
          fetchData()
          return 60
        } else {
          return prevTime - 1
        }
      })
    }, 1000)

    fetchData()

    return () => clearInterval(interval)
  }, [])

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  }

  return (
    <div>
      <h2>ERC20 tokens price</h2>
      <div>
        <p>Next price update in: {formatTime(nextUpdateTime)}</p>
      </div>
      {contractsConfig.map((contract) => (
        <div key={contract.name}>
          <h3>{contract.name}</h3>
          {prices[contract.name] ? <p>Price: {prices[contract.name]?.answer.toString()}</p> : <p>Loading...</p>}
        </div>
      ))}
    </div>
  )
}

export default CryptoPriceList
