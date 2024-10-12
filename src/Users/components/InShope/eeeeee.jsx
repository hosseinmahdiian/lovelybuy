import React, { useContext, useState } from "react";
import { reducerContext } from "../../constant/Context";
import { useQuery } from "react-query";
import { getCategory } from "../../services/Catgory";
import Loader from "../Loader";
import img from "../../../assets/images/photo13134369710.jpg";
import { FaBookmark } from "react-icons/fa";
import { PiPercentLight } from "react-icons/pi";
import { MdOutlineAccessTime } from "react-icons/md";
import { CgScreen } from "react-icons/cg";
import { IoLocationOutline } from "react-icons/io5";
import { BiPhoneCall } from "react-icons/bi";
import { infoShop } from "../../constant/DataSets";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Cats from "./Cat/Cats";
import SubCats from "./SubCat/SubCats";
import SubSubCats from "./SubSubCat/SubSubCats";

const EE = () => {
  const reducer = useContext(reducerContext);
  const [reduce, dispach] = reducer;
  const [selectCatgory, setSelectCatgory] = useState();
  const [arrow, setArrow] = useState(true);
  const [selectSubCatgory, setSelectSubCatgory] = useState();
  const [selectSubSubCatgory, setSelectSubSubCatgory] = useState();


  const [info, setinfo] = useState(infoShop);
  const [select, setSelect] = useState(info[0]);
  console.log(info);

  const { isLoading: isLoadCategory, data: catgorys } = useQuery(
    ["get-category"],
    getCategory
  );
  // con

  return isLoadCategory ? (
    <Loader />
  ) : (
    <div className={`  h-full  mx-auto relative   `}>
      <div className="bg-white  pb-3 mx-5">
        <Cats
          cat={catgorys?.data.data}
          selectCatgory={selectCatgory}
          setSelectCatgory={setSelectCatgory}
        />
        <SubCats
          subCat={catgorys?.data.data}
          selectCatgory={selectCatgory}
          setSelectSubCatgory={setSelectSubCatgory}
        />
        <SubSubCats
          subSubCat={catgorys?.data.data}
          selectCatgory={selectCatgory}
          selectSubCatgory={selectSubCatgory}
          setSelectSubSubCatgory={setSelectSubSubCatgory}
        />
      </div>
      <div className="relative max-w-lg mx-auto my-20">
        <div>
          <div className={` w-[calc(100%-40px)] mx-auto border-b pb-2 `}>
            <div
              onClick={() => {
                setArrow((item) => !item);
              }}
              className="mb-2"
            >
              <div className="flex items-center w-full gap-2 mt-2 ">
                <img src={img} alt="" className="rounded-full w-12 " />
                <div className="w-full">
                  <div className="flex items-center justify-between ">
                    <p className="text-xl">name</p>
                    <div className="flex gap-5 items-center">
                      <p className="text-[#FF8A00] bg-[#FFE2C0] rounded-xl px-2  text-sm">
                        8.3/10
                      </p>
                      <FaBookmark />
                    </div>
                  </div>
                  <p className="text-gray-500">item</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-2 mr-3">
                <PiPercentLight className="text-gray-400" />
                <p>تخقیف : 12 تا 24 درصد</p>
              </div>
              <div className="flex items-center gap-2  mt-1 mr-3 ">
                <MdOutlineAccessTime className="text-gray-400" />
                <p>ساعت کاری : 12 تا 14 -16 تا 18 </p>
              </div>
            </div>
            <div className={`${arrow ? `hidden` : ``} my-5 `}>
              <div className="flex mc gap-4 overflow-x-scroll    ">
                {info.map((item) => (
                  <div
                    key={item.id}
                    className={`w-fit  text-center 
                     flex-col justify-center text-lg
                     `}
                    onClick={() => {
                      setSelect(item);
                    }}
                  >
                    <div>{item.title}</div>
                    <span
                      className={`  w-14 h-1 bg-red-500 rounded-t-lg ${
                        item.name == select.name
                          ? `inline-block mb-2`
                          : `hidden`
                      }`}
                    ></span>
                  </div>
                ))}
              </div>

              <div
                className={` hidden justify-between items-center  ${
                  select.name == "conection" && `!flex`
                }`}
              >
                <div className=" ">
                  <CgScreen className=" w-fix mx-auto" />
                  <p className="text-gray-400 text-sm">سایت</p>
                </div>
                <div>
                  <IoLocationOutline className=" w-fix mx-auto" />
                  <p className="text-gray-400 text-sm">لوکیشن</p>
                </div>
                <div>
                  <BiPhoneCall className=" w-fix mx-auto" />
                  <p className="text-gray-400 text-sm">تماس</p>
                </div>
                <div>
                  <BiPhoneCall className=" w-fix mx-auto" />
                  <p className="text-gray-400 text-sm">واتساپ</p>
                </div>
                <div>
                  <CgScreen />
                  <p className="text-gray-400 text-sm">ایتا</p>
                </div>
                <div>
                  <CgScreen />
                  <p className="text-gray-400 text-sm">تلگرام</p>
                </div>
              </div>

              <div
                className={` hidden child:w-[calc(100%-20px)] child:border child:flex child:justify-between child:mx-auto child:p-4 child:rounded-[10px]  child:my-2   ${
                  select.name == "conection" && `!block`
                }`}
              >
                <div className="">
                  <CgScreen className="  " />
                  <p className="text-gray-400 text-sm">سایت</p>
                </div>
                <div>
                  <IoLocationOutline className="" />
                  <p className="text-gray-400 text-sm">لوکیشن</p>
                </div>
                <div>
                  <BiPhoneCall className="" />
                  <p className="text-gray-400 text-sm">تماس</p>
                </div>
                <div>
                  <BiPhoneCall className="" />
                  <p className="text-gray-400 text-sm">واتساپ</p>
                </div>
                <div>
                  <CgScreen />
                  <p className="text-gray-400 text-sm">ایتا</p>
                </div>
                <div>
                  <CgScreen />
                  <p className="text-gray-400 text-sm">تلگرام</p>
                </div>
              </div>

              <div
                className={` hidden justify-between items-center ${
                  select.name == "presentation" && `!flex`
                }`}
              >
                qwertghjk
              </div>
            </div>
          </div>
          <span
            className=" w-full  left-0 ring-0 mx-auto absolute -bottom-3 "
            onClick={() => {
              setArrow((item) => !item);
            }}
          >
            {arrow ? (
              <IoIosArrowDown className="mx-auto w-10 text-2xl bg-white text-red-500 z-50" />
            ) : (
              <IoIosArrowUp className="mx-auto w-10 text-2xl bg-white text-red-500" />
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EE;
