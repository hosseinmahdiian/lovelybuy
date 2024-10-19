import React from "react";
import { CgClose } from "react-icons/cg";

const Items = ({ i, setData, setModal }) => {
  const Handler = () => {
    setData(i);
    setModal((i) => !i);
  };
  return (
    <div
      className={`${
        i.selected ? `block` : `hidden`
      } flex items-center justify-between  border-b mx-5 h-20  `}
    >
      <div>
        <h1 className=" text-lg font-bold">{i.name}</h1>
        <p className="text-lg text-gray-500">{i?.duty}</p>
      </div>
      <CgClose
        className="text-red-500 font-bold text-xl"
        onClick={() => {
          Handler();
        }}
      />
    </div>
  );
};

export default Items;
