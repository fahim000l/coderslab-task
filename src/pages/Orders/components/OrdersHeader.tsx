import { Link } from "react-router-dom";
import CustomButton from "../../../tools/CustomButton";
import CustomInput from "../../../tools/CustomInput";
import SearchIcon from "../../../tools/Icons/SearchIcon";
import { useDispatch } from "react-redux";
import { searchOrder } from "../../../features/orders/ordersSlice";

const OrdersHeader = () => {
  const disPatch = useDispatch();
  return (
    <div className="flex items-center justify-between">
      <Link
        // onClick={() => disPatch(setEditingProduct(null))}
        to={"/create-order/select-product"}
      >
        <CustomButton theme="primary">Create</CustomButton>
      </Link>
      <CustomInput
        onChange={(e: any) => disPatch(searchOrder(e.target.value))}
        icon={<SearchIcon />}
        placeholder="Search"
      />
    </div>
  );
};

export default OrdersHeader;
