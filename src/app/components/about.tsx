import React from "react";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <div id="about" className="w-full mb-10">
      <div className="pt-10">
        <span className="text-4xl font-semibold text-amber-950">
          Meet Maria
        </span>
      </div>
      <div className="w-full lg:w-3/4 flex justify-center items-center m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5 justify-center w-full mt-10">
          <div>
            <Image
              src="/img/headShot.png"
              width={350}
              height={100}
              className="w-64 sm:w-96 rounded-full m-auto"
              alt="Maria"
          />
            <div className="text-xl md:text-3xl font-semibold mt-2 mb-1 md:mb-2 ">
              Maria Guiterrez
            </div>
            <div className="text-lg md:text-2xl">(760)-391-8941</div>
            <div className="text-xl md:text-2xl mb-1 sm:mb-0">
              realtormgutierrez@gmail.com
            </div>
          </div>
          <hr className="flex md:hidden w-3/4 m-auto border-slate-400"/>
          <div>
            <div className="text-md md:text-lg lg:text-xl xl:text-2xl font-semibold text-amber-950 mb-20 mx-10 md:mx-0 md:mr-10 lg:mr-0">
              Maria Gutierrez has lived in the Coachella Valley for over 19
              years and has taken an interest in the ever-growing real estate
              industry. She went to the Valley&apos;s Community College to obtain an
              AA in Business Administration which goes hand in hand with
              becoming a successful real estate agent. Having a background as a
              tax preparer has allowed her to build trusting relationships
              within the community which fuels her passion for helping those in
              need. During Maria&apos;s off time, she enjoys gardening and taking
              long walks for self-care of her body, mind, and soul. Being the
              persevering and motivated person that she is, she can assure you
              that she is ready to take on the role of being your agent and
              delivering exceptional real estate services in your home-buying or
              selling journey.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
