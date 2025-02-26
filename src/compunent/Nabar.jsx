import React, { useState } from "react";
import { FaCartArrowDown } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Nabar = () => {
  //   return (
  //     <div>
  //       <div className="flex justify-between w-[80vw] items-center  mg-auto italic  ">
  //         <div className="flex gap-5  ">
  //           <h3 className="text-amber-300">Home</h3>
  //           <h3>Shop</h3>
  //         </div>
  //         <div className="font-bold">
  //           <h1>BOUTIQUE</h1>
  //         </div>
  //         <div className="flex gap-5">
  //           <h3 className="flex gap-1.5 items-center">
  //             <FaCartArrowDown />
  //             Cart
  //           </h3>
  //           {/* <h3>AnhND</h3> */}
  //           <div className="flex gap-1.5 items-center">
  //             <FaUser />
  //             <button> Login</button>
  //           </div>
  //           {/* <button>(Logout)</button> */}
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleLogout = () => {
    console.log("Đã đăng xuất");
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative">
      <div className="flex justify-between w-[80vw] items-center mg-auto italic">
        <div className="flex gap-5">
          <h3 className="text-amber-400 cursor-pointer  hover:bg-gray-500 ">
            Home
          </h3>
          <h3 className="cursor-pointer">Shop</h3>
        </div>

        <div className="font-bold">
          <h1>BOUTIQUE</h1>
        </div>

        <div className="flex gap-5 items-center relative">
          <h3 className="flex gap-1.5 items-center cursor-pointer">
            <FaCartArrowDown />
            Cart
          </h3>

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
                {/* <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Hồ sơ
                </li> */}
                <li className="px-4 py-2 hover:bg-gray-500 cursor-pointer">
                  Setting
                </li>
                <li
                  className="px-4 py-2 hover:bg-red-100 text-red-600 cursor-pointer"
                  onClick={handleLogout}
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Nabar;
