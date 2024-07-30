import React, { useState } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";
const Product = ({ item }) => {
  const { image, title, pay, offer } = item;
  const [count, setCount] = useState(0);
  const [save, setSave] = useState(false);
  //   console.log({ image, title, name });

  const increaseHandeler = () => {
    setCount(count + 1);
    console.log(count);
  };
  const decreaseHandeler = () => {
    setCount(count - 1);
    console.log(count);
  };
  return (
    <div className="xl:w-60 xl:h-[410px] \\ lg:w-56 lg:h-[400px] \\ md:w-48 \\ sm:w-52 sm:h-80 \\ es:w-44 es:h-[270px] \\ w-80 h-80 \\   mx-auto rounded-3xl border-2 relative font-IrSans es:mb-3.5 line-clamp-1">
      <img
        src={image}
        alt=""
        className=" lg:w-52 lg:h-52 \\ sm:w-40 sm:h-40  \\ es:w-28 es:h-28 w-40 h-40  mx-auto my-4 "
      />
      <span
        onClick={() => setSave(!save)}
        className="absolute xl:bottom-[370px] \\ lg:bottom-[350px] \\ md:bottom-[280px] \\ sm:bottom-[275px] \\ es:bottom-[210px] \\  bottom-[275px] left-5 child:sm:text-2xl child:es:text-lg "
      >
        {save ? <FaBookmark /> : <FaRegBookmark />}
      </span>

      <h2 className="text-right mr-3 font-bold es:text-[12px] sm:text-sm lg:text-lg ">
        {title}
      </h2>
      <div className="child:flex child:gap-3 child:mr-2">
        <span className="relative mt-2 items-center">
          <p className="opacity-70 lg:text-xl  es:text-[12px]">
            {pay}
            <span className="opacity-100 md:w-16 sm:w-10 es:w-8 sm:bottom-3.5 es:bottom-3 right-0 inline-block absolute border-b-2 border-black"></span>
          </p>
          <p className="sm:px-1 py-0 text-white text-lg self-center font-sans rounded-md  bg-red-500 sm:text-sm es:px-0.5 es:text-[10px]">
            10%
          </p>
        </span>
        <span>
          <p className=" lg:text-2xl">{offer}</p>
          <p className=" lg:text-2xl">تومان</p>
        </span>
      </div>

      <div className="sm:mt-3 w-full mb-3">
        {count == 0 ? (
          <button
            className="lg:w-fit h-12 bg-white shadow-md w-full  text-sm lg:border-2 border-t-2 mx-auto items-center block lg:px-10  lg:bg-blue-600 lg:h-10 xl:h-12 lg:rounded-xl rounded-b-2xl lg:text-white text-red-500 "
            onClick={increaseHandeler}
          >
            افزودن به سبد خرید
          </button>
        ) : (
          <div className="flex items-center sm:shadow-none shadow-md justify-around border-t-2 lg:border-0 bg-red-500 lg:bg-white overflow-hidden child:text-white rounded-b-2xl mt-2">
            <button
              className="xl:w-12 xl:h-12 \\ w-10 h-10   lg:border-[3px] lg:rounded-xl lg:text-green-700 text-2xl border-green-600 "
              onClick={increaseHandeler}
            >
              +
            </button>
            <span className=" text-2xl lg:text-black ">{count}</span>
            <button
              className="xl:w-12 xl:h-12 \\ w-10 h-10 lg:border-[3px] lg:rounded-xl lg:text-red-700 text-2xl border-red-600 "
              onClick={decreaseHandeler}
            >
              -
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
