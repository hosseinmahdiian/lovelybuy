import { BrowserRouter } from "react-router-dom";
import Routers from "./router/Router";
import Layout from "./layout/Layout";
import { createContext, useReducer } from "react";
import { reducerContext } from "./constant/Context";

function App() {
  const FnReducer = (state, action) => {
    switch (action.type) {
      case "acconte":
        return {
          ...state,
          acconte: !state.acconte,
        };

      case "logIn":
        return {
          ...state,
          logIn: !state.logIn,
        };

      default:
        break;
    }
  };
  const init = {
    acconte: false,
    logIn: false,
  };
  const reducer = useReducer(FnReducer, init);
  return (
    <>
      <reducerContext.Provider value={reducer}>
        <BrowserRouter>
          <Layout />
          {/* <Routers /> */}
        </BrowserRouter>
      </reducerContext.Provider>
    </>
  );
}

export default App;
// export { reducerContext };
