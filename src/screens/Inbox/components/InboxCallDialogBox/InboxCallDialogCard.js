import React from 'react'
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
export const InboxCallDialogCard = () => {
  return (
    <div>
        <Box>
        <Box 
        sx={{ paddingTop: "32px", paddingBottom: "32px", display: "flex", justifyContent: "center" }}
        >
        <Box>
            <Box sx={{display: "flex", justifyContent: "center"}}>
            <Box width="84px" height="84px">
                <img src="./assets/images/iMacMemojiRed.svg" alt="" width="100%" height="auto" />
            </Box>
            </Box>
            <Box sx={{display: "flex", flexDirection: "column", textAlign: "center"}}>
            <Typography sx={{fontSize: "16px", fontWeight: "500", color: "#1A1824"}}>Mohammed Bairos</Typography>
            <Typography sx={{fontSize: "14px", fontWeight: "400",  color: "#9EA3AE"}}>Administrator</Typography>
            </Box>
        </Box>
      </Box>
        </Box>
    </div>
  )
}
