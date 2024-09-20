import React, { useContext, useState } from "react";
import BuyProducts from "./BuyProducts";
import { HistoryOrderData } from "../../../../constant/DataSets";
import { IoIosArrowForward } from "react-icons/io";
import { reducerContext } from "../../../../constant/Context";

const ShowProducts = () => {
  const [buyProducts, setBuyProducts] = useState(HistoryOrderData);
  const reducer = useContext(reducerContext);
  const [reduce, dispach] = reducer;
  return (
    <div className=" absolute w-full top-0  bg-white">
      <div className=" relative w-full  overflow-y-scroll sm:h-[calc(100vh-300px)] h-[calc(100vh-350px)] ">
        <div className={`px-3 border-b  py-6 `}>
          <span
            className=" h- text-center gap-2 cursor-pointer flex items-center"
            onClick={() => {
              dispach({ type: "Show" });
            }}
          >
            <IoIosArrowForward className="text-xl" />
            <p className="text-red-500 font-bold">سابقه سفارش 1242</p>
          </span>
        </div>
        <div className=" bg-white  ">
          {buyProducts.map((item, index) => (
            <div key={index} className="child:mx-auto">
              <BuyProducts item={item} />
            </div>
          ))}

          <div className=" bg-white  sm:bottom-2 bottom-16  mb-2 left-0 right-0  mx-auto max-w-xl fixed border-t px5">
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
                <p>{2164896}</p>
                <p>تومان</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowProducts;
