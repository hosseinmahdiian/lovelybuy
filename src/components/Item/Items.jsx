import React, { useState } from "react";
import Item from "./Item";
import { itemsData } from "../../constant/DataSets";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { settingsForitem } from "../../constant/constant";

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
      className=" w-full    mx-auto border-black border-opacity-20 pb-3 "
      id="items"
    >
      {/* <Slider {...settingsForitem} className="   "> */}
      <div className=" overflow-x-scroll delivery">
        <div className="flex gap-2 container mx-auto  pr-10">
          {data.map((item, index) => (
            <span onClick={clickhandler} key={index}>
              <Item item={item} select={select} className=" mb-5" />
            </span>
          ))}
        </div>
      </div>
      {/* </Slider> */}
    </div>
  );
};

export default Items;
