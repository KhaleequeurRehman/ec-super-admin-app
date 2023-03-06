import swal from "sweetalert";
import { api } from "../store/middleware/api";

const extendedApi = api.injectEndpoints({
  endpoints: (build) => ({
    
    // addMealplan: build.mutation({
    //   async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
    //     const addMealplanResponse = await fetchWithBQ({
    //       url: "/api/mealplane/add",
    //       method: "POST",
    //       body: _arg,
    //     });
    //     console.log('addMealplanResponse => ',addMealplanResponse)
    //     if (addMealplanResponse.error)
    //       return swal("Failed!", addMealplanResponse.error.data.message, "error");
          
    //     swal("Success!", `${addMealplanResponse.data.message}`, "success");
        
    //     return addMealplanResponse;
    //   },
    // }),

    getDashboardAnalytics: build.query({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const getDashboardAnalyticsResponse = await fetchWithBQ({
          url: "/api/admin/analytics"
        });
        console.log('getDashboardAnalyticsResponse => ',getDashboardAnalyticsResponse?.data)
        if (getDashboardAnalyticsResponse.error)
          return swal("Failed!", getDashboardAnalyticsResponse.error.data.message, "error");

        return getDashboardAnalyticsResponse;
      },
    }),


  }),
  overrideExisting: false,
});

export const { 
  useGetDashboardAnalyticsQuery
} = extendedApi;



