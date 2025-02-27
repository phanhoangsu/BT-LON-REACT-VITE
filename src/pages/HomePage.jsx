import React from "react";
import Banner from "../compunent/Banner";
import Footer from "../compunent/Footer";
import Nabar from "../compunent/Nabar";
import { IMG } from "../untils/const";

const HomePage = () => {
  return (
    <div>
      <Nabar />
      <Banner />
      <div className="py-8 text-center ">
        <div className="py-8 text-center">
          <h3 className="text-gray-500 italic text-sm mb-6 text-[12px]">
            CAREFULLY CREATED COLLECTIONS
          </h3>
          <h2 className="text-lg font-semibold">BROWSE OUR CATEGORIES</h2>

          {/* Row 1: iPhone & Mac */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-6   ">
            {IMG.slice(0, 2).map((cat, index) => (
              <div
                key={index}
                className=" rounded-lg p-4  cursor-pointer transition-transform transform "
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-40 object-contain mb-4"
                />
                <h3 className="text-lg font-bold">{cat.name}</h3>
              </div>
            ))}
          </div>

          {/* Row 2: iPad, WATCH, AirPods */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {IMG.slice(2).map((cat, index) => (
              <div
                key={index}
                className=" rounded-lg p-4  cursor-pointer transition-transform transform "
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-40 object-contain mb-4"
                />
                <h3 className="text-lg font-bold">{cat.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mg-auto w-[80vw]">
        <h3 className="font-extralight italic">MADE THE HARD WAY</h3>
        <h1 className="text-lg font-semibold">TOP TRENDING PRODUCTS</h1>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
