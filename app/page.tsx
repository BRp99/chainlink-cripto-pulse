"use client"

import React, { useEffect, useState } from "react"
import { getLatestRoundData, LatestRoundData } from "../utils/ethers"

export default function Home() {
  const [price, setPrice] = useState<LatestRoundData | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getLatestRoundData()
      setPrice(data)
    }

    fetchData()
  }, [])

  return (
    <div>
      <h1>Minha App Next.js</h1>
      {price ? (
        <div>
          <p>DAI Price: {price.answer.toString()}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
