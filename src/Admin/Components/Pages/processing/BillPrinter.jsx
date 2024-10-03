import React from "react";
import { FaRegSquare } from "react-icons/fa";
import { FiCheckSquare, FiPrinter } from "react-icons/fi";
import Print from "./Print";
import InputSearch from "../../InputSearch";

const BillPrenter = () => {
  return (
    <div className="mt-5 max-w-2xl mx-auto">
      <div className="flex justify-between  gap-3 items-center mx-5 mb-4 ">
        <span className="w-2/12  h-14 bg-white  px-3 items-center flex ">
          <FaRegSquare className="mx-auto text-gray-600" />
        </span>
        <InputSearch />
        <span className="w-2/12  h-14 bg-white  px-3 items-center flex ">
          <FiPrinter className="mx-auto text-gray-600" />
        </span>
      </div>
      {/* ================================================== */}

      <div className="m">
        <Print check={true} />
        <Print check={false} />
      </div>

      {/* <Counter/> */}
    </div>
  );
};

export default BillPrenter;
