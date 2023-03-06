import moment from "moment/moment";
import swal from "sweetalert";
import { api } from "../store/middleware/api";

const extendedApi = api.injectEndpoints({
  endpoints: (build) => ({
    // getSubscriptions: build.query({
    //     query: () => `/api/admin/sub`,
    //   }),
    getCaterers: build.mutation({
        async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
          const caterersResponse = await fetchWithBQ({
            url: "/api/caterer",
            method: "POST",
            body: _arg,
          });
        //   console.log('caterersResponse ',caterersResponse)
                const caterersList = caterersResponse?.data && caterersResponse?.data?.data.map((item,i)=> {
                  return {
                    id: i+1,
                    status: item.status !== undefined ? item.status : "no data",
                    // status: item.open === true ? 'open': "closed",
                    ...item
                }
              })
                
          return {...caterersResponse,data: {...caterersResponse.data,caterersList}};
        //   return caterersResponse;
        },
      }),
      
    getAllCaterersWithFilter: build.mutation({
        async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
          const getAllCaterersWithFilterResponse = await fetchWithBQ({
            url: "/api/caterer/get/all",
            method: "POST",
            body: _arg,
          });
        //   console.log('getAllCaterersWithFilterResponse ',getAllCaterersWithFilterResponse)
                const caterersList = getAllCaterersWithFilterResponse?.data && getAllCaterersWithFilterResponse?.data?.data.map((item,i)=> {
                  return {
                    id: i+1,
                    status: item.status !== undefined ? item.status : "no data",
                    // status: item.open === true ? 'open': "closed",
                    ...item
                }
              })
                
          return {...getAllCaterersWithFilterResponse,data: {...getAllCaterersWithFilterResponse.data,caterersList}};
        //   return getAllCaterersWithFilterResponse;
        },
      }),
      
      filterAllCaterersWithStatus: build.mutation({
        async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
          const filterAllCaterersWithStatusResponse = await fetchWithBQ({
            url: "/api/caterer/get/all/filter",
            method: "POST",
            body: _arg,
          });
        //   console.log('filterAllCaterersWithStatusResponse ',filterAllCaterersWithStatusResponse)
                const caterersList = filterAllCaterersWithStatusResponse?.data && filterAllCaterersWithStatusResponse?.data?.data.map((item,i)=> {
                  return {
                    id: i+1,
                    status: item.status !== undefined ? item.status : "no data",
                    // status: item.open === true ? 'open': "closed",
                    ...item
                }
              })
                
          return {...filterAllCaterersWithStatusResponse,data: {...filterAllCaterersWithStatusResponse.data,caterersList}};
        //   return filterAllCaterersWithStatusResponse;
        },
      }),

    getCatererDetail: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const catererDetailResponse = await fetchWithBQ({
          url: "/api/caterer/details",
          method: "POST",
          body: _arg,
        });

        return catererDetailResponse;
      },
    }),
    
    getAllSubscriptionRequestsCaterer: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const catererDetailResponse = await fetchWithBQ({
          url: "/api/caterer/all",
          method: "POST",
          body: _arg,
        });

        return catererDetailResponse;
      },
    }),

    updateCatererStatus: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const updateCatererStatusResponse = await fetchWithBQ({
          url: "/api/caterer/update/status",
          method: "POST",
          body: _arg,
        });
          
        if (updateCatererStatusResponse.error)
        return swal("Failed!", updateCatererStatusResponse.error.data.message, "error");
        
        swal("Success!", `${updateCatererStatusResponse.data.message}`, "success");
        
        return updateCatererStatusResponse;
      },
    }),

    getCatererRequestWithStatusRequest: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const catererRequestResponse = await fetchWithBQ({
          url: "/api/caterer/request",
          method: "POST",
          body: _arg,
        });
          
        if (catererRequestResponse.error)
        return swal("Failed!", catererRequestResponse.error.data.message, "error");
        
        swal("Success!", `${catererRequestResponse.data.message}`, "success");
        
        return catererRequestResponse;
      },
    }),

    getCatererRequestWithStatusRevision: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const catererRequestResponse = await fetchWithBQ({
          url: "/api/caterer/revision",
          method: "POST",
          body: _arg,
        });
          
        if (catererRequestResponse.error)
        return swal("Failed!", catererRequestResponse.error.data.message, "error");
        
        swal("Success!", `${catererRequestResponse.data.message}`, "success");
        
        return catererRequestResponse;
      },
    }),

    getCatererRequestWithStatusRejected: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const catererRequestResponse = await fetchWithBQ({
          url: "/api/caterer/rejected",
          method: "POST",
          body: _arg,
        });
          
        if (catererRequestResponse.error)
        return swal("Failed!", catererRequestResponse.error.data.message, "error");
        
        swal("Success!", `${catererRequestResponse.data.message}`, "success");
        
        return catererRequestResponse;
      },
    }),

    getCatererRequestWithStatusTerminated: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const catererRequestResponse = await fetchWithBQ({
          url: "/api/caterer/terminated",
          method: "POST",
          body: _arg,
        });
          
        if (catererRequestResponse.error)
        return swal("Failed!", catererRequestResponse.error.data.message, "error");
        
        swal("Success!", `${catererRequestResponse.data.message}`, "success");
        
        return catererRequestResponse;
      },
    }),

    getMealPlanListOfCaterer: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const mealPlanListResponse = await fetchWithBQ({
          url: "/api/mealplane/caterer",
          method: "POST",
          body: _arg,
        });
        console.log('mealPlanListsss',mealPlanListResponse?.data?.data)
              const mealPlanList = mealPlanListResponse?.data && mealPlanListResponse?.data?.data.map((item,i)=> {
                return {
                  id: i+1,
                  status: item.reviewStatus === true ? 'active': "inactive",
                  menuName:item.name,
                  cuisine: item.name,
                  _id:item._id
              }
            })
              
        return {...mealPlanListResponse,data: {...mealPlanListResponse.data,mealPlanList}};
        // return mealPlanListResponse;
      },
    }),

    searchCaterers: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const searchCaterersResponse = await fetchWithBQ({
          url: "/api/caterer/search",
          method: "POST",
          body: _arg,
        });
      //   console.log('searchCaterersResponse ',searchCaterersResponse)
              const caterersList = searchCaterersResponse?.data && searchCaterersResponse?.data?.data.map((item,i)=> {
                return {
                  id: i+1,
                  status: item.status !== undefined ? item.status : "no data",
                  // status: item.open === true ? 'open': "closed",
                  ...item
              }
            })
              
        return {...searchCaterersResponse,data: {...searchCaterersResponse.data,caterersList}};
      //   return searchCaterersResponse;
      },
    }),

    // deleteCustomer: build.mutation({
    //   async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
    //     const deleteCustomerResponse = await fetchWithBQ({
    //       url: "/api/admin/delete/customer",
    //       method: "POST",
    //       body: _arg,
    //     });
          
    //     if (deleteCustomerResponse.error)
    //     return swal("Failed!", deleteCustomerResponse.error.data.message, "error");
        
    //     swal("Success!", `${deleteCustomerResponse.data.message}`, "success");

    //     return deleteCustomerResponse;
    //   },
    // }),
    
    getFinancialDetailOfCaterer: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const financialDetailOfCatererResponse = await fetchWithBQ({
          url: "/api/caterer/financial",
          method: "POST",
          body: _arg,
        });

        if (financialDetailOfCatererResponse.error)
        return swal("Failed!", financialDetailOfCatererResponse.error.data.message, "error");

            //   const caterersList = caterersResponse?.data && caterersResponse?.data?.data.map((item,i)=> {
            //     return {
            //       id: i+1,
            //       status: item.open === true ? 'open': "closed",
            //       ...item
            //   }
            // })
              
        // return {...caterersResponse,data: {...caterersResponse.data,caterersList}};
        return financialDetailOfCatererResponse;
      },
    }),

    getSubscriptionForFinancialDetailOfCaterer: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const subscriptionForFinancialDetailOfCatererResponse = await fetchWithBQ({
          url: "/api/caterer/details/subscription",
          method: "POST",
          body: _arg,
        });

        if (subscriptionForFinancialDetailOfCatererResponse.error)
        return swal("Failed!", subscriptionForFinancialDetailOfCatererResponse.error.data.message, "error");

              const newSubscriptionData = subscriptionForFinancialDetailOfCatererResponse?.data && subscriptionForFinancialDetailOfCatererResponse?.data?.data.map((item,i)=> {
              //   return {
              //     id: i+1,
              //     ...item
                  
              // }
              return {
                id: i+1,
                // idOrder:"EC - 12345",
                idOrder:`${item?.Id !== undefined ? item?.Id : 'no data'}`,
                // date: "Thu, 21 Nov 2021",
                date: `${item?.date  !== undefined ? `${moment(item?.date).format('ll')}` : 'no data'}`,
                // time: "04.00 Pm - 06.00 Am",
                time: `${item?.time ==="Morning"? '10.00 AM - 01.00 PM':item?.time ==="Evening"? '04.00 PM - 06.00PM':'no data'}`,
                type: `${item?.type !== undefined ? `${item?.type} subscription` : 'no data'}`,
                amount: `${item?.amount !== undefined ? `+ $${item?.amount}` : 'no data'}`,
              }
            })
            //   const caterersList = caterersResponse?.data && caterersResponse?.data?.data.map((item,i)=> {
            //     return {
            //       id: i+1,
            //       status: item.open === true ? 'open': "closed",
            //       ...item
            //   }
            // })
              
        return {...subscriptionForFinancialDetailOfCatererResponse,data: {...subscriptionForFinancialDetailOfCatererResponse.data,newSubscriptionData}};
        // return subscriptionForFinancialDetailOfCatererResponse;
      },
    }),

    makeAdjustmentForFinancialDetailOfCaterer: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const makeAdjustmentForFinancialDetailOfCatererResponse = await fetchWithBQ({
          url: "/api/caterer/make/adjustment",
          method: "POST",
          body: _arg,
        });

        if (makeAdjustmentForFinancialDetailOfCatererResponse.error)
        return swal("Failed!", makeAdjustmentForFinancialDetailOfCatererResponse.error.data.message, "error");

        swal("Success!", `${makeAdjustmentForFinancialDetailOfCatererResponse.data.message}`, "success");
              
        return makeAdjustmentForFinancialDetailOfCatererResponse;
      },
    }),
  }),
  overrideExisting: false,
});

export const { 
useGetCaterersMutation,
useGetCatererDetailMutation,
useGetMealPlanListOfCatererMutation,
useGetAllSubscriptionRequestsCatererMutation,
useUpdateCatererStatusMutation,
useGetCatererRequestWithStatusRejectedMutation,
useGetCatererRequestWithStatusRequestMutation,
useGetCatererRequestWithStatusRevisionMutation,
useGetCatererRequestWithStatusTerminatedMutation,
useSearchCaterersMutation,
useGetFinancialDetailOfCatererMutation,
useGetSubscriptionForFinancialDetailOfCatererMutation,
useMakeAdjustmentForFinancialDetailOfCatererMutation,
useGetAllCaterersWithFilterMutation,
useFilterAllCaterersWithStatusMutation
} = extendedApi;



