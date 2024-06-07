import React from "react";
import CustomButton from "../../../tools/CustomButton";
import CustomInput from "../../../tools/CustomInput";
import SearchIcon from "../../../tools/Icons/SearchIcon";
import { useDispatch } from "react-redux";
import {
  searchProducts,
  setEditingProduct,
} from "../../../features/products/productsSlice";
import { Link } from "react-router-dom";

const ProductsHeader = () => {
  const disPatch = useDispatch();
  return (
    <div className="flex items-center justify-between">
      <Link
        onClick={() => disPatch(setEditingProduct(null))}
        to={"/create-product"}
      >
        <CustomButton theme="primary">Create</CustomButton>
      </Link>
      <CustomInput
        onChange={(e: any) => disPatch(searchProducts(e.target.value))}
        icon={<SearchIcon />}
        placeholder="Search"
      />
    </div>
  );
};

export default ProductsHeader;
