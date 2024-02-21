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
      providesTags: ["getProducts"],
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
      invalidatesTags: ["getProducts"],
    }),
    updateProductIntoDB: builder.mutation({
      query: (productInfo) => ({
        url: `/products/update/${productInfo._id}`,
        method: "PUT",
        body: productInfo,
      }),
      invalidatesTags: ["getProducts"],
    }),
    deleteProductFormDB: builder.mutation({
      query: (productInfo) => ({
        url: `/products/delete/${productInfo._id}`,
        method: "PUT",
        body: productInfo,
      }),
      invalidatesTags: ["getProducts"],
    }),
  }),
});

export const {
  useCreateProductIntoDBMutation,
  useGetAllProductQuery,
  useUpdateProductIntoDBMutation,
  useDeleteProductFormDBMutation,
} = sportsItemsManagementApi;
