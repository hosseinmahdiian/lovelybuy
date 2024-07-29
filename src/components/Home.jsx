import React, { useContext } from "react";
import Categorys from "./Category/Categorys";
import Slides from "./Slider/Slides";
import Items from "./Item/Items";
import Products from "./Product/Products";
import Conter from "./Conter";
import { reducerContext } from "../constant/Context";
import Accont from "./Acconte/Accont";

const Home = () => {
  const reducer = useContext(reducerContext);
  const [reduce, dispach] = reducer;
  return (
    <>
      <div className="lg:mt-36 md:mt-32 mt-[75px] relative">
        <div
          onClick={() => {
            dispach({ type: "logIn" });
          }}
          className={`w-full h-full bg-black absolute -top-80 z-10 bg-opacity-30 ${
            reduce.logIn ? ` ` : `hidden`
          }  `}
        ></div>
        <Slides />
        <Categorys />
        <Items />
        <Products />
        <Conter />
        <div
          className={` ${
            reduce.logIn
              ? ` sm:left-0 top-0  `
              : `sm:-left-[8000px] -bottom-[8000px] `
          } fixed  sm:w-[400px] es:w-full w-[375px] z-[12] h-full transition-all  ease-in-out `}
        >
          <Accont />
        </div>
      </div>
    </>
  );
};

export default Home;
