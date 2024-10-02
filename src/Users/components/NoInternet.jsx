import React from 'react';
import NoNet from "../../../public/noNet.svg"
const NoInternet = () => {
    return (
      <div className=" w-full h-full  relative  bg-white z-50  mx-auto   ">
        <div className="fixed left-0 right-0 mx-auto w-80 bg-white h-36  rounded-xl top-1/4">
          <img src={NoNet} alt="" className="pt-10 mx-auto" />
          <div className='child:text-center text-gray-400 mt-3'>
            <p>انتقال داده کند است</p>
            <p className='mt-2'>لطفا دسترسی خود را به اینترنت برسی کنید</p>
          </div>
        </div>
      </div>
    );
}

export default NoInternet;
