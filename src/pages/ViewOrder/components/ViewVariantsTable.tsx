import VIewVariantsTableRow from "./VIewVariantsTableRow";
import {
  orderDatailsType,
  productType,
  varientType,
} from "../../../../utils/typs";
import CustomButton from "../../../tools/CustomButton";
import BackIcon from "../../../tools/Icons/BackIcon";

interface props {
  variants: varientType[] | orderDatailsType[];
  product: productType;
}

const ViewVariantsTable = ({ variants, product }: props) => {
  console.log(variants);
  return (
    <div>
      <div className="flex items-start justify-between mb-5">
        <div>
          <p className="flex items-center gap-2 text-sm">
            <span className="font-semibold">Product Id :</span>
            <span>{product?.id}</span>
          </p>
          <p className="flex items-center gap-2 text-sm">
            <span className="font-semibold">Product Name :</span>
            <span>{product?.name}</span>
          </p>
        </div>
        <CustomButton
          className="min-w-[140px]"
          theme="primary"
          isModal={true}
          htmlFor="contentModal"
          icon={<BackIcon />}
        >
          Back
        </CustomButton>
      </div>
      <div className="h-[500px] overflow-y-scroll">
        <table
          style={{
            borderCollapse: "collapse",
          }}
          className="w-full"
        >
          <thead className="sticky top-0 z-50">
            <tr>
              <th
                scope="col"
                className="bg-[#0f9ed5] text-center text-white py-2 border border-solid border-[white] text-[14px]"
              >
                ID
              </th>
              <th
                scope="col"
                className="bg-[#0f9ed5] text-center text-white py-2 border border-solid border-[white] text-[14px]"
              >
                Color
              </th>
              <th
                scope="col"
                className="bg-[#0f9ed5] text-center text-white py-2 border border-solid border-[white] text-[14px]"
              >
                Specification
              </th>
              <th
                scope="col"
                className="bg-[#0f9ed5] text-center text-white py-2 border border-solid border-[white] text-[14px]"
              >
                Size
              </th>
              <th
                scope="col"
                className="bg-[#0f9ed5] text-center text-white py-2 border border-solid border-[white] text-[14px]"
              >
                Quantity
              </th>
            </tr>
          </thead>
          <tbody>
            {variants?.map((variant) => (
              <VIewVariantsTableRow
                variant={variant as orderDatailsType}
                index={1}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewVariantsTable;
