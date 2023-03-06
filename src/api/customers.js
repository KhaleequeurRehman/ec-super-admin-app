import moment from "moment/moment";
import swal from "sweetalert";
import { api } from "../store/middleware/api";

const extendedApi = api.injectEndpoints({
  endpoints: (build) => ({
    // getSubscriptions: build.query({
    //     query: () => `/api/admin/sub`,
    //   }),
    getCustomers: build.mutation({
        async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
          const customersResponse = await fetchWithBQ({
            url: "/api/admin/all/customer",
            method: "POST",
            body: _arg,
          });
          console.log('customersResponse ',customersResponse?.data?.data)
                const customersList = customersResponse?.data && customersResponse?.data?.data.map((item,i)=> {
                  return {
                    ...item,
                    id: i+1,
                    // addresses: item.addresses.length === 0 ? 'not available': "Mesopotamian cuisine"
                    addresses: item.addresses.length> 0 ? item.addresses[0]?.address: "not data"
                    // addresses: item.addresses !== undefined || item.addresses !== null && item.addresses.length> 0 ? `${item.addresses[0]?.address} ${item.addresses[0]?.city} ${item.addresses[0]?.country}`: "no data"
                }
              })
                
          return {...customersResponse,data: {...customersResponse.data,customersList}};
          // return customersResponse;
        },
      }),

    getAllCustomersWithFilter: build.mutation({
        async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
          const filterCustomersWithStatusResponse = await fetchWithBQ({
            url: "/api/admin/all/customers",
            method: "POST",
            body: _arg,
          });
          console.log('filterCustomersWithStatusResponse ',filterCustomersWithStatusResponse?.data?.data)
                const customersList = filterCustomersWithStatusResponse?.data && filterCustomersWithStatusResponse?.data?.data.map((item,i)=> {
                  return {
                    ...item,
                    id: i+1,
                    addresses: item.addresses.length> 0 ? item.addresses[0]?.address: "not data"
                }
              })
                
          return {...filterCustomersWithStatusResponse,data: {...filterCustomersWithStatusResponse.data,customersList}};
          // return filterCustomersWithStatusResponse;
        },
      }),

    filterAllCustomersWithStatus: build.mutation({
        async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
          const filterCustomersWithStatusResponse = await fetchWithBQ({
            url: "/api/admin/all/customers/filter",
            method: "POST",
            body: _arg,
          });
          console.log('filterCustomersWithStatusResponse ',filterCustomersWithStatusResponse?.data?.data)
                const customersList = filterCustomersWithStatusResponse?.data && filterCustomersWithStatusResponse?.data?.data.map((item,i)=> {
                  return {
                    ...item,
                    id: i+1,
                    addresses: item.addresses.length> 0 ? item.addresses[0]?.address: "not data"
                }
              })
                
          return {...filterCustomersWithStatusResponse,data: {...filterCustomersWithStatusResponse.data,customersList}};
          // return filterCustomersWithStatusResponse;
        },
      }),

    getCustomerDetail: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const customerDetailResponse = await fetchWithBQ({
          url: "/api/admin/customer/details",
          method: "POST",
          body: _arg,
        });

        return customerDetailResponse;
      },
    }),

    updateCustomer: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const updateCustomerResponse = await fetchWithBQ({
          url: "/api/admin/update/customer",
          method: "POST",
          body: _arg,
        });
          
        if (updateCustomerResponse.error)
        return swal("Failed!", updateCustomerResponse.error.data.message, "error");
        
        swal("Success!", `${updateCustomerResponse.data.message}`, "success");
        
        return updateCustomerResponse;
      },
    }),

    getCustomersWithFilter: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const updateCustomerResponse = await fetchWithBQ({
          url: "/api/admin/filter/customer",
          method: "POST",
          body: _arg,
        });
          
        if (updateCustomerResponse.error)
        return swal("Failed!", updateCustomerResponse.error.data.message, "error");
        
        swal("Success!", `${updateCustomerResponse.data.message}`, "success");
        
        return updateCustomerResponse;
      },
    }),

    deleteCustomer: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const deleteCustomerResponse = await fetchWithBQ({
          url: "/api/admin/delete/customer",
          method: "POST",
          body: _arg,
        });
          
        if (deleteCustomerResponse.error)
        return swal("Failed!", deleteCustomerResponse.error.data.message, "error");
        
        swal("Success!", `${deleteCustomerResponse.data.message}`, "success");

        return deleteCustomerResponse;
      },
    }),

    searchCustomer: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const searchCustomersResponse = await fetchWithBQ({
          url: "/api/auth/customer/search",
          method: "POST",
          body: _arg,
        });

        if (searchCustomersResponse.error)
        return swal("Failed!", searchCustomersResponse.error.data.message, "error");

        console.log('searchCustomersResponse ',searchCustomersResponse?.data?.data)
        const customersList = searchCustomersResponse?.data && searchCustomersResponse?.data?.data.map((item,i)=> {
          return {
            id: i+1,
            ...item,
            // addresses: item.addresses.length === 0 ? 'not available': "Mesopotamian cuisine"
            // addresses: item.addresses.length> 0 ? item.addresses[0]?.address: "not data"
            // addresses: item.addresses !== undefined || item.addresses !== null && item.addresses.length> 0 ? `${item.addresses[0]?.address} ${item.addresses[0]?.city} ${item.addresses[0]?.country}`: "no data"
            addresses: "no data"
        }
      })
      console.log('searchCustomers customersList ',customersList)
      return {...searchCustomersResponse,data: {...searchCustomersResponse.data,customersList}};
      // return searchCustomersResponse;
          
        

        // return searchCustomersResponse;
      },
    }),

    getFinancialDetailOfCustomer: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const financialDetailOfCustomerResponse = await fetchWithBQ({
          url: "/api/admin/financial/customer",
          method: "POST",
          body: _arg,
        });

        // console.log("financialDetailOfCustomersList erer")
        console.log('financialDetailOfCustomerResponse?.data?.current ',financialDetailOfCustomerResponse?.data?.current)
              const financialDetailOfCustomersList = financialDetailOfCustomerResponse?.data && financialDetailOfCustomerResponse?.data?.current.map((item,i)=> {
                return {
                  id: i+1,
                  image: "assets/images/dish1.svg",
                  // menuName: "Arabian Kebab, Middle East Special",
                  menuName: item.mealPlane !== undefined? item.mealPlane: 'no data',
                  // caterer: {
                  //   img: "assets/images/catererwithiMacCircleIcon.png",
                  //   name: "Chef Juna Food",
                  // },
                  caterer: item.caterer !== undefined? item.caterer: 'no data',
                  // type: "Multiple subscription",
                  type: item.type !== undefined? item.type: 'no data',
                  // date: "Thu, 21 Nov 2021",
                  date: `${item?.from  !== undefined ? `${moment(item?.from).format('ll')}` : 'no data'}`,
                  // price: "- $ 230",
                  price: item.price !== undefined? `$${item.price}`: 'no data',
                }
            })
        
              // console.log("financialDetailOfCustomersList ",financialDetailOfCustomersList)
        return {...financialDetailOfCustomerResponse,data: {...financialDetailOfCustomerResponse.data,financialDetailOfCustomersList}};
        // return financialDetailOfCustomerResponse;
      },
    }),
    
    getPersonalDetailOfCustomer: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const personalDetailOfCustomerResponse = await fetchWithBQ({
          url: "/api/admin/personal/customer",
          method: "POST",
          body: _arg,
        });
        console.log('personalDetailOfCustomerResponse ',personalDetailOfCustomerResponse?.data?.data)
            //   const customersList = personalDetailOfCustomerResponse?.data && personalDetailOfCustomerResponse?.data?.data.map((item,i)=> {
            //     return {
            //       ...item,
            //       id: i+1,
            //       // addresses: item.addresses.length === 0 ? 'not available': "Mesopotamian cuisine"
            //       addresses: item.addresses.length> 0 ? item.addresses[0]?.address: "not data"
            //       // addresses: item.addresses !== undefined || item.addresses !== null && item.addresses.length> 0 ? `${item.addresses[0]?.address} ${item.addresses[0]?.city} ${item.addresses[0]?.country}`: "no data"
            //   }
            // })
              
        // return {...personalDetailOfCustomerResponse,data: {...personalDetailOfCustomerResponse.data,customersList}};
        return personalDetailOfCustomerResponse;
      },
    }),
    
  }),
  overrideExisting: false,
});

export const { 
useGetCustomerDetailMutation,
useGetCustomersMutation,
useDeleteCustomerMutation,
useUpdateCustomerMutation,
useGetCustomersWithFilterMutation,
useSearchCustomerMutation,
useGetFinancialDetailOfCustomerMutation,
useGetPersonalDetailOfCustomerMutation,
useFilterAllCustomersWithStatusMutation,
useGetAllCustomersWithFilterMutation
} = extendedApi;



