"use client"
import CryptoPriceList from "../components/CryptoPriceList"
import styles from "./page.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.title} text-emerald-50`}>ChainLink Cripto Pulse</h1>

      <div className={styles.cryptoPriceList}>
        <CryptoPriceList />
      </div>
    </div>
  )
}
