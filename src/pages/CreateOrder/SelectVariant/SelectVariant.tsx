import React, { useRef } from "react";
import useTitle from "../../../hooks/useTitle";
import SelectVariantHeader from "./components/SelectVariantHeader";
import SelectVariantTable from "./components/SelectVariantTable";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../../tools/CustomButton";

const SelectVariant = () => {
  useTitle("Create Order | Select Variant");
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-10">
      <SelectVariantHeader />
      <SelectVariantTable />
      <div className="ml-auto flex items-center gap-5">
        <CustomButton theme="error" onClick={() => navigate("/orders")}>
          Back
        </CustomButton>
        <CustomButton
          //   onClick={() => {
          //     if (selectedProducts?.length === 0) {
          //       toast?.error("You haven't selected any product");
          //     } else {
          //       navigate("/create-order/select-variant");
          //     }
          //   }}
          theme="primary"
        >
          Next
        </CustomButton>
      </div>
    </div>
  );
};

export default SelectVariant;
