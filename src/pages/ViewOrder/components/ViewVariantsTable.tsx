import React from "react";
import VIewVariantsTableRow from "./VIewVariantsTableRow";
import { productType, varientType } from "../../../../utils/typs";

interface props {
  variant: varientType;
  product: productType;
}

const ViewVariantsTable = ({ variant, product }: props) => {
  console.log(variant);
  return (
    <div>
      <div className="mb-5">
        <p className="flex items-center gap-2 text-sm">
          <span className="font-semibold">Product Id :</span>
          <span>{product?.id}</span>
        </p>
        <p className="flex items-center gap-2 text-sm">
          <span className="font-semibold">Product Name :</span>
          <span>{product?.name}</span>
        </p>
      </div>
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
                Color
              </th>
              <th
                scope="col"
                className="bg-[#0f9ed5] text-center text-white py-2 border border-solid border-[white] text-[14px]"
              >
                SP
              </th>
              <th
                scope="col"
                className="bg-[#0f9ed5] text-center text-white py-2 border border-solid border-[white] text-[14px]"
              >
                Size
              </th>
            </tr>
          </thead>
          <tbody>
            <VIewVariantsTableRow index={1} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewVariantsTable;
