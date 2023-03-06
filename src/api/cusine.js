import swal from "sweetalert";
import { api } from "../store/middleware/api";

const extendedApi = api.injectEndpoints({
  endpoints: (build) => ({
    
    addCusine: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const addCusineResponse = await fetchWithBQ({
          url: "/api/cuisine/add",
          method: "POST",
          body: _arg,
        });
        console.log('addCusineResponse => ',addCusineResponse)
        if (addCusineResponse.error)
          return swal("Failed!", addCusineResponse.error.data.message, "error");
          
          swal("Success!", `${addCusineResponse.data.message}`, "success");
        return addCusineResponse;
      },
    }),

    updateCusine: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const updateCusineResponse = await fetchWithBQ({
          url: "/api/cuisine/update",
          method: "POST",
          body: _arg,
        });
        console.log('updateCusineResponse => ',updateCusineResponse)
        if (updateCusineResponse.error)
          return swal("Failed!", updateCusineResponse.error.data.message, "error");
          
        swal("Success!", `${updateCusineResponse.data.message}`, "success");

        return updateCusineResponse;
      },
    }),

    deleteCusine: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const deleteCusineResponse = await fetchWithBQ({
          url: "/api/cuisine/delete",
          method: "POST",
          body: _arg,
        });
        console.log('deleteCusineResponse => ',deleteCusineResponse)
        if (deleteCusineResponse.error)
          return swal("Failed!", deleteCusineResponse.error.data.message, "error");
          
        swal("Success!", `${deleteCusineResponse.data.message}`, "success");

        return deleteCusineResponse;
      },
    }),

    getAllCusines: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const getAllCusinesResponse = await fetchWithBQ({
          // url: "/api/cuisine?sortBy=createdAt&page=1&size=20",
          url: "/api/cuisine",
          method: "POST",
          body: _arg,
        });
        console.log('getAllCusinesResponse => ',getAllCusinesResponse?.data)
        if (getAllCusinesResponse.error)
          return swal("Failed!", getAllCusinesResponse.error.data.message, "error");
          
        // swal("Success!", `${getAllCusinesResponse.data.message}`, "success");

        const allCusinesList = getAllCusinesResponse?.data?.data && getAllCusinesResponse?.data?.data.length>0 && getAllCusinesResponse?.data?.data.map((item,i)=>{
          return {
            id:i+1,
            ...item,
            // image: `${item?.image !== undefined ? `https://backend.eatcoast.ca/v1/cuisineImages/${item?.image}` : "assets/images/dish1.svg" }`,
          }
        })

        const newGetAllCusinesResponse = {...getAllCusinesResponse,data:{...getAllCusinesResponse?.data,allCusinesList} }

        return newGetAllCusinesResponse;
        // return getAllCusinesResponse;
      },
    }),  
    
    getDetailOfMealplanOfCusine: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const getDetailOfMealplanOfCusineResponse = await fetchWithBQ({
          url: "/api/cuisine/details/mealplan",
          method: "POST",
          body: _arg,
        });
        console.log('getDetailOfMealplanOfCusineResponse => ',getDetailOfMealplanOfCusineResponse)
        if (getDetailOfMealplanOfCusineResponse.error)
          return swal("Failed!", getDetailOfMealplanOfCusineResponse.error.data.message, "error");
          
        swal("Success!", `${getDetailOfMealplanOfCusineResponse.data.message}`, "success");

        return getDetailOfMealplanOfCusineResponse;
      },
    }),

    searchCusines: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const searchCusinesResponse = await fetchWithBQ({
          url: "/api/cuisine/search",
          method: "POST",
          body: _arg,
        });
        console.log('searchCusinesResponse => ',searchCusinesResponse?.data)
        if (searchCusinesResponse.error)
          return swal("Failed!", searchCusinesResponse.error.data.message, "error");
          
        // swal("Success!", `${searchCusinesResponse.data.message}`, "success");

        const allCusinesList = searchCusinesResponse?.data?.data && searchCusinesResponse?.data?.data.length>0 && searchCusinesResponse?.data?.data.map((item,i)=>{
          return {
            id:i+1,
            ...item,
            // image: `${item?.image !== undefined ? `https://backend.eatcoast.ca/v1/cuisineImages/${item?.image}` : "assets/images/dish1.svg" }`,
          }
        })

        const newGetAllCusinesResponse = {...searchCusinesResponse,data:{...searchCusinesResponse?.data,allCusinesList} }

        return newGetAllCusinesResponse;
        // return searchCusinesResponse;
      },
    }),

  }),
  overrideExisting: false,
});

export const { 
  useAddCusineMutation,
  useUpdateCusineMutation,
  useDeleteCusineMutation,
  useGetAllCusinesMutation,
  useGetDetailOfMealplanOfCusineMutation,
  useSearchCusinesMutation
} = extendedApi;



