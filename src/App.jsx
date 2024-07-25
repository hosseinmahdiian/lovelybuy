import { BrowserRouter } from "react-router-dom";
import Routers from "./router/Router";
import Layout from "./layout/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout className="container">
          <Routers />
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
