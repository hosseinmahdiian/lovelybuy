import React, { useContext, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { reducerContext } from "../../constant/Context";
import { BuyProDuctsData } from "../../constant/DataSets";
import BuyProducts from "./BuyProducts";
import PayProducts from "./PayProducts";

const Basket = () => {
  const reducer = useContext(reducerContext);
  const [reduce, dispach] = reducer;
  const [buyProducts, setBuyProducts] = useState(BuyProDuctsData);
  const [count, setCount] = useState(0);

  return (
    <div className="bg-white mx-auto relative h-full relative">
      <div className={` py-10 flex items-center justify-between px-3 border-b`}>
        <h1 className="font-IrSana text-red-600"> سبد خرید</h1>
        <span
          className=" w-8 h-8 text-center cursor-pointer"
          onClick={() => {
            dispach({ type: "basket" });
          }}
        >
          <IoIosArrowBack className="mt-1.5" />
        </span>
      </div>

      <div className="">
        {BuyProDuctsData.map((item, index) => (
          <div key={index}>
            <BuyProducts item={item} />
          </div>
        ))}

        <div className="absolute bottom-0 border-t w-full bg-white ">
          <div className="flex text-gray-400 justify-between mx-5 mt-2">
            <p>مجموعه خرید</p>
            <span className="flex gap-0.5">
              <p>{}</p>
              <p>تومان</p>
            </span>
          </div>

          <div className="flex text-gray-400 justify-between mx-5 mt-2">
            <p>مجموع تخفیف</p>
            <span className="flex gap-0.5">
              <p>{}</p>
              <p>تومان</p>
            </span>
          </div>

          <div className="flex text-gray-400 justify-between mx-5 mt-2">
            <p> هزینه ارسال</p>
            <p>رایگان</p>
          </div>

          <div className="flex justify-between mx-5 text-lg mt-2">
            <p>قابل پرداخت</p>
            <span className="flex gap-0.5">
              <p>{}</p>
              <p>تومان</p>
            </span>
          </div>

          <button
            className=" w-10/12 bg-blue-600 rounded-lg h-14 block mx-auto text-white my-2"
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
