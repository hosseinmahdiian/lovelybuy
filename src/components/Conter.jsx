import React, { useContext } from "react";
import { MdOutlinePersonOutline } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { CiShoppingTag } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { RiHome2Line } from "react-icons/ri";
import { MobileOnlyView } from "react-device-detect";
import { NavLink } from "react-router-dom";
import { reducerContext } from "../constant/Context";

const Conter = () => {
  const reducer = useContext(reducerContext);
  const [reduce, dispach] = reducer;
  return (
    <>
      <MobileOnlyView>
        <div className={`  w-full   justify-center flex  `}>
          <div className="fixed  -bottom-5 z-10 flex my-5 bg-white w-full   h-16 justify-around mx-auto border-t font-IrSans text-[12px]  items-center  child:text-center ">
            {/* <NavLink to="/acconte"> */}
            <span className=" ">
              <IoIosSearch className=" mx-auto text-2xl" />
            </span>
            {/* </NavLink> */}

            <CiShoppingTag
              className=" text-3xl"
              onClick={() => dispach({ type: "basket" })}
            />
            <span
              onClick={() => {
                dispach({ type: "logIn" });
              }}
            >
              <MdOutlinePersonOutline className=" mx-auto text-2xl" />
            </span>
          </div>
        </div>
      </MobileOnlyView>
    </>
  );
};

export default Conter;
