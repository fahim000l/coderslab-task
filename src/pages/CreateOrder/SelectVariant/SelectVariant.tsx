import React from "react";
import useTitle from "../../../hooks/useTitle";
import SelectVariantHeader from "./components/SelectVariantHeader";
import SelectVariantTable from "./components/SelectVariantTable";

const SelectVariant = () => {
  useTitle("Create Order | Select Variant");

  return (
    <div className="flex flex-col gap-10">
      <SelectVariantHeader />
      <SelectVariantTable />
    </div>
  );
};

export default SelectVariant;
