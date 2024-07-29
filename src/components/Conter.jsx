import React, { useContext } from 'react';
import { MdOutlinePersonOutline } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { CiShoppingTag } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { RiHome2Line } from "react-icons/ri";
import { MobileOnlyView } from "react-device-detect";
import { NavLink } from 'react-router-dom';
import { reducerContext } from '../constant/Context';


const Conter = () => {
   const reducer = useContext(reducerContext);
   const [reduce, dispach] = reducer;
    return (
      <div>
        <MobileOnlyView>
        <div className={`  w-full relative  justify-center flex  `}>
          <div className="fixed  bottom-0 z-10 flex my-5 bg-slate-50 w-full shadow-md  h-16 justify-around mx-auto border-2 font-IrHoma text-[12px] border-black rounded-3xl items-center container child:text-center ">
            {/* <NavLink to="/acconte"> */}
            <span
              className=" "
              onClick={() => {
                dispach({ type: "logIn" });
              }}
            >
              <MdOutlinePersonOutline className=" mx-auto text-2xl" />
              <p className="  ">کاربری</p>
            </span>
            {/* </NavLink> */}
            <span>
              <BiCategory className=" mx-auto text-2xl" />
              <p>دسته بندی</p>
            </span>
            <span className=" p-3 bg-slate-300 rounded-3xl  ">
              <CiShoppingTag className=" text-3xl" />
            </span>
            <span>
              <IoIosSearch className=" mx-auto text-2xl" />
              <p>جستجو</p>
            </span>
            <span>
              <RiHome2Line className=" mx-auto text-2xl" />
              <p>خانه</p>
            </span>
          </div>
        </div>
        </MobileOnlyView>
      </div>
    );
}

export default Conter;
