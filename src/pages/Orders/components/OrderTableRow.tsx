import React from "react";
import CustomButton from "../../../tools/CustomButton";
import { useNavigate } from "react-router-dom";
import EyeIcon from "../../../tools/Icons/EyeIcon";
import { orderType } from "../../../../utils/typs";
import EditIcon from "../../../tools/Icons/EditIcon";
import TrushIcon from "../../../tools/Icons/TrushIcon";
import formatDate from "../../../../utils/format";

interface props {
  order: orderType;
  index: number;
}

const OrderTableRow = ({ order, index }: props) => {
  const navigate = useNavigate();

  const { id, name, email, address, total_quantity, created_at } = order;

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
        {email}
      </td>
      <td
        className={`text-center ${
          index % 2 === 0 ? "bg-[#ccdfef]" : "bg-[#e7f0f7]"
        } py-2 border border-solid border-[white] text-[12px]`}
      >
        {address}
      </td>
      <td
        className={`text-center ${
          index % 2 === 0 ? "bg-[#ccdfef]" : "bg-[#e7f0f7]"
        } py-2 border border-solid border-[white] text-[12px]`}
      >
        {total_quantity}
      </td>
      <td
        className={`text-center ${
          index % 2 === 0 ? "bg-[#ccdfef]" : "bg-[#e7f0f7]"
        } py-2 border border-solid border-[white] text-[12px]`}
      >
        {formatDate(new Date(created_at as string))}
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
          <CustomButton theme="primary">Manage</CustomButton>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 gap-2"
          >
            <li onClick={() => navigate(`/view-product/${id}`)}>
              <CustomButton icon={<EyeIcon />} theme="primary">
                View
              </CustomButton>
            </li>
            <li>
              <CustomButton icon={<EditIcon />} theme="primary">
                Edit
              </CustomButton>
            </li>
            <li>
              <CustomButton
                icon={<TrushIcon />}
                theme="error"
                isModal={true}
                htmlFor="customModal"
              >
                Delete
              </CustomButton>
            </li>
          </ul>
        </div>
      </td>
    </tr>
  );
};

export default OrderTableRow;
