import { Link, Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetOrderedProducts } from "../features/orders/ordersSlice";
import CustomButton from "../tools/CustomButton";

const Main = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!pathname?.includes("view-order")) {
      dispatch(resetOrderedProducts());
    }
  }, [pathname]);

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        {/* Page content here */}
        <Header />
        <div className="p-10">
          <Outlet />
        </div>
        {/* <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label> */}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="p-4 w-40 min-h-full bg-base-200 text-base-content flex flex-col gap-2">
          {/* Sidebar content here */}
          <li>
            <Link to={"/"}>
              <CustomButton className="w-full" theme="secondary">
                Products
              </CustomButton>
            </Link>
          </li>
          <li>
            <Link to={"/orders"}>
              <CustomButton className="w-full" theme="secondary">
                Orders
              </CustomButton>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Main;
