import React, { useContext, useEffect, useState } from "react";
import { reducerContext } from "../../constant/Context";
import { useQuery } from "react-query";
import { decrypt } from "../../auth/crypto";
import { getFavorite } from "../../services/Favorite";
import Product from "../Product/Product";
import Loader from "../Loader";

const Products = ({ item, FN }) => {
  const reducer = useContext(reducerContext);
  const [reduce, dispach] = reducer;
  // console.log(item?.data.data);

  return (
    <>
      <div className=" mx-auto  py-2.5  pb-20 bg-[#F5F5F5]">
        <div className="container w-full mx-auto ">
          <div className="2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid es:grid-cols-2  mx-auto">
            {item?.data.data?.map((item, index) => (
              <span key={index} className="mb-3  ">
                <Product item={item?.Product[0]} FN={FN} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
