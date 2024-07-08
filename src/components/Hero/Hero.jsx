import React from "react";

const Hero = () => {
  return (
    <div className="container pt-8">
      <div className="grid xl:grid-cols-1 xl:grid-rows-1 gap-8">
        <div className="relative xl:col-span-2  xl:row-start-1 xl:row-end-[-1]">
          <img
            className="w-[100%] h-full object-cover rounded-lg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0E-RCJ672iB43GRAkXltmF30lIe392gl6Tg27I4yvgcF1XPN9D_QWn31X9pRyl9RMiA&usqp=CAU"
            alt="Hero image"
          />
          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4 ">
            <p className="text-2xl font-bold hidden sm:block">
              world more trested shpping application in blockchain world{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
