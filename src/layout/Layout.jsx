import React from "react";
import Header from "./Header";
import Footer from "./footer";
import Home from "../components/Home";
// import { Router } from "react-router-dom";
import Routers from "../router/Router";

const Layout = ({ children }) => {
  return (
    <>
      <div className=" ">
        <Header />
        <span className="h-20 md:h-0 inline-block"></span>
        {children}
        <Routers/>
        
        <Footer />
      </div>
    </>
  );
};

export default Layout;
