import { Card, CardHeader, CardBody, CardFooter, Image, Divider, Link } from "@nextui-org/react"

interface TokenCardProps {
  name: string
  price: string | null
  icon: string
  sourceUrl: string
}

export default function TokenCard({ name, price, icon, sourceUrl }: TokenCardProps) {
  return (
    <div>
      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
          <Image alt={`${name} logo`} height={40} radius="sm" src={icon} width={40} />
          <div className="flex flex-col">
            <p className="text-md">{name}</p>
            <p className="text-small text-default-500">{price ? `Price: ${price}` : "Loading..."}</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>Make beautiful websites regardless of your design experience.</p>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link isExternal showAnchorIcon href={sourceUrl}>
            Visit source code on GitHub.
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
