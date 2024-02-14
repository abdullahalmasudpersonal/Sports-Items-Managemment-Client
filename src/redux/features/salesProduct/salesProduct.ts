import { TResponseRedux } from "../../../types";
import { TSalesProduct } from "../../../types/salesProduct";
import { baseApi } from "../../api/baseApi";

const salesProductInfoApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    salesProductInDB: builder.mutation({
      query: (salesProductInfo) => ({
        url: "/sales",
        method: "POST",
        body: salesProductInfo,
      }),
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
  }),
});

export const { useSalesProductInDBMutation, useGetAllSalesProductQuery } =
  salesProductInfoApi;
