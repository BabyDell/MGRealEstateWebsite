import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playFair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400'],
})

export default function Background() {
  return (
    <>
      <div className="bg-[url('/img/desertHome.jpg')] bg-opacity-85 bg-cover w-full h-dvh ">
        <Image
          src="/img/momTransparent.png"
          className="hidden lg:block absolute -bottom-1 left-0 z-10"
          width={600}
          height={200}
          alt="Desert Home"
        />
        <div className="flex items-center justify-center md:justify-end h-full w-full text-white text-7xl md:pr-64">
          <span className={`w-3/4 md:w-1/2 " ${playFair.className}`} >I'm not a salesperson, I'm a matchmaker.</span>
        </div>
      </div>
    </>
  );
}
