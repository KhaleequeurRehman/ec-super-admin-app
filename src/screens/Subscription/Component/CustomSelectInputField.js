import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import { styled } from "@mui/material";
import {
  Typography,
  Box,
  Button,
  Avatar,
  IconButton,
  Grid,
  Container,
} from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";

export const CustomSelectInputField = ({
  handleClick,
  title,
  subTitle,
  className,
  placeholder,
  disabled,
  icon,
  onChange
}) => {
  const Para = styled(Typography)(({ theme }) => ({
    fontFamily: "Outfit",
    fontWeight: "400",
    color: "#1A1824;",
  }));

  return (
    <>
      <Para display="inline" sx={{ fontSize: "16px", fontWeight: "500" }}>
        {title}
      </Para>
      <Para
        display="inline"
        sx={{ color: "#9EA3AE", fontSize: "16px", fontWeight: "500" }}
      >
        {subTitle}
      </Para>
      <OutlinedInput
        fullWidth
        onClick={handleClick}
        // onChange={onChange}
        disabled={disabled}
        className={className}
        placeholder={placeholder}
        sx={{
          backgroundColor: "#F6F6F6",
          width: "100%",
          height: "40px",
          mt: "8px",
        }}
        endAdornment={
          <InputAdornment position="start">
            <img src={icon} alt="" height="16px" width="16px" />
          </InputAdornment>
        }
      />
    </>
  );
};
