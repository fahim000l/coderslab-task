import { varientType } from "../../../../utils/typs";

const ViewVarientRow = ({ variant }: { variant: varientType }) => {
  return (
    <div className="flex items-center justify-between gap-5">
      <p className="text-start w-full">
        <span className="font-semibold">Color :</span>{" "}
        <span>{variant?.color}</span>
      </p>
      <p className="text-start w-full">
        <span className="font-semibold">specification :</span>{" "}
        <span>{variant?.specification}</span>
      </p>
      <p className="text-start w-full">
        <span className="font-semibold">Size :</span>{" "}
        <span>{variant?.size}</span>
      </p>
      {/* <div className="flex items-center gap-2">
        <CustomButton>+</CustomButton>
        <CustomButton>-</CustomButton>
      </div> */}
    </div>
  );
};

export default ViewVarientRow;
