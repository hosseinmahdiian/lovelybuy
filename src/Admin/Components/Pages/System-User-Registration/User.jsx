import React from "react";
import { CiSettings } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const User = () => {
  return (
    <div className=" my-3">
      <div className="flex gap-3 items-center  border-b  justify-between ">
        <div className=" bg-white  rounded-xl w-11/12 ">
          <div className=" w-10/12 ">
            <div className="flex child:w-1/2 gap-4 justify-between  text-nowrap">
              <h2>اشکان حسنوند</h2>
              <h2>09216919291</h2>
            </div>
            <div className="flex  child:w-1/2 gap-4 justify-between  mb-2">
              <h2>5531</h2>
              <h2>4060405531</h2>
            </div>
          </div>
        </div>
        <NavLink
          className="w-12 h-12  bg-white ml-2   py-2.5"
          to="/admin/System-User-Registration/Setting-User/1"
        >
          <CiSettings className="text-xl w-full text-center text-gray-600" />
        </NavLink>{" "}
      </div>
    </div>
  );
};

export default User;
