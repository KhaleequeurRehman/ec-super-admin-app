import swal from "sweetalert";
import { api } from "../store/middleware/api";

const extendedApi = api.injectEndpoints({
  endpoints: (build) => ({
    
    addMealplan: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const addMealplanResponse = await fetchWithBQ({
          url: "/api/mealplane/add",
          method: "POST",
          body: _arg,
        });
        console.log('addMealplanResponse => ',addMealplanResponse)
        if (addMealplanResponse.error)
          return swal("Failed!", addMealplanResponse.error.data.message, "error");
          
        swal("Success!", `${addMealplanResponse.data.message}`, "success");
        
        return addMealplanResponse;
      },
    }),

    updateMealplan: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const updateMealplanResponse = await fetchWithBQ({
          url: "/api/mealplane/update",
          method: "POST",
          body: _arg,
        });
        console.log('updateMealplanResponse => ',updateMealplanResponse)
        if (updateMealplanResponse.error)
          return swal("Failed!", updateMealplanResponse.error.data.message, "error");
          
        swal("Success!", `${updateMealplanResponse.data.message}`, "success");

        return updateMealplanResponse;
      },
    }),

    deleteMealplan: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const deleteMealplanResponse = await fetchWithBQ({
          url: "/api/mealplane/delete",
          method: "POST",
          body: _arg,
        });
        console.log('deleteMealplanResponse => ',deleteMealplanResponse)
        if (deleteMealplanResponse.error)
          return swal("Failed!", deleteMealplanResponse.error.data.message, "error");
          
        swal("Success!", `${deleteMealplanResponse.data.message}`, "success");

        return deleteMealplanResponse;
      },
    }),

    getAllMealpans: build.query({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const getAllMealpansResponse = await fetchWithBQ({
          url: "/api/mealplane/get"
        });
        console.log('getAllMealpansResponse => ',getAllMealpansResponse?.data)
        if (getAllMealpansResponse.error)
          return swal("Failed!", getAllMealpansResponse.error.data.message, "error");

          const allMealplanList = getAllMealpansResponse?.data?.data && getAllMealpansResponse?.data?.data.length>0 && getAllMealpansResponse?.data?.data.map((item,i)=> {
            return {
              id:i+1,
              // image: "assets/images/dish1.svg",
              // image: `${item?.image !== undefined ? `https://backend.eatcoast.ca/v1/mealplane/${item?.image}` : "assets/images/dish1.svg" }`,
              image: `${item?.image !== undefined ? item?.image : "assets/images/dish1.svg" }`,
              menuName: `${item?.name !== undefined ? item?.name : 'no data'}`,
              cuisine:`${item?.cuisine !== undefined ? item?.cuisine : 'no data'}`,
              caterer:`${item?.owner !== undefined ? item?.owner : 'no data'}`,
              period:{
                from:`${item?.createdAt !== undefined ? new Date(item?.createdAt).toLocaleDateString() : 'no data'}`,
                to:`${item?.endDate  !== undefined ? new Date(item?.endDate).toLocaleDateString() : 'no data'}`
              },
              status:`${item?.status !== undefined ? item?.status :'no data'}`,
              // status:`${item?.status !== undefined ? item?.status === true ? "Active"  : "Deactive" :'no data'}`,
              _id:item?._id
            }
          })
          
        console.log('allMealplanList',{...getAllMealpansResponse,data:{...getAllMealpansResponse?.data,allMealplanList}})

        const newGetAllMealpansResponse ={...getAllMealpansResponse,data:{...getAllMealpansResponse?.data,allMealplanList}}

        return newGetAllMealpansResponse;
        // return getAllMealpansResponse;
      },
    }),

    getAllMealpansWithFilter: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const getAllMealpansWithFilterResponse = await fetchWithBQ({
          url: `/api/mealplane/get/all`,
          method: "POST",
          body: _arg,
        });
        console.log('getAllMealpansWithFilterResponse => ',getAllMealpansWithFilterResponse?.data)
        if (getAllMealpansWithFilterResponse.error)
          return swal("Failed!", getAllMealpansWithFilterResponse.error.data.message, "error");

          const allMealplanList = getAllMealpansWithFilterResponse?.data?.data && getAllMealpansWithFilterResponse?.data?.data.length>0 && getAllMealpansWithFilterResponse?.data?.data.map((item,i)=> {
            return {
              id:i+1,
              image: `${item?.image !== undefined ? item?.image : "assets/images/dish1.svg" }`,
              menuName: `${item?.name !== undefined ? item?.name : 'no data'}`,
              cuisine:`${item?.cuisine !== undefined ? item?.cuisine : 'no data'}`,
              caterer:`${item?.owner !== undefined ? item?.owner : 'no data'}`,
              period:{
                from:`${item?.createdAt !== undefined ? new Date(item?.createdAt).toLocaleDateString() : 'no data'}`,
                to:`${item?.endDate  !== undefined ? new Date(item?.endDate).toLocaleDateString() : 'no data'}`
              },
              status:`${item?.status !== undefined ? item?.status :'no data'}`,
              // status:`${item?.status !== undefined ? item?.status === true ? "Active"  : "Deactive" :'no data'}`,
              _id:item?._id,
              data:item
            }
          })
          

        const newGetAllMealpansResponse ={...getAllMealpansWithFilterResponse,data:{...getAllMealpansWithFilterResponse?.data,allMealplanList}}

        return newGetAllMealpansResponse;
        // return getAllMealpansWithFilterResponse;
      },
    }),

    filterMealpansWithStatus: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const filterMealpansWithStatusResponse = await fetchWithBQ({
          url: `/api/mealplane/filter`,
          method: "POST",
          body: _arg,
        });
        console.log('filterMealpansWithStatusResponse => ',filterMealpansWithStatusResponse?.data)
        if (filterMealpansWithStatusResponse.error)
          return swal("Failed!", filterMealpansWithStatusResponse.error.data.message, "error");

          const allMealplanList = filterMealpansWithStatusResponse?.data?.data && filterMealpansWithStatusResponse?.data?.data.length>0 && filterMealpansWithStatusResponse?.data?.data.map((item,i)=> {
            return {
              id:i+1,
              image: `${item?.image !== undefined ? item?.image : "assets/images/dish1.svg" }`,
              menuName: `${item?.name !== undefined ? item?.name : 'no data'}`,
              cuisine:`${item?.cuisine !== undefined ? item?.cuisine : 'no data'}`,
              caterer:`${item?.owner !== undefined ? item?.owner : 'no data'}`,
              period:{
                from:`${item?.createdAt !== undefined ? new Date(item?.createdAt).toLocaleDateString() : 'no data'}`,
                to:`${item?.endDate  !== undefined ? new Date(item?.endDate).toLocaleDateString() : 'no data'}`
              },
              status:`${item?.status !== undefined ? item?.status :'no data'}`,
              // status:`${item?.status !== undefined ? item?.status === true ? "Active"  : "Deactive" :'no data'}`,
              _id:item?._id,
              data:item
            }
          })
          

        const newGetAllMealpansResponse ={...filterMealpansWithStatusResponse,data:{...filterMealpansWithStatusResponse?.data,allMealplanList}}

        return newGetAllMealpansResponse;
        // return filterMealpansWithStatusResponse;
      },
    }),

    getMealplanDetail: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const getMealplanDetailResponse = await fetchWithBQ({
          url: "/api/mealplane/detail",
          method: "POST",
          body: _arg,
        });
        console.log('getMealplanDetailResponse => ',getMealplanDetailResponse)
        if (getMealplanDetailResponse.error)
          return swal("Failed!", getMealplanDetailResponse.error.data.message, "error");

        return getMealplanDetailResponse;
      },
    }),

    disableMealplan: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const disableMealplanResponse = await fetchWithBQ({
          url: "/api/mealplane/disable",
          method: "POST",
          body: _arg,
        });
        console.log('disableMealplanResponse => ',disableMealplanResponse)
        if (disableMealplanResponse.error)
          return swal("Failed!", disableMealplanResponse.error.data.message, "error");

          swal("Success!", `${disableMealplanResponse.data.message}`, "success");

        return disableMealplanResponse;
      },
    }),

    searchMealpans: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const searchMealpansResponse = await fetchWithBQ({
          url: "/api/mealplane/search",
          method: "POST",
          body: _arg,
        });
        console.log('searchMealpansResponse => ',searchMealpansResponse?.data)
        if (searchMealpansResponse.error)
          return swal("Failed!", searchMealpansResponse.error.data.message, "error");

          const allMealplanList = searchMealpansResponse?.data?.data && searchMealpansResponse?.data?.data.length>0 && searchMealpansResponse?.data?.data.map((item,i)=> {
            return {
              id:i+1,
              image: `${item?.image !== undefined ? item?.image : "assets/images/dish1.svg" }`,
              menuName: `${item?.name !== undefined ? item?.name : 'no data'}`,
              cuisine:`${item?.cuisine !== undefined ? item?.cuisine : 'no data'}`,
              caterer:`${item?.owner !== undefined ? item?.owner : 'no data'}`,
              period:{
                from:`${item?.createdAt !== undefined ? new Date(item?.createdAt).toLocaleDateString() : 'no data'}`,
                to:`${item?.endDate  !== undefined ? new Date(item?.endDate).toLocaleDateString() : 'no data'}`
              },
              status:`${item?.status !== undefined ? item?.status === true ? "Active"  : "Deactive" :'no data'}`,
              _id:item?._id
            }
          })
          
        console.log('allMealplanList',{...searchMealpansResponse,data:{...searchMealpansResponse?.data,allMealplanList}})

        const newSearchMealpansResponse ={...searchMealpansResponse,data:{...searchMealpansResponse?.data,allMealplanList}}

        return newSearchMealpansResponse;
        // return searchMealpansResponse;
      },
    }),
  }),
  overrideExisting: false,
});

export const { 
  useAddMealplanMutation,
  useUpdateMealplanMutation,
  useDeleteMealplanMutation,
  useGetAllMealpansQuery,
  useGetMealplanDetailMutation,
  useSearchMealpansMutation,
  useGetAllMealpansWithFilterMutation,
  useFilterMealpansWithStatusMutation,
  useDisableMealplanMutation
  // useGetAllMealpansWithFilterQuery
} = extendedApi;



