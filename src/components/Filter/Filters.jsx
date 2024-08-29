import React, { useEffect, useRef, useState } from "react";
// import Item from "./Item";
import { FilterData, itemsData } from "../../constant/DataSets";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { settingsForitem } from "../../constant/constant";
import Filter from "./Filter";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const Filters = ({ sub, selectSubCatgory, selectCatgory }) => {
  const [data, setData] = useState();
  const [select, setSelect] = useState();
  const [endScroll, setEndScroll] = useState(0);
  const scroll = useRef(null);

  useEffect(() => {
    sub.map((item, indxe) => {
      if (item.id === selectCatgory) {
        item.SubCat.map((item2, indxe) => {
          if (item2.id === selectSubCatgory) {
            setData(item2.SubSubCat);
            setSelect(item2.SubSubCat[0]);
          }
        });
      }
    });
  }, [selectSubCatgory]);

  const clickhandler = (e) => {
    data?.map((item) => {
      if (item.name == e.target.id) {
        setSelect(() => item);
      }
    });
  };


  const scrollL = () => {
    if (scroll.current) {
      scroll.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };
  const scrollR = () => {
    if (scroll.current) {
      scroll.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };
    const scrollHandler = (e) => {
      console.log(
        setEndScroll(
          Math.round(
            (e.target.scrollLeft /
              (e.target.scrollWidth - e.target.clientWidth)) *
              -100
          )
        )
      );
    };

  return (
    <div className="relative  mx-auto container my-4 ">
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
            {data?.map((item, index) => (
              <span onClick={clickhandler} key={index}>
                <Filter item={item} select={select} className=" mb-5 " />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
