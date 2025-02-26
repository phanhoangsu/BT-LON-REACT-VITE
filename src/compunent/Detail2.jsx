import React from "react";

const Detail2 = () => {
  return (
    <div>
      {/* Product Description */}
      <div className="mt-10">
        <button className="px-4 py-2 bg-black text-white rounded  cursor-pointer">
          DESCRIPTION
        </button>
        <h3 className="text-xl font-semibold mt-[6px] mb-[10px]">
          PRODUCT DESCRIPTION
        </h3>
        <p className="italic mt-2">ĐẶC ĐIỂM NỔI BẬT</p>
        <ul className="list-disc ml-5 text-gray-700">
          <li>
            Chức năng màn hình luôn bật giữ cho chức năng xem giờ luôn hoạt
            động, tiết kiệm pin hơn
          </li>
          <li>
            Thoải mái sử dụng ở hồ bơi hay ngoài trời với chuẩn kháng bụi IP6X,
            chống nước đến 50m
          </li>
          <li>
            Đo nhịp tim, oxy trong máu, theo dõi giấc ngủ cùng nhiều tính năng
            sức khỏe tích hợp sẵn
          </li>
          <li>
            Trải nghiệm âm nhạc với bộ nhớ trong 32GB cùng khả năng kết nối tai
            nghe bluetooth
          </li>
          <li>Cổng sạc Type C, sạc nhanh 45 phút cho 80% pin</li>
        </ul>
      </div>
      {/* Related Products */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold mt-[40px] mb-[20px] italic  ">
          RELATED PRODUCTS
        </h3>
        <div className="flex space-x-4 cursor-pointer ">
          <div className="w-40">
            <img
              src="https://images2.thanhnien.vn/528068263637045248/2024/9/9/1-1725903568868143177445.jpg"
              alt="Apple Watch Series 6"
              className="rounded-xl "
            />
            <p className="font-sans italic text-center">
              Apple Watch Series 6 40mm GPS Sport Band
            </p>
            <p className="font-thin text-center">9.090.000 VND</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail2;
