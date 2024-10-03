import React from 'react';
import logo from "../../assets/images/logo.png" 
import { PropagateLoader } from 'react-spinners';

const Loader = () => {
    return (
      <div className=" w-full h-full  relative  bg-white z-50  mx-auto  ">
        <div className="fixed left-0 right-0 mx-auto w-80 bg-white h-36  rounded-xl top-[calc(100%-60%)]">
          <img src={logo} alt="" className="pt-10 mx-auto" />
          <PropagateLoader
            speedMultiplier={1}
            color="#ff0000 "
            className="w-full  text-center mt-4 text-red-500"
          />
        </div>
      </div>
    );
}

export default Loader;
