import ProductsHeader from "./components/ProductsHeader";
import ProductsTable from "./components/ProductsTable";
import Pagination from "../../components/Pagination";
import Modal from "../../tools/modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { rootStateType } from "../../app/store";
import CustomButton from "../../tools/CustomButton";
import { useDeleteProductMutation } from "../../features/products/productsApi";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { setDeletingProductId } from "../../features/products/productsSlice";
import useTitle from "../../hooks/useTitle";

const Products = () => {
  useTitle("Products List");
  const { deletingProductId } = useSelector(
    (state: rootStateType) => state?.products
  );

  const [deleteProduct, deleteProductResult] = useDeleteProductMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(deleteProductResult);

    if (deleteProductResult?.isSuccess) {
      toast.success("Product deleted successfully");
      dispatch(setDeletingProductId(null));
    }
  }, [deleteProductResult]);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-10">
        <ProductsHeader />
        <ProductsTable />
      </div>
      <Pagination />
      {deletingProductId && (
        <Modal
          title={`Confirmation to delete product Id: ${deletingProductId}`}
          message="Are you sure, you want to delete this product?"
        >
          <div className="flex items-center gap-5">
            <CustomButton isModal={true} htmlFor="customModal" theme="primary">
              Cancel
            </CustomButton>
            <CustomButton
              onClick={() => {
                deleteProduct(deletingProductId);
              }}
              theme="error"
            >
              Delete
            </CustomButton>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Products;
