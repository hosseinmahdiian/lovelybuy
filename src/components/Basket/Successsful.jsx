import React, { useContext } from "react";
import { FaXmark } from "react-icons/fa6";
import { reducerContext } from "../../constant/Context";

const Successsful = () => {

  const reducer = useContext(reducerContext);
  const [reduce, dispach] = reducer;
  return (
    <div
      onClick={() => {
        dispach({ type: "successful" });
      }}
      className={`w-full h-full bg-black fixed right-0 top-0 z-40 bg-opacity-30 ${
        reduce.successful ? ` ` : `hidden`
      }  `}
    >
      <div className="w-[calc(100%-40px)] max-w-[600px] mx-auto absolute top-1/4 left-0 right-0  pt-5 rounded-[10px]  font-IrSans z-60 bg-white  ">
        <div className="flex justify-between  border-b pb-3 px-6">
          <h2 className="text-green-600 font-bold text-lg">تراکنش موفق</h2>
          <span
            className="w-5 h-5"
            onClick={() => dispach({ type: "successful" })}
          >
            <FaXmark className="text-red-500 text-xl " />
          </span>
        </div>

        <div className="w-11/12 mx-auto  py-6">
          <h1 className="border-b pb-4 ">
            تراکنش شما به مبلغ 1.250.000 تومان برای سفارش خرید کد
            <span className="text-red-600">1245</span> با موفقیت ثبت گردید.
          </h1>
          <h1 className="border-b py-4 ">
            سفارش شما در محل پخش کالا بیمارستان شهدای عشایر در دوشنبه 11 اسفند
            در ساعت 12 تا 14 تحویل شما میگردد.
          </h1>
          <h1 className="pt-4 ">
            لطفا هنگام تحویل کالا کد <span className="text-red-600">1245</span>{" "}
            را به مامور تحویل ارائه دهید
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Successsful;
