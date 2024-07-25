import React from "react";
import Categorys from "./Categorys";
import Slides from "./Slides";
import Items from "./Items";
import Products from "./Products";

const Home = () => {
  return (
    <>
      <div className="lg:mt-36 md:mt-32 mt-[75px]">
        <Slides />
        <Categorys />
        <Items />
       <Products/>
      </div>
    </>
  );
};

export default Home;
