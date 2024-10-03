import React from "react";
import { FaRegSquare } from "react-icons/fa";
import { FiCheckSquare, FiPrinter } from "react-icons/fi";

const Print = ({ check }) => {
  return (
    <div>
      <div className="flex gap-3 items-center mx-4 mb-4 ">
        <span className="w-2/12  h-16 bg-white rounded-xl px-3 items-center flex ">
          {check ? (
            <FiCheckSquare className="mx-auto" />
          ) : (
            <FaRegSquare className="mx-auto" />
          )}{" "}
        </span>
        <h2 className="w-8/12 text-center h-16 pt-4 bg-white rounded-xl">
          محمد حسنوندی
        </h2>
        <span className="w-2/12  h-16 bg-white rounded-xl px-3 items-center flex ">
          <FiPrinter className="mx-auto" />
        </span>
      </div>
    </div>
  );
};

export default Print;
