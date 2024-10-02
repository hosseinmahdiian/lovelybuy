import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { setStateClickHadneler, states } from "./satae";

const ChoseCities = ({ setData }) => {
  const [Province, setProvince] = useState(0);
  const [arrowProvince, setArrowProvince] = useState(false);
  const [arrowCity, setArrowCity] = useState(false);
  const [cities, setCities] = useState(0);
  const [city, setCity] = useState(0);

  useEffect(() => {
    setStateClickHadneler(Province.value, setCities);
  }, [Province]);

  return (
    <div className=" relative">
        
      <div
        onClick={() => {
          setArrowProvince(false);
          setArrowCity(false);
        }}
        className={`w-full h-full bg-black right-0 fixed top-0 z-10 bg-opacity-30 ${
          arrowCity || arrowProvince ? ` ` : `hidden`
        }  `}
      ></div>

      <div className="relative block text-left mb-5">
        <div
          onClick={() => setArrowProvince(!arrowProvince)}
          type="button"
          className="flex justify-between  items-center border rounded-[10px] outline-gray-300 h-12 w-full px-5"
        >
          {Province ? <p>{Province.label}</p> : <p>استان</p>}
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

      <div className={`relative  text-lef ${!!cities ? `block` : `hidden`} `}>
        <div
          onClick={() => !!cities?.[0] && setArrowCity(!arrowCity)}
          className=" flex justify-between  items-center border rounded-[10px] outline-gray-300 h-12 w-full px-5 "
        >
          {city ? (
            <p>{city.label}</p>
          ) : (
            <p className={`${!cities?.[0] ? `!text-gray-400` : `!text-black`}`}>
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
  );
};

export default ChoseCities;
