import React from "react";
import organs from "../assets/images/organs.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { BiLogoFacebook } from "react-icons/bi";

const Footer = () => {
  return (
    <div>
      {/* desktop footer */}
      <div className="md:grid hidden  md:grid-cols-1 font-IrSans  lg:grid-cols-2 xl:grid-cols-3 items-center container mx-auto border-t-2 mt-5">
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
    </div>
  );
};

export default Footer;
