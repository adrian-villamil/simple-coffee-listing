import Image from "next/image";

export const Header = () => {
  return (
    <div className="max-w-[500px] mx-auto mb-6 relative">
      <h1 className="text-heading text-white font-semibold text-center mb-2 relative z-10">
        Our Collection
      </h1>
      <p className="text-base text-gray font-semibold text-center leading-tight relative z-10">
        Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.
      </p>
      <Image
        src={'/vector.svg'}
        alt="Icon"
        width={257}
        height={153}
        priority
        className="absolute -top-14 -right-2"
      />
    </div>
  );
};
