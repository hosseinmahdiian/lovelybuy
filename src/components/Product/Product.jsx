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
    <div className="xl:w-60 \\ lg:w-56 \\ md:w-48 \\ sm:w-52 \\ es:w-44  \\ w-80  \\    mx-auto rounded-xl lg:border-2 relative font-IrSans mb-0.5 lg:mb-0  border-b-0 line-clamp-1">
      <div className="bg-white pt-2 rounded-b-lg  lg:rounded-b-none mb-1 lg:mb-0 shadow-sm ">
        {/* <div className=" bg-white border-b rounded-br-lg"> */}
        <img
          src={image}
          alt=""
          className=" lg:w-52 lg:h-52 \\ sm:w-40 sm:h-40   \\ es:w-28 es:h-28 w-40 h-40  bg-white mx-auto "
        />
        <span
          onClick={() => setSave(!save)}
          className="absolute xl:bottom-[330px] \\ lg:bottom-[330px] \\ md:bottom-[250px] \\ sm:bottom-[245px] \\ es:bottom-[220px] \\  bottom-[265px] left-5 child:sm:text-2xl child:es:text-lg "
        >
          {save ? <FaBookmark /> : <FaRegBookmark />}
        </span>

        <h2 className="text-right mr-3  line-clamp-1  font-bold es:text-[12px] sm:text-sm lg:text-lg  ">
          {title}
        </h2>
        <div className="child:flex child:gap-3 child:mr-2">
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
        </div>
        {/* </div> */}
      </div>
      <div className="   bg-white \\   overflow-hidden  mx-auto  rounded-t-md shadow-sm  rounded-b-3xl lg:rounded-none ">
        {count == 0 ? (
          <button
            className="lg:w-fit lg:my-2.5   h-12  w-full  text-sm lg:border-2  mx-auto items-center block lg:px-10  lg:bg-blue-600 lg:h-10  lg:rounded-xl rounded-b-3xl  lg:text-white text-blue-500 "
            onClick={increaseHandeler}
          >
            افزودن به سبد خرید
          </button>
        ) : (
          <div className="  flex items-center  lg:py-1.5 justify-around  lg:border-0 bg-blue-500 lg:bg-white  child:text-white rounded-b-3xl ">
            <button
              className=" xl:w-12 xl:h-12 \\ w-10 h-10  lg:border-[3px] lg:rounded-xl lg:text-green-700 text-2xl border-green-600 "
              onClick={increaseHandeler}
            >
              +
            </button>
            <span className=" text-xl lg:text-black h-12 xl:h-12 pt-2.5 ">
              {count}
            </span>
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
