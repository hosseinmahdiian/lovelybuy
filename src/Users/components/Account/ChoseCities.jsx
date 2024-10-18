import React, { useEffect, useState } from "react";
import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowUp,
} from "react-icons/io";
import { setStateClickHadneler, states } from "../../constant/satae";
import { IoClose } from "react-icons/io5";

const ChoseCities = ({ setData, setModal }) => {
  const [Province, setProvince] = useState(0);
  const [arrowProvince, setArrowProvince] = useState(false);
  const [arrowCity, setArrowCity] = useState(false);
  const [cities, setCities] = useState(0);
  const [city, setCity] = useState(0);

  useEffect(() => {
    setStateClickHadneler(Province.value, setCities);
  }, [Province]);

  return (
    <div className="px-5 w-full top-1/4  fixed z-50  mx-auto  right-0 left-0">
      <div className=" max-w-2xl p-5  bg-white rounded-xl border  ">
        <div
          className="gap-3 flex mb-4 items-center"
          onClick={() => setModal((i) => !i)}
        >
          <IoIosArrowForward className="text-xl" />
          <h1 className=" text-lg text-red-500 font-bold  w-full  child:inline-block">
            {Province ? <p className="">{Province.label}</p> : <p>استان</p>}{" "}
            <span className="px-2">/</span>
            {city ? <p>{city.label}</p> : <p> شهر </p>}
          </h1>
        </div>
        <div className="z-10">
          <div
            onClick={() => {
              setArrowProvince(false);
              setArrowCity(false);
            }}
            className={`w-full h-full bg-black right-0 absolute top-0 z-10 bg-opacity-20 ${
              arrowCity || arrowProvince ? ` ` : `hidden`
            }  `}
          ></div>

          <div className="relative block text-left mb-5 ">
            <div
              onClick={() => setArrowProvince(!arrowProvince)}
              type="button"
              className="flex justify-between  items-center border rounded-[10px] bg-white outline-gray-300 h-12 w-full px-5"
            >
              {Province ? <p className="">{Province.label}</p> : <p>استان</p>}
              {arrowProvince ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </div>

            <div
              dir=""
              className={`${
                arrowProvince ? `absolute` : `hidden`
              } w-full right-0 z-10 mt-2  origin-top-right rounded-md bg-white shadow-sm border focus:outline-none py-1 h-[200px] overflow-y-scroll`}
            >
              {states.map((i, index) => (
                <div
                  onClick={() => {
                    setProvince({ value: i.value, label: i.label });
                    setArrowProvince(false);
                    setCity();
                    setData((data) => ({ ...data, province: i.label }));
                  }}
                  className="block px-4 py-2 hover:bg-gray-100 text-right dark:hover:bg-gray-600 dark:hover:text-white"
                  key={index}
                  value={i.value}
                >
                  {i.label}
                </div>
              ))}
            </div>
          </div>

          <div
            className={`relative  text-lef ${!!cities ? `block` : `hidden`} `}
          >
            <div
              onClick={() => !!cities?.[0] && setArrowCity(!arrowCity)}
              className=" flex justify-between  items-center border rounded-[10px] bg-white outline-gray-300 h-12 w-full px-5 "
            >
              {city ? (
                <p>{city.label}</p>
              ) : (
                <p
                  className={`${
                    !cities?.[0] ? `!text-gray-400` : `!text-black`
                  }`}
                >
                  شهر
                </p>
              )}
              {arrowCity ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </div>

            <div
              className={`${arrowCity ? `absolute` : `hidden`}  
          right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-sm  border focus:outline-none py-1 max-h-[150px] overflow-y-scroll`}
            >
              {!!cities &&
                cities?.map((i, index) => (
                  <div
                    onClick={() => {
                      setCity({ value: i.value, label: i.label });
                      setArrowCity(false);
                      setData((data) => ({ ...data, city: i.label }));
                       setModal((i) => !i);
                    }}
                    className="block px-4 py-2 hover:bg-gray-100 text-right dark:hover:bg-gray-600 dark:hover:text-white"
                    key={index}
                    value={i.value}
                  >
                    {i.label}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoseCities;
