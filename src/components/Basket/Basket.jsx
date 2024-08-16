import React, { useContext, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { reducerContext } from "../../constant/Context";
import { BuyProDuctsData } from "../../constant/DataSets";
import BuyProducts from "./BuyProducts";
import PayProducts from "./PayProducts";
import Successsful from "./Successsful";

const Basket = () => {
  const reducer = useContext(reducerContext);
  const [reduce, dispach] = reducer;
  const [buyProducts, setBuyProducts] = useState(BuyProDuctsData);
  const [count, setCount] = useState(0);

  return (
    <div className="bg-white mx-auto relative h-full ">
      <div className={` py-6 px-8 border-b`}>
        <span
          className=" h-8 text-center gap-2 cursor-pointer flex items-center"
          onClick={() => {
            dispach({ type: "basket" });
          }}
        >
          <IoIosArrowForward className="text-xl" />
          <h1 className="font-IrSana text-red-600 text-xl font-bold text-nowrap">
            {" "}
            سبد خرید
          </h1>
        </span>
      </div>

      <div className="">
        {BuyProDuctsData.map((item, index) => (
          <div key={index}>
            <BuyProducts item={item} />
          </div>
        ))}

        <div className=" bg-white  bottom-6 w-full left-0 right-0  absolute border-t px5">
          <div className="flex text-gray-400 justify-between mx-5 mt-2">
            <p>مجموعه خرید</p>
            <span className="flex gap-0.5">
              <p>{}</p>
              <p>تومان</p>
            </span>
          </div>

          <div className="flex text-gray-400 justify-between mx-5 mt-1">
            <p>مجموع تخفیف</p>
            <span className="flex gap-0.5">
              <p>{}</p>
              <p>تومان</p>
            </span>
          </div>

          <div className="flex text-gray-400 justify-between mx-5 mt-1">
            <p> هزینه ارسال</p>
            <p>رایگان</p>
          </div>

          <div className="flex justify-between mx-5 text-lg mt-">
            <p>قابل پرداخت</p>
            <span className="flex gap-0.5">
              <p>{2164896}</p>
              <p>تومان</p>
            </span>
          </div>

          <button
            className=" w-[calc(100%-40px)] bg-blue-600 rounded-lg mt-4 h-12 block mx-auto text-white my-2"
            onClick={() => dispach({ type: "pay" })}
          >
            ادامه خرید
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Basket;
