import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
 ;
import InputSearch from "../../InputSearch";
import InputDispacher from "./InputDispacher";
import { IoMdSave } from "react-icons/io";
import Delver from "./delver";

const Detail = () => {
  return (
    <div className="w-[calc(100%-40px)] max-w-2xl mx-auto mt-4">
      <div className="child:!w-full">
        <InputSearch />
      </div>
      {/* ================================================================================= */}

      <div className="pt-5 ">
        <h2 className="text-red-700 mb-4">نیار به اقدام</h2>
        <div className="   ">
          <div className="flex  gap-2.5  items-center  w-full">
            <InputDispacher />

            <span className="border block border-black border-opacity-10 w-12 h-12 rounded-[10px] pt-3.5 ">
              <IoMdSave className="text-center w-full text-gray-600" />
            </span>
            <Link
              to="/admin/Dispacher/Detil/1"
              className="border border-black border-opacity-10 w-12 h-12 rounded-[10px] pt-3  "
            >
              <BsThreeDotsVertical className="text-center w-full  text-gray-600 inline " />
            </Link>
          </div>
        </div>
      </div>

      {/* ================================================================================ */}

      <div className="pt-5 mx-0">
        <h2 className="text-blue-700"> تحویل شده</h2>
        <div className="  pt-4">
          <Delver />
        </div>
      </div>
      {/* <Counter /> */}
    </div>
  );
};

export default Detail;
