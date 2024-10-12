import React, { useEffect } from "react";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdOutlineArrowBackIos,
} from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { getCurrentAdmin } from "../../../auth/localStoreage";
const RegistrationDispacher = () => {
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
      <div className="mb-28 mt-4 pt-4 child:!rounded-[20px] w-[calc(100%-40px)] max-w-2xl mx-auto">
        <Link
          to={`/admin/Dispacher/1/RegisterationDeliveryProducts`}
          className="w-11/12 mx-auto border rounded-lg flex justify-between items-center py-4 pr-3 my-2 bg-white "
        >
          <h2>ثبت تحویل کالا</h2>
          <span className="w-8 h-8  py-2">
            <MdOutlineArrowBackIos />
          </span>
        </Link>

        <Link
          to={``}
          className="w-11/12 mx-auto border rounded-lg flex justify-between items-center py-4 pr-3 my-2 bg-white "
        >
          <h2>صدور فاکتور</h2>
          <span className="w-8 h-8  py-2">
            <MdOutlineArrowBackIos />
          </span>
        </Link>

        <NavLink
          to={`/admin/Dispacher/1/ُShowProducts`}
          className="w-11/12 mx-auto border rounded-lg flex justify-between items-center py-4 pr-3 my-2 bg-white "
        >
          <h2>نمایش محصولات</h2>
          <span className="w-8 h-8  py-2">
            <MdOutlineArrowBackIos />
          </span>
        </NavLink>
      </div>

      {/* ====================================================== */}
      {/* <div className="h-20 bg-white  bottom-0 w-[400px] fixed border-t">
        <div className="flex justify-between    mx-5 items-center h-20   ">
          <span className={` opacity-20`}>
            <MdKeyboardArrowRight />
          </span>

          <NavLink to={-1} className={``}>
            <MdKeyboardArrowLeft />
          </NavLink>
        </div>

        <Counter />
      </div> */}
    </>
  );
};

export default RegistrationDispacher;
