import React from 'react'
import {useState} from 'react'
import Box from "@mui/material/Box";
import { CustomerComp } from './components/CustomerComp';
import { CustomerDetail } from './components/CustomerDetail/CustomerDetail';

export const Customer = () => {
  const [openCustomerDetail, setOpenCustomerDetail] = useState(false)
  const [selectedCustomerRow, setSelectedCustomerRow] = useState("")


  console.log('selectedCustomerRow ',selectedCustomerRow);

  

  return (
    <div>
        <Box>
          {
            openCustomerDetail ? 
            (
              <CustomerDetail setOpenCustomerDetail={setOpenCustomerDetail} selectedCustomerRow={selectedCustomerRow} /> 
            ) 
            : 
            (
              <CustomerComp setOpenCustomerDetail={setOpenCustomerDetail} setSelectedCustomerRow={setSelectedCustomerRow} />
            ) 
          }
            {/* <CustomerComp/> */}
            {/* <CustomerDetail /> */}
        </Box>
    </div>
  )
}
