import React from "react";
import { FaRegSquare } from "react-icons/fa";
import { FiCheckSquare, FiPrinter } from "react-icons/fi";

const Print = ({ check }) => {
  return (
    <div className=" py-2 border-b mx-5">
      <div className="flex gap-3 items-center justify-between   ">
        <span className="w-2/12   bg-white  px-3 items-center flex ">
          {check ? (
            <FiCheckSquare className="mx-auto text-gray-600" />
          ) : (
            <FaRegSquare className="mx-auto text-gray-600" />
          )}{" "}
        </span>
        <div className="w-full">
          <h2 className="w-8/12  font-bold text-nowrap   bg-white mb-2 ">
            محمد حسنوندی
          </h2>
          <p>406553321</p>
        </div>
        <span className="w-2/12   bg-white l px-3 items-center flex ">
          <FiPrinter className="mx-auto text-gray-600" />
        </span>
      </div>
    </div>
  );
};

export default Print;
