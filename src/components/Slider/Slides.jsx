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
  // console.log(slid[0]);

  // const [slid, setSlid] = useState(slideDadta);

  // const { isLoading, data: slid } = useQuery(["get-category"], getCategory);
  useEffect(() => {
    setSelect(slid[0].id);
    // console.log(slid?.slid);
  }, []);
  // console.log(select);
  // console.log(slid?.data.data[0].id);

  const clickhandler = (e) => {
    slid?.map((item) => {
      if (item.id == e.target.id) {
        setSelect(item.id);
      }
    });
  };

  const scroll = useRef(null);

  const scrollL = () => {
    if (scroll.current) {
      scroll.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };
  const scrollR = () => {
    if (scroll.current) {
      scroll.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="relative  my-4  w-full  mx-auto container  ">
        <div className="   relative    w-full ">
          <div
            className="  lg:w-[calc(100%-80px)]   mx-auto overflow-x-scroll   "
            ref={scroll}
          >
            <span className="absolute h-full right-0  items-center lg:flex hidden border rounded-md  child:hover:text-gray-600 hover:border-black">
              <IoIosArrowForward
                className=" align-middle  z-10  text-3xl    text-gray-400 "
                onClick={scrollL}
              />
            </span>
            <span className="absolute h-full left-1  lg:flex hidden items-center  border rounded-md child:hover:text-gray-600 hover:border-black">
              <IoIosArrowBack
                className=" align-middle  z-10  text-3xl    text-gray-400 hover:text-gray-600"
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
