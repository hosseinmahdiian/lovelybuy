import React, { useContext, useState } from "react";
import Slides from "../Slider/Slides";
import Categorys from "../Category/Categorys";
import Filters from "../Filter/Filters";
import { reducerContext } from "../../constant/Context";
import { useQuery } from "react-query";
import { getCategory } from "../../services/Catgory";
import Loader from "../Loader";
import img from "../../assets/images/photo13134369710.jpg";
import { FaBookmark, FaPercentage } from "react-icons/fa";
import { PiPercentLight } from "react-icons/pi";
import { MdOutlineAccessTime } from "react-icons/md";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { CgScreen } from "react-icons/cg";
import { IoLocationOutline } from "react-icons/io5";
import { BiPhoneCall } from "react-icons/bi";
import { DeliveryData, infoShop } from "../../constant/DataSets";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const InPerson = () => {
  const reducer = useContext(reducerContext);
  const [reduce, dispach] = reducer;
  const [selectCatgory, setSelectCatgory] = useState();
  const [arrow, setArrow] = useState(false);
  const [selectSubCatgory, setSelectSubCatgory] = useState();

  const [info, setinfo] = useState(infoShop);
  const [select, setSelect] = useState(info[0]);
  console.log(info);

  const { isLoading: isLoadCategory, data: slid } = useQuery(
    ["get-category"],
    getCategory
  );
  // con
  console.log(reduce.InPerson);

  return isLoadCategory ? (
    <Loader />
  ) : (
    <div className={`  h-full  mx-auto relative   `}>
      <div className="bg-white  pb-3 mx-5">
        <Slides
          slid={slid?.data.data}
          select={selectCatgory}
          setSelect={setSelectCatgory}
        />
        <Categorys
          sub={slid?.data.data}
          selectCatgory={selectCatgory}
          setSelectSubCatgory={setSelectSubCatgory}
        />
        <Filters
          sub={slid?.data.data}
          selectCatgory={selectCatgory}
          selectSubCatgory={selectSubCatgory}
        />
      </div>
      <div className="relative">
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
                    <p className="text-xl">فروشگاه زرین </p>
                    <div className="flex gap-5 items-center">
                      <p className="text-[#FF8A00] bg-[#FFE2C0] rounded-xl px-2  text-sm">
                        8.3/10
                      </p>
                      <FaBookmark />
                    </div>
                  </div>
                  <p className="text-gray-400">کیف و کفش زنانه</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-2 mr-3">
                <FaPercentage className="text-gray-400" />
                <p>تخقیف : 12 تا 24 درصد</p>
              </div>
              <div className="flex items-center gap-2  mt-1 mr-3 ">
                <MdOutlineAccessTime className="text-gray-400" />
                <p>ساعت کاری : 12 تا 14 -16 تا 18 </p>
              </div>
            </div>
            <div className={`${arrow ? `hidden` : ``} my-5 `}>
              <div className="flex  gap-4 overflow-x-scroll    ">
                {info.map((item) => (
                  <div
                    key={item.id}
                    className={`w-14  text-center 
                     flex-col justify-center text-lg
                     `}
                    onClick={() => {
                      setSelect(item);
                    }}
                  >
                    <div className="text-nowrap">{item.title}</div>
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
                className={` hidden justify-between items-center  mt-2 ${
                  select.name == "conection" && `!flex`
                }`}
              >
                <div className=" ">
                  <CgScreen className=" w-fix mx-auto text-3xl" />
                  <p className="text-gray-400 text-sm mt-2">سایت</p>
                </div>
                <div>
                  <IoLocationOutline className=" w-fix mx-auto  text-3xl" />
                  <p className="text-gray-400 text-sm mt-2">لوکیشن</p>
                </div>
                <div>
                  <BiPhoneCall className=" w-fix mx-auto  text-3xl" />
                  <p className="text-gray-400 text-sm mt-2">تماس</p>
                </div>
                <div>
                  <BiPhoneCall className=" w-fix mx-auto  text-3xl" />
                  <p className="text-gray-400 text-sm mt-2">واتساپ</p>
                </div>
                <div>
                  <CgScreen />
                  <p className="text-gray-400 text-sm mt-2">ایتا</p>
                </div>
                <div>
                  <CgScreen />
                  <p className="text-gray-400 text-sm mt-2">تلگرام</p>
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

export default InPerson;
