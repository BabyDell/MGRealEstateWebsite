import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600'],
})

export default function Trust() {
  return (
    <div className="w-full h-auto bg-fixed bg-[url('/img/indoor-home.jpg')] bg-cover pt-16">
      <span className={`text-shadow text-white  m-auto text-center font-bold tracking-wide text-4xl ${montserrat .className}`}>
        Realtor You Can Trust
      </span>
      <div className="flex items-center justify-center space-x-10 md:space-x-24 pb-20 mt-10">
        <div className="w-96 h-[475px] bg-gray-400 bg-opacity-95 rounded-xl py-10 px-5">
          <Image
            src="/img/buy-icon.png"
            className="mx-auto"
            width={200}
            height={200}
            alt="buy-icon"
          />
          <div className="mb-4 font-bold text-xl">Buy</div>
          <div className="font-medium text-lg font-serif">
            Buying a home is one of the biggest decisions of your life, and
            having the right agent is critical in the process. I can
            find your need and want, that is specifically catered to you.
          </div>
        </div>
        <div className="w-96 h-[475px] bg-gray-400 bg-opacity-95 rounded-xl pt-4 px-5">
          <Image
            src="/img/sell-icon.png"
            className="mx-auto pt-5"
            width={200}
            height={200}
            alt="buy-icon"
          />
          <div className="mb-4 font-bold text-xl">Sell</div>
          <div className="font-medium text-lg font-serif">
            Having a good agent is key to not only selling, but marketing your home.
            The presentation, description, and photogrophy makes
            a world of difference when putting your house on the market.
          </div>
        </div>
      </div>
    </div>
  );
}

