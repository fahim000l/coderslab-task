import React from "react";
import OrdersHeader from "./components/OrdersHeader";
import OrderTable from "./components/OrderTable";
import useTitle from "../../hooks/useTitle";

const Orders = () => {
  useTitle("Orders List");

  return (
    <div className="flex flex-col gap-10">
      <OrdersHeader />
      <OrderTable />
    </div>
  );
};

export default Orders;
