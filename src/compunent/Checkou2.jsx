import React from "react";

const Checkou2 = () => {
  return (
    <div className="mt-[30px] italic ">
      <h2 className="text-xl font-semibold mb-4">BILLING DETAILS</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Form nhập thông tin */}
        <div className="md:col-span-2">
          <div className="space-y-4">
            <div>
              <label className="block font-semibold text-gray-700">
                FULL NAME:
              </label>
              <input
                type="text"
                placeholder="Enter Your Full Name Here!"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block font-semibold text-gray-700">
                EMAIL:
              </label>
              <input
                type="email"
                placeholder="Enter Your Email Here!"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block font-semibold text-gray-700">
                PHONE NUMBER:
              </label>
              <input
                type="tel"
                placeholder="Enter Your Phone Number Here!"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block font-semibold text-gray-700">
                ADDRESS:
              </label>
              <input
                type="text"
                placeholder="Enter Your Address Here!"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <button className="bg-black text-white px-6 py-2 rounded">
              Place order
            </button>
          </div>
        </div>

        {/* Bảng tổng hợp đơn hàng */}
        <div className="bg-gray-100 p-4 rounded  ">
          <h3 className="text-lg font-semibold">YOUR ORDER</h3>
          <div className="mt-2 text-gray-700">
            <p>
              <span className="font-semibold">Apple iPhone 11 64GB</span> -
              {" asdasda"}
              10,999,000 VND x 1
            </p>
            <p>
              <span className="font-semibold">Apple AirPods 3rd gen</span> -
              {" asddsa"}
              4,390,000 VND x 2
            </p>
          </div>
          <p className="mt-4 text-xl font-bold">TOTAL: 19,779,000 VND</p>
        </div>
      </div>
    </div>
  );
};

export default Checkou2;
