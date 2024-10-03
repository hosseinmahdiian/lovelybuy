import React  from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";

const User = () => {
  return (
    <>
      <div className="flex justify-between border-b  bg-white items-center  my-2  w-[calc(100%-40px)] mt-5 max-w-2xl mx-auto  ">
        <div className="w-full ">
          <div className="flex  child:w-1/2  gap-4 justify-between mb-1">
            <h2>4060405531</h2>
            <h2>اشکان حسنوند</h2>
          </div>
          <div className="flex child:w-1/2 gap-4 justify-between mb-1">
            <h2>5531</h2>
            <h2>09216919291</h2>
          </div>

          <div className="flex  gap-4 text-gray-600">
            <p>کاربر:</p>
            <p>خریدار</p>
          </div>
          <div className="  text-gray-600 mb-2">
            <p>بیمارستان عشایر</p>
          </div>
        </div>
        <div>{/* <MdKeyboardArrowLeft className="text-2xl" /> */}</div>
      </div>
    </>
  );
};

export default User;
