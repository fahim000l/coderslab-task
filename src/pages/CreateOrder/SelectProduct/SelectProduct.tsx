import useTitle from "../../../hooks/useTitle";
import Products from "../../Products/Products";

const SelectProduct = () => {
  useTitle("Create Order | Select Product");

  return <Products />;
};

export default SelectProduct;
