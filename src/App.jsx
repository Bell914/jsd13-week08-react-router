import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {path:"/",element:<Home/>},
      {path:"/about",element:<About/>},
      {path:"/products",element:<Product/>},
      {path:"product/:productId",element:<ProductDetails/>},
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router}/>;
}