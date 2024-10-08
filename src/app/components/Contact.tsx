import Image from "next/image";

export default function Contact() {
  return (
    <div id="contact" className="w-full h-auto bg-zinc-800 pt-10 pb-5 font-serif">
      <footer className="text-neutral-200 flex grid md:grid-cols-2 w-full">
        <div className="ml-8 md:ml-20 lg:ml-36 text-left">
          <h1 className="text-md sm:text-lg md:text-xl lg:text-3xl underline underline-offset-8">
            Maria Gutierrez
          </h1>
          <span className="text-xs sm:text-md md:text-lg lg:text-xl">
            <h2 className="mt-2">Century 21 Coachella Valley Real Estate</h2>
            <h2>75-108 Gerald Ford Dr., Palm Desert, CA 92211</h2>
            <h2>realtormgutierrez@gmail.com</h2>
            <h2>Cell: (760)-391-8941</h2>
          </span>
        </div>
        <div className="md:flex justify-end ml-6 mt-2 md:m-auto ">
          <div>
            <Image
              src="/img/century21logo.png"
              width={200}
              height={200}
              alt="century21logo"
              className=""
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
