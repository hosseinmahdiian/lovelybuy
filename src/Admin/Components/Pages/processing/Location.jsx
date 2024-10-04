import React from "react";
import { FiPrinter } from "react-icons/fi";
import { GiSettingsKnobs } from "react-icons/gi";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Location = () => {
  return (
    <div className="">
      <div className="flex gap-3 items-center mx-5 mb-4 ">
        <div className="w-8/12  h-14 bg-white child:block px-3 pt-2  ">
          <h2> بیمارستان عشایر </h2>
          <span className="text-gray-500 text-sm">12:41:20</span>
        </div>
        <NavLink
          to="/admin/Processing/Printer/1"
          className="w-2/12  h-14 bg-white rounded-xl px-3 items-center flex "
        >
          <FiPrinter className="mx-auto text-gray-600" />
        </NavLink>
        <NavLink
          to="/admin/Processing/Location/1"
          className="w-2/12  h-14 bg-white rounded-xl px-3 items-center flex "
        >
          <GiSettingsKnobs className="mx-auto text-gray-600" />
        </NavLink>
      </div>
    </div>
  );
};

export default Location;
