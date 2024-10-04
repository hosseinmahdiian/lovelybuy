import React, { useEffect, useState } from "react";
import { ChengHandler } from "../../../Functions/Fonctions";
import { useNavigate, useParams } from "react-router-dom";
import { GetProducts, PutProduct } from "../../../services/Products";
import { useQuery } from "react-query";
import { LuCalendarSearch, LuCalendarX } from "react-icons/lu";
import DatePicker, { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const ChargeProducts = () => {
  const { isLoading, data: getData } = useQuery(["get-products"], GetProducts);

  const [data, setData] = useState();
  const [date, setDate] = useState(false);

  const { id } = useParams();

  const navigate = useNavigate();
  useEffect(() => {
    setData(getData?.data.data.find((item) => item.id == id));
  }, [id]);
  return (
    <div className="child:child:mb-5 mt-4 relative   max-w-2xl mx-auto">
      <div
        className={`${
          !date && `hidden`
        } fixed bg-black top-0 h-screen w-full opacity-30  z-20`}
        onClick={() => {
          setDate((i) => !i);
        }}
      ></div>
      <div className=" h-[calc(100vh-100px)] overflow-y-auto pt-5">
        <div className="relative   ">
          <input
            className="peer px-5 border rounded-[10px] outline-gray-300 h-12 w-full "
            placeholder=" "
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
        <div className="relative   ">
          <input
            className="peer px-5 border rounded-[10px] outline-gray-300 h-12 w-full "
            placeholder=" "
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
        <div className="relative   ">
          <input
            className="peer px-5 border rounded-[10px] outline-gray-300 h-12 w-full "
            placeholder=" "
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
        <div className="relative   ">
          <input
            className="peer px-5 border rounded-[10px] outline-gray-300 h-12 w-full "
            placeholder=" "
            id="number"
            name="number"
            value={data?.number}
            onChange={(e) => ChengHandler(e, setData)}
          />
          <label
            htmlFor="number"
            className={`absolute start-1 IrHomama    rounded-2xl transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2 ${
              !!data?.number ? `start-2.5 -top-2 !text-sm` : `top-3`
            }`}
          >
            تعداد
          </label>
        </div>
        <div className="  relative ">
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
                      expirDate: ``,
                    }))
                  }
                />
              )}
            </label>
          </div>
        </div>
        <button
          className="w-full mx-auto  h-12 bg-blue-500 block  mt-5 rounded-[10px] text-white "
          onClick={() => {
            PutProduct(id, data);
            window.location.reload();
            navigate(-1);
          }}
        >
          ذخیره اطلاعات
        </button>
      </div>

      {/* <Counter /> */}
    </div>
  );
};

export default ChargeProducts;
