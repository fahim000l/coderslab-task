import React from "react";
import {
  orderDatailsType,
  orderType,
  varientType,
} from "../../../../utils/typs";

interface props {
  index: number;
  variant: orderDatailsType;
}

const VIewVariantsTableRow = ({ index, variant }: props) => {
  const { variant: varientRow } = variant;

  return (
    <tr>
      <td
        className={`text-center ${
          index % 2 === 0 ? "bg-[#ccdfef]" : "bg-[#e7f0f7]"
        } py-2 border border-solid border-[white] text-[12px]`}
      >
        {/* {id} */}
        {varientRow?.id}
      </td>
      <td
        className={`text-center ${
          index % 2 === 0 ? "bg-[#ccdfef]" : "bg-[#e7f0f7]"
        } py-2 border border-solid border-[white] text-[12px]`}
      >
        {/* {id} */}
        {varientRow?.color}
      </td>
      <td
        className={`text-center ${
          index % 2 === 0 ? "bg-[#ccdfef]" : "bg-[#e7f0f7]"
        } py-2 border border-solid border-[white] text-[12px]`}
      >
        {/* {id} */}
        {varientRow?.specification && varientRow?.specification?.length > 20 ? (
          <div className="dropdown">
            <div tabIndex={0} role="button">
              {varientRow?.specification?.slice(0, 20) + "..."}
            </div>
            <div
              tabIndex={0}
              className="dropdown-content rounded-sm border border-solid border-gray-500 bg-[#f1f1f1] menu p-2 shadow  min-w-52 gap-2 z-[900] text-start"
            >
              {varientRow?.specification}
            </div>
          </div>
        ) : (
          varientRow?.specification
        )}
      </td>
      <td
        className={`text-center ${
          index % 2 === 0 ? "bg-[#ccdfef]" : "bg-[#e7f0f7]"
        } py-2 border border-solid border-[white] text-[12px]`}
      >
        {/* {id} */}
        {varientRow?.size}
      </td>
      <td
        className={`text-center ${
          index % 2 === 0 ? "bg-[#ccdfef]" : "bg-[#e7f0f7]"
        } py-2 border border-solid border-[white] text-[12px]`}
      >
        {/* {id} */}
        {variant?.quantity}
      </td>
    </tr>
  );
};

export default VIewVariantsTableRow;
