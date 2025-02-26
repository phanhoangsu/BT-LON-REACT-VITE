import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const ProductList = () => {
  //   const [products, setProducts] = useState([]);

  //   useEffect(() => {
  //     const API =
  //       "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74";
  //     axios
  //       .get(API)
  //       .then((response) => setProducts(response.data))
  //       .catch((error) => console.error("Error fetching products:", error));
  //   }, []);

  //   return (
  //     <div className="p-8  ">
  //       <div className="flex  ">
  //         <input type="text" placeholder="Enter search here " className="boder" />
  //         <select className="border border-gray-300 rounded-md px-4 py-2  focus:outline-none focus:ring-2 focus:ring-blue-400  ml-[55vw]    ">
  //           <option>Default sorting</option>
  //           <option>Iphone</option>
  //           <option>Apple Watch</option>
  //           <option>Apple AirPosd</option>
  //         </select>
  //       </div>
  //       {/* <h1 className="text-2xl font-bold mb-6">Apple Products</h1> */}

  //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  //         {products.map((product) => (
  //           <div
  //             key={product._id.$oid}
  //             className=" rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
  //           >
  //             <img
  //               src={product.img1}
  //               alt={product.name}
  //               className="w-full h-48 object-contain mb-4"
  //             />
  //             <h2 className="text-lg font-semibold">{product.name}</h2>
  //             <p className="text-gray-600">
  //               {Number(product.price).toLocaleString()} VND
  //             </p>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // };

  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "All";
  const searchQuery = searchParams.get("search") || "";

  useEffect(() => {
    const API =
      "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74";
    axios
      .get(API)
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Lọc sản phẩm theo danh mục và từ khóa tìm kiếm
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      category === "All" ||
      product.category.toLowerCase() === category.toLowerCase();
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="p-8">
      <div className="flex">
        <input
          type="text"
          placeholder="Enter search here"
          className="border px-4 py-2 rounded-md"
          onChange={(e) => searchParams.set("search", e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
        {filteredProducts.map((product) => (
          <div
            key={product._id.$oid}
            className="rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
          >
            <img
              src={product.img1}
              alt={product.name}
              className="w-full h-48 object-contain mb-4"
            />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600">
              {Number(product.price).toLocaleString()} VND
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
