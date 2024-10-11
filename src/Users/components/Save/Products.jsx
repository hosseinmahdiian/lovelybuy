import React, { useContext, useEffect, useState } from "react";
import { reducerContext } from "../../constant/Context";
import Product from "../Product/Product";

const Products = ({
  item,
  FN,
  selectSubCatgory,
  selectCatgory,
  selectSubSubCatgory,
}) => {
  const reducer = useContext(reducerContext);
  const [reduce, dispach] = reducer;
  // console.log(item?.data.data);
  const [products, setProducts] = useState();

  useEffect(() => {
    setProducts(item?.data.data);
    if (selectCatgory?.title != "allCat") {
      let temp = item?.data.data?.filter(
        (item) => item.catID == selectCatgory?._id
      );
      setProducts(temp);
    }
    if (selectSubCatgory?.title != "allSubCat") {
      let temp = item?.data.data?.filter(
        (item) => item.subCatID == selectSubCatgory?._id
      );
      setProducts(temp);
    }
    if (selectSubSubCatgory?.title != "allSubSubCat") {
      let temp = item?.data.data?.filter(
        (item) => item.subSubCatID == selectSubSubCatgory?._id
      );
      setProducts(temp);
    }
  }, [selectCatgory, selectSubCatgory, selectSubSubCatgory, item]);

  return (
    <>
      <div className=" mx-auto  py-2.5  pb-20 bg-[#F5F5F5]">
        <div className="container w-full mx-auto ">
          <div className="2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid es:grid-cols-2  mx-auto">
            {products?.map((item, index) => (
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
