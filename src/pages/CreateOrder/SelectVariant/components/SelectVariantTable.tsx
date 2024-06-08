import { useEffect, useState } from "react";
import SelectVariantTableRow from "./SelectVariantTableRow";
import { useSelector } from "react-redux";
import { rootStateType } from "../../../../app/store";
import { useGetProductByIdQuery } from "../../../../features/products/productsApi";
import { varientType } from "../../../../../utils/typs";

const SelectVariantTable = () => {
  const { choosedProduct } = useSelector(
    (state: rootStateType) => state.orders
  );

  const { data } = useGetProductByIdQuery(choosedProduct?.id);
  const [variants, setVariants] = useState([]);

  useEffect(() => {
    console.log(data);
    setVariants(data?.data?.variants);
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
              Color
            </th>
            <th
              scope="col"
              className="bg-[#0f9ed5] text-center text-white py-2 border border-solid border-[white] text-[14px]"
            >
              Specification
            </th>
            <th
              scope="col"
              className="bg-[#0f9ed5] text-center text-white py-2 border border-solid border-[white] text-[14px]"
            >
              Size
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
              Select
            </th>
          </tr>
        </thead>
        <tbody>
          {variants?.map((variant: varientType, i: number) => (
            <SelectVariantTableRow variant={variant} index={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SelectVariantTable;
