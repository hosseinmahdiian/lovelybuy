import React, { useState } from "react";
import iiii44 from "../assets/images/iiiiiiiii44.jpg";
import { IoArrowDownOutline, IoArrowUpOutline } from "react-icons/io5";

const Item = ({i}) => {
  const [show, setShow] = useState(false);
  const{text,name}=i
  return (
    <div>
      <article className="flex max-w-xl flex-col items-start justify-between">
        <img src={iiii44} className="w-full  rounded-2xl " />
        <div className="xl:flex lg:inline-block flex items-center justify-between w-full  mt-8 ">
          <h3 className="w-full mt-3 text-nowrap text-[14px] md:text-2xl font-bold text-gray-900">
{name}          </h3>
          <div className="text-gray-500 text-nowrap flex items-center gap-x-4  text-[12px] md:text-1xl pt-4">
            <span className="">2450 محصول</span>
            106 دسته بندی
          </div>
        </div>
        <div className="group relative">
          <p
            className={`mt-5 text-justify 
            ${show ? `` : ` line-clamp-3 `}
             text-sm leading-6 text-gray-60`}
          >
          {text}
          </p>
        </div>
        <div className="flex justify-between  items-center w-full">
          <button
            className="  bg-blue-600 text-white h-10 w-20 rounded-[10px]
                  mt-4"
          >
            ورود
          </button>
          <button
            className=" ml-7 text-gray-400  text-nowrap h-10 w-20 rounded-[10px] items-center flex gap-2 mt-4"
            onClick={() => setShow(!show)}
          >
            {!show ? (
              <>
                <span>
                  <IoArrowDownOutline />
                </span>
                <p>نمایش بیشتر</p>
              </>
            ) : (
              <>
                <span>
                  <IoArrowUpOutline />
                </span>{" "}
                <p>نمایش کمتر</p>
              </>
            )}
          </button>
        </div>
      </article>
    </div>
  );
};

export default Item;
