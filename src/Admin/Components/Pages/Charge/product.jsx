import React from "react";
import { RxCheck } from "react-icons/rx";
// import Yogurt from "../../assets/images/yogurt.png";
import NoImg from "../../../../assets/images/no-image.png";
import { sp } from "../../../Functions/Fonctions";

const Product = (data) => {
  const {
    name,
    id,
    expirDate,
    sellPrice,
    buyPrice,
    oldPrice,
    number,
    code,
    image,
  } = data.data;

  return (
    <div className="bg-white     border-b">
      <div className="flex items-center h-28 justify-between  mx-auto    my-1 ">
        <div className=" w-full">
          <div className="flex items-center gap-2">
            <img
              src={!!image ? image : NoImg}
              alt=""
              className="w-16 h-16  rounded-lg"
            />
            <div className="w-full ">
              <h2 className=" font-bold"> {name}</h2>
              <span className="text-center text-sm text-gray-600 ">{code}</span>

              <div className="flex child:w-1/2  w-full child:text-nowrap text-gray-600 text-sm  ">
                <p> عدد:{number}</p>
                <p className="-mr-7"> انقضا :{expirDate}</p>
              </div>
            </div>
          </div>
          <div className="text-gray-600   text-sm w-full mr-2">
            <div className="flex  justify-between child:text-nowrap child:w-1/2 child:text-right">
              <p>خرید :{sp(buyPrice)} </p>
              <p> روی جلد: {sp(oldPrice)}</p>
            </div>
            <div className="flex mbb-5 justify-between child:text-nowrap child:w-1/2 child:text-right mt-1">
              <p> فروش : {sp(sellPrice)}</p>
              <p>انبار</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
