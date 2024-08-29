import React, { useContext } from "react";
import Order from "./Order";
import ShowProducts from "./Show-producs";
import { reducerContext } from "../../../../constant/Context";

const History = () => {
  const reducer = useContext(reducerContext);
  const [reduce, dispach] = reducer;
  return (
    <div className="mt-5 pb-20">
      {reduce.Show == true ? <ShowProducts /> : <Order />}
      {/*
      {reduce.Show == true ? <ShowProducts /> : <Order />}
      {reduce.Show == true ? <ShowProducts /> : <Order />}
      {reduce.Show == true ? <ShowProducts /> : <Order />}
      {reduce.Show == true ? <ShowProducts /> : <Order />} */}
    </div>
  );
};

export default History;
