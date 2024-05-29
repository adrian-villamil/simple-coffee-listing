import { Coffee } from "@/interfaces/coffee.interface"
import { CardItem } from "./CardItem";

interface Props {
  coffees: Coffee[];
}

export const CardGrid = ({ coffees }: Props) => {
  return (
    <div className="flex flex-wrap justify-center gap-x-8 gap-y-16">
      {coffees.map((coffee) => (
        <CardItem coffee={coffee} />
      ))}
    </div>
  )
}
