import React, { useContext } from "react";
import Categorys from "./Category/Categorys";
import Slides from "./Slider/Slides";
import Items from "./Item/Items";
import Products from "./Product/Products";
import Conter from "./Conter";
import { reducerContext } from "../constant/Context";
import Accont from "./Accont";

const Home = () => {
  const reducer = useContext(reducerContext);
  const [reduce, dispach] = reducer;
  return (
    <>
      <div className="lg:mt-36 md:mt-32 mt-[75px] relative">
        <div
          onClick={() => {
            dispach({ type: "acconte" });
          }}
          className={`w-full h-full bg-black absolute -top-80 z-10 bg-opacity-30 ${
            reduce.acconte ? ` ` : `hidden`
          }  `}
        ></div>
        <Slides />
        <Categorys />
        <Items />
        <Products />
        <Conter />
        <div
          className={` ${
            reduce.acconte ? ` md:left-0 top-0 ` : `md:-left-[8000px] -bottom-[8000px] `
          } fixed  sm:w-[400px] w-full z-[12] h-full transition-all  ease-in-out `}
        >
          <Accont />
        </div>
      </div>
    </>
  );
};

export default Home;
