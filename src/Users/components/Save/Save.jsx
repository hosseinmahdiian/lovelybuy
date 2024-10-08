import React, { useContext, useEffect, useState } from "react";
import PayProducts from "../Derawer/PayProducts";
import Basket from "../Derawer/Basket";
import Conter from "../Conter";
import Categorys from "../Category/Categorys";
import Slides from "../Slider/Slides";
import { reducerContext } from "../../constant/Context";
import Login from "../Account/Login/Login";
import Successsful from "../Derawer/Successsful";
import Conection from "../Conection";
import { NavLink, useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { useQuery } from "react-query";
import { getCategory } from "../../services/Catgory";
import Loader from "../Loader";

import Layout from "../../layout/Layout";
import { decrypt } from "../../auth/crypto";
import Products from "./Products";
import { getFavorite } from "../../services/Favorite";
import Filters from "../Filter/Filters";
// import { getFavorite } from "../../services/Favorite";

const Save = () => {
  const reducer = useContext(reducerContext);
  const [reduce, dispach] = reducer;
  const [selectCatgory, setSelectCatgory] = useState();
  const [selectSubCatgory, setSelectSubCatgory] = useState();
  const [selectSubSubCatgory, setSelectSubSubCatgory] = useState();
  const [favorite, setFavorite] = useState();
  const [authUser, setAuthUser] = useState();
  const [count, setCount] = useState();
  const [reRender, setReRender] = useState(1);
  const navigate = useNavigate();

  const { isLoading: isLoadCategory, data: slid } = useQuery(
    ["get-category"],
    getCategory
  );

  let i = false;
  const rerenderFN = () => {
    setReRender(reRender + 1);
  };

  useEffect(() => {
    if (!!localStorage.getItem("authUser")) {
      setAuthUser(JSON.parse(decrypt(localStorage.getItem("authUser"))));
    } else {
      navigate("/user/LoginUser");
    }
  }, []);

  useEffect(() => {
    // console.log(i);
    if (authUser?._id) {
      getFavorite(authUser._id, setFavorite);
    }
  }, [authUser?._id, reRender]);

  useEffect(() => {
    setCount(favorite?.data.data.length);
  }, [favorite]);
  // console.log(count)

  return (
    <>
      {isLoadCategory ? (
        <Loader />
      ) : (
        <Layout>
          <div className=" h-full mt-5 ">
            <div
              onClick={() => {
                dispach({ type: "basket" });
              }}
              className={`w-full h-full bg-black fixed top-0 z-10 bg-opacity-30 ${
                reduce.basket ? ` ` : `hidden`
              }  `}
            ></div>
            <div
              onClick={() => {
                dispach({ type: "pay" });
              }}
              className={`w-full h-full bg-black fixed top-0 z-20 bg-opacity-30 ${
                reduce.pay ? ` ` : `hidden`
              }  `}
            ></div>
            <div className="mt-5 container mx-auto mb-5 pr-2">
              <NavLink to={-1} className="flex    gap-2  ">
                <IoIosArrowForward className=" mt-1 lg:mt-0 lg:text-2xl" />
                <span className="text-red-500 font-bold lg:text-xl ">
                  ذخیره شده
                </span>
              </NavLink>
            </div>

            <Slides
              slid={slid?.data.data}
              select={selectCatgory}
              setSelectCatgory={setSelectCatgory}
            />
            <Categorys
              sub={slid?.data.data}
              selectCatgory={selectCatgory}
              setSelectSubCatgory={setSelectSubCatgory}
            />
            <Filters
              sub={slid?.data.data}
              selectCatgory={selectCatgory}
              selectSubCatgory={selectSubCatgory}
              setSelectSubSubCatgory={setSelectSubSubCatgory}
            />
            {!!count ? (
              <Products item={favorite} FN={rerenderFN} />
            ) : (
              <p className="text-center font-bold text-red-500">
                محصول ذخیره شده ای یافت نشد{" "}
              </p>
            )}

            <Conter />
            {/* Basket & pay */}
            <div
              className={` ${
                !!reduce.basket
                  ? reduce.pay
                    ? ` sm:left-96 top-0 !z-[11] `
                    : ` sm:left-0 top-0  `
                  : `sm:-left-[8000px] -bottom-[8000px] `
              } fixed  sm:w-[400px] es:w-full  z-[16] h-full transition-all  ease-in-out border-r`}
            >
              <Basket />
            </div>
            <div
              className={` ${
                reduce.pay
                  ? ` sm:left-0 top-0  `
                  : `sm:-left-[8000px] -bottom-[8000px] `
              } fixed  md:w-[400px] es:w-full  z-20 h-full transition-all  ease-in-out `}
            >
              <PayProducts />
            </div>
            <div
              className={`
          ${reduce.successful ? `block` : `hidden`}
          absolute  right-0 left-0  top-1/4 w-[calc(100%-40px)] max-w-[600px] mx-auto   z-[35]`}
            >
              <Successsful dispach={dispach} />
            </div>
            <div
              className={`
          ${reduce.Conection ? `block` : `hidden`}
          absolute  right-0 left-0 mx-auto  top-1/4  w-full   z-[35] `}
            >
              <Conection dispach={dispach} />
            </div>
          </div>
        </Layout>
      )}
    </>
  );
};

export default Save;
