import React, { useContext, useState } from "react";
import { reducerContext } from "../../constant/Context";
import Basket from "./Basket";
import PayProducts from "./PayProducts";

const Derawer = () => {
  const reducer = useContext(reducerContext);
  const [reduce, dispach] = reducer;
  const [totalOldPrice, setTotalOldPrice] = useState();
  const [totalSellPrice, setTotalSellPrice] = useState();
  return (
    <>
      <div
        className={` ${
          reduce.basket
            ? reduce.pay
              ? ` sm:left-96 top-0 !z-[11] `
              : ` left-0 top-0  `
            : `sm:-left-[8000px] -bottom-[8000px] `
        } fixed  sm:w-[400px] w-full  z-[16] h-full transition-all  ease-in-out border-r`}
      >
        <Basket
          setTotalSP={setTotalSellPrice}
          setTotalOP={setTotalOldPrice}
          totalOldPrice={totalOldPrice}
          totalSellPrice={totalSellPrice}
        />
      </div>
      <div
        className={` ${
          reduce.pay
            ? ` sm:left-0 top-0  `
            : `sm:-left-[8000px] -bottom-[8000px] `
        } fixed  sm:w-[400px] w-full  z-20 h-full transition-all  ease-in-out `}
      >
        <PayProducts
          totalOldPrice={totalOldPrice}
          totalSellPrice={totalSellPrice}
        />
      </div>
    </>
  );
};

export default Derawer;
