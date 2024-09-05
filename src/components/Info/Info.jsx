import React, { useContext, useEffect, useState } from "react";
import { reducerContext } from "../../constant/Context";
import { IoIosArrowForward } from "react-icons/io";
import { HiPlusSm } from "react-icons/hi";
import { FaBookmark, FaMinus, FaRegBookmark } from "react-icons/fa";
import { infoProducts } from "../../constant/DataSets";
import Filter from "../Filter/Filter";
import noImage from "../../assets/images/no-image.png";
import { getProducts } from "../../services/Products";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import { sp } from "../../constant/Functions";

const Info = () => {
  const reducer = useContext(reducerContext);
  const [reduce, dispach] = reducer;

  const [count, setCount] = useState(0);
  const [save, setSave] = useState(false);

  const [data1, setdata] = useState(infoProducts);
  const [select, setSelect] = useState(data1[0]);
  // console.log(item);

  const increaseHandeler = () => {
    setCount(count + 1);
    // console.log(count);
  };
  const decreaseHandeler = () => {
    setCount(count - 1);
    // console.log(count);
  };
  const clickhandler = (e) => {
    data1.map((item) => {
      if (item.name == e.target.id) {
        setSelect(() => item);
      }
    });
  };
  const { isLoading, data } = useQuery(["get-products"], getProducts);
  const [searchPrams, setSearchPrams] = useSearchParams();
  const id = searchPrams.get("IdP");
  const [item, setItem] = useState();

  reduce.Info
    ? document.documentElement.classList.add("overflow-y-hidden")
    : document.documentElement.classList.remove("overflow-y-hidden");

  useEffect(() => {
    setItem(data?.data.data?.find((item) => item?.id == id));
  }, [id]);

  console.log(item);

  return (
    reduce.Info && (
      <div className="bg-white h-full border">
        <div className={` py-6 px-3 border-b   `}>
          <span
            className=" h-5 text-center gap-2 cursor-pointer flex items-center"
            onClick={() => {
              dispach({ type: "Info" });
            }}
          >
            <IoIosArrowForward className="text-xl" />
            <h1 className="font-IrSana text-red-600 text-lg font-bold text-nowrap">
              {" "}
              پروفایل محصول
            </h1>
          </span>
        </div>

        <div className="bg-[#F6F6F6] h-full pt-2 px-2  ">
          <div className="h-[calc(100%-180px)] rounded-2xl  overflow-y-scroll ">
            <div className="relative bg-white rounded-t-2xl  mb-2  h-[250px] !overflow-hidden">
              <span
                onClick={() => setSave(!save)}
                className="absolute top-5 left-5 child:sm:text-2xl text-lg child:es:text-lg "
              >
                {save ? <FaBookmark /> : <FaRegBookmark />}
              </span>
              <div className="mx-auto  w-fit">
                <img
                  src={!item?.image ? noImage : item?.image}
                  alt=""
                  className="mt-2"
                />
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
                        10 %
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

              <div className=" rounded-b-xl  h-[calc(100vh-530px)] pb-40   bg-white ">
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
            </div>
          </div>
        </div>

        <div className=" absolute -bottom-4 w-full  mx-auto bg-white   overflow-hidden    rounded-t-md shadow-sm  rounded-none mb-5 py-4  ">
          {count == 0 ? (
            <button
              className="w-[calc(100%-40px)] my-2.5  font-bold h-12    text-sm  mx-auto items-center block px-10  bg-blue-600  rounded-xl   text-white "
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
        </div>
      </div>
    )
  );
};

export default Info;
