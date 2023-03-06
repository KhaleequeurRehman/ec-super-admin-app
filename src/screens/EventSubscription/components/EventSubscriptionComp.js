import React from 'react'
import Box from "@mui/material/Box";
import { SingleOrderHeader } from '../../SingleOrder/Component/SingleOrderHeader';
import EventOrderDataGrid from './EventOrderDataGrid';

export const EventSubscriptionComp = () => {


  return (
    <div>
        <Box width="100%">
        
        <Box>
          <SingleOrderHeader title={"Event Order List"} hasExportButton= {true} hasHistoryButton={false} hasTextButtonTitle1={"Last Month"}  />
        </Box>

        <Box>
          <EventOrderDataGrid IdSubColor={"#42C677"}/>
        </Box>
       
      </Box>
    </div>
  )
}
