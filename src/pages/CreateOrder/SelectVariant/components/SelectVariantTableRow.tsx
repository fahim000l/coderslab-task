import React, { useState } from "react";
import { varientType } from "../../../../../utils/typs";
import CustomInput from "../../../../tools/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { selectVariant } from "../../../../features/orders/ordersSlice";
import { rootStateType } from "../../../../app/store";

interface props {
  index: number;
  variant: varientType;
}

const SelectVariantTableRow = ({ index, variant }: props) => {
  const { color, size, specification, id } = variant;
  const dispatch = useDispatch();
  const { selectedVariants } = useSelector(
    (state: rootStateType) => state?.orders
  );
  const [quantity, setQuantity] = useState<number | undefined>(
    selectedVariants?.find((variant) => variant?.variant_id === id)?.quantity
  );

  return (
    <tr>
      <td
        className={`text-center ${
          index % 2 === 0 ? "bg-[#ccdfef]" : "bg-[#e7f0f7]"
        } py-2 border border-solid border-[white] text-[12px]`}
      >
        {id}
      </td>
      <td
        className={`text-center ${
          index % 2 === 0 ? "bg-[#ccdfef]" : "bg-[#e7f0f7]"
        } py-2 border border-solid border-[white] text-[12px]`}
      >
        {color}
      </td>
      <td
        className={`text-center ${
          index % 2 === 0 ? "bg-[#ccdfef]" : "bg-[#e7f0f7]"
        } py-2 border border-solid border-[white] text-[12px]`}
      >
        {specification?.length > 20 ? (
          <div className="dropdown">
            <div tabIndex={0} role="button">
              {specification?.slice(0, 20) + "..."}
            </div>
            <div
              tabIndex={0}
              className="dropdown-content rounded-sm border border-solid border-gray-500 bg-[#f1f1f1] z-[1] menu p-2 shadow bg-base-100 rounded-box min-w-52 gap-2 z-[900] text-start"
            >
              {specification}
            </div>
          </div>
        ) : (
          specification
        )}
      </td>
      <td
        className={`text-center ${
          index % 2 === 0 ? "bg-[#ccdfef]" : "bg-[#e7f0f7]"
        } py-2 border border-solid border-[white] text-[12px]`}
      >
        {size}
      </td>
      <td
        className={`text-center ${
          index % 2 === 0 ? "bg-[#ccdfef]" : "bg-[#e7f0f7]"
        } py-2 border border-solid border-[white] text-[12px]`}
      >
        <CustomInput
          value={`${
            selectedVariants?.find((variant) => variant?.variant_id === id)
              ?.quantity ||
            quantity ||
            ""
          }`}
          onChange={(e) => {
            // if (typeof e.target.value === "number") {
            setQuantity(parseInt(e?.target?.value));
            // }
          }}
          placeholder="Quantity"
          className="w-[100px] mx-auto"
        />
      </td>
      <td
        className={`text-center ${
          index % 2 === 0 ? "bg-[#ccdfef]" : "bg-[#e7f0f7]"
        } py-2 border border-solid border-[white] text-[12px]`}
      >
        <input
          onClick={() => {
            dispatch(
              selectVariant({
                quantity: quantity as number,
                variant_id: id as number,
              })
            );
            setQuantity(undefined);
          }}
          checked={selectedVariants?.some(
            (variant) => variant?.variant_id === id
          )}
          type="checkbox"
          className="checkbox"
        />
      </td>
    </tr>
  );
};

export default SelectVariantTableRow;
