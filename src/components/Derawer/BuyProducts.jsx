import React, { useEffect, useState } from "react";
import { FaMinus } from "react-icons/fa6";
import { HiPlusSm } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { percent, sp } from "../../constant/Functions";

const BuyProducts = ({ item, setTotalSP, setTotalOP }) => {
  const { name, oldPrice, sellPrice, image, id } = item;

  const [count, setCount] = useState();
  let check = JSON.parse(localStorage.getItem("product"));

  useEffect(() => {
    if (!!check) {
      check?.map((i) => i.id == id && setCount(i?.count));
    }
  }, [check]);

  const increaseHandeler = (id) => {
    let check = JSON.parse(localStorage.getItem("product"));
    let temp = check?.filter((i) => i.id != id);
    if (!check) {
      localStorage.setItem(
        "product",
        JSON.stringify([{ id, count: count + 1 }])
      );
    } else {
      localStorage.setItem(
        "product",
        JSON.stringify([...temp, { id, count: count + 1 }])
      );
    }
    setCount(count + 1);
  };

  useEffect(() => {
    setTotalOP(count * oldPrice);
    setTotalSP(count * sellPrice);
  }, [count]);
  const decreaseHandeler = (id) => {
    let check = JSON.parse(localStorage.getItem("product"));
    let temp = check?.filter((i) => i.id != id);
    localStorage.setItem(
      "product",
      JSON.stringify(
        count - 1 != 0 ? [...temp, { id, count: count - 1 }] : [...temp]
      )
    );
    setCount(count - 1);
  };

  return (
    count > 0 && (
      <>
        <div className="flex w-11/12 font-IrSans border-b mx-4 py-2  ">
          <img
            src={image}
            alt=""
            className="w-[70px] h-[70px] border rounded-md ml-2"
          />
          <div className="w-full ">
            <h2 className="line-clamp-1 font-bold text-sm">{name}</h2>
            <div className="flex justify-between h-10 ">
              <div className="flex items-center gap-4   bg-white   rounded-b-2xl ">
                <div className="flex items-center gap-4   mt-6 bg-white  mr  rounded-b-2xl mr-2">
                  <button
                    className=" w-8 h-8 text-center   border rounded-[10px] text-green-700 text-xl border-green-600 "
                    onClick={() => increaseHandeler(id)}
                  >
                    <HiPlusSm className="w-full text-center" />
                  </button>
                  <span className=" text-xl text-red-600  w-4 text-center mx-3">
                    {count}
                  </span>
                  <button
                    className=" w-8 h-8 border rounded-[10px] text-red-700 text-xl border-red-600 "
                    onClick={() => decreaseHandeler(id)}
                  >
                    <FaMinus className="w-full text-center text-sm" />
                  </button>
                </div>
              </div>

              <div className="child:flex child:gap-3 child:mr-2  mt-3 ">
                <span className="relative  items-center justify-end ">
                  <p className="opacity-70 text-[13px] relative">
                    {sp(sellPrice)}
                    <span className="opacity-100  w-full  items-center bottom-2.5  right-0 inline-block absolute border-b border-black"></span>
                  </p>
                  <div className="w-9 !h-4 rounded-xl  bg-red-600 flex items-center">
                    <p className="px-1 mx-auto pt-0.5 text-white  self-center font-IrSans rounded-md  text-[10px] ">
                      {percent(oldPrice, sellPrice)} %
                    </p>
                  </div>
                </span>
                <span className="flex items-center ">
                  <p className=" text-[14px] inline-block ">{sp(oldPrice)}</p>
                  <p className=" text-[14px] inline-block ">تومان</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default BuyProducts;
