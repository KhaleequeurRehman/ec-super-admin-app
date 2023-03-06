import swal from "sweetalert";
import { api } from "../store/middleware/api";

const extendedApi = api.injectEndpoints({
  endpoints: (build) => ({

    createNote: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const createNoteResponse = await fetchWithBQ({
          url: "/api/admin/note",
          method: "POST",
          body: _arg,
        });
        console.log('createNoteResponse => ',createNoteResponse?.data)

        if (createNoteResponse.error)
          return swal("Failed!", createNoteResponse.error.data.message, "error");

        // swal("Success!", `${createEditorContentDataResponse.data.message}`, "success");

        return createNoteResponse;
      },
    }),

    // getNotificationHistory: build.mutation({
    //   async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
    //     const getNotificationHistoryResponse = await fetchWithBQ({
    //       url: "/api/notification/history",
    //       method: "POST",
    //       body: _arg,
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

  }),
  overrideExisting: false,
});

export const { 
    useCreateNoteMutation
} = extendedApi;



