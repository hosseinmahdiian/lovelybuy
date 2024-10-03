import React from "react";
import { FiPrinter } from "react-icons/fi";
import { GiSettingsKnobs } from "react-icons/gi";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Location = () => {
  return (
    <div className=" border-b mx-5">
      <div className="flex justify-between items-center  ">
        <div className="w-8/12 mb-2 bg-white child:block  pt-2  ">
          <h2 className="mb-1"> بیمارستان عشایر </h2>
          <span className="text-gray-600">12:41:20</span>
        </div>
        <NavLink
          to="/Bill/Printer/1"
          className="w-2/12  h-16 bg-white rounded-xl px-3 items-center flex "
        >
          <FiPrinter className="mx-auto text-gray-600" />
        </NavLink>
       
      </div>
    </div>
  );
};

export default Location;
