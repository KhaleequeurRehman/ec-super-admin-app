
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { DataGrid } from "@mui/x-data-grid";
import Pagination from "@mui/material/Pagination";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Grid } from "@mui/material";
import SendNotification from "../../../Customer/components/SendNotification/SendNotification";
import SendNotificationTabs from "./SendNotificationTabs";
// import SendNotification from "./SendNotification/SendNotification";





const Button2 = {
    width: "103px",
    height: "40px",
    padding: "10px, 16px, 10px, 16px",
    backgroundColor: "#2B817B",
    borderRadius: "4px",
    width: { lg: "166px", md: "166px", sm: "166px", xs: "30px" },
    ":hover": {
      backgroundColor: "#2B817B",
    },
  };
  
  const BtnTypo2 = {
    fontSize: "14px",
    fontWeight: "600",
    lineHeight: "20px",
    color: "#FFFFFF",
    textTransform: "capitalize",
  };
  
  const BtnTextTypo1 = {
    fontSize: "12px",
    fontWeight: "400",
    lineHeight: "140%",
    color: "#2B817B",
    textTransform: "capitalize",
    textDecoration: "underline",
  };
  
  
  
export const SendNotificationHeader = ({
    title,
    setIsShownSendNotificationOrderDetails,
    openFilter,
    TypoMarginBottom,
    TypoMarginTop
}) => {


    const [searchVal, setSearchVal] = useState("");
    const [openSendNotification, setOpenSendNotification] = useState(false);
  
    const SearchInputField = styled(TextField)({
      background: "#F6F6F6",
      "& fieldset.MuiOutlinedInput-notchedOutline.css-1d3z3hw-MuiOutlinedInput-notchedOutline":
        {
          borderColor: "#e1e1e6",
          borderRadius: "6px",
        },
    });
  
    const Button1 = {
      //   width: "103px",
      width: "72px",
      height: "32px",
      padding: "10px, 16px, 10px, 16px",
      border: "1px solid #80B3B0",
      borderRadius: "4px",
      backgroundColor: openFilter && "#F1FFF7",
      borderColor: openFilter && "1px solid #81D9A5",
      ":hover": {
        border: "1px solid #80B3B0",
      },
    };
  
    const BtnTypo1 = {
      fontSize: "14px",
      fontWeight: "600",
      lineHeight: "20px",
      color: "#2B817B",
      textTransform: "capitalize",
    };
  
  return (
    <div>
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Typography
            sx={{
              fontFamily: "Outfit",
              fontSize: { md: "20px", xs: "14px" },
              // mb: TypoMarginBottom ? TypoMarginBottom : "30px",
              color: "#1A1824",
              lineHeight: "20px",
              fontWeight: "600",
              mt: TypoMarginTop ? TypoMarginTop : "10px",
            }}
          >
            {title}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", mt: "10px" }}>
            <Box>
              <Button
                variant="contained"
                sx={Button2}
                onClick={() => {
                  // setOpenSendNotification(true);
                  setIsShownSendNotificationOrderDetails(true);
                }}
              >
                <img src="./assets/images/notification.svg" alt="" />
                <Box
                  sx={{
                    display: {
                      lg: "flex",
                      md: "flex",
                      sm: "flex",
                      xs: "none",
                    },
                  }}
                >
                  <Typography ml="8px" sx={BtnTypo2}>
                    Send Notification
                  </Typography>
                </Box>
              </Button>
            </Box>
        </Box>
      </Box>
      

      {openSendNotification ? (
          <SendNotification
            open={openSendNotification}
            setOpen={setOpenSendNotification}
          />
        ) : (
          ""
        )}
      
    </Box>
  </div>
  )
}
