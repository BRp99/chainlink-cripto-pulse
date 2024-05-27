import { useEffect, useState } from "react"
import { getLatestRoundData, LatestRoundData } from "../utils/ethers"
import { contractsConfig } from "../utils/contractsConfig"
import styles from "./CryptoPriceList.module.css"
import TokenCard from "./TokenCard"
import { formatUnits } from "../utils/ethers"
import { ethers } from "ethers"

const CryptoPriceList = () => {
  const [prices, setPrices] = useState<{ [key: string]: LatestRoundData | null }>({})
  const [nextUpdateTime, setNextUpdateTime] = useState<number>(60)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const promises = contractsConfig.map((contract) =>
          getLatestRoundData(contract.address, contract.abi).catch((error) => {
            console.error(`Error fetching data for ${contract.name}:`, error)
            return null
          })
        )
        const results = await Promise.all(promises)
        const newPrices: { [key: string]: LatestRoundData | null } = {}
        results.forEach((result, index) => {
          newPrices[contractsConfig[index].name] = result
        })

        setPrices(newPrices)
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setLoading(false)
      }
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

  const getPrice = (price: LatestRoundData | null, contractName: string) => {
    if (!price) return null

    const contractConfig = contractsConfig.find((contract) => contract.name === contractName)
    const decimals = contractConfig ? contractConfig.decimals : 18

    return formatUnits(price.answer || ethers.constants.Zero, decimals)
  }

  return (
    <div className={styles.container}>
      <h2 className={`${styles.subtitle} text-emerald-100`}>ERC20 tokens price update: {formatTime(nextUpdateTime)}</h2>
      <div className={styles.tokenCard}>
        {contractsConfig.map((contract) => (
          <TokenCard
            key={contract.name}
            name={contract.name}
            price={getPrice(prices[contract.name], contract.name)}
            icon={contract.icon}
            loading={loading}
          />
        ))}
      </div>
    </div>
  )
}
export default CryptoPriceList
