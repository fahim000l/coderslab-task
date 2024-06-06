import { useEffect } from "react";
import CustomInput from "../../tools/CustomInput";
import CustomButton from "../../tools/CustomButton";
import VarientRow from "./components/VarientRow";
import { useFormik } from "formik";
import { productType, varientType } from "../../../utils/typs";
import { useNavigate, useParams } from "react-router-dom";
import {
  useCreateProductMutation,
  useGetProductByIdQuery,
} from "../../features/products/productsApi";
import { useDispatch, useSelector } from "react-redux";
import { setEditingProduct } from "../../features/products/productsSlice";
import { rootStateType } from "../../app/store";

const CreateProduct = () => {
  const navigate = useNavigate();
  const [storeProduct, productStoreResult] = useCreateProductMutation();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { editingProduct } = useSelector(
    (state: rootStateType) => state.products
  );

  const { data } = useGetProductByIdQuery(id);

  useEffect(() => {
    console.log(data?.data);
    if (data?.data?.id) {
      dispatch(setEditingProduct(data?.data));
    }
  }, [data]);

  useEffect(() => {
    console.log(productStoreResult);
  }, [productStoreResult]);

  const Formik = useFormik<productType>({
    initialValues: {
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
      storeProduct(values);
    },
  });


  useEffect(() => {
    if(editingProduct?.id){
      Formik.setFieldValue("name",editingProduct?.name)
      Formik.setFieldValue("brand",editingProduct?.brand)
      Formik.setFieldValue("brand",editingProduct?. )
    }
  })




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
          {Formik?.values?.variants?.map((varient, i) => (
            <VarientRow Formik={Formik} key={i} index={i} />
          ))}
        </div>
        <CustomButton
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
        <CustomButton onClick={() => navigate("/")}>Cancel</CustomButton>
        <CustomButton onClick={Formik.handleSubmit}>Submit</CustomButton>
      </div>
    </div>
  );
};

export default CreateProduct;
