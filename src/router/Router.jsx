import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import NotFind from "../components/NotFind";
import Category from "../components//Category/Categorys";
import Account from "../components/Account/Accont";
const Routers = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="*" element={<NotFind />} />
      <Route path="/category" element={<Category />} />
      <Route path="/accounte" element={<Account />} />
    </Routes>
  );
};

export default Routers;
