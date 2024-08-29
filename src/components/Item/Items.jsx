import React, { useRef, useState } from "react";
import Item from "./Item";
import { itemsData } from "../../constant/DataSets";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
// import { settingsForitem } from "../../constant/constant";

const Items = () => {
  const [data, setdata] = useState(itemsData);
  const [select, setSelect] = useState(data[0]);
  const [endScroll, setEndScroll] = useState(0);
  const scroll = useRef(null);
  
  const clickhandler = (e) => {
    data.map((item) => {
      if (item.name == e.target.id) {
        setSelect(() => item);
      }
    });
  };

  const scrollR = () => {
    if (scroll.current) {
      scroll.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };
  const scrollL = (e) => {
    if (scroll.current) {
      scroll.current.scrollBy({ left: 400, behavior: "smooth" });
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

  return (
    <div className="relative  my-4 mx-auto container ">
      <div className="   relative    ">
        <div
          className="  lg:w-[calc(100%-80px)] mx-auto overflow-x-scroll   "
          onScroll={scrollHandler}
          ref={scroll}
        >
          <span className="absolute h-full right-1  items-center lg:flex hidden ">
            <IoIosArrowDropright
              className={`align-middle  z-10  text-3xl    text-gray-400 hover:text-gray-600 ${
                endScroll === 0 && `hidden`
              }`}
              onClick={scrollL}
            />
          </span>
          <span className="absolute h-full left-1  lg:flex hidden items-center">
            <IoIosArrowDropleft
              className={`align-middle  z-10  text-3xl    text-gray-400 hover:text-gray-600 ${
                endScroll === 100 && `hidden`
              }`}
              onClick={scrollR}
            />
          </span>
          <div className="flex gap-2    items-center  ">
            {data.map((item, index) => (
              <span onClick={clickhandler} key={index}>
                <Item item={item} select={select} className=" mb-5" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
