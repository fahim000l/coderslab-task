import { useParams } from "react-router-dom";
import { useGetOrderByIdQuery } from "../../features/orders/ordersApi";
import { useEffect, useState } from "react";
import { orderType } from "../../../utils/typs";
import useTitle from "../../hooks/useTitle";
import ViewOrderDetailsTable from "./components/ViewOrderDetailsTable";

const ViewOrder = () => {
  useTitle("View Order");
  const { id } = useParams();
  const { data } = useGetOrderByIdQuery(id);
  const [order, setOrder] = useState<orderType | null>(null);

  useEffect(() => {
    console.log(data);
    if (data?.data?.id) {
      setOrder(data?.data);
    }
  }, [data]);

  return (
    <div>
      <div className="grid grid-cols-2 gap-5 w-[60%] mx-auto">
        <div className="flex items-center gap-2">
          <label className="font-semibold">Name :</label>
          <p>{order?.name}</p>
        </div>
        <div className="flex items-center gap-2">
          <label className="font-semibold">Email :</label>
          <p>{order?.email}</p>
        </div>
        <div className="flex items-center gap-2">
          <label className="font-semibold">Address :</label>
          <p>{order?.address}</p>
        </div>
        <div className="flex items-center gap-2">
          <label className="font-semibold">Total Quantity :</label>
          <p>{order?.total_quantity}</p>
        </div>
      </div>
      <div className="mt-10">
        <p className="text-center font-semibold text-lg mb-5">Details</p>
        <ViewOrderDetailsTable order={order as orderType} />
      </div>
    </div>
  );
};

export default ViewOrder;
