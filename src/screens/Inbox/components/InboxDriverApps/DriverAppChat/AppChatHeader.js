import React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CustomCheckbox from "../../../../Customer/components/CustomCheckbox";
import Divider from '@mui/material/Divider';
import PopularQuestionTag from "./PopularQuestionTag";
export const AppChatHeader = ({
  imageSrc,
  name,
  email,
  duration,
  nameSx,
  emailSx,
  durationSx,
  setOpenDialog
}) => {
  return (
    <div>
        <Box
          // sx={{
          //   border: "1px solid #E1E1E6",
          //   p: "16px",
          //   // borderRadius: "6px",
          // }}
        >


        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", flexWrap: "wrap", my: "5px" }}>
            
            <Box sx={{ width: "56px", height: "56px", borderRadius: "50%" }}>
              <img
                src={imageSrc}
                alt="userIcon"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
            <Box sx={{ ml: "15px" }}>
              <Typography
                sx={{
                  fontSize: { xs: "17px", md: "20px" },
                  fontWeight: "500",
                  color: "#1A1824",
                }}
              >
                {name}
              </Typography>
              {/* <Typography sx={nameSx ? nameSx : {fontSize:{xs:"13px",md:"16px"},fontWeight:"500",color:"#1A1824"}}>{name && name}</Typography> */}
              <Typography
                sx={{
                  fontSize: { xs: "12px", md: "14px" },
                  fontWeight: "400",
                  color: "#9EA3AE",
                }}
              >
                {email}
              </Typography>
              {/* <Typography sx={emailSx? emailSx : {fontSize:{xs:"10px",md:"12px"},fontWeight:"400",color:"#9EA3AE"}}>{email && email}</Typography> */}
            </Box>

            <Box onClick={() => setOpenDialog(true)} sx={{
                ml:"20px",
                with: "48px",
                height: "48px",
                borderRadius: "6px",
                padding: "12px",
                border: "1px solid #80B3B0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer"
            }}>
            <Box  width="24px" height="24px">
                <img src="./assets/images/call.svg" alt="" width="100%" height="auto" />
            </Box>
            </Box>
          </Box>



          <Box
            sx={{
              my: "5px",
              border: "1px solid #F6F6F6",
              width: "131px",
              height: "29px",
              padding: "6px, 8px, 6px, 8px",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Checkbox
              size="small"
              sx={{
                color: "#E1E1E6",
                "&.Mui-checked": {
                  color: "#2B817B",
                },
              }}
            />

            <Typography 
             sx={{
                fontSize: { xs: "10px", md: "12px" },
                fontWeight: "400",
                color: "#1A1824",
              }}
            >Mark as Revolve</Typography>
            {/* <Typography sx={durationSx? durationSx : {fontSize:{xs:"10px",md:"12px"},fontWeight:"400",color:"#2B817B"}}>{duration && duartion}</Typography> */}
          </Box>
        </Box>

       
        </Box>
    </div>
  );
};
