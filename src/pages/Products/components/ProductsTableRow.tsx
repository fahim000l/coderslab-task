import React from "react";
import CustomButton from "../../../tools/CustomButton";
import { productType } from "../../../../utils/typs";
import formatDate from "../../../../utils/format";
import { useNavigate } from "react-router-dom";

interface props {
  product: productType;
  index: number;
}

const ProductsTableRow = ({ product, index }: props) => {
  const { brand, name, type, origin, created_at = "", id = "" } = product;
  const navigate = useNavigate();

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
        {name}
      </td>
      <td
        className={`text-center ${
          index % 2 === 0 ? "bg-[#ccdfef]" : "bg-[#e7f0f7]"
        } py-2 border border-solid border-[white] text-[12px]`}
      >
        {brand}
      </td>
      <td
        className={`text-center ${
          index % 2 === 0 ? "bg-[#ccdfef]" : "bg-[#e7f0f7]"
        } py-2 border border-solid border-[white] text-[12px]`}
      >
        {type}
      </td>
      <td
        className={`text-center ${
          index % 2 === 0 ? "bg-[#ccdfef]" : "bg-[#e7f0f7]"
        } py-2 border border-solid border-[white] text-[12px]`}
      >
        {formatDate(new Date(created_at))}
      </td>
      <td
        className={`text-center ${
          index % 2 === 0 ? "bg-[#ccdfef]" : "bg-[#e7f0f7]"
        } py-2 border border-solid border-[white] text-[12px]`}
      >
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
            <li onClick={() => navigate(`/edit-product/${id}`)}>
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
