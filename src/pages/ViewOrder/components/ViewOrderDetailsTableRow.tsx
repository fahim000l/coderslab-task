import React, { useEffect, useState } from "react";
import {
  orderDatailsType,
  productType,
  varientType,
} from "../../../../utils/typs";
import { useGetProductByIdQuery } from "../../../features/products/productsApi";
import CustomButton from "../../../tools/CustomButton";
import ContentModal from "../../../tools/modal/ContentModal";
import ViewVariantsTable from "./ViewVariantsTable";

interface params {
  index: number;
  details: orderDatailsType[];
  productId: number;
}

const ViewOrderDetailsTableRow = ({ index, details, productId }: params) => {
  console.log(details);
  const [product, setProduct] = useState<productType | null>(null);
  //   const [variants, setVariants] = useState<varientType[] | never[]>([]);
  const { data } = useGetProductByIdQuery(productId);

  useEffect(() => {
    console.log(data);
    if (data?.data?.id) {
      setProduct(data?.data);
    }
  }, [data]);

  //   useEffect(() => {
  //     details?.forEach((detail) =>
  //       setVariants([...variants, detail?.variant as varientType])
  //     );

  //   }, [details]);

  const variants = details?.filter(
    (detail) => detail.variant?.product_id === product?.id
  );

  const totalQuantity = variants?.reduce(
    (accumulator, currentValue) => accumulator + currentValue?.quantity,
    0
  );

  console.log(variants);

  return (
    <tr>
      <td
        className={`text-center ${
          index % 2 === 0 ? "bg-[#ccdfef]" : "bg-[#e7f0f7]"
        } py-2 border border-solid border-[white] text-[12px]`}
      >
        {/* {id} */}
        {product?.id}
      </td>
      <td
        className={`text-center ${
          index % 2 === 0 ? "bg-[#ccdfef]" : "bg-[#e7f0f7]"
        } py-2 border border-solid border-[white] text-[12px]`}
      >
        {/* {id} */}
        {product?.name}
      </td>
      <td
        className={`text-center ${
          index % 2 === 0 ? "bg-[#ccdfef]" : "bg-[#e7f0f7]"
        } py-2 border border-solid border-[white] text-[12px]`}
      >
        {/* {id} */}
        {product?.brand}
      </td>
      <td
        className={`text-center ${
          index % 2 === 0 ? "bg-[#ccdfef]" : "bg-[#e7f0f7]"
        } py-2 border border-solid border-[white] text-[12px]`}
      >
        {/* {id} */}
        {product?.type}
      </td>
      <td
        className={`text-center ${
          index % 2 === 0 ? "bg-[#ccdfef]" : "bg-[#e7f0f7]"
        } py-2 border border-solid border-[white] text-[12px]`}
      >
        {/* {id} */}
        {totalQuantity}
      </td>
      <td
        className={`text-center ${
          index % 2 === 0 ? "bg-[#ccdfef]" : "bg-[#e7f0f7]"
        } py-2 border border-solid border-[white] text-[12px]`}
      >
        {/* {id} */}
        <CustomButton
          isModal={true}
          htmlFor="contentModal"
          theme="primary"
          className="mx-auto max-w-[120px]"
        >
          Show Variants
        </CustomButton>
        <ContentModal>
          <ViewVariantsTable
            variants={variants as orderDatailsType[]}
            product={product as productType}
          />
          {/* Variant Container */}
        </ContentModal>
      </td>
    </tr>
  );
};

export default ViewOrderDetailsTableRow;
