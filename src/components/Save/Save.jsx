import React, { useContext, useState } from "react";
import PayProducts from "../Basket/PayProducts";
import Basket from "../Basket/Basket";
import Conter from "../Conter";
import Items from "../Item/Items";
import Categorys from "../Category/Categorys";
import Slides from "../Slider/Slides";
import { reducerContext } from "../../constant/Context";
import Login from "../Account/Login/Login";
import Successsful from "../Basket/Successsful";
import Conection from "../Conection";
import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { useQuery } from "react-query";
import { getCategory } from "../../services/Catgory";
import Loader from "../Loader";

import Layout from "../../layout/Layout";
import { decrypt } from "../../constant/auth/crypto";
import Products from "./Products";
// import { getFavorite } from "../../services/Favorite";

const Save = () => {
  const reducer = useContext(reducerContext);
  const [reduce, dispach] = reducer;
  const [authUser, setAuthUser] = useState(
    JSON.parse(decrypt(localStorage.getItem("authUser")))
  );
  const [favoriteProduct, setFavoriteProduct] = useState();

  const [selectCatgory, setSelectCatgory] = useState();
  const [selectSubCatgory, setSelectSubCatgory] = useState();
  const [selectSubSubCatgory, setSelectSubSubCatgory] = useState();

  const { isLoading: isLoadCategory, data: slid } = useQuery(
    ["get-category"],
    getCategory
  );
 

  return (
    <>
      {isLoadCategory  ? (
        <Loader />
      ) : (
        <Layout>
          <div className=" h-full mt-5 ">
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

            <div className="mt-5 container mx-auto mb-5 pr-2">
              <NavLink to="/" className="flex    gap-2  ">
                <IoIosArrowForward className=" mt-1 lg:mt-0 lg:text-2xl" />
                <span className="text-red-500 font-bold lg:text-xl ">
                  ذخیره شده
                </span>
              </NavLink>
            </div>
            <p className="text-center font-bold text-red-500">
              محصول ذخیره شده ای یافت نشد{" "}
            </p>

            {/* <Slides
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
            />{" "}
            
            <Products /> */}
            {/* <div className=" mx-auto  py-2.5  pb-20 bg-[#F5F5F5]">
              <div className="container w-full mx-auto ">
                <div className="2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid es:grid-cols-2  mx-auto">
                  {data?.data.data?.map((item, index) => (
                    <span key={index} className="mb-3  ">
                      <Product item={item} />
                    </span>
                  ))}
                </div>
              </div>
            </div> */}
            <Products/>
            <Conter />
            {/*  account & log in */}
            {/* <div
            className={` ${
              reduce.Derawer
                ? ` sm:left-0 top-0  `
                : `sm:-left-[8000px] -bottom-[8000px] `
            } fixed  md:w-[400px] es:w-full  z-[12] h-full transition-all  ease-in-out `}
          >
            <Login />
          </div> */}
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
            {/* <div
            className={` ${
              reduce.Info
                ? ` sm:left-0 top-0  `
                : `sm:-left-[8000px] -bottom-[8000px] `
            } fixed  sm:w-[400px] w-full  z-20 h-full transition-all  ease-in-out `}
          >
            <Info />
          </div> */}
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
        </Layout>
      )}
    </>
  );
};

export default Save;
