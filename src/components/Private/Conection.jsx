import React, { useContext } from "react";
import { FaXmark } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";

import Telgram from "../../assets/SVG/Telgram.svg";
import Eta from "../../assets/SVG/Eta.svg";
import WhatsApp from "../../assets/SVG/WhatsApp.svg";
import { HiOutlineMail } from "react-icons/hi";
import { TbPhoneCall } from "react-icons/tb";
import { reducerContext } from "../../constant/Context";

const Conection = () => {
    const reducer = useContext(reducerContext);
    const [reduce, dispach] = reducer;
  return (
    <div className="w-[calc(100%-40px)] max-w-[600px] mx-auto  rounded-[10px] pt-5 font-IrSans z-60 bg-white border ">
      <div className="flex justify-between  border-b pb-3 px-6">
        <h2 className=" font-bold text-lg text-red-500"> ارتباط با ما</h2>
        <span
          className="w-5 h-5"
          onClick={() => dispach({ type: "Conection" })}
        >
          <FaXmark className="text-red-500 text-xl " />
        </span>
      </div>
      <div className=" mx-4 mt-5">
        <div className=" border-b ">
          <div className=" flex items-center justify-between  mb-4">
            <div className=" flex items-center gap-5 ">
              <TbPhoneCall className="text-[40px]" />
              <p> تماس تلفنی </p>
            </div>
            <IoIosArrowBack className=" text-xl  text-gray-400 ml-4" />
          </div>
          <div className=" flex items-center justify-between mb-4">
            <div className=" flex items-center gap-5 ">
              <HiOutlineMail className="text-[40px]" />
              <p>ارسال پیامک</p>
            </div>
            <IoIosArrowBack className=" text-xl  text-gray-400  ml-4" />
          </div>
        </div>

        <div className=" mt-3">
          <div className=" flex items-center justify-between mb-4">
            <div className=" flex items-center gap-5 ">
              <img src={WhatsApp} alt="" className="" />
              <p>ارتباط در پیام رسان واتساپ</p>
            </div>
            <IoIosArrowBack className=" text-xl  text-gray-400  ml-4" />
          </div>
          <div className=" flex items-center justify-between mb-4">
            <div className=" flex items-center gap-5 ">
              <img src={Eta} alt="" />
              <p>ارتباط در پیام رسان ایتا </p>
            </div>
            <IoIosArrowBack className=" text-xl  text-gray-400  ml-4" />
          </div>
          <div className=" flex items-center justify-between mb-4">
            <div className=" flex items-center gap-5 ">
              <img src={Telgram} alt="" />
              <p>ارتباط در پیام رسان تلگرام </p>
            </div>
            <IoIosArrowBack className=" text-xl  text-gray-400  ml-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conection;
