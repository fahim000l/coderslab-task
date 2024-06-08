import CustomButton from "../../../../tools/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { rootStateType } from "../../../../app/store";
import { chooseProduct } from "../../../../features/orders/ordersSlice";

const SelectVariantHeader = () => {
  const { selectedProducts, choosedProduct } = useSelector(
    (state: rootStateType) => state?.orders
  );
  const dispatch = useDispatch();

  return (
    <div>
      <div className="dropdown">
        <CustomButton className="min-w-[140px]" theme="primary">
          {choosedProduct?.name || "Select Product"}
        </CustomButton>
        <ul
          tabIndex={0}
          className="dropdown-content rounded-sm border border-solid border-gray-500 bg-[#f1f1f1]  menu p-2 shadow  min-w-52 gap-2 z-[900]"
        >
          {selectedProducts?.map((product) => (
            <li
              onClick={() => dispatch(chooseProduct(product))}
              key={product?.id}
            >
              <CustomButton theme="primary">{product?.name}</CustomButton>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SelectVariantHeader;
