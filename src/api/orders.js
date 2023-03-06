import swal from "sweetalert";
import { api } from "../store/middleware/api";

const extendedApi = api.injectEndpoints({
  endpoints: (build) => ({

    makeOrder: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const makeOrderResponse = await fetchWithBQ({
          url: "/api/order/make",
          method: "POST",
          body: _arg,
        });
        console.log('makeOrderResponse => ',makeOrderResponse?.data)

        if (makeOrderResponse.error)
          return swal("Failed!", makeOrderResponse.error.data.message, "error");

        // swal("Success!", `${createEditorContentDataResponse.data.message}`, "success");

        return makeOrderResponse;
      },
    }),

    getAllOrders: build.query({
        async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
          const getAllOrdersResponse = await fetchWithBQ({
            url: `/api/order/get/all?${_arg}`,
          });
          console.log('getAllOrdersResponse => ',getAllOrdersResponse?.data)
  
          if (getAllOrdersResponse.error)
            return swal("Failed!", getAllOrdersResponse.error.data.message, "error");
  
          return getAllOrdersResponse;
        },
      }),


      
      getAllOrderRelatedToCustomer: build.query({
        async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
          const getAllOrderRelatedToCustomerResponse = await fetchWithBQ({
            url: `/api/order/get/${_arg.split(",")[0]}?${_arg.split(",")[1]}`,
            // url: `/api/order/api/order/get/?${_arg}`,
          });
          console.log('getAllOrderRelatedToCustomerResponse => ',getAllOrderRelatedToCustomerResponse?.data)
  
          if (getAllOrderRelatedToCustomerResponse.error)
            return swal("Failed!", getAllOrderRelatedToCustomerResponse.error.data.message, "error");
  
          return getAllOrderRelatedToCustomerResponse;
        },
      }),

      getSingleOrder: build.query({
        async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
          const getOrderDetialByIdResponse = await fetchWithBQ({
            url: `/api/order/get/detial/${_arg}`,
            // url: `/api/order/api/order/get/?${_arg}`,
          });
          console.log('getOrderDetialByIdResponse => ',getOrderDetialByIdResponse?.data)
  
          if (getOrderDetialByIdResponse.error)
            return swal("Failed!", getOrderDetialByIdResponse.error.data.message, "error");
  
          return getOrderDetialByIdResponse;
        },
      }),

  }),
  overrideExisting: false,
});

export const { 
    useMakeOrderMutation,
    useGetAllOrdersQuery,
    useGetAllOrderRelatedToCustomerQuery,
    useGetSingleOrderQuery
} = extendedApi;



