import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("search") || ""
  );

  const handleCategoryClick = (category) => {
    searchParams.set("category", category);
    setSearchParams(searchParams);
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (value) {
      searchParams.set("search", value);
    } else {
      searchParams.delete("search");
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="w-64 p-4 bg-white shadow-lg">
      <h2 className="text-lg font-bold mb-4">CATEGORIES</h2>

      {/* Ô tìm kiếm */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="w-full p-2 border rounded mb-4"
      />

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
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="font-bold bg-gray-100 px-2 py-1">WATCH & AIRPODS</h3>
        <ul className="pl-4 space-y-1">
          <li
            className="text-gray-500 hover:text-black cursor-pointer"
            onClick={() => handleCategoryClick("Watch")}
          >
            Watch
          </li>
          <li
            className="text-gray-500 hover:text-black cursor-pointer"
            onClick={() => handleCategoryClick("AirPod")}
          >
            AirPod
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
