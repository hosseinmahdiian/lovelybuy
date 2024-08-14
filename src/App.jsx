import { BrowserRouter } from "react-router-dom";
import Routers from "./router/Router";
import Layout from "./layout/Layout";
import { createContext, useReducer } from "react";
import { reducerContext } from "./constant/Context";
import Home from "./components/Home";

function App() {
  const FnReducer = (state, action) => {
    switch (action.type) {
      case "acconut":
        return {
          ...state,
          acconut: !state.acconut,
        };

      case "logIn":
        return {
          ...state,
          logIn: !state.logIn,
        };

      case "basket":
        return {
          ...state,
          basket: !state.basket,
        };

      case "pay":
        return {
          ...state,
          pay: !state.pay,
        };

      case "successful":
        return {
          ...state,
          successful: !state.successful,
        };

      case "save":
        return {
          ...state,
          save: !state.save,
        };
      default:
        break;
    }
  };
  const init = {
    acconut: false,
    logIn: false,
    basket: false,
    pay: false,
    successful: false,
    save: false,
  };

  const reducer = useReducer(FnReducer, init);
  return (
    <>
      <reducerContext.Provider value={reducer}>
        <BrowserRouter>
          <Layout>
            {/* <Home /> */}
            <Routers />
          </Layout>
        </BrowserRouter>
      </reducerContext.Provider>
    </>
  );
}

export default App;
// export { reducerContext };
