import React from "react";
import Header from "./Header";
import Footer from "./footer";
import Home from "../components/Home";
// import { Router } from "react-router-dom";
import Routers from "../router/Router";
import Conter from "../components/Conter";

const Layout = ({ children }) => {
  return (
    <>
      <div className="font-IrSans relative h-screen ">
        <Header />
        {/* <span className="h-20 md:h-0 inline-block"></span> */}
        {children}
        {/* <Routers/> */}
        <Conter/>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Layout;
