import React, { useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useParams, useSearchParams } from "react-router-dom";
import iconcard from "../../../../assets/SVG/icon-card.svg";
import { IoArrowDown, IoArrowUp } from "react-icons/io5";

import inojy from "../../../../assets/images/75 (1).png";
import { GoCreditCard } from "react-icons/go";
import { BiDownArrow } from "react-icons/bi";

import empty from "../../../../assets/images/Empty2.png";
const Accountt = () => {
  // const [prams, setPrams] = useSearchParams();
  // useEffect(() => {
  //   setPrams({ prams: "account" });
  //   console.log(prams,"1234567890");
  // }, []);
  return (
    <>
      <div>
        <img src={empty} alt="" className="border mx-auto mt-52" />
      </div>

      {/* <div>
        <div className="  bg-[#E0FFE5] my-4  text-gray-600  pb-3   rounded-2xl mt-2">
          <div className="w-11/12 my-3 mx-auto border-b border-green-400 pb-3 ">
            <div className="flex justify-between   pt-4">
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

          <div className=" flex mt-4  gap-2  child:border child:rounded-xl  mx-3">
            <span className="w-3/12  px-4 bg-[#009618]  align-middle h-12">
              <p className="text-nowrap text-center mt-2.5 text-white">
                واریز{" "}
              </p>
            </span>
            <span className="w-3/12 px-4 border-green-600  align-middle h-12">
              <p className="text-nowrap text-center mt-2.5 text-gray-600">
                برداشت{" "}
              </p>
            </span>{" "}
            <span className="w-6/12 px-4   border-green-600  align-middle h-12">
              <p className="text-nowrap text-center mt-2.5 text-gray-600">
                انتقال به حساب خرید{" "}
              </p>
            </span>
          </div>
        </div>

        <div>
          <h2 className="font-bold  mt-7  ">
            ثبت درخواست واریز به حساب سرمایه
          </h2>
          <div className="flex items-center gap-2 mt-4">
            <div className="relative  w-[calc(100%-140px)]  ">
              <input
                className="peer focus:outline-none border border-gray-300 px-5 rounded-xl  h-12 w-full "
                placeholder=" "
                id="pay"
              />
              <label
                htmlFor="pay"
                className="absolute start-1 IrHomama top-2.5  transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white   px-2"
              >
                مبلغ را وارد نمایید
              </label>
            </div>
            <span className="w-fit  bg-gray-200 text-gray-600 align-middle h-12  rounded-xl">
              <p className="text-nowrap mt-2.5 px-5"> درخواست کد تایید </p>
            </span>
          </div>
          <hr className="mt-4 mb-7" />
          <div>
            <h2 className="font-bold">سابقه تراکنش</h2>

            <div className="   mb-40">
              <div className="flex justify-between mt-4">
                <div>
                  <div className="flex items-center gap-2">
                    <IoArrowDown />
                    <p>
                      واریز <span className="text-green-400">11111111</span>{" "}
                      تومان
                    </p>
                  </div>
                  <p className="text-gray-500 mr-6 mt-2">
                    شماره پیگیری : <span>21651</span>
                  </p>
                </div>
                <p className="text-gray-500"> تاریخ ساعت تراکنش</p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between mt-4">
                <div>
                  <div className="flex items-center gap-2">
                    <IoArrowDown />
                    <p>
                      واریز <span className="text-green-400">11111111</span>{" "}
                      تومان
                    </p>
                  </div>
                  <p className="text-gray-500 mr-6 mt-2">
                    شماره پیگیری : <span>21651</span>
                  </p>
                </div>
                <p className="text-gray-500"> تاریخ ساعت تراکنش</p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between mt-4">
                <div>
                  <div className="flex items-center gap-2">
                    <IoArrowDown />
                    <p>
                      واریز <span className="text-green-400">11111111</span>{" "}
                      تومان
                    </p>
                  </div>
                  <p className="text-gray-500 mr-6 mt-2">
                    شماره پیگیری : <span>21651</span>
                  </p>
                </div>
                <p className="text-gray-500"> تاریخ ساعت تراکنش</p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between mt-4">
                <div>
                  <div className="flex items-center gap-2">
                    <IoArrowDown />
                    <p>
                      واریز <span className="text-green-400">11111111</span>{" "}
                      تومان
                    </p>
                  </div>
                  <p className="text-gray-500 mr-6 mt-2">
                    شماره پیگیری : <span>21651</span>
                  </p>
                </div>
                <p className="text-gray-500"> تاریخ ساعت تراکنش</p>
              </div>
              <hr className="my-4" />
            </div>
          </div>
        </div>
      </div> */}

      {/* <div>
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
                  احراز هویت و فعال سازی
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
      </div> */}
    </>
  );
};

export default Accountt;
