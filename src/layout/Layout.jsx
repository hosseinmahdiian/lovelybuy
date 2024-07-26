import React from "react";
import Header from "./Header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <div className=" ">
        <Header />
        {children}
        <span className="h-20 md:h-0 inline-block"></span>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
