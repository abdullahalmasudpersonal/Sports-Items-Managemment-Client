import { TResponseRedux } from "../../../types";
import { TProduct } from "../../../types/sportsItemsManagement";
import { baseApi } from "../../api/baseApi";

const sportsItemsManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProduct: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
      transformResponse: (response: TResponseRedux<TProduct[]>) => {
        return {
          data: response.data,
          // meta: response.meta,
        };
      },
    }),
    createProductIntoDB: builder.mutation({
      query: (productInfo) => ({
        url: "/products/create-product",
        method: "POST",
        body: productInfo,
      }),
    }),
    deleteProductFormDB: builder.mutation({
      query: (productInfo) => ({
        url: `/products/delete/${productInfo._id}`,
        method: "PUT",
        body:productInfo,
      }),
    }),
  }),
});

export const { useCreateProductIntoDBMutation, useGetAllProductQuery, useDeleteProductFormDBMutation } =
  sportsItemsManagementApi;
