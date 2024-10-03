import React, { useState } from "react";

import { IoClose } from "react-icons/io5";

const BuyProducts = ({ item }) => {
  const { name, paylod, title, pay, offer, image } = item;
  // console.log(paylod);
  const [count, setCount] = useState(paylod);

  const increaseHandeler = () => {
    setCount(count + 1);
  };
  const decreaseHandeler = () => {
    setCount(count - 1);
  };

  if (count > 0) {
    return (
      <div className="flex w-11/12 font-IrSans border-b mx-4 py-2 ">
        <img src={image} alt="" className="w-16 h-16 border rounded-md ml-2" />
        <div className="w-full ">
          <h2 className="line-clamp-1 font-bold text-sm">{title}</h2>
          <div className="flex justify-between h-10 ">
            <div className="flex items-center gap-4   bg-white   rounded-b-2xl ">
              <div className="flex items-center mt-5">
                <span>
                  <IoClose />
                </span>
                <span className=" text-xl text-red-600 ">{count}</span>
              </div>
            </div>

            <div className="child:flex child:gap-3 child:mr-2  mt-3 ">
              <span className="relative  items-center justify-end ">
                <p className="opacity-70 text-[10px] relative">
                  {pay}
                  <span className="opacity-100  w-full  items-center bottom-2  right-0 inline-block absolute border-b border-black"></span>
                </p>
                <div className="w-9 !h-4 rounded-xl  bg-red-600 flex items-center">
                  <p className="px-1 mx-auto pt-0.5 text-white  self-center font-IrSans rounded-md  text-[10px] ">
                    10 %
                  </p>
                </div>
              </span>
              <span className="flex items-center ">
                <p className=" text-[14px] inline-block ">{offer}</p>
                <p className=" text-[14px] inline-block ">تومان</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default BuyProducts;
