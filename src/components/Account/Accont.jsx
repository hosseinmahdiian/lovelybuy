import React, { useContext } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoInformationCircleOutline } from "react-icons/io5";
import logo from "../../assets/images/logo.png";
import { reducerContext } from "../../constant/Context";
import { GoUnlock } from "react-icons/go";
import { GrLocation } from "react-icons/gr";
import { MdOutlineLogout } from "react-icons/md";
import { BsFileEarmarkText } from "react-icons/bs";

const Acconut = () => {
  const reducer = useContext(reducerContext);
  const [reduce, dispach] = reducer;
  return (
    <div className=" h-full bg-white border mx-auto relative">
      <div className={`${reduce.acconut ? `hidden` : `block`}`}>
        {/* <div
          className={` py-10 flex items-center justify-between px-3 border-b`}
        >
          <h1 className="font-IrSana text-red-600">ورود به فروشگاه</h1>
          <span
            className=" w-8 h-8 text-center cursor-pointer"
            onClick={() => {
              dispach({ type: "logIn" });
            }}
          >
            <IoIosArrowBack className=" mt-1.5" />
          </span>
        </div> */}
        <img src={logo} alt="" className="mx-auto mb-20 mt-40 " />

        <div className=" ">
          <div className="relative w-[calc(100%-64px)] mx-auto ">
            <input
              className="peer border px-5 rounded-[10px] outline-gray-300 h-14 w-full "
              placeholder=" "
              id="search"
            />
            <label
              htmlFor="search"
              className="absolute start-1 IrHomama top-4 rounded-2xl transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2"
            >
              شماره موبایل
            </label>
          </div>

          <button
            onClick={() => {
              dispach({ type: "acconut" });
            }}
            className="w-[calc(100%-64px)]  h-14 bg-blue-500 block mx-auto mt-8 rounded-[10px] text-white font-IrHoma"
          >
            ادامه
          </button>
          <a href="" className=" mt-5 mx-auto text-blue-500 block w-fit ">
            {" "}
            نیاز به کمک دارم
          </a>
        </div>

        <div className="flex w-full  right-8 items-center  absolute gap-2 bottom-6 ">
          <span>
            <BsFileEarmarkText  className="text-xl"/>
          </span>
          <p className="text-lg mb-0.5">
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
