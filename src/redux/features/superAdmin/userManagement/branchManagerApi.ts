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
  }),
});

export const { useCreateBranchManagerMutation } = BranchManagerApi;
