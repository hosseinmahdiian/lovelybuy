import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ChoseCities from "./ChoseCities";
import { lacations } from "../../../../constant/DataSets";
import Loc from "./Loc";
import { CgClose } from "react-icons/cg";
import AddModal from "./AddModal";
import Items from "./Items";
import DelModal from "./DelModal";
const Org = () => {
  const navigate = useNavigate();
  const [cityAndProvinceModal, setCityAndProvinceModal] = useState(true);
  const [cityAndProvince, setCityAndProvince] = useState();
  const [addModal, setAddModal] = useState(false);
  const [add, setAdd] = useState();
  const [delModal, setDelModal] = useState(false);
  const [del, setDel] = useState();
  const [location, setLocation] = useState();

  const sortBySelected = (array) => {
    const trueItems = array.filter((item) => item.selected == true);
    const falseItems = array.filter((item) => item.selected == false);
    return [...trueItems, ...falseItems];
  };

  useEffect(() => {
    if (cityAndProvinceModal || addModal || delModal) {
      document.documentElement.classList.add("overflow-y-hidden");
    } else {
      document.documentElement.classList.remove("overflow-y-hidden");
    }
  }, [cityAndProvinceModal, addModal]);

  useEffect(() => {
    setLocation(sortBySelected(lacations));
  }, [location]);

  return (
    <div>
      <div
        className={`${
          cityAndProvinceModal || addModal || delModal ? `fixed` : `hidden`
        }  w-full h-full bg-black right-0  top-0 z-10 bg-opacity-30 px-5`}
        onClick={() => {
          cityAndProvinceModal && setCityAndProvinceModal((i) => !i);
          delModal && setDelModal((i) => !i);
          addModal && setAddModal((i) => !i);
        }}
      ></div>
      {cityAndProvinceModal && (
        <ChoseCities
          setData={setCityAndProvince}
          setModal={setCityAndProvinceModal}
        />
      )}
      {addModal && (
        <AddModal
          setModal={setAddModal}
          setData={setLocation}
          data={lacations}
          item={add}
        />
      )}{" "}
      {delModal && (
        <DelModal
          setModal={setDelModal}
          setData={setLocation}
          data={lacations}
          item={del}
        />
      )}
      <div className="overflow-y-scroll">
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

        <input
          autoFocus
          type="text"
          placeholder="جستجوی محل تحویل"
          className="block px-5  my-5 mx-auto w-[calc(100%-20px)] outline-none  h-[50px] border rounded-[10px] "
        />
        <div className="max-h-72 overflow-y-scroll">
          {location?.map((i, index) => (
            <Items key={index} i={i} setData={setDel} setModal={setDelModal} />
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mt-10  px-5">
          {location?.map((i, index) => (
            <Loc key={index} i={i} setData={setAdd} setModal={setAddModal} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Org;
