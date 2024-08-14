import React, { useReducer } from "react";
import { reducerContext } from "../../constant/Context";
import Acconut from "./Accont";
import AcccountLogin from "./Acccount-Login";
import Vrify from "./Vrify";
import NewAccount from "./NewAccount";
import SinUp from "./SinUp";
import ChengPass from "./ChengPass";

const Pages = () => {
  const init = {
    Account: false,
    SinUp: false,
    Login: false,
    Vrify: false,
    ChengPass: false,
    NewAccount: false,
  };

  const reducerFN = () => {
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

  const [informationAccount, dispacher] = useReducer(reducerFN, init);
  return (
    <div className="h-full">
      {/* <Acconut /> */}
      {/* <Vrify/> */}
      {/* <NewAccount/> */}
      {/* <SinUp/> */}
      {/* <ChengPass/> */}
      {/* <AcccountLogin/> */}
    </div>
  );
};

export default Pages;
