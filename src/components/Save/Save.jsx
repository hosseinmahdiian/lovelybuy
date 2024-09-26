import React, { useContext, useEffect, useState } from "react";
import PayProducts from "../Basket/PayProducts";
import Basket from "../Basket/Basket";
import Conter from "../Conter";
import Categorys from "../Category/Categorys";
import Slides from "../Slider/Slides";
import { reducerContext } from "../../constant/Context";
import Login from "../Account/Login/Login";
import Successsful from "../Basket/Successsful";
import Conection from "../Conection";
import { NavLink, useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { useQuery } from "react-query";
import { getCategory } from "../../services/Catgory";
import Loader from "../Loader";

import Layout from "../../layout/Layout";
import { decrypt } from "../../constant/auth/crypto";
import Products from "./Products";
import { getFavorite } from "../../services/Favorite";
import Filters from "../Filter/Filters";
// import { getFavorite } from "../../services/Favorite";

const Save = () => {
  const reducer = useContext(reducerContext);
  const [reduce, dispach] = reducer;
  const [empty, setEmpty] = useState(true);
  const [favoriteProduct, setFavoriteProduct] = useState();
  const [selectCatgory, setSelectCatgory] = useState();
  const [selectSubCatgory, setSelectSubCatgory] = useState();
  const [selectSubSubCatgory, setSelectSubSubCatgory] = useState();
  const [item, setItem] = useState("");
  
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!!localStorage.getItem("authUser")) {
      setAuthUser(JSON.parse(decrypt(localStorage.getItem("authUser"))));
    } else {
      navigate("/LoginUser");
    }
  }, []);
  
  const { isLoading: isLoadCategory, data: slid } = useQuery(
    ["get-category"],
    getCategory
  );
  const [favorite, setFavorite] = useState();
  
  const [authUser, setAuthUser] = useState();
  useEffect(() => {
    if (!!localStorage.getItem("authUser")) {
      setAuthUser(JSON.parse(decrypt(localStorage.getItem("authUser"))));
    } else {
      navigate("/LoginUser");
    }
  }, []);

  useEffect(() => {
    if (authUser?._id) {
      getFavorite(authUser._id, setFavorite);
    }
  }, [authUser?._id]);


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
              <NavLink to="/" className="flex    gap-2  ">
                <IoIosArrowForward className=" mt-1 lg:mt-0 lg:text-2xl" />
                <span className="text-red-500 font-bold lg:text-xl ">
                  ذخیره شده
                </span>
              </NavLink>
            </div>

            <Slides
              slid={slid?.data.data}
              select={selectCatgory}
              setSelect={setSelectCatgory}
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
            {favorite?.data.success ? (
              <Products item={favorite}  />
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
