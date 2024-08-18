import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';

const History = () => {
    return (
      <div>
        <div className="  bg-green-600 my-4  text-white border      rounded-2xl mt-5">
          <div className="w-11/12 my-3 mx-auto border-b border-white pb-3 ">
            <h2 className="mb-3">اشکان حسنوند</h2>
            <p>4060405531</p>
          </div>
          <div className="w-11/12 my-3 mx-auto flex  justify-between">
            <p>اعتبار شما</p>
            <span className="flex gap-2">
              <h2>3.125.000</h2>
              <p>تومان</p>
            </span>
          </div>

          <div className=" flex my-4 justify-between child:border child:rounded-lg  mx-3">
            <div className="relative mx-2 w-[calc(100%-60px)]  ">
              <input
                className="peer border-white px-5 rounded-[10px] bg-green-600 h-12 w-full focus:border-0 "
                placeholder=" "
                id="pay"
              />
              <label
                htmlFor="pay"
                className="absolute start-1 IrHomama top-3 rounded-[10px] transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-green-600 text-white px-2"
              >
                واریز مبلغ
              </label>
            </div>
            <span className="w-12  h-12">
              <IoIosArrowBack className="w-full  mt-3 mx-auto  " />
            </span>
          </div>
        </div>
      </div>
    );
}

export default History;
