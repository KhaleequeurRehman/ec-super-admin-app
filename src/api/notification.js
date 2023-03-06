import swal from "sweetalert";
import { api } from "../store/middleware/api";

const extendedApi = api.injectEndpoints({
  endpoints: (build) => ({

    createNotification: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const createNotificationResponse = await fetchWithBQ({
          url: "/api/notification/send",
          method: "POST",
          body: _arg,
        });
        console.log('createNotificationResponse => ',createNotificationResponse?.data)

        if (createNotificationResponse.error)
          return swal("Failed!", createNotificationResponse.error.data.message, "error");

        // swal("Success!", `${createEditorContentDataResponse.data.message}`, "success");

        return createNotificationResponse;
      },
    }),

    getNotificationHistory: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const getNotificationHistoryResponse = await fetchWithBQ({
          url: "/api/notification/history",
          method: "POST",
          body: _arg,
        });
        console.log('getNotificationHistoryResponse => ',getNotificationHistoryResponse?.data)

        if (getNotificationHistoryResponse.error)
          return swal("Failed!", getNotificationHistoryResponse.error.data.message, "error");

        const allNotificationHistoryList = getNotificationHistoryResponse?.data?.data && getNotificationHistoryResponse?.data?.data.length>0 && getNotificationHistoryResponse?.data?.data.map((item,i)=>{
          return {
            id:i+1,
            ...item,
          }
        })

        return {...getNotificationHistoryResponse,data:{...getNotificationHistoryResponse?.data,allNotificationHistoryList} };

        // return getNotificationHistoryResponse;
      },
    }),

    // getNotificationHistory: build.query({
    //   async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
    //     console.log("getNotificationHistory _arg => ",_arg)
    //     const getNotificationHistoryResponse = await fetchWithBQ({
    //       url: `/api/notification/history?${_arg}`,
    //     });
    //     console.log('getNotificationHistoryResponse => ',getNotificationHistoryResponse?.data)

    //     if (getNotificationHistoryResponse.error)
    //       return swal("Failed!", getNotificationHistoryResponse.error.data.message, "error");

    //     const allNotificationHistoryList = getNotificationHistoryResponse?.data?.data && getNotificationHistoryResponse?.data?.data.length>0 && getNotificationHistoryResponse?.data?.data.map((item,i)=>{
    //       return {
    //         id:i+1,
    //         ...item,
    //       }
    //     })

    //     return {...getNotificationHistoryResponse,data:{...getNotificationHistoryResponse?.data,allNotificationHistoryList} };

    //     // return getNotificationHistoryResponse;
    //   },
    // }),


    getNotificationHistoryOfCustomer: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        console.log("getNotificationHistory _arg => ",_arg)
        const getNotificationHistoryOfCustomerResponse = await fetchWithBQ({
          // url: `/api/notification/history/customer?${_arg}`,
          url: `/api/notification/history/customer`,
          method: "POST",
          body: _arg,
        });
        console.log('getNotificationHistoryOfCustomerResponse => ',getNotificationHistoryOfCustomerResponse?.data)

        if (getNotificationHistoryOfCustomerResponse.error)
          return swal("Failed!", getNotificationHistoryOfCustomerResponse.error.data.message, "error");

        const allNotificationHistoryList = getNotificationHistoryOfCustomerResponse?.data?.data && getNotificationHistoryOfCustomerResponse?.data?.data.length>0 && getNotificationHistoryOfCustomerResponse?.data?.data.map((item,i)=>{
          return {
            id:i+1,
            ...item,
          }
        })

        return {...getNotificationHistoryOfCustomerResponse,data:{...getNotificationHistoryOfCustomerResponse?.data,allNotificationHistoryList} };

        // return getNotificationHistoryResponse;
      },
    }),

    // getNotificationHistoryOfCustomer: build.query({
    //   async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
    //     console.log("getNotificationHistory _arg => ",_arg)
    //     const getNotificationHistoryOfCustomerResponse = await fetchWithBQ({
    //       url: `/api/notification/history/customer?${_arg}`,
    //     });
    //     console.log('getNotificationHistoryOfCustomerResponse => ',getNotificationHistoryOfCustomerResponse?.data)

    //     if (getNotificationHistoryOfCustomerResponse.error)
    //       return swal("Failed!", getNotificationHistoryOfCustomerResponse.error.data.message, "error");

    //     const allNotificationHistoryList = getNotificationHistoryOfCustomerResponse?.data?.data && getNotificationHistoryOfCustomerResponse?.data?.data.length>0 && getNotificationHistoryOfCustomerResponse?.data?.data.map((item,i)=>{
    //       return {
    //         id:i+1,
    //         ...item,
    //       }
    //     })

    //     return {...getNotificationHistoryOfCustomerResponse,data:{...getNotificationHistoryOfCustomerResponse?.data,allNotificationHistoryList} };

    //     // return getNotificationHistoryResponse;
    //   },
    // }),


    getNotificationHistoryOfCaterer: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        console.log("getNotificationHistory _arg => ",_arg)
        const getNotificationHistoryOfCatererResponse = await fetchWithBQ({
          url: `/api/notification/history/caterer`,
          method: "POST",
          body: _arg,
        });
        console.log('getNotificationHistoryOfCatererResponse => ',getNotificationHistoryOfCatererResponse?.data)

        if (getNotificationHistoryOfCatererResponse.error)
          return swal("Failed!", getNotificationHistoryOfCatererResponse.error.data.message, "error");

        const allNotificationHistoryList = getNotificationHistoryOfCatererResponse?.data?.data && getNotificationHistoryOfCatererResponse?.data?.data.length>0 && getNotificationHistoryOfCatererResponse?.data?.data.map((item,i)=>{
          return {
            id:i+1,
            ...item,
          }
        })

        return {...getNotificationHistoryOfCatererResponse,data:{...getNotificationHistoryOfCatererResponse?.data,allNotificationHistoryList} };

        // return getNotificationHistoryResponse;
      },
    }),
    
    // getNotificationHistoryOfCaterer: build.query({
    //   async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
    //     console.log("getNotificationHistory _arg => ",_arg)
    //     const getNotificationHistoryOfCatererResponse = await fetchWithBQ({
    //       url: `/api/notification/history/caterer?${_arg}`,
    //     });
    //     console.log('getNotificationHistoryOfCatererResponse => ',getNotificationHistoryOfCatererResponse?.data)

    //     if (getNotificationHistoryOfCatererResponse.error)
    //       return swal("Failed!", getNotificationHistoryOfCatererResponse.error.data.message, "error");

    //     const allNotificationHistoryList = getNotificationHistoryOfCatererResponse?.data?.data && getNotificationHistoryOfCatererResponse?.data?.data.length>0 && getNotificationHistoryOfCatererResponse?.data?.data.map((item,i)=>{
    //       return {
    //         id:i+1,
    //         ...item,
    //       }
    //     })

    //     return {...getNotificationHistoryOfCatererResponse,data:{...getNotificationHistoryOfCatererResponse?.data,allNotificationHistoryList} };

    //     // return getNotificationHistoryResponse;
    //   },
    // }),

    getNotificationHistoryOfDriver: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        console.log("getNotificationHistory _arg => ",_arg)
        const getNotificationHistoryOfDriverResponse = await fetchWithBQ({
          url: `/api/notification/history/driver`,
          method: "POST",
          body: _arg,
        });
        console.log('getNotificationHistoryOfDriverResponse => ',getNotificationHistoryOfDriverResponse?.data)

        if (getNotificationHistoryOfDriverResponse.error)
          return swal("Failed!", getNotificationHistoryOfDriverResponse.error.data.message, "error");

        const allNotificationHistoryList = getNotificationHistoryOfDriverResponse?.data?.data && getNotificationHistoryOfDriverResponse?.data?.data.length>0 && getNotificationHistoryOfDriverResponse?.data?.data.map((item,i)=>{
          return {
            id:i+1,
            ...item,
          }
        })

        return {...getNotificationHistoryOfDriverResponse,data:{...getNotificationHistoryOfDriverResponse?.data,allNotificationHistoryList} };

        // return getNotificationHistoryResponse;
      },
    }),

    // getNotificationHistoryOfDriver: build.query({
    //   async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
    //     console.log("getNotificationHistory _arg => ",_arg)
    //     const getNotificationHistoryOfDriverResponse = await fetchWithBQ({
    //       url: `/api/notification/history/driver?${_arg}`,
    //     });
    //     console.log('getNotificationHistoryOfDriverResponse => ',getNotificationHistoryOfDriverResponse?.data)

    //     if (getNotificationHistoryOfDriverResponse.error)
    //       return swal("Failed!", getNotificationHistoryOfDriverResponse.error.data.message, "error");

    //     const allNotificationHistoryList = getNotificationHistoryOfDriverResponse?.data?.data && getNotificationHistoryOfDriverResponse?.data?.data.length>0 && getNotificationHistoryOfDriverResponse?.data?.data.map((item,i)=>{
    //       return {
    //         id:i+1,
    //         ...item,
    //       }
    //     })

    //     return {...getNotificationHistoryOfDriverResponse,data:{...getNotificationHistoryOfDriverResponse?.data,allNotificationHistoryList} };

    //     // return getNotificationHistoryResponse;
    //   },
    // }),

  }),
  overrideExisting: false,
});

export const { 
    useCreateNotificationMutation,
    useGetNotificationHistoryMutation,
    useGetNotificationHistoryQuery,
    useGetNotificationHistoryOfCustomerQuery,
    useGetNotificationHistoryOfCustomerMutation,
    useGetNotificationHistoryOfCatererQuery,
    useGetNotificationHistoryOfCatererMutation,
    useGetNotificationHistoryOfDriverQuery,
    useGetNotificationHistoryOfDriverMutation
} = extendedApi;



