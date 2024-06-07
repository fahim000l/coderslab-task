import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Products from "../pages/Products/Products";
import Orders from "../pages/Orders/Orders";
import CreateProduct from "../pages/CreateProduct/CreateProduct";
import ViewProduct from "../pages/ViewProduct/ViewProduct";
import SelectProduct from "../pages/CreateOrder/SelectProduct/SelectProduct";

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
        path: "/create-product",
        element: <CreateProduct />,
      },
      {
        path: "/edit-product/:id",
        element: <CreateProduct />,
      },
      {
        path: "/view-product/:id",
        element: <ViewProduct />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/create-order/select-product",
        element: <SelectProduct />,
      },
    ],
  },
]);

export default router;
