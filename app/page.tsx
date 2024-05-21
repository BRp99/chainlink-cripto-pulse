"use client"
import CryptoPriceList from "../components/CryptoPriceList"
import KIKI from "@/components/KIKI"

export default function Home() {
  return (
    <div className="">
      <h1 className="text-7xl font-poppins font-bold text-emerald-50 ">ChainLink Cripto Pulse</h1>
      <h2 className="text-3xl font-poppins font-bold text-emerald-100 ">ERC20 tokens price</h2>
      <CryptoPriceList />
      <KIKI />
    </div>
  )
}
