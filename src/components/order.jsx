import React, { useState } from "react";
import { OrderData } from "../constant/DataSets";
import { FiTruck } from "react-icons/fi";

const Order = () => {
    const [order ,setOrder]=useState(OrderData)
  return (
    <div className="flex container justify-around mx-auto border-b mb-3 pb-3 bg-white pt-3">
      <div className=" flex items-center gap-2">
        <span className="">
          <FiTruck className="mx-3" />
        </span>
        <h1 className="md:text-lg text-sm">
          سفارش به کد <span className="text-red-600">1245</span> تحویل محل پخش
          کالا بیمارستان شهدای عشایر در روز دوشنبه 11 اسفند ساعت 12 تا 14
        </h1>
      </div>
      <div className=" hidden gap-3 relative lg:flex">
        {order.map((item, index) => (
          <div key={index}>
            <img className="w-16 h-16" src={item.image} alt="" />
            <span className="absolute bottom-0 rounded-full border-red-500 border w-6 text-center bg-white text-red-500 h2">
              {item.paylod}
            </span>
          </div>
        ))}
      </div>
      <span className="rounded-lg w-16 h-16 bg-slate-300 text-center items-center p-2">
        5+ <br /> کالا
      </span>
    </div>
  );
};

export default Order;
