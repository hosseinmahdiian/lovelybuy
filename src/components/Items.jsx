import React, { useState } from "react";
import Item from "./Item";
import { itemsData } from "../constant/DataSets";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settingsForitem } from "../constant/constant";

const Items = () => {
  const [data, setdata] = useState(itemsData);
  const [select, setSelect] = useState(data[0]);
  const clickhandler = (e) => {
    data.map((item) => {
      if (item.name == e.target.id) {
        setSelect(() => item);
      }
    });
  };
  return (
    <div
      className="container m-auto  border-black border-opacity-20 pb-3 "
      id="items"
    >
      {/* <Slider {...settingsForitem} className="   "> */}
      <div className="flex gap-2 overflow-hidden mr-6">
        {data.map((item, index) => (
          <span onClick={clickhandler} key={index}>
            <Item item={item} select={select} className=" mb-5" />
          </span>
        ))}
      </div>
      {/* </Slider> */}
    </div>
  );
};

export default Items;
