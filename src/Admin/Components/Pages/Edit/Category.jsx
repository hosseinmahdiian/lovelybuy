import React from "react";
import { TbSquareRoundedCheckFilled } from "react-icons/tb";
const Category = ({item,select}) => {
  const { title, name, image } = item;
  // console.log(select);
  return (
    <>
      <div className={`mt-6 items-center mx-auto !w-fit relative`} name={name}>
        <img
          src={image}
          className={`md:w-[100px] md:h-[100px] w-[80px] h-[80px] border-2 rounded-3xl ${
            select.name == name
              ? `border-black`
              : ` border-black border-opacity-20`
          } `}
          id={name}
        />

        <span
          className={`absolute   bottom-10 left-3  ${
            select.name == name
              ? `inline-block`
              : `hidden`
          }  `}
        >
          <TbSquareRoundedCheckFilled />
        </span>
        <span
          id={name}
          className="w-full font-IrSans  mt-2 text-center rounded-xl items-center inline-block  "
        >
          {title}
        </span>
      </div>
    </>
  );
};

export default Category;
