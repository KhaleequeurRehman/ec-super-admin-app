import { api } from "../store/middleware/api";

const extendedApi = api.injectEndpoints({
    endpoints: (build) => ({
        addUserRole: build.mutation({
            query: (body) => ({
                url: `/api/admin/add/role`,
                method: "POST",
                body,
            }),
            invalidatesTags: ["Roles"]
        }),
        deleteRole: build.mutation({
            query: (id) => ({
                url: `/api/admin/delete/role/${id}`,
                method: "POST",
            }),
            invalidatesTags: ["Roles"]
        }),
        updateRole: build.mutation({
            query: (body) => ({
                url: `/api/admin/update/role/${body.id}`,
                method: "POST",
                body,
            }),
            invalidatesTags: ["Roles"]
        }),
        getAllRoles: build.query({
            query: (query) => ({
                url: `/api/admin/get/roles?${query}`,
                method: "GET",
            }),
            providesTags: ["Roles"]
        }),
    }),
    overrideExisting: false,
});

export const {
    useAddUserRoleMutation,
    useDeleteRoleMutation,
    useGetAllRolesQuery,
    useUpdateRoleMutation
} = extendedApi;
