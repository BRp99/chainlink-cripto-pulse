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
  const [fetchingData, setFetchingData] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setFetchingData(true)
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
        setFetchingData(false)
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
    const seconds = time % 10
    return `${seconds.toString()}`
  }

  const renderTimer = () => {
    if (fetchingData && !loading) {
    } else {
      const time = formatTime(nextUpdateTime)
      if (time === "0") {
        return "Loading"
      } else {
        return `${time} seconds`
      }
    }
  }

  const getPrice = (price: LatestRoundData | null, contractName: string) => {
    if (!price) return null

    const contractConfig = contractsConfig.find((contract) => contract.name === contractName)
    const decimals = contractConfig ? contractConfig.decimals : 18

    return formatUnits(price.answer || ethers.constants.Zero, decimals)
  }

  return (
    <div className={styles.container}>
      <div className={styles.subcontainer}>
        <button className="bg-white">Update price now</button>
        <h2 className={`${styles.subtitle} text-emerald-100`}>
          Price update in {renderTimer()}
          {fetchingData && !loading && "seconds"}
        </h2>
      </div>

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
