import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import NotFind from "../components/NotFind";
import Category from "../components//Category/Categorys";

import Save from "../components/Save";
import Search from "../components/Search/Search";
import Private from "../components/Private/Private ";
import InPerson from "../components/InPerson/InPerson";
const Routers = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="*" element={<NotFind />} />
      <Route path="Save" element={<Save />} />
      <Route path="Search" element={<Search />} />
      <Route path="Inperson" element={<InPerson />} />
    </Routes>
  );
};

export default Routers;
