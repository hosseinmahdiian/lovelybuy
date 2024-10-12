import React, { useContext, useEffect, useState } from "react";
import { MainData } from "../Constant/DataDets";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { reducerContext } from "../Context/Context";
import { getCurrentAdmin } from "../auth/localStoreage";

const HomeAdmin = () => {
  const reducer = useContext(reducerContext);
  const [reduce, dispach] = reducer;
  const [data, setData] = useState(MainData);
    const navigate = useNavigate();

 useEffect(() => {
   if (!localStorage.getItem("authAdmin")) {
     navigate("/admin/loginAdmin");
   }else{
    getCurrentAdmin("authAdmin");
   }
 }, []);

  return (
    <div className="mb-28 mt-4 pt-4 max-w-2xl mx-auto">
      {data.map((item, index) => (
        // console.log(`${item.name}.jsx`)
        <NavLink
          to={`/${item.name}`}
          key={index}
          name={item.name}
          className="w-11/12 mx-auto border rounded-[20px] flex justify-between items-center py-4 pr-3 my-2 bg-white "
        >
          <h2>{item.title}</h2>
          <span className="w-8 h-8  py-2">
            <MdOutlineArrowBackIos />
          </span>
        </NavLink>
      ))}
    </div>
  );
};

export default HomeAdmin;
