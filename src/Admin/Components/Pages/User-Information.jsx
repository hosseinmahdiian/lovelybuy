import React, { useReducer } from "react";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";

const UserInformation = () => {
  const init = {
    page1: true,
    page2: false,
    glacery: false,
    digital: false,
    selected: "",
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
      case "glacery":
        return {
          ...state,
          selected: "glacery",
        };
      case "digital":
        return {
          ...state,
          selected: "digital",
        };
      default:
        break;
    }
  };

  const [reducer, dispach] = useReducer(reducerHandler, init);
  console.log(reducer.selected);
  return (
    <>
      <div className="mt-24">
        <div className="relative mx-2  ">
          <input
            className="peer border-2 rounded-2xl outline-gray-300 h-16 w-full "
            placeholder=" "
            id="search"
          />
          <label
            htmlFor="search"
            className="absolute start-1 IrHomama top-4 rounded-2xl transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2"
          >
            جستجو با نام یا کد ملی{" "}
          </label>
        </div>

        <div className="flex justify-between border rounded-xl bg-white items-center px-3 h-40 w-11/12 mt-4 mx-auto">
          <div>
            <div className="flex  gap-4 justify-between mb-3">
              <h2>4060405531</h2>
              <h2>اشکان حسنوند</h2>
            </div>
            <div className="flex  gap-4 justify-between mb-3">
              <h2>5531</h2>
              <h2>09216919291</h2>
            </div>
            <div className="flex  gap-4 text-gray-400">
              <p>کاربر:</p>
              <p>خریدار</p>
            </div>
            <div className="  text-gray-400">
              <p>بیمارستان عشایر</p>
            </div>
          </div>
          <div>
            <MdKeyboardArrowLeft className="text-2xl" />
          </div>
        </div>
        <div className="flex justify-between border rounded-xl bg-white items-center px-3 h-40 w-11/12 mt-4 mx-auto">
          <div>
            <div className="flex  gap-4 justify-between mb-3">
              <h2>4060405531</h2>
              <h2>اشکان حسنوند</h2>
            </div>
            <div className="flex  gap-4 justify-between mb-3">
              <h2>5531</h2>
              <h2>09216919291</h2>
            </div>
            <div className="flex  gap-4 text-gray-400">
              <p>کاربر:</p>
              <p>خریدار</p>
            </div>
            <div className="  text-gray-400">
              <p>بیمارستان عشایر</p>
            </div>
          </div>
          <div>
            <MdKeyboardArrowLeft className="text-2xl" />
          </div>
        </div>
      </div>

      <div className="h-20 bg-white  bottom-0 w-[400px] fixed border-t">
        <div className="flex justify-between    mx-5 items-center h-20   ">
          <span className={` opacity-20`}>
            <MdKeyboardArrowRight />
          </span>

          <NavLink to={-1} className={``}>
            <MdKeyboardArrowLeft />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default UserInformation;
