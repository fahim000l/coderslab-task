import { apiSlice } from "../api/apiSlice";

export const productsAPi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({
        search,
        per_page,
        page,
      }: {
        search: string;
        per_page: number;
        page: number;
      }) => ({
        url: `products?search=${search}&per_page=${per_page}&page=${page}`,
        mode: "no-cors",
      }),
    }),
  }),
  //   overrideExisting: false,
});

export const { useGetProductsQuery } = productsAPi;
