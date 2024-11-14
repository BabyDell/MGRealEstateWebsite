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
      <div id="home" className="bg-fixed bg-[url('/img/bgIndoorHouse.jpg')] bg-no-repeat bg-center bg-cover w-full h-auto lg:h-dvh pb-20 lg:pb-0 lg:max-h-[calc(100vh-100px)] background-small">
        <div className="h-full w-full text-white pt-24 md:pt-40">
          <div className={`text-shadow-xm mb-3 text-sky-900 m-auto text-center font-bold text-5xl sm:text-7xl tracking-wide ${montserrat .className}`}>Maria Gutierrez</div>
          <div className={`text-shadow-xm mb-14 text-sky-900 m-auto text-center text-2xl sm:text-3xl tracking-wide ${playFair.className}`}>Century 21 Agent</div>
          <div className={`text-shadow-sm w-3/4 md:w-1/2 m-auto font-bold text-center pb-10 md:pb-0 text-4xl sm:text-6xl md:text-7xl " ${playFair.className}`} >&quot;I&apos;m not a salesperson, I&apos;m a matchmaker.&quot;</div>
        </div>  
      </div>
    </>
  );
}
