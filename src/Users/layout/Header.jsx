import React, { createContext, useContext, useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import { BsBookmarkFill } from "react-icons/bs";
import { RiShoppingBag3Line } from "react-icons/ri";
import { LuPhoneCall } from "react-icons/lu";
import { reducerContext } from "../constant/Context";
import {
  Link,
  NavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";
import { decrypt } from "../auth/crypto";
import { getFavorite } from "../services/Favorite";
import { IoIosArrowForward } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const reducer = useContext(reducerContext);
  const [reduce, dispach] = reducer;
  const [favorite, setFavorite] = useState();
  const [authUser, setAuthUser] = useState();
  const [countFavorite, setCountFavorite] = useState();
  const [ProductsInBascket, setProductsInBascket] = useState(
    JSON.parse(localStorage.getItem("product"))
  );
  const searchPrams = useLocation();
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  !!localStorage.getItem("authUser") &&
    useEffect(() => {
      if (!!localStorage.getItem("authUser")) {
        setAuthUser(JSON.parse(decrypt(localStorage.getItem("authUser"))));
      } else {
        setAuthUser("Login");
      }
    }, []);

  !!localStorage.getItem("authUser") &&
    useEffect(() => {
      // console.log("get favorit");

      if (authUser?._id) {
        getFavorite(authUser._id, setFavorite);
      }
    }, [authUser?._id, reduce.reRender]);

  !!localStorage.getItem("authUser") &&
    useEffect(() => {
      setCountFavorite(favorite?.data.data.length);
    }, [favorite,reduce.reRender]);


  return (
    <>
      {/* // desctop header */}
      <div className="w-full bg-white lg:h-28 border-b  ">
        <div className=" container w-full mx-auto font-IrSana relative  ">
          <div className="lg:flex  xl:px-12 lg:px-12 md:px-0 py-[31px] hidden bg-white items-center z-10 absolute -top-[2px] container  border-b ">
            <div className="flex gap-4 items-center justify-between w-full">
              <NavLink to="/user">
                <img
                  src={logo}
                  alt=""
                  className=" lg:inline-block  h-11 mt-2  w-full "
                />
              </NavLink>
              {searchPrams.pathname == "/user/search" ? (
                <input
                  autoFocus
                  type="text"
                  placeholder="جستجوی کالا"
                  className="hidden md:inline-block px-5 shadow-md  w-[calc(100%-180px)]  h-[50px] border rounded-[10px] "
                />
              ) : (
                <Link
                  to="/user/search"
                  className="hidden md:inline-block px-5 shadow-md  w-[calc(100%-180px)]  h-[50px] border rounded-[10px] "
                >
                  <span className="mt-2.5 inline-block text-gray-400">
                    {" "}
                    جستجو کالا
                  </span>
                </Link>
              )}
            </div>
            <div className="flex items-center">
              <NavLink to={`/user/Save`} className="items-center flex px-2">
                <div className="hidden md:inline-block  h-[50px] w-[50px]  cursor-pointer rounded-xl border-black  ">
                  <BsBookmarkFill className="m-[13px] h-5 w-5 lg:h-6 lg:w-6  md:inline-block" />
                </div>
                <span className="">
                  <p className="text-nowrap"> ذخیره شده</p>
                  <span
                    className={` text-red-600  bg-white 
                       ${!!countFavorite ? `block` : `hidden`} 
                    `}
                  >
                    {countFavorite} کالا
                  </span>
                </span>
              </NavLink>
              <div
                className="hidden px-2  h-[50px] cursor-pointer  lg:flex items-center   border-x "
                onClick={() => {
                  dispach({ type: "basket" });
                  // console.log(reduce.basket);
                }}
              >
                <div className="hidden md:inline-block  h-[50px] w-[50px]  cursor-pointer rounded-xl border-black  ">
                  <RiShoppingBag3Line className=" w-full text-2xl   mt-2.5 " />
                </div>
                <span className="">
                  <p className="text-nowrap">سبد خرید</p>
                  <span
                    className={` ${
                      !!ProductsInBascket ? `block` : `hidden`
                    }   text-red-600  bg-white text-center  `}
                  >
                    {ProductsInBascket?.length} کالا
                  </span>
                </span>
              </div>

              <span
                className=" md:inline-block lg:hidden cursor-pointer h-[50px] w-[50px]  border rounded-xl border-black "
                onClick={() => {
                  dispach({ type: "basket" });
                }}
              >
                <RiShoppingBag3Line className="m-[13px] h-5 w-5 lg:h-6 lg:w-6  md:inline-block" />
              </span>
              <div
                onClick={() => {
                  if (!localStorage.getItem("authUser")) {
                    navigate("/user/LoginUser");
                  } else {
                    navigate("/user/account");
                  }
                }}
              >
                {/* <div
                  onClick={() => {}}
                  className=" border-x flex  items-center  px-2 cursor-pointer "
                >
                  <span className="hidden md:inline-block  h-[50px] w-[50px]   rounded-xl border-black">
                    <FaRegCircleUser className="m-[13px] h-6 w-6  " />
                  </span>
                  <div className="hidden lg:inline-block text-right">
                    <h4 className=" font-bold text-nowrap">اشکان حسنوند</h4>
                    <p className=" opacity-75">09216919291</p>
                  </div>
                </div> */}
                <div
                  onClick={() => {}}
                  className=" border-x flex  items-center  px-2 cursor-pointer "
                >
                  <span className="hidden md:inline-block  h-[50px] w-[50px]   rounded-xl border-black">
                    <FaRegCircleUser className="m-[13px] h-6 w-6  " />
                  </span>
                  <div className="hidden lg:inline-block text-right">
                    <h4 className=" font-bold text-nowrap mb-1.5">
                      ورود به حساب{" "}
                    </h4>
                  </div>
                </div>
              </div>
              <div
                className="flex  border-r px-2"
                onClick={() => {
                  // console.log(reduce.Conection);
                  dispach({ type: "Conection" });
                  // navigate("/InPerson");
                }}
              >
                <span className=" h-[50px] w-[50px]  rounded-xl border-black">
                  <LuPhoneCall className="hidden md:inline-block m-[13px] h-6 w-6" />
                </span>
                <div className="hidden lg:inline-block  ">
                  <p className="text-center w-full    ">
                    ارتباط با ما
                  </p>
                  <h1>
                    <span className="text-blue-400">021</span>42156644
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* //mbile header  */}

      {searchPrams.pathname == "/user/search" ? (
        <div className=" h-0  ">
          <div className="flex h-20  items-center absolute top-0 right-0 z-10 w-full lg:hidden border  justify-between    bg-white py-2 ">
            <NavLink to="/" className=" h-full w-14  mr-5">
              <IoIosArrowForward className=" text-3xl  h-full" />
            </NavLink>{" "}
            <input
              placeholder="جستجوی کالا"
              autoFocus
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              type="  "
              className="w-[calc(100%-40px)]  placeholder:text-red-500 text-xl focus:outline-0 h-12 rounded-[10px] "
            />
            <div>
              {!!search && (
                <IoClose
                  className="text-red-500 ml-5  mx-2 text-3xl "
                  onClick={() => {
                    setSearch("");
                  }}
                />
              )}
            </div>{" "}
          </div>
        </div>
      ) : (
        <div className=" w-full border-b  h-20 lg:hidden">
          <div className="flex container  items-center absolute top-0 right-0 left-0 mx-auto z-10 w-full    justify-between px-3   bg-white py-2 ">
            <div>
              {/* logo */}
              <NavLink to="/user">
                <img
                  src={logo}
                  alt=""
                  className=" w-[160px]  pl-[27px] mr-[13px] mt-1 "
                />
              </NavLink>
            </div>
            <div className="flex">
              {/* //bookmark */}
              <NavLink
                to={`/user/Save`}
                className="   h-[50px] w-[50px]  "
                onClick={() => dispach({ type: "save" })}
              >
                <BsBookmarkFill className="m-[13px] h-6 w-6 " />
              </NavLink>
              <span
                onClick={() => {
                  dispach({ type: "Conection" });
                }}
              >
                <LuPhoneCall className="m-[13px] h-6 w-6" />
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
