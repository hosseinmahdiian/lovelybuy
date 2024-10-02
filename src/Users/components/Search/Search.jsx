import React, { useContext, useRef, useState } from "react";

import logo from "../../../assets/images/logo.png";

import { BsBookmarkFill, BsPersonCircle } from "react-icons/bs";
import { LuPhoneCall } from "react-icons/lu";
import { RiShoppingBag3Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { reducerContext } from "../../constant/Context";
import { IoClose } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import Products from "../Product/Products";
import Filters from "../Filter/Filters";
import PayProducts from "../Derawer/PayProducts";
import Successsful from "../Derawer/Successsful";
import Conection from "../Conection";
import Login from "../Account/Login/Login";
import Basket from "../Derawer/Basket";
import Items from "../Item/Items";
import { FaRegCircleUser } from "react-icons/fa6";
import Info from "../Info/Info";
import Layout from "../../layout/Layout";

const Search = () => {
  const reducer = useContext(reducerContext);
  const [reduce, dispach] = reducer;

  const [search, setSearch] = useState("");

  const ref = useRef;
  return (
    <>
     
      <Layout>
        <div className="pt-12 container mx-auto lg:block hidden">
          <NavLink
            to={-1}
            className="lg:flex hidden item-center align-middle gap-2 pr-2 "
          >
            <IoIosArrowForward className=" mt-1 text-2xl" />
            <span className="text-red-500 font-bold text-xl pr2">
              جستجو کالا
            </span>
          </NavLink>
        </div>
        <div className="lg:mt-0 mt-2">
          <p className="text-xl mt-7 container mx-auto  pr-2">20 جستجوی اخیر</p>
          {/* <Items /> */}
          <p className="text-center font-bold text-red-500">
            سابقه جستجویی در دسترس نیست
          </p>

          <div className=" bg-[#F5F5F5]  w-full ">
            <p className="  text-xl mt-1 pb-1.5 pt-7  pr-2  container mx-auto ">
              20 محصول اخیر
            </p>
            <p className="text-center font-bold text-red-500">
              سابقه جستجویی در دسترس نیست
            </p>
          </div>

          {/* <Products /> */}
        </div>
        {/* ======================= */}
        {/* <div
        className={` ${
          reduce.Derawer
          ? ` sm:left-0 top-0  `
          : `sm:-left-[8000px] -bottom-[8000px] `
          } fixed  md:w-[400px] es:w-full  z-[55] h-full transition-all  ease-in-out `}
          >
        <Login />
      </div> */}
        {/* Basket & pay */}
        <div
          className={` ${
            reduce.basket
              ? reduce.pay
                ? ` sm:left-96 top-0 !z-[50] `
                : ` sm:left-0 top-0  `
              : `sm:-left-[8000px] -bottom-[8000px] `
          } fixed  es:w-full md:w-[400px] z-[55] h-full transition-all  ease-in-out border-r`}
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
          } fixed  md:w-[400px] es:w-full  z-[55] h-full transition-all  ease-in-out `}

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
          absolute  mx-auto  top-1/4  w-[calc(100%-40px)] max-w-[600px]   z-[55] `}
        >
          <Conection dispach={dispach} />
        </div>
      </Layout>
    </>
  );
};

export default Search;
