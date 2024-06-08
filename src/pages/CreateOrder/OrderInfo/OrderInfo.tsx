import React, { useState } from "react";
import useTitle from "../../../hooks/useTitle";
import CustomInput from "../../../tools/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { rootStateType } from "../../../app/store";
import CustomButton from "../../../tools/CustomButton";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { orderType } from "../../../../utils/typs";
import { resetTotalQuantity } from "../../../features/orders/ordersSlice";
import { useCreateOrderMutation } from "../../../features/orders/ordersApi";

const OrderInfo = () => {
  useTitle("Create Order | Order Info");
  const { totalQuantity, selectedVariants } = useSelector(
    (state: rootStateType) => state.orders
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [createOrder, createOrderResult] = useCreateOrderMutation();

  const Formik = useFormik<orderType>({
    initialValues: {
      address: "",
      email: "",
      name: "",
      total_quantity: totalQuantity,
      details: selectedVariants,
    },
    onSubmit: (values) => {
      console.log(values);
      values?.details?.forEach((detail) => delete detail.check);
      console.log(values);
      createOrder(values);
    },
  });

  return (
    <div className="mt-20">
      <div className="grid grid-cols-2 gap-5 w-[60%] mx-auto">
        <div>
          <label className="font-semibold mb-5">Name</label>
          <CustomInput
            value={Formik.values.name}
            onChange={(e) => Formik.setFieldValue("name", e.target.value)}
            placeholder="Name"
          />
        </div>
        <div>
          <label className="font-semibold mb-5">Email</label>
          <CustomInput
            value={Formik.values.email}
            onChange={(e) => Formik.setFieldValue("email", e.target.value)}
            placeholder="Email"
          />
        </div>
        <div>
          <label className="font-semibold mb-5">Address</label>
          <CustomInput
            value={Formik.values.address}
            onChange={(e) => Formik.setFieldValue("address", e.target.value)}
            placeholder="Adress"
          />
        </div>
        <div>
          <label className="font-semibold mb-5">Total Quantity</label>
          <CustomInput
            value={`${Formik.values.total_quantity}`}
            className="bg-gray-300"
            placeholder="Total Quantity"
          />
        </div>
      </div>
      <div className="ml-auto flex items-center gap-5 justify-end mt-10">
        <CustomButton
          theme="error"
          onClick={() => {
            dispatch(resetTotalQuantity());
            navigate(-1);
          }}
        >
          Back
        </CustomButton>
        <CustomButton onClick={Formik.handleSubmit} theme="primary">
          Submit
        </CustomButton>
      </div>
    </div>
  );
};

export default OrderInfo;
