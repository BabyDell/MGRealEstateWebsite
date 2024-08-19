

import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Trust() {
  return (
    <div className="w-full h-auto bg-fixed bg-[url('/img/indoor-home.jpg')] bg-cover pt-16 background-small2">
      <span
        className={`text-shadow text-white m-auto text-center font-bold tracking-wide text-2xl sm:text-3xl md:text-4xl lg:text-5xl ${montserrat.className}`}
      >
        Realtor You Can Trust
      </span>
      <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-8 md:space-x-10 lg:space-x-24 pb-20 mt-10">
        <div className="w-56 sm:w-64 md:w-96 h-[380px] sm:h-[400px] md:h-[475px] bg-gray-400 bg-opacity-95 rounded-xl pt-5 sm:py-10 px-5 mb-5 sm:mb-0">
          <Image
            src="/img/buy-icon.png"
            className="mx-auto"
            width={150}
            height={150}
            alt="buy-icon"
          />
          <div className="mb-4 font-bold text-lg sm:text-xl">Buy</div>
          <div className="font-medium text-sm sm:text-md md:text-lg font-serif">
            Buying a home is one of the biggest decisions of your life, and
            having the right agent is critical in the process. I can find your
            need and want, that is specifically catered to you.
          </div>
        </div>
        <div className="w-56 sm:w-64 md:w-96 h-[400px] sm:h-[400px] md:h-[475px] bg-gray-400 bg-opacity-95 rounded-xl sm:py-5 px-5">
          <Image
            src="/img/sell-icon.png"
            className="mx-auto pt-5"
            width={150}
            height={150}
            alt="sell-icon"
          />
          <div className="mb-4 font-bold text-lg sm:text-xl">Sell</div>
          <div className="font-medium text-sm sm:text-md md:text-lg font-serif">
            Having a good agent is key to not only selling, but marketing your
            home. The presentation, description, and photogrophy makes a world
            of difference when putting your house on the market.
          </div>
        </div>
      </div>
    </div>
  );
}
