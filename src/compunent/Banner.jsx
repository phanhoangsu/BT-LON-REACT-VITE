import React from "react";

const Banner = () => {
  return (
    <div className="banner h-[400px] w-[80vw] mg-auto">
      <div className="ml-[40px] pt-[140px]">
        <h4 className="mb-[10px] font-extralight">NEW INSPIRATION</h4>
        <div className="font-semibold italic text-2xl ">
          <h1>20% OFF ON NEW </h1>
          <h1>SEASON </h1>
        </div>
        <button className="bg-gray-950 text-amber-50 mt-[10px] cursor-pointer rounded">
          Browse collection
        </button>
      </div>
    </div>
  );
};

export default Banner;
