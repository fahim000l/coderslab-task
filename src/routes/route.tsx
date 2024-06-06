import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Products from "../pages/Products/Products";
import Orders from "../pages/Orders/Orders";
import CreateProduct from "../pages/CreateProduct/CreateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/create-product",
        element: <CreateProduct />,
      },
      {
        path: "/edit-product/:id",
        element: <CreateProduct />,
      },
    ],
  },
]);

export default router;
