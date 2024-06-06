import React from "react";
import CustomButton from "../../../tools/CustomButton";
import { useSelector } from "react-redux";
import { rootStateType } from "../../../app/store";
import { productType } from "../../../../utils/typs";
import ProductsTableRow from "./ProductsTableRow";

const ProductsTable = () => {
  const { products } = useSelector((state: rootStateType) => state.products);

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
              Created At
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
          {products?.map((product: productType) => (
            <ProductsTableRow product={product} key={product?.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
