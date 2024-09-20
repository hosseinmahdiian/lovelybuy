import { BrowserRouter } from "react-router-dom";
import Routers from "./router/Router";
import Layout from "./layout/Layout";
import { createContext, useEffect, useReducer, useState } from "react";
import { reducerContext } from "./constant/Context";
import Home from "./components/Home";
import { QueryClient, QueryClientProvider, useQueryClient } from "react-query";
import { FnReducer, init } from "./constant/Functions";
import NoInternet from "./components/NoInternet";

function App() {
  const [online, setOnline] = useState(window.navigator.onLine);
  useEffect(() => {
    setOnline(window.navigator.onLine);
  }, [window.navigator.onLine]);

  const reducer = useReducer(FnReducer, init);
  const QueryClint = new QueryClient({});

  return (
    <>
      <reducerContext.Provider value={reducer}>
        <QueryClientProvider client={QueryClint}>
          <BrowserRouter>
            {online ? (
                <Routers />
            ) : (
              <NoInternet />
            )}
          </BrowserRouter>
        </QueryClientProvider>
      </reducerContext.Provider>
    </>
  );
}

export default App;
// export { reducerContext };
