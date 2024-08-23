import React, { useContext, useState } from "react";
import { reducerContext } from "../../../constant/Context";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { GoUnlock } from "react-icons/go";
import { GrLocation } from "react-icons/gr";
import { MdOutlineLogout, MdOutlineRemoveRedEye } from "react-icons/md";
import { FiPhone, FiPhoneCall } from "react-icons/fi";

import inojy from "../../../assets/images/75 (1).png";
import { BsFileEarmarkText } from "react-icons/bs";
import Filter from "../../Filter/Filter";
// import Filters from "../Filter/Filters";
import { FilterData, UserData } from "../../../constant/DataSets";

const User = ({ dispach }) => {
  const [data1, setdata] = useState(UserData);
  const [select, setSelect] = useState(data1[0]);
  //  console.log(data1);
  const reducer = useContext(reducerContext);
  const [reduce, dispacher] = reducer;
  const clickhandler = (e) => {
    data1.map((item) => {
      if (item.name == e.target.id) {
        setSelect(() => item);
      }
    });
  };
  // console.log(dispach);

  return (
    <div className="  delivery   ">
      <div
        className="
          "
      >
        <div className="  bg-[#DDEEFF] my-4  text-gray-600 border      rounded-2xl mt-2">
          <div className="w-11/12 my-3 mx-auto border-b border-blue-400 pb-3 ">
            <div className="flex justify-between  ">
              <h2 className="mb-3 text-black font-bold">اشکان حسنوند</h2>
              <div>
                <p>
                  <span>250</span> امتیاز
                </p>
              </div>{" "}
            </div>{" "}
            <p>4060405531</p>
          </div>
          <div className="w-11/12 my-3 mx-auto flex  justify-between">
            <p>اعتبار شما</p>
            <span className="flex gap-2">
              <h2>3.125.000</h2>
              <p>تومان</p>
            </span>
          </div>

          <div className=" flex my-4 justify-between child:border child:rounded-xl  mx-3">
            <div className="relative  w-[calc(100%-140px)]  ">
              <input
                className="peer focus:outline-none border border-blue-600 px-5 rounded-xl bg-[#DDEEFF] h-12 w-full "
                placeholder=" "
                id="pay"
              />
              <label
                htmlFor="pay"
                className="absolute start-1 IrHomama top-2.5 rounded-[10px] transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm  bg-[#DDEEFF]  px-2"
              >
                واریز مبلغ
              </label>
            </div>
            <span className="w-fit border  border-blue-600 align-middle h-12">
              <p className="text-nowrap mt-2.5 px-5">انتقال به درگاه</p>
            </span>
          </div>
        </div>
      </div>
      <div className="border-b pb-5">
        <div className="flex items-center gap-3">
          <span>
            <GrLocation className="" />
          </span>
          <p className=" "> محل تحویل</p>
        </div>
        <div className="flex  justify-between items-center mt-1 text-gray-400">
          <div className="mr-7 text-sm">
            <p className="">محل پخش بیمارستان شهدی عشایر</p>
            <p>بخش نرولوژی</p>
          </div>
          <p
            className=" text-blue-500 cursor-pointer"
            onClick={() => {
              dispach({ type: "Login" });
              dispach({ type: "Place" });
            }}
          >
            ویرایش
          </p>
        </div>
      </div>
      <div className="mx-auto border-b pt-5 pb-2">
        <div className=" mb-3">
          <div className="flex items-center gap-3 mb-1">
            <span>
              <FiPhone className="" />
            </span>
            <p className=""> شماره تماس</p>
          </div>
          <p className="text-gray-400 mr-7">09216919291</p>
        </div>
        <div>
          <div className="flex items-center gap-3 mb-1">
            <span>
              <GoUnlock className="" />
            </span>
            <p className="">رمز عبور</p>
          </div>
          <div className=" flex items-center  justify-between ">
            <p className="text-gray-400 mr-7  ">********</p>
            <p
              className=" text-blue-500 pb-2 cursor-pointer"
              onClick={() => {
                dispach({ type: "Login" });
                dispach({ type: "ChengPass" });
              }}
            >
              ویرایش
            </p>
          </div>{" "}
        </div>
      </div>
      <div className="">
        <div
          className="flex gap-3 items-center mt-4"
          onClick={() => {
            // dispach({ type: "Login" });
            // dispach({ type: "Account" });
            dispacher({ type: "Conection" });
          }}
        >
          <span>
            <FiPhoneCall />{" "}
          </span>
          <p className="text-black "> ارتباط با ما</p>
        </div>

        <div
          className="flex gap-3 items-center mt-3"
          // onClick={() => {
          //   dispach({ type: "Login" });
          //   dispach({ type: "Account" });
          //   dispacher({ type: "logIn" });
          // }}
        >
          <span>
            <BsFileEarmarkText />{" "}
          </span>
          <p className="text-black "> شرایط و قوانین استفاده </p>
        </div>

        <div
          className="flex gap-3 items-center mt-3"
          // onClick={() => {
          //   dispach({ type: "Login" });
          //   dispach({ type: "Account" });
          //   dispacher({ type: "logIn" });
          // }}
        >
          <span>
            <MdOutlineRemoveRedEye />{" "}
          </span>
          <p className="text-black "> حریم خصوصی </p>
        </div>
        <div
          className="flex gap-3 text-red-600 items-center mt-3"
          // onClick={() => {
          //   dispach({ type: "Login" });
          //   dispach({ type: "Account" });
          //   dispacher({ type: "logIn" });
          // }}
        >
          <span>
            <img src={inojy} className="w-4" />{" "}
          </span>
          <p className="text-black "> درباره ما </p>
        </div>
        <div
          className="flex gap-3  mb-32 text-red-600 items-center mt-3 cursor-pointer "
          onClick={() => {
            dispach({ type: "Login" });
            dispach({ type: "Account" });
            dispacher({ type: "logIn" });
          }}
        >
          <span>
            <MdOutlineLogout />
          </span>
          <p className="text-black ">خروج از حساب </p>
        </div>
      </div>
    </div>
  );
};

export default User;
