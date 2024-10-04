import React, { useReducer } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";
import User from "./User";
import EditUser from "./Edit-User";
import { FiPlus } from "react-icons/fi";
const BuyerUserRegistration = () => {
  const init = {
    page1: true,
    page2: false,
    page3: false,
    page4: false,
  };
  const reducerHandler = (state, action) => {
    switch (action.type) {
      case "page1":
        return {
          ...state,
          page1: !state.page1,
        };
      case "page2":
        return {
          ...state,
          page2: !state.page2,
        };
      case "page3":
        return {
          ...state,
          page3: !state.page3,
        };
      case "page4":
        return {
          ...state,
          page4: !state.page4,
        };

      default:
        break;
    }
  };

  const [reducer, dispach] = useReducer(reducerHandler, init);
  return (
    <>
      <div className="flex items-center  gap-2.5  mt-5 max-w-2xl mx-auto">
        <div className="relative   w-[calc(100%-48px)]  ">
          <input
            className="peer border p-5 rounded-[10px] px-5 outline-gray-300 h-14  w-full "
            placeholder=" "
            id="search"
          />
          <label
            htmlFor="search"
            className="absolute start-1  top-4  transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2"
          >
            جستجو با نام یا کد ملی{" "}
          </label>
        </div>
        <NavLink
          to="/admin/Buyer-User-Registration/Edit-User/1"
          className="w-14 h-14 bg-white  border rounded-[10px] p-3.5 "
        >
          <FiPlus className="text-xl w-full text-center inline-block text-gray-600 " />
        </NavLink>
      </div>

      <div className="mt-6">
        <NavLink to="/admin/Buyer-User-Registration/Edit-User/1">
          <User />
        </NavLink>
        <NavLink to="/admin/Buyer-User-Registration/Edit-User/1">
          <User />
        </NavLink>
      </div>

      {/* <Counter /> */}
    </>
  );
};

export default BuyerUserRegistration;
