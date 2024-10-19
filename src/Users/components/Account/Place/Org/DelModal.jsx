import React, { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";

const DelModal = ({ setData, data, setModal, item }) => {
  let temp = item;
  let newArr = data?.filter((i) => i.id != item.id);

  const handler = () => {
    temp.selected = false;
    temp.duty = "";
    setData([...newArr, temp]);
    setModal((i) => !i);
  };

  // console.log(temp);

  return (
    <div className="   z-30  fixed right-0 left-0 mx-auto max-w-xl px-5 ">
      <div className=" bg-white p-5 border  rounded-xl ">
        <div
          className=" text-lg text-red-500  w-full items-center mb-4 gap-2 font-bold flex"
          onClick={() => setModal((i) => !i)}
        >
          <IoIosArrowForward className="text-xl text-black" />
          <p>{item?.name}</p>
        </div>
        <h1 className="text-right mb-4  ">
          ایا می خوای این ارگان را از لیست خود حذف کنید؟
        </h1>
        <div className="flex gap-4">
          <button
            className=" w-full bg-red-600 rounded-[10px] mt-4 h-12 block mx-auto text-white my-2"
            onClick={() => {
              setModal((i) => !i);
            }}
          >
            خیر
          </button>
          <button
            onClick={handler}
            className=" w-full bg-green-600 rounded-[10px] mt-4 h-12 block mx-auto text-white my-2"
          >
            بله
          </button>
        </div>
      </div>
    </div>
  );
};

export default DelModal;
