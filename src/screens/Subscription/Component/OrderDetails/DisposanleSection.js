import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
    styled,

  } from "@mui/material";

const Data = [
    {
        title: "Spoon",
        subTitle: "90 pcs",
        image: "./assets/images/spoon.png"
    },
    {
        title: "Plates",
        subTitle: "90 pcs",
        image: "./assets/images/plate.png"
    },
    {
        title: "Knives and Forks",
        subTitle: "90 pcs",
        image: "./assets/images/forks.png"
    },
]
export const DisposanleSection = () => {

const Typo1 = styled(Typography)((({theme}) => ({
    fontFamily: theme.typography.fontFamily,
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "16px",
    color: "#1A1824",
    lineHeight: "160%",
    letterSpacing: "1.5%",
})))
const Typo2 = styled(Typography)((({theme}) => ({
    fontFamily: theme.typography.fontFamily,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "14px",
    color: "#9EA3AE",
    lineHeight: "19.6px",
    letterSpacing: "1.5%",
})))
  return (
    <div>
      <Box
        border="1px solid #E1E1E6"
        borderRadius="8px"
        height="auto"
        // p="10px 15px"
        p="16px"
      >
        <Typography fontSize="14px" fontWeight="600" color="#545359">
        Disposanle Utensils
        </Typography>

        <Box sx={{display: "flex",}}>
        {Data.map((item,index) => {
            return(
                <Box mt="14px" mr= "31px" key={index}>
            <Box sx={{width: "128px", height: "128px", mt: "12px"}}>
                <img src={item.image} alt="" width="100%" height="auto"/>
            </Box>
            <Box mt="12px">
                <Typo1>{item.title}</Typo1>
                <Typo2>{item.subTitle}</Typo2>
            </Box>
        </Box>
            )
        })}
        

        
        </Box>
      </Box>
    </div>
  );
};
