import swal from "sweetalert";
import { api } from "../store/middleware/api";

const extendedApi = api.injectEndpoints({
  endpoints: (build) => ({
    updateUser: build.mutation({
        async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
          const updateUserResponse = await fetchWithBQ({
            url: "/api/admin/update/user",
            method: "POST",
            body: _arg,
          });
          if (updateUserResponse.error)
            return swal("Failed!", updateUserResponse.error.data.message, "error");
          swal("Success!", updateUserResponse.data.message, "success");
          return updateUserResponse;
        },
      }),
    deleteUser: build.mutation({
        async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
          const deleteUserResponse = await fetchWithBQ({
            url: "/api/admin/delete/user",
            method: "POST",
            body: _arg,
          });
          if (deleteUserResponse.error)
            return swal("Failed!", deleteUserResponse.error.data.message, "error");
          swal("Success!", deleteUserResponse.data.message, "success");
          return deleteUserResponse;
        },
      }),
      
    getUsers: build.query({
        async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
          const userResponse = await fetchWithBQ({
            url: "/api/admin/all/user",
          });
          
          if (userResponse.error)
            return swal("Failed!", userResponse.error.data.message, "error")

            const userList = userResponse && userResponse?.data?.data.map((item,i)=>{

              const customerName = `${item?.firstName !== undefined? item?.firstName : ''} ${item?.lastName !== undefined? item?.lastName : ''} ${item?.fullName !== undefined? item?.fullName : ''}`

              return {
                id: i+1,
                // customer: `${item?.firstName !== undefined? item?.firstName : ''} ${item?.lastName !== undefined? item?.lastName : ''} ${item?.fullName !== undefined? item?.fullName : ''}`,
                customer: customerName,
                role: item?.role || "Super Administrator",
                ...item
              }
            })

          return {...userResponse,data:{...userResponse.data,userList}};
        },
      }),

    getAllUsers: build.mutation({
        async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
          const userResponse = await fetchWithBQ({
            url: "/api/admin/all/customer",
            method: "POST",
            body: _arg,
          });
          
          if (userResponse.error)
            return swal("Failed!", userResponse.error.data.message, "error")

            const userList = userResponse && userResponse?.data?.data.map((item,i)=>{

              const customerName = `${item?.firstName !== undefined? item?.firstName : ''} ${item?.lastName !== undefined? item?.lastName : ''}`

              return {
                id: i+1,
                // customer: `${item?.firstName !== undefined? item?.firstName : ''} ${item?.lastName !== undefined? item?.lastName : ''} ${item?.fullName !== undefined? item?.fullName : ''}`,
                customer: customerName,
                role: item?.role || "Super Administrator",
                ...item
              }
            })

          return {...userResponse,data:{...userResponse.data,userList}};
        },
      }),

    searchUsers: build.mutation({
        async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
          const searchUsersResponse = await fetchWithBQ({
            url: "/api/admin/all/customer",
            method: "POST",
            body: _arg,
          });
          
          if (searchUsersResponse.error)
            return swal("Failed!", searchUsersResponse.error.data.message, "error")

            const userList = searchUsersResponse && searchUsersResponse?.data?.data.map((item,i)=>{

              const customerName = `${item?.firstName !== undefined? item?.firstName : ''} ${item?.lastName !== undefined? item?.lastName : ''}`

              return {
                id: i+1,
                // customer: `${item?.firstName !== undefined? item?.firstName : ''} ${item?.lastName !== undefined? item?.lastName : ''} ${item?.fullName !== undefined? item?.fullName : ''}`,
                customer: customerName,
                role: item?.role || "Super Administrator",
                ...item
              }
            })

          return {...searchUsersResponse,data:{...searchUsersResponse.data,userList}};
        },
      }),

    userUpdate: build.mutation({
        async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
          const userUpdateResponse = await fetchWithBQ({
            url: "/api/admin/update/customer",
            method: "POST",
            body: _arg,
          });
          
          if (userUpdateResponse.error)
            return swal("Failed!", userUpdateResponse.error.data.message, "error")
            swal("Success!", userUpdateResponse.data.message, "success");
          return userUpdateResponse;
        },
      }),

      userDelete: build.mutation({
        async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
          const userDeleteResponse = await fetchWithBQ({
            url: "/api/admin/delete/customer",
            method: "POST",
            body: _arg,
          });
          if (userDeleteResponse.error)
            return swal("Failed!", userDeleteResponse.error.data.message, "error");
          swal("Success!", userDeleteResponse.data.message, "success");
          return userDeleteResponse;
        },
      }),
  }),
  overrideExisting: false,
});

export const { 
  useUpdateUserMutation,
  useDeleteUserMutation,
  useGetUsersQuery,
  useGetAllUsersMutation,
  useUserUpdateMutation,
  useUserDeleteMutation,
  useSearchUsersMutation
} = extendedApi;



