import React, { useContext } from "react";
import Acconut from "./Account";
import MainPage from "./MainPage";

import { reducerContext } from "../Context/Context";

const HomeAdmin = () => {
  const reducer = useContext(reducerContext);
  const [reduce, dispach] = reducer;
  return <MainPage />;
};

export default HomeAdmin;
