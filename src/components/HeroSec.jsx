import React from "react";
import bgImg from "../assets/images/bgpizza.jpg";
const HeroSec = () => {
  return (
    <div className="w-full h-full relative">
      <div>
        <div className=" absolute w-full h-full bg-black/50"></div>
        <img className="w-full h-screen object-cover" src={bgImg} />
        <div className="absolute bg-black bg-opacity-80 text-white top-1/3 left-1/4">
          <button className="px-8 py-4 border border-black">go to pizzas</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSec;
