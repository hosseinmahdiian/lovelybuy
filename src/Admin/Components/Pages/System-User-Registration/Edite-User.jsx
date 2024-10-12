import React, { useEffect } from "react";
import ChoseCities from "../../ChoseCities";
import { useNavigate } from "react-router-dom";
import { getCurrentAdmin } from "../../../auth/localStoreage";
const EditUsers = () => {
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
      <div className="mt-6 child:mb-5 w-[calc(100%-40px)] max-w-2xl mx-auto ">
        <div className="relative mx-2  ">
          <input
            className="peer border rounded-[10px] outline-gray-300 h-12 w-full  px-5"
            placeholder=" "
            id="name"
          />
          <label
            htmlFor="name"
            className="absolute start-1 IrHomama top-3 rounded-[10px] transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2"
          >
            نام
          </label>
        </div>
        {/*  */}
        <div className="relative mx-2  ">
          <input
            className="peer border rounded-[10px] outline-gray-300 h-12 w-full px-5 "
            placeholder=" "
            id="lastName"
          />
          <label
            htmlFor="lastName"
            className="absolute start-1 IrHomama top-3 rounded-[10px] transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2"
          >
            نام خانوادگی{" "}
          </label>
        </div>
        {/*  */}
        <div className="relative mx-2   ">
          <input
            className="peer border rounded-[10px] outline-gray-300 h-12 w-full px-5  "
            placeholder=" "
            id="phone"
          />
          <label
            htmlFor="phone"
            className="absolute start-1 IrHomama top-3 rounded-[10px] transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2"
          >
            تلفن{" "}
          </label>
        </div>
        {/*  */}
        <div className="relative mx-2  ">
          <input
            className="peer border rounded-[10px] outline-gray-300 h-12 w-full px-5 "
            placeholder=" "
            id="personId"
          />
          <label
            htmlFor="personId"
            className="absolute start-1 IrHomama top-3 rounded-[10px] transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2"
          >
            کدملی{" "}
          </label>
        </div>
        {/*  */}{" "}
        <div className="relative mx-2  ">
          <input
            className="peer border rounded-[10px] outline-gray-300 h-12 w-full px-5"
            placeholder=" "
            id="pass"
          />
          <label
            htmlFor="pass"
            className="absolute start-1 IrHomama top-3 rounded-[10px] transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2"
          >
            رمزعبور{" "}
          </label>
        </div>
        {/*  */}
        <ChoseCities />
      </div>
      {/* -------------------- */}
      <button className=" max-w-2xl w-full  mx-auto  h-12 bg-blue-500 block  mt-5 rounded-[10px] text-white ">
        ذخیره اطلاعات
      </button>

      {/* <Counter /> */}
    </>
  );
};

export default EditUsers;
