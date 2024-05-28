import { dmSans } from "@/config/fonts";
import clsx from "clsx";

export const Header = () => {
  return (
    <div className="max-w-lg mx-auto">
      <h1 className={clsx(
        dmSans.className,
        'text-3xl text-white m-0 font-semibold text-center'
      )}>
        Our Collection
      </h1>
      <p className="text-base text-gray m-0 text-center">
        Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.
      </p>
    </div>
  );
};
