import React, { useEffect, useState } from "react";
import ViewOrderDetailsTableRow from "./ViewOrderDetailsTableRow";
import { orderDatailsType, orderType } from "../../../../utils/typs";
import { useDispatch, useSelector } from "react-redux";
import { setOrderdProducts } from "../../../features/orders/ordersSlice";
import { rootStateType } from "../../../app/store";
interface props {
  order: orderType;
}

const ViewOrderDetailsTable = ({ order }: props) => {
  console.log(order);
  const dispatch = useDispatch();
  useEffect(() => {
    order?.details?.forEach((detail) => {
      dispatch(setOrderdProducts(detail?.variant?.product_id as number));
    });
  }, [order]);
  const { orderedProducts } = useSelector(
    (state: rootStateType) => state.orders
  );

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
              Brand
            </th>
            <th
              scope="col"
              className="bg-[#0f9ed5] text-center text-white py-2 border border-solid border-[white] text-[14px]"
            >
              Type
            </th>
            <th
              scope="col"
              className="bg-[#0f9ed5] text-center text-white py-2 border border-solid border-[white] text-[14px]"
            >
              Quantity
            </th>
            <th
              scope="col"
              className="bg-[#0f9ed5] text-center text-white py-2 border border-solid border-[white] text-[14px]"
            >
              Variants
            </th>
          </tr>
        </thead>
        <tbody>
          {orderedProducts?.map((id: number, i: number) => (
            <ViewOrderDetailsTableRow
              productId={id}
              details={order?.details}
              index={i}
              key={i}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewOrderDetailsTable;
