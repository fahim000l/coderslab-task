import React from "react";
import CustomButton from "../../../tools/CustomButton";
import CustomInput from "../../../tools/CustomInput";
import SearchIcon from "../../../tools/Icons/SearchIcon";
import { useDispatch } from "react-redux";
import { searchProducts } from "../../../features/products/productsSlice";

const ProductsHeader = () => {
  const disPatch = useDispatch();
  return (
    <div className="flex items-center justify-between">
      <CustomButton>Create</CustomButton>
      <CustomInput
        onChange={(e: any) => disPatch(searchProducts(e.target.value))}
        icon={<SearchIcon />}
        placeholder="Search"
      />
    </div>
  );
};

export default ProductsHeader;
