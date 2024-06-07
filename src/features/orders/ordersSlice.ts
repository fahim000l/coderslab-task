import { createSlice } from "@reduxjs/toolkit";
import { orderType } from "../../../utils/typs";

interface initialStateType {
  orders: orderType[] | never[];
  currentPage: number;
  search: string;
  per_page: number;
  selectedProducts: number[] | never[];
}

const initialState: initialStateType = {
  orders: [],
  currentPage: 1,
  search: "",
  per_page: 10,
  selectedProducts: [],
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
    selectProduct: (state, { payload }: { payload: number }) => {
      if ((state?.selectedProducts as number[])?.includes(payload)) {
        state.selectedProducts = state.selectedProducts.filter(
          (id) => id !== payload
        );
      } else {
        (state.selectedProducts as number[]).push(payload);
      }
    },
  },
});

export const { getOrders, searchOrder, selectProduct } = orderSlice.actions;

export default orderSlice.reducer;
