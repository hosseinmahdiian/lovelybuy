import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import NotFind from "../components/NotFind";
import Category from "../components//Category/Categorys";
import Accont from "../components/Acconte/Accont";

const Routers = () => {
  return (
    <Routes>
      <Route index element={<Home />} />

      <Route path="*" element={<NotFind />} />
      <Route path="/category" element={<Category />} />
      <Route path="/acconte" element={<Accont />} />
    </Routes>
  );
};

export default Routers;
