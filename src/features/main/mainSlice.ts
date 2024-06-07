import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "main",
  initialState: {
    pageTitle: "",
  },
  reducers: {
    setPageTitle: (state, { payload }) => {
      state.pageTitle = payload;
    },
  },
});

export const { setPageTitle } = mainSlice.actions;

export default mainSlice.reducer;
