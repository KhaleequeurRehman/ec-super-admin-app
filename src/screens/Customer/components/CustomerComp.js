import React, { useEffect } from "react";
import { useState } from "react";
import CustomerDataGrid from "./CustomerDataGrid";
import Box from "@mui/material/Box";
import { CustomerHeader } from "./CustomerHeader";
import { CustomerFieldBox } from "./CustomerFieldBox/CustomerFieldBox";
import { useFilterAllCustomersWithStatusMutation, useGetAllCustomersWithFilterMutation, useGetCustomersMutation, useSearchCustomerMutation } from "../../../api/customers";
import NoResultMsg from '../../../components/NoResultMsg/NoResultMsg'
import Header from "../../Product/Header";

export const CustomerComp = ({ setOpenCustomerDetail,setSelectedCustomerRow }) => {

  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [totalCustomersCount, setTotalCustomersCount] = useState(1);

  // const [getCustomers, resdata] = useGetCustomersMutation()

  const [getCustomers, resdata] = useGetAllCustomersWithFilterMutation()

  const [filterCustomersWithStatus, responsedata] = useFilterAllCustomersWithStatusMutation()

  const [searchCustomers, respdata] = useSearchCustomerMutation()
  
  const [customersData, setCustomersData] = useState("")

  const [openFilter, setOpenFilter] = useState(false);

  const [searchVal, setSearchVal] = useState("");
  const [isShownNoResult, setIsShownNoResult] = useState(false);

  // const handleClickFilter = () => {
  //   setOpenFilter(true)
  // }


  const getCustomersList = ()=> {
    getCustomers({ page:page, size:size }).then((res) => {
      if (res.data){
        console.log("res.data getCustomersList ", res?.data);
        setCustomersData(res?.data)
        setTotalCustomersCount(res?.data?.totalCustomersCount)
      }
    });
  }
  
  const getLastAddedCustomersData = ()=> {
    getCustomers({ page:page, size:size,sortBy:"createdAt",orderBy:"desc" }).then((res) => {
      if (res.data){
        console.log("res.data getLastAddedCustomersData ", res?.data);
        setCustomersData(res?.data)
        setTotalCustomersCount(res?.data?.totalCustomersCount)
      }
    });
  }

  const filterCustomersWithStatusData = (status)=> {
    if(status === "active" || status === "hold"){
      filterCustomersWithStatus({ page:page, size:10,status:status }).then((res) => {
        if (res.data){
          console.log("res.data filterCustomersWithStatusData ", res?.data);
          setCustomersData(res?.data)
          setTotalCustomersCount(res?.data?.totalCustomersCount)
        }
      });
    }else if(status === "all"){
      getCustomersList()
    }
    
  }

  useEffect(() => {
    getCustomersList()
  }, [page])


  const searchCustomersFunc = (newValSearch)=> {
    if(newValSearch === ""){
      getCustomersList()
      setIsShownNoResult(false)
    }else{
      searchCustomers({ search: newValSearch }).then((res) => {
        if (res.data){
          console.log("searchCustomers res.data customersData ", res?.data);
          setCustomersData(res?.data)
          setTotalCustomersCount(res?.data?.totalCustomersCount)
          if(res?.data?.data.length === 0) {
            setIsShownNoResult(true)
          }else{
            setIsShownNoResult(false)
          }
        }
      });
    }
  }

  function handleClickFilter() {
    setOpenFilter((current) => !current);
  }
  
  return (
    <div>
      <Box sx={{ mb: { lg: "12px", md: "12px", sm: "12px", xs: "24px" } }}>
        <Box my="20px">
          <Header
            title="All Customer"
            // addButtonTitle="New Menu"
            // addButtonOnclickHandler={handleAddModalOpen}
            isShownCustomBtn={false}
            hasNotificationButton={true}
            hasFilterBtn={true}
            lastAddedBtnOnClickHandler={getLastAddedCustomersData}
            handleClickFilter={handleClickFilter}
            searchVal={searchVal}
            setSearchVal={setSearchVal}
            searchFunc={searchCustomersFunc}
            menuItems={[
              { name: "active", onClick: () => { filterCustomersWithStatusData("active"); console.log('menuItem active click handler') }},
              { name: "hold", onClick: () => { filterCustomersWithStatusData("hold"); console.log('menuItem hold click handler') }},
              { name: "all", onClick: () => { filterCustomersWithStatusData("all"); console.log('menuItem cancel click handler') }},
            ]}
            />
        </Box>
        {/* <CustomerHeader
          title={"All Customer"}
          hasNotificationButton={true}
          hasTextButtonTitle1={"Last Added"}
          hasTextButtonTitle2={"Any Status"}
          hasFilterBtn={true}
          openFilter={openFilter}
          setOpenFilter={setOpenFilter}
          handleClickFilter={handleClickFilter}
          searchVal={searchVal}
          setSearchVal={setSearchVal}
          searchFunc={searchCustomersFunc}
        /> */}
      </Box>

      <Box>
        {openFilter ? (
          <Box>
            <CustomerFieldBox setCustomersData={setCustomersData} />
          </Box>
        ) : (
          ""
        )}

      {!isShownNoResult ? (
        <Box>
          <CustomerDataGrid setOpenCustomerDetail={setOpenCustomerDetail} setSelectedCustomerRow={setSelectedCustomerRow} customersData={customersData} resdata={resdata} getCustomersList={getCustomersList}
          count={totalCustomersCount>size? totalCustomersCount%size !==0? Math.round(totalCustomersCount/size)+1 : Math.round(totalCustomersCount/size) : 1}
          page={page}
          onChangeHandler={(event, value) =>{ console.log("value onChange => ", value); setPage(value)} }
          />
        </Box>
        ) 
        : 
        (
          // <NoResultMsg searchValueText={`“${searchVal}”`} />
          <NoResultMsg searchValueText={searchVal} />
        )}
      </Box>
    </div>
  );
};
