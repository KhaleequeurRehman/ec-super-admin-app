import moment from "moment/moment";
import swal from "sweetalert";
import { api } from "../store/middleware/api";

const extendedApi = api.injectEndpoints({
  endpoints: (build) => ({
    // getSubscriptions: build.query({
    //     query: () => `/api/admin/sub`,
    //   }),
    getSubscriptions: build.mutation({
        async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
          const subscriptionResponse = await fetchWithBQ({
            url: "/api/admin/sub",
            method: "POST",
            body: _arg,
          });
           const subscriptionList = subscriptionResponse?.data?.Details?.SubDetails
                const newSubscriptionList = subscriptionList && subscriptionList.map((item,i)=> {
                  return {
                    id: i+1,
                    // customerName: "Mesopotamian cuisine",
                    ...item
                }
              })
                
          return {...subscriptionResponse,data: {...subscriptionResponse.data,newSubscriptionList}};
          // return subscriptionResponse;
        },
      }),
      
    filterSubscriptions: build.mutation({
        async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
          const subscriptionResponse = await fetchWithBQ({
            url: "/api/admin/sub/filter/status",
            method: "POST",
            body: _arg,
          });
           const subscriptionList = subscriptionResponse?.data?.data
                const newSubscriptionList = subscriptionList && subscriptionList.map((item,i)=> {
                  return {
                    id: i+1,
                    // customerName: "Mesopotamian cuisine",
                    ...item
                }
              })
                
          return {...subscriptionResponse,data: {...subscriptionResponse.data,newSubscriptionList}};
          // return subscriptionResponse;
        },
      }),

    getSubscriptionHistory: build.mutation({
        async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
          const subscriptionHistoryResponse = await fetchWithBQ({
            url: "/api/admin/sub/history",
            method: "POST",
            body: _arg,
          });
                const subscriptionHistoryList = subscriptionHistoryResponse?.data?.data && subscriptionHistoryResponse?.data?.data.map((item,i)=> {
                  return {
                    id: i+1,
                    ...item
                }
              })
                
          return {...subscriptionHistoryResponse,data: {...subscriptionHistoryResponse.data,subscriptionHistoryList}};
          // return subscriptionHistoryResponse;
        },
      }),


    getSubscriptionDetail: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const subscriptionDetailResponse = await fetchWithBQ({
          url: "/api/admin/sub/details",
          method: "POST",
          body: _arg,
        });
          // const subscriptionList = subscriptionDetailResponse?.data?.Details?.SubDetails
          //     const newSubscriptionList = subscriptionList && subscriptionList.map((item,i)=> {
          //       return {
          //         id: i+1,
          //         customerName: "Mesopotamian cuisine",
          //         ...item
          //     }
          //   })
              
        // return {...subscriptionDetailResponse,data: {...subscriptionDetailResponse.data,newSubscriptionList}};
        return subscriptionDetailResponse;
      },
    }),
    cancelSubscription: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const cancelSubscriptionResponse = await fetchWithBQ({
          url: "/api/subcription/cancel",
          method: "POST",
          body: _arg,
        });
        if (cancelSubscriptionResponse.error)
        return swal("Failed!", cancelSubscriptionResponse.error.data.message, "error");
        
          swal("Success!", `${cancelSubscriptionResponse.data.message}`, "success");
          
        return cancelSubscriptionResponse;
      },
    }),
    pauseSubscription: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const pauseSubscription = await fetchWithBQ({
          url: "/api/subcription/pause",
          method: "POST",
          body: _arg,
        });
        if (pauseSubscription.error)
        return swal("Failed!", pauseSubscription.error.data.message, "error");
        
          swal("Success!", `${pauseSubscription.data.message}`, "success");

        return pauseSubscription;
      },
    }),

    searchSubscriptions: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const subscriptionResponse = await fetchWithBQ({
          url: "/api/admin/sub/search",
          method: "POST",
          body: _arg,
        });
        
         console.log("subscriptionResponse?.data?.data ",subscriptionResponse?.data?.data)
              const newSubscriptionList = subscriptionResponse?.data?.data && subscriptionResponse?.data?.data.map((item,i)=> {
                return {
                  id: i+1,
                  ...item
              }
            })
              
        return {...subscriptionResponse,data: {...subscriptionResponse.data,newSubscriptionList}};
        // return subscriptionResponse;
      },
    }),

    searchSubscriptionHistory: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const subscriptionHistoryResponse = await fetchWithBQ({
          url: "/api/admin/sub/history/search",
          method: "POST",
          body: _arg,
        });
        
         console.log("subscriptionHistoryResponse?.data?.data ",subscriptionHistoryResponse?.data?.data)
              const subscriptionHistoryList = subscriptionHistoryResponse?.data?.data && subscriptionHistoryResponse?.data?.data.map((item,i)=> {
                return {
                  id: i+1,
                  ...item
              }
            })
              
        return {...subscriptionHistoryResponse,data: {...subscriptionHistoryResponse.data,subscriptionHistoryList}};
        // return subscriptionHistoryResponse;
      },
    }),
    
    // getSubscriptions: build.query({
    //     async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
    //       const subscriptionResponse = await fetchWithBQ({
    //         url: "/api/admin/sub",
    //       });
    //       const subscriptionList = subscriptionResponse?.data?.Details?.SubDetails
    //       const newSubscriptionList = subscriptionList && subscriptionList.map((item,i)=> {
    //         return {
    //           id: i+1,
    //           idSubs: item?._id || '',
    //           customerName: "Mesopotamian cuisine",
    //           caterer: item?.orderFrom || '',
    //           type: item?.type? item?.type + ' subscription' : '',
    //           period: item?.subcriptionPeriod == 0? 'Weekly' : item?.subcriptionPeriod == 1? 'Monthly' : item?.subcriptionPeriod == 2? 'Custom' : '',}
    //       })

    //       const mealPlanArr = subscriptionList && subscriptionList.map((item,i)=>{
    //         return item?.mealCourse
    //       })
          
    //       const mealPlanList = mealPlanArr && mealPlanArr[0].map((item,i)=>{
    //         return {
    //           title: item?.dish,
    //           subTitle: `${item?.quantity} dishes selected`,
    //           imgUrl: "assets/images/dish1.svg",
    //         }
    //       })

    //       const SubscriptionMainCardDataList = subscriptionList && subscriptionList.map((item,i)=>{
    //         return {
    //           heading: "Order #1020",
    //           subHeading: item?.deliveryTime == 0 ? `Estimate delivered at 10:00 Am` : item?.deliveryTime == 1? `Estimate delivered at 4:00 Pm` : '' ,
    //           ChipTitle: `${item?.type} subscription`,
    //           image: "./assets/images/iMacMemoji.svg",
    //           title: item?.orderFrom || "Arabian Kebab, Middle East Special",
    //           sheduledSubTitle: "Scheduled",
    //           dateSubTitle: `${moment(item?.subcriptionDateFrom).format('ll')} - ${moment(item?.subcriptionDateTo).format('ll')}`,
    //           deliveryStatusTitle: item?.subcriptionStaus,
    //         }

    //       })
    //       return {...subscriptionResponse,data: {...subscriptionResponse.data,newSubscriptionList,mealPlanList,SubscriptionMainCardDataList}};
    //     },
    //   }),
  }),
  overrideExisting: false,
});

export const { 
  useGetSubscriptionsMutation,
  useGetSubscriptionDetailMutation,
  useCancelSubscriptionMutation,
  usePauseSubscriptionMutation,
  useSearchSubscriptionsMutation,
  useGetSubscriptionHistoryMutation,
  useSearchSubscriptionHistoryMutation,
  useFilterSubscriptionsMutation
} = extendedApi;



