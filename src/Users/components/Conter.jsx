import React, { useContext } from "react";
import { MdOutlinePersonOutline } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { CiShoppingTag } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import {
  RiHome2Line,
  RiMapPinTimeLine,
  RiShoppingBag3Line,
} from "react-icons/ri";
import { MobileOnlyView } from "react-device-detect";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { reducerContext } from "../constant/Context";
import { GoCreditCard } from "react-icons/go";
import { FaRegCircleUser } from "react-icons/fa6";
import {
  PiCreditCardLight,
  PiUserCircle,
  PiUserCircleCheckDuotone,
} from "react-icons/pi";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Conter = () => {
  const reducer = useContext(reducerContext);
  const [reduce, dispach] = reducer;
  const [searchPrams, setSearchPrams] = useSearchParams();
  const navigate = useNavigate();
  return (
    (!searchPrams.get("LogIn") || searchPrams.get("LogIn") == "true") && (
      <>
        <MobileOnlyView>
          <div className={`  w-full   justify-center flex  `}>
            <div className="fixed  -bottom-5 z-[1000] flex my-5 bg-white w-full   h-16 justify-around mx-auto border-t font-IrSans text-[12px]  items-center  child:text-center ">
              <RiMapPinTimeLine
                className=" text-2xl "
                onClick={() => {
                  dispach({ type: "history",payLoad:true });
                  navigate("/user/Account");
                }}
              />

              <span
                onClick={() => {
                  dispach({ type: "account", payLoad: true });
                  navigate("/user/Account");
                }}
              >
                <PiCreditCardLight className=" mx-auto text-2xl " />
              </span>
              <HiOutlineShoppingBag
                className=" text-2xl "
                onClick={() => {
                  dispach({ type: "basket" });
                }}
              />
              <NavLink to="/user/Search" className=" ">
                <IoIosSearch className=" mx-auto text-2xl" />
              </NavLink>
              <span
                onClick={() => {
                  if (!localStorage.getItem("authUser")) {
                    navigate("/user/LoginUser");
                  } else {
                    navigate("/user/Account");
                  }
                }}
              >
                <PiUserCircleCheckDuotone className=" mx-auto text-2xl " />
              </span>
            </div>
          </div>
        </MobileOnlyView>
      </>
    )
  );
};

export default Conter;
