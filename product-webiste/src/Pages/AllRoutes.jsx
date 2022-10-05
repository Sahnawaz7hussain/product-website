import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import CartPage from "./CartPage";
export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
};
