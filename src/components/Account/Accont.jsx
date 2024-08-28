import React, { useContext, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoInformationCircleOutline } from "react-icons/io5";
import logo from "../../assets/images/logo.png";
import { reducerContext } from "../../constant/Context";
import { GoUnlock } from "react-icons/go";
import { GrLocation } from "react-icons/gr";
import { MdOutlineLogout } from "react-icons/md";
import { BsFileEarmarkText } from "react-icons/bs";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";

const Acconut = ({ sendSms, setMobile, mobile, setForm }) => {
  

  const reducer = useContext(reducerContext);
  const [reduce, dispach] = reducer;

  const [mobileAlert, setMobileAlert] = useState("");

  const chenchHandeler = (e) => {
    // console.log(e.target.value);
    setMobile(e.target.value);
    setForm({ mobile: e.target.value });
  };

  return (
    <div
      className={` h-full w-full  bg-white border  relative ${
        !reduce.Account ? `hidden` : `block`
      }`}
    >
      <div className={``}>
        <img
          src={logo}
          alt=""
          className="mx-auto mb-20 mt-28 "
          onClick={() => {
            dispach({ type: "Derawe" });
          }}
        />

        <div className=" ">
          <div className="relative w-[calc(100%-40px)] mx-auto ">
            <input
              className="peer border px-5 rounded-[10px] outline-gray-300 h-14 w-full "
              placeholder=" "
              id="phone"
              name="phone"
              type="number"
              onChange={chenchHandeler}
            />
            <label
              htmlFor="phone"
              className={`absolute start-1 IrHomama    rounded-2xl transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2 ${
                !!mobile ? `start-2.5 -top-2 !text-sm` : `top-4`
              }`}
            >
              شماره موبایل
            </label>
          </div>
          <p htmlFor="" className=" h-4 py-2 mx-8 w-full text-red-500">
            {mobileAlert}
          </p>

          <button
            onClick={() => {
              // console.log(reduce.Account);
              if (mobile.length == 11 && !!mobile) {
                dispach({ type: "Account" });
                dispach({ type: "Vrify" });
                setMobileAlert("");
                sendSms();
              } else if (!mobile) {
                setMobileAlert("شماره موبایل را وارد کنید");
              } else {
                setMobileAlert("شماره موبایل را به درستی وارد کنید");
              }

            }}
            className="w-[calc(100%-40px)]  h-14 bg-blue-500 block mx-auto mt-8 rounded-[10px] text-white font-IrHoma"
          >
            ادامه
          </button>
          <p
            href=""
            className=" mt-5 mx-auto text-blue-500 block w-fit "
            onClick={() => {
              dispach({ type: "Conection" });
            }}
          >
            {" "}
            نیاز به کمک دارم
          </p>
        </div>

        <div className="flex w-fit right-0 left-0 mx-auto items-center  absolute gap-2 bottom-6 ">
          <span>
            <BsFileEarmarkText className="text-xl" />
          </span>
          <p className=" mb-0.5">
            با ورود به فروشگاه
            <a href="" className="text-blue-500 inline-block mx-1">
              قوانین و مقررات
            </a>
            آن را می پذیرم
          </p>
        </div>
      </div>

      {/*  */}
    </div>
  );
};

export default Acconut;
