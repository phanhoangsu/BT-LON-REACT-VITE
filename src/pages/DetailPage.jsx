import React, { useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

const DetailPage = () => {
  const { code } = useParams();
  return (
    <div className="mg-auto bg-gray-100">
      <Outlet />
      <div className="p-4">
        <div className="mt-4 space-x-4"></div>

        <div className="mt-6 border-t pt-4"></div>
      </div>
    </div>
  );
};

export default DetailPage;
