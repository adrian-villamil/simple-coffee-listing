import Image from "next/image";
import { Coffee } from "@/interfaces/coffee.interface"

interface Props {
  coffee: Coffee;
}

export const CardItem = ({ coffee }: Props) => {
  return (
    <div className="flex flex-col gap-4 relative w-[260px]">
      {/* Image - Status */}
      <Image
        src={coffee.image}
        alt={coffee.name}
        width={260}
        height={160}
        className="rounded-xl w-full"
      />
      {coffee.popular && (
        <span className="px-3 py-1 rounded-xl bg-gold text-black text-2xs font-bold absolute top-2 left-2">Popular</span>
      )}
      {/* Content */}
      <div className="flex flex-col gap-2">
        {/* Name - Price */}
        <div className="flex justify-between">
          <span className="text-white font-semibold">{coffee.name}</span>
          <span className="bg-lime text-black text-xs font-bold py-1 px-2 rounded">{coffee.price}</span>
        </div>
        {/* Rating - Votes - Available */}
        <div className="flex justify-between">
          <div className="flex gap-1 items-center">
            <Image
              src={coffee.rating ? '/Star_fill.svg' : '/Star.svg'}
              alt="Rating"
              width={24}
              height={24}
            />
            {coffee.rating ? (
              <div>
                <span className="text-white text-sm font-semibold">
                  {coffee.rating}
                </span>
                {' '}
                <span className="text-gray text-sm font-semibold">
                  {`(${coffee.votes} ${coffee.votes === 1 ? 'vote' : 'votes'})`}
                </span>
              </div>
            ) : (
              <span className="text-gray text-sm font-semibold">No ratings</span>
            )}
          </div>
          {!coffee.available && (
            <span className="text-carrot text-sm font-semibold">Sold out</span>
          )}
        </div>
      </div>
    </div>
  )
}
