// import React from "react";

// const ProductDetail = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     const API =
//       "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74";

//     axios
//       .get(API)
//       .then((response) => {
//         const foundProduct = response.data.find((item) => item._id.$oid === id);
//         setProduct(foundProduct);
//       })
//       .catch((error) => console.error("Error fetching product:", error));
//   }, [id]);

//   if (!product) {
//     return <p className="text-center mt-10">Loading...</p>;
//   }

//   return (
//     <div className="container mx-auto p-8">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div>
//           <img
//             src={product.img1}
//             alt={product.name}
//             className="w-full h-96 object-contain"
//           />
//         </div>
//         <div>
//           <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
//           <p className="text-gray-600 mb-4">
//             Giá: {Number(product.price).toLocaleString()} VND
//           </p>
//           <p className="mb-4">{product.short_desc}</p>
//           <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
//             Add to cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default ProductDetail;

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mainImage, setMainImage] = useState("");

  const API =
    "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74";

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(API);
        const foundProduct = response.data.find(
          (p) => p._id.$oid === productId
        );

        if (foundProduct) {
          setProduct(foundProduct);
          setMainImage(foundProduct.img1);
        } else {
          setError("Product not found");
        }
      } catch (err) {
        setError("Error loading product");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) return <div className="text-center p-8">Loading...</div>;
  if (error) return <div className="text-center p-8 text-red-500">{error}</div>;
  if (!product) return null;

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <Link
        to="/shop"
        className="mb-4 inline-block text-gray-600 hover:text-black"
      >
        &larr; Back to Shop
      </Link>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Image Section */}
        <div className="md:w-1/2">
          <div className="bg-gray-50 p-4 rounded-xl">
            <img
              src={mainImage}
              alt={product.name}
              className="w-full h-96 object-contain"
            />
          </div>
          <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
            {[product.img1, product.img2, product.img3, product.img4].map(
              (img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className={`w-16 h-16 object-cover rounded-lg cursor-pointer border-2 ${
                    mainImage === img ? "border-black" : "border-transparent"
                  }`}
                  onClick={() => setMainImage(img)}
                />
              )
            )}
          </div>
        </div>

        {/* Info Section */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <div className="mb-4">
            <span className="text-gray-500 text-lg">{product.short_desc}</span>
          </div>

          <div className="mb-6">
            <span className="text-2xl font-semibold">
              {Number(product.price).toLocaleString()} VND
            </span>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-3">PRODUCT DETAILS</h3>
            <p className="text-gray-600 leading-relaxed">{product.long_desc}</p>
          </div>
          <div className="flex">
            <div className="flex items-center border px-2 py-1 rounded">
              <span className="text-gray-400 text-sm mr-2">QUANTITY</span>
              <button
                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                className="px-2 text-gray-500 hover:text-black cursor-pointer"
              >
                &#9664;
              </button>
              <input
                type="text"
                value={quantity}
                readOnly
                className=" text-center w-8 border-x "
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-2 text-gray-500 hover:text-black cursor-pointer"
              >
                &#9654;
              </button>
            </div>

            <button className="w-full py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-300">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
