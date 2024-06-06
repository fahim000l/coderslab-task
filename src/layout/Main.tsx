import { Link, Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";

const Main = () => {
  const { pathname } = useLocation();

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        {/* Page content here */}
        <Header
          title={`${
            pathname === "/"
              ? "Products"
              : pathname === "/orders"
              ? "Orders"
              : "Create Product"
          }`}
        />
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
        <ul className="menu p-4 w-40 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <Link to={"/"}>Products</Link>
          </li>
          <li>
            <Link to={"/orders"}>Orders</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Main;
