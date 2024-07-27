import Image from "next/image";

export default function Trust() {
  return (
    <div className="w-full h-auto bg-gray-500 pt-16">
      <span className="text-center text-2xl font-semibold pt-20">
        Realtor You Can Trust
      </span>
      <div className="flex items-center justify-center space-x-10 md:space-x-24">
        <div className="w-96">
          <Image
            src="/img/buy-icon.png"
            className="mx-auto"
            width={200}
            height={200}
            alt="buy-icon"
          />
          <div className="mb-4 font-bold text-xl">Buy</div>
          <div className="font-medium text-lg font-serif">
            Buying a home is one of the biggest decisions of your life, and having the right agent can help you through the process. Where I can find your need and want specifically catered to you. 
          </div>
        </div>
        <div className="w-96">
          <Image
            src="/img/sell-icon.png"
            className="mx-auto pt-5"
            width={200}
            height={200}
            alt="buy-icon"
          />
          <div className="mb-4 font-bold text-xl">Sell</div>
          <div className="font-medium text-lg font-serif">
            Having a good agent is key to selling and marketing your home.
            Presentation of your home, the description, and photogrophy can make
            a world of difference when selling your home.
          </div>
        </div>
      </div>
    </div>
  );
}
