import React from "react";
import { useNavigate } from "react-router-dom";

const Checkou1 = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <h2 className="text-2xl italic font-semibold">CHECKOUT</h2>
        <nav className="text-gray-500 italic">
          <span
            onClick={() => navigate("/")}
            className="text-black font-semibold cursor-pointer"
          >
            HOME
          </span>{" "}
          /
          <span
            onClick={() => navigate("/cart")}
            className="text-black font-semibold cursor-pointer"
          >
            CART
          </span>{" "}
          /<span className="text-gray-400">CHECKOUT</span>
        </nav>
      </div>
    </div>
  );
};

export default Checkou1;
