import React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";

import MessageUserInfoCard from "./MessageUserInfoCard";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
// import SearchIcon from "@mui/icons-material/Search";

import { OutlinedInput } from "@mui/material";
import { DriverAppsCardSec } from "./DriverAppsCardSec";
import { DriverAppChat } from "./DriverAppChat/DriverAppChat";

const Data = [
  {
    name: "Chef Juna Food",
    imageSrc: "assets/images/iMacIcon.svg",
    email: "ECD - 012345",
    duration: "Now",
    description: "Can you help me to use this apps ? because i recen ...",
    hasDivider: true,
    hasAboveDivider: "New ( 3 )",
  },
  {
    name: "Joe Taslim",
    imageSrc: "assets/images/iMacMemojiYellow.svg",
    email: "ECD - 012345",
    duration: "2 min ago",
    description: "I don’t know the function of this page, can you help ...",
    hasDivider: true,
  },
  {
    name: "Joe Taslim",
    imageSrc: "assets/images/iMacMemojiYellow.svg",
    email: "ECD - 012345",
    duration: "7 min ago",
    description: "How can i link this bank account to this app ....",
    hasDivider: true,
  },
  {
    name: "Chef Juna Food",
    imageSrc: "assets/images/iMacMemojiWhite.svg",
    email: "ECD - 012345",
    duration: "2 min ago",
    description: "I don’t know the function of this page, can you help ...",
    hasDivider: true,
    hasAboveDivider: "Resolve ( 4 )",
  },
  {
    name: "Chef Juna Food",
    imageSrc: "assets/images/iMacMemojiYellow.svg",
    email: "ECD - 012345",
    duration: "2 min ago",
    description: "I don’t know the function of this page, can you help ...",
    hasDivider: true,
  },
  {
    name: "Chef Juna Food",
    imageSrc: "assets/images/iMacMemojiWhite.svg",
    email: "ECD - 012345",
    duration: "2 min ago",
    description: "I don’t know the function of this page, can you help ...",
    hasDivider: true,
  },
  {
    name: "Chef Juna Food",
    imageSrc: "assets/images/iMacMemojiWhite.svg",
    email: "ECD - 012345",
    duration: "2 min ago",
    description: "I don’t know the function of this page, can you help ...",
    hasDivider: true,
  },
];

const CustomSearch = styled(OutlinedInput)(({ theme }) => ({
  padding: "10px 16px",
  width: "350px",
  height: "40px",
  background: "#F6F6F6",
  border: "1px solid #E1E1E6",
  borderRadius: "4px",
}));

export const InboxDriverApps = () => {
  const [searchVal, setSearchVal] = useState("");

  return (
    <div>
    <Box sx={{display: "flex", flexDirection: {lg: "row", md: "row", sm: "column", xs: "column"}, }}>

    <Box sx={{width: {lg: "70%", md: "70%", sm: "100%", xs: "100%"}}}>
      <Box mt="28px">
        <CustomSearch
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility">
                {/* <searchIcon sx={{ color: "#9EA3AE" }} /> */}
                <img src="./assets/images/search.svg" alt="" />
              </IconButton>
            </InputAdornment>
          }
          placeholder="Search"
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
        />
      </Box>
      <Box mt="20px">
        {Data.map((item, index) => {
          return (
              <Box mb="9px" key={index}>
                <DriverAppsCardSec data={item} />
              </Box>
          );
        })}
      </Box>
    </Box>


    <Box  width="100%" sx={{ml: {lg: "20px", md: "20px", sm: "0px", xs: "0px"}}}>
        <DriverAppChat/>
    </Box>
    </Box>
    </div>
  );
};
