import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export const ReplyMsgBox = () => {
  return (
    <div>
      <Box>
        <Box sx={{display: "flex", justifyContent: "flex-end"}} >
          

          <Box sx={{
            mr: "16px",
            backgroundColor: "#2B817B",
            padding: "16px",
            maxWidth: "325px",
            borderRadius: "8px 0px 8px 8px"
          }}>
            <Typography sx={{fontSize: "14px", fontWeight: "400", color: "#1A1824"}}>Can you help me to use this apps ? because i just used a smartphone</Typography>
          </Box>

          <Box width="32px" height="32px">
            <img
              src="./assets/images/iMacMemojiRed.svg"
              alt=""
              width="100%"
              height="auto"
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
};
