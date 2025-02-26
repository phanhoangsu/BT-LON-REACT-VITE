// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useSearchParams, useNavigate } from "react-router-dom";

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [searchParams] = useSearchParams();
//   const category = searchParams.get("category") || "All";
//   const searchQuery = searchParams.get("search") || "";

//   useEffect(() => {
//     const API =
//       "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74";
//     axios
//       .get(API)
//       .then((response) => setProducts(response.data))
//       .catch((error) => console.error("Error fetching products:", error));
//   }, []);

//   // Lọc sản phẩm theo danh mục và từ khóa tìm kiếm
//   const filteredProducts = products.filter((product) => {
//     const matchesCategory =
//       category === "All" ||
//       product.category.toLowerCase() === category.toLowerCase();
//     const matchesSearch = product.name
//       .toLowerCase()
//       .includes(searchQuery.toLowerCase());
//     return matchesCategory && matchesSearch;
//   });

//   return (
//     <div className="p-8">
//       <div className="flex"></div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
//         {filteredProducts.map((product) => (
//           <div
//             key={product._id.$oid}
//             className="rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
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

// export default ProductList;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ProductList = () => {
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
        {filteredProducts.map((product) => (
          <Link
            key={product._id.$oid}
            to={`/product/${product._id.$oid}`}
            className="block hover:no-underline hover:text-inherit"
          >
            <div className="rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300 cursor-pointer">
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
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
