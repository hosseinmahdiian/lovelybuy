import React from "react";
import { PiShieldCheck } from "react-icons/pi";
import { RxCheck } from "react-icons/rx";

const ToDo = ({ check }) => {
  return (
    <>
      <div className="flex items-center h-12 justify-between w-full  my-2 ">
        <div className="flex items-center gap-4  ">
          <img src={Yogurt} alt="" className="w-12 h-12 border rounded-lg" />
          <div>
            <h2>ماست سون</h2>
            <p className="text-gray-600 text-sm">12 عدد</p>
          </div>
        </div>
        <span> { !check ? <PiShieldCheck  className="text-gray-600"/> : <RxCheck className="text-green-500" />}</span>
      </div>
      <hr />
    </>
  );
};

export default ToDo;
