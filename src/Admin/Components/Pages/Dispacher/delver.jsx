import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Delver = () => {
    return (
      <div className="flex gap-2.5 w-full">
        <div className="flex relative  gap-2.5  items-center w-[calc(100%-138px)]  ">
          <input
            className="peer border rounded-[10px] outline-gray-300 h-12 w-full px-5 "
            placeholder=" "
            id="delver"
          />
          <label
            htmlFor="delver"
            className="absolute whitespace-nowrap start-1 IrHomama top-2.5 rounded-2xl transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2"
          >
            اسم باز گشتی
          </label>
        </div>
        <span className="border block border-black border-opacity-10 w-[68px] h-12 rounded-[10px] pt-3.5 text-center text-sm text-red-500">
          1435
        </span>
        <Link
          to="/Dispacher/Detil/1"
          className="border border-black border-opacity-10 w-12 h-12 rounded-[10px] pt-3.5 text-center "
        >
          <BsThreeDotsVertical className="text-center w-full text-gray-600" />
        </Link>
      </div>
    );
}

export default Delver;
