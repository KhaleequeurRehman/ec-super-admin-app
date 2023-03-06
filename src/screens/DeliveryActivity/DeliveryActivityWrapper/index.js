import React, { useState } from 'react'
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DashboardStatsData, DashboardStatsData2 } from '../../../config';
import Button from '@mui/material/Button';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import TrackOrder from '../../TrackOrder';
import DeliveryActivityMainCmp from '../DeliveryActivityMainCmp';
import { useDeliveryActivityContext } from 'contexts/DeliveryActivityContext/DeliveryActivityContext';
import OrderDetails from 'screens/OrderDetails';
import OrderActivityMainCmp from 'screens/OrderActivity/OrderActivityMainCmp';

const DeliveryActivityWrapper = () => {
  
    const deliveryActivityStateData = useDeliveryActivityContext()

  return (
    <>

    {
    deliveryActivityStateData?.state?.isShownTrackOrder?
      <> 
        <TrackOrder/>
      </>
      :
      deliveryActivityStateData?.state?.isShownOrderDetails?
      <>
        <OrderDetails/>
      </>
      :
      deliveryActivityStateData?.state?.isShownOrderActivityMainCmp?
      <>
        <OrderActivityMainCmp/>
      </>
      :
      <>
        <DeliveryActivityMainCmp/>
      </>
    }

    </ >
  )
}

export default DeliveryActivityWrapper