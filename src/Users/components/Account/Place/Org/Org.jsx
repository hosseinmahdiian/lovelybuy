import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ChoseCities from "./ChoseCities";
import { lacations } from "../../../../constant/DataSets";
import { LuCheckCircle } from "react-icons/lu";
import { FaRegCircle } from "react-icons/fa";
const Org = () => {
  const navigate = useNavigate();
  const [cityAndProvince, setCityAndProvince] = useState();
  const [cityAndProvinceModal, setCityAndProvinceModal] = useState(true);
  const [location, setLocation] = useState();
  
  const sortBySelected = (array) => {
    const trueItems = array.filter((item) => item.selected == true);
    const falseItems = array.filter((item) => item.selected == false);
    return [...trueItems, ...falseItems];
  };

  useEffect(() => {
    setLocation(sortBySelected(lacations));
  }, []);
  console.log(lacations, location);

  return (
    <div>
      <div className="flex justify-between w-full px-5 ">
        <div className=" text-lg  w-full  child:inline-block">
          {cityAndProvince?.province ? (
            <p className="">{cityAndProvince?.province}</p>
          ) : (
            <p>استان</p>
          )}{" "}
          <span className="px-2">/</span>
          {cityAndProvince?.city ? (
            <p>{cityAndProvince?.city}</p>
          ) : (
            <p> شهر </p>
          )}{" "}
        </div>
        <p
          onClick={() => setCityAndProvinceModal((i) => !i)}
          className="text-blue-500 font-bold"
        >
          ویرایش
        </p>
      </div>
      <div
        className={`${
          cityAndProvinceModal ? `fixed` : `hidden`
        }  w-full h-full bg-black right-0  top-0 z-10 bg-opacity-30 px-5`}
        onClick={() => setCityAndProvinceModal((i) => !i)}
      ></div>
      {cityAndProvinceModal && (
        <ChoseCities
          setData={setCityAndProvince}
          setModal={setCityAndProvinceModal}
        />
      )}

      <input
        autoFocus
        type="text"
        placeholder="جستجوی محل تحویل"
        className="inline-block px-5  my-5  w-[calc(100%-20px)]  h-[50px] border rounded-[10px] "
      />

      <div className="flex flex-wrap gap-2  ">
        {location?.map((i, index) => (
          <span
            key={index}
            className={` ${
              i.selected
                ? `text-green-600 child:bg-green-300 `
                : `text-gray-600 child:bg-gray-300 `
            }`}
          >
            <div className="flex gap-2 px-2 w-fit rounded-full items-center">
              {i.selected ? <LuCheckCircle /> : <FaRegCircle />}
              <p className="">{i.name}</p>
            </div>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Org;
