import React from 'react';
import logo from "../assets/images/logo.png" 
import { PropagateLoader } from 'react-spinners';

const Loader = () => {
    return (
      <div className=" w-80 h-36 rounded-2xl bg-white  mx-auto">
        <img src={logo} alt="" className="pt-10 mx-auto" />
        <PropagateLoader
          speedMultiplier={1}
          color="#ff0000 "
          className="w-full text-center mt-4 text-red-500"
        />
      </div>
    );
}

export default Loader;
