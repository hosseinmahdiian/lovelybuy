import React, { useEffect, useReducer } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import Location from "./Location";
import { getCurrentAdmin } from "../../../auth/localStoreage";
const Dispacher = () => {
   const navigate = useNavigate();

   useEffect(() => {
    if (!localStorage.getItem("authAdmin")) {
      navigate("/admin/loginAdmin");
    } else {
      getCurrentAdmin("authAdmin");
    }
   }, []);
  return (
    <>
      <div className=" mt-10 w-[calc(100%-40px)] max-w-2xl mx-auto">
        <NavLink to="/admin/Dispacher/Loaction/1">
          <Location />
        </NavLink>
        <NavLink to="/admin/Dispacher/Loaction/1">
          <Location />
        </NavLink>
      </div>

      {/* <Counter /> */}
    </>
  );
};

export default Dispacher;
