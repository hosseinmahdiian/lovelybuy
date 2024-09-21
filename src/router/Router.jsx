import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import NotFind from "../components/NotFind";
// import Category from "../components//Category/Categorys";

import Save from "../components/Save/Save";
import Search from "../components/Search/Search";
import Private from "../components/Private/Private ";
import InPerson from "../components/InPerson/InPerson";
import Info from "../components/Info/Info";
// import Acconut from "../components/Account/Login/Accont";
// import Vrify from "../components/Account/Login/Vrify";
import Login from "../components/Account/Login/Login";
import AcccountLogin from "../components/Account/UserInformation/Acccount-Login";
import ChengPass from "../components/Account/ChengPass";
import Place from "../components/Account/Place/Place";
import ShowProducts from "../components/Account/Items/History/Show-producs";
import Chose from "../components/Account/Duti/Chose";
const Routers = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="*" element={<NotFind />} />
      <Route path="Save" element={<Save />} />
      <Route path="Search" element={<Search />} />
      <Route path="Inperson" element={<InPerson />} />
      <Route path="ProductID/:ID" element={<Info />} />
      <Route path="LoginUser" element={<Login />} />
      <Route path="Account" element={<AcccountLogin />} />
      <Route path="Account/ChengPasseord" element={<ChengPass />} />
      <Route path="Account/Place" element={<Place />} />
      <Route path="Account/History" element={<ShowProducts />} />
      <Route path="chose" element={<Chose />} />

      {/* <Route path="Vrify" element={<Vrify />} /> */}
    </Routes>
  );
};

export default Routers;
