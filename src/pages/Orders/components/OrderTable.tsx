import { useEffect } from "react";
import { useGetOrdersQuery } from "../../../features/orders/ordersApi";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../../features/orders/ordersSlice";
import { rootStateType } from "../../../app/store";
import { orderType } from "../../../../utils/typs";
import OrderTableRow from "./OrderTableRow";

const OrderTable = () => {
  const { orders, currentPage, per_page, search } = useSelector(
    (state: rootStateType) => state.orders
  );

  const { data } = useGetOrdersQuery({
    page: currentPage,
    per_page,
    search,
  });
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(data?.data);
    const currentPage = data?.data?.current_page;
    const orders = data?.data?.data;
    dispatch(getOrders({ currentPage, orders }));
  }, [data]);

  return (
    <div className="h-[500px] overflow-y-scroll">
      <table
        style={{
          borderCollapse: "collapse",
        }}
        className="w-full"
      >
        <thead className="sticky top-0 z-50">
          <tr>
            <th
              scope="col"
              className="bg-[#0f9ed5] text-center text-white py-2 border border-solid border-[white] text-[14px]"
            >
              ID
            </th>
            <th
              scope="col"
              className="bg-[#0f9ed5] text-center text-white py-2 border border-solid border-[white] text-[14px]"
            >
              Name
            </th>
            <th
              scope="col"
              className="bg-[#0f9ed5] text-center text-white py-2 border border-solid border-[white] text-[14px]"
            >
              Email
            </th>
            <th
              scope="col"
              className="bg-[#0f9ed5] text-center text-white py-2 border border-solid border-[white] text-[14px]"
            >
              Address
            </th>
            <th
              scope="col"
              className="bg-[#0f9ed5] text-center text-white py-2 border border-solid border-[white] text-[14px]"
            >
              Total Quantity{" "}
            </th>
            <th
              scope="col"
              className="bg-[#0f9ed5] text-center text-white py-2 border border-solid border-[white] text-[14px]"
            >
              Created At{" "}
            </th>
            <th
              scope="col"
              className="bg-[#0f9ed5] text-center text-white py-2 border border-solid border-[white] text-[14px]"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((order: orderType, i: number) => (
            <OrderTableRow index={i} order={order} key={order?.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
