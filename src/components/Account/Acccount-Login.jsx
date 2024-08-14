import React, { useContext } from 'react';
import { reducerContext } from '../../constant/Context';
import { IoIosArrowBack } from 'react-icons/io';
import { GoUnlock } from 'react-icons/go';
import { GrLocation } from 'react-icons/gr';
import { MdOutlineLogout } from 'react-icons/md';

const AcccountLogin = ({ data, dispach }) => {
  return (
    <>
      <div
        className={` h-full bg-white border mx-auto relative px-8 ${
          !data.Login ? `hidden` : `block`
        }`}
      >
        <div className="  bg-gray-600 my-4 text-white border rounded-xl mx-auto mt-20">
          <div className="w-11/12 my-3 mx-auto border-b border-white ">
            <h2>اشکان حسنوند</h2>
            <p>4060405531</p>
          </div>
          <div className="w-11/12 my-3 mx-auto flex  justify-between">
            <p>اعتبار شما</p>
            <span className="flex gap-2">
              <h2>3.125.000</h2>
              <p>تومان</p>
            </span>
          </div>

          <div className=" flex justify-between my-4 gap-3 child:border child:rounded-lg w-11/12 mx-auto">
            <div className="relative mx-2 w-[calc(100%-60px)]  ">
              <input
                className="peer border-white px-5 rounded-[10px] bg-gray-600 h-12 w-full focus:border-0 "
                placeholder=" "
                id="pay"
              />
              <label
                htmlFor="pay"
                className="absolute start-1 IrHomama top-3 rounded-[10px] transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-gray-600 text-white px-2"
              >
                واریز مبلغ
              </label>
            </div>
            <span className="w-12  h-12" >
              <IoIosArrowBack className="w-full  mt-3 mx-auto  " />
            </span>
          </div>
        </div>

        <div className="mx-auto">
          <div>
            <div className="flex items-center gap-3">
              <span>
                <GoUnlock />
              </span>
              <p>رمز عبور</p>
            </div>
            <p className="text-gray-600">**********</p>
          </div>

          <div className="relative  mx-auto h-10 mt-5 flex  justify-around my-4  w-11/12 ">
            <div className="w-3/4">
              <input
                className="peer border-2  rounded-lg outline-gray-300 h-10 w-full"
                placeholder=" "
                id="pass"
              />
              <label
                htmlFor="pass"
                className="absolute text-sm  font-IrHomama start-3 top-1.5 transition-all ease-linear peer-focus:start-4 peer-focus:-top-3 peer-focus:text-[12px] bg-white mx-2"
              >
                تعییر رمز عبور
              </label>
            </div>
            <span className="border rounded-lg ">
              <IoIosArrowBack className="w-1/4  h-10 mx-auto text-2xl " />
            </span>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <span>
                <GrLocation />
              </span>
              <p> محل تحویل</p>
            </div>
            <p className="text-gray-600">محل پخش بیمارستان شهدی عشایر</p>
          </div>

          <div
            className="flex gap-3 text-red-600 items-center mt-4"
            // onClick={() => {
            //   dispach({ type: "acconut" });
            // }}
          >
            <span>
              <MdOutlineLogout />
            </span>
            <p>خروج از حساب کار بری</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AcccountLogin;
