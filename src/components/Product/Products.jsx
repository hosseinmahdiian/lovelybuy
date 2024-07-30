import React, { useState } from "react";
import Product from "./Product";
import { productsData } from "../../constant/DataSets";

const Products = () => {
  const [data, setData] = useState(productsData);

  return (
    <div className="container mx-auto mt-5 ">
      <div className="2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid es:grid-cols-2 container">
        {data.map((item, index) => (
          <span key={index} className="mb-5">
            <Product item={item} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Products;
