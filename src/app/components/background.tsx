import Image from "next/image";
import { Montserrat, Playfair_Display } from "next/font/google";

const playFair = Playfair_Display({
  subsets: ['latin'],
  weight: ['900'],
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600'],
})

export default function Background() {
  return (
    <>
      <div className="bg-[url('/img/bgIndoorHouse.jpg')] bg-cover w-full h-[calc(100vh-100px)]">
        {/* <Image
          src="/img/momTransparent.png"
          className="hidden lg:block absolute -bottom-1 left-0 z-10"
          width={600}
          height={200}
          alt="Desert Home"
        /> */}
        <div className="h-full w-full text-white text-7xl pt-40">
          <div className={` mb-3 text-sky-900 m-auto text-center font-bold tracking-wide ${montserrat .className}`}>Maria Guiterrez</div>
          <div className={`mb-14 text-sky-900 m-auto text-center text-3xl tracking-wide ${playFair.className}`}>Century 21 Agent</div>
          <div className={`w-3/4 md:w-1/2  m-auto font-bold text-center" ${playFair.className}`} >"I'm not a salesperson, I'm a matchmaker."</div>
        </div>  
      </div>
    </>
  );
}
