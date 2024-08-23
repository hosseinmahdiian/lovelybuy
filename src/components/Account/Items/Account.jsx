import React, { useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useParams, useSearchParams } from "react-router-dom";
import iconcard from "../../../assets/SVG/icon-card.svg";
import { IoArrowDown, IoArrowUp } from "react-icons/io5";

import inojy from "../../../assets/images/75 (1).png";
import { GoCreditCard } from "react-icons/go";

const Accountt = () => {
  // const [prams, setPrams] = useSearchParams();
  // useEffect(() => {
  //   setPrams({ prams: "account" });
  //   console.log(prams,"1234567890");
  // }, []);

  return (
    <div>
      <div
        className="
          "
      >
        <div className="  bg-[#E0FFE5] my-4  text-gray-600 border      rounded-2xl mt-2">
          <div className="w-11/12 my-3 mx-auto border-b border-green-400 pb-3 ">
            <div className="flex justify-between  ">
              <h2 className="mb-3 text-black font-bold">اشکان حسنوند</h2>
              <div>
                <p>
                  <span>250</span> امتیاز
                </p>
              </div>{" "}
            </div>{" "}
            <div>
              <div className="flex justify-between">
                <p>اعتبار شما</p>
                <p>
                  <span>0</span> تومان
                </p>
              </div>
            </div>
          </div>
          <div className="w-11/12  mx-auto flex  justify-between">
            <p>سود شما</p>
            <span className="flex gap-2">
              <h2>0</h2>
              <p>تومان</p>
            </span>
          </div>
          <div className="w-11/12  mx-auto flex  text-sm justify-between">
            <p className=""> زمان سنج سرمایه</p>
            <span className="flex gap-2">
              <p> 35 تا 50 درصد سود</p>
            </span>
          </div>

          <div className=" flex my-4 justify-between child:border child:rounded-lg  mx-3">
            <span className="w-full  bg-[#009618]  align-middle h-12">
              <p className="text-nowrap text-center mt-2.5 text-white">
                انتقال به درگاه
              </p>
            </span>
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-2 items-center mb-3">
          <GoCreditCard />
          <p className="text-lg font-bold ">امکانات حساب سرمایه</p>
        </div>
        <div className="flex gap-2 items-center mb-1.5">
          <IoArrowDown className="text-green-600" />
          <p className="  "> امکان واریز مبلغ </p>
        </div>
        <div className="flex gap-2 items-center mb-1.5">
          <IoArrowUp className="text-red-600" />
          <p className=" ">امکان برداشت </p>
        </div>
        <div className="flex gap-2 items-center mb-1.5">
          <IoArrowUp className="text-blue-600" />
          <p className=" ">انتقال مبلغ به حساب خرید</p>
        </div>{" "}
        <div className="flex gap-2 items-center mb-1.5">
          <img src={inojy} className="w-4" />{" "}
          <p className=" "> واریز سود به حساب سرمایه</p>
        </div>{" "}
        <div className="flex gap-2 items-center mb-1.5">
          <GoCreditCard className="text-green-600" />
          <p className=" ">پرداخت مبلغ ار حساب سرمایه</p>
        </div>
      </div>
      <hr className="my-5 " />
      <div className="mb-32">
        <img src={iconcard} alt="" className=" w-fit mx-auto " />

        <p className="text-gray-400 text-center mt-3 text-sm">
          کار بر گرامی هنوز هیچ تراکنشی انجام نشده است
        </p>
      </div>
    </div>
  );
};

export default Accountt;
