import React, { useState } from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled } from "@mui/material/styles";
import { DataGrid } from "@mui/x-data-grid";
import Pagination from "@mui/material/Pagination";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Grid } from "@mui/material";
import SendNotification from "../../../Customer/components/SendNotification/SendNotification";
import { useGetDriverRequestWithStatusRejectedMutation, useGetDriverRequestWithStatusRequestMutation, useGetDriverRequestWithStatusRevissionMutation, useGetDriverRequestWithStatusMutation, useGetDriverRequestWithStatusTerminatedMutation } from "../../../../api/drivers";


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


export const HeaderForNewDriverRequest = ({
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
  setAllDriverRequestsData,
  refetchAllDriverRequestsData
}) => {

  // const [getDriverRequestWithStatusRevission, revissionresdata] = useGetDriverRequestWithStatusRevissionMutation()
  // const [getDriverRequestWithStatusRejected, rejectedresdata] =
  // useGetDriverRequestWithStatusRejectedMutation()
  // const [getDriverRequestWithStatusRequest, requestresdata] =
  // useGetDriverRequestWithStatusRequestMutation()
  // const [getDriverRequestWithStatusTerminated, terminatedresdata] =
  // useGetDriverRequestWithStatusTerminatedMutation()
  const [getDriverRequestWithStatus, resdata] =
  useGetDriverRequestWithStatusMutation()

  const [searchVal, setSearchVal] = useState("");
  const [openSendNotification, setOpenSendNotification] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = (status) => {
    // if(indicator === "withStatusRevission"){
    //   getDriverRequestWithStatusRevission({ page:1, size:10 }).then((res) => {
    //     if (res.data){
    //         console.log("res.data newCatererRequestData ", res?.data?.data);
    //         setAllDriverRequestsData(res?.data?.data)
    //     }
    //   });
    //   setAnchorEl(null);
    // }else if(indicator === "withStatusRejected"){
    //   getDriverRequestWithStatusRejected({ page:1, size:10 }).then((res) => {
    //     if (res.data){
    //         console.log("res.data newCatererRequestData ", res?.data?.data);
    //         setAllDriverRequestsData(res?.data?.data)
    //     }
    //   });
    //   setAnchorEl(null);
    // }else if(indicator === "withStatusRequest"){
    //   getDriverRequestWithStatusRequest({ page:1, size:10 }).then((res) => {
    //     if (res.data){
    //         console.log("res.data newCatererRequestData ", res?.data?.data);
    //         setAllDriverRequestsData(res?.data?.data)
    //     }
    //   });
    //   setAnchorEl(null);
    // }else if(indicator === "withStatusTerminated"){
    //   getDriverRequestWithStatusTerminated({ page:1, size:10 }).then((res) => {
    //     if (res.data){
    //         console.log("res.data newCatererRequestData ", res?.data?.data);
    //         setAllDriverRequestsData(res?.data?.data)
    //     }
    //   });
    //   setAnchorEl(null);
    // }else{
    //   setAnchorEl(null);
    // }
    getDriverRequestWithStatus({ page:1, size:10, status:status }).then((res) => {
      if (res.data){
          console.log("res.data getDriverRequestWithStatus ", res?.data?.data);
          setAllDriverRequestsData(res?.data?.data)
      }
      setAnchorEl(null);
    });
  };

  // const SearchInputField = styled(TextField)({
  //   background: "#F6F6F6",
  //   "& fieldset.MuiOutlinedInput-notchedOutline.css-1d3z3hw-MuiOutlinedInput-notchedOutline":
  //     {
  //       borderColor: "#e1e1e6",
  //       borderRadius: "6px",
  //     },
  // });

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
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography
              sx={{
                fontFamily: "Outfit",
                fontSize: { md: "20px", xs: "14px" },
                mb: TypoMarginBottom ? TypoMarginBottom : "30px",
                color: "#1A1824",
                lineHeight: "20px",
                fontWeight: "600",
                mt: TypoMarginTop ? TypoMarginTop : "10px",
              }}
            >
              {title}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", mt: "10px" }}>
            {hasNotificationButton && (
              <Box>
                <Button
                  variant="contained"
                  sx={Button2}
                  onClick={() => {
                    setOpenSendNotification(true);
                  }}
                >
                  <img src="./assets/images/notification.svg" alt="" />
                  <Box
                    sx={{
                      display: {
                        lg: "flex",
                        md: "flex",
                        sm: "flex",
                        xs: "none",
                      },
                    }}
                  >
                    <Typography ml="8px" sx={BtnTypo2}>
                      Send Notification
                    </Typography>
                  </Box>
                </Button>
              </Box>
            )}
          </Box>
        </Box>

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
                    // m: 1,
                    width: "32ch",
                    margin: { lg: "0px", sm: "8px 0px", xs: "8px 0px", md: "8px" },
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
                <Box>
                  <Button 
                  variant="text"
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                  >
                    <Typography sx={BtnTextTypo1}>
                      Any Status
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
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
                      <MenuItem sx={{color: "#2B817B",}} onClick={() => {handleClose("request")}}>request</MenuItem>
                      <MenuItem sx={{color: "#2B817B",}} onClick={() => {handleClose("revision")}}>revision</MenuItem>
                      <MenuItem sx={{color: "#2B817B",}} onClick={() => {handleClose("rejected")}}>rejected</MenuItem>
                      <MenuItem sx={{color: "#2B817B",}} onClick={() => {handleClose("terminated")}}>terminated</MenuItem>
                      <MenuItem sx={{color: "#2B817B",}} onClick={() => {handleClose("hold")}}>hold</MenuItem>
                      <MenuItem sx={{color: "#2B817B",}} onClick={() => {refetchAllDriverRequestsData();  setAnchorEl(null);}}>All</MenuItem>
                      {/* <MenuItem sx={{color: "#2B817B",}} onClick={() => {handleClose("withStatusRequest")}}>request</MenuItem>
                      <MenuItem sx={{color: "#2B817B",}} onClick={() => {handleClose("withStatusRevission")}}>revission</MenuItem>
                      <MenuItem sx={{color: "#2B817B",}} onClick={() => {handleClose("withStatusRejected")}}>rejected</MenuItem>
                      <MenuItem sx={{color: "#2B817B",}} onClick={() => {handleClose("withStatusTerminated")}}>terminated</MenuItem>
                      <MenuItem sx={{color: "#2B817B",}} onClick={() => {refetchAllDriverRequestsData();  setAnchorEl(null);}}>All</MenuItem> */}
                    </Menu>
                </Box>

                {/* {hasTextButtonTitle2 && (
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
                )} */}

                {hasFilterBtn && (
                  <Button
                    variant="outlined"
                    sx={Button1}
                    onClick={handleClickFilter}
                  >
                    <Typography sx={BtnTypo1}>Filter</Typography>
                    <Box
                      ml="8px"
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <img src="./assets/images/setting-4.svg" alt="" />
                    </Box>
                  </Button>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
        {openSendNotification ? (
          <SendNotification
            open={openSendNotification}
            setOpen={setOpenSendNotification}
          />
        ) : (
          ""
        )}
      </Box>
    </div>
  );
};
