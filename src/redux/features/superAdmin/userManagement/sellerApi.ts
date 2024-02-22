import { TResponseRedux } from "../../../../types";
import { TSeller } from "../../../../types/seller";
import { baseApi } from "../../../api/baseApi";

const SellerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createSeller: builder.mutation({
      query: (sellerData) => ({
        url: "/users/create-seller",
        method: "POST",
        body: sellerData,
      }),
    }),
    getAllSellerIntoDB: builder.query({
      query: () => ({
        url: "/seller",
        method: "GET",
      }),
      transformResponse: (response: TResponseRedux<TSeller[]>) => {
        return {
          data: response.data,
          // meta: response.meta,
        };
      },
    }),
  }),
});

export const { useCreateSellerMutation, useGetAllSellerIntoDBQuery } =
  SellerApi;
