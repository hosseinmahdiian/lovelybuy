import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const AddModal = ({ setData, data, setModal, item }) => {
  const [value, setValue] = useState(item.duty);
  let temp = item;
  let newArr = data?.filter((i) => i.id != item.id);

  const handler = () => {
    if (!!value) {
      temp.selected = true;
      temp.duty = value;
    } else {
      temp.selected = false;
      temp.duty = value;
    }
    setData([...newArr, temp]);
    setModal((i) => !i);
  };

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
          به صورت خلاصه واحد خدمت خود را در ارگان انتخاب شده وارد کنید
        </h1>
        <div>
          <h1>
            محل تحویل : <span>{item?.name}</span>
          </h1>

          <input
            autoFocus
            type="text"
            placeholder=" واحد خدمت "
            className="block px-5 outline-none  my-5 mx-auto w-full  h-[50px] border rounded-[10px] "
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            onClick={handler}
            className=" w-full bg-blue-600 rounded-[10px] mt-4 h-12 block mx-auto text-white my-2"
          >
            تکمیل سفارش
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
