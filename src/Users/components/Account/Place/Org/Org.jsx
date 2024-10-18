import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ChoseCities from "./ChoseCities";
import { lacations } from "../../../../constant/DataSets";
import Loc from "./Loc";
import { CgClose } from "react-icons/cg";
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
        className="block px-5  my-5 mx-auto w-[calc(100%-20px)]  h-[50px] border rounded-[10px] "
      />
      <div className="max-h-60 overflow-y-scroll">
        {location?.map((i, index) => (
          <div
            key={index}
            className={`${
              i.selected ? `block` : `hidden`
            } flex items-center justify-between  border-b mx-5 h-20  `}
          >
            <div>
              <h1 className=" text-lg font-bold">{i.name}</h1>
              <p className="text-lg text-gray-500">{i?.duty}</p>
            </div>
            <CgClose className="text-red-500 font-bold text-xl" />
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mt-10 ">
        {location?.map((i, index) => (
          <Loc i={i} index={index} />
        ))}
      </div>

      
    </div>
  );
};

export default Org;
