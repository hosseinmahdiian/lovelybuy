import React, { useContext, useEffect, useState } from "react";
import { reducerContext } from "../../../constant/Context";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { UserData } from "../../../constant/DataSets";
import User from "./Items/User";
import Acconutt from "./Items/Account";
import History from "./Items/History/History";
import { useNavigate } from "react-router-dom";
import Conection from "../../Conection";

const Data = [
  { title: " پروفایل", name: "user" },
  { title: " حساب سرمایه ", name: "account" },
  { title: "سابقه خرید ", name: "history" },
];
const AcccountLogin = () => {
  const reducer = useContext(reducerContext);
  const [reduce, dispach] = reducer;

  const [data1, setdata] = useState(UserData);
  const [select, setSelect] = useState();
  useEffect(() => {
    if (reduce.account) {
      setSelect(data1[1]);
    } else if (reduce.history) {
      setSelect(data1[2]);
    } else {
      setSelect(data1[0]);
    }
  }, []);

  const clickhandler = (e) => {
    if (reduce.account) {
      dispach({ type: "history", payLoad: false });
      dispach({ type: "account", payLoad: true });
    } else if (reduce.history) {
      dispach({ type: "history", payLoad: true });
      dispach({ type: "account", payLoad: false });
    } else {
      dispach({ type: "history", payLoad: false });
      dispach({ type: "account", payLoad: false });
    }
    data1.map((item) => {
      if (item.name == e.target.id) {
        setSelect(() => item);
      }
    });
  };
  const navigate = useNavigate();

  return (
    <>
      <div className={`max-w-xl  bg-white  mx-auto relative  h-screen `}>
        <div className={` py-6 px-3 border-b   `}>
          <span
            className=" h-5 text-center gap-2 cursor-pointer flex items-center"
            onClick={() => {
              navigate("/user");
              dispach({ type: "history", payLoad: false });
              dispach({ type: "account", payLoad: false });
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
              <span onClick={clickhandler} id={item.name} key={index}>
                <div
                  id={item.name}
                  name={item.name}
                  className={` font-IrSans  rounded-full items-center h-8 px-4  pt-0.5 cursor-pointer w-fit border   whitespace-nowrap ${
                    item.name == select?.name
                      ? `text-white bg-black bg-opacity-80`
                      : `bg-white`
                  }  `}
                >
                  {item.title}
                </div>
              </span>
            ))}
          </div>
          <div className=" overflow-y-scroll  h-[calc(100vh-120px)] pb-5 ">
            {select?.name == "user" && <User />}
            {select?.name == "history" && <History />}
            {select?.name == "account" && <Acconutt />}
          </div>
        </div>
      </div>
      <div
        className={`
          ${reduce.Conection ? `block` : `hidden`}
          absolute  h-full w-full right-0 top-0   z-[35] `}
      >
        <Conection />
      </div>
    </>
  );
};

export default AcccountLogin;
