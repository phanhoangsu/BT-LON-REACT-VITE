import React, { useState } from "react";

const DATA_CART = [
  {
    id: 1,
    name: "Apple iPhone 11 64GB",
    price: 10999000,
    quantity: 1,
    image:
      "https://res.cloudinary.com/dbpqjnu0o/image/upload/v1740578421/product_1_vgjshk.png",
  },
  {
    id: 2,
    name: "Apple AirPods 3rd gen",
    price: 4390000,
    quantity: 2,
    image:
      "https://res.cloudinary.com/dbpqjnu0o/image/upload/v1740578421/product_5_mryzua.png",
  },
];
const Cart2 = () => {
  const [cart, setCart] = useState(DATA_CART);

  const updateQuantity = (id, prd) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + prd) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="  mx-auto p-6 bg-white shadow-lg flex  ">
      <div>
        <h2 className="text-xl font-semibold mb-4">SHOPPING CART</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-3">IMAGE</th>
                <th className="p-3">PRODUCT</th>
                <th className="p-3">PRICE</th>
                <th className="p-3">QUANTITY</th>
                <th className="p-3">TOTAL</th>
                <th className="p-3">REMOVE</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td className="p-3 text-center">
                    <img src={item.image} alt={item.name} className="w-12" />
                  </td>
                  <td className="p-3 font-medium">{item.name}</td>
                  <td className="p-3">{item.price.toLocaleString()} VND</td>
                  <td className="p-3 flex items-center">
                    <button
                      className="px-2 text-lg"
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      ◄
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      className="px-2 text-lg"
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      ►
                    </button>
                  </td>
                  <td className="p-3">
                    {(item.price * item.quantity).toLocaleString()} VND
                  </td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex justify-between items-center -t pt-4 bg-gray-100 p-4">
          <button className="text-gray-500 flex items-center">
            ← Continue shopping
          </button>
          <button className="bg-black text-white px-6 py-2 rounded flex items-center">
            Proceed to checkout →
          </button>
        </div>
      </div>

      <div className="mt-[43px] ml-[30px] bg-gray-100 p-4 rounded ">
        <h3 className="text-lg font-semibold">CART TOTAL</h3>
        <p className="mt-2 text-gray-700">
          Subtotal: {subtotal.toLocaleString()} VND
        </p>
        <p className="text-xl font-bold">
          Total: {subtotal.toLocaleString()} VND
        </p>
        <input
          type="text"
          placeholder="Enter your coupon"
          className="w-full mt-2 p-2 border rounded"
        />
        <button className="w-full mt-2 bg-black text-white py-2 rounded">
          Apply coupon
        </button>
      </div>
    </div>
  );
};

export default Cart2;
