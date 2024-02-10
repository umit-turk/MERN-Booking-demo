import { RouterProvider } from "react-router-dom";
import { router } from './Routes';
import "./index.css";


function App() {
  return (
    <RouterProvider
      router={router}
      fallbackElement={<p>Loading...</p>}
    ></RouterProvider>
  );
}

export default App;
