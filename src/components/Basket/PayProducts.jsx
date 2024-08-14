import React, { useContext, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { reducerContext } from "../../constant/Context";
import { GrLocation } from "react-icons/gr";
import { FiCreditCard, FiTruck } from "react-icons/fi";
import melat from "../../assets/images/melat.png";
import { IoTimeOutline } from "react-icons/io5";
import { DeliveryData } from "../../constant/DataSets";
import Successsful from "./Successsful";
const PayProducts = () => {
  const reducer = useContext(reducerContext);
  const [reduce, dispach] = reducer;

  const [delivery, setDelivery] = useState(DeliveryData);
  const [select, setSelect] = useState(delivery[0]);
  return (
    <div className="bg-white mx-auto relative h-full ">
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
        {/* محل تحویل */}
        <div className="py-6 border-b">
          <div className="flex items-center gap-3">
            <span>
              <GrLocation />
            </span>
            <p> محل تحویل</p>
          </div>
          <p className="text-gray-600">محل پخش بیمارستان شهدی عشایر</p>
        </div>
        {/* زمان تحویل */}
        <div>
          <div className="flex items-center gap-3 py-3">
            <span>
              <IoTimeOutline />
            </span>
            <p> زمان تحویل</p>
          </div>

          <div className="flex gap-4 overflow-x-scroll delivery">
            {delivery.map((item) => (
              <div key={item.id}>
                <div
                  className={`w-40 ${
                    item.id == select.id ? `text-red-600` : ``
                  }`}
                  onClick={() => setSelect(item)}
                >
                  <div>{item.title}</div>
                  <span className="block">{item.date}</span>
                  <span
                    className={`  w-14 h-1.5 bg-red-500 rounded-t-lg ${
                      item.id == select.id ? `block` : `hidden`
                    }`}
                  ></span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* ساعت تحویل */}
        <div className="child:flex child:gap-4  py-3">
          <div>
            <input
              type="radio"
              name="time"
              id="first-time"
              className="accent-black"
            />
            <label htmlFor="first-time">ساعت 7 تا 8</label>
          </div>

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
        {/*  هزینه ارسال*/}
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
        {/*  روش پرداخت*/}
        <div>
          <div className="flex gap-0.5 items-center">
            <span>
              <FiCreditCard />
            </span>
            <h2>روش پرداخت</h2>
          </div>

          <div className="flex items-center">
            <input
              type="radio"
              name="pay"
              id="melat"
              className="accent-black"
              // checked={true}
            />
            <label htmlFor="melat" className="flex items-center py-3">
              <img src={melat} alt="" className="w-8" />
              <p>درگاه بانک ملت</p>
            </label>
          </div>
        </div>
        {/* مجموعه خرید  */}
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
            onClick={() => {
              dispach({ type: "successful" });
              // console.log(reduce.successful);
            }}
          >
            انتقال به درگاه
          </button>
        </div>

        <div
          onClick={() => {
            dispach({ type: "successful" });
          }}
          className={`w-full h-full bg-black fixed right-0 top-0 z-10 bg-opacity-30 ${
            reduce.successful ? ` ` : `hidden`
          }  `}
        ></div>
        <div
          className={`
          ${reduce.successful ? `block` : `hidden`}
          absolute  right-0 left-0  top-1/4  z-[35] `}
        >
          <Successsful dispach={dispach} />
        </div>
      </div>
    </div>
  );
};

export default PayProducts;