import React, { useState } from "react";
import Product from "./Product";
import { productsData } from "../../constant/DataSets";

const Products = () => {
  const [data, setData] = useState(productsData);

  return (
    <div className=" mx-auto  py-2.5  bg-[#F5F5F5]">
      <div className="container mx-auto ">
        <div className="2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid es:grid-cols-2 container">
          {data.map((item, index) => (
            <span key={index} className="mb-3 h-[calc(100%+64px)]">
              <Product item={item} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
