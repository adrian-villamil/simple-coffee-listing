import { dmSans } from "@/config/fonts";
import clsx from "clsx";

export const Header = () => {
  return (
    <div className="max-w-[500px] mx-auto mb-6">
      <h1 className={`${dmSans.className} text-3xl text-white font-semibold text-center mb-3`}>
        Our Collection
      </h1>
      <p className={`${dmSans.className} text-base text-gray font-semibold text-center`}>
        Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.
      </p>
    </div>
  );
};
