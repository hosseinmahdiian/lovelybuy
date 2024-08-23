import React, { useContext, useState } from "react";
import { reducerContext } from "../../constant/Context";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { GoUnlock } from "react-icons/go";
import { GrLocation } from "react-icons/gr";
import { MdOutlineLogout, MdOutlineRemoveRedEye } from "react-icons/md";
import { FiPhone, FiPhoneCall } from "react-icons/fi";

import inojy from "../../assets/images/75 (1).png";
import { BsFileEarmarkText } from "react-icons/bs";
import Filter from "../Filter/Filter";
import Filters from "../Filter/Filters";
import { FilterData, UserData } from "../../constant/DataSets";
import User from "./Items/User";
import Acconutt from "./Items/Account";
import History from "./Items/History/History";

const AcccountLogin = ({ data, dispach }) => {
  const reducer = useContext(reducerContext);
  const [reduce, dispacher] = reducer;

  const [data1, setdata] = useState(UserData);
  const [select, setSelect] = useState(data1[0]);
  // console.log(data1);

  const clickhandler = (e) => {
    data1.map((item) => {
      if (item.name == e.target.id) {
        setSelect(() => item);
      }
    });
  };
  // console.log(dispach);

  return (
    <>
      <div
        className={`  bg-white  mx-auto relative  h-screen  ${
          !data.Login ? `hidden` : `block`
        }`}
      >
        <div className={` py-6 px-3 border-b   `}>
          <span
            className=" h-5 text-center gap-2 cursor-pointer flex items-center"
            onClick={() => {
              dispacher({ type: "logIn" });
            }}
          >
            <IoIosArrowForward className="text-xl" />
            <h1 className="font-IrSana text-red-600 text-lg font-bold text-nowrap">
              {" "}
              حساب کار بری
            </h1>
          </span>
        </div>

        <div className="mx-4  h-full  ">
          <div className="flex gap-2   mb-2   mt-4 overflow-x-scroll delivery  ">
            {data1.map((item, index) => (
              <span onClick={clickhandler} key={index}>
                <Filter item={item} select={select} className=" mb-5 " />
              </span>
            ))}
          </div>
          <div className=" overflow-y-scroll  h-[calc(100vh-120px)] pb-5 ">
            {select.name == "user" && <User dispach={dispach} />}
            {select.name == "history" && <History dispach={dispach} data={data} />}
            {select.name == "account" && <Acconutt />}
          </div>
        </div>
      </div>
    </>
  );
};

export default AcccountLogin;
