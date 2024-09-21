import React, { useContext, useState } from "react";
import { HistoryOrderData, OrderData } from "../../../../constant/DataSets";
import { IoMdTime } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineFileText } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import ShowProducts from "./Show-producs";
import { reducerContext } from "../../../../constant/Context";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const [order, setOrder] = useState(HistoryOrderData);

  const reducer = useContext(reducerContext);
  const [reduce, dispach] = reducer;
  const navigate = useNavigate();
  return (
    <div
      className="my-4  text-sm text-gray-600"
      onClick={() => {
navigate("History/:1243");      }}
    >
      <div>
        <div className="flex gap-2 mb-1 items-center">
          <LuShoppingBag className="text-gray-400" />
          <p className="text-black"> سفارش </p>
          <div className="text-red-500 flex justify-between items-center w-full ">
            <div className="flex  gap-3 items-center">
              <p>1243</p>

              <p className=" text-green-800 bg-green-100 py-1 px-3 rounded-full  ">
                تحویت شده
              </p>
            </div>
            <p className="text-gray-600"> نمایش بیشتر</p>
          </div>
        </div>
        <div className="flex gap-2 mb-1 items-center">
          <FaRegUserCircle className="text-gray-400" />
          <p> اشکان حسنوند </p>
          <p>09216919291</p>
        </div>
        <div className="flex gap-2 mb-1 items-center">
          <IoMdTime className="text-gray-400" />
          <p> 1403/05/28 </p>
          <p> 21:00</p>
        </div>
        <div className="flex gap-2 mb-1 items-center">
          <IoLocationOutline className="text-gray-400" />
          <p> محل تحویل </p>
          <p> بیمارستان عشایر</p>
        </div>
        <div className="flex gap-2 mb-3 items-center">
          <AiOutlineFileText className="text-gray-400" />
          <p>مجموعه فاکتور</p>
          <p> 000000تومان</p>
        </div>
        <div className="flex relative gap-2 ">
          {order.map((item, index) => (
            <div key={index} className=" ">
              <img
                className="xl:w-16  xl:h-16  w-[60px]  "
                src={item.image}
                alt=""
              />
              <span className="absolute bottom-0 rounded-full border-red-500 border w-6  text-center bg-white text-red-500 h-6">
                {item.paylod}
              </span>
            </div>
          ))}
          <span className="rounded-lg  block w-16 h-16 bg-slate-300 text-center items-center p-2">
            5+ <br /> کالا
          </span>
        </div>
        <hr className="mt-4" />
      </div>
    </div>
  );
};

export default Order;
