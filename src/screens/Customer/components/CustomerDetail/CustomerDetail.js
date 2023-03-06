import React, { useEffect, useState } from "react";
import CustomerDetailBreadcrumbs from "./CustomerDetailBreadcrumbs";
import Box from "@mui/material/Box";
import CircularProgress from '@mui/material/CircularProgress';
import { CustomerDetailMainCard } from "./CustomerDetailMainCard";
import { CustomerDetailsMainBox } from "./CustomerDetailsMainBox";
import { CustomerOrderHistory } from "../CustomerOrderHistory/CustomerOrderHistory";
import { useGetCustomerDetailMutation } from "../../../../api/customers";

export const CustomerDetail = ({setOpenCustomerDetail,selectedCustomerRow}) => {
  const [getCustomerDetailData, resdata] = useGetCustomerDetailMutation()
  const [customerDetailData, setCustomerDetailData] = useState("")

  const getCustomerDetail = ()=> {
    getCustomerDetailData({ id:selectedCustomerRow?._id}).then((res) => {
      if (res.data){
        console.log("res.data customerDetailData", res?.data?.details);
        setCustomerDetailData(res?.data?.details)
      }
    });
  }
  
  useEffect(() => {
    getCustomerDetail()
  }, [])


  return (
    <div>
       {
        resdata?.isLoading ? (
          <Box sx={{minHeight:"30vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <CircularProgress color="greenclr"/>
          </Box>
        ) 
        : 
        <>
      <Box>
        <CustomerDetailBreadcrumbs setOpenCustomerDetail={setOpenCustomerDetail}/>

        <Box sx={{display: "flex", flexDirection: {lg: "row", md: "row", sm: "column", xs: "column"}}}>
          <Box width="100%">
            <CustomerDetailsMainBox customerDetailData={customerDetailData} 
            // customerDetailData={customerDetailData} 
            />
          </Box>

          <Box width="100%"sx={{ ml:{lg: "20px", md: "20px", sm: "0px", xs: "0px"}}}>
            <CustomerOrderHistory customerDetailData={customerDetailData} 
            // customerDetailData={customerDetailData}
             />
          </Box>
        </Box>
      </Box>
      </>
    }
    </div>
  );
};
