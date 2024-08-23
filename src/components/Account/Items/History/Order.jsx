import React, { useState } from 'react';
import { HistoryOrderData, OrderData } from '../../../../constant/DataSets';
import { IoMdTime } from 'react-icons/io';
import { IoLocationOutline } from 'react-icons/io5';
import { AiOutlineFileText } from 'react-icons/ai';
import { FaRegUserCircle } from 'react-icons/fa';
import { LuShoppingBag } from 'react-icons/lu';

const Order = () => {
        const [order, setOrder] = useState(HistoryOrderData);

    return (
      <div className="my-4   text-gray-400">
        <div className="flex gap-2 mb-1 items-center">
          <LuShoppingBag className="" />
          <p className="text-black"> سفارش </p>
          <p className="text-red-500">1243</p>
        </div>
        <div className="flex gap-2 mb-1 items-center">
          <FaRegUserCircle className="" />
          <p> اشکان حسنوند </p>
          <p>09216919291</p>
        </div>
        <div className="flex gap-2 mb-1 items-center">
          <IoMdTime className="t" />
          <p> 1403/05/28 </p>
          <p> 21:00</p>
        </div>
        <div className="flex gap-2 mb-1 items-center">
          <IoLocationOutline className="" />
          <p> محل تحویل </p>
          <p> بیمارستان عشایر</p>
        </div>
        <div className="flex gap-2 mb-3 items-center">
          <AiOutlineFileText className="" />
          <p>مجموعه فاکتور</p>
          <p> 000000تومان</p>
        </div>
        <div className="flex relative gap-2 ">
          {order.map((item, index) => (
            <div key={index} className="border">
              <img
                className="xl:w-16  xl:h-16  w-[60px]  "
                src={item.image}
                alt=""
              />
              <span className="absolute bottom-0 rounded-full border-red-500 border w-6 text-center bg-white text-red-500 h2">
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
    );
}

export default Order;
