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
  }),
});

export const { useCreateSellerMutation } = SellerApi;
