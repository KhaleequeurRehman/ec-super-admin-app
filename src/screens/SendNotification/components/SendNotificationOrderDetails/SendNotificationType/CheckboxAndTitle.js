import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import {
    styled,
  } from "@mui/material";
  import {
    H1Typo,
    H3Typo,
    LightTitle,
    LightTitle2
  } from "../../../../../components/Typography";
  import {
    Box,

  } from "@mui/material";


const CardBox = styled(Box)(({ theme }) => ({
    width: "100%",
    height: "52px",
    padding: "16px",
    border: "1px solid #E1E1E6",
    borderRadius: "4px",
        
}));
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const CheckboxAndTitle = ({title, value,...props}) => {
  return (
    <div>
           <Box>
        <CardBox sx={{display: "flex", alignItems: "center"}}>
        <Checkbox
        value={value}
        {...label}
        {...props}
        
        sx={{
          color: "#E1E1E6",
          '&.Mui-checked': {
            color: "#2B817B",
          },
        }}
      />
            <H3Typo bold>{title}</H3Typo>
        </CardBox>
    </Box>
    </div>
  )
}
