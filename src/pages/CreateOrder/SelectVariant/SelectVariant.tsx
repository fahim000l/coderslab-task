import useTitle from "../../../hooks/useTitle";
import SelectVariantHeader from "./components/SelectVariantHeader";
import SelectVariantTable from "./components/SelectVariantTable";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../../tools/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { rootStateType } from "../../../app/store";
import toast from "react-hot-toast";
import {
  calculateTotalQuantity,
  removePendingVariants,
} from "../../../features/orders/ordersSlice";

const SelectVariant = () => {
  useTitle("Create Order | Select Variant");
  const navigate = useNavigate();
  const { selectedVariants } = useSelector(
    (state: rootStateType) => state.orders
  );
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-10">
      <SelectVariantHeader />
      <SelectVariantTable />
      <div className="ml-auto flex items-center gap-5">
        <CustomButton theme="error" onClick={() => navigate(-1)}>
          Back
        </CustomButton>
        <CustomButton
          onClick={() => {
            if (selectedVariants?.some((variant) => variant?.check === true)) {
              dispatch(calculateTotalQuantity());
              dispatch(removePendingVariants());
              navigate("/create-order/order-info");
            } else {
              toast?.error("You haven't selected any product");
            }
          }}
          theme="primary"
        >
          Next
        </CustomButton>
      </div>
    </div>
  );
};

export default SelectVariant;
