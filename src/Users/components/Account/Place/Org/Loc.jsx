import React from "react";
import { FaRegCircle } from "react-icons/fa";
import { LuCheckCircle } from "react-icons/lu";

const Loc = ({ i, index }) => {
  return (
    <span
      key={index}
      className={` ${
        i.selected
          ? `text-green-600 child:bg-green-300 `
          : `text-gray-600 child:bg-gray-300 `
      }`}
    >
      <div className="flex gap-2 px-2 w-fit rounded-full items-center">
        {i.selected ? <LuCheckCircle /> : <FaRegCircle />}
        <p className="">{i.name}</p>
      </div>
    </span>
  );
};

export default Loc;
