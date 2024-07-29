import React, { useState } from "react";
import Slider from "react-slick";
import Slide from "./slide";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slideDadta } from "../../constant/DataSets";
import { settingsForSlide } from "../../constant/constant";

function Slides() {
  const [slid, setSlid] = useState(slideDadta);
  const [select, setSelect] = useState(slid[0]);

  const clickhandler = (e) => {
    slid.map((item) => {
      if (item.name == e.target.id) {
        setSelect(item);
      }
    });
  };

  return (
    <>
      <div className="container mx-auto  lg:w-[1200px]  ">
        <Slider {...settingsForSlide}>
          {slid.map(
            (item) =>
              !!item.name && (
                <span key={item.name} name={item.name} onClick={clickhandler}>
                  <Slide item={item} select={select} />
                </span>
              )
          )}
        </Slider>
      </div>
    </>
  );
}

export default Slides;
