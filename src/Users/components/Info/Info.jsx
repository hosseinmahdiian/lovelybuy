import React, { useContext, useEffect, useRef, useState } from "react";
import { reducerContext } from "../../constant/Context";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { HiPlusSm } from "react-icons/hi";
import { FaBookmark, FaMinus, FaRegBookmark } from "react-icons/fa";
import { infoProducts } from "../../constant/DataSets";
import Filter from "../Filter/Filter";
import noImage from "../../../assets/images/no-image.png";
import { getProducts } from "../../services/Products";
import { useQuery } from "react-query";
import {
  Navigate,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { percent, sp } from "../../constant/Functions";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Conter from "../Conter";
import { MobileOnlyView } from "react-device-detect";
import {
  addFavorite,
  deleteFavorite,
  getFavorite,
} from "../../services/Favorite";
import { decrypt } from "../../auth/crypto";
const Info = () => {
  const reducer = useContext(reducerContext);
  const [reduce, dispach] = reducer;

  const [count, setCount] = useState(0);
  const [save, setSave] = useState(false);

  const [data1, setdata] = useState(infoProducts);
  const [select, setSelect] = useState(data1[0]);

  let check = JSON.parse(localStorage.getItem("product"));

  useEffect(() => {
    if (!!check) {
      check?.map((i) => i.id == ID && setCount(i?.count));
    }
  }, []);

  const increaseHandeler = (id) => {
    let check = JSON.parse(localStorage.getItem("product"));
    let temp = check?.filter((i) => i.id != ID);
    if (!check) {
      localStorage.setItem(
        "product",
        JSON.stringify([{ id: ID, count: count + 1 }])
      );
    } else {
      localStorage.setItem(
        "product",
        JSON.stringify([...temp, { id: ID, count: count + 1 }])
      );
    }
    setCount(count + 1);
  };

  const decreaseHandeler = (id) => {
    let check = JSON.parse(localStorage.getItem("product"));
    let temp = check?.filter((i) => i.id != ID);
    localStorage.setItem(
      "product",
      JSON.stringify(
        count - 1 != 0 ? [...temp, { id: ID, count: count - 1 }] : [...temp]
      )
    );
    setCount(count - 1);
  };

  const clickhandler = (e) => {
    data1.map((item) => {
      if (item.name == e.target.id) {
        setSelect(() => item);
      }
    });
  };
  const { isLoading, data } = useQuery(["get-products"], getProducts);
  const [item, setItem] = useState();
  const [idF, setIdF] = useState();
  const [authUser, setAuthUser] = useState();
  const [favorite, setFavorite] = useState();
  const navigate = useNavigate();
  const { ID } = useParams();

  useEffect(() => {
    setItem(data?.data.data?.find((item) => item?.id == ID));
  }, [data]);

  !!localStorage.getItem("authUser") &&
    useEffect(() => {
      if (!!localStorage.getItem("authUser")) {
        setAuthUser(JSON.parse(decrypt(localStorage.getItem("authUser"))));
      } else {
        navigate("/LoginUser");
      }
    }, []);

  !!localStorage.getItem("authUser") &&
    useEffect(() => {
      // console.log("get favorit");
      if (authUser?._id) {
        getFavorite(authUser._id, setFavorite);
      }
    }, [authUser?._id, save]);

  !!localStorage.getItem("authUser") &&
    // console.log(item);

    useEffect(() => {
      let find = favorite?.data.data.find((i) => i.productID == ID);
      find?.productID == ID ? setSave(true) : setSave(false);
      find?.productID == ID && setIdF(find._id);
    }, [favorite]);

  return (
    !isLoading && (
      <div className="bg-[#F6F6F6] h-screen overflow-hidden">
        <div className=" max-w-xl  mx-auto h-[calc(100%-50px)] overflow-y-scroll   ">
          <div className={`  border-b    `}>
            <span
              className=" bg-white h-16 text-center gap-2 cursor-pointer flex items-center pr-5"
              onClick={() => {
                navigate(-1);
              }}
            >
              <IoIosArrowForward className="text-xl" />
              <h1 className="font-IrSana text-red-600 text-lg font-bold text-nowrap ">
                {" "}
                پروفایل محصول
              </h1>
            </span>
          </div>

          <div className="bg-[#F6F6F6] h-full pt-2 px-2  ">
            <div className=" rounded-2xl   ">
              <div className="relative bg-white rounded-t-2xl  mb-2  h-[250px] !overflow-hidden">
                <span
                  onClick={() => {
                    if (!localStorage.getItem("authUser")) {
                      navigate("/LoginUser");
                    } else {
                      !save &&
                        (addFavorite({ userID: authUser._id, productID: ID }),
                        setSave(true));
                      save && (deleteFavorite(idF), setSave(false));
                    }
                  }}
                  className="absolute top-5 left-5 child:sm:text-2xl text-lg child:es:text-lg z-30"
                >
                  {save ? <FaBookmark /> : <FaRegBookmark />}
                </span>
                <div className="mx-auto  w-full">
                  <div className="mx-auto   w-full ">
                    <Swiper
                      modules={[Navigation, Pagination]}
                      spaceBetween={50}
                      navigation={{
                        nextEl: ".button-next-slide",
                        prevEl: ".button-prev-slide",
                        // disabledClass: ".swiper-button-disabled",
                      }}
                      pagination={{
                        el: ".swiper-pagination",
                        clickable: true,
                        bulletActiveClass: "swiper-pagination-bullet-active",
                        // lockClass: ".swiper-pagination-lock",
                      }}
                      slidesPerView={1}
                      loop={true}
                    >
                      <SwiperSlide>
                        <img
                          src={
                            !item?.image
                              ? item?.gallery[0]?.url
                                ? item?.gallery[0]?.url
                                : noImage
                              : item?.image
                          }
                          alt=""
                          className="mt-2  h-[207px] mx-auto border border-gray-100 mb-8 rounded-xl"
                        />
                      </SwiperSlide>
                      {item?.gallery[0]?.url &&
                        item?.gallery.map((item) => (
                          <SwiperSlide key={item.id}>
                            <img
                              src={item.url}
                              alt=""
                              className="mt-2  h-[207px] mx-auto border border-gray-100 mb-8  rounded-xl"
                            />
                          </SwiperSlide>
                        ))}
                      <span
                        className={`button-prev-slide absolute  top-0 right-5 z-20  items-center flex   rounded-md h-full  child:hover:text-gray-600 hover:border-black`}
                      >
                        <IoIosArrowForward
                          className={`align-middle  z-10  text-3xl    text-gray-400 hover:text-gray-600 `}
                        />
                      </span>
                      <span
                        className={`  button-next-slide absolute  left-5 top-0  items-center flex   rounded-md h-full  child:hover:text-gray-600 hover:border-black `}
                      >
                        <IoIosArrowBack
                          className={`align-middle  z-10  text-3xl    text-gray-400 hover:text-gray-600`}
                        />
                      </span>
                      <span className="swiper-pagination absolute  text-black child:mx-1 bottom-1  left-0 right-0 mx-auto "></span>
                    </Swiper>
                  </div>
                </div>
              </div>
              <div className="    overflow-hidden  ">
                <div className="child:gap-3 flex  justify-between  bg-white rounded-t-lg  p-4 ">
                  <div className="w-9/12 ">
                    <p> {item?.name}</p>
                    <p>{item?.expirDate}</p>
                  </div>
                  <div className="flex-col child:flex my-1 w-3/12 ">
                    <span className="relative  items-center justify-end  !flex">
                      <p className="opacity-70 text-[0.800rem] relative">
                        {sp(item?.oldPrice)}
                        <span className="opacity-100  w-full  items-center bottom-2.5  right-0 inline-block absolute border-b border-black"></span>
                      </p>
                      <div className="w-9 !h-4 rounded-xl  bg-red-600 flex items-center mr-1">
                        <p className="px-1 mx-auto pt-0.5 text-white  self-center font-IrSans rounded-md  text-[10px]  ">
                          {percent(item?.oldPrice, item?.sellPrice)} %
                        </p>
                      </div>
                    </span>
                    <span className="flex items-center ">
                      <p className=" text-[14px] inline-block font-IRANSans_FaNum">
                        {sp(item?.sellPrice)}
                      </p>
                      <p className=" text-[14px] inline-block  mr-1">تومان</p>
                    </span>
                  </div>
                </div>

                <div className=" rounded-b-xl  h-[calc(100vh-570px)] pb-40 mb-10  bg-white ">
                  <div className="bg-white mt-1   px-4">
                    <div className="flex gap-2   mb-2   pt-4 overflow-x-scroll    ">
                      {data1.map((item, index) => (
                        <span onClick={clickhandler} key={index}>
                          <Filter
                            item={item}
                            select={select}
                            className=" mb-5 "
                          />
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 h-full">
                      <div className="flex  justify-between ">
                        <p>وزن محصول :</p>
                        <p>125گرم</p>
                      </div>
                      <div className="flex  justify-between mt-2 ">
                        <p>دسته بندی نگهداری :</p>
                        <p>یخچالی</p>
                      </div>
                    </div>
                  </div>
                </div>
                <MobileOnlyView>
                  <div className="h-[64px]  w-2"></div>
                </MobileOnlyView>
              </div>
            </div>
          </div>

          <div className="z-20 absolute -bottom-5  max-w-xl  left-0 right-0 mx-auto bg-white   overflow-hidden    rounded-t-md shadow-sm  rounded-none mb-5 py-4  ">
            {count == 0 ? (
              <button
                className="w-[calc(100%-40px)] py-2.5  font-bold h-12    text-sm  mx-auto items-center block px-10  bg-blue-600  rounded-xl   text-white "
                onClick={increaseHandeler}
              >
                افزودن به سبد خرید
              </button>
            ) : (
              <div className="  flex items-center   py-1.5 justify-around  border-0 bg-white   rounded-b-3xl ">
                <button
                  className="  w-10 h-10  border-[3px] rounded-xl text-green-700 text-3xl border-green-600 "
                  onClick={increaseHandeler}
                >
                  <HiPlusSm className="w-full text-center" />
                </button>
                <span className=" text-xl font-IRANSans_FaNum  h-12 xl:h-12 pt-2.5 ">
                  {count}
                </span>
                <button
                  className=" w-10 h-10 border-[3px] rounded-xl text-red-700  border-red-600 "
                  onClick={decreaseHandeler}
                >
                  <FaMinus className="w-full text-center" />
                </button>
              </div>
            )}
            <MobileOnlyView>
              <div className="h-[64px]  w-2"></div>
            </MobileOnlyView>
          </div>
          <Conter />
        </div>
      </div>
    )
  );
};

export default Info;
