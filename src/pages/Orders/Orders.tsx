import OrdersHeader from "./components/OrdersHeader";
import OrderTable from "./components/OrderTable";
import useTitle from "../../hooks/useTitle";
import Modal from "../../tools/modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { rootStateType } from "../../app/store";
import CustomButton from "../../tools/CustomButton";
import { useDeleteOrderMutation } from "../../features/orders/ordersApi";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { setDeletingOrderId } from "../../features/orders/ordersSlice";

const Orders = () => {
  useTitle("Orders List");
  const { deletingOrderId } = useSelector(
    (state: rootStateType) => state.orders
  );

  const [deleteOrder, deteleOrderResult] = useDeleteOrderMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(deteleOrderResult);
    if (deteleOrderResult?.isSuccess) {
      toast.success("Order deleted successfully");
      dispatch(setDeletingOrderId(null));
    }
  }, [deteleOrderResult]);

  return (
    <div className="flex flex-col gap-10">
      <OrdersHeader />
      <OrderTable />
      {deletingOrderId && (
        <Modal
          title={`Confirmation to delete order Id : ${deletingOrderId}`}
          message="Are you sure, you mant to delete this order ?"
        >
          <div className="flex items-center gap-5">
            <CustomButton isModal={true} htmlFor="customModal" theme="primary">
              Cancel
            </CustomButton>
            <CustomButton
              onClick={() => {
                deleteOrder(deletingOrderId);
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

export default Orders;
