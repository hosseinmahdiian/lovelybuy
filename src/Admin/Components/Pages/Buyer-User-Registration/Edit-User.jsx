import React, { useEffect } from "react";
import ChoseCities from "../../ChoseCities";
import { useNavigate } from "react-router-dom";
import { getCurrentAdmin } from "../../../auth/localStoreage";
const EditUser = () => {
   const navigate = useNavigate();

   useEffect(() => {
   if (!localStorage.getItem("authAdmin")) {
     navigate("/admin/loginAdmin");
   } else {
     getCurrentAdmin("authAdmin");
   }
   }, []);
  return (
    <div className="mt-6 child:mb-5 w-[calc(100%-40px)]  max-w-2xl mx-auto">
      <div className="relative  ">
        <input
          className="peer border px-5 rounded-[10px] outline-gray-300 h-12 w-full "
          placeholder=" "
          id="name"
        />
        <label
          htmlFor="name"
          className="absolute  start-1 IrHomama top-3 rounded-2xl transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2"
        >
          نام
        </label>
      </div>
      {/*  */}
      <div className="relative  ">
        <input
          className="peer border px-5 rounded-[10px] outline-gray-300 h-12 w-full "
          placeholder=" "
          id="lastName"
        />
        <label
          htmlFor="lastName"
          className="absolute start-1 IrHomama top-3 rounded-2xl transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2"
        >
          نام خانوادگی{" "}
        </label>
      </div>
      {/*  */}
      <div className="relative   ">
        <input
          className="peer border px-5 rounded-[10px] outline-gray-300 h-12 w-full "
          placeholder=" "
          id="phone"
        />
        <label
          htmlFor="phone"
          className="absolute start-1 IrHomama top-3 rounded-2xl transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2"
        >
          تلفن{" "}
        </label>
      </div>
      {/*  */}
      <div className="relative  ">
        <input
          className="peer border px-5 rounded-[10px] outline-gray-300 h-12 w-full "
          placeholder=" "
          id="personId"
        />
        <label
          htmlFor="personId"
          className="absolute start-1 IrHomama top-3 rounded-2xl transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2"
        >
          کدملی{" "}
        </label>
      </div>
      {/*  */}{" "}
      <div className="relative  ">
        <input
          className="peer border px-5 rounded-[10px] outline-gray-300 h-12 w-full "
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
      {/* =============================================================== */}
      <ChoseCities />
      {/* ===================== */}
      <div
        className={`
            pt-5  w-full mx-auto  font-IrSans  relative `}
      >
        <select
          name=""
          id=""
          className=" w-full p-2 block  border mx-auto h-12 rounded-[10px]  appearance-none "
        >
          <option value="" disabled>
            محل خدمت
          </option>
          <option value="">بیمارستان عشایر</option>
          <option value=""> دانشگاه علوم پزشکی لرستان</option>
        </select>
      </div>
      {/* =============================================================== */}
      <div className="relative  !mb-0 ">
        <textarea
          className="peer border px-5 py-2 rounded-[10px] outline-gray-300 h-20 w-full "
          placeholder=" "
          type="text"
          id="unit"
        />
        <label
          htmlFor="unit"
          className="absolute  start-1 IrHomama top-3 rounded-[10px] transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2"
        >
          واحد خدمت
        </label>
      </div>
      {/* ================================================================== */}
      <button className="w-full mx-auto  h-12 bg-blue-500 block  mt-5 rounded-[10px] text-white ">
        ذخیره اطلاعات
      </button>
      {/* <Counter /> */}
    </div>
  );
};

export default EditUser;
