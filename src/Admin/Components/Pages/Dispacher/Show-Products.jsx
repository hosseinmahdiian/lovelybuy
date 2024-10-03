import React, { useState } from "react";
import BuyProducts from "./BuyProducts";

import tomato from "../../../../assets/images/tomato.png";
import can from "../../../../assets/images/can.jpg";
import yogurt from "../../../../assets/images/yogurt.png";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";
const BuyProDuctsData = [
  {
    image: tomato,
    name: "tomato",
    title: " رب گوجه فرنگی چین چین",
    paylod: 2,
    pay: 200000,
    offer: 180000,
  },
  {
    image: yogurt,
    name: "yogurt",
    title: " ماست چکیده کاله",
    paylod: 1,
    pay: 250000,
    offer: 195000,
  },
  {
    image: can,
    name: "can",
    title: "کنسرو لوبیا دلپذیر",
    paylod: 4,
    pay: 600000,
    offer: 550000,
  },
];

const ShowProducts = () => {
  const [buyProducts, setBuyProducts] = useState(BuyProDuctsData);
  return (
    <div className="mt-4 ">
      <div className="relative bg-white ">
        {BuyProDuctsData.map((item, index) => (
          <div key={index} className="child:mx-auto">
            <BuyProducts item={item} />
          </div>
        ))}

        <div className=" bg-white  bottom-6 w-full left-0 right-0 fixed border-t px5">
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
          {/* <div className="h-20 bg-white  bottom-0 w-[400px] fixed border-t"> */}
          {/* <div className="flex justify-between    mx-5 items-center h-20   ">
            <span className={` opacity-20`}>
              <MdKeyboardArrowRight />
            </span>

            <NavLink to={-1} className={``}>
              <MdKeyboardArrowLeft />
            </NavLink>
            {/* </div> */}
          {/* </div> */}
        </div>
      </div>
      {/* <Counter /> */}
    </div>
  );
};

export default ShowProducts;
