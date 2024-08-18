import React, { useContext } from "react";
import Categorys from "./Category/Categorys";
import Slides from "./Slider/Slides";
import Items from "./Item/Items";
import Filters from "./Filter/Filters";
import Products from "./Product/Products";
import Conter from "./Conter";
import { reducerContext } from "../constant/Context";
import Account from "./Account/Accont";
import Basket from "./Basket/Basket";
import PayProducts from "./Basket/PayProducts";
import Order from "./order"
import Loader from "./Loader";
import Pages from "./Account/Pages";
import Successsful from "./Basket/Successsful";
import Conection from "./Private/Conection";

const Home = () => {
  const reducer = useContext(reducerContext);
  const [reduce, dispach] = reducer;

  // console.log(reduce);
 
    return (
      <>
        <div className="   ">
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
          <div
            onClick={() => {
              dispach({ type: "pay" });
            }}
            className={`w-full h-full bg-black fixed top-0 z-20 bg-opacity-30 ${
              reduce.pay ? ` ` : `hidden`
            }  `}
          ></div>
          {/* <div
            onClick={() => {
              dispach({ type: "Conection" });
            }}
            className={`w-full h-full bg-blue-600 fixed top-0 z-50 bg-opacity-30 ${
              reduce.Conection ? ` ` : `hidden`
            }  `}
          ></div> */}
          <Order />
          {/* <Slides /> */}
          <Categorys />
          <Filters />
          <div className="mt-1">
            <Products />
          </div>{" "}
          {/* account & log in */}
          {/* <Loader /> */}
          <div
            className={` ${
              reduce.logIn
                ? ` sm:left-0 top-0  `
                : `sm:-left-[8000px] -bottom-[8000px] `
            } fixed  md:w-[400px] es:w-full  z-[12] h-full transition-all  ease-in-out `}
          >
            <Pages />
          </div>
          {/* Basket & pay */}
          <div
            className={` ${
              reduce.basket
                ? reduce.pay
                  ? ` sm:left-96 top-0 !z-[11] `
                  : ` sm:left-0 top-0  `
                : `sm:-left-[8000px] -bottom-[8000px] `
            } fixed  sm:w-[400px] es:w-full w-[375px] md:w-[500px] z-[16] h-full transition-all  ease-in-out border-r`}
          >
            <Basket />
          </div>
          <div
            className={` ${
              reduce.pay
                ? ` sm:left-0 top-0  `
                : `sm:-left-[8000px] -bottom-[8000px] `
            } fixed  md:w-[400px] es:w-full  z-20 h-full transition-all  ease-in-out `}

            // className="fixed top-0 left-0 z-20 md:w-[500px] es:w-full"
          >
            <PayProducts />
          </div>
          <div
            className={`
          ${reduce.successful ? `block` : `hidden`}
          absolute  right-0 left-0  top-1/4 w-[calc(100%-40px)] max-w-[600px] mx-auto   z-[35]`}
          >
            <Successsful dispach={dispach} />
          </div>
          <div
            className={`
          ${reduce.Conection ? `block` : `hidden`}
          absolute  h-full w-full  top-0   z-[35] `}
          >
            <Conection dispach={dispach} />
          </div>
        </div>
      </>
    );
  
};

export default Home;
