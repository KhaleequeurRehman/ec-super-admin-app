import React from 'react'
import CustomCheckbox from '../CustomCheckbox'
import Box from "@mui/material/Box";
import { styled, Typography } from "@mui/material";

export const CustomerCheckbox = ({item,onChange,value,...props}) => {

    const Typo1 = styled(Typography)(({ theme }) => ({
        fontSize: "12px",
        fontWeight: "400",
        lineHeight: "16px",
        color: "#1A1824",
        [theme.breakpoints.up("sm")]: {
          //   width: 'auto',
        },
      }));


  return (
    <div>
        <Box sx={{display: "flex"}}>
        <Box>
              <CustomCheckbox
                size="small"
                sx={{
                  width: "16px",
                  height: "16px",
                  color: "#E1E1E6",
                  borderRadius: "4px",
                  "&.Mui-checked": {
                    color: "#2B817B",
                  },
                }}
                checkboxVal={value && value}
                handleCheckCheckbox= {onChange && onChange}
                {...props}
              />
            </Box>
            <Box sx={{ pt: "4px", pl: "8px" }}>
              <Typo1 sx={{ display: "flex", alignItems: "center" }}>
                {item.title}
              </Typo1>
            </Box>
        </Box>
    </div>
  )
}
