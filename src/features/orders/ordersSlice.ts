import { createSlice } from "@reduxjs/toolkit";
import { orderType } from "../../../utils/typs";
import toast from "react-hot-toast";

interface initialStateType {
  orders: orderType[] | never[];
  currentPage: number;
  search: string;
  per_page: number;
  selectedProducts: { name: string; id: number }[] | never[];
  choosedProduct: { name: string; id: number } | null;
  selectedVariants:
    | { variant_id: number; quantity: number; check: boolean }[]
    | never[];
  totalQuantity: number;
  orderedProducts: number[] | never[];
  deletingOrderId: number | null;
}

const initialState: initialStateType = {
  orders: [],
  currentPage: 1,
  search: "",
  per_page: 10,
  selectedProducts: [],
  choosedProduct: null,
  selectedVariants: [],
  totalQuantity: 0,
  orderedProducts: [],
  deletingOrderId: null,
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    getOrders: (state, { payload }) => {
      state.orders = payload.orders;
      state.currentPage = payload.currentPage;
    },
    searchOrder: (state, { payload }) => {
      state.search = payload;
    },
    selectProduct: (
      state,
      { payload }: { payload: { name: string; id: number; isEffect?: boolean } }
    ) => {
      const isExist = (
        state?.selectedProducts as { name: string; id: number }[]
      )?.some((product) => product?.id === payload?.id);

      // if (!payload?.isEffect) {
      console.log(isExist);
      if (isExist) {
        state.selectedProducts = state.selectedProducts.filter(
          (product) => product?.id !== payload?.id
        );
      } else {
        (state.selectedProducts as { name: string; id: number }[]).push(
          payload
        );
      }
      // } else {
      //   console.log(isExist);
      //   if (!isExist) {
      //     (state.selectedProducts as { name: string; id: number }[]).push(
      //       payload
      //     );
      //   }
      // }

      // (state.selectedProducts as { name: string; id: number }[]).push(payload);
    },
    chooseProduct: (state, { payload }) => {
      state.choosedProduct = payload;
    },
    selectVariant: (
      state,
      {
        payload,
      }: { payload: { variant_id: number; quantity: number; check: boolean } }
    ) => {
      if (
        (
          state?.selectedVariants as {
            variant_id: number;
            quantity: number;
            check: boolean;
          }[]
        )?.some((variant) => variant.variant_id === payload?.variant_id)
      ) {
        state.selectedVariants = state?.selectedVariants?.filter(
          (variant) => variant?.variant_id !== payload?.variant_id
        );
      } else {
        if (payload.quantity) {
          (
            state.selectedVariants as {
              variant_id: number;
              quantity: number;
              check: boolean;
            }[]
          ).push(payload);
        } else {
          toast.error("Please specify quantity, to select the variant");
        }
      }
    },
    confirmVariant: (
      state,
      { payload }: { payload: { variant_id: number } }
    ) => {
      (
        state.selectedVariants.find(
          (variant) => variant.variant_id === payload.variant_id
        ) as { variant_id: number; quantity: number; check: boolean }
      ).check = !state.selectedVariants?.find(
        (variant) => variant?.variant_id === payload?.variant_id
      )?.check;
    },
    calculateTotalQuantity: (state) => {
      state.selectedVariants.forEach((variant) => {
        if (variant.check) {
          state.totalQuantity += variant.quantity;
        }
      });
    },
    removePendingVariants: (state) => {
      console.log(state.selectedVariants);
      state.selectedVariants = state.selectedVariants?.filter(
        (variant) => variant?.check
      );
      console.log(state.selectedVariants);
    },
    resetTotalQuantity: (state) => {
      state.totalQuantity = 0;
    },
    resetOrder: (state) => {
      state.selectedProducts = [];
      state.selectedVariants = [];
      state.totalQuantity = 0;
    },
    setOrderdProducts: (state, { payload }: { payload: number }) => {
      if (!(state.orderedProducts as number[])?.includes(payload)) {
        (state.orderedProducts as number[]).push(payload);
      }
    },
    resetOrderedProducts: (state) => {
      state.orderedProducts = [];
    },
    setDeletingOrderId: (state, { payload }) => {
      state.deletingOrderId = payload;
    },
  },
});

export const {
  getOrders,
  searchOrder,
  selectProduct,
  chooseProduct,
  selectVariant,
  confirmVariant,
  calculateTotalQuantity,
  removePendingVariants,
  resetTotalQuantity,
  resetOrder,
  setOrderdProducts,
  resetOrderedProducts,
  setDeletingOrderId,
} = orderSlice.actions;

export default orderSlice.reducer;
