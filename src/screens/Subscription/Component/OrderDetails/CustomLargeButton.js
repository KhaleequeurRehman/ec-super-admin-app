import React from 'react'
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from '@mui/system';

export const CustomLargeButton = ({variant , title, isContained, borderColor, color, onClickFunc}) => {

    const CustomButton = styled(Button)(({theme}) => ({
        color: color,
        backgroundColor: isContained && '#2B817B',
        border: isContained ? "" : borderColor,
        padding: "8px, 24px, 8px, 24px",
        borderRadius: "6px",
        height: "40px",
        width: "100%",
        fontSize: "16px",
        fontWeight: "600",
        lineHeight: "24px",
        textTransform: "capitalize",
        ":hover" : {
            backgroundColor: isContained && '#2B817B',
            border: isContained ? "" : borderColor,
        }
      }));


  return (
    <div>
        <Box>
        <CustomButton onClick={onClickFunc} variant={variant}>{title}</CustomButton>
        </Box>
    </div>
  )
}
