import React, { useContext, useEffect, useState } from "react";
import { FaMinus, FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";
import { HiPlusSm } from "react-icons/hi";
import noImage from "../../../assets/images/no-image.png";
import { percent, sp } from "../../constant/Functions";
import { useNavigate } from "react-router-dom";
import { reducerContext } from "../../constant/Context";
import {
  addFavorite,
  deleteFavorite,
  getFavorite,
} from "../../services/Favorite";
import { decrypt } from "../../auth/crypto";

const Product = ({ item, FN }) => {
  const { image, name, sellPrice, oldPrice, id } = item;
  //  console.log(item);
  // console.log(id, favorite);
  const reducer = useContext(reducerContext);
  const [reduce, dispach] = reducer;
  const [count, setCount] = useState(0);
  const [save, setSave] = useState(false);
  const [idF, setIdF] = useState();
  const [authUser, setAuthUser] = useState();
  const [favorite, setFavorite] = useState();
  const navigate = useNavigate();

  // let check = JSON.parse(localStorage.getItem("product"));

  useEffect(() => {
    let check = JSON.parse(localStorage.getItem("product"));
    let temp;
    if (!!check) {
      temp = check?.find((i) => i.id == id);
      if (temp) {
        setCount(temp.count);
      } else {
        setCount(0);
      }
    }
    console.log(temp);
  }, [reduce.reRender]);

  const increaseHandeler = (id) => {
    let check = JSON.parse(localStorage.getItem("product"));
    let temp = check?.filter((i) => i.id != id);
    if (!check) {
      localStorage.setItem(
        "product",
        JSON.stringify([{ id, count: count + 1 }])
      );
    } else {
      localStorage.setItem(
        "product",
        JSON.stringify([...temp, { id, count: count + 1 }])
      );
    }
    setCount(count + 1);
    dispach({ type: "reRender" });
  };

  const decreaseHandeler = (id) => {
    let check = JSON.parse(localStorage.getItem("product"));
    let temp = check?.filter((i) => i.id != id);
    localStorage.setItem(
      "product",
      JSON.stringify(
        count - 1 != 0 ? [...temp, { id, count: count - 1 }] : [...temp]
      )
    );
    setCount(count - 1);
    dispach({ type: "reRender" });
  };

  !!localStorage.getItem("authUser") &&
    useEffect(() => {
      if (!!localStorage.getItem("authUser")) {
        setAuthUser(JSON.parse(decrypt(localStorage.getItem("authUser"))));
      } else {
        navigate("/LoginUser");
      }
    }, []);

  !!localStorage.getItem("authUser") &&
    useEffect(() => {
      // console.log("get favorit");
      if (authUser?._id) {
        getFavorite(authUser._id, setFavorite);
      }
    }, [authUser?._id, save]);

  !!localStorage.getItem("authUser") &&
    useEffect(() => {
      let find = favorite?.data.data.find((i) => i.productID == id);
      find?.productID == id ? setSave(true) : setSave(false);
      find?.productID == id && setIdF(find._id);
    }, [favorite]);

  return (
    <div className="xl:w-56 \\ lg:w-56 \\ md:w-48 \\ sm:w-52 \\ es:w-44  \\ w-72  \\      mx-auto rounded-2xl lg:border-2 relative font-IrSans  lg:mb-0  border-b-0 line-clamp-1 ">
      {/* <Link to={}> */}
      <span
        onClick={() => {
          dispach({ type: "reRender" });
          if (!localStorage.getItem("authUser")) {
            navigate("/user/LoginUser");
          } else {
            !!FN && FN();
            !save &&
              (addFavorite({ userID: authUser._id, productID: id }),
              setSave(true));
            save && (deleteFavorite(idF), setSave(false));
          }
        }}
        className="absolute top-3 left-3 child:sm:text-2xl text-lg child:es:text-lg  "
      >
        {save ? <FaBookmark /> : <FaRegBookmark />}
      </span>
      <div
        className="bg-white pt-2 rounded-b-lg  lg:rounded-b-none mb-1 lg:mb-0 shadow-sm "
        onClick={() => {
          navigate(`ProductID/${id}`);
        }}
      >
        <img
          src={!!image ? image : noImage}
          alt=""
          className="  lg:h-52 \\  sm:h-40   \\  es:h-32  h-40 object-contain bg-white mx-auto "
        />

        <h2 className="text-right mr-3 pt-2 sm:h-9 h-7 line-clamp-1  font-bold es:text-[12px] sm:text-sm lg:text-lg  ">
          {name}
        </h2>
        <div>
          <div className="child:gap-3 child:mr-2  mt-1  flex  justify-between mx-2">
            <div>
              {/* <p>تعداد</p>
              <p>تاریخ</p> */}
            </div>
            <div className="flex-col child:flex my-1">
              <span className="relative  items-center justify-end  !flex">
                <p className="opacity-70 text-[0.800rem] relative">
                  {sp(oldPrice)}
                  <span className="opacity-100  w-full  items-center bottom-2.5  right-0 inline-block absolute border-b border-black"></span>
                </p>
                <div className="w-9 !h-4 rounded-xl  bg-red-600 flex items-center mr-1">
                  <p className="px-1 mx-auto pt-0.5 text-white  self-center font-IrSans rounded-md  text-[10px]  ">
                    {percent(oldPrice, sellPrice)} %
                  </p>
                </div>
              </span>
              <span className="flex items-center ">
                <p className=" text-[14px] inline-block font-IRANSans_FaNum">
                  {sp(sellPrice)}
                </p>
                <p className=" text-[14px] inline-block  mr-1">تومان</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* </Link> */}
      <div className="   bg-white \\   overflow-hidden  mx-auto  rounded-t-md shadow-sm  rounded-b-3xl lg:rounded-none ">
        {count == 0 ? (
          <button
            className="lg:w-[calc(100%-20px)] lg:my-2.5  font-bold h-12  w-full  text-sm  mx-auto items-center block lg:px-10  lg:bg-blue-600 lg:h-10  lg:rounded-xl rounded-b-3xl  lg:text-white text-blue-500 "
            onClick={() => {
              increaseHandeler(id);
            }}
          >
            افزودن به سبد خرید
          </button>
        ) : (
          <div className="  flex items-center   lg:py-1.5 justify-around  lg:border-0 bg-blue-500 lg:bg-white  child:text-white rounded-b-3xl ">
            <button
              className="  w-10 h-10  lg:border-[3px] lg:rounded-xl lg:text-green-700 text-3xl border-green-600 "
              onClick={() => {
                increaseHandeler(id);
              }}
            >
              <HiPlusSm className="w-full text-center" />
            </button>
            <span className=" text-xl font-IRANSans_FaNum lg:text-black h-12 xl:h-12 pt-2.5 ">
              {count}
            </span>
            <button
              className=" w-10 h-10 lg:border-[3px] lg:rounded-xl lg:text-red-700  border-red-600 "
              onClick={() => {
                decreaseHandeler(id);
              }}
            >
              <FaMinus className="w-full text-center" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
