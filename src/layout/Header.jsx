import React, { createContext, useContext } from "react";

import logo from "../assets/images/logo.png";
import { BsBookmarkFill } from "react-icons/bs";
import { RiShoppingBag3Line } from "react-icons/ri";
import { BsPersonCircle } from "react-icons/bs";
import { LuPhoneCall } from "react-icons/lu";
import { reducerContext } from "../constant/Context";
// import { reducerContext } from "../App";
const Header = () => {
  const reducer = useContext(reducerContext);
  const [reduce, dispach] = reducer;

  // console.log(reduce);
  return (
    <>
      {/* // desctop header */}
      <div className=" container w-full mx-auto font-IrSana ">
        <div className="md:flex justify-between gap-3 py-[31px] hidden bg-white items-center z-10 fixed top-0 container  border-b-2">
          <img src={logo} alt="" className=" lg:inline-block w-fit h-11  " />
          <input
            type="text"
            placeholder="جستجوی کالا"
            className="hidden md:inline-block shadow-md md:w-[300px] w-[400px] xl:w-[650px] h-[50px] border rounded-xl border-black"
          />
          <span
            onClick={() => dispach({ type: "save" })}
            className="hidden md:inline-block  h-[50px] w-[50px]  border rounded-xl border-black"
          >
            <BsBookmarkFill className="m-[13px] h-5 w-5 lg:h-6 lg:w-6  md:inline-block" />
          </span>
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
            <h4 className=" font-bold">اشکان حسنوند</h4>
            <p className="text-center opacity-75">09216919291</p>
          </div>
          <div className="hidden lg:inline-block">
            <h1>
              <span className="text-blue-400">021</span>42156644
            </h1>
            <p className="text-sm font-bold ">باما در تماس باشید</p>
          </div>

          <span className="mr-[15px] h-[50px] w-[50px] lg:border-0 md:border rounded-xl border-black">
            <LuPhoneCall className="hidden md:inline-block m-[13px] h-6 w-6" />
          </span>
        </div>
      </div>

      {/* //mbile header  */}

      <div className="  ">
        <div className="flex fixed top-0 right-0 z-10 w-full md:hidden border  justify-between px-3   bg-white p-3 ">
          <div>
            {/* logo */}
            <img src={logo} alt="" className="  w-[140px] h-11 pl-[27px]" />
          </div>
          <div className="flex">
            {/* //bookmark */}
            <span
              className="   h-[50px] w-[50px]  "
              onClick={() => dispach({ type: "save" })}
            >
              <BsBookmarkFill className="m-[13px] h-6 w-6 " />
            </span>
            <span>
              <LuPhoneCall className="m-[13px] h-6 w-6" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
