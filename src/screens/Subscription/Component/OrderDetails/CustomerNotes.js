import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";


export const CustomerNotes = () => {
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
          Customer Notes
        </Typography>

        <Box mt="8px">
        <OutlinedInput
          fullWidth
          components="input"
          placeholder="None"
          multiline
          rows={2}
          sx={{
            backgroundColor: "#F6F6F6",
            width: "100%",
            height: "80px",
            alignItems: "flex-start",
          }}
        />
      </Box>
        </Box>
    </div>
  );
};
