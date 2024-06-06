import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Products from "../pages/Products/Products";
import Orders from "../pages/Orders/Orders";

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
    ],
  },
]);

export default router;
