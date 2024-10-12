import React, { useContext, useEffect, useState } from "react";
import { reducerContext } from "../../constant/Context";
import { useNavigate, useSearchParams } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { editUser } from "../../services/User";
import { ChengHandler } from "../../constant/Functions";
import ChoseCities from "./ChoseCities";

const NewAccount = ({}) => {
  const reducer = useContext(reducerContext);
  const [reduce, dispach] = reducer;
  const [arrowCity, setArrowCity] = useState(true);
  const [arrowProvince, setArrowProvince] = useState(true);
 
  const navigate = useNavigate();

  const [data, setData] = useState({});
  return (
    <div
      className={` overflow-y-scroll h-screen w-full  bg-white  mx-auto relative pb-4 max-w-xl `}
    >
      <div className="pt-12 mb-5">
        <div className="mx-auto w-[calc(100%-40px)] ">
          <h1 className="mb-6 font-bold">مشخصات خود را وارد کنید</h1>
          <p className="mb-6">تکمیل اطلاعات کاربری</p>
        </div>

        <div className="mt-6 child:mb-5 mx-5 ">
          <div className="relative   ">
            <input
              className="peer border rounded-[10px] outline-gray-300 h-12 w-full  px-5"
              placeholder=" "
              id="name"
              type="text"
              value={data?.name}
              name="name"
              onChange={(e) => ChengHandler(e, setData)}
            />
            <label
              htmlFor="name"
              className={`absolute start-1 IrHomama    rounded-2xl transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2 ${
                !!data?.name ? `start-2.5 -top-2 !text-sm` : `top-3`
              }`}
            >
              نام
            </label>
          </div>
          {/*  */}
          <div className="relative   ">
            <input
              className="peer border rounded-[10px] outline-gray-300 h-12 w-full px-5 "
              placeholder=" "
              type="text"
              id="lastName"
              value={data?.LastName}
              name="LastName"
              onChange={(e) => ChengHandler(e, setData)}
            />
            <label
              htmlFor="lastName"
              className={`absolute start-1 IrHomama    rounded-2xl transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2 ${
                !!data?.LastName ? `start-2.5 -top-2 !text-sm` : `top-3`
              }`}
            >
              نام خانوادگی
            </label>
          </div>
          {/*  */}
          <div className="relative   ">
            <input
              className="peer border rounded-[10px] outline-gray-300 h-12 w-full px-5 "
              placeholder=" "
              id="personId"
              type="number"
              value={data?.personId}
              name="personId"
              onChange={(e) => ChengHandler(e, setData)}
              inputMode="numeric"
            />
            <label
              htmlFor="personId"
              className={`absolute start-1 IrHomama    rounded-2xl transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2 ${
                !!data?.personId ? `start-2.5 -top-2 !text-sm` : `top-3`
              }`}
            >
              کدملی{" "}
            </label>
          </div>
          {/*  */}{" "}
          {/* <div className="relative    ">
              <input
                className="peer border rounded-[10px] outline-gray-300 h-12 w-full px-5"
                placeholder=" "
                id="pass"
                type="password"
              />
              <label
                htmlFor="pass"
                className="absolute start-1 IrHomama top-2.5 rounded-[10px] transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2"
              >
                رمزعبور{" "}
              </label>
            </div> */}
          {/* استان و شهر  */}
          <div className="relative">
            <ChoseCities setData={setData} />
          </div>
          {/* <select
            name=""
            id=""
            className="w-full  p-2 block  border mx-auto h-12 rounded-[10px]  appearance-none  "
          >
            <option selected disabled value={0}>
              ارگان
            </option>
            <option value="1">بیمارستان عشایر</option>
            <option value="2"> دانشگاه علوم پزشکی لرستان</option>
          </select>
          
          <div className="relative  !mb-3 ">
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
          </div> */}
        </div>

        <button
          onClick={() => {
            // navigate("/");
            console.log(data);

            // editUser(authUser?._id, data);
          }}
          className="w-[calc(100%-40px)] mx-auto  h-12 bg-blue-500 block  mt-5 rounded-[10px] text-white "
        >
          ذخیره اطلاعات
        </button>

        <p
          href=""
          className=" mt-5 mx-auto text-blue-500 block w-fit "
          onClick={() => {
            dispach({ type: "Conection" });
          }}
        >
          {" "}
          نیاز به کمک دارم
        </p>
      </div>
    </div>
  );
};

export default NewAccount;
