import React, { useState } from "react";
import Category from "./Category";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import { settingsForCategory } from "../../constant/constant";
import { CategoryData } from "../../constant/DataSets";

const Categorys = () => {
  const [data, setData] = useState(CategoryData);
  const [select, setSelect] = useState(data[0]);

  const clickhandler = (e) => {
    data.map((item) => {
      if (item.name == e.target.id) {
        setSelect(() => item);
        // console.log(item.name,select.name);
      }
    });
  };
  return (
    <div className=" overflow-x-scroll delivery">
      <div className="flex gap-2    h-[140px] container mx-auto  px-8 ">
        {data.map((item, index) => (
          <span key={index} onClick={clickhandler} className="    ">
            <Category item={item} select={select} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Categorys;
