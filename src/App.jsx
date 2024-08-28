import { BrowserRouter } from "react-router-dom";
import Routers from "./router/Router";
import Layout from "./layout/Layout";
import { createContext, useReducer } from "react";
import { reducerContext } from "./constant/Context";
import Home from "./components/Home";
import { QueryClient, QueryClientProvider, useQueryClient } from "react-query";
import { FnReducer, init } from "./constant/Functions";

function App() {


  const reducer = useReducer(FnReducer, init);

  const QueryClint = new QueryClient({})
  return (
    <>
      <reducerContext.Provider value={reducer}>
        <QueryClientProvider client={QueryClint}>
          <BrowserRouter>
            <Layout>
              <Routers />
            </Layout>
          </BrowserRouter>
        </QueryClientProvider>
      </reducerContext.Provider>
    </>
  );
}

export default App;
// export { reducerContext };
