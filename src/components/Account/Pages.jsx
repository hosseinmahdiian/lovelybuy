import React, { useContext, useEffect, useReducer } from "react";
import { reducerContext } from "../../constant/Context";
import Acconut from "./Accont";
import AcccountLogin from "./Acccount-Login";
import Vrify from "./Vrify";
import NewAccount from "./NewAccount";
import SinUp from "./SinUp";
import ChengPass from "./ChengPass";

const Pages = () => {
  const init = {
    Account: true,
    AcconutHave: false,
    SinUp: false,
    Login: false,
    Vrify: false,
    ChengPass: false,
    NewAccount: false,
  };

  const reducerFN = (state, action) => {
    switch (action.type) {
      case "Account":
        return {
          ...state,
          Account: !state.Account,
        };

      case "SinUp":
        return {
          ...state,
          SinUp: !state.SinUp,
        };

      case "Vrify":
        return {
          ...state,
          Vrify: !state.Vrify,
        };

      case "Login":
        return {
          ...state,
          Login: !state.Login,
        };

      case "ChengPass":
        return {
          ...state,
          ChengPass: !state.ChengPass,
        };

      case "NewAccount":
        return {
          ...state,
          NewAccount: !state.NewAccount,
        };
      default:
        break;
    }
  };

  const info = useReducer(reducerFN, init);
  const [data, dispach] = info;

  const reducer = useContext(reducerContext);
  const [reduce, dispachre] = reducer;

  useEffect(() => {
    if(reduce.logIn){
    document.documentElement.classList.add("overflow-y-hidden");
   }else {
      document.documentElement.classList.remove("overflow-y-hidden");
    };
  }, [reduce.logIn]);
  // console.log({ dispach });

  //  dispach({ type: "Account" });
  return (
    <div className="h-full overflow-y-scroll delivery bg-white ">
      <Acconut data={data} dispach={dispach} />
      <Vrify data={data} dispach={dispach} />
      <NewAccount data={data} dispach={dispach} />
      <SinUp data={data} dispach={dispach} />
      <ChengPass data={data} dispach={dispach} />
      <AcccountLogin data={data} dispach={dispach} />
    </div>
  );
};

export default Pages;
