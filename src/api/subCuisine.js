import swal from "sweetalert";
import { api } from "../store/middleware/api";

const extendedApi = api.injectEndpoints({
  endpoints: (build) => ({

    getAllSubCusines: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const getAllSubCusinesResponse = await fetchWithBQ({
          // url: "/api/cuisine?sortBy=createdAt&page=1&size=20",
          url: "/api/cuisine",
          method: "POST",
          body: _arg,
        });
        console.log('getAllSubCusinesResponse => ',getAllSubCusinesResponse?.data)
        if (getAllSubCusinesResponse.error)
          return swal("Failed!", getAllSubCusinesResponse.error.data.message, "error");
          
        // swal("Success!", `${getAllSubCusinesResponse.data.message}`, "success");

        const allSubCusinesList = getAllSubCusinesResponse?.data?.data && getAllSubCusinesResponse?.data?.data.length>0 && getAllSubCusinesResponse?.data?.data.map((item,i)=>{
          return {
            id:i+1,
            ...item,
            // image: `${item?.image !== undefined ? `https://backend.eatcoast.ca/v1/cuisineImages/${item?.image}` : "assets/images/dish1.svg" }`,
          }
        })

        const newGetAllSubCusinesResponse = {...getAllSubCusinesResponse,data:{...getAllSubCusinesResponse?.data,allSubCusinesList} }

        return newGetAllSubCusinesResponse;
        // return getAllSubCusinesResponse;
      },
    }),

    deleteSubCusine: build.mutation({
        async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
            const deleteSubCusineResponse = await fetchWithBQ({
            url: "/api/cuisine/delete",
            method: "POST",
            body: _arg,
            });
            console.log('deleteSubCusineResponse => ',deleteSubCusineResponse)
            if (deleteSubCusineResponse.error)
            return swal("Failed!", deleteSubCusineResponse.error.data.message, "error");
            
            swal("Success!", `${deleteSubCusineResponse.data.message}`, "success");

            return deleteSubCusineResponse;
        },
        }),

        addSubCusine: build.mutation({
          async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
            const addSubCusineResponse = await fetchWithBQ({
              url: "/api/cuisine/add",
              method: "POST",
              body: _arg,
            });
            console.log('addSubCusineResponse => ',addSubCusineResponse)
            if (addSubCusineResponse.error)
              return swal("Failed!", addSubCusineResponse.error.data.message, "error");
              
              swal("Success!", `${addSubCusineResponse.data.message}`, "success");
            return addSubCusineResponse;
          },
      }),

      updateSubCusine: build.mutation({
        async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
          const updateSubCusineResponse = await fetchWithBQ({
            url: "/api/cuisine/update",
            method: "POST",
            body: _arg,
          });
          console.log('updateSubCusineResponse => ',updateSubCusineResponse)
          if (updateSubCusineResponse.error)
            return swal("Failed!", updateSubCusineResponse.error.data.message, "error");
            
          swal("Success!", `${updateSubCusineResponse.data.message}`, "success");

          return updateSubCusineResponse;
        },
      }),

      searchSubCusines: build.mutation({
        async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
          const searchSubCusinesResponse = await fetchWithBQ({
            url: "/api/cuisine/search/subcuisine",
            method: "POST",
            body: _arg,
          });
          console.log('searchSubCusinesResponse => ',searchSubCusinesResponse?.data)
          if (searchSubCusinesResponse.error)
            return swal("Failed!", searchSubCusinesResponse.error.data.message, "error");
            
          // swal("Success!", `${searchSubCusinesResponse.data.message}`, "success");
  
          const allSubCusinesList = searchSubCusinesResponse?.data?.data && searchSubCusinesResponse?.data?.data.length>0 && searchSubCusinesResponse?.data?.data.map((item,i)=>{
            return {
              id:i+1,
              ...item,
              // image: `${item?.image !== undefined ? `https://backend.eatcoast.ca/v1/cuisineImages/${item?.image}` : "assets/images/dish1.svg" }`,
            }
          })
  
          const newGetAllSubCusinesResponse = {...searchSubCusinesResponse,data:{...searchSubCusinesResponse?.data,allSubCusinesList} }
  
          return newGetAllSubCusinesResponse;
          // return searchSubCusinesResponse;
        },
      }),

    // getDetailOfMealplanOfCusine: build.mutation({
    //   async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
    //     const getDetailOfMealplanOfCusineResponse = await fetchWithBQ({
    //       url: "/api/cuisine/details/mealplan",
    //       method: "POST",
    //       body: _arg,
    //     });
    //     console.log('getDetailOfMealplanOfCusineResponse => ',getDetailOfMealplanOfCusineResponse)
    //     if (getDetailOfMealplanOfCusineResponse.error)
    //       return swal("Failed!", getDetailOfMealplanOfCusineResponse.error.data.message, "error");
          
    //     swal("Success!", `${getDetailOfMealplanOfCusineResponse.data.message}`, "success");

    //     return getDetailOfMealplanOfCusineResponse;
    //   },
    // }),

  }),
  overrideExisting: false,
});

export const { 
    useGetAllSubCusinesMutation,
    useDeleteSubCusineMutation,
    useAddSubCusineMutation,
    useUpdateSubCusineMutation,
    useSearchSubCusinesMutation
} = extendedApi;



