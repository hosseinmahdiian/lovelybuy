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

const Search = () => {
  const reducer = useContext(reducerContext);
  const [reduce, dispach] = reducer;

  const ref = useRef;
  return (
    <>
      {/* headers */}
      <div className="w-full h-0 ">
        {" "}
        <div className=" bg-b mx-auto  relative   ">
          <div className=" container w-full mx-auto font-IrSana absolute left-0 right-0 -top-28 z-50 ">
            <div className="lg:flex justify-between gap-3 py-[31px] hidden bg-white  items-center  absolute mx-auto   border-b">
              <NavLink to="/">
                {" "}
                <img
                  src={logo}
                  alt=""
                  className=" lg:inline-block w-fit h-11  "
                />
              </NavLink>
              <input
                autoFocus
                type="text"
                placeholder="جستجوی کالا"
                className="hidden focus:outline-0 md:inline-block focus:border-0 px-5 shadow-md md:w-[300px] w-[400px] xl:w-[650px] h-[50px] border rounded-[10px] "
              />
              <NavLink
                to={`${reduce.save ? `/` : `/Save`}`}
                onClick={() => {
                  dispach({ type: "save" });
                }}
                className="hidden md:inline-block  h-[50px] w-[50px]  border rounded-xl border-black"
              >
                <BsBookmarkFill className="m-[13px] h-5 w-5 lg:h-6 lg:w-6  md:inline-block" />
              </NavLink>
              <div
                className="hidden  w-[140px] h-[50px] border rounded-xl cursor-pointer border-red-600 lg:flex items-center justify-evenly bg-[#FFEEEE]"
                onClick={() => {
                  dispach({ type: "basket" });
                  // console.log(reduce.basket);
                }}
              >
                <span>
                  <RiShoppingBag3Line className=" h-6 w-6  " />
                </span>
                <p>سبد خرید</p>
                <span className="  h-7 w-7  border border-red-600 text-red-600 rounded-full bg-white text-center ">
                  52
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
              <span
                className="hidden md:inline-block cursor-pointer h-[50px] w-[50px]  border rounded-xl border-black"
                onClick={() => {
                  // console.log(reduce.logIn);
                  dispach({ type: "logIn" });
                }}
              >
                <BsPersonCircle className="m-[13px] h-6 w-6  " />
              </span>
              <div className="hidden lg:inline-block ml-[15px]">
                <h4 className=" font-bold text-nowrap">اشکان حسنوند</h4>
                <p className="text-center opacity-75">09216919291</p>
              </div>
              <div className="hidden lg:inline-block">
                <h1>
                  <span className="text-blue-400">021</span>42156644
                </h1>
                <p className="text-sm font-bold text-nowrap">
                  باما در تماس باشید
                </p>
              </div>

              <span className="mr-[15px] h-[50px] w-[50px] lg:border-0 md:border rounded-xl border-black">
                <LuPhoneCall className="hidden md:inline-block m-[13px] h-6 w-6" />
              </span>
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
          className="lg:flex hidden item-center align-middle gap-2 mt "
        >
          <IoIosArrowForward className=" mt-1 text-2xl" />
          <span className="text-red-500 font-bold text-xl">بازگشت</span>
        </NavLink>
      </div>
      <div className="lg:mt-0 mt-24">
        <p className="text-xl mt-7 container mx-auto pr-2.5">20 جستجوی اخیر</p>
        <Filters />

        <div className=" bg-[#F5F5F5]  pr-2.5">
          <p className="  text-xl mt-1 pb-1.5 pt-7 container mx-auto ">
            20 محصول اخیر
          </p>
        </div>

        <Products />
      </div>
    </>
  );
};

export default Search;
