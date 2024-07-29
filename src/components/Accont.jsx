import React, { useContext } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoInformationCircleOutline } from "react-icons/io5";
import logo from "../assets/images/logo.png";
import { reducerContext } from "../constant/Context";

const Accont = () => {
  const reducer = useContext(reducerContext);
  const [reduce, dispach] = reducer;
  return (
    <div className=" h-full bg-white border mx-auto relative">
      <div className="py-6 flex items-center justify-between px-3 border-b">
        <h1 className="font-IrSana text-red-600">ورود به فروشگاه</h1>
        <span
          onClick={() => {
            dispach({ type: "acconte" });
          }}
        >
          <IoIosArrowBack />
        </span>
      </div>
      <img src={logo} alt="" className="mx-auto mb-20 mt-10 " />

      <div className=" ">
        <div className="relative  w-3/4 mx-auto ">
          <input
            className="peer border-2 rounded-lg outline-gray-300 h-10 w-full "
            placeholder=" "
            id="user"
          />
          <label
            htmlFor="user"
            className="absolute start-1 IrHomama top-1.5 transition-all ease-linear peer-focus:start-2 peer-focus:-top-3.5 peer-focus:text-sm bg-white px-2"
          >
            نام کابری
          </label>
        </div>

        <div className="relative w-3/4 mx-auto h-10 mt-5">
          <input
            className="peer border-2 rounded-lg outline-gray-300 h-10 w-full"
            placeholder=" "
            id="pass"
          />
          <label
            htmlFor="pass"
            className="absolute font-IrHomama start-1 top-1.5 transition-all ease-linear peer-focus:start-2 peer-focus:-top-3.5 peer-focus:text-sm bg-white px-2"
          >
            رمز عبور
          </label>
        </div>
        {/* <label htmlFor="pass"></label> */}

        <button className="w-3/4 h-10 bg-blue-500 block mx-auto mt-5 rounded-lg text-white font-IrHoma">
          ورود به فروشگاه
        </button>
        <a href="" className="font-IrHoma mx-auto text-blue-500 block w-fit ">
          {" "}
          نیاز به کمک دارم
        </a>
      </div>

      <div className="flex items-center absolute bottom-3 right-3">
        <span>
          <IoInformationCircleOutline />
        </span>
        <p className="text-lg">
          باورد به فذوشگاه
          <a href="" className="text-blue-500">
            قوانین و مقررات
          </a>
          آن را می پذیرم
        </p>
      </div>
    </div>
  );
};

export default Accont;
