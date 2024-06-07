import React from "react";
import useTitle from "../../../hooks/useTitle";
import ProductsTable from "../../Products/components/ProductsTable";
import Pagination from "../../../components/Pagination";

const SelectProduct = () => {
  useTitle("Create Order | Select Product");

  return (
    <div className="flex flex-col gap-10">
      <ProductsTable />
      <Pagination />
    </div>
  );
};

export default SelectProduct;
