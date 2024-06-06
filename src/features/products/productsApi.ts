import { apiSlice } from "../api/apiSlice";

export const productsAPi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({
        search = "",
        per_page = 10,
        page = 1,
      }: {
        search: string;
        per_page: number | string;
        page: number | string;
      }) => ({
        url: `/api/products?search=${search}&per_page=${per_page}&page=${page}`,
        // mode: "no-cors",
      }),
    }),
    createProduct: builder.mutation({
      query: (values) => ({
        url: "/api/products",
        method: "POST",
        body: values,
      }),
    }),
    getProductById: builder.query({
      query: (id) => ({
        url: `/api/products/${id}`,
        params: id,
      }),
    }),
  }),
  //   overrideExisting: false,
});

export const {
  useGetProductsQuery,
  useCreateProductMutation,
  useGetProductByIdQuery,
} = productsAPi;
