import React from "react";
import { FiPlus } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import User from "./User";

const Users = () => {
  return (
    <div className="mt-6 w-[calc(100%-40px)] max-w-2xl mx-auto">
      <div className="flex gap-3 items-center wf ">
        <div className="relative  w-[calc(100%-66px)]">
          <input
            className="peer border px-5 rounded-[10px] outline-gray-300 h-14 !w-full"
            placeholder=" "
            id="name"
          />
          <label
            htmlFor="name"
            className="absolute start-1 IrHomama top-4 rounded-2xl transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2"
          >
            جستجوی نام یا کدملی
          </label>
        </div>
        <NavLink
          className="w-14 h-14 bg-white  border rounded-[10px] pt-4"
          to="/System-User-Registration/1"
        >
          <FiPlus className="text-xl w-full text-center text-gray-600" />
        </NavLink>
      </div>

      <div className="mt-5 ">
        <NavLink to="/System-User-Registration/1">
          <User />
        </NavLink>
        <NavLink to="/System-User-Registration/1">
          <User />
        </NavLink>
      </div>

      {/* <Counter /> */}
    </div>
  );
};

export default Users;
