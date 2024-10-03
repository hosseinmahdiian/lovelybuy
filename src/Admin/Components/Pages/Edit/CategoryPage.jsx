import React, { useEffect, useReducer, useState } from "react";
//  ;
import { useQuery } from "react-query";
import { PutProduct } from "../../../services/Products";
import { getCategory } from "../../../services/Catgory";
import { useNavigate, useParams } from "react-router-dom";
import { TfiCheckBox } from "react-icons/tfi";
import { RiCheckboxBlankLine } from "react-icons/ri";
import toast from "react-hot-toast";
import Loader from "../../Loader";

const CategoryPage = ({ setcat, cat, setData, data: i }) => {
  const [Cat, setCat] = useState();
  const [SubCat, setSubCat] = useState();
  const [SubSubCat, setSubSubCat] = useState();
  const { isLoading, data } = useQuery(["get-category"], getCategory);
  const { id } = useParams();
  const navigate = useNavigate();

  // useEffect(() => {
  //   setSubSubCat();
  //   setSubCat();
  // }, [Cat]);

  cat
    ? document.documentElement.classList.add("overflow-y-hidden")
    : document.documentElement.classList.remove("overflow-y-hidden");

  return isLoading ? (
    <Loader />
  ) : (
    <div className=" mt-6 mx-5 max-w-2xl mx-auto">
      <div className="flex gap-2 child:px-5 child:py-2 child:border child:rounded-3xl mt-4 child:bg-white ">
        {data?.data.data.map((item) => (
          <h3
            key={item?.id}
            className={`
                ${Cat?.id == item?.id ? `!bg-black !text-white` : ``}
              `}
            name={item?.id}
            onClick={() => {
              setCat(item);
              setSubCat(item?.SubCat[0] ? item?.SubCat[0] : "");
              setSubSubCat(
                item?.SubCat[0]?.SubSubCat[0]?._id
                  ? item?.SubCat[0]?.SubSubCat[0]
                  : ""
              );
              setData((i) => ({
                ...i,
                catID: item._id,
                subCatID: item?.SubCat[0]?.id ? item?.SubCat[0]?.id : "",
                subSubCatID: item?.SubCat[0]?.SubSubCat[0]?._id
                  ? item?.SubCat[0]?.SubSubCat[0]?._id
                  : "",
              }));
            }}
          >
            {item.title}
            {/* {item._id} */}
          </h3>
        ))}
      </div>
      <div className="mt-5 child:mb-2 font-bold">
        {Cat?.title && (
          <div className="flex gap-3 items-center">
            {Cat._id ? <TfiCheckBox /> : <RiCheckboxBlankLine />}{" "}
            <label htmlFor="1"> {Cat?.title}</label>
          </div>
        )}
        <div className="mr-5 child:mb-2">
          {Cat?.SubCat?.map((item) => (
            <div
              key={item?.id}
              className="flex gap-3 items-center"
              onClick={() => {
                console.log(item);
                setSubCat(item);
                setSubSubCat(item.SubSubCat[0]);
                setData((i) => ({
                  ...i,
                  subCatID: item._id,
                  subSubCatID: item.SubSubCat[0]._id,
                }));
              }}
            >
              {/* <input
                type="radio"
                name={`subcat`}
                id={item?.id}
                // defaultChecked={Cat?.SubCat[0].id == item.id}
                /> */}

              {console.log(SubSubCat)}

              {i.subCatID == item.id ? (
                <TfiCheckBox />
              ) : (
                <RiCheckboxBlankLine />
              )}

              <label htmlFor={item?.id}>
                {item.title}
                {/* {item._id} */}
              </label>
            </div>
          ))}

          <div className="mr-5 child:mb-2">
            {SubCat?.SubSubCat?.map((item) => (
              <div
                key={item._id}
                className="flex gap-3 items-center"
                onClick={() => {
                  setSubSubCat(item);
                  setData((i) => ({ ...i, subSubCatID: item._id }));
                  console.log(i);
                }}
              >
                {/* {console.log(SubSubCat)} */}
                {i.subSubCatID == item._id ? (
                  <TfiCheckBox />
                ) : (
                  <RiCheckboxBlankLine />
                )}
                <label htmlFor={item._id}>
                  {item.title}
                  {/* {item._id} */}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button
        className="w-full  h-12 bg-blue-500 block  mt-5 rounded-[10px] text-white "
        onClick={() => {
          console.log(i.catID, i.subCatID, i.subSubCatID);

          if (i.catID && i.subCatID && i.subSubCatID) {
            // console.log(i.catID , i.subCatID , i.subSubCatID);
            toast.success(
              `دسته بندی با موفقیت انتخاب شد \n ${Cat?.title} > ${SubCat?.title} > ${SubSubCat?.title} `
            );

            setcat((i) => !i);
            console.log(i);
          } else {
            toast.error("دسته بندی را کامل انتخاب کنید");
            console.log(i);
          }
        }}
      >
        ذخیره اطلاعات
      </button>
    </div>
  );
};

export default CategoryPage;
