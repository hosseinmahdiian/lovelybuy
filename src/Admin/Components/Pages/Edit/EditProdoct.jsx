import React, { useEffect, useState } from "react";
import { RiChromeLine } from "react-icons/ri";
import { MdArrowBackIos } from "react-icons/md";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { GetProducts, PutProduct } from "../../../services/Products";
import { ChengHandler } from "../../../Functions/Fonctions";
import DatePicker, { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { LuCalendarSearch, LuCalendarX } from "react-icons/lu";
import Loader from "../../Loader";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import CategoryPage from "./CategoryPage";

const EditProdoct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoading, data: getData } = useQuery(["get-products"], GetProducts);
  const [data, setData] = useState({});
  const [date, setDate] = useState(false);
  const [cat, setcat] = useState(false);

  // const [myValue, setMyValue] = useState("");
  const [arrowWareouse, setArrowWareouse] = useState(true);

  useEffect(() => {
    setData(getData?.data.data.find((item) => item.id == id));
    true
      ? document.documentElement.classList.add("overflow-y-hidden")
      : document.documentElement.classList.remove("overflow-y-hidden");
  }, [id]);
  // console.log(data);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="relative max-w-2xl mx-auto">
          <div className={`${cat && `hidden`} relative `}>
            <div
              className={`${
                !date && `hidden`
              } fixed bg-black top-0 h-screen w-full opacity-30  z-20`}
              onClick={() => {
                setDate((i) => !i);
              }}
            ></div>
            <div className="   h-screen    w-full child:mb-4 mt-8  child:mx-3">
              <div className="relative mx-2  ">
                <input
                  className="peer px-5 border rounded-[10px] outline-gray-300 h-12 w-full focus:border-none "
                  placeholder=" "
                  id="name"
                  name="name"
                  value={data?.name}
                  onChange={(e) => ChengHandler(e, setData)}
                />
                <label
                  htmlFor="name"
                  className={`absolute start-1 IrHomama    rounded-2xl transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2 ${
                    !!data?.name ? `start-2.5 -top-2 !text-sm` : `top-3`
                  }`}
                >
                  نام محصول
                </label>
              </div>
              <div className="relative mx-2  ">
                <input
                  className="peer px-5 border rounded-[10px] outline-gray-300 h-12 w-full "
                  placeholder=" "
                  type="number"
                  id="code"
                  name="code"
                  value={data?.code}
                  onChange={(e) => ChengHandler(e, setData)}
                />
                <label
                  htmlFor="code"
                  className={`absolute start-1 IrHomama    rounded-2xl transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2 ${
                    !!data?.code ? `start-2.5 -top-2 !text-sm` : `top-3`
                  }`}
                >
                  بارکد محصول
                </label>
              </div>
              <div className="relative mx-2  ">
                <input
                  className="peer px-5 border rounded-[10px] outline-gray-300 h-12 w-full "
                  placeholder=" "
                  type="number"
                  id="buyPrice"
                  name="buyPrice"
                  value={data?.buyPrice}
                  onChange={(e) => ChengHandler(e, setData)}
                />
                <label
                  htmlFor="buyPrice"
                  className={`absolute start-1 IrHomama    rounded-2xl transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2 ${
                    !!data?.buyPrice ? `start-2.5 -top-2 !text-sm` : `top-3`
                  }`}
                >
                  قیمت خرید
                </label>
              </div>
              <div className="relative mx-2  ">
                <input
                  className="peer border px-5 rounded-[10px] outline-gray-300 h-12 w-full "
                  placeholder=" "
                  type="number"
                  id="oldPrice"
                  name="oldPrice"
                  value={data?.oldPrice}
                  onChange={(e) => ChengHandler(e, setData)}
                />
                <label
                  htmlFor="oldPrice"
                  className={`absolute start-1 IrHomama    rounded-2xl transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2 ${
                    !!data?.oldPrice ? `start-2.5 -top-2 !text-sm` : `top-3`
                  }`}
                >
                  قیمت خط خورده
                </label>
              </div>
              <div className="relative mx-2  ">
                <input
                  className="peer px-5 border rounded-[10px] outline-gray-300 h-12 w-full "
                  placeholder=" "
                  type="number"
                  id="sellPrice"
                  name="sellPrice"
                  value={data?.sellPrice}
                  onChange={(e) => ChengHandler(e, setData)}
                />
                <label
                  htmlFor="sellPrice"
                  className={`absolute start-1 IrHomama    rounded-2xl transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2 ${
                    !!data?.sellPrice ? `start-2.5 -top-2 !text-sm` : `top-3`
                  }`}
                >
                  قیمت فروش
                </label>
              </div>
              <div className="relative mx-2  ">
                <input
                  className="peer px-5 border rounded-[10px] outline-gray-300 h-12 w-full "
                  placeholder=" "
                  type="number"
                  id="number"
                  name="number"
                  value={data?.number}
                  onChange={(e) => ChengHandler(e, setData)}
                />
                <label
                  htmlFor="number"
                  className={`absolute start-1 IrHomama    rounded-2xl transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2 ${
                    !!data?.number ? `start-2.5 -top-3 !text-sm` : `top-3`
                  }`}
                >
                  تعداد
                </label>
              </div>
              <div className="  relative mx-2">
                {/* <div className="absolute bg-black top-0 h-screen w-full opacity-30  z-20"> */}
                <Calendar
                  className={` p-5 border fixed right-0 left-0 mx-auto  top-1/4  rounded-[10px] ease-in-out  z-50  ${
                    !date && `hidden `
                  }`}
                  value={data?.expirDate}
                  id="expirDate"
                  name="expirDate"
                  onChange={(dat) => {
                    setData((item) => ({
                      ...item,
                      expirDate: `${dat?.year}/${dat?.month.number}/${dat?.day}`,
                    }));
                  }}
                  calendar={persian}
                  locale={persian_fa}
                  calendarPosition="bottom-right"
                />

                <div
                  className="peer relative px-5 border rounded-[10px] outline-gray-300 h-12 w-full "
                  onClick={() => {
                    setDate((i) => !i);
                  }}
                >
                  <p className="mt-2.5"> {` ${data?.expirDate}`}</p>
                  <label
                    htmlFor="expirDate"
                    className={`${
                      !!data?.expirDate ? `start-2.5 -top-3 !text-sm` : `top-3`
                    } absolute start-1 IrHomama    rounded-2xl transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2 `}
                  >
                    تاریخ انقضا
                  </label>
                  <label
                    htmlFor="expirDate"
                    className={`absolute end-1 IrHomama  top-3  rounded-2xl transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2 `}
                  >
                    {!data?.expirDate ? (
                      <LuCalendarSearch />
                    ) : (
                      <LuCalendarX
                        onClick={() =>
                          setData((item) => ({
                            ...item,
                            expirDate: ` `,
                          }))
                        }
                      />
                    )}
                  </label>
                </div>
              </div>{" "}
              <div className="relative mx-2 flex   gap-4 items-center child:cursor-pointer">
                <input
                  className="peer hidden  border rounded-[10px] outline-gray-300 h-12  "
                  placeholder=" "
                  type="file"
                  id="image"
                  name="image"
                  onChange={(e) => {
                    console.log(e);
                  }}
                />
                <label
                  htmlFor="image"
                  className=" w-[calc(100%-64px)]  border rounded-[10px]  h-12  bg-white py-2 px-2"
                >
                  تصویر اصلی
                </label>
                <label
                  htmlFor="image"
                  className=" inline-block start-1 h-12 w-12 rounded-[10px]   border  bg-white px-2"
                >
                  {/* {data?.image} */}
                  <img
                    src={data?.image}
                    alt=""
                    className="w-full bg-black z-40"
                  />
                  {/* {data?.image ? (
                <img src={data?.image} alt="" />
              ) : (
                <RiChromeLine className=" text-3xl text-gray-600 mt-2  text-center w-full " />
              )}{" "} */}
                </label>
              </div>
              <div className="relative mx-2 flex   gap-4 items-center child:cursor-pointer">
                <input
                  className={`peer hidden py-4 font-IrSans   border rounded-[10px] outline-gray-300 h-12 w-full `}
                  placeholder=" "
                  type="file"
                  id="gallery"
                  name="gallery"
                  onChange={(e) => {
                    console.log("file", e.target.files);
                  }}
                />
                <label
                  htmlFor="gallery"
                  className="   border rounded-[10px] w-[calc(100%-112px)] h-12  bg-white py-3 px-2"
                >
                  تصویر دیگر محصول
                </label>
                <label
                  htmlFor="images"
                  className=" inline-block start-1 h-12 w-12 rounded-[10px]   border  bg-white px-2"
                >
                  <RiChromeLine className=" text-3xl text-gray-600 w-full mt-2 text-center   " />
                </label>
                <label
                  htmlFor="images"
                  className=" inline-block start-1 h-12 w-12 rounded-[10px]   border  bg-white px-2"
                >
                  <RiChromeLine className=" text-3xl text-gray-600 mt-2 text-center w-full " />
                </label>
              </div>
              {/* ========= */}
              <div
                // to={`/Edit/Category/${id}`}
                className="flex mx-auto w-[calc(100%-20px)] justify-between items-center   border rounded-[10px]  h-12  bg-white  py-4 px-3"
                onClick={() => {
                  setcat((i) => !i);
                }}
              >
                <label htmlFor="main-image" className="   ">
                  دسته بندی
                </label>
                <div>
                  <MdArrowBackIos />
                </div>
              </div>
              {/* ======================================== */}
              <div className="relative ">
                <span className="absolute end-3 top-4">
                  {arrowWareouse ? <IoIosArrowDown /> : <IoIosArrowUp />}
                </span>
                <select
                  name=""
                  id=""
                  className=" w-[calc(100%+4px)]  p-2 block  border mx-auto h-12 rounded-[10px]  appearance-none "
                  onClick={() => {
                    setArrowWareouse((item) => !item);
                  }}
                >
                  <option selected disabled value="">
                    انبار
                  </option>
                  <option value="1">خرم آباد</option>
                  <option value="2">بروجرد</option>
                  <option value="3">دزفول</option>
                  <option value="4">اهواز</option>
                </select>
              </div>
              <button
                className="w-[calc(100%-20px)] mx-auto  h-12 bg-blue-500 block  mt-5 rounded-[10px] text-white "
                onClick={() => {
                  console.log(data);
                  PutProduct(id, data);
                  // setData({});
                  navigate(-1);
                  // window.location.reload();
                }}
              >
                ذخیره اطلاعات
              </button>
            </div>
          </div>
          <div
            className={`${
              !cat && `hidden`
            } fixed w-full top-0 !overflow-y-scroll h-screen pb-20`}
          >
            <CategoryPage
              setcat={setcat}
              data={data}
              cat={cat}
              setData={setData}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default EditProdoct;
