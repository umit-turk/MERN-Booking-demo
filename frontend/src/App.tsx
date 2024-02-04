import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout'
import './index.css';

let router = createBrowserRouter([
  {
    path: "/",
    loader: () => ({ message: "Hello Data Router!" }),
    element: <Layout><p>Home Page</p></Layout>
  }
])
function App() {

  return (
    <RouterProvider router={router} fallbackElement={<p>Loading...</p>}></RouterProvider>
  )
}

export default App
