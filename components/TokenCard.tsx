import { Card, CardHeader, Image, Skeleton } from "@nextui-org/react"
import styles from "./TokenCard.module.css"

interface TokenCardProps {
  name: string
  price: string | null
  icon: string
  loading: boolean
}

export default function TokenCard({ name, price, icon, loading }: TokenCardProps) {
  return (
    <Card className={`${styles.cardCustom} max-w-[400px] ${loading ? styles.loading : ""}  `}>
      <CardHeader className="flex gap-3">
        {loading ? (
          <div className="max-w-[400px] w-full flex items-center gap-3">
            <Skeleton className="flex rounded-full w-12 h-12" />
            <div className="w-full flex flex-col gap-2 ">
              <Skeleton className="h-3 w-3/5 rounded-lg skeleton-shimmer " />
              <Skeleton className="h-3 w-4/5 rounded-lg  skeleton-shimmer" />
            </div>
          </div>
        ) : (
          <>
            <Image alt={`${name} logo`} radius="sm" src={icon} className={styles.image} />
            <div className="flex flex-col">
              <p className="text-white font-semibold">{name}</p>
              <p className="text-small text-default-300">{price ? `Price: ${price}` : "Loading..."}</p>
            </div>
          </>
        )}
      </CardHeader>
    </Card>
  )
}
