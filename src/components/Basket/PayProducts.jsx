import React, { useContext } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { reducerContext } from "../../constant/Context";
import { GrLocation } from "react-icons/gr";
import { FiCreditCard, FiTruck } from "react-icons/fi";
import melat from "../../assets/images/melat.png";

const PayProducts = () => {
  const reducer = useContext(reducerContext);
  const [reduce, dispach] = reducer;
  return (
    <div className="bg-white mx-auto relative h-full">
      <div className={` py-10 flex items-center justify-between px-3 border-b`}>
        <h1 className="font-IrSana text-red-600"> ادامه خرید</h1>
        <span
          className=" w-8 h-8 text-center cursor-pointer"
          onClick={() => {
            dispach({ type: "pay" });
          }}
        >
          <IoIosArrowBack className="mt-1.5" />
        </span>
      </div>
      <div className="w-11/12 mx-auto">
        <div className="py-6 border-b">
          <div className="flex items-center gap-3">
            <span>
              <GrLocation />
            </span>
            <p> محل تحویل</p>
          </div>
          <p className="text-gray-600">محل پخش بیمارستان شهدی عشایر</p>
        </div>

        <div></div>

        <div className="child:flex child:gap-4  py-3">
          <dir>
            <input
              type="radio"
              name="time"
              id="first-time"
              className="accent-black"
            />
            <label htmlFor="first-time">ساعت 7 تا 8</label>
          </dir>

          <div>
            <input
              type="radio"
              name="time"
              id="scende-time"
              className="accent-black"
            />
            <label htmlFor="scende-time">ساعت 13 تا 14</label>
          </div>

          <div>
            <input
              type="radio"
              name="time"
              id="laste-time"
              className="accent-black"
            />
            <label htmlFor="laste-time">ساعت 19 تا 20</label>
          </div>
        </div>

        <div>
          <div className="border-y py-4">
            <div className="flex items-center gap-3">
              <span>
                <FiTruck />
              </span>
              <p> هزینه ارسال </p>
            </div>
            <div className="flex  justify-between">
              <p className="text-gray-600">رایگان</p>
              <span className="flex gap-0.5">
                <p>0</p>
                <p>تومان</p>
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-0.5">
            <span>
              <FiCreditCard />
            </span>
            <h2>روش پرداخت</h2>
          </div>
          <div className="flex ">
            <input
              type="radio"
              name="pay"
              id="melat"
              className="accent-black"
            />
            <label htmlFor="melat" className="flex items-center py-3">
              {" "}
              <img src={melat} alt="" className="w-8" />
              <p>درگاه بانک ملت</p>
            </label>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 border-t w-full bg-white  child:mx-5">
          <div className="flex text-gray-400 justify-between  mt-2">
            <p>مجموعه خرید</p>
            <span className="flex gap-0.5">
              <p>{}</p>
              <p>تومان</p>
            </span>
          </div>

          <div className="flex text-gray-400 justify-between  mt-2">
            <p>مجموع تخفیف</p>
            <span className="flex gap-0.5">
              <p>{}</p>
              <p>تومان</p>
            </span>
          </div>

          <div className="flex text-gray-400 justify-between mt-2">
            <p> هزینه ارسال</p>
            <p>رایگان</p>
          </div>

          <div className="flex justify-between  text-lg mt-2">
            <p>قابل پرداخت</p>
            <span className="flex gap-0.5">
              <p>{}</p>
              <p>تومان</p>
            </span>
          </div>

          <button
            className=" w-11/12 bg-blue-600 rounded-lg h-14 block mx-auto text-white my-2"
            onClick={() => dispach({ type: "pay" })}
          >
            انتقال به درگاه
          </button>
        </div>
      </div>
    </div>
  );
};

export default PayProducts;
