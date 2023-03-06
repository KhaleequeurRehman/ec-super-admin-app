import React from "react";
import {useState} from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { SettingsSidebar } from "./SettingsSidebar";
import { UserListImgBox } from "../../User/UserList/components/UserListDetailUser/UserListImgBox";
import H1Typo from "../../../components/Typography/H1Typo";
import { SettingImgBox } from "./SettingsImgBox";
import { SettingsFieldBox } from "./SettingsFieldBox";
import MenuIcon from "@mui/icons-material/Menu";
import { styled, IconButton } from "@mui/material";
import SettingDrawer from "./SettingsDrawer";
import { useEffect } from "react";

export const SettingsComp = () => {
    const [openDrawer, setOpenDrawer] = React.useState(false);
    const [loginUserData, setLoginUserData] = React.useState("");


    useEffect(() => {
      const user = localStorage.getItem("user");
      if (user !== undefined) setLoginUserData(JSON.parse(user));
    }, []);

    console.log("loginUserData ",loginUserData)

  return (
    <div>
     <Box  width= "100%">
         <Box sx={{ display: { lg: "none", md: "none", sm: "flex", xs: "flex" } }}>
        <Box>
          {/* <IconButton
           onClick={() => {setOpenDrawer(true)}} 
           
           aria-label="">
            <MenuIcon />
          </IconButton> */}
               <Box><SettingDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} /></Box>

        </Box>
      </Box>
     <Box sx={{ display: "flex", }}>
        <Box width="30%">
          <SettingsSidebar />
        </Box>

        <Box ml="20px" width="100%">
          <H1Typo>Upload New Media</H1Typo>
          <Box sx={{  }}>
            <SettingImgBox loginUserData={loginUserData} />
          </Box>
            <Box mt="48px" width= "100%"><SettingsFieldBox loginUserData={loginUserData} /></Box>
        </Box>
      </Box>
     </Box>

    </div>
  );
};
