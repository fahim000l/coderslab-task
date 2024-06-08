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
  detail: orderDatailsType;
}

const ViewOrderDetailsTableRow = ({ index, detail }: params) => {
  console.log(detail);
  const [product, setProduct] = useState<productType | null>(null);
  const { data } = useGetProductByIdQuery(detail?.variant?.product_id);

  useEffect(() => {
    console.log(data);
    if (data?.data?.id) {
      setProduct(data?.data);
    }
  }, [data]);

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
            variant={detail.variant as varientType}
            product={product as productType}
          />
        </ContentModal>
      </td>
    </tr>
  );
};

export default ViewOrderDetailsTableRow;
