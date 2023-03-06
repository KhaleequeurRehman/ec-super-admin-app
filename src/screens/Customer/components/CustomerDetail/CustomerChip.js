import React from 'react'
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";


export const CustomerChip = ({chipTitle}) => {
    let chipBgColor = "";
    let chipBorderColor = "";
    let chipFontColor = "";

    if (chipTitle.toLowerCase() === "active" || chipTitle.toLowerCase() === "online" || chipTitle.toLowerCase() === "approved" || chipTitle.toLowerCase() === "approve") {
      chipBgColor = "#F1FFF7";
      chipBorderColor = "1px solid #81D9A5";
      chipFontColor = "#30A15F";
    } 
    else if (chipTitle.toLowerCase() === "terminated") {
      chipBgColor = "#FFF1F1";
      chipBorderColor = "1px solid #DD7474";
      chipFontColor = "#9F2D2D";
    } 
    else if (chipTitle.toLowerCase() === "hold") {
      chipBgColor = "#FEF9E8";
      chipBorderColor = "1px solid #F0D859";
      chipFontColor = "#DFA90D";
    }
    else if (chipTitle.toLowerCase() === "pending") {
      chipBgColor = "#F1F6FF";
      chipBorderColor = "1px solid #819ED9";
      chipFontColor = "#2F549D";
    }
    else if (chipTitle.toLowerCase() === "rejected" || chipTitle.toLowerCase() === "reject") {
      chipBgColor = "#FFF1F1";
      chipBorderColor = "1px solid #DD7474";
      chipFontColor = "#9F2D2D";
    }
    else if (chipTitle.toLowerCase() === "in revision" || chipTitle.toLowerCase() === "revision") {
      chipBgColor = "#FEF9E8";
      chipBorderColor = "1px solid #F0D859";
      chipFontColor = "#DFA90D";
    }
    else if (chipTitle.toLowerCase() === "request"  ) {
      chipBgColor = "#FEF9E8";
      chipBorderColor = "1px solid #F0D859";
      chipFontColor = "#DFA90D";
    } 
    
    // if (chipTitle === "Active") {
    //   chipBgColor = "#F1FFF7";
    //   chipBorderColor = "1px solid #81D9A5";
    //   chipFontColor = "#30A15F";
    // } else if (chipTitle === "Terminated") {
    //   chipBgColor = "#FFF1F1";
    //   chipBorderColor = "1px solid #DD7474";
    //   chipFontColor = "#9F2D2D";
    // } else if (chipTitle === "Hold") {
    //   chipBgColor = "#FEF9E8";
    //   chipBorderColor = "1px solid #F0D859";
    //   chipFontColor = "#DFA90D";
    // }
    // else if (chipTitle === "Pending") {
    //   chipBgColor = "#F1F6FF";
    //   chipBorderColor = "1px solid #819ED9";
    //   chipFontColor = "#2F549D";
    // }
    // else if (chipTitle === "Rejected") {
    //   chipBgColor = "#FFF1F1";
    //   chipBorderColor = "1px solid #DD7474";
    //   chipFontColor = "#9F2D2D";
    // }
    // else if (chipTitle === "In Revision"  ) {
    //   chipBgColor = "#FEF9E8";
    //   chipBorderColor = "1px solid #F0D859";
    //   chipFontColor = "#DFA90D";
    // }
    // else if (chipTitle === "Online") {
    //   chipBgColor = "#F1FFF7";
    //   chipBorderColor = "1px solid #81D9A5";
    //   chipFontColor = "#30A15F";
    // }

    
  return (
    <div>
       

          <>
            <Box>
              <Chip
                label={chipTitle}
                variant="contained"
                sx={{
                  background: chipBgColor,
                  borderRadius: "4px",
                  border: chipBorderColor,
                  color: chipFontColor,
                  p: "4px, 12px, 4px, 12px",
                  height: "24px",
                  textAlign: "center",
                }}
              />
            </Box>
          </>

    </div>
  )
}
