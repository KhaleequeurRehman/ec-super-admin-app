import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import SendNotificationAllUserDataGrid from "./SendNotificationAllUserDataGrid";
import SendNotificationCustomerDataGrid from "./SendNotificationCustomerDataGrid";

const Button2 = {
  width: "103px",
  height: "40px",
  padding: "10px, 16px, 10px, 16px",
  backgroundColor: "#2B817B",
  borderRadius: "4px",
  width: { lg: "166px", md: "166px", sm: "166px", xs: "30px" },
  ":hover": {
    backgroundColor: "#2B817B",
  },
};

const BtnTypo2 = {
  fontSize: "14px",
  fontWeight: "600",
  lineHeight: "20px",
  color: "#FFFFFF",
  textTransform: "capitalize",
};

const BtnTextTypo1 = {
  fontSize: "12px",
  fontWeight: "400",
  lineHeight: "140%",
  color: "#2B817B",
  textTransform: "capitalize",
  textDecoration: "underline",
};

const SearchInputField = styled(TextField)({
  background: "#F6F6F6",
  "& fieldset.MuiOutlinedInput-notchedOutline.css-1d3z3hw-MuiOutlinedInput-notchedOutline":
    {
      borderColor: "#e1e1e6",
      borderRadius: "6px",
    },
});

export const SendNotificationMainBox = ({
  title,
  hasNotificationButton,
  hasFilterBtn,
  hasTextButtonTitle1,
  hasTextButtonTitle2,
  handleClickFilter,
  openFilter,
  hasTextButtonTitle3,
  TypoMarginBottom,
  TypoMarginTop,
  allUserDataGrid,
  customerDataGrid
}) => {
  const [searchVal, setSearchVal] = useState("");
  const [openSendNotification, setOpenSendNotification] = useState(false);

 

  const Button1 = {
    //   width: "103px",
    width: "72px",
    height: "32px",
    padding: "10px, 16px, 10px, 16px",
    border: "1px solid #80B3B0",
    borderRadius: "4px",
    backgroundColor: openFilter && "#F1FFF7",
    borderColor: openFilter && "1px solid #81D9A5",
    ":hover": {
      border: "1px solid #80B3B0",
    },
  };

  const BtnTypo1 = {
    fontSize: "14px",
    fontWeight: "600",
    lineHeight: "20px",
    color: "#2B817B",
    textTransform: "capitalize",
  };

  return (
    <div>
      <Box>    
        <Box>
          <Box width="100%">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              flexWrap="wrap"
            >
              {/* <Box sx={{ my: { xs: "10px", md: "0px",} }}> */}

              <Box>
                <SearchInputField
                  id="outlined-start-adornment"
                  sx={{
                    m: 1,
                    width: "32ch",
                    margin: { xs: "8px 0px", md: "8px" },
                  }}
                  size="small"
                  placeholder="Search "
                  value={searchVal}
                  onChange={(e) => setSearchVal(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton aria-label="toggle password visibility">
                          <SearchIcon sx={{ color: "#9EA3AE" }} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              <Box>
              {hasTextButtonTitle3 && (
                  <Button variant="text">
                    {/* <Typography sx={BtnTextTypo1}> Last Added</Typography> */}
                    <Typography sx={BtnTextTypo1}>
                      {hasTextButtonTitle3}
                    </Typography>
                    <Box sx={{ width: "16px", height: "16px" }}>
                      <img
                        src="./assets/images/GreenArrow-down.svg"
                        alt=""
                        width="100%"
                        height="auto"
                      />
                    </Box>
                  </Button>
                )}


                {hasTextButtonTitle1 && (
                  <Button variant="text">
                    {/* <Typography sx={BtnTextTypo1}> Last Added</Typography> */}
                    <Typography sx={BtnTextTypo1}>
                      {hasTextButtonTitle1}
                    </Typography>
                    <Box sx={{ width: "16px", height: "16px" }}>
                      <img
                        src="./assets/images/GreenArrow-down.svg"
                        alt=""
                        width="100%"
                        height="auto"
                      />
                    </Box>
                  </Button>
                )}

                {hasTextButtonTitle2 && (
                  <Button variant="text">
                    <Typography sx={BtnTextTypo1}>
                      {" "}
                      {hasTextButtonTitle2}
                    </Typography>
                    <Box sx={{ width: "16px", height: "16px" }}>
                      <img
                        src="./assets/images/GreenArrow-down.svg"
                        alt=""
                        width="100%"
                        height="auto"
                      />
                    </Box>
                  </Button>
                )}

                
              </Box>
            </Box>
          </Box>
        </Box>

        <Box>
          {allUserDataGrid && 
          
            <SendNotificationAllUserDataGrid/>
          }
        </Box>

        <Box>
          {customerDataGrid && 
          
            <SendNotificationCustomerDataGrid/>
          }
        </Box>
      
      </Box>
    </div>
  );
};
