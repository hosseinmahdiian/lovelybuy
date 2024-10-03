import React from "react";

const Item = ({ item, select }) => {
  const { title, name } = item;
  return (
    <div className={`mt-6 items-center mx-auto w-fit relative`} name={name}>
      <span
        id={name}
        className={` font-IrSans  rounded-xl items-center inline-block  px-2  w-fit border ${(name==select.name)?`text-white bg-black bg-opacity-80`:``}  `}
      >
        {title}
      </span>
    </div>
  );
};

export default Item;
