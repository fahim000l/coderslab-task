import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import productsSlice from "../features/products/productsSlice";
import ordersSlice from "../features/orders/ordersSlice";
import mainSlice from "../features/main/mainSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    products: productsSlice,
    orders: ordersSlice,
    main: mainSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type rootStateType = ReturnType<typeof store.getState>;

export default store;
