import React, { useRef, useState } from "react";
import Category from "./Category";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import { settingsForCategory } from "../../constant/constant";
import { CategoryData } from "../../constant/DataSets";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const Categorys = () => {
  const [data, setData] = useState(CategoryData);
  const [select, setSelect] = useState(data[0]);

  const clickhandler = (e) => {
    data.map((item) => {
      if (item.name == e.target.id) {
        setSelect(() => item);
        // console.log(item.name,select.name);
      }
    });
  };
  

  const scroll = useRef(null);

  const scrollL = () => {
    if (scroll.current) {
      scroll.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };
  const scrollR = () => {
    if (scroll.current) {
      scroll.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  return (
    <div className="relative  my-8  ">
      <div className="  mx-auto container relative    ">
        <div
          className="  w-[calc(100%-80px)] mx-auto overflow-x-scroll   "
          ref={scroll}
        >
          <span className="absolute h-full right-1  items-center lg:flex hidden">
            <IoIosArrowDropright
              className=" align-middle  z-10  text-3xl    text-gray-400 hover:text-gray-600"
              onClick={scrollL}
            />
          </span>
          <span className="absolute h-full left-1  lg:flex hidden items-center">
            <IoIosArrowDropleft
              className=" align-middle  z-10  text-3xl    text-gray-400 hover:text-gray-600"
              onClick={scrollR}
            />
          </span>
          <div className="flex gap-2 h-32  ">
            {data.map((item, index) => (
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
