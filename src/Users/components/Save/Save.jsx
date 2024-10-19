import React, { useContext, useEffect, useState } from "react";
import PayProducts from "../Derawer/PayProducts";
import Basket from "../Derawer/Basket";
import Conter from "../Conter";
import SubCats from "./SubCats";
import Cats from "./Cats";
import SubSubCats from "./SubSubCats";
import { reducerContext } from "../../constant/Context";
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
import { getCurrentUser } from "../../auth/localStoreage";
import Derawer from "../Derawer/Derawer";

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

  const { isLoading: isLoadCategory, data: catgorys } = useQuery(
    ["get-category"],
    getCategory
  );

  const rerenderFN = () => {
    setReRender(reRender + 1);
  };

  useEffect(() => {
    if (!!localStorage.getItem("authUser")) {
      setAuthUser(JSON.parse(decrypt(localStorage.getItem("authUser"))));
      getCurrentUser("authUser");
    } else {
      navigate("/user/LoginUser");
    }
  }, []);

  useEffect(() => {
    if (!!authUser?._id) {
      getFavorite(authUser._id, setFavorite);
    }
  }, [authUser?._id, reRender]);

  useEffect(() => {
    setCount(favorite?.data.data.length);
  }, [favorite]);

  console.log(favorite?.data.data);
  console.log(catgorys?.data.data);

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
            <Cats
              favorite={favorite?.data.data}
              cat={catgorys?.data.data}
              selectCatgory={selectCatgory}
              setSelectCatgory={setSelectCatgory}
            />
            <SubCats
              favorite={favorite?.data.data}
              subCat={catgorys?.data.data}
              selectCatgory={selectCatgory}
              setSelectSubCatgory={setSelectSubCatgory}
            />
            <SubSubCats
              favorite={favorite?.data.data}
              subSubCat={catgorys?.data.data}
              selectCatgory={selectCatgory}
              selectSubCatgory={selectSubCatgory}
              setSelectSubSubCatgory={setSelectSubSubCatgory}
            />
            {!!count ? (
              <Products
                item={favorite}
                FN={rerenderFN}
                selectCatgory={selectCatgory}
                selectSubCatgory={selectSubCatgory}
                selectSubSubCatgory={selectSubSubCatgory}
              />
            ) : (
              <div className=" w-full mx-auto h-full bg-[#F5F5F5]">
                <div className=" mx-auto">
                  <p className="text-center font-bold text-red-500">
                    محصول ذخیره شده ای یافت نشد{" "}
                  </p>
                </div>
              </div>
            )}
            <Conter />

            <Derawer/>
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
