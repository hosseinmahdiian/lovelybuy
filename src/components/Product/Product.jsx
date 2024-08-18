import React, { useState } from "react";
import { FaMinus, FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";
import { HiPlusSm } from "react-icons/hi";
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
    <div className="xl:w-56 \\ lg:w-56 \\ md:w-48 \\ sm:w-52 \\ es:w-44  \\ w-80  \\  md:px-0  px-0.5  mx-auto rounded-2xl lg:border-2 relative font-IrSans  lg:mb-0  border-b-0 line-clamp-1 ">
      <div className="bg-white pt-2 rounded-b-lg  lg:rounded-b-none mb-1 lg:mb-0 shadow-sm ">
        {/* <div className=" bg-white border-b rounded-br-lg"> */}
        <img
          src={image}
          alt=""
          className=" lg:w-52 lg:h-52 \\ sm:w-40 sm:h-40   \\ es:w-32 es:h-32 w-40 h-40  bg-white mx-auto "
        />
        <span
          onClick={() => setSave(!save)}
          className="absolute top-3 left-3 child:sm:text-2xl text-lg child:es:text-lg "
        >
          {save ? <FaBookmark /> : <FaRegBookmark />}
        </span>

        <h2 className="text-right mr-3 pt-2  line-clamp-1  font-bold es:text-[12px] sm:text-sm lg:text-lg  ">
          {title}
        </h2>
        <div>
          {/* <div className="child:flex child:gap-3 child:mr-2 flex justify-between">
            <div> hfg</div>
            <span className="relative mt-2 items-center w-fit">
              <p className="opacity-70 relative lg:text-xl  es:text-[12px]  ">
                {pay}
                <span className="opacity-100 w-full lg:bottom-3.5 es:bottom-2 right-0 inline-block absolute border-b-2 border-black"></span>
              </p>
              <p className="sm:px-1 py-0 text-white text-lg self-center font-sans rounded-md  bg-red-500 sm:text-sm es:px-0.5 es:text-[10px]">
                10%
              </p>
            </span>
            <span>
              <p className=" lg:text-2xl">{offer}</p>
              <p className=" lg:text-2xl">تومان</p>
            </span>
          </div> */}

          <div className="child:gap-3 child:mr-2  mt-1  flex  justify-between mx-2">
            <div>
              {/* <p>تعداد</p>
              <p>تاریخ</p> */}
            </div>
            <div className="flex-col child:flex my-1">
              <span className="relative  items-center justify-end  !flex">
                <p className="opacity-70 text-[0.800rem] relative">
                  {pay}
                  <span className="opacity-100  w-full  items-center bottom-2.5  right-0 inline-block absolute border-b border-black"></span>
                </p>
                <div className="w-9 !h-4 rounded-xl  bg-red-600 flex items-center mr-1">
                  <p className="px-1 mx-auto pt-0.5 text-white  self-center font-IrSans rounded-md  text-[10px]  ">
                    10 %
                  </p>
                </div>
              </span>
              <span className="flex items-center ">
                <p className=" text-[14px] inline-block font-IRANSans_FaNum">
                  {offer}
                </p>
                <p className=" text-[14px] inline-block  mr-1">تومان</p>
              </span>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
      <div className="   bg-white \\   overflow-hidden  mx-auto  rounded-t-md shadow-sm  rounded-b-3xl lg:rounded-none ">
        {count == 0 ? (
          <button
            className="lg:w-[calc(100%-20px)] lg:my-2.5  font-bold h-12  w-full  text-sm  mx-auto items-center block lg:px-10  lg:bg-blue-600 lg:h-10  lg:rounded-xl rounded-b-3xl  lg:text-white text-blue-500 "
            onClick={increaseHandeler}
          >
            افزودن به سبد خرید
          </button>
        ) : (
          <div className="  flex items-center  lg:py-1.5 justify-around  lg:border-0 bg-blue-500 lg:bg-white  child:text-white rounded-b-3xl ">
            <button
              className=" xl:w-12 xl:h-12 \\ w-10 h-10  lg:border-[3px] lg:rounded-xl lg:text-green-700 text-3xl border-green-600 "
              onClick={increaseHandeler}
            >
              <HiPlusSm className="w-full text-center" />
            </button>
            <span className=" text-xl font-IRANSans_FaNum lg:text-black h-12 xl:h-12 pt-2.5 ">
              {count}
            </span>
            <button
              className="xl:w-12 xl:h-12 \\ w-10 h-10 lg:border-[3px] lg:rounded-xl lg:text-red-700  border-red-600 "
              onClick={decreaseHandeler}
            >
              <FaMinus className="w-full text-center" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
