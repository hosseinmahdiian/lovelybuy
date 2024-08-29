import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Slide from "./slide";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slideDadta } from "../../constant/DataSets";
import {
  IoIosArrowBack,
  IoIosArrowDropleft,
  IoIosArrowDropright,
  IoIosArrowForward,
} from "react-icons/io";
import { useQuery } from "react-query";
import { getCategory } from "../../services/Catgory";
import Loader from "../Loader";
// import { settingsForSlide } from "../../constant/constant";

function Slides({ slid, select, setSelect }) {
  const [endScroll, setEndScroll] = useState(0);
  const scroll = useRef(null);


  useEffect(() => {
    setSelect(slid[0].id);
  }, []);
  

  const clickhandler = (e) => {
    slid?.map((item) => {
      if (item.id == e.target.id) {
        setSelect(item.id);
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
  return (
    <>
      <div className="relative  my-4  w-full  mx-auto container  ">
        <div className="   relative    w-full ">
          <div
            className="  lg:w-[calc(100%-80px)] mx-auto overflow-x-scroll   "
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
            <div className="flex gap-2   ">
              {slid?.map((item, index) => (
                <span
                  key={index}
                  id={item.id}
                  className="  "
                  onClick={clickhandler}
                >
                  <Slide item={item} select={select} />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slides;
