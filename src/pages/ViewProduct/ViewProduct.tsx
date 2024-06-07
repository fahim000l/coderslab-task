import React, { useEffect, useState } from "react";
import ViewVarientRow from "./components/ViewVarientRow";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../features/products/productsApi";
import { productType } from "../../../utils/typs";

const ViewProduct = () => {
  const { id } = useParams();

  const { data } = useGetProductByIdQuery(id);
  const [product, setProduct] = useState<productType | null>(null);
  useEffect(() => {
    console.log(data?.data);
    setProduct(data?.data);
  }, [data]);

  if (product) {
    return (
      <div className="flex flex-col gap-10">
        <div className="grid grid-cols-2 gap-5 w-[60%] mx-auto">
          <div>
            <p>
              <span className="font-semibold">Name :</span>{" "}
              <span>{product?.name}</span>
            </p>
          </div>
          <div>
            <p>
              <span className="font-semibold">Brand :</span>{" "}
              <span>{product?.brand}</span>
            </p>
          </div>
          <div>
            <p>
              <span className="font-semibold">Type :</span>{" "}
              <span>{product?.type}</span>
            </p>
          </div>
          <div>
            <p>
              <span className="font-semibold">Origin :</span>{" "}
              <span>{product?.origin}</span>
            </p>
          </div>
        </div>
        <div>
          <p className="text-center text-lg font-semibold mb-5">Varients</p>
          <div className="flex flex-col gap-5">
            {product?.variants?.map((variant, i) => (
              <ViewVarientRow variant={variant} key={i} />
            ))}
          </div>
        </div>
        {/* <div className="ml-auto flex items-center gap-5">
            <CustomButton theme="error" onClick={() => navigate("/")}>
              Cancel
            </CustomButton>
            <CustomButton theme="primary" onClick={Formik.handleSubmit}>
              Submit
            </CustomButton>
          </div> */}
      </div>
    );
  }
};

export default ViewProduct;
