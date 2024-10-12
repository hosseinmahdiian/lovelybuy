import React, { useEffect } from 'react';
import Location from './Location';
import { useNavigate } from 'react-router-dom';
import { getCurrentAdmin } from '../../../auth/localStoreage';

const Bill = () => {
   const navigate = useNavigate();

   useEffect(() => {
     if (!localStorage.getItem("authAdmin")) {
       navigate("/admin/loginAdmin");
     } else {
       getCurrentAdmin("authAdmin");
     }
   }, []);
    return (
      <>
        <div className="relative mt-6 max-w-2xl mx-auto">
          <Location />
          <Location />

          {/* <Counter /> */}
        </div>
      </>
    );
}

export default Bill;
