import React, { useState } from "react";

import { Drawer, IconButton, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import { styled } from "@mui/material";

const SettingsDrawer = ({ openDrawer, setOpenDrawer }) => {
  const [value, setValue] = useState();

  //   const [openDrawer, setOpenDrawer] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const CustomListButton = styled(ListItemButton)(({ theme }) => ({
    borderRadius: "2px 2px 0px 0px",
    height: "36px",
    backgroundColor: "#ffffff",
    color: "#9EA3AE",
    fontSize: "14px",
    fontWeight: "600",
    "&.Mui-selected": {
      backgroundColor: "#2B817B",
      color: "#ffffff",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#FFFFFF",
      color: "#9EA3AE",
    },
    ":hover": {
      backgroundColor: "#FFFFFF",
      color: "#9EA3AE",
    },
  }));

  return (
    <React.Fragment>
      <Drawer
        anchor="top"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        width="100%"
      >
        <Box>
          <List component="nav" aria-label="secondary mailbox folder">
            <CustomListButton
              selected={selectedIndex === 1}
              onClick={(event) => handleListItemClick(event, 1)}
            >
              <ListItemText primary="Profile Account" />
            </CustomListButton>
            <CustomListButton
              selected={selectedIndex === 2}
              onClick={(event) => handleListItemClick(event, 2)}
            >
              <ListItemText primary="Notification Settings" />
            </CustomListButton>
            <CustomListButton
              selected={selectedIndex === 3}
              onClick={(event) => handleListItemClick(event, 3)}
            >
              <ListItemText primary="Security" />
            </CustomListButton>
            <CustomListButton
              selected={selectedIndex === 4}
              onClick={(event) => handleListItemClick(event, 4)}
            >
              <ListItemText primary="Privacy Policy" />
            </CustomListButton>
            <ListItemButton
              selected={selectedIndex === 5}
              onClick={(event) => handleListItemClick(event, 5)}
              sx={{ color: "#E75C62" }}
            >
              <ListItemText primary="Logout" />
              <img src="./assets/images/logout.svg" alt="" />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
      <IconButton
        sx={{ color: "#000000", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </React.Fragment>
  );
};

export default SettingsDrawer;
