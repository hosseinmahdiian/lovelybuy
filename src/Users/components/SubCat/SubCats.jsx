import React, { useEffect, useRef, useState } from "react";
import SubCat from "./SubCat";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { TbSquareRoundedCheckFilled } from "react-icons/tb";

const SubCats = ({ subCat, selectCatgory, setSelectSubCatgory }) => {
  const [data, setData] = useState();
  const [select, setSelect] = useState(data);
  const [endScroll, setEndScroll] = useState(0);
  const scroll = useRef(null);

  // console.log(selectCatgory);

  useEffect(() => {
    subCat.map((item, indxe) => {
      if (item.id === selectCatgory?.id) {
        setData(item.SubCat);
        setSelect({ _id: selectCatgory._id, title: "allSubCat" });
        setSelectSubCatgory({
          _id: selectCatgory._id,
          title: "allSubCat",
        });
        // console.log(item)
      }
    });
  }, [selectCatgory]);

  const clickhandler = (e) => {
    // console.log(e.target.id);
    data?.map((item) => {
      if (item.id == e.target.id) {
        // console.log(item.id == e.target.id);

        setSelect(item);
        setSelectSubCatgory(item);
      }
      if (selectCatgory._id == e.target.id) {
        setSelect({ _id: selectCatgory._id, title: "allSubCat" });
        setSelectSubCatgory({
          _id: selectCatgory._id,
          title: "allSubCat",
        });
      }
    });
  };

  const scrollR = () => {
    if (scroll.current) {
      scroll.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };
  const scrollL = () => {
    if (scroll.current) {
      scroll.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };
  const scrollHandler = (e) => {
    setEndScroll(
      Math.round(
        (e.target.scrollLeft / (e.target.scrollWidth - e.target.clientWidth)) *
          -100
      )
    );
  };
  // console.log(endScroll);

  return (
    <div className="relative  mx-auto container boeder my-8    ">
      <div className="   relative  w-full  ">
        <div
          className="  lg:w-[calc(100%-80px)] mx-auto overflow-x-scroll   "
          onScroll={scrollHandler}
          ref={scroll}
        >
          <span
            className={`absolute  right-0  items-center lg:flex hidden border rounded-md h-24  child:hover:text-gray-600 hover:border-black
              ${endScroll === 0 && `!hidden`}
               `}
          >
            <IoIosArrowForward
              className={`align-middle  z-10  text-3xl    text-gray-400 hover:text-gray-600 `}
              onClick={scrollL}
            />
          </span>
          <span
            className={`absolute  left-0  items-center lg:flex hidden border rounded-md h-24  child:hover:text-gray-600 hover:border-black  ${
              endScroll === 100 && `!hidden`
            }`}
          >
            <IoIosArrowBack
              className={`align-middle  z-10  text-3xl    text-gray-400 hover:text-gray-600
                
              `}
              onClick={scrollR}
            />
          </span>

          <div className="flex  gap-2 ">
            <span>
              <div
                className={`items-center   relative  md:w-[100px]  w-[80px]`}
                id={selectCatgory?._id}
                onClick={clickhandler}
              >
                <img
                  src={selectCatgory?.image}
                  className={`md:w-[100px] md:h-[100px] w-[80px] h-[80px] border-2 rounded-3xl ${
                    select?._id == selectCatgory?._id
                      ? `border-black`
                      : ` border-black border-opacity-20`
                  } `}
                  id={selectCatgory?._id}
                />

                <span
                  className={`absolute   md:top-[72px] top-[52px] left-3  ${
                    select?._id == selectCatgory?._id
                      ? `inline-block`
                      : `hidden`
                  }  `}
                >
                  <TbSquareRoundedCheckFilled />
                </span>
                <span
                  id={selectCatgory?.id}
                  className="w-full font-IrSans  mt-2 text-[12px] text-center rounded-xl items-center inline-block    "
                >
                  {selectCatgory?.title}
                </span>
              </div>
            </span>

            {data?.map((item, index) => (
              <span key={index} onClick={clickhandler} className="    ">
                <SubCat item={item} select={select} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubCats;
