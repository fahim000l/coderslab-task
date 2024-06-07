import { createSlice } from "@reduxjs/toolkit";
import { orderType } from "../../../utils/typs";

interface initialStateType {
  orders: orderType[] | never[];
  currentPage: number;
  search: string;
  per_page: number;
}

const initialState: initialStateType = {
  orders: [],
  currentPage: 1,
  search: "",
  per_page: 10,
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
  },
});

export const { getOrders, searchOrder } = orderSlice.actions;

export default orderSlice.reducer;
