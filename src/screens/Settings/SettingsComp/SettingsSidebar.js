import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import DraftsIcon from "@mui/icons-material/Drafts";
import MenuIcon from "@mui/icons-material/Menu";
import { styled, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

export const SettingsSidebar = () => {

  const navigate = useNavigate();

  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const logoutHandler = () => {
    localStorage.removeItem("admin-token");
    localStorage.removeItem("user");
    swal("Success!", `Logout Successfully`, "success");
    navigate("/login");
  }

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
    <div>
      <Box sx={{ display: { lg: "flex", md: "flex", sm: "none", xs: "none" } }}>
        <Box
          sx={{ width: "100%", maxWidth: "176px", bgcolor: "background.paper" }}
        >
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
              onClick={(event) => { handleListItemClick(event, 5); logoutHandler() }}
              sx={{ color: "#E75C62" }}
            >
              <ListItemText primary="Logout" />
              <img src="./assets/images/logout.svg" alt="" />
            </ListItemButton>
          </List>
        </Box>
      </Box>

   
    </div>
  );
};
