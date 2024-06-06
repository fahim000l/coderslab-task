import React from "react";
import CustomButton from "../../tools/CustomButton";
import ProductsHeader from "./components/ProductsHeader";
import ProductsTable from "./components/ProductsTable";
import Pagination from "../../components/Pagination";

const Products = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-10">
        <ProductsHeader />
        <ProductsTable />
      </div>
      <Pagination />
    </div>
  );
};

export default Products;
