import React from "react";
import Sidebar from "../compunent/Sidebar";
import ProductList from "../compunent/ProductList";

const ShopPage = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <ProductList />
    </div>
  );
};

export default ShopPage;
