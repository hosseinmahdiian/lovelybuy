import React, { useContext, useEffect, useState } from "react";
import Categorys from "./Category/Categorys";
import Slides from "./Slider/Slides";
import Items from "./Item/Items";
import Filters from "./Filter/Filters";
import Products from "./Product/Products";
import Conter from "./Conter";
import { reducerContext } from "../constant/Context";
import Account from "./Account/Login/Accont";
import Basket from "./Derawer/Basket";
import PayProducts from "./Derawer/PayProducts";
import Order from "./order";
import Loader from "./Loader";
import Login from "./Account/Login/Login";
import Successsful from "./Derawer/Successsful";
import Conection from "./Conection";
import { useQuery } from "react-query";
import { getCategory } from "../services/Catgory";
import Info from "./Info/Info";
import { useNavigate, useSearchParams } from "react-router-dom";
import Layout from "../layout/Layout";
import Slide from "./Slider/slide";
import { checkTokenExamination } from "../auth/Token-Service";
import { getUser } from "../services/User";
import { decrypt } from "../auth/crypto";
import { getFavorite } from "../services/Favorite";
import { checkToten } from "../services/Products";
import Derawer from "./Derawer/Derawer";

const HomeUser = () => {
  const reducer = useContext(reducerContext);
  const [reduce, dispach] = reducer;
  const [selectCatgory, setSelectCatgory] = useState();
  const [selectSubCatgory, setSelectSubCatgory] = useState();
  const [selectSubSubCatgory, setSelectSubSubCatgory] = useState();
  const [item, setItem] = useState();
  const [m, setM] = useState();
  const navigate = useNavigate();

  const {
    isLoading: isLoadCategory,
    data: slid,
    error: errorCat,
    isError: isErrorCat,
  } = useQuery(["get-category"], getCategory);

  const {
    isLoading: isLoadCheck,
    data: check,
    error: errorCheck,
    isError: isErrorCheck,
  } = useQuery(["check"], checkToten);

  // useEffect(() => {
  //   if (!!localStorage.getItem("authUser")) {
  //     checkTokenExamination(check?.data.data, "user", navigate);
  //   }
  // }, [check]);

  return (
    <>
      {isLoadCategory || isLoadCheck ? (
        <Loader />
      ) : (
        <Layout>
          <div className="   ">
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
            {/* <Order /> */}
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
            <div className="mt-1">
              <Products />
            </div>

            <Derawer />

            <div
              className={`
              ${reduce.successful ? `block` : `hidden`}
              absolute  right-0 left-0  top-1/4 w-[calc(100%-40px)] max-w-[600px] mx-auto   z-[35]`}
            >
              <Successsful />
            </div>
            <div
              className={`
          ${reduce.Conection ? `block` : `hidden`}
          absolute  h-full w-full  top-0   z-[35] `}
            >
              <Conection />
            </div>
          </div>
        </Layout>
      )}
    </>
  );
};

export default HomeUser;
