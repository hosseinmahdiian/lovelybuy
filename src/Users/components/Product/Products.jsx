import React, { useContext, useEffect, useState } from "react";
import Product from "./Product";
import { useQuery } from "react-query";
import { getProducts } from "../../services/Products";
import { reducerContext } from "../../constant/Context";
import { useNavigate, useSearchParams } from "react-router-dom";

const Products = ({ selectSubCatgory, selectCatgory, selectSubSubCatgory }) => {
  const reducer = useContext(reducerContext);
  const [reduce, dispach] = reducer;
  const navigate = useNavigate();

  const { isLoading, data } = useQuery(["get-products"], getProducts);
  const [products, setProducts] = useState();

  useEffect(() => {
    setProducts(data?.data.data);
    if (selectCatgory?.title != "allCat") {
      let temp = data?.data.data?.filter(
        (item) => item.catID == selectCatgory?._id
      );
      setProducts(temp);
    }
    if (selectSubCatgory?.title != "allSubCat") {
      let temp = data?.data.data?.filter(
        (item) => item.subCatID == selectSubCatgory?._id
      );
      setProducts(temp);
    }
    if (selectSubSubCatgory?.title != "allSubSubCat") {
      let temp = data?.data.data?.filter(
        (item) => item.subSubCatID == selectSubSubCatgory?._id
      );
      setProducts(temp);
    }
  }, [selectSubCatgory, selectSubSubCatgory, selectCatgory, data]);

  return (
    !isLoading && (
      <>
        <div className=" mx-auto  py-2.5  pb-20 bg-[#F5F5F5]">
          {products?.length > 0 ? (
            <div className="container w-full mx-auto ">
              <div className="2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid es:grid-cols-2  mx-auto">
                {products?.map((item, index) => (
                  <span key={index} className="mb-3  ">
                    <Product item={item} />
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <div className="container w-full mx-auto h-[calc(100vh-540px)]">
              <div className="  mx-auto">
                <p className="text-center w-full  font-bold text-red-500  ">
                  محصول ثبت شده ای یافت نشد
                </p>
              </div>
            </div>
          )}
        </div>
      </>
    )
  );
};

export default Products;
