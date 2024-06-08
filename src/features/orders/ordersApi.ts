import { apiSlice } from "../api/apiSlice";

export const ordersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: ({
        search = "",
        per_page = 10,
        page = 1,
      }: {
        search: string;
        per_page: number | string;
        page: number | string;
      }) => ({
        url: `/api/orders?search=${search}&per_page=${per_page}&page=${page}`,
      }),
    }),
    createOrder: builder.mutation({
      query: (order) => ({
        url: `/api/orders`,
        method: "POST",
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
        },
        body: order,
      }),
    }),
  }),
});

export const { useGetOrdersQuery, useCreateOrderMutation } = ordersApi;
