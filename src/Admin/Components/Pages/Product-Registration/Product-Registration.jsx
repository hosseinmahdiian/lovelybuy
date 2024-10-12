import { Link, NavLink, useNavigate } from "react-router-dom";
import Product from "./product";
import { GetProducts } from "../../../services/Products";
import { useQuery } from "react-query";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { getCurrentAdmin } from "../../../auth/localStoreage";

const ProductRegistration = () => {
  const { isLoading, data } = useQuery(["get-products"], GetProducts);
  const [tost, setTost] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);
  // console.log(data);
 const navigate = useNavigate();

 useEffect(() => {
   if (!localStorage.getItem("authAdmin")) {
     navigate("/admin/loginAdmin");
   } else {
     getCurrentAdmin("authAdmin");
   }
 }, []);
  tost && toast.success("محصول اضافه شد");

  return (
    <div className="relative max-h-screen min-h-screen max-w-2xl mx-auto">
      <div className="flex items-center mt-3  gap-3 mx-4">
        <div className="relative w-[calc(100%-66px)] ">
          <input
            className="peer border px-5 rounded-[10px] outline-gray-300 h-14 w-full "
            placeholder=" "
            type="text"
            name="search"
            id="search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setFilter(
                data?.data.data.filter((item) =>
                  item?.name?.includes(e.target.value)
                )
              );
            }}
          />
          {/* {console.log(filter)} */}
          <label
            htmlFor="search"
            className={`absolute start-1 IrHomama  rounded-2xl transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2 ${
              !!search ? ` start-2.5 -top-2 text-sm` : `top-4 `
            }`}
          >
            جستجو محصول
          </label>
        </div>
        {search && (
          <NavLink
            to="/admin/AddProdoct"
            className="border pt-1  text-gray-600  border-opacity-5 rounded-[10px] bg-white h-14 w-14 text-2xl font-bold  flex items-center justify-center "
          >
            +
          </NavLink>
        )}
      </div>

      <div className=" mx-5 mt-5">
        {!!search ? (
          filter?.length > 0 ? (
            filter?.map((item) => (
              <Link to={`/admin/ChargeProduct/${item.id}`} key={item.id}>
                <Product data={item} />
              </Link>
            ))
          ) : (
            <p>محصول با این نام وجود ندارد</p>
          )
        ) : (
          <div>
            <p>فبل از اضافه کردن محصول آن را سرچ کنید</p>
          </div>
        )}
      </div>

      {/* <Counter /> */}
    </div>
  );
};

export default ProductRegistration;
