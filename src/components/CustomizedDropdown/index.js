import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Button, Menu, Divider, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";

export default function CustomizedDropdown() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [checkbox, setCheckbox] = React.useState(true);
  const [checkbox2, setCheckbox2] = React.useState(false);

  const [menuVal, setMenuVal] = React.useState("Selected");

  const handleIcon = () => {
    setCheckbox(true);
    setCheckbox2(false);
  }
  const handleIcon2 = () => {
    setCheckbox(false);
    setCheckbox2(true);
  }


  return (
    <Box sx={{ width: "100%" }}>
      <Box textAlign="right">
        <Button
          id="basic-button"
          variant="outlined"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon sx={{color:"#2B817B"}} />}
          sx={{
            minWidth:"130px",
            borderRadius:"6px",
            color:"transparent",
            p:{xs:"4px 8px",md:"4px 8px"},
            borderColor: "#E1E1E6",
            "&:hover,&:active,&:focus": {
                borderColor: "#E1E1E6",
                bgcolor:"unset"
            },
          }}
        >
          <Typography sx={{textTransform:"none",color:"#2B817B",fontWeight:"600",fontSize:"12px"}}>{menuVal}</Typography>
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{
            border: "1px solid #E1E1E6",
            borderRadius: "6px",
          }}
        >
          <MenuItem
            sx={{
              minWidth:"180px",
              py:"5px",
              fontSize: "14px",
              fontWeight: "400",
              
            }}
            onClick={(e) => {
              setMenuVal("Selected");
              handleClose();
              handleIcon();
            }}
          >
            <ListItemText primary="Selected" sx={{color:checkbox?'#1A1824':"#9EA3AE"}}
            primaryTypographyProps={{fontSize: '14px', fontFamily: "outfit", fontWeight: checkbox? '600': '400',}}
            />
            <ListItemIcon>
              {checkbox ? (
                <CheckCircleOutlineIcon sx={{ fill: "#42C677" }} />
              ) : (
                ""
              )}
            </ListItemIcon>
          </MenuItem>
          {/* <Divider variant="middle" orientation="horizontal" /> */}
          <MenuItem
            sx={{
              py:"5px",
              fontSize: "14px",
              minWidth:"180px",
            }}
            onClick={(e) => {
              setMenuVal("Unselected");
              handleClose();
              handleIcon2();
            }}
          >
            <ListItemText primary="Unselected" sx={{color:checkbox2?'#1A1824':"#9EA3AE", fontWeight: checkbox? "600": "400"}}
            primaryTypographyProps={{fontSize: '14px', fontFamily: "outfit", fontWeight: checkbox2? '600': '400',}}
             />
            <ListItemIcon>
              {checkbox2 ? (
                <CheckCircleOutlineIcon sx={{ fill: "#42C677" }} />
              ) : (
                ""
              )}
            </ListItemIcon>
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
}




