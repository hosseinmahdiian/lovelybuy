import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import NotFind from "../components/NotFind";
import Category from "../components//Category/Categorys";

import Save from "../components/Save";
const Routers = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="*" element={<NotFind />} />
      <Route path="Save" element={<Save />} />
    </Routes>
  );
};

export default Routers;
