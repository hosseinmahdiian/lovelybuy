import React, { createContext, useContext } from "react";

import logo from "../assets/images/logo.png";
import { BsBookmarkFill } from "react-icons/bs";
import { RiShoppingBag3Line } from "react-icons/ri";
import { BsPersonCircle } from "react-icons/bs";
import { LuPhoneCall } from "react-icons/lu";
import { reducerContext } from "../constant/Context";
import { NavLink, useNavigate, useParams } from "react-router-dom";
// import { reducerContext } from "../App";
const Header = () => {
  const reducer = useContext(reducerContext);
  const [reduce, dispach] = reducer;

  const Navigat = useNavigate();
  // console.log(reduce);
  return (
    <>
      {/* // desctop header */}
      <div className="w-full bg-white lg:h-28 border-b  ">
        <div className=" container w-full mx-auto font-IrSana relative  ">
          <div className="lg:flex  xl:px-12 lg:px-12 md:px-0 py-[31px] hidden bg-white items-center z-10 absolute -top-[1px] container  justify-between">
            <div  className="flex gap-4 items-center justify-between">
              <NavLink to="/">
                <img
                  src={logo}
                  alt=""
                  className=" lg:inline-block w-fit h-11  "
                />
              </NavLink>
              <NavLink
                to="/Search"
                className="hidden md:inline-block px-5 shadow-md  lg:w-[350px]  m xl:w-[600px] h-[50px] border rounded-[10px] "
              >
                <span className="mt-2.5 inline-block">جستوجو</span>
              </NavLink>
            </div>
            <div className="flex items-center">
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
                className="flex  border-r px-2"
                onClick={() => {
                  console.log(reduce.Conection);
                  dispach({ type: "Conection" });
                }}
              >
                <span className=" h-[50px] w-[50px]  rounded-xl border-black" >
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

      {/* //mbile header  */}

      <div className=" w-full border-b  h-20 lg:hidden">
        <div className="flex container  items-center absolute top-0 right-0 left-0 mx-auto z-10 w-full    justify-between px-3   bg-white py-2 ">
          <div>
            {/* logo */}
            <NavLink to="/">
              <img
                src={logo}
                alt=""
                className=" w-[160px]  pl-[27px] mr-[13px] mt-1 "
              />
            </NavLink>
          </div>
          <div className="flex">
            {/* //bookmark */}
            <NavLink
              to={`${reduce.save ? `/` : `/Save`}`}
              className="   h-[50px] w-[50px]  "
              onClick={() => dispach({ type: "save" })}
            >
              <BsBookmarkFill className="m-[13px] h-6 w-6 " />
            </NavLink>
            <span onClick={()=>{dispach({ type: "Conection" })}}>
              <LuPhoneCall className="m-[13px] h-6 w-6" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
