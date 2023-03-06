import moment from "moment/moment";
import swal from "sweetalert";
import { api } from "../store/middleware/api";

const extendedApi = api.injectEndpoints({
  endpoints: (build) => ({
  
    getDrivers: build.mutation({
        async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
          const driverResponse = await fetchWithBQ({
            url: "/api/driver",
            method: "POST",
            body: _arg,
          });
          
          if (driverResponse.error)
            return swal("Failed!", driverResponse.error.data.message, "error")
            const driverList = driverResponse && driverResponse?.data?.data.map((item,i)=>{
                return {
                id: i+1,
                ...item
              }
            })

            //   const customerName = `${item?.firstName !== undefined? item?.firstName : ''} ${item?.lastName !== undefined? item?.lastName : ''} ${item?.fullName !== undefined? item?.fullName : ''}`

            //   return {
            //     id: i+1,
            //     // customer: `${item?.firstName !== undefined? item?.firstName : ''} ${item?.lastName !== undefined? item?.lastName : ''} ${item?.fullName !== undefined? item?.fullName : ''}`,
            //     customer: customerName,
            //     role: item?.role || "Super Administrator",
            //     ...item
            //   }
            // })

          return {...driverResponse,data:{...driverResponse.data,driverList}};
            // return driverResponse
        },
      }),
  
    getAllDriversWithFilter: build.mutation({
        async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
          const getAllDriversWithFilterResponse = await fetchWithBQ({
            url: "/api/driver",
            method: "POST",
            body: _arg,
          });
          
          if (getAllDriversWithFilterResponse.error)
            return swal("Failed!", getAllDriversWithFilterResponse.error.data.message, "error")
            
            const driverList = getAllDriversWithFilterResponse && getAllDriversWithFilterResponse?.data?.data.map((item,i)=>{
                return {
                id: i+1,
                ...item
              }
            })

          return {...getAllDriversWithFilterResponse,data:{...getAllDriversWithFilterResponse.data,driverList}};
            // return getAllDriversWithFilterResponse
        },
      }),
  
    getAllDriversWithFilterWithStatus: build.mutation({
        async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
          const getAllDriversWithFilterWithStatusResponse = await fetchWithBQ({
            url: "/api/driver/filter/status",
            method: "POST",
            body: _arg,
          });
          
          if (getAllDriversWithFilterWithStatusResponse.error)
            return swal("Failed!", getAllDriversWithFilterWithStatusResponse.error.data.message, "error")
            
            const driverList = getAllDriversWithFilterWithStatusResponse && getAllDriversWithFilterWithStatusResponse?.data?.data.map((item,i)=>{
                return {
                id: i+1,
                ...item
              }
            })

          return {...getAllDriversWithFilterWithStatusResponse,data:{...getAllDriversWithFilterWithStatusResponse.data,driverList}};
            // return getAllDriversWithFilterWithStatusResponse
        },
      }),

    getDriverDetail: build.mutation({
        async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
          const driverDetailResponse = await fetchWithBQ({
            url: "/api/driver/details",
            method: "POST",
            body: _arg,
          });
          
          if (driverDetailResponse.error)
            return swal("Failed!", driverDetailResponse.error.data.message, "error")

            
            return driverDetailResponse
        },
      }),

    getAllDriverRequests: build.mutation({
        async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
          const driverRequestsResponse = await fetchWithBQ({
            // url: "/api/driver/all",
            url: "/api/driver",
            method: "POST",
            body: _arg,
          });
          
          if (driverRequestsResponse.error)
            return swal("Failed!", driverRequestsResponse.error.data.message, "error")

            
            return driverRequestsResponse
        },
      }),

    getDriverRequestWithStatus: build.mutation({
        async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
          const driverRequestResponse = await fetchWithBQ({
            url: "/api/driver/filter/status",
            method: "POST",
            body: _arg,
          });
          
          if (driverRequestResponse.error)
            return swal("Failed!", driverRequestResponse.error.data.message, "error")

            swal("Success!", `${driverRequestResponse.data.message}`, "success");

            return driverRequestResponse
        },
      }),

    getDriverRequestWithStatusTerminated: build.mutation({
        async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
          const driverRequestResponse = await fetchWithBQ({
            url: "/api/driver/terminated",
            method: "POST",
            body: _arg,
          });
          
          if (driverRequestResponse.error)
            return swal("Failed!", driverRequestResponse.error.data.message, "error")

            swal("Success!", `${driverRequestResponse.data.message}`, "success");

            return driverRequestResponse
        },
      }),

    getDriverRequestWithStatusRejected: build.mutation({
        async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
          const driverRequestResponse = await fetchWithBQ({
            url: "/api/driver/rejected",
            method: "POST",
            body: _arg,
          });
          
          if (driverRequestResponse.error)
            return swal("Failed!", driverRequestResponse.error.data.message, "error")

            swal("Success!", `${driverRequestResponse.data.message}`, "success");

            return driverRequestResponse
        },
      }),

    getDriverRequestWithStatusRevission: build.mutation({
        async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
          const driverRequestResponse = await fetchWithBQ({
            url: "/api/driver/revission",
            method: "POST",
            body: _arg,
          });
          
          if (driverRequestResponse.error)
            return swal("Failed!", driverRequestResponse.error.data.message, "error")

            swal("Success!", `${driverRequestResponse.data.message}`, "success");

            return driverRequestResponse
        },
      }),

    getDriverRequestWithStatusRequest: build.mutation({
        async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
          const driverRequestResponse = await fetchWithBQ({
            url: "/api/driver/request",
            method: "POST",
            body: _arg,
          });
          
          if (driverRequestResponse.error)
            return swal("Failed!", driverRequestResponse.error.data.message, "error")

            swal("Success!", `${driverRequestResponse.data.message}`, "success");

            return driverRequestResponse
        },
      }),

    updateDriverRequestStatus: build.mutation({
        async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
          const driverRequestResponse = await fetchWithBQ({
            url: "/api/driver/update/status",
            method: "POST",
            body: _arg,
          });
          
          if (driverRequestResponse.error)
            return swal("Failed!", driverRequestResponse.error.data.message, "error")

            swal("Success!", `${driverRequestResponse.data.message}`, "success");
            
            return driverRequestResponse
        },
      }),

    searchDrivers: build.mutation({
        async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
          const searchDriverResponse = await fetchWithBQ({
            url: "/api/driver/search",
            method: "POST",
            body: _arg,
          });
          
          if (searchDriverResponse.error)
            return swal("Failed!", searchDriverResponse.error.data.message, "error")
            
            return searchDriverResponse
        },
      }),

      getFinancialDetailOfDriver: build.mutation({
        async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
          const financialDetailOfDriverResponse = await fetchWithBQ({
            url: "/api/driver/financial",
            method: "POST",
            body: _arg,
          });
  
          if (financialDetailOfDriverResponse.error)
          return swal("Failed!", financialDetailOfDriverResponse.error.data.message, "error");
          
          return financialDetailOfDriverResponse;
        },
      }),

      getSubscriptionForFinancialDetailOfDriver: build.mutation({
        async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
          const subscriptionForFinancialDetailOfDriverResponse = await fetchWithBQ({
            url: "/api/driver/details/subscription",
            method: "POST",
            body: _arg,
          });
  
          
        if (subscriptionForFinancialDetailOfDriverResponse.error)
        return swal("Failed!", subscriptionForFinancialDetailOfDriverResponse.error.data.message, "error");

        const newSubscriptionData = subscriptionForFinancialDetailOfDriverResponse?.data && subscriptionForFinancialDetailOfDriverResponse?.data?.data.map((item,i)=> {

          return {
            id: i+1,
            subId:`${item?.Id !== undefined ? item?.Id : 'no data'}`,
            date: `${item?.date  !== undefined ? `${moment(item?.date).format('ll')}` : 'no data'}`,
            time: `${item?.time ==="Morning"? '10.00 AM - 01.00 PM':item?.time ==="Evening"? '04.00 PM - 06.00PM':'no data'}`,
            type: `${item?.type !== undefined ? `${item?.type} subscription` : 'no data'}`,
            amount: `${item?.amount !== undefined ? `+ $${item?.amount}` : 'no data'}`,
          }
        })
        return {...subscriptionForFinancialDetailOfDriverResponse,data: {...subscriptionForFinancialDetailOfDriverResponse.data,newSubscriptionData}};
        // return subscriptionForFinancialDetailOfDriverResponse;
        },
      }),

      makeAdjustmentForFinancialDetailOfDriver: build.mutation({
        async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
          const makeAdjustmentForFinancialDetailOfDriverResponse = await fetchWithBQ({
            url: "/api/driver/make/adjustment",
            method: "POST",
            body: _arg,
          });
  
          if (makeAdjustmentForFinancialDetailOfDriverResponse.error)
          return swal("Failed!", makeAdjustmentForFinancialDetailOfDriverResponse.error.data.message, "error");
  
          swal("Success!", `${makeAdjustmentForFinancialDetailOfDriverResponse.data.message}`, "success");
                
          return makeAdjustmentForFinancialDetailOfDriverResponse;
        },
      }),

  }),
  overrideExisting: false,
});

export const { 
    useGetDriversMutation,
    useGetDriverDetailMutation,
    useGetAllDriverRequestsMutation,
    useGetDriverRequestWithStatusTerminatedMutation,
    useGetDriverRequestWithStatusRejectedMutation,
    useGetDriverRequestWithStatusRevissionMutation,
    useGetDriverRequestWithStatusRequestMutation,
    useUpdateDriverRequestStatusMutation,
    useSearchDriversMutation,
    useGetFinancialDetailOfDriverMutation,
    useGetSubscriptionForFinancialDetailOfDriverMutation,
    useMakeAdjustmentForFinancialDetailOfDriverMutation,
    useGetAllDriversWithFilterMutation,
    useGetAllDriversWithFilterWithStatusMutation,
    useGetDriverRequestWithStatusMutation
} = extendedApi;



