import React from "react";
import { styled, IconButton, createStyles } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
const FieldTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "12px",
  lineHeight: "16px",
  color: "#1A1824",
  // [theme.breakpoints.up("xl")]: {
  //   fontSize: "22px",
  // },
}));

export const SettingsFieldBox = ({loginUserData}) => {
  const [menuVal, setMenuVal] = React.useState("Admin Role");
  const [open, setOpen] = React.useState(true);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openBox = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    // setDisableFunc(true);
  };
  const handleCloseBox = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Box width="100%"
        sx={{
          display: "flex",
          flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
        }}
      >
        <Box width="100%" mr="20px">
          <FieldTitle
            sx={{
              fontSize: "14px",
              fontWeight: "500",
              marginTop: "9px",
              mb: "8px",
              color: "#545359",
            }}
          >
            First name :
          </FieldTitle>

          <OutlinedInput
            // placeholder="Type your first name"
            value={loginUserData?.firstName}
            disabled
            sx={{
              backgroundColor: "#F6F6F6",
              width: "100%",
              height: "40px",
              fontSize: "14px",
            }}
          />
        </Box>

        <Box width="100%" mr="20px">
          <FieldTitle
            sx={{
              fontSize: "14px",
              fontWeight: "500",
              marginTop: "9px",
              mb: "8px",
              color: "#545359",
            }}
          >
            Last name :
          </FieldTitle>

          <OutlinedInput
            // placeholder="Type your last name"
            value={loginUserData?.lastName}
            disabled
            sx={{
              backgroundColor: "#F6F6F6",
              width: "100%",
              height: "40px",
              fontSize: "14px",
            }}
          />
        </Box>
      </Box>

      <Box width="100%"
        sx={{
          display: "flex",
          flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
        }}
      >
        <Box width="100%" mr="20px">
          <FieldTitle
            sx={{
              fontSize: "14px",
              fontWeight: "500",
              marginTop: "9px",
              mb: "8px",
              color: "#545359",
            }}
          >
            Email :
          </FieldTitle>

          <OutlinedInput
            // placeholder="Type your email address"
            value={loginUserData?.email}
            disabled
            sx={{
              backgroundColor: "#F6F6F6",
              width: "100%",
              height: "40px",
              fontSize: "14px",
            }}
          />
        </Box>

        <Box width="100%" mr="20px">
          <FieldTitle
          
            sx={{
              fontSize: "14px",
              fontWeight: "500",
              marginTop: "9px",
              mb: "8px",
              color: "#545359",
            }}
          >
            Numberphone :
          </FieldTitle>

          <OutlinedInput
          type="tel"
          // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            // placeholder="XXX - XXX - XXX"
            value={loginUserData?.phone}
            disabled
            sx={{
              backgroundColor: "#F6F6F6",
              width: "100%",
              height: "40px",
              fontSize: "14px",
            }}
          />
        </Box>
      </Box>

     
    </div>
  );
};
