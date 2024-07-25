import React from "react";
import organs from "../assets/images/organs.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { BiLogoFacebook } from "react-icons/bi";

import { MdOutlinePersonOutline } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { CiShoppingTag } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { RiHome2Line } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      {/* desktop footer */}
      <div className="md:grid hidden  md:grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 items-center container mx-auto border-t-2 mt-5">
        <img src={organs} alt="" className="mx-auto" />
        <div className="flex w-96 justify-around child:w-10 child:h-10  child:rounded-lg  child:bg-slate-300 mx-auto">
          <span className="   ">
            <FaTelegramPlane className="w-7 h-7 mx-auto mt-1.5 text-gray-400" />
          </span>
          <span>
            <FaLinkedinIn className="w-7 h-7 mx-auto mt-1.5 text-gray-400" />
          </span>
          <span>
            <IoLogoGoogle className="w-7 h-7 mx-auto mt-1.5 text-gray-400" />
          </span>
          <span>
            <FaTwitter className="w-7 h-7 mx-auto mt-1.5 text-gray-400" />
          </span>
          <span>
            <BiLogoFacebook className="w-7 h-7 mx-auto mt-1.5 text-gray-400" />
          </span>
        </div>
        <h2 className="font-IrHoma mx-auto ">
          خرید همواره با تخفیف رو با ما تجربه کنید
        </h2>
      </div>

      {/* mobil footer */}
      <div className="fixed bottom-0 w-10/12 z-10 left- ">
        <div className=" flex my-5 bg-slate-50 w-full shadow-md md:hidden h-16 justify-around mx-auto border-2 font-IrHoma text-[12px] border-black rounded-3xl items-center container child:text-center ">
          <span className=" ">
            <MdOutlinePersonOutline className=" mx-auto text-2xl" />
            <p className="  ">کاربری</p>
          </span>
          <span>
            <BiCategory className=" mx-auto text-2xl" />
            <p>دسته بندی</p>
          </span>
          <span className=" p-3 bg-slate-300 rounded-3xl  ">
            <CiShoppingTag className=" text-3xl" />
          </span>
          <span>
            <IoIosSearch className=" mx-auto text-2xl" />
            <p>جستجو</p>
          </span>
          <span>
            <RiHome2Line className=" mx-auto text-2xl" />
            <p>خانه</p>
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
