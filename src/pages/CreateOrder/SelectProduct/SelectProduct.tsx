import React from "react";
import useTitle from "../../../hooks/useTitle";
import ProductsTable from "../../Products/components/ProductsTable";
import Pagination from "../../../components/Pagination";
import Products from "../../Products/Products";

const SelectProduct = () => {
  useTitle("Create Order | Select Product");

  return <Products />;
};

export default SelectProduct;
