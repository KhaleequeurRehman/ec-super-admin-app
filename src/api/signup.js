import { api } from "../store/middleware/api";

const extendedApi = api.injectEndpoints({
  endpoints: (build) => ({
    getRegisterSubAdmin: build.mutation({
      query: (body) => ({
        url: `/api/admin/register`,
        method: "POST",
        body,
      }),
    }),
    deleteSubAdmin: build.mutation({
      query: (body) => ({
        url: `/api/admin/delete`,
        method: "POST",
        body,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
    useGetRegisterSubAdminMutation,
    useDeleteSubAdminMutation,
} = extendedApi;
