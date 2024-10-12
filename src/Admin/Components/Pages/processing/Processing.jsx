import React, { useEffect, useReducer } from "react";
import Location from "./Location";

import {  useNavigate } from "react-router-dom";
import { getCurrentAdmin } from "../../../auth/localStoreage";
const Processing = () => {
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
      <div className="relative mt-6 w-[calc(100%-40px)] max-w-2xl mx-auto">
        <Location />
        <Location />

        {/* <Counter /> */}
      </div>
    </>
  );
};

export default Processing;
