import React, { useState } from "react";
import Category from "./Category";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { settingsForCategory } from "../../constant/constant";
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
    <div className="container mx-auto ">
      {/* <Slider
        {...settingsForCategory}
        className=" container mx-auto  lg:w-[500px]  "
      > */}
      <div className="flex gap-2 overflow-hidden mr-5 ">
        {data.map((item, index) => (
          <span key={index} onClick={clickhandler}>
            <Category item={item} select={select} />
          </span>
        ))}
      </div>
      {/* </Slider> */}
    </div>
  );
};

export default Categorys;
