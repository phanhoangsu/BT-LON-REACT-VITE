import React, { useEffect, useState } from "react";
import axios from "axios";

const Footer = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const API =
    "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74";
  useEffect(() => {
    axios
      .get(API)
      .then((response) => {
        // console.log("API Response:", response.data);
        setProducts(response.data.slice(0, 8));
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <div>
      <div className="w-[80vw] mx-auto mb-[15px] cursor-pointer">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product._id}
              className="rounded-2xl shadow-lg p-4"
              onClick={() => setSelectedProduct(product)}
            >
              <img
                src={product.img1}
                alt={product.name}
                className="w-full h-48 object-cover rounded-xl"
              />
              <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
              <p className="text-red-500 font-bold">
                {formatPrice(product.price)} VND
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Popup sản phẩm */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg relative">
            {/* Nút đóng popup */}
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-black cursor-pointer"
              onClick={() => setSelectedProduct(null)}
            >
              ✖
            </button>

            {/* Nội dung sản phẩm */}
            <div className="flex flex-col md:flex-row gap-4">
              <img
                src={selectedProduct.img1}
                alt={selectedProduct.name}
                className="w-40 h-40 object-cover rounded-md"
              />
              <div>
                <h2 className="text-xl font-bold">{selectedProduct.name}</h2>
                <p className="text-red-500 font-semibold text-lg">
                  {formatPrice(selectedProduct.price)} VND
                </p>
                <p className="text-gray-600 mt-2">
                  {selectedProduct.short_desc}
                </p>
                <button className="mt-4 bg-black text-white px-4 py-2 rounded-md">
                  View Detail
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* FREE SHIPPING */}
      <div className="bg-gray-100 py-8 w-[80vw] mg-auto">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {/* Free Shipping */}
          <div>
            <h3 className="text-lg font-semibold italic  cursor-pointer">
              FREE SHIPPING
            </h3>
            <p className="text-gray-500 text-sm">Free shipping worldwide</p>
          </div>

          {/* 24x7 Service */}
          <div>
            <h3 className="text-lg font-semibold italic  cursor-pointer">
              24 x 7 SERVICE
            </h3>
            <p className="text-gray-500 text-sm">Free shipping worldwide</p>
          </div>

          {/* Festival Offer */}
          <div>
            <h3 className="text-lg font-semibold italic  cursor-pointer">
              FESTIVAL OFFER
            </h3>
            <p className="text-gray-500 text-sm">Free shipping worldwide</p>
          </div>
        </div>
      </div>
      {/* LET'S BE FRIENDS! */}
      <div className="bg-gray-100 py-8 px-4 w-[80vw] mg-auto">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Text Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold italic">LET'S BE FRIENDS!</h3>
            <p className="text-gray-500 text-sm">
              Has finibus tempor consequat facilisis nisi.
            </p>
          </div>

          {/* Input & Button */}
          <div className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="border border-gray-300 p-2 w-full md:w-72 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <button className="bg-gray-800 text-white px-4 rounded-r-md hover:bg-gray-700  cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/*  phần cuối */}

      <div className="bg-black text-white py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Customer Services */}
          <div>
            <h3 className="text-lg font-semibold italic mb-3">
              CUSTOMER SERVICES
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Help & Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Returns & Refunds
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Online Stores
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold italic mb-3">COMPANY</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  What We Do
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Available Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Latest Posts
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold italic mb-3">SOCIAL MEDIA</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Pinterest
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
