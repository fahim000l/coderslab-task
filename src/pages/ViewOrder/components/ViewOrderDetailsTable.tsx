import React, { useEffect, useState } from "react";
import ViewOrderDetailsTableRow from "./ViewOrderDetailsTableRow";
import {
  orderDatailsType,
  orderType,
  productType,
} from "../../../../utils/typs";
import { useGetProductByIdQuery } from "../../../features/products/productsApi";

interface props {
  order: orderType;
}

const ViewOrderDetailsTable = ({ order }: props) => {
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
              Variants
            </th>
          </tr>
        </thead>
        <tbody>
          {order?.details?.map((detail: orderDatailsType, i: number) => (
            <ViewOrderDetailsTableRow detail={detail} index={1} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewOrderDetailsTable;
