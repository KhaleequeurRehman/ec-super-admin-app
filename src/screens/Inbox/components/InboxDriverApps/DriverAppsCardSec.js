import React from 'react'
import Box from "@mui/material/Box";
import MessageUserInfoCard from './MessageUserInfoCard';
import Divider from '@mui/material/Divider';

export const DriverAppsCardSec = ({data}) => {
  return (
    <div>
        <Box>
       {data.hasAboveDivider && 
        <Box  mb="9px" mt="7px"><Divider sx={{fontSize: "12px", fontWeight: "400", color: "#9EA3AE"}}>{data.hasAboveDivider}</Divider></Box>
       }
        <MessageUserInfoCard
          imageSrc={data.imageSrc}
          name={data.name}
          email={data.email}
          duration={data.duration}
          description={data.description}
          hasDivider={data.hasDivider}
        />
      </Box>
    </div>
  )
}
