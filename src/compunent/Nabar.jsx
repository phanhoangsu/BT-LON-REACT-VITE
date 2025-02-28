import React, { useState } from "react";
import { FaCartArrowDown } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Nabar = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleLogout = () => {
    navigate("/login");
    setIsDropdownOpen(false);
  };

  const handleNavigateHome = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/");
      setLoading(false);
    }, 700);
  };

  return (
    <div className="relative">
      {loading && <div className="text-center p-8">Loading...</div>}
      <div className="flex justify-between w-[80vw] items-center mg-auto italic">
        <div className="flex gap-5">
          <button
            onClick={handleNavigateHome}
            className="text-amber-400 cursor-pointer  hover:bg-gray-500 "
          >
            Home
          </button>
          <h3 className="cursor-pointer">Shop</h3>
        </div>

        <div className="font-bold">
          <h1>BOUTIQUE</h1>
        </div>

        <div className="flex gap-5 items-center relative">
          <button
            onClick={() => navigate("/cart")}
            className="flex gap-1.5 items-center cursor-pointer"
          >
            <FaCartArrowDown />
            Cart
          </button>

          <div
            className="flex gap-1.5 items-center cursor-pointer"
            onClick={toggleDropdown}
          >
            <FaUser />
            <span>AnhND</span>
            <IoIosArrowDown />
          </div>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-10 w-40 bg-white shadow-lg rounded-md border border-gray-200 z-10">
              <ul>
                <button className="px-4 py-2 hover:bg-gray-500 cursor-pointer">
                  Setting
                </button>
                <button
                  className="px-4 py-2 hover:bg-red-100 text-red-600 cursor-pointer"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Nabar;
