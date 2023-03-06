import swal from "sweetalert";
import { api } from "../store/middleware/api";

const extendedApi = api.injectEndpoints({
  endpoints: (build) => ({

    getAllPublishedContent: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const getAllPublishedContentResponse = await fetchWithBQ({
          url: "/api/content/editor/publish",
          method: "POST",
          body: _arg,
        });
        console.log('getAllPublishedContentResponse => ',getAllPublishedContentResponse?.data)

        if (getAllPublishedContentResponse.error)
          return swal("Failed!", getAllPublishedContentResponse.error.data.message, "error");

        const allPublishedContentList = getAllPublishedContentResponse?.data?.data && getAllPublishedContentResponse?.data?.data.length>0 && getAllPublishedContentResponse?.data?.data.map((item,i)=>{
          return {
            id:i+1,
            ...item,
            // image: `${item?.image !== undefined ? `https://backend.eatcoast.ca/v1/cuisineImages/${item?.image}` : "assets/images/dish1.svg" }`,
          }
        })

        // const newGetAllPublishedContentResponse = {...getAllPublishedContentResponse,data:{...getAllPublishedContentResponse?.data,allPublishedContentList} }

        // return newGetAllPublishedContentResponse;
        return {...getAllPublishedContentResponse,data:{...getAllPublishedContentResponse?.data,allPublishedContentList} };
        // return getAllPublishedContentResponse;
      },
    }),

    getAllDraftContent: build.mutation({
        async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
          const getAllDraftContentResponse = await fetchWithBQ({
            url: "/api/content/editor/draft",
            method: "POST",
            body: _arg,
          });
          console.log('getAllDraftContentResponse => ',getAllDraftContentResponse?.data)
  
          if (getAllDraftContentResponse.error)
            return swal("Failed!", getAllDraftContentResponse.error.data.message, "error");
  
          const allDraftContentList = getAllDraftContentResponse?.data?.data && getAllDraftContentResponse?.data?.data.length>0 && getAllDraftContentResponse?.data?.data.map((item,i)=>{
            return {
              id:i+1,
              ...item,
              // image: `${item?.image !== undefined ? `https://backend.eatcoast.ca/v1/cuisineImages/${item?.image}` : "assets/images/dish1.svg" }`,
            }
          })
  
          // const newGetAllDraftContentResponse = {...getAllDraftContentResponse,data:{...getAllDraftContentResponse?.data,allDraftContentList} }
  
          // return newGetAllDraftContentResponse;
          return {...getAllDraftContentResponse,data:{...getAllDraftContentResponse?.data,allDraftContentList} };
          // return getAllDraftContentResponse;
        },
      }),


    createEditorContentData: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const createEditorContentDataResponse = await fetchWithBQ({
          url: "/api/content/editor/create",
          method: "POST",
          body: _arg,
        });
        console.log('createEditorContentDataResponse => ',createEditorContentDataResponse?.data)

        if (createEditorContentDataResponse.error)
          return swal("Failed!", createEditorContentDataResponse.error.data.message, "error");

          // swal("Success!", `${createEditorContentDataResponse.data.message}`, "success");


        return createEditorContentDataResponse;
      },
    }),

    updateEditorContentData: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const updateEditorContentDataResponse = await fetchWithBQ({
          url: "/api/content/editor/update",
          method: "POST",
          body: _arg,
        });
        console.log('updateEditorContentDataResponse => ',updateEditorContentDataResponse?.data)

        if (updateEditorContentDataResponse.error)
          return swal("Failed!", updateEditorContentDataResponse.error.data.message, "error");

          // swal("Success!", `${updateEditorContentDataResponse.data.message}`, "success");


        return updateEditorContentDataResponse;
      },
    }),

    deleteEditorContentData: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const deleteEditorContentDataResponse = await fetchWithBQ({
          url: "/api/content/editor/delete",
          method: "POST",
          body: _arg,
        });
        console.log('deleteEditorContentDataResponse => ',deleteEditorContentDataResponse?.data)

        if (deleteEditorContentDataResponse.error)
          return swal("Failed!", deleteEditorContentDataResponse.error.data.message, "error");

          swal("Success!", `${deleteEditorContentDataResponse.data.message}`, "success");


        return deleteEditorContentDataResponse;
      },
    }),

    searchEditorContentData: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const searchEditorContentDataResponse = await fetchWithBQ({
          url: "/api/content/editor/search",
          method: "POST",
          body: _arg,
        });
        console.log('searchEditorContentDataResponse => ',searchEditorContentDataResponse?.data)

        if (searchEditorContentDataResponse.error)
          return swal("Failed!", searchEditorContentDataResponse.error.data.message, "error");


        return searchEditorContentDataResponse;
      },
    }),

    // deleteSubCusine: build.mutation({
    //     async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
    //         const deleteSubCusineResponse = await fetchWithBQ({
    //         url: "/api/cuisine/delete",
    //         method: "POST",
    //         body: _arg,
    //         });
    //         console.log('deleteSubCusineResponse => ',deleteSubCusineResponse)
    //         if (deleteSubCusineResponse.error)
    //         return swal("Failed!", deleteSubCusineResponse.error.data.message, "error");
            
    //         swal("Success!", `${deleteSubCusineResponse.data.message}`, "success");

    //         return deleteSubCusineResponse;
    //     },
    //     }),

    //     addSubCusine: build.mutation({
    //       async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
    //         const addSubCusineResponse = await fetchWithBQ({
    //           url: "/api/cuisine/add",
    //           method: "POST",
    //           body: _arg,
    //         });
    //         console.log('addSubCusineResponse => ',addSubCusineResponse)
    //         if (addSubCusineResponse.error)
    //           return swal("Failed!", addSubCusineResponse.error.data.message, "error");
              
    //           swal("Success!", `${addSubCusineResponse.data.message}`, "success");
    //         return addSubCusineResponse;
    //       },
    //   }),

    //   updateSubCusine: build.mutation({
    //     async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
    //       const updateSubCusineResponse = await fetchWithBQ({
    //         url: "/api/cuisine/update",
    //         method: "POST",
    //         body: _arg,
    //       });
    //       console.log('updateSubCusineResponse => ',updateSubCusineResponse)
    //       if (updateSubCusineResponse.error)
    //         return swal("Failed!", updateSubCusineResponse.error.data.message, "error");
            
    //       swal("Success!", `${updateSubCusineResponse.data.message}`, "success");

    //       return updateSubCusineResponse;
    //     },
    //   }),

  }),
  overrideExisting: false,
});

export const { 
useGetAllPublishedContentMutation,
useGetAllDraftContentMutation,
useCreateEditorContentDataMutation,
useDeleteEditorContentDataMutation,
useSearchEditorContentDataMutation,
useUpdateEditorContentDataMutation
// useCreateEditorContentDataMutation
} = extendedApi;



