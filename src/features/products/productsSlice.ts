import { productType } from "./../../../utils/typs";
import { createSlice } from "@reduxjs/toolkit";

interface stateType {
  products: productType[] | never[];
  currentPage: number;
  search: string;
  per_page: number;
  editingProduct: productType | null;
}

const initialState: stateType = {
  products: [],
  currentPage: 1,
  search: "",
  per_page: 10,
  editingProduct: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state, { payload }) => {
      console.log(payload);
      state.currentPage = payload.currentPage;
      state.products = payload.products;
    },
    searchProducts: (state, { payload }) => {
      state.search = payload;
    },
    setCurrentPage: (state, { payload }) => {
      state.currentPage = payload;
    },
    setEditingProduct: (state, { payload }) => {
      state.editingProduct = payload;
    },
  },
});

export const {
  getProducts,
  searchProducts,
  setCurrentPage,
  setEditingProduct,
} = productsSlice.actions;

export default productsSlice.reducer;
