import React, { useContext, useEffect, useState } from "react";
import SubCats from "./SubCat/SubCats";
import Cats from "./Cat/Cats";
import SubSubCats from "./SubSubCat/SubSubCats";
import Products from "./Product/Products";
import { reducerContext } from "../constant/Context";
import Loader from "./Loader";
import Successsful from "./Derawer/Successsful";
import Conection from "./Conection";
import { useQuery } from "react-query";
import { getCategory } from "../services/Catgory";
import { useNavigate, useSearchParams } from "react-router-dom";
import Layout from "../layout/Layout";
import Derawer from "./Derawer/Derawer";
import { getCurrentAdmin } from "../../Admin/auth/localStoreage";
import { getCurrentUser, removeCurrentUser } from "../auth/localStoreage";
import { getFavorite } from "../services/Favorite";
import { checkToken } from "../services/CheckToken";

const HomeUser = () => {
  const reducer = useContext(reducerContext);
  const [reduce, dispach] = reducer;
  const [selectCatgory, setSelectCatgory] = useState();
  const [selectSubCatgory, setSelectSubCatgory] = useState();
  const [selectSubSubCatgory, setSelectSubSubCatgory] = useState();
  const [check, setCheck] = useState();
  const [authUser, setAuthUser] = useState();
  const navigate = useNavigate();

  const {
    isLoading: isLoadCategory,
    data: catgorys,
    error: errorCat,
    isError: isErrorCat,
  } = useQuery(["get-category"], getCategory);

  useEffect(() => {
    if (!!localStorage.getItem("authUser")) {
      setAuthUser(getCurrentUser("authUser"));
    }
  }, []);

  useEffect(() => {
    if (!!authUser?._id) {
      checkToken(authUser?._id, setCheck);
    }
  }, [authUser?._id]);

  useEffect(() => {
    if (check?.data.data == "Failed to authenticate token.") {
      removeCurrentUser();
      navigate("/user/LoginUser");
    }
  }, [check?.data]);

  return (
    <>
      {isLoadCategory ? (
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
            <Cats
              cat={catgorys?.data.data}
              selectCatgory={selectCatgory}
              setSelectCatgory={setSelectCatgory}
            />
            <SubCats
              subCat={catgorys?.data.data}
              selectCatgory={selectCatgory}
              setSelectSubCatgory={setSelectSubCatgory}
            />
            <SubSubCats
              subSubCat={catgorys?.data.data}
              selectCatgory={selectCatgory}
              selectSubCatgory={selectSubCatgory}
              setSelectSubSubCatgory={setSelectSubSubCatgory}
            />
            <div className="mt-1">
              <Products
                selectCatgory={selectCatgory}
                selectSubCatgory={selectSubCatgory}
                selectSubSubCatgory={selectSubSubCatgory}
              />
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
