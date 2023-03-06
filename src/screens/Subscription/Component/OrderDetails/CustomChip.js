import React from 'react'
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";


export const CustomChip = ({chipTitle, height,borderRadius,padding, ...props }) => {

        
    let chipBgColor = "";
    // if (chipTitle === "Personal subscription") {
    //   chipBgColor = "#7B49E5";
    // } else if (chipTitle === "Multiple subscription") {
    //   chipBgColor = "#158FAD";
    // } else if (chipTitle === "Bussines subscription") {
    //   chipBgColor = "#FF9933";
    // } else if (chipTitle === "Single order") {
    //   chipBgColor = "#7ECC49";
    // } else if (chipTitle === "Fitness subscription") {
    //   chipBgColor = "#FF8D85";
    // }
    if (chipTitle.toLowerCase() === "personal subscription") {
      chipBgColor = "#7B49E5";
    } else if (chipTitle.toLowerCase() === "multiple subscription") {
      chipBgColor = "#158FAD";
    } else if (chipTitle.toLowerCase() === "bussines subscription") {
      chipBgColor = "#FF9933";
    } else if (chipTitle.toLowerCase() === "single order") {
      chipBgColor = "#7ECC49";
    } else if (chipTitle.toLowerCase() === "fitness subscription") {
      chipBgColor = "#FF8D85";
    }
    

  return (
    <div> <Box>
    <Chip
      label={chipTitle}
      variant="contained"
      sx={{
        background: chipBgColor,
        borderRadius: borderRadius? borderRadius : "6px",
        color: "#fff",
        p:  padding ? padding : "2px 8px",
        textAlign: "center",
        height: {height}
        
      }}
      {...props}
    />
  </Box>



</div>
  )
}
