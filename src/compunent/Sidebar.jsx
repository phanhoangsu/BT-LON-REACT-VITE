import React from "react";
import { useSearchParams } from "react-router-dom";

const Sidebar = () => {
  //   return (
  //     <div className="w-64 p-4 bg-white shadow-lg">
  //       <h2 className="text-lg font-bold mb-4">CATEGORIES</h2>

  //       <div className="mb-4">
  //         <h3 className="font-bold bg-black text-white px-2 py-1">APPLE</h3>
  //         <ul className="pl-4">
  //           <li className="text-gray-500 hover:text-black cursor-pointer">All</li>
  //         </ul>
  //       </div>

  //       <div className="mb-4">
  //         <h3 className="font-bold bg-gray-100 px-2 py-1">IPHONE & MAC</h3>
  //         <ul className="pl-4 space-y-1">
  //           <li className="text-gray-500 hover:text-black cursor-pointer">
  //             iPhone
  //           </li>
  //           <li className="text-gray-500 hover:text-black cursor-pointer">
  //             iPad
  //           </li>
  //           <li className="text-gray-500 hover:text-black cursor-pointer">
  //             Macbook
  //           </li>
  //         </ul>
  //       </div>

  //       <div className="mb-4">
  //         <h3 className="font-bold bg-gray-100 px-2 py-1">WIRELESS</h3>
  //         <ul className="pl-4 space-y-1">
  //           <li className="text-gray-500 hover:text-black cursor-pointer">
  //             Airpod
  //           </li>
  //           <li className="text-gray-500 hover:text-black cursor-pointer">
  //             Watch
  //           </li>
  //         </ul>
  //       </div>

  //       <div className="mb-4">
  //         <h3 className="font-bold bg-gray-100 px-2 py-1">OTHER</h3>
  //         <ul className="pl-4 space-y-1">
  //           <li className="text-gray-500 hover:text-black cursor-pointer">
  //             Mouse
  //           </li>
  //           <li className="text-gray-500 hover:text-black cursor-pointer">
  //             Keyboard
  //           </li>
  //           <li className="text-gray-500 hover:text-black cursor-pointer">
  //             Other
  //           </li>
  //         </ul>
  //       </div>
  //     </div>
  //   );
  // };

  const [searchParams, setSearchParams] = useSearchParams();

  const handleCategoryClick = (category) => {
    searchParams.set("category", category);
    setSearchParams(searchParams);
  };

  return (
    <div className="w-64 p-4 bg-white shadow-lg">
      <h2 className="text-lg font-bold mb-4">CATEGORIES</h2>

      <div className="mb-4">
        <h3 className="font-bold bg-black text-white px-2 py-1">APPLE</h3>
        <ul className="pl-4">
          <li
            className="text-gray-500 hover:text-black cursor-pointer"
            onClick={() => handleCategoryClick("All")}
          >
            All
          </li>
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="font-bold bg-gray-100 px-2 py-1">IPHONE & MAC</h3>
        <ul className="pl-4 space-y-1">
          <li
            className="text-gray-500 hover:text-black cursor-pointer"
            onClick={() => handleCategoryClick("iPhone")}
          >
            iPhone
          </li>
          <li
            className="text-gray-500 hover:text-black cursor-pointer"
            onClick={() => handleCategoryClick("iPad")}
          >
            iPad
          </li>
          <li
            className="text-gray-500 hover:text-black cursor-pointer"
            onClick={() => handleCategoryClick("Macbook")}
          >
            Macbook
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
