import { useEffect } from "react";
import CustomInput from "../../tools/CustomInput";
import CustomButton from "../../tools/CustomButton";
import VarientRow from "./components/VarientRow";
import { useFormik } from "formik";
import { productType, varientType } from "../../../utils/typs";
import { useNavigate, useParams } from "react-router-dom";
import {
  useCreateProductMutation,
  useEditProductMutation,
} from "../../features/products/productsApi";
import { useSelector } from "react-redux";
import { rootStateType } from "../../app/store";
import toast from "react-hot-toast";
import useTitle from "../../hooks/useTitle";

const CreateProduct = () => {
  const navigate = useNavigate();
  const [storeProduct, productStoreResult] = useCreateProductMutation();
  const [editProduct, editProductResult] = useEditProductMutation();
  const { id } = useParams();
  useTitle(id ? "Update Product" : "Create Product");
  const { editingProduct } = useSelector(
    (state: rootStateType) => state.products
  );

  // const { data } = useGetProductByIdQuery(id);

  // useEffect(() => {
  //   console.log(data?.data);
  //   if (data?.data?.id) {
  //     dispatch(setEditingProduct(data?.data));
  //   }
  // }, [data]);

  useEffect(() => {
    console.log(editProductResult);

    if (editProductResult.isSuccess) {
      toast.success("Product updated successfully");
      navigate("/");
    }
    if (editProductResult?.isError) {
      toast.error("Something went wrong!");
    }
  }, [editProductResult]);

  useEffect(() => {
    console.log(productStoreResult);

    if (productStoreResult?.isSuccess) {
      toast.success("Product created successfully");
      navigate("/");
    }
    if (productStoreResult?.isError) {
      toast.error("Something went wrong!");
    }
  }, [productStoreResult]);

  const Formik = useFormik<productType>({
    initialValues: editingProduct || {
      name: "",
      brand: "",
      type: "",
      origin: "",
      variants: [
        {
          color: "",
          size: "",
          specification: "",
        },
        {
          color: "",
          size: "",
          specification: "",
        },
        {
          color: "",
          size: "",
          specification: "",
        },
        {
          color: "",
          size: "",
          specification: "",
        },
      ],
    },
    onSubmit: (values) => {
      console.log(values);

      if (id) {
        const parser = {
          id,
          product: values,
        };
        editProduct(parser);

        // fetch(`https://reactjr.coderslab.online/api/products/${parser?.id}`, {
        //   method: "PUT",
        //   headers: {
        //     "content-type": "application/json",
        //     Accept: "application/json",
        //   },
        //   body: JSON.stringify(parser?.product),
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     console.log(data);
        //   })
        //   .catch((e) => {
        //     console.log(e);
        //   });
      } else {
        storeProduct(values);
      }
    },
  });

  // useEffect(() => {
  //   if(editingProduct?.id){
  //     Formik.setFieldValue("name",editingProduct?.name)
  //     Formik.setFieldValue("brand",editingProduct?.brand)
  //     Formik.setFieldValue("brand",editingProduct?. )
  //   }
  // })

  return (
    <div className="flex flex-col gap-10">
      <div className="grid grid-cols-2 gap-5 w-[60%] mx-auto">
        <CustomInput
          value={Formik.values.name}
          onChange={(e) => Formik.setFieldValue("name", e?.target?.value)}
          placeholder="Name"
        />
        <CustomInput
          value={Formik.values.brand}
          onChange={(e) => Formik.setFieldValue("brand", e?.target?.value)}
          placeholder="Brand"
        />
        <CustomInput
          value={Formik.values.type}
          onChange={(e) => Formik.setFieldValue("type", e?.target?.value)}
          placeholder="Type"
        />
        <CustomInput
          value={Formik.values.origin}
          onChange={(e) => Formik.setFieldValue("origin", e?.target?.value)}
          placeholder="Origin"
        />
      </div>
      <div>
        <p className="text-center text-lg font-semibold mb-5">Varients</p>
        <div className="flex flex-col gap-5">
          {Formik?.values?.variants?.map((varient, i) => {
            console.log(varient);
            return <VarientRow Formik={Formik} key={i} index={i} />;
          })}
        </div>
        <CustomButton
          theme="primary"
          onClick={() =>
            Formik.setFieldValue("variants", [
              ...(Formik.values.variants as varientType[]),
              {
                color: "",
                size: "",
                specification: "",
              },
            ])
          }
          className="mt-5"
        >
          Add Varient
        </CustomButton>
      </div>
      <div className="ml-auto flex items-center gap-5">
        <CustomButton theme="error" onClick={() => navigate("/")}>
          Cancel
        </CustomButton>
        <CustomButton theme="primary" onClick={Formik.handleSubmit}>
          Submit
        </CustomButton>
      </div>
    </div>
  );
};

export default CreateProduct;
