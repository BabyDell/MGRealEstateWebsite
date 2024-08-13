import React from "react";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <div className="w-full mb-10">
      <div className="pt-10">
        <span className="text-4xl font-semibold text-amber-950">
          Meet Maria
        </span>
      </div>
      <div className="w-full md:w-3/4 flex justify-center items-center m-auto">
        <div className="grid grid-cols-2 justify-center w-full mt-10">
          <div>
            <Image
              src="/img/headShot.png"
              width={350}
              height={100}
              className="rounded-full m-auto"
              alt="Maria"
            />
            <div className="text-3xl font-semibold mt-2 mb-2 ">Maria Guiterrez</div>
            <div className="text-2xl">(760)-391-8941</div>
            <div className="text-2xl hidden sm:contents">realtormgutierrez@gmail.com</div>
          </div>
          <div>
            <div className="text-md lg:text-xl xl:text-2xl font-semibold text-amber-950 mb-20">
              Maria Gutierrez has lived in the Coachella Valley for over 19
              years and has taken an interest in the ever-growing real estate
              industry. She went to the Valley's Community College to obtain an
              AA in Business Administration which goes hand in hand with
              becoming a successful real estate agent. Having a background as a
              tax preparer has allowed her to build trusting relationships
              within the community which fuels her passion for helping those in
              need. During Maria's off time, she enjoys gardening and taking
              long walks for self-care of her body, mind, and soul. Being the
              persevering and motivated person that she is, she can assure you
              that she is ready to take on the role of being your agent and
              delivering exceptional real estate services in your home-buying or
              selling journey.
            </div>
          </div>
        </div>
      </div>
      <hr className="m-auto h-px max-w-7xl bg-gray-600 border-0 text-center" />
    </div>
  );
};

export default About;
