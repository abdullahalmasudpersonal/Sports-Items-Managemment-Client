import { baseApi } from "../../../api/baseApi";

const BranchManagerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBranchManager: builder.mutation({
      query: (branchManagerData) => ({
        url: "/users/create-branchManager",
        method: "POST",
        body: branchManagerData,
      }),
    }),
    getAllBranchManagerIntoDB: builder.query({
      query: () => ({
        url: "/branch-manager",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateBranchManagerMutation,
  useGetAllBranchManagerIntoDBQuery,
} = BranchManagerApi;
