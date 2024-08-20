import React from "react";

const Item = ({ item, select }) => {
  const { title, name } = item;
  return (
    <div className={` items-center mx-auto w-fit relative`} name={name}>
      <span
        id={name}
        className={` font-IrSans text-nowrap  rounded-xl items-center inline-block  px-6  w-fit border ${(name==select.name)?`text-white bg-black bg-opacity-80`:`bg-white`}  `}
      >
        {title}
      </span>
    </div>
  );
};

export default Item;
