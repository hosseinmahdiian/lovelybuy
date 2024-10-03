import React, { useReducer } from "react";
import Location from "./Location";
import Works from "./Works";
import Printer from "./BillPrinter";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";
const Processing = () => {
  return (
    <>
      <div className="relative mt-6 w-[calc(100%-40px)] max-w-2xl mx-auto">
        <Location />
        <Location />

        {/* <Counter /> */}
      </div>
    </>
  );
};

export default Processing;
