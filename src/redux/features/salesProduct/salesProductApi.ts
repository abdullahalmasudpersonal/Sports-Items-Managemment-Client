import { TResponseRedux } from "../../../types";
import { TSalesProduct } from "../../../types/salesProduct";
import { baseApi } from "../../api/baseApi";

const SalesProductApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createSalesProduct: builder.mutation({
      query: (productInfo) => ({
        url: "/sales",
        method: "POST",
        body: productInfo,
      }),
      invalidatesTags: ["getMySales"],
    }),
    getAllSalesProduct: builder.query({
      query: () => ({
        url: "/sales",
        method: "GET",
      }),

      transformResponse: (response: TResponseRedux<TSalesProduct[]>) => {
        return {
          data: response.data,
          // meta: response.meta,
        };
      },
    }),
    getAllMySalesProduct: builder.query({
      query: () => ({
        url: "/sales/my-sales",
        method: "GET",
      }),
      providesTags: ["getMySales"],
      transformResponse: (response: TResponseRedux<TSalesProduct[]>) => {
        return {
          data: response.data,
          // meta: response.meta,
        };
      },
    }),
  }),
});

export const {
  useCreateSalesProductMutation,
  useGetAllSalesProductQuery,
  useGetAllMySalesProductQuery,
} = SalesProductApi;
