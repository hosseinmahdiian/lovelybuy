import React, { useContext, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { reducerContext } from "../../constant/Context";
import { GrLocation } from "react-icons/gr";
import { FiCreditCard, FiTruck } from "react-icons/fi";
import melat from "../../assets/images/melat.png";
import { IoTimeOutline } from "react-icons/io5";
import { DeliveryData } from "../../constant/DataSets";
import Successsful from "./Successsful";
import { sp } from "../../constant/Functions";
import { MobileOnlyView } from "react-device-detect";

const time = [
  { time: "ساعت 7 تا 8", id: 1 },
  { time: "ساعت 13 تا 14", id: 2 },
  { time: "ساعت 19 تا 20", id: 3 },
];
const PayProducts = () => {
  const reducer = useContext(reducerContext);
  const [reduce, dispach] = reducer;

  const [Check, setCheck] = useState(false);
  const [Time, setTime] = useState("");

  const [delivery, setDelivery] = useState(DeliveryData);
  const [select, setSelect] = useState(delivery[0]);
  return (
    reduce.pay && (
      <div className="bg-white mx-auto relative  h-full ove">
        <div className="h-full ">
          <div className="w-full mx-auto  h-full ">
            <div
              className={` py-6 flex   gap-2 items-center justify-between px-3 border-b`}
            >
              <span
                className=" flex h-5 text-center gap-2 cursor-pointer"
                onClick={() => {
                  dispach({ type: "pay" });
                }}
              >
                <IoIosArrowForward className="text-xl mt-1 " />
                <h1 className="font-IrSana text-red-600 text-lg font-bold">
                  {" "}
                  ادامه خرید
                </h1>
              </span>
            </div>
            <div className="mx-5 h-[calc(100%-290px)] overflow-y-scroll delivery">
              {/* محل تحویل */}
              <div className="py-4 border-b">
                <div className="flex  gap-2">
                  <span>
                    <GrLocation className="text-lg text-gray-600" />
                  </span>
                  <div>
                    <p className="font-bold"> محل تحویل</p>
                    <p className="text-gray-400 ">
                      محل پخش بیمارستان شهدی عشایر
                    </p>
                  </div>
                </div>
              </div>
              {/* زمان تحویل */}
              <div>
                <div className="flex items-center gap-3 py-3">
                  <span>
                    <IoTimeOutline className="text-lg  text-gray-600" />
                  </span>
                  <p className="font-bold"> زمان تحویل</p>
                </div>

                <div className="flex  overflow-x-scroll delivery  ">
                  {delivery.map((item) => (
                    <div key={item.id}>
                      <div
                        className={`w-24  text-center 
                     flex-col justify-center text-gray-400
                     ${item.id == select.id ? `text-red-600` : ``}`}
                        onClick={() => {
                          setSelect(item);
                          setTime("false");
                        }}
                      >
                        <div>{item.title}</div>
                        <span className="">{item.date}</span>
                        <span
                          className={`  w-14 h-1.5 bg-red-500 rounded-t-lg ${
                            item.id == select.id
                              ? `inline-block mb-2`
                              : `hidden`
                          }`}
                        ></span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* ساعت تحویل */}
              <div className="  pb-3 mt-2">
                {time.map((item, index) => (
                  <div key={index} className="mb-1">
                    <div
                      className={`flex gap-3 item-center
                  text-center 
                       
                     ${item.id == Time.id ? `text-red-600` : `text-gray-400`}`}
                      onClick={() => {
                        setTime(item);
                        console.log(Time);
                      }}
                    >
                      <input
                        type="radio"
                        name="time"
                        checked={item.id == Time.id}
                        id={item.id}
                        className="accent-black"
                      />
                      <label htmlFor={item.id} className=" ">
                        {item.time}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
              {/*  هزینه ارسال*/}
              <div>
                <div className="border-y    gap-4 py-4">
                  <div className=" ">
                    <div className="flex justify-between gap-60">
                      <div className="flex items-center justify-between gap-3">
                        <span>
                          <FiTruck className="text-lg text-gray-600" />
                        </span>
                        <p className="font-bold"> هزینه ارسال </p>
                      </div>
                      <span className="flex gap-0.5">
                        <p>0</p>
                        <p>تومان</p>
                      </span>
                    </div>
                    <div className="flex  justify-between">
                      <p className="text-gray-600 mt-2">رایگان</p>
                    </div>
                  </div>
                </div>
              </div>
              {/*  روش پرداخت*/}
              <div className=" mt-2">
                <div className="flex gap-3 items-center">
                  <FiCreditCard className="text-gray-600" />
                  <h2 className="font-bold">روش پرداخت</h2>
                </div>

                <div className="flex items-center gap-2 text-gray-400">
                  <input
                    type="radio"
                    name="pay"
                    id="melat"
                    className="accent-black"
                    checked={Check}
                  />
                  <label
                    htmlFor="melat"
                    className={`flex items-center py-3  ${
                      Check ? `text-red-600` : `text-gray-400`
                    }`}
                  >
                    <img src={melat} alt="" className={`w-8`} />
                    <p>درگاه بانک ملت</p>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* مجموعه خرید  */}
        <div className=" bg-white  bottom-0 pb-6 w-full left-0 right-0  absolute border-t px5">
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
              <p>{sp(2164896)}</p>
              <p>تومان</p>
            </span>
          </div>

          <button
            className=" w-[calc(100%-40px)] bg-blue-600 rounded-lg mt-4 h-12 block mx-auto text-white my-2"
            onClick={() => {
              dispach({ type: "successful" });
              // console.log(reduce.successful);
            }}
          >
            انتقال به درگاه
          </button>
          <MobileOnlyView>
            <div className="h-10"></div>
          </MobileOnlyView>
        </div>
      </div>
    )
  );
};

export default PayProducts;
