import React, { useContext, useEffect, useRef, useState } from "react";
import { reducerContext } from "../../../constant/Context";

import logo from "../../../assets/images/logo.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { slideDadta } from "../../../constant/DataSets";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";
const Chose = () => {
  const reducer = useContext(reducerContext);
  const [reduce, dispach] = reducer;

  const [data, ssetData] = useState(slideDadta);
  const [slid, setSlid] = useState(data);

  const [endScroll, setEndScroll] = useState(0);
  const scroll = useRef(null);

  useEffect(() => {
    //  setSelect(slid[0].id);
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
      <div className={`  container h-full  mx-auto relative bg-[#F5F5F5]  `}>
        <div className="bg-white pb-3 w-full">
          <div className="flex  justify-between items-center p-4 bg-white">
            <img src={logo} alt="" className="w-fit h-8" />
            <div className="w-7/12">
              <p>آدرس</p>
              <p className="text-wrap line-clamp-1">
                ========================= ====
              </p>
            </div>
          </div>
          <div className="relative w-[calc(100%-40px)] mx-auto ">
            <input
              className="peer border px-5 rounded-[10px] outline-gray-300 h-14 w-full "
              placeholder=" "
              id="pass"
              type="password"
            />
            <label
              htmlFor="pass"
              className="absolute start-1 IrHomama top-4 rounded-2xl transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2"
            >
              جستجو
            </label>
          </div>
        </div>

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
                <Swiper
                  pagination={{
                    dynamicBullets: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {" "}
                  {slid?.map((item, index) => (
                    <span
                      key={index}
                      id={item.id}
                      className="  "
                      onClick={clickhandler}
                    >
                      <SwiperSlide>
                        <div
                          className={`relative  w-full  `}
                          id={item.id}
                        >
                          <img
                            src={item?.image}
                            // className={` w-72 h-20 ${
                            //   id == select?.id && ` opacity-25 bg-black `
                            // } `}
                            id={item.id}
                          />
                          <span
                            id={item.id}
                            className="absolute bottom-1 font-IrSans ms:left-9 left-6 inline-block mx-auto md:w-[179px] md:h-[40px]  \\ sm:w-[149px] sm:h-[30px] \\ w-[125px] h-[30px] text-white bg-slate-600 bg-opacity-50 rounded-md border-white border-2 text-center pt-1"
                          >
                            {item.title}
                          </span>
                        </div>
                      </SwiperSlide>
                    </span>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 items-center mx-5 ">
          <div className="w- h-40 border bg-red-400 rounded-lg">org</div>
          <NavLink
            to="/InPerson"
            className="w h-40 border bg-red-400 rounded-lg"
          ></NavLink>
        </div>
        <div className="w-[calc(100%-40px)] mx-auto mt-3  h-40 border bg-red-700 rounded-lg"></div>
        <div className="w-[calc(100%-40px)] mx-auto mt-3  h-40 border bg-blue-700 rounded-lg"></div>
      </div>
    </>
  );
};

export default Chose;
