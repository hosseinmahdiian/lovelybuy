import React, { useContext } from "react";
import Categorys from "./Category/Categorys";
import Slides from "./Slider/Slides";
import Items from "./Item/Items";
import Products from "./Product/Products";
import Conter from "./Conter";
import { reducerContext } from "../constant/Context";
import Account from "./Account/Accont";
import Basket from "./Basket/Basket";

const Home = () => {
  const reducer = useContext(reducerContext);
  const [reduce, dispach] = reducer;

  // console.log(reduce);
  return (
    <>
      <div className="lg:mt-36 md:mt-32 h-full mt-[75px] ">
        <div
          onClick={() => {
            dispach({ type: "logIn" });
          }}
          className={`w-full h-full bg-black fixed top-0 z-10 bg-opacity-30 ${
            reduce.logIn ? ` ` : `hidden`
          }  `}
        ></div>
        <div
          onClick={() => {
            dispach({ type: "basket" });
          }}
          className={`w-full h-full bg-black fixed top-0 z-10 bg-opacity-30 ${
            reduce.basket ? ` ` : `hidden`
          }  `}
        ></div>
        <Slides />
        <Categorys />
        <Items />
        <Products />
        <Conter />
        {/*  account & log in */}
        <div
          className={` ${
            reduce.logIn
              ? ` sm:left-0 top-0  `
              : `sm:-left-[8000px] -bottom-[8000px] `
          } fixed  md:w-[500px] es:w-full  z-[12] h-full transition-all  ease-in-out `}
        >
          <Account />
        </div>
        {/* Basket & pay */}
        <div
          className={` ${
            reduce.basket
              ? ` sm:left-0 top-0  `
              : `sm:-left-[8000px] -bottom-[8000px] `
          } fixed  sm:w-[400px] es:w-full w-[375px] md:w-[500px] z-10 h-full transition-all  ease-in-out`}
        >
          <Basket />
        </div>
      </div>
    </>
  );
};

export default Home;
