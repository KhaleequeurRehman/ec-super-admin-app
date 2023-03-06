import React, { useContext, useEffect, useState } from 'react'
import Box from "@mui/material/Box";
import { CircularProgress, Typography } from "@mui/material";

import { styled, Button } from "@mui/material";
import DriverDetailsBreadcrumbs from './DriverDetailsBreadcrumbs';
import { DriverDetailsMainBox } from './DriverDetailsMainBox';
import { DriverOrderHistory } from './DriverOrderHistory/DriverOrderHistory';
import { useGetDriverDetailMutation } from '../../../../api/drivers';
import DriverContext from '../../../../contexts/DriverContext/DriverContext';
import { useCreateNoteMutation } from '../../../../api/notes';
import swal from "sweetalert";





export const DriverDetails = () => {

  const driverContextval = useContext(DriverContext)

  const [getDriverDetail, resdata] = useGetDriverDetailMutation()

  const [driverDetailData, setDriverDetailData] = useState("")

  const getDriverDetailData = ()=> {
    console.log("selectRow when click on one of Driver ",driverContextval?.state?.selectedRowData?._id)
    // getDriverDetail({ id:"6393157fb52b11dc22609461" }).then((res) => {
    getDriverDetail({ id:driverContextval?.state?.selectedRowData?._id }).then((res) => {
      if (res.data){
        console.log("res.data driverDetailData ", res?.data);
        setDriverDetailData(res?.data?.details)
      }
    });
  }
  


  useEffect(() => {
    getDriverDetailData()
  }, [])

  console.log('driversData => ', driverDetailData)
  
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
              <Box>
                  <DriverDetailsBreadcrumbs/>
              </Box>

            <Box sx={{display:"flex"}}>
            <Box width="100%" mr="24px">
              <DriverDetailsMainBox 
              driverDetailData={driverDetailData} 
              refetchDriverDetailData={getDriverDetailData} 
              />
              </Box>

              <Box width="100%"><DriverOrderHistory driverDetailData={driverDetailData} /></Box>
            </Box>
          </Box>
        </>
      }
    </div>
  )
}
