import React, { useState } from "react";

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
      <div className="flex w-11/12 font-IrSans border-b mx-auto py-5 ">
        <img src={image} alt="" className="w-24 h-24" />
        <div className="w-full ">
          <h2 className="line-clamp-1 font-bold">{title}</h2>
          <div className="flex justify-between ">
            <div className="flex items-center gap-4   bg-white   rounded-b-2xl mt-2">
              <button
                className=" w-8 h-8 text-center   border-[3px] rounded-xl text-green-700 text-xl border-green-600 "
                onClick={increaseHandeler}
              >
                +
              </button>
              <span className=" text-xl text-red-600 ">{count}</span>
              <button
                className=" w-8 h-8 border-[3px] rounded-xl text-red-700 text-xl border-red-600 "
                onClick={decreaseHandeler}
              >
                -
              </button>
            </div>

            <div className="child:flex child:gap-3 child:mr-2">
              <span className="relative mt-2 items-center">
                <p className="opacity-70 text-[12px]">
                  {pay}
                  <span className="opacity-100  w-10  bottom-2  right-0 inline-block absolute border-b-2 border-black"></span>
                </p>
                <p className="px-1 py-0 text-white  self-center font-IrSans rounded-md  bg-red-500 text-sm  ">
                  10%
                </p>
              </span>
              <span>
                <p className=" text ">{offer}</p>
                <p className=" text ">تومان</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default BuyProducts;
