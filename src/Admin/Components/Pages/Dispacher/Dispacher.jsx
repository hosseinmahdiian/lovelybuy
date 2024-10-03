import React, { useReducer } from "react";
import { NavLink } from "react-router-dom";

import Location from "./Location";
const Dispacher = () => {
  return (
    <>
      <div className=" mt-10 w-[calc(100%-40px)] max-w-2xl mx-auto">
        <NavLink to="/Dispacher/Loaction/1">
          <Location />
        </NavLink>
        <NavLink to="/Dispacher/Loaction/1">
          <Location />
        </NavLink>
      </div>

      {/* <Counter /> */}
    </>
  );
};

export default Dispacher;
