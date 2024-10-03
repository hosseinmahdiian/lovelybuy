import React from "react";
import { FaRegSquare } from "react-icons/fa";
import { FiCheckSquare, FiPrinter } from "react-icons/fi";
import Print from "./Print";
const Page3 = () => {
  return (
    <div className="mt-5">
      <div className="flex gap-3 items-center mx-5 mb-2 ">
        <span className="w-2/12  h-16 bg-white  px-3 items-center flex ">
          <FaRegSquare className="mx-auto" />
        </span>
        <select className="w-8/12 appearance-none  h-12 bg-white  px-3 items-center flex">
          <option value="">آماده ارسال</option>{" "}
        </select>
        <span className="w-2/12  h-16 bg-white  px-3 items-center flex ">
          <FiPrinter className="mx-auto" />
        </span>
      </div>
      {/* ================================================== */}

      <div className="mt2">
        <Print check={true} />
        <Print check={false} />
      </div>

      {/* <Counter /> */}
    </div>
  );
};

export default Page3;
