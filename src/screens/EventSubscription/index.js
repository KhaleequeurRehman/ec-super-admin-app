import React from 'react'
import { EventSubscriptionComp } from './components/EventSubscriptionComp'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import EventOrderDetail from './components/EventOrderDetail';

export const EventSubscription = () => {
  return (
    <div>
        <Box>
            {/* <EventSubscriptionComp/> */}
            <EventOrderDetail/>
        </Box>
    </div>
  )
}
