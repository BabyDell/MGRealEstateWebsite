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
      <div className="bg-fixed bg-[url('/img/bgIndoorHouse.jpg')] bg-cover w-full h-auto lg:h-dvh pb-20 lg:pb-0 lg:max-h-[calc(100vh-100px)]">
        <div className="h-full w-full text-white text-7xl pt-24 md:pt-40">
          <div className={`text-shadow-xm mb-3 text-sky-900 m-auto text-center font-bold tracking-wide ${montserrat .className}`}>Maria Guiterrez</div>
          <div className={`text-shadow-xm mb-14 text-sky-900 m-auto text-center text-3xl tracking-wide ${playFair.className}`}>Century 21 Agent</div>
          <div className={`text-shadow-sm w-3/4 md:w-1/2  m-auto font-bold text-center" ${playFair.className}`} >"I'm not a salesperson, I'm a matchmaker."</div>
        </div>  
      </div>
    </>
  );
}
