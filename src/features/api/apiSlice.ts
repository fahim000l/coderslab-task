import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://reactjr.coderslab.online/api/",

  }),
  endpoints: (builder) => ({}),
});
