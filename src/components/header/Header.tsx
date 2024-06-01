import Image from "next/image";

export const Header = () => {
  return (
    <div className="flex flex-col items-center w-full mb-5 mt-[90px] lg:mt-20 relative">
      <h1 className="text-heading text-white font-semibold text-center mb-1 relative z-10">
        Our Collection
      </h1>
      <p className="max-w-[320px] lg:max-w-[500px] text-base text-gray font-medium text-center leading-tight relative z-10">
        Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.
      </p>
      <Image
        src={'/vector.svg'}
        alt="Icon"
        width={257}
        height={153}
        priority
        className="absolute -top-14 left-1/2"
      />
    </div>
  );
};
