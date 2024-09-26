import React, { useContext, useEffect, useState } from "react";
import Product from "./Product";
import { productsData } from "../../constant/DataSets";
import { useQuery } from "react-query";
import { getProducts } from "../../services/Products";
import Loader from "../Loader";
import { reducerContext } from "../../constant/Context";
import { useNavigate, useSearchParams } from "react-router-dom";
import { decrypt } from "../../constant/auth/crypto";
import { getFavorite } from "../../services/Favorite";

const Products = () => {
  const reducer = useContext(reducerContext);
  const [reduce, dispach] = reducer;
const navigate = useNavigate();

  const { isLoading, data } = useQuery(["get-products"], getProducts);
// console.log(data);

  // useEffect(() => {
  //   if (!!localStorage.getItem("authUser")) {
  //     setAuthUser(JSON.parse(decrypt(localStorage.getItem("authUser"))));
  //   } else {
  //     navigate("/LoginUser");
  //   }
  // }, []);



  return (
    !isLoading && (
      <>
        <div className=" mx-auto  py-2.5  pb-20 bg-[#F5F5F5]">
          <div className="container w-full mx-auto ">
            <div className="2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid es:grid-cols-2  mx-auto">
              {data?.data.data?.map((item, index) => (
                <span key={index} className="mb-3  ">
                  <Product item={item}  />
                </span>
              ))}
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default Products;
