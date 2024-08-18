import React, { useContext, useRef } from "react";

import logo from "../../assets/images/logo.png";

import { BsBookmarkFill, BsPersonCircle } from "react-icons/bs";
import { LuPhoneCall } from "react-icons/lu";
import { RiShoppingBag3Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { reducerContext } from "../../constant/Context";
import { IoClose } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import Products from "../Product/Products";
import Filters from "../Filter/Filters";
import PayProducts from "../Basket/PayProducts";
import Successsful from "../Basket/Successsful";
import Conection from "../Private/Conection";
import Pages from "../Account/Pages";
import Basket from "../Basket/Basket";

const Search = () => {
  const reducer = useContext(reducerContext);
  const [reduce, dispach] = reducer;

  const ref = useRef;
  return (
    <>
      {/* headers */}
      <div className="w-full h-0 ">
        <div
          onClick={() => {
            dispach({ type: "logIn" });
          }}
          className={`w-full h-full bg-black fixed top-0 z-[51] bg-opacity-30 ${
            reduce.logIn ? ` ` : `hidden`
          }  `}
        ></div>
        <div
          onClick={() => {
            dispach({ type: "basket" });
          }}
          className={`w-full h-full bg-black fixed top-0 z-[51] bg-opacity-30 ${
            reduce.basket ? ` ` : `hidden`
          }  `}
        ></div>
        <div
          onClick={() => {
            dispach({ type: "pay" });
          }}
          className={`w-full h-full bg-black fixed top-0 z-[52] bg-opacity-30 ${
            reduce.pay ? ` ` : `hidden`
          }  `}
        ></div>
        <div
          onClick={() => {
            dispach({ type: "Conection" });
          }}
          className={`w-full h-full bg-black fixed top-0 z-[51] bg-opacity-30 ${
            reduce.Conection ? ` ` : `hidden`
          }  `}
        ></div>{" "}
        <div className="  mx-auto  relative   ">
          <div className=" container w-full mx-auto font-IrSana absolute left-0 right-0 -top-28 z-50  ">
            <div className="lg:flex justify-between px-12  py-[31px] hidden bg-white w-full  items-center   absolute mx-auto   border-b">
              <div className="flex w-full   items-center gap-3 ">
                <NavLink to="/">
                  {" "}
                  <img
                    src={logo}
                    alt=""
                    className=" lg:inline-block w-fit h-11 mt-2 "
                  />
                </NavLink>
                <input
                  autoFocus
                  type="text"
                  placeholder="جستجوی کالا"
                  className="hidden focus:outline-0 md:inline-block focus:border-0 px-5 shadow-md md:w-[300px] w-[400px] xl:w-[600px] h-[50px] border rounded-[10px] "
                />
              </div>
              <div className="flex items-center ">
                <NavLink
                  to={`${reduce.save ? `/` : `/Save`}`}
                  onClick={() => {
                    dispach({ type: "save" });
                  }}
                  className="h flex px-2"
                >
                  <div className="hidden md:inline-block  h-[50px] w-[50px]  cursor-pointer rounded-xl border-black  ">
                    <BsBookmarkFill className="m-[13px] h-5 w-5 lg:h-6 lg:w-6  md:inline-block" />
                  </div>
                  <span className="">
                    <p className="text-nowrap"> ذخیره شده</p>
                    <span className="  text-red-600  bg-white text-center  ">
                      52 کالا
                    </span>
                  </span>
                </NavLink>
                <div
                  className="hidden px-2  h-[50px] cursor-pointer  lg:flex items-center   border-x "
                  onClick={() => {
                    dispach({ type: "basket" });
                    // console.log(reduce.basket);
                  }}
                >
                  <div className="hidden md:inline-block  h-[50px] w-[50px]  cursor-pointer rounded-xl border-black  ">
                    <RiShoppingBag3Line className=" w-full text-2xl   mt-2.5 " />
                  </div>
                  <span className="">
                    <p className="text-nowrap">سبد خرید</p>
                    <span className="  text-red-600  bg-white text-center  ">
                      52 کالا
                    </span>
                  </span>
                </div>

                <span
                  className=" md:inline-block lg:hidden cursor-pointer h-[50px] w-[50px]  border rounded-xl border-black "
                  onClick={() => {
                    dispach({ type: "basket" });
                  }}
                >
                  <RiShoppingBag3Line className="m-[13px] h-5 w-5 lg:h-6 lg:w-6  md:inline-block" />
                </span>
                <div
                  onClick={() => {
                    // console.log(reduce.logIn);
                    dispach({ type: "logIn" });
                  }}
                  className=" border-x flex  items-center  px-2 cursor-pointer"
                >
                  <span className="hidden md:inline-block  h-[50px] w-[50px]   rounded-xl border-black">
                    <BsPersonCircle className="m-[13px] h-6 w-6  " />
                  </span>
                  <div className="hidden lg:inline-block text-right">
                    <h4 className=" font-bold text-nowrap">اشکان حسنوند</h4>
                    <p className=" opacity-75">09216919291</p>
                  </div>
                </div>
                <div
                  className="flex  border-r cursor-pointer px-2"
                  onClick={() => {
                    console.log(reduce.Conection);
                    dispach({ type: "Conection" });
                  }}
                >
                  <span className=" h-[50px] w-[50px]  rounded-xl border-black">
                    <LuPhoneCall className="hidden md:inline-block m-[13px] h-6 w-6" />
                  </span>
                  <div className="hidden lg:inline-block   text-justify">
                    <p className="text-sm font-bold text-nowrap w-fit ">
                      ارتباط با ما
                    </p>
                    <h1>
                      <span className="text-blue-400">021</span>42156644
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ======================= */}
        <div className=" h-0 ">
          <div className="flex px-5 gap-5 h-20  items-center absolute top-0 right-0 z-10 w-full lg:hidden border  justify-between    bg-white py-2 ">
            <input
              autoFocus
              type="  "
              className="w-full text-xl focus:outline-0 h-12 px-5 rounded-[10px] "
            />
            <NavLink to="/">
              <IoClose className="text-red-500  mx-2 text-3xl " />
            </NavLink>{" "}
          </div>
        </div>
      </div>
      {/* ============ */}

      <div className="mt-5 container mx-auto">
        <NavLink
          to="/"
          className="lg:flex hidden item-center align-middle gap-2 mr-5 "
        >
          <IoIosArrowForward className=" mt-1 text-2xl" />
          <span className="text-red-500 font-bold text-xl">بازگشت</span>
        </NavLink>
      </div>
      <div className="lg:mt-0 mt-2">
        <p className="text-xl mt-7 container mx-auto pr-2.5 mr-5">20 جستجوی اخیر</p>
        <Filters />

        <div className=" bg-[#F5F5F5]  pr-2.5">
          <p className="  text-xl mt-1 pb-1.5 pt-7  mr-5 container mx-auto ">
            20 محصول اخیر
          </p>
        </div>

        <Products />
      </div>
      {/* ======================= */}
      <div
        className={` ${
          reduce.logIn
            ? ` sm:left-0 top-0  `
            : `sm:-left-[8000px] -bottom-[8000px] `
        } fixed  md:w-[500px] es:w-full  z-[55] h-full transition-all  ease-in-out `}
      >
        <Pages />
      </div>
      {/* Basket & pay */}
      <div
        className={` ${
          reduce.basket
            ? reduce.pay
              ? ` sm:left-96 top-0 !z-[50] `
              : ` sm:left-0 top-0  `
            : `sm:-left-[8000px] -bottom-[8000px] `
        } fixed  sm:w-[400px] es:w-full w-[375px] md:w-[500px] z-[55] h-full transition-all  ease-in-out border-r`}
      >
        <Basket />
      </div>
      <div
        className={` ${
          reduce.pay
            ? ` sm:left-0 top-0  `
            : `sm:-left-[8000px] -bottom-[8000px] `
        } fixed  md:w-[500px] es:w-full  z-[55] h-full transition-all  ease-in-out `}

        // className="fixed top-0 left-0 z-20 md:w-[500px] es:w-full"
      >
        <PayProducts />
      </div>
      <div
        className={`
          ${reduce.successful ? `block` : `hidden`}
          absolute  right-0 left-0  top-1/4 w-[calc(100%-40px)] max-w-[600px] mx-auto   z-[55]`}
      >
        <Successsful dispach={dispach} />
      </div>
      <div
        className={`
          ${reduce.Conection ? `block` : `hidden`}
          absolute  right-0 left-0 mx-auto  top-1/4  w-[calc(100%-40px)] max-w-[600px]   z-[55] `}
      >
        <Conection dispach={dispach} />
      </div>
    </>
  );
};

export default Search;
