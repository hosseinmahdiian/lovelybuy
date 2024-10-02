import { BrowserRouter } from "react-router-dom";
import Routers from "./router/Router";
import { createContext, useEffect, useReducer, useState } from "react";
import { reducerContext } from "./Users/constant/Context";
import { QueryClient, QueryClientProvider, useQueryClient } from "react-query";
import { FnReducer, init } from "./Users/constant/Functions";
import NoInternet from "./Users/components/NoInternet";

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
