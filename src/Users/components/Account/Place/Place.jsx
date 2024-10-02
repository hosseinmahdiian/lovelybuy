import React, { useContext, useState } from "react";
import { reducerContext } from "../../../constant/Context";
import { useNavigate } from "react-router-dom";
import { BiArrowFromRight } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import Org from "./Org";
import Location from "./Location";

const Place = () => {
  const reducer = useContext(reducerContext);
  const [reduce, dispach] = reducer;
  const navigate = useNavigate();
  const UserData = [
    { title: " ارگانی", name: "org" },
    { title: " شخصی  ", name: "account" },
  ];
  const [data1, setdata] = useState(UserData);
  const [select, setSelect] = useState(data1[0]);
  const clickhandler = (e) => {
    data1.map((item) => {
      if (item.name == e.target.id) {
        setSelect(() => item);
      }
    });
  };
  return (
    <div
      className={` border  max-w-xl bg-white  mx-auto relative  mt-52 rounded-[10px] py-5 `}
    >
      {" "}
      <div className="w-[calc(100%-40px)] mx-auto ">
        <div
          className="flex gap-3 items-center mb-6"
          onClick={() => navigate(-1)}
        >
          <IoIosArrowForward className="text-xl" />
          <h1 className=" text-lg text-red-500 font-bold"> محل تحویل</h1>
        </div>{" "}
      </div>
      {/* ============================================ */}
      <div className="flex gap-2 my-5 mx-5">
        {data1.map((item, index) => (
          <span onClick={clickhandler} id={item.name} key={index}>
            <div
              id={item.name}
              name={item.name}
              className={` font-IrSans  rounded-full items-center h-8 px-4  pt-0.5 cursor-pointer w-fit border   whitespace-nowrap ${
                item.name == select.name
                  ? `text-white bg-black bg-opacity-80`
                  : `bg-white`
              }  `}
            >
              {item.title}
            </div>
          </span>
        ))}
      </div>
      <div className=" pb-5 ">
        {select.name == "org" && <Org />}
        {select.name == "account" && (
         <Location/>
        )}
      </div>{" "}
    </div>
  );
};

export default Place;
