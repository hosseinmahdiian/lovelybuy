import React, { useEffect, useReducer, useState } from "react";
import { useQuery } from "react-query";
import { PutProduct } from "../../../services/Products";
import { getCategory } from "../../../services/Catgory";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { TfiCheckBox } from "react-icons/tfi";
import { GrCheckbox } from "react-icons/gr";
import { RiCheckboxBlankLine } from "react-icons/ri";
import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowUp,
} from "react-icons/io";

const CategoryPage = ({ setcat, cat, setData, data: i }) => {
  const [Cat, setCat] = useState([]);
  const [SubCat, setSubCat] = useState([]);
  const [SubSubCat, setSubSubCat] = useState([]);
  const { isLoading, data } = useQuery(["get-category"], getCategory);
  const { id } = useParams();
  const navigate = useNavigate();

  cat
    ? document.documentElement.classList.add("overflow-y-hidden")
    : document.documentElement.classList.remove("overflow-y-hidden");

  const chengSubCatHandeler = (e) => {
    // e.preventDefault();
    setSubCat(
      e.target.checked
        ? !!SubCat?.[0]
          ? [...SubCat.filter((isc) => isc != e.target.id && isc), e.target.id]
          : [e.target.id]
        : [...SubCat.filter((isc) => isc != e.target.id && isc)]
    );
  };
  const chengSubSubCatHandeler = (e) => {
    // e.preventDefault();
    setSubSubCat(
      e.target.checked
        ? !!SubSubCat?.[0]
          ? [
              ...SubSubCat.filter((isc) => isc != e.target.id && isc),
              e.target.id,
            ]
          : [e.target.id]
        : [...SubSubCat.filter((isc) => isc != e.target.id && isc)]
    );
  };

  return (
    !isLoading && (
      <div className="max-w-3xl mt-2 mx-5 overflow-y-scroll ">
        <div className={` py-6 px-3 border-b  z-20 bg-white  `}>
          <span
            className=" h-5 text-center gap-2 cursor-pointer flex items-center"
            onClick={() => {
              setcat((i) => !i);
            }}
          >
            <IoIosArrowForward className="text-xl" />
            <h1 className="font-IrSana text-red-600 text-lg font-bold text-nowrap">
              {" "}
               دسته بندی {" "}
            </h1>
          </span>
        </div>
        <div className="flex gap-2 child:px-5 child:py-2 child:border child:rounded-3xl mt-4 child:bg-white ">
          {data?.data.data?.map((item) => (
            <h3
              key={item?.id}
              className={`
                ${Cat?.id == item?.id ? `!bg-black !text-white` : ``}
              `}
              name={item?.id}
              onClick={() => {
                setCat(item);
                setData((i) => ({
                  ...i,
                  catID: [item?._id],
                  subCatID: [],
                  subSubCatID: [],
                }));
              }}
            >
              {item.title}
            </h3>
          ))}
        </div>
        <div className="mt-5 child:mb-2 font-bold">
          {Cat?.title && (
            <div className="flex gap-3 items-center">
              {Cat._id ? <TfiCheckBox /> : <RiCheckboxBlankLine />}
              <label htmlFor="1"> {Cat?.title}</label>
            </div>
          )}

          <div className="mr-5 child:mb-2">
            {Cat?.SubCat?.map((item) => (
              <div key={item?.id}>
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id={item?.id}
                    onChange={(e) => chengSubCatHandeler(e)}
                  />
                  {!!SubCat?.find((ssci) => ssci == item._id) ? (
                    <IoIosArrowDown />
                  ) : (
                    <IoIosArrowUp />
                  )}
                  <label htmlFor={item?.id}>{item.title}</label>
                </div>
                <div className="mr-5 child:mb-2">
                  {SubCat.map((sc) =>
                    item.SubSubCat?.map(
                      (ssc) =>
                        ssc.subCatID == sc && (
                          <div
                            key={ssc._id}
                            className="flex gap-3 items-center"
                          >
                            <input
                              type="checkbox"
                              id={ssc?._id}
                              onChange={(e) => chengSubSubCatHandeler(e)}
                            />
                            <label htmlFor={ssc._id}>{ssc.title}</label>
                          </div>
                        )
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className="w-full  h-12 bg-blue-500 block  mt-5 rounded-[10px] text-white "
          onClick={() => {
            console.log(i.catID, "/", i.subCatID, "/", i.subSubCatID);
            if (i.catID?.[0] && SubCat?.[0] && SubSubCat?.[0]) {
              setData({
                ...i,
                subCatID: SubCat,
                subSubCatID: SubSubCat,
              });
              toast.success(`دسته بندی با موفقیت انتخاب شد  `);
              setcat((i) => !i);
            } else {
              toast.error("دسته بندی را کامل انتخاب کنید");
            }
          }}
        >
          ذخیره اطلاعات
        </button>
        <button
          className="w-full  h-12 bg-red-500 block  mt-5 rounded-[10px] text-white "
          onClick={() => {
            toast.success(`دسته بندی با موفقیت پاک شد `);
            setData({
              ...i,
              catID: [],
              subCatID: [],
              subSubCatID: [],
            });
            setCat([]);
            setSubCat([]);
            setSubSubCat([]);
          }}
        >
          پاک کردن دسته بندی
        </button>
      </div>
    )
  );
};

export default CategoryPage;
