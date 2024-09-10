import React, { useContext, useEffect, useState } from "react";
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
import Order from "./order";
import Loader from "./Loader";
import Pages from "./Account/Pages";
import Successsful from "./Basket/Successsful";
import Conection from "./Conection";
import { useQuery } from "react-query";
import { getCategory } from "../services/Catgory";
import Info from "./Info/Info";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const reducer = useContext(reducerContext);
  const [reduce, dispach] = reducer;
  const [selectCatgory, setSelectCatgory] = useState();
  const [selectSubCatgory, setSelectSubCatgory] = useState();
  const [selectSubSubCatgory, setSelectSubSubCatgory] = useState();

  const { isLoading: isLoadCategory, data: slid } = useQuery(
    ["get-category"],
    getCategory
  );
  // console.log(selectSubSubCatgory);

  const [searchPrams, setSearchPrams] = useSearchParams();
  // setSearchPrams({ LogIn: "false" });

  return (
    <>
      {isLoadCategory ? (
        <Loader />
      ) : (
        <div className="   ">
          <div
            onClick={() => {
              // searchPrams.get("LogIn") !== "false" &&
              dispach({ type: "Derawer" });
              // console.log(searchPrams.get("LogIn") === "false");
            }}
            className={`w-full h-full bg-black fixed top-0 z-10 bg-opacity-30 ${
              reduce.Derawer ? ` ` : `hidden`
            }  `}
          ></div>
          <div
            onClick={() => {
              // searchPrams.get("LogIn") !== "false" &&
              dispach({ type: "Info" });
              // console.log(searchPrams.get("LogIn") === "false");
            }}
            className={`w-full h-full bg-black fixed top-0 z-10 bg-opacity-30 ${
              reduce.Info ? ` ` : `hidden`
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
          <Order />
          <Slides
            slid={slid?.data.data}
            select={selectCatgory}
            setSelect={setSelectCatgory}
          />
          <Categorys
            sub={slid?.data.data}
            selectCatgory={selectCatgory}
            setSelectSubCatgory={setSelectSubCatgory}
            />
          <Filters
            sub={slid?.data.data}
            selectCatgory={selectCatgory}
            selectSubCatgory={selectSubCatgory}
            setSelectSubSubCatgory={setSelectSubSubCatgory}
          />
          <div className="mt-1">
            <Products />
          </div>{" "}
          {/* ===== */}
          <div
            className={` ${
              reduce.Info
                ? ` sm:left-0 top-0  `
                : `sm:-left-[8000px] -bottom-[8000px] `
            } fixed  sm:w-[400px] w-full  z-20 h-full transition-all  ease-in-out `}
          >
            <Info />
          </div>
          {/* account & log in */}
          <div
            className={` ${
              reduce.Derawer
                ? ` left-0 top-0  `
                : `sm:-left-[8000px] -bottom-[8000px] `
            } fixed  sm:w-[400px] w-full  z-[12] h-full transition-all  ease-in-out `}
          >
            <Pages />
          </div>
          {/* Basket & pay */}
          <div
            className={` ${
              reduce.basket
                ? reduce.pay
                  ? ` sm:left-96 top-0 !z-[11] `
                  : ` left-0 top-0  `
                : `sm:-left-[8000px] -bottom-[8000px] `
            } fixed  sm:w-[400px] w-full  z-[16] h-full transition-all  ease-in-out border-r`}
          >
            <Basket />
          </div>
          <div
            className={` ${
              reduce.pay
                ? ` sm:left-0 top-0  `
                : `sm:-left-[8000px] -bottom-[8000px] `
            } fixed  sm:w-[400px] w-full  z-20 h-full transition-all  ease-in-out `}
          >
            <PayProducts />
          </div>
          <div
            className={`
          ${reduce.successful ? `block` : `hidden`}
          absolute  right-0 left-0  top-1/4 w-[calc(100%-40px)] max-w-[600px] mx-auto   z-[35]`}
          >
            <Successsful />
          </div>
          <div
            className={`
          ${reduce.Conection ? `block` : `hidden`}
          absolute  h-full w-full  top-0   z-[35] `}
          >
            <Conection />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
