import React, { useEffect, useState } from "react";
import { RiChromeLine } from "react-icons/ri";
import { MdArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import {
  PostGallery,
  PostImage,
  PostProduct,
} from "../../../services/Products";
import { ChengHandler } from "../../../Functions/Fonctions";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { LuCalendarSearch, LuCalendarX } from "react-icons/lu";
import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowUp,
} from "react-icons/io";
import CategoryPage from "./CategoryPage";
import { CgClose, CgCloseO } from "react-icons/cg";
import { useMutation } from "react-query";
import { getCurrentAdmin } from "../../../auth/localStoreage";

const AddProdoct = () => {
  const [data, setData] = useState({
    info: "توضیحات محصول",
    gallery: [],
  });
  const [arrowWareouse, setArrowWareouse] = useState(true);
  const [date, setDate] = useState(false);
  const [cat, setcat] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
   if (!localStorage.getItem("authAdmin")) {
     navigate("/admin/loginAdmin");
   } else {
     getCurrentAdmin("authAdmin");
   }
  }, []);
  const { mutate, isLoading, isError } = useMutation(["post-Products"], () =>
    PostProduct(data)
  );
  return (
    <>
      <div
        className={`${
          cat && `hidden`
        }relative overflow-y-scroll h-screen pb-20 max-w-2xl mx-auto`}
      >
        <div
          className={`${cat && `hidden`} py-6 px-3 border-b  z-20 bg-white  `}
        >
          <span
            className=" h-5 text-center gap-2 cursor-pointer flex items-center"
            onClick={() => {
              navigate(-1);
            }}
          >
            <IoIosArrowForward className="text-xl" />
            <h1 className="font-IrSana text-red-600 text-lg font-bold text-nowrap">
              {" "}
              افزودن محصول{" "}
            </h1>
          </span>
        </div>
        <div></div>
        <div className={`${cat && `hidden`} relative `}>
          <div
            className={`${
              !date && `hidden`
            } fixed bg-black top-0 h-screen w-full opacity-30  right-0 z-20`}
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
              <Calendar
                className={` p-5 border fixed right-0 left-0 mx-auto  top-1/4  rounded-[10px] ease-in-out  z-50  ${
                  !date && `hidden `
                }`}
                value={data?.expirDate}
                id="expirDate"
                name="expirDate"
                calendar={persian}
                locale={persian_fa}
                minDate={new Date()}
                calendarPosition="bottom-right"
                onChange={(date) => {
                  setData((item) => ({
                    ...item,
                    expirDate: `${date?.year}/${date?.month.number}/${date?.day}`,
                  }));
                }}
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
                accept="capture=environment;image/*"
                onChange={(e) => {
                  const formData = new FormData();
                  formData.append(
                    "file",
                    e.target.files[0],
                    e.target.files[0].name
                  );
                  PostImage(formData, setData);
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
                {data?.image ? (
                  <img src={data?.image} alt="" className="mt-2 w-full" />
                ) : (
                  <RiChromeLine className=" text-3xl text-gray-600 mt-2  text-center w-full " />
                )}
              </label>
            </div>
            <div className="relative mx-2 flex   gap-4 items-center child:cursor-pointer">
              <input
                className={`peer hidden py-4 font-IrSans   border rounded-[10px] outline-gray-300 h-12 w-full `}
                placeholder=" "
                type="file"
                id="gallery"
                name="gallery"
                multiple
                accept="image/*"
                onChange={(e) => {
                  const formData = new FormData();
                  for (const item of e.target.files) {
                    formData.append("files", item, item.name);
                    PostGallery(formData, setData);
                    console.log(item);
                  }
                  console.log(formData);

                  // console.log(e.target.files[0]);
                }}
              />
              <label
                htmlFor="gallery"
                className="   border rounded-[10px] w-[calc(100%-112px)] h-12  bg-white py-3 px-2 flex items-center justify-between"
              >
                <p> تصویر دیگر محصول</p>
                {!!data?.gallery[0] && (
                  <span
                    onClick={() => {
                      setData((item) => ({ ...item, gallery: "" }));

                      console.log(data);
                    }}
                  >
                    <CgClose />
                  </span>
                )}
              </label>

              <label
                htmlFor="gallery"
                className=" inline-block start-1 h-12 w-12 rounded-[10px]   border  bg-white px-2"
              >
                {data?.gallery[0] ? (
                  <img
                    src={data?.gallery[0].url}
                    alt=""
                    className="mt-2 w-full"
                  />
                ) : (
                  <RiChromeLine className=" text-3xl text-gray-600 mt-2  text-center w-full " />
                )}{" "}
              </label>
              <label
                htmlFor="gallery"
                className=" inline-block start-1 h-12 w-12 rounded-[10px]   border  bg-white px-2"
              >
                {/* {console.log(data?.gallery[0]?.url)} */}
                {data?.gallery[1] ? (
                  <img
                    src={data?.gallery[1]?.url}
                    alt=""
                    className="mt-2 w-full"
                  />
                ) : (
                  <RiChromeLine className=" text-3xl text-gray-600 mt-2  text-center w-full " />
                )}{" "}
              </label>
            </div>
            {/* ========= */}
            <div
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
                <option value="1">lovely buy </option>
                <option value="2">ایذدی</option>
              </select>
            </div>
            <button
              className="w-[calc(100%-20px)] mx-auto  h-12 bg-blue-500 block  mt-5 rounded-[10px] text-white "
              onClick={() => {
                mutate(data);
                // navigate(-1);
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
    </>
  );
};

export default AddProdoct;
