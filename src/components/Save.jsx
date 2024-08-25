import React, { useContext, useState } from "react";
import PayProducts from "./Basket/PayProducts";
import Basket from "./Basket/Basket";
import Conter from "./Conter";
import Products from "./Product/Products";
import Items from "./Item/Items";
import Categorys from "./Category/Categorys";
import Slides from "./Slider/Slides";
import { reducerContext } from "../constant/Context";
import Pages from "./Account/Pages";
import Successsful from "./Basket/Successsful";
import Conection from "./Conection";
import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { useQuery } from "react-query";
import { getCategory } from "./services/Catgory";
import Loader from "./Loader";

const Save = () => {
  const reducer = useContext(reducerContext);
  const [reduce, dispach] = reducer;

  const [select, setSelect] = useState();

  const { isLoading: isLoadCategory, data: slid } = useQuery(
    ["get-category"],
    getCategory
  );

  return (
    <>
      {isLoadCategory ? (
        <Loader />
      ) : (
        <div className=" h-full mt-5 ">
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

          <div className="mt-5 container mx-auto mb-5">
            <NavLink to="/" className="flex  item-center  gap-2  ">
              <IoIosArrowForward className=" mt lg:text-2xl" />
              <span className="text-red-500 font-bold lg:text-xl ">
                ذخیره شده
              </span>
            </NavLink>
          </div>

          <Slides
            slid={slid?.data.data}
            select={select}
            setSelect={setSelect}
          />
          <Categorys sub={slid?.data.data} selectCatgory={select} />
          <Items />
          <Products />
          <Conter />
          {/*  account & log in */}
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
              !!reduce.basket
                ? reduce.pay
                  ? ` sm:left-96 top-0 !z-[11] `
                  : ` sm:left-0 top-0  `
                : `sm:-left-[8000px] -bottom-[8000px] `
            } fixed  sm:w-[400px] es:w-full  z-[16] h-full transition-all  ease-in-out border-r`}
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
          absolute  right-0 left-0 mx-auto  top-1/4  w-full   z-[35] `}
          >
            <Conection dispach={dispach} />
          </div>
        </div>
      )}
    </>
  );
};

export default Save;
