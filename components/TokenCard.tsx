import { Card, CardHeader, Image, Skeleton } from "@nextui-org/react"
import styles from "./TokenCard.module.css"

interface TokenCardProps {
  name: string
  price: string | null
  icon: string
  sourceUrl: string
}

export default function TokenCard({ name, price, icon, sourceUrl }: TokenCardProps) {
  return (
    <div>
      <Card className={`${styles.cardCustom} max-w-[400px] bg-indigo-900`}>
        <CardHeader className="flex gap-3">
          <Skeleton className="rounded-lg" isLoaded={price !== null}>
            <Image alt={`${name} logo`} radius="sm" src={icon} className={styles.image} />
          </Skeleton>
          <div className="flex flex-col">
            <Skeleton isLoaded={price !== null}>
              <p className="text-white font-semibold">{name}</p>
            </Skeleton>
            <Skeleton isLoaded={price !== null}>
              <p className="text-small text-default-300">{price ? `Price: ${price}` : "Loading..."}</p>
            </Skeleton>
          </div>
        </CardHeader>
      </Card>
    </div>
  )
}
