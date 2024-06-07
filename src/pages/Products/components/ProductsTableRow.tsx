import React from "react";
import CustomButton from "../../../tools/CustomButton";
import { productType } from "../../../../utils/typs";
import formatDate from "../../../../utils/format";
import { useNavigate } from "react-router-dom";
import { useGetProductByIdQuery } from "../../../features/products/productsApi";
import { useDispatch, useSelector } from "react-redux";
import {
  setDeletingProductId,
  setEditingProduct,
} from "../../../features/products/productsSlice";
import TrushIcon from "../../../tools/Icons/TrushIcon";
import EditIcon from "../../../tools/Icons/EditIcon";
import EyeIcon from "../../../tools/Icons/EyeIcon";
import { rootStateType } from "../../../app/store";

interface props {
  product: productType;
  index: number;
}

const ProductsTableRow = ({ product, index }: props) => {
  const { pageTitle } = useSelector((state: rootStateType) => state.main);
  const { brand, name, type, created_at = "", id = "" } = product;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data } = useGetProductByIdQuery(id);

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
      {pageTitle?.includes("|") ? (
        <td
          className={`text-center ${
            index % 2 === 0 ? "bg-[#ccdfef]" : "bg-[#e7f0f7]"
          } py-2 border border-solid border-[white] text-[12px]`}
        >
          <input type="checkbox" defaultChecked className="checkbox" />
        </td>
      ) : (
        <>
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
                <li
                  onClick={() => {
                    if (data?.data?.id) {
                      dispatch(setEditingProduct(data?.data));
                      navigate(`/edit-product/${id}`);
                    }
                  }}
                >
                  <CustomButton icon={<EditIcon />} theme="primary">
                    Edit
                  </CustomButton>
                </li>
                <li>
                  <CustomButton
                    icon={<TrushIcon />}
                    theme="error"
                    isModal={true}
                    onClick={() => dispatch(setDeletingProductId(id))}
                    htmlFor="customModal"
                  >
                    Delete
                  </CustomButton>
                </li>
              </ul>
            </div>
          </td>
        </>
      )}
    </tr>
  );
};

export default ProductsTableRow;
