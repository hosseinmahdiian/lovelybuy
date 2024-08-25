import React, { useEffect, useRef, useState } from "react";
import Category from "./Category";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import { settingsForCategory } from "../../constant/constant";
import { CategoryData } from "../../constant/DataSets";
import {
  IoIosArrowBack,
  IoIosArrowDropleft,
  IoIosArrowDropright,
  IoIosArrowForward,
} from "react-icons/io";

const Categorys = ({ sub, selectCatgory, setSelectSubCatgory }) => {
  const [data, setData] = useState();
  const [select, setSelect] = useState();
  // console.log(selectCatgory);
  // console.log(sub[0].id === selectCatgory);

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
        console.log("1111");

        // console.log(item.name,select.name);
      }
    });
  };

  const scroll = useRef(null);

  const scrollL = () => {
    if (scroll.current) {
      scroll.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };
  const scrollR = () => {
    if (scroll.current) {
      scroll.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="relative  mx-auto container boeder my-8    ">
      <div className="   relative  w-full  ">
        <div
          className="  lg:w-[calc(100%-80px)] mx-auto overflow-x-scroll   "
          ref={scroll}
        >
          <span className="absolute  right-0  items-center lg:flex hidden border rounded-md h-24  child:hover:text-gray-600 hover:border-black">
            <IoIosArrowForward
              className=" align-middle  z-10  text-3xl    text-gray-400 "
              onClick={scrollL}
            />
          </span>
          <span className="absolute  left-0  items-center lg:flex hidden border rounded-md h-24  child:hover:text-gray-600 hover:border-black">
            <IoIosArrowBack
              className=" align-middle  z-10  text-3xl    text-gray-400 "
              onClick={scrollR}
            />
          </span>

          <div className="flex gap-2 h-[140px]  ">
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
