import React, { useState } from "react";
import { DriverComp } from "./components/DriverComp";
import DriverContext from '../../contexts/DriverContext/DriverContext';
import Box from "@mui/material/Box";
import { DriverDetails } from "./components/DriverDetails/DriverDetails";
import { NewDriverRequest } from "./components/NewDriverRequest/NewDriverRequest";
import { DriverReqDetail } from "./components/DriverReqDetail/DriverReqDetail";

export const Driver = () => {

  const [driverContextState, setDriverContextState] = useState({
    isShownDriverDetial:false,
    isShownNewDriverRequest:false,
    isShownDriverRequestDetail:false,
  })
  
  const [selectedRowData, setSelectedRowData] = useState('')
  const [selectedRequestData, setSelectedRequestData] = useState('')

  const openDriverDetail = ()=> setDriverContextState({...driverContextState,isShownDriverDetial:true})
  const closeDriverDetail = ()=> setDriverContextState({...driverContextState,isShownDriverDetial:false})

  const openNewDriverRequest = ()=> setDriverContextState({...driverContextState,isShownDriverDetial:false,isShownNewDriverRequest:true})
  const closeNewDriverRequest = ()=> setDriverContextState({...driverContextState,isShownDriverDetial:false,isShownNewDriverRequest:false})

  const openDriverRequestDetail = ()=> setDriverContextState({...driverContextState,isShownDriverDetial:false,isShownDriverRequestDetail:true,isShownNewDriverRequest:false})
  const closeDriverRequestDetail = ()=> setDriverContextState({...driverContextState,isShownDriverDetial:false,isShownNewDriverRequest:true,isShownDriverRequestDetail:false})

  const selectRow = (newdata)=> setSelectedRowData(newdata)

  const selectRequest = (newdata)=> setSelectedRequestData(newdata)
  

  return (
    <div>
      <DriverContext.Provider value={{state:{...driverContextState,selectedRowData,selectedRequestData},openDriverDetail,closeDriverDetail,openNewDriverRequest,closeNewDriverRequest,openDriverRequestDetail,closeDriverRequestDetail,selectRow,selectRequest}}>
        <Box>
            <DriverComp/>
        </Box>
      </DriverContext.Provider>

      {/* <Box>
        <DriverDetails />
      </Box> */}

      {/* <Box>
        <NewDriverRequest/>
      </Box> */}

      {/* <Box>
        <DriverReqDetail/>
      </Box> */}
    </div>
  );
};
