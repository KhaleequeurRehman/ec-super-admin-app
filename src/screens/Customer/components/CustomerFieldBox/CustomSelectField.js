import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { styled, alpha } from "@mui/material/styles";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
// import IconButton from '@mui/material/IconButton';
import { useState } from "react";
import Typography from "@mui/material/Typography";
import CustomCheckbox from "../CustomCheckbox";

export const CustomSelectField = ({
  initialMenuVal,
  icon,
  hasEndCheckbox,
  mainTitle,
  item,
}) => {
  const TypoTitle = styled("div")(({ theme }) => ({
    // padding: theme.spacing(0, 14),
    fontFamily: "Outfit",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "20px",
    lineHeight: "32px",

    color: "#1A1824",
  }));

  const Typo1 = styled("div")(({ theme }) => ({
    // padding: theme.spacing(0, 17),
    fontFamily: "Outfit",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "12px",
    lineHeight: "16px",
    alignItems: "center",
    color: "#1A1824",
  }));

  const [open, setOpen] = React.useState(true);

  const [menuVal, setMenuVal] = React.useState("");

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openBox = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseBox = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typo1 variant="body1" color="initial">
              {item.mainTitle}
            </Typo1>
          </Box>

          {item.hasEndCheckbox && (
            <Box sx={{ display: "flex",  }}>
              <Box sx={{display: "flex", alignItems: "center"}}>
                <CustomCheckbox
                  size="small"
                  sx={{
                    width: "16px",
                    height: "16px",
                    color: "#E1E1E6",
                    borderRadius: "4px",
                    "&.Mui-checked": {
                      color: "#2B817B",
                    },
                  }}
                />
              </Box>
              <Box sx={{ pl: "8px" }}>
                <Typo1 sx={{ display: "flex", alignItems: "center" }}>
                  {item.hasEndCheckboxTitle}
                </Typo1>
              </Box>
            </Box>
          )}
        </Box>
        <Box sx={{ minWidth: 120, mt: "8px" }}>
          <FormControl fullWidth>
            <Button
              fullWidth
              id="basic-button"
              aria-controls={openBox ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              // endIcon={<KeyboardArrowRightIcon />}
              sx={{
                textTransform: "capitalize",
                fontSize: {
                  xl: "18px",
                  lg: "14px",
                  md: "14px",
                  sm: "14px",
                  xs: "14px",
                },
                fontWeight: "400",
                pl: "0px",
                borderColor: "#E1E1E6",
                border: "1px solid",
                fontFamily: "outfit",
                height: {
                  xl: "40px",
                  lg: "40px",
                  md: "40px",
                  sm: "auto",
                  xs: "auto",
                },
                borderRadius: "6px",
                backgroundColor: "#F6F6F6",
                color: "#9EA3AE",
                justifyContent: "space-between",
                pl: "16px",
                pr: "16px",
              }}
            >
              {item.initialMenuVal}

              {/* {menuVal} */}
              <img src={item.icon} alt="" />
            </Button>
            <Menu
              fullWidth
              id="basic-menu"
              anchorEl={anchorEl}
              open={openBox}
              onClose={handleCloseBox}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              // elevation={0}
              sx={{
                border: "1px solid #E1E1E6",
                borderRadius: "6px",
              }}
            >
              <MenuItem
                sx={{
                  width: {
                    xl: "350px",
                    lg: "350px",
                    md: "250px",
                    sm: "250px",
                    xs: "100%",
                  },
                }}
              ></MenuItem>
            </Menu>
          </FormControl>
        </Box>
      </Box>
    </div>
  );
};
