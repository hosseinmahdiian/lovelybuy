import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import Conection from "../Conection";

const Private = () => {
  return (
    <div className=" lg:mt-0  container mx-auto">
      <div className=" mt-5  mx-auto   ">
        <NavLink
          to="/"
          className="flex  item-center align-middle gap-2 mr-4 "
        >
          <IoIosArrowForward className=" mt-1 text-2xl" />
          <span className="text-red-500 font-bold text-xl">بازگشت</span>
        </NavLink>


        <Conection/>
      </div>
    </div>
  );
};

export default Private;
