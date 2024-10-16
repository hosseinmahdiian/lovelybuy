import React, { useEffect, useState } from "react";
import { FaMinus } from "react-icons/fa6";
import { HiPlusSm } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { percent, sp } from "../../constant/Functions";
import empty from "../../../assets/images/no-image.png";

const BuyProducts = ({
  item,
  data,
  count1,
  setTotalSP,
  setTotalOP,
  totalOldPrice,
  totalSellPrice,
}) => {
  const [count, setCount] = useState(count1);
  const [cc, setCc] = useState(true);
  let check = JSON.parse(localStorage.getItem("product"));
  const { name, oldPrice, sellPrice, image, id } = data?.find(
    (i) => i.id == item.id
  );
  // c
  useEffect(() => {
    // console.log("old", totalOldPrice, count, oldPrice);
    // console.log("sell", totalOldPrice, count, sellPrice);
    totalOldPrice == 0 &&
      setTotalOP((totalOldPrice) => totalOldPrice + count * oldPrice);
    totalSellPrice == 0 &&
      setTotalSP((totalOldPrice) => totalOldPrice + count * sellPrice);
  }, []);

  const increaseHandeler = (id) => {
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
    setTotalOP((totalOldPrice) => totalOldPrice + oldPrice);
    setTotalSP((totalSellPrice) => totalSellPrice + sellPrice);
  };

  const decreaseHandeler = (id) => {
    let temp = check?.filter((i) => i.id != id);
    localStorage.setItem(
      "product",
      JSON.stringify(
        count - 1 != 0 ? [...temp, { id, count: count - 1 }] : [...temp]
      )
    );
    setCount(count - 1);
    setTotalOP((totalOldPrice) => totalOldPrice - oldPrice);
    setTotalSP((totalSellPrice) => totalSellPrice - sellPrice);
  };

  return (
    count > 0 && (
      <>
        <div className="flex w-11/12 font-IrSans border-b mx-4 py-2  ">
          <img
            src={!image ? empty : image}
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
                    {sp(oldPrice)}
                    <span className="opacity-100  w-full  items-center bottom-2.5  right-0 inline-block absolute border-b border-black"></span>
                  </p>
                  <div className="w-9 !h-4 rounded-xl  bg-red-600 flex items-center">
                    <p className="px-1 mx-auto pt-0.5 text-white  self-center font-IrSans rounded-md  text-[10px] ">
                      {percent(oldPrice, sellPrice)} %
                    </p>
                  </div>
                </span>
                <span className="flex items-center ">
                  <p className=" text-[14px] inline-block ">{sp(sellPrice)}</p>
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
