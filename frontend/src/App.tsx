import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import "./index.css";
import Register from "./pages/Register";

let router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <p>Home Page</p>
      </Layout>
    ),
  },
  {
    path: "/register",
    element: (
      <Layout>
        <Register />
      </Layout>
    ),
  },
]);
function App() {
  return (
    <RouterProvider
      router={router}
      fallbackElement={<p>Loading...</p>}
    ></RouterProvider>
  );
}

export default App;
