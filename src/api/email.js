import swal from "sweetalert";
import { api } from "../store/middleware/api";

const extendedApi = api.injectEndpoints({
  endpoints: (build) => ({

    composeEmail: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const composeEmailResponse = await fetchWithBQ({
          url: "/api/email/compose",
          method: "POST",
          body: _arg,
        });
        console.log('composeEmailResponse => ',composeEmailResponse?.data)

        if (composeEmailResponse.error)
          return swal("Failed!", composeEmailResponse.error.data.message, "error");

        // swal("Success!", `${createEditorContentDataResponse.data.message}`, "success");

        return composeEmailResponse;
      },
    }),

    updateEmailStatus: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const updateEmailStatusResponse = await fetchWithBQ({
          url: "/api/email/update",
          method: "POST",
          body: _arg,
        });
        console.log('updateEmailStatusResponse => ',updateEmailStatusResponse?.data)

        if (updateEmailStatusResponse.error)
          return swal("Failed!", updateEmailStatusResponse.error.data.message, "error");

        // swal("Success!", `${createEditorContentDataResponse.data.message}`, "success");

        return updateEmailStatusResponse;
      },
    }),

    deleteEmail: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const deleteEmailResponse = await fetchWithBQ({
          url: "/api/email/delete",
          method: "POST",
          body: _arg,
        });
        console.log('deleteEmailResponse => ',deleteEmailResponse?.data)

        if (deleteEmailResponse.error)
          return swal("Failed!", deleteEmailResponse.error.data.message, "error");

        // swal("Success!", `${createEditorContentDataResponse.data.message}`, "success");

        return deleteEmailResponse;
      },
    }),

    getDraftEmails: build.query({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const getDraftEmailsResponse = await fetchWithBQ({
          url: "/api/email/draft",
        });
        console.log('getDraftEmailsResponse => ',getDraftEmailsResponse?.data)

        if (getDraftEmailsResponse.error)
          return swal("Failed!", getDraftEmailsResponse.error.data.message, "error");

        // const allNotificationHistoryList = getDraftEmailsResponse?.data?.data && getDraftEmailsResponse?.data?.data.length>0 && getDraftEmailsResponse?.data?.data.map((item,i)=>{
        //   return {
        //     id:i+1,
        //     ...item,
        //   }
        // })

        // return {...getDraftEmailsResponse,data:{...getDraftEmailsResponse?.data,allNotificationHistoryList} };

        return getDraftEmailsResponse;
      },
    }),

    getInboxEmails: build.query({
        async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
          const getInboxEmailsResponse = await fetchWithBQ({
            url: "/api/email/inbox",
          });
          console.log('getInboxEmailsResponse => ',getInboxEmailsResponse?.data)
  
          if (getInboxEmailsResponse.error)
            return swal("Failed!", getInboxEmailsResponse.error.data.message, "error");
  
          // const allNotificationHistoryList = getInboxEmailsResponse?.data?.data && getInboxEmailsResponse?.data?.data.length>0 && getInboxEmailsResponse?.data?.data.map((item,i)=>{
          //   return {
          //     id:i+1,
          //     ...item,
          //   }
          // })
  
          // return {...getInboxEmailsResponse,data:{...getInboxEmailsResponse?.data,allNotificationHistoryList} };
  
          return getInboxEmailsResponse;
        },
      }),

      getSentEmails: build.query({
        async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
          const getSentEmailsResponse = await fetchWithBQ({
            url: "/api/email/sent",
          });
          console.log('getSentEmailsResponse => ',getSentEmailsResponse?.data)
  
          if (getSentEmailsResponse.error)
            return swal("Failed!", getSentEmailsResponse.error.data.message, "error");
  
          // const allNotificationHistoryList = getSentEmailsResponse?.data?.data && getSentEmailsResponse?.data?.data.length>0 && getSentEmailsResponse?.data?.data.map((item,i)=>{
          //   return {
          //     id:i+1,
          //     ...item,
          //   }
          // })
  
          // return {...getSentEmailsResponse,data:{...getSentEmailsResponse?.data,allNotificationHistoryList} };
  
          return getSentEmailsResponse;
        },
      }),

      getTrashEmails: build.query({
        async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
          const getTrashEmailsResponse = await fetchWithBQ({
            url: "/api/email/trash",
          });
          console.log('getTrashEmailsResponse => ',getTrashEmailsResponse?.data)
  
          if (getTrashEmailsResponse.error)
            return swal("Failed!", getTrashEmailsResponse.error.data.message, "error");
  
          // const allNotificationHistoryList = getTrashEmailsResponse?.data?.data && getTrashEmailsResponse?.data?.data.length>0 && getTrashEmailsResponse?.data?.data.map((item,i)=>{
          //   return {
          //     id:i+1,
          //     ...item,
          //   }
          // })
  
          // return {...getTrashEmailsResponse,data:{...getTrashEmailsResponse?.data,allNotificationHistoryList} };
  
          return getTrashEmailsResponse;
        },
      }),

      getDeleteAllEmails: build.query({
        async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
          const getTrashEmailsResponse = await fetchWithBQ({
            url: "/api/email/delete/many",
          });
          console.log('getTrashEmailsResponse => ',getTrashEmailsResponse?.data)
  
          if (getTrashEmailsResponse.error)
            return swal("Failed!", getTrashEmailsResponse.error.data.message, "error");
  
          // const allNotificationHistoryList = getTrashEmailsResponse?.data?.data && getTrashEmailsResponse?.data?.data.length>0 && getTrashEmailsResponse?.data?.data.map((item,i)=>{
          //   return {
          //     id:i+1,
          //     ...item,
          //   }
          // })
  
          // return {...getTrashEmailsResponse,data:{...getTrashEmailsResponse?.data,allNotificationHistoryList} };
  
          return getTrashEmailsResponse;
        },
      }),

      
    getAllInboxEmails: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const getAllInboxEmailsResponse = await fetchWithBQ({
          url: "/api/email/inbox",
          method: "POST",
          body: _arg,
        });
        console.log('getAllInboxEmailsResponse => ',getAllInboxEmailsResponse?.data)

        if (getAllInboxEmailsResponse.error)
          return swal("Failed!", getAllInboxEmailsResponse.error.data.message, "error");

        // const allNotificationHistoryList = getAllInboxEmailsResponse?.data?.data && getAllInboxEmailsResponse?.data?.data.length>0 && getAllInboxEmailsResponse?.data?.data.map((item,i)=>{
        //   return {
        //     id:i+1,
        //     ...item,
        //   }
        // })

        // return {...getAllInboxEmailsResponse,data:{...getAllInboxEmailsResponse?.data,allNotificationHistoryList} };

        return getAllInboxEmailsResponse;
      },
    }),
      
    getAllSentEmails: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const getAllSentEmailsResponse = await fetchWithBQ({
          url: "/api/email/sent",
          method: "POST",
          body: _arg,
        });
        console.log('getAllSentEmailsResponse => ',getAllSentEmailsResponse?.data)

        if (getAllSentEmailsResponse.error)
          return swal("Failed!", getAllSentEmailsResponse.error.data.message, "error");

        return getAllSentEmailsResponse;
      },
    }),
      
    getAllStarredEmails: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const getAllStarredEmailsResponse = await fetchWithBQ({
          url: "/api/email/starred",
          method: "POST",
          body: _arg,
        });
        console.log('getAllStarredEmailsResponse => ',getAllStarredEmailsResponse?.data)

        if (getAllStarredEmailsResponse.error)
          return swal("Failed!", getAllStarredEmailsResponse.error.data.message, "error");

        return getAllStarredEmailsResponse;
      },
    }),

      
    getAllImportantEmails: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const getAllImportantEmailsResponse = await fetchWithBQ({
          url: "/api/email/important",
          method: "POST",
          body: _arg,
        });
        console.log('getAllImportantEmailsResponse => ',getAllImportantEmailsResponse?.data)

        if (getAllImportantEmailsResponse.error)
          return swal("Failed!", getAllImportantEmailsResponse.error.data.message, "error");

        return getAllImportantEmailsResponse;
      },
    }),
      
    getAllTrashEmails: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const getAllTrashEmailsResponse = await fetchWithBQ({
          url: "/api/email/trash",
          method: "POST",
          body: _arg,
        });
        console.log('getAllTrashEmailsResponse => ',getAllTrashEmailsResponse?.data)

        if (getAllTrashEmailsResponse.error)
          return swal("Failed!", getAllTrashEmailsResponse.error.data.message, "error");

        return getAllTrashEmailsResponse;
      },
    }),
      
    getUpdateEmailstatus: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const getUpdateEmailstatusResponse = await fetchWithBQ({
          url: "/api/email/update",
          method: "POST",
          body: _arg,
        });
        console.log('getUpdateEmailstatusResponse => ',getUpdateEmailstatusResponse?.data)

        if (getUpdateEmailstatusResponse.error)
          return swal("Failed!", getUpdateEmailstatusResponse.error.data.message, "error");

        return getUpdateEmailstatusResponse;
      },
    }),
      
    getDeleteAllEmails: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const getDeleteAllEmailsResponse = await fetchWithBQ({
          url: "/api/email/delete/many",
          method: "POST",
          body: _arg,
        });
        console.log('getDeleteAllEmailsResponse => ',getDeleteAllEmailsResponse?.data)

        if (getDeleteAllEmailsResponse.error)
          return swal("Failed!", getDeleteAllEmailsResponse.error.data.message, "error");

        return getDeleteAllEmailsResponse;
      },
    }),
      
    

  }),
  overrideExisting: false,
});

export const { 
    useComposeEmailMutation,
    useDeleteEmailMutation,
    useUpdateEmailStatusMutation,
    useGetDeleteAllEmailsQuery,
    useGetDraftEmailsQuery,
    useGetInboxEmailsQuery,
    useGetSentEmailsQuery,
    useGetTrashEmailsQuery,
    useGetAllInboxEmailsMutation,
    useGetAllSentEmailsMutation,
    useGetAllStarredEmailsMutation,
    useGetAllImportantEmailsMutation,
    useGetAllTrashEmailsMutation,
    useGetUpdateEmailstatusMutation,
    useGetDeleteAllEmailsMutation
} = extendedApi;
