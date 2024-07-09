import React from "react";
import hero from "../../images/hero_section.png";

const Hero = () => {
  return (
    <div className="container pt-8">
      <div className="grid xl:grid-cols-1 xl:grid-rows-1 gap-8 items-center">
        <div className="relative xl:col-span-2 xl:row-start-1 xl:row-end-[-1]">
          <img
            className="w-[100%] h-full object-cover rounded-lg"
            src={hero}
            alt="Hero image"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent rounded-lg"></div>
          <div
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
            style={{ marginTop: "-10%" }}
          >
            <p className="text-2xl font-bold   text-center text-gray-300/80">
              World's Most Trusted Decentralized Shopping Application in the
              Blockchain Space
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
