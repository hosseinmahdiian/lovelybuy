import React from "react";
import { TbSquareRoundedCheckFilled } from "react-icons/tb";
const Category = ({ item, select }) => {
  const { title, id, image } = item;
  // console.log(item);
  return (
    <>
      <div
        className={`items-center mx-auto  relative `}
        id={id}
      >
        <img
          src={image}
          className={`md:w-[100px] md:h-[100px] w-[80px] h-[80px] border-2 rounded-3xl ${
            select.id == id
              ? `border-black`
              : ` border-black border-opacity-20`
          } `}
          id={id}
        />

        <span
          className={`absolute   bottom-10 left-3  ${
            select.id == id ? `inline-block` : `hidden`
          }  `}
        >
          <TbSquareRoundedCheckFilled />
        </span>
        <span
          id={id}
          className="w-full font-IrSans  mt-2 text-center rounded-xl items-center inline-block  "
        >
          {title}
        </span>
      </div>
    </>
  );
};

export default Category;
