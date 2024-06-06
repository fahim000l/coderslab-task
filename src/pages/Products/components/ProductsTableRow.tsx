import React from "react";
import CustomButton from "../../../tools/CustomButton";
import { productType } from "../../../../utils/typs";
import formatDate from "../../../../utils/format";

interface props {
  product: productType;
}

const ProductsTableRow = ({ product }: props) => {
  const { brand, name, type, orizin, created_at, id } = product;

  return (
    <tr>
      <td className="text-center bg-[#ccdfef] py-2 border border-solid border-[white] text-[12px]">
        {id}
      </td>
      <td className="text-center bg-[#ccdfef] py-2 border border-solid border-[white] text-[12px]">
        {name}
      </td>
      <td className="text-center bg-[#ccdfef] py-2 border border-solid border-[white] text-[12px]">
        {brand}
      </td>
      <td className="text-center bg-[#ccdfef] py-2 border border-solid border-[white] text-[12px]">
        {type}
      </td>
      <td className="text-center bg-[#ccdfef] py-2 border border-solid border-[white] text-[12px]">
        {formatDate(new Date(created_at))}
      </td>
      <td className="text-center bg-[#ccdfef] py-2 border border-solid border-[white] text-[12px]">
        <div className="dropdown dropdown-end">
          {/* <div tabIndex={0} role="button" className="btn m-1">
          Click
        </div> */}
          <CustomButton>Click</CustomButton>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 gap-2"
          >
            <li>
              <CustomButton>View</CustomButton>
            </li>
            <li>
              <CustomButton>Edit</CustomButton>
            </li>
            <li>
              <CustomButton>Delete</CustomButton>
            </li>
          </ul>
        </div>
      </td>
    </tr>
  );
};

export default ProductsTableRow;
