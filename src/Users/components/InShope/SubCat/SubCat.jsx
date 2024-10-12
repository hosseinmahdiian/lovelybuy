import React from "react";
import { TbSquareRoundedCheckFilled } from "react-icons/tb";
const SubCat = ({ item, select }) => {
  const { title, id, icon } = item;
  // console.log(select);
  return (
    <>
      <div
        className={`items-center mx-auto  relative  md:w-[100px]  w-[80px]`}
        id={id}
      >
        <img
          src={icon}
          className={`md:w-[100px] md:h-[100px] w-[80px] h-[80px] border-2 rounded-3xl ${
            select._id == id
              ? `border-black`
              : ` border-black border-opacity-20`
          } `}
          id={id}
        />

        <span
          className={`absolute   md:top-[72px] top-[52px] left-3  ${
            select._id == id ? `inline-block` : `hidden`
          }  `}
        >
          <TbSquareRoundedCheckFilled />
        </span>
        <span
          id={id}
          className="w-full font-IrSans  mt-2 text-[12px] text-center rounded-xl items-center inline-block    "
        >
          {title}
        </span>
      </div>
    </>
  );
};

export default SubCat;
