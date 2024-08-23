import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import Order from "./Order"
import ShowProducts from "./Show-producs";

const History = ( {data,dispach}) => {
  return (
    <div className="mt-5 pb-4">
      {data.Show == true ? (
        <ShowProducts dispach={dispach} />
      ) : (
        <Order dispach={dispach} data={data} />
      )}

      {data.Show == true ? (
        <ShowProducts dispach={dispach} />
      ) : (
        <Order dispach={dispach} data={data} />
      )}
      {data.Show == true ? (
        <ShowProducts dispach={dispach} />
      ) : (
        <Order dispach={dispach} data={data} />
      )}
      {data.Show == true ? (
        <ShowProducts dispach={dispach} />
      ) : (
        <Order dispach={dispach} data={data} />
      )}
      {data.Show == true ? (
        <ShowProducts dispach={dispach} />
      ) : (
        <Order dispach={dispach} data={data} />
      )}
      {data.Show == true ? (
        <ShowProducts dispach={dispach} />
      ) : (
        <Order dispach={dispach} data={data} />
      )}
    </div>
  );
};

export default History;
