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
}

const initialState: initialStateType = {
  orders: [],
  currentPage: 1,
  search: "",
  per_page: 10,
  selectedProducts: [],
  choosedProduct: null,
  selectedVariants: [],
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
      { payload }: { payload: { name: string; id: number } }
    ) => {
      if (
        (state?.selectedProducts as { name: string; id: number }[])?.some(
          (product) => product?.id === payload?.id
        )
      ) {
        state.selectedProducts = state.selectedProducts.filter(
          (product) => product?.id !== payload?.id
        );
      } else {
        (state.selectedProducts as { name: string; id: number }[]).push(
          payload
        );
      }
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
  },
});

export const {
  getOrders,
  searchOrder,
  selectProduct,
  chooseProduct,
  selectVariant,
  confirmVariant,
} = orderSlice.actions;

export default orderSlice.reducer;
