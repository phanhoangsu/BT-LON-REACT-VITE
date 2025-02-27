import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Cart1 = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100 p-4 flex justify-between items-center">
      <h1 className="text-lg italic font-semibold text-gray-900">CART</h1>
      <button
        onClick={() => navigate("/")}
        className="text-sm italic text-gray-400  cursor-pointer  hover:bg-gray-500 flex gap-1.5 items-center "
      >
        <FaHome />
        Home
      </button>
    </div>
  );
};

export default Cart1;
