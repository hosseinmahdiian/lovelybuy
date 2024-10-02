import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Users/components/Home";
import NotFind from "../Users/components/NotFind";
import Save from "../Users/components/Save/Save";
import Search from "../Users/components/Search/Search";
import InPerson from "../MainPage";
import AcccountLogin from "../Users/components/Account/UserInformation/Acccount-Login";
import ChengPass from "../Users/components/Account/ChengPass";
import Place from "../Users/components/Account/Place/Place";
import Chose from "../Users/components/Account/Duti/Chose";
import ShowProducts from "../Users/components/Account/UserInformation/Items/History/Show-producs";
import EE from "../Users/components/InShope/eeeeee";
import Info from "../Users/components/Info/Info";
import Login from "../Users/components/Account/Login/Login";

const Routers = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFind />} />
      <Route index element={<InPerson />} />
      <Route path="/user" element={<Home />} />
      <Route path="user/Save" element={<Save />} />
      <Route path="user/Search" element={<Search />} />
      <Route path="user/ProductID/:ID" element={<Info />} />
      <Route path="user/LoginUser" element={<Login />} />
      <Route path="user/Account" element={<AcccountLogin />} />
      <Route path="user/Account/ChengPasseord" element={<ChengPass />} />
      <Route path="user/Account/Place" element={<Place />} />
      <Route path="user/Account/History/:ID" element={<ShowProducts />} />
      <Route path="user/chose" element={<Chose />} />
      <Route path="ee" element={<EE />} />

      {/* <Route path="Vrify" element={<Vrify />} /> */}
    </Routes>
  );
};

export default Routers;
