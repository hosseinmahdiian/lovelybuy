import React, { useContext, useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { reducerContext } from "../../constant/Context";
import BuyProducts from "./BuyProducts";
import { sp } from "../../constant/Functions";
import { MobileOnlyView } from "react-device-detect";
import { getProducts } from "../../services/Products";
import { useQuery } from "react-query";
import empty from "../../../assets/images/hasntItem.png";

const Basket = ({
  setTotalOP,
  setTotalSP,
  totalOldPrice,
  totalSellPrice,
  ProductsInBascket,
}) => {
  const reducer = useContext(reducerContext);
  const [reduce, dispach] = reducer;

  const { isLoading, data } = useQuery(["get-products"], getProducts);
  useEffect(() => {
    if (reduce.basket) {
      document.documentElement.classList.add("overflow-y-hidden");
    } else {
      document.documentElement.classList.remove("overflow-y-hidden");
    }
  }, [reduce.basket]);

  // console.log(totalOldPrice, totalSellPrice);

  return (
    reduce.basket && (
      <div className="bg-white mx-auto relative h-full ">
        <div className="h-full   bg-">
          <div className={` py-6 px-3 border-b`}>
            <span
              className=" h-5 text-center gap-2 cursor-pointer flex items-center"
              onClick={() => {
                dispach({ type: "basket" });
              }}
            >
              <IoIosArrowForward className="text-xl" />
              <h1 className="font-IrSana text-red-600 text-lg font-bold text-nowrap">
                سبد خرید
              </h1>
            </span>
          </div>
          {!!ProductsInBascket?.length > 0 ?  (
            <div className=" h-[calc(100%-290px)] delivery  overflow-y-scroll">
              {data?.data.data.map((item, index) => (
                <div key={index}>
                  <BuyProducts
                    item={item}
                    setTotalSP={setTotalSP}
                    setTotalOP={setTotalOP}
                    totalOldPrice={totalOldPrice}
                    totalSellPrice={totalSellPrice}
                  />
                </div>
              ))}
            </div>
          ):(
            <img src={empty} alt="" className="w-40  mx-auto  mt-28" />
          ) }
        </div>
        {/* ========================================== */}
        <div
          className={` ${
            ProductsInBascket?.length == 0 && `!hidden`
          } bg-white  bottom-0 pb-6 w-full left-0 right-0  absolute border-t px5`}
        >
          <div className="flex text-gray-400 justify-between mx-5 mt-2">
            <p>مجموعه خرید</p>
            <span className="flex gap-0.5">
              <p>{sp(totalOldPrice)}</p>
              <p>تومان</p>
            </span>
          </div>

          <div className="flex text-gray-400 justify-between mx-5 mt-1">
            <p>مجموع تخفیف</p>
            <span className="flex gap-0.5">
              <p>{sp(totalOldPrice - totalSellPrice)}</p>
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
              <p>{sp(totalSellPrice)}</p>
              <p>تومان</p>
            </span>
          </div>

          <button
            className=" w-[calc(100%-40px)] bg-blue-600 rounded-lg mt-4 h-12 block mx-auto text-white my-2"
            onClick={() => dispach({ type: "pay" })}
          >
             تکمیل سفارش
          </button>
          <MobileOnlyView>
            <div className="h-10"></div>
          </MobileOnlyView>
        </div>
      </div>
    )
  );
};

export default Basket;
