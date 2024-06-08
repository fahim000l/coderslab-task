import CustomInput from "../../../tools/CustomInput";
import CustomButton from "../../../tools/CustomButton";
import { FormikProps } from "formik";
import { productType, varientType } from "../../../../utils/typs";

interface props {
  Formik: FormikProps<productType>;
  index: number;
}

const VarientRow = ({ Formik, index }: props) => {
  return (
    <div className="flex items-center justify-between gap-5">
      <CustomInput
        onChange={(e) =>
          Formik.setFieldValue(`variants[${index}].color`, e?.target?.value)
        }
        value={Formik.values.variants?.[index].color}
        placeholder="Color"
        className="w-full"
      />
      <CustomInput
        onChange={(e) =>
          Formik.setFieldValue(
            `variants[${index}].specification`,
            e?.target?.value
          )
        }
        value={Formik.values.variants?.[index].specification}
        placeholder="Specification"
        className="w-full"
      />
      <CustomInput
        onChange={(e) =>
          Formik.setFieldValue(`variants[${index}].size`, e?.target?.value)
        }
        value={Formik.values.variants?.[index].size}
        placeholder="Size"
        className="w-full"
      />
      <CustomButton
        onClick={() => {
          let copy = [...(Formik.values.variants as varientType[])];
          console.log(copy);
          copy = copy?.filter((varient, i) => {
            console.log(varient);
            return i !== index;
          });
          console.log(copy);
          Formik.setFieldValue("variants", copy);
        }}
      >
        X
      </CustomButton>
      {/* <div className="flex items-center gap-2">
        <CustomButton>+</CustomButton>
        <CustomButton>-</CustomButton>
      </div> */}
    </div>
  );
};

export default VarientRow;
