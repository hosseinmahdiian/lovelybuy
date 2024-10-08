import React, { useEffect, useRef, useState } from "react";
import Category from "./Category";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { settingsForCategory } from "../../constant/constant";
import {
  IoIosArrowBack,
  
  IoIosArrowForward,
} from "react-icons/io";

const Categorys = ({ sub, selectCatgory, setSelectSubCatgory }) => {
  const [data, setData] = useState();
  const [select, setSelect] = useState(data);
  const [endScroll, setEndScroll] = useState(0);
  const scroll = useRef(null);

 

  useEffect(() => {
    sub.map((item, indxe) => {
      if (item.id === selectCatgory) {
        setData(item.SubCat);
        setSelect(item.SubCat[0]);
        setSelectSubCatgory(item.SubCat[0].id);
      }
    });
  }, [selectCatgory]);

  const clickhandler = (e) => {
    data?.map((item) => {
      if (item.id == e.target.id) {
        setSelect(() => item);
        // console.log("1111");
      }
    });
  };


  const scrollR = () => {
    if (scroll.current) {
      scroll.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };
  const scrollL = () => {
    if (scroll.current) {
      scroll.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };
  const scrollHandler = (e) => {
    setEndScroll(
      Math.round(
        (e.target.scrollLeft / (e.target.scrollWidth - e.target.clientWidth)) *
          -100
      )
    );
  };
  // console.log(endScroll);

  return (
    <div className="relative  mx-auto container boeder mt-8    ">
      <div className="   relative  w-full  b ">
        <div
          className="  lg:w-[calc(100%-80px)] mx-auto overflow-x-scroll  bgw  "
          onScroll={scrollHandler}
          ref={scroll}
        >
          <span
            className={`absolute  right-0  items-center lg:flex hidden border rounded-md h-24  child:hover:text-gray-600 hover:border-black
              ${endScroll === 0 && `!hidden`}
               `}
          >
            <IoIosArrowForward
              className={`align-middle  z-10  text-3xl    text-gray-400 hover:text-gray-600 `}
              onClick={scrollL}
            />
          </span>
          <span
            className={`absolute  left-0  items-center lg:flex hidden border rounded-md h-24  child:hover:text-gray-600 hover:border-black  ${
              endScroll === 100 && `!hidden`
            }`}
          >
            <IoIosArrowBack
              className={`align-middle  z-10  text-3xl    text-gray-400 hover:text-gray-600
                
              `}
              onClick={scrollR}
            />
          </span>

          <div className="flex gap-2 h-fit border ">
            {data?.map((item, index) => (
              <span key={index} onClick={clickhandler} className="    ">
                <Category item={item} select={select} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categorys;
