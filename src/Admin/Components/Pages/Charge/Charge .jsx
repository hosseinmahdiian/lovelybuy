import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMaximize } from "react-icons/fi";
import Product from "./product";
import { useQuery } from "react-query";
import { GetProducts } from "../../../services/Products";
const Charge = () => {
  const { isLoading, data } = useQuery(["get-products"], GetProducts);
  const [tost, setTost] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);

  return (
    <div className="relative h-screen max-w-2xl mx-auto">
      <div className="h-[calc(100vh-100px)] overflow-y-auto ">
        <div className="flex items-center mt-3   mx-2 gap-2">
          <div className="relative   w-[calc(100%-66px)]  ">
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
                    item.name.includes(e.target.value)
                  )
                );
              }}
            />
            <label
              htmlFor="search"
              className={`absolute start-1 IrHomama  rounded-2xl transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2 ${
                !!search ? ` start-2.5 -top-2 text-sm` : `top-4 `
              }`}
            >
              جستجو محصول
            </label>
          </div>
          <NavLink className="border border-black border-opacity-5 rounded-[10px] bg-white h-14 w-14 text-center pt-2 text-2xl font-bold ">
            <FiMaximize className="inline-block text-gray-600 mt-1 text-center" />
          </NavLink>
        </div>

        <div className="mt-6 mx-4">
          {!!search ? (
            filter.map((item) => (
              <NavLink to={`/ChargeProduct/${item.id}`} key={item.id}>
                <Product data={item} />
              </NavLink>
            ))
          ) : (
            <div>
              <p>فبل از اضافه کردن محصول آن را سرچ کنید</p>
            </div>
          )}
        </div>
      </div>
      {/* <Counter /> */}
    </div>
  );
};

export default Charge;
