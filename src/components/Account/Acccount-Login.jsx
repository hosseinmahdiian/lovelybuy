import React, { useContext } from "react";
import { reducerContext } from "../../constant/Context";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { GoUnlock } from "react-icons/go";
import { GrLocation } from "react-icons/gr";
import { MdOutlineLogout, MdOutlineRemoveRedEye } from "react-icons/md";
import { FiPhone, FiPhoneCall } from "react-icons/fi";

import inojy from "../../assets/images/75 (1).png";
import { BsFileEarmarkText } from "react-icons/bs";

const AcccountLogin = ({ data, dispach }) => {
  const reducer = useContext(reducerContext);
  const [reduce, dispacher] = reducer;
  return (
    <>
      <div
        className={`  bg-white  mx-auto relative  ${
          !data.Login ? `hidden` : `block`
        }`}
      >
        <div className={` py-6 px-3 border-b`}>
          <span
            className=" h-5 text-center gap-2 cursor-pointer flex items-center"
            onClick={() => {
              dispacher({ type: "logIn" });
            }}
          >
            <IoIosArrowForward className="text-xl" />
            <h1 className="font-IrSana text-red-600 text-lg font-bold text-nowrap">
              {" "}
              حساب کار بری
            </h1>
          </span>
        </div>

        <div className="mx-4">
          {" "}
          <div className="  bg-gray-600 my-4 text-white border  mx-auto  py-4 rounded-3xl mt-5">
            <div className="w-11/12 my-3 mx-auto border-b border-white pb-3 ">
              <h2 className="mb-3">اشکان حسنوند</h2>
              <p>4060405531</p>
            </div>
            <div className="w-11/12 my-3 mx-auto flex  justify-between">
              <p>اعتبار شما</p>
              <span className="flex gap-2">
                <h2>3.125.000</h2>
                <p>تومان</p>
              </span>
            </div>

            <div className=" flex my-4 gap- child:border child:rounded-lg  mx-5">
              <div className="relative mx-2 w-[calc(100%-60px)]  ">
                <input
                  className="peer border-white px-5 rounded-[10px] bg-gray-600 h-12 w-full focus:border-0 "
                  placeholder=" "
                  id="pay"
                />
                <label
                  htmlFor="pay"
                  className="absolute start-1 IrHomama top-3 rounded-[10px] transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-gray-600 text-white px-2"
                >
                  واریز مبلغ
                </label>
              </div>
              <span className="w-12  h-12">
                <IoIosArrowBack className="w-full  mt-3 mx-auto  " />
              </span>
            </div>
          </div>
          <div className="border-b pb-5">
            <div className="flex items-center gap-3">
              <span>
                <GrLocation className="text-gray-400" />
              </span>
              <p className="font-bold"> محل تحویل</p>
            </div>
            <div className="flex  justify-between items-center text-gray-400">
              <div className="mr-7 text-sm">
                <p className="">محل پخش بیمارستان شهدی عشایر</p>
                <p>بخش نرولوژی</p>
              </div>
              <p className=" text-blue-500">ویرایش</p>
            </div>
          </div>
          <div className="mx-auto border-b py-5">
            <div className=" mb-3">
              <div className="flex items-center gap-3 mb-1">
                <span>
                  <FiPhone className="text-gray-400" />
                </span>
                <p className="font-bold"> شماره تماس</p>
              </div>
              <p className="text-gray-400 mr-7">09216919291</p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span>
                  <GoUnlock className="text-gray-400" />
                </span>
                <p className="font-bold">رمز عبور</p>
              </div>
              <div className=" flex items-center justify-between">
                <p className="text-gray-400 mr-7">********</p>
                <p className=" text-blue-500">ویرایش</p>
              </div>{" "}
            </div>
          </div>
          <div className="font-bold">
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
              className="flex gap-3 items-center mt-2"
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
              className="flex gap-3 items-center mt-2"
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
              className="flex gap-3 text-red-600 items-center mt-2"
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
              className="flex gap-3 text-red-600 items-center mt-2"
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
      </div>
    </>
  );
};

export default AcccountLogin;
