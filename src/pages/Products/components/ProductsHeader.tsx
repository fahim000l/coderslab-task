import CustomButton from "../../../tools/CustomButton";
import CustomInput from "../../../tools/CustomInput";
import SearchIcon from "../../../tools/Icons/SearchIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  searchProducts,
  setEditingProduct,
} from "../../../features/products/productsSlice";
import { Link } from "react-router-dom";
import { rootStateType } from "../../../app/store";

const ProductsHeader = () => {
  const disPatch = useDispatch();

  const { pageTitle } = useSelector((state: rootStateType) => state.main);
  return (
    <div className="flex items-center justify-between">
      {!pageTitle?.includes("|") && (
        <Link
          onClick={() => disPatch(setEditingProduct(null))}
          to={"/create-product"}
        >
          <CustomButton theme="primary">Create</CustomButton>
        </Link>
      )}
      <CustomInput
        onChange={(e: any) => disPatch(searchProducts(e.target.value))}
        icon={<SearchIcon />}
        placeholder="Search"
      />
    </div>
  );
};

export default ProductsHeader;
