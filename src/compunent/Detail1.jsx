// import React, { useState } from "react";
// import { COLORS } from "../untils/const";
// import productImage from "../assets/product_4.png";
// import Detail2 from "./Detail2";

// const Detail1 = () => {
//   const [quantity, setQuantity] = useState(1);

//   const [selectedColor, setSelectedColor] = useState(COLORS[3]);

//   return (
//     <div>
//       <div className="flex">
//         <div className="flex flex-col items-center md:w-1/2">
//           <img
//             src={productImage}
//             alt="Apple Watch"
//             className="w-72 h-72 object-cover rounded-xl"
//           />
//           <div className="flex space-x-3 mt-4">
//             {COLORS.map((item, index) => (
//               <button
//                 key={index}
//                 className={`w-10 h-10 rounded-full border-2 cursor-pointer ${
//                   item.hex
//                 } ${
//                   selectedColor.color === item.color
//                     ? "border-black"
//                     : "border-transparent"
//                 }`}
//                 onClick={() => setSelectedColor(item)}
//               ></button>
//             ))}
//           </div>
//         </div>

//         <div className="md:w-1/2 mt-6 md:mt-0 md:pl-10 ">
//           <h2 className="text-2xl font-bold">
//             Apple Watch Series 7 41mm GPS Sport Band
//           </h2>
//           <p className="text-xl text-gray-400 my-5 ">10.590.000 VND</p>
//           <p className="text-gray-600 mt-4 text-justify">
//             Trải nghiệm hoàn hảo trên màn hình lớn tràn viền Apple Watch Series
//             7 sở hữu màn hình lớn hơn tới 20% so với thế hệ Series 6, hơn 50% so
//             với Series 3, nhưng điều đặc biệt là kích thước tổng thể của đồng hồ
//             không hề thay đổi. Để có được kết quả này, đội ngũ kỹ sư của Apple
//             đã thiết kế lại hoàn toàn màn hình giúp giảm tới 40% diện tích phần
//             viền, tạo thành một màn hình tràn viền đầy quyến rũ, nơi bạn xem
//             được nhiều nội dung hơn, hình ảnh hấp dẫn hơn.
//           </p>
//           <p className="mt-[20px]  mb-[10px] font-semibold">
//             CATEGORY: <span className="text-gray-500">watches</span>
//           </p>

//           <div className="flex items-center space-x-2">
//             {/* Quantity Selector */}
//             <div className="flex items-center border px-2 py-1 rounded">
//               <span className="text-gray-400 text-sm mr-2">QUANTITY</span>
//               <button
//                 onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
//                 className="px-2 text-gray-500 hover:text-black cursor-pointer"
//               >
//                 &#9664;
//               </button>
//               <input
//                 type="text"
//                 value={quantity}
//                 readOnly
//                 className=" text-center w-8 border-x "
//               />
//               <button
//                 onClick={() => setQuantity(quantity + 1)}
//                 className="px-2 text-gray-500 hover:text-black cursor-pointer"
//               >
//                 &#9654;
//               </button>
//             </div>

//             {/* Add to Cart Button */}
//             <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 cursor-pointer">
//               Add to cart
//             </button>
//           </div>
//         </div>
//       </div>
//       <Detail2 />
//     </div>
//   );
// };

// export default Detail1;
