import React from "react";
import { FaXmark } from "react-icons/fa6";

const Successsful = ({ dispach }) => {
  return (
    <div className="w-[calc(100%-40px)] max-w-[600px] mx-auto  rounded-[10px] pt-5 font-IrSans z-60 bg-white ">
      <div className="flex justify-between  border-b pb-3 px-6">
        <h2 className="text-green-600 font-bold text-xl">تراکنش موفق</h2>
        <span
          className="w-5 h-5"
          onClick={() => dispach({ type: "successful" })}
        >
          <FaXmark className="text-red-500 text-xl "/>
        </span>
      </div>

      <div className="w-11/12 mx-auto  py-6">
        <h1 className="border-b pb-4 ">
          تراکنش شما به مبلغ 1.250.000 تومان برای سفارش خرید کد
          <span className="text-red-600">1245</span> با موفقیت ثبت گردید.
        </h1>
        <h1 className="border-b py-4 ">
          سفارش شما در محل پخش کالا بیمارستان شهدای عشایر در دوشنبه 11 اسفند در
          ساعت 12 تا 14 تحویل شما میگردد.
        </h1>
        <h1 className="pt-4 ">
          لطفا هنگام تحویل کالا کد <span className="text-red-600">1245</span> را
          به مامور تحویل ارائه دهید
        </h1>
      </div>
    </div>
  );
};

export default Successsful;
