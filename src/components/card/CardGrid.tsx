import { Coffee } from "@/interfaces/coffee.interface"
import { CardItem } from "./CardItem";

interface Props {
  coffees: Coffee[];
}

export const CardGrid = ({ coffees }: Props) => {
  return (
    <div className="grid justify-center gap-x-8 gap-y-16 grid-cols-min-1 lg:grid-cols-min-2 xl:grid-cols-min-3">
      {coffees.map((coffee) => (
        <CardItem coffee={coffee} />
      ))}
    </div>
  )
}
