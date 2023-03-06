import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { DataGrid } from "@mui/x-data-grid";
import Pagination from "@mui/material/Pagination";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import CustomCheckbox from "../../../Customer/components/CustomCheckbox";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import { useGetNotificationHistoryOfCatererQuery, useGetNotificationHistoryOfDriverMutation, useGetNotificationHistoryOfDriverQuery} from "api/notification";
import { IconButton, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
// import { SingleOrderHeader } from "./SingleOrderHeader";

const CardData = [
  {
    title: "5012",
    subTitle: "Personal Subscription",
    image: "./assets/images/Frame 712.svg",
  },

  {
    title: "512",
    subTitle: "Business Subscription",
    image: "./assets/images/frame512.svg",
  },

  {
    title: "420",
    subTitle: "Multiple Subscription",
    image: "./assets/images/frame420.svg",
  },

  {
    title: "5012",
    subTitle: "Personal Subscription",
    image: "./assets/images/Frame 712.svg",
  },
];

const SearchInputField = styled(TextField)({
  background: "#F6F6F6",
  "& fieldset.MuiOutlinedInput-notchedOutline.css-1d3z3hw-MuiOutlinedInput-notchedOutline":
    {
      borderColor: "#e1e1e6",
      borderRadius: "6px",
    },
});

const paginationSx = {
  "& .css-1awya33-MuiButtonBase-root-MuiPaginationItem-root": {
    border: "1px solid #E1E1E6",
    borderRadius: "8px",
    color: "#9EA3AE",
    background: "none",
  },
  "& .css-1awya33-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected": {
    backgroundColor: "#2b817b",
    color: "white",
    borderRadius: "8px",
  },
};

const Typo1 = {
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "20px",
  color: "#9EA3AE",
};

const Button1 = {
  width: "103px",
  height: "40px",
  padding: "10px, 16px, 10px, 16px",
  border: "1px solid #80B3B0",
  borderRadius: "4px",
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

const Button2 = {
  width: "103px",
  height: "40px",
  padding: "10px, 16px, 10px, 16px",
  backgroundColor: "#2B817B",
  borderRadius: "4px",
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

const subscriptionTableRow = [
  {
    id: 1,
    title: "Update (v5.1) available",
    description: "New version of e food ...",
    sendAt: "21 Nov 2021, 08 : 00 Am",
    status: "Customer",
    deliveryDate: "Thu, 21 Nov 2021",
  },
  {
    id: 2,
    title: "Update (v5.1) available",
    description: "New version of e food ...",
    sendAt: "21 Nov 2021, 08 : 00 Am",
    status: "Caterer",
    deliveryDate: "Thu, 21 Nov 2021",
  },
  {
    id: 3,
    title: "Update (v5.1) available",
    description: "New version of e food ...",
    sendAt: "21 Nov 2021, 08 : 00 Am",
    status: "Customer",
    deliveryDate: "Thu, 21 Nov 2021",
  },
  {
    id: 4,
    title: "Update (v5.1) available",
    description: "New version of e food ...",
    sendAt: "21 Nov 2021, 08 : 00 Am",
    status: "Driver",
    deliveryDate: "Thu, 21 Nov 2021",
  },
  {
    id: 5,
    title: "Update (v5.1) available",
    description: "New version of e food ...",
    sendAt: "21 Nov 2021, 08 : 00 Am",
    status: "Driver",
    deliveryDate: "Thu, 21 Nov 2021",
  },
  {
    id: 6,
    title: "Update (v5.1) available",
    description: "New version of e food ...",
    sendAt: "21 Nov 2021, 08 : 00 Am",
    status: "Customer",
    deliveryDate: "Thu, 21 Nov 2021",
  },
  {
    id: 7,
    title: "Update (v5.1) available",
    description: "New version of e food ...",
    sendAt: "21 Nov 2021, 08 : 00 Am",
    status: "Caterer",
    deliveryDate: "Thu, 21 Nov 2021",
  },
  {
    id: 8,
    title: "Update (v5.1) available",
    description: "New version of e food ...",
    sendAt: "21 Nov 2021, 08 : 00 Am",
    status: "Customer",
    deliveryDate: "Thu, 21 Nov 2021",
  },
  {
    id: 9,
    title: "Update (v5.1) available",
    description: "New version of e food ...",
    sendAt: "21 Nov 2021, 08 : 00 Am",
    status: "Driver",
    deliveryDate: "Thu, 21 Nov 2021",
  },
  {
    id: 10,
    title: "Update (v5.1) available",
    description: "New version of e food ...",
    sendAt: "21 Nov 2021, 08 : 00 Am",
    status: "Driver",
    deliveryDate: "Thu, 21 Nov 2021",
  },
];

const SendNotificationDriverDataGrid = ({ IdSubColor, setOpenCustomerDetail }) => {

  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [totalNotificatonsCount, setTotalNotificatonsCount] = useState(1);

  // const {data:notificationHistoryOfDriverData,isLoading,refetch,isSuccess} = useGetNotificationHistoryOfDriverQuery(`page=${page}&size=${size}&sortBy=createdAt`)
  const [getNotificationHistoryOfDriver, resdata] = useGetNotificationHistoryOfDriverMutation()

  const [notificationHistoryOfDriver, setNotificationHistoryOfDriver] = useState([])
  const [searchVal, setSearchVal] = useState("");
  const [openCancelDialog,setOpenCancelDialog] = useState(false)

  const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
    "& .css-17jjc08-MuiDataGrid-footerContainer": {
      display: "none",
    },
    boxShadow: "none",
    border: "none",
    borderColor: "green",
    // color: "#545359",
    color: "#1A1824",
    "& .MuiDataGrid-cell:focus": {
      outline: "none",
      color: "#1A1824",
      border: "1px solid transparent !important",
    },
    "& .MuiDataGrid-iconButtonContainer": {
      marginLeft: "2px",
      visibility: "visible !important",
      width: "auto !important",
    },
    "& .css-gl260s-MuiDataGrid-columnHeadersInner": {
      color: "#9EA3AE",
    },
  }));

  const subscriptionTableColumns = [
    { field: "id", headerName: "#", width: 50 },
    {
      field: "title",
      headerName: "Title",
      width: 230,
      renderHeader: () => (
        <strong>
          {"Title "}
          <span role="img" aria-label="enjoy" style={{ paddingLeft: "20px" }}>
            <img src="assets/images/arrow-3.svg" alt="" />
          </span>
        </strong>
      ),
      renderCell: (params) => {
        const { value } = params;
        return (
          <>
            <Box >
              

              <Typography
                pl="8px"
                sx={{
                  color: "#1A1824",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "20px",
                }}
              >
                {params.value}
              </Typography>
            </Box>
          </>
        );
      },
    },
    {
      field: "description",
      headerName: "Description",
      width: 230,
      renderHeader: () => (
        <strong>
          {"Description "}
          <span role="img" aria-label="enjoy" style={{ paddingLeft: "20px" }}>
            <img src="assets/images/arrow-3.svg" alt="" />
          </span>
        </strong>
      ),
    },
    // {
    //   field: "sendAt",
    //   headerName: "Send at",
    //   width: 230,
    // },
    {
      field: "createdAt",
      headerName: "Send at",
      width: 230,
    },
    {
      field: "to",
      headerName: "Status",
      width: 140,

      renderCell: (params) => {
        const { value } = params;
        let chipBgColor = "";
        let chipBorderColor = "";
        let chipFontColor = "";

        if (value === "Customer") {
          chipBgColor = "#F1FFF7";
          chipBorderColor = "1px solid #81D9A5";
          chipFontColor = "#1A1824";
        } else if (value === "Caterer") {
          chipBgColor = "#FFF1F1";
          chipBorderColor = "1px solid #DD7474";
          chipFontColor = "#1A1824";
        } else if (value === "Driver") {
          chipBgColor = "#F1F6FF";
          chipBorderColor = "1px solid #819ED9";
          chipFontColor = "#1A1824";
        }

        return (
          <>
            <Box>
              <Chip
                label={params.value}
                variant="contained"
                sx={{
                  background: chipBgColor,
                  borderRadius: "4px",
                  border: chipBorderColor,
                  color: chipFontColor,
                  p: "4px, 12px, 4px, 12px",
                  height: "24px",
                  textAlign: "center",
                }}
              />
            </Box>
          </>
        );
      },
    },
    // {
    //   field: "status",
    //   headerName: "Status",
    //   width: 230,

    //   renderCell: (params) => {
    //     const { value } = params;
    //     let chipBgColor = "";
    //     let chipBorderColor = "";
    //     let chipFontColor = "";

    //     if (value === "Customer") {
    //       chipBgColor = "#F1FFF7";
    //       chipBorderColor = "1px solid #81D9A5";
    //       chipFontColor = "#1A1824";
    //     } else if (value === "Caterer") {
    //       chipBgColor = "#FFF1F1";
    //       chipBorderColor = "1px solid #DD7474";
    //       chipFontColor = "#1A1824";
    //     } else if (value === "Driver") {
    //       chipBgColor = "#F1F6FF";
    //       chipBorderColor = "1px solid #819ED9";
    //       chipFontColor = "#1A1824";
    //     }

    //     return (
    //       <>
    //         <Box>
    //           <Chip
    //             label={params.value}
    //             variant="contained"
    //             sx={{
    //               background: chipBgColor,
    //               borderRadius: "4px",
    //               border: chipBorderColor,
    //               color: chipFontColor,
    //               p: "4px, 12px, 4px, 12px",
    //               height: "24px",
    //               textAlign: "center",
    //             }}
    //           />
    //         </Box>
    //       </>
    //     );
    //   },
    // },
    {
      field: "action",
      headerName: "Action",
      width: 100,
      renderCell: (params) => {
        const { value } = params;

        return (
          <>
            <Box>
              <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                  <React.Fragment>
                    <Box sx={{ width: "24px", height: "24px" }}>
                      <Box
                        variant="contained"
                        {...bindTrigger(popupState)}
                        sx={{
                          width: "24px",
                          height: "24px",
                          border: "1px solid #80B3B0",
                          backgroundColor: "#ffffff",
                          padding: "4px",
                          borderRadius: "3px",
                          cursor: "pointer",
                        }}
                      >
                        <img
                          src="./assets/images/More.svg"
                          alt=""
                          width="16px"
                          height="16px"
                        />
                      </Box>
                    </Box>
                    <Menu {...bindMenu(popupState)}>
                      <MenuItem onClick={() => {
                          popupState.close();
                          setOpenCustomerDetail(true);
                        }}>
                        <ListItemIcon>
                          <VisibilityOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>View Details</ListItemText>
                      </MenuItem>
                      <MenuItem onClick={popupState.close}>
                        <ListItemIcon>
                          <BorderColorOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Edit</ListItemText>
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          popupState.close();
                          setOpenCancelDialog(true);
                        }}
                      >
                        <ListItemIcon>
                          {/* <BorderColorOutlinedIcon fontSize="small" /> */}
                          <img
                            src="./assets/images/trash.svg"
                            alt=""
                            width="16px"
                            height="16px"
                          />
                        </ListItemIcon>
                        <ListItemText sx={{ color: "#E75C62" }}>
                          Cancel Subscription
                        </ListItemText>
                      </MenuItem>
                    </Menu>
                  </React.Fragment>
                )}
              </PopupState>
            
            </Box>

          </>
        );
      },
    },
  ];

  // useEffect(() => {

  //   setNotificationHistoryOfDriver(notificationHistoryOfDriverData?.allNotificationHistoryList)
  //   setTotalRecordsCount(notificationHistoryOfDriverData?.totalNotificatonsCount)
    
  // }, [notificationHistoryOfDriverData])


  const getNotificationHistoryOfDriverFunc = () => {
    getNotificationHistoryOfDriver({page:page,size:size}).then((res) => {
      if(res.data){
        console.log("res.data getNotificationHistoryOfDriverFunc ", res?.data);
        // setNotificationHistoryData(res?.data)
        setNotificationHistoryOfDriver(res?.data)
        setTotalNotificatonsCount(res?.data?.totalNotificatonsCount)
      }
    })
  }


  useEffect(() => {
    getNotificationHistoryOfDriverFunc()
  }, [page])

  return (
    <>
      <Box width="100%">
        <Box sx={{my:"10px"}}>
          {/* dsd */}
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
        <Box
          width="100%"
          border="1px solid #e1e1e6"
          p="10px 20px"
          borderRadius="8px"
          minHeight="60vh"
        >
          {!searchVal ? (
            <>
              <Box sx={{ width: "100%" }}>
                <StyledDataGrid
                  // rows={subscriptionTableRow}
                  // rows={notificationHistoryOfDriver || []}
                  // rows={notificationHistoryOfDriverData?.allNotificationHistoryList || []}
                  rows={notificationHistoryOfDriver?.allNotificationHistoryList || []}
                  columns={subscriptionTableColumns}
                  disableSelectionOnClick
                  autoHeight
                  hideFooterPagination={true}
                  checkboxSelection
                  components={{
                    BaseCheckbox: CustomCheckbox,
                  }}
                />
              </Box>

              {/* {openCancelDialog ? <CancelSubscriptionComp open={openCancelDialog} setOpen={setOpenCancelDialog}  /> : ""} */}

              <Box
                sx={{
                  display: "flex",
                  flexDirection: {
                    lg: "row",
                    md: "row",
                    sm: "row",
                    xs: "column",
                  },
                  justifyContent: "space-between",
                  mt: "35px",
                }}
              >
                <Box>
                  {/* <Typography sx={Typo1}>Show 1-10 of 50 entries</Typography> */}
                  <Typography sx={Typo1}>{`Show ${page}-${size} of ${totalNotificatonsCount} entries`}</Typography>
                </Box>
                <Box
                  sx={{ mt: { lg: "0px", md: "0px", sm: "0px", xs: "30px" } }}
                >
                  <Pagination
                    sx={paginationSx}
                    count={totalNotificatonsCount>size? totalNotificatonsCount%size !==0? Math.round(totalNotificatonsCount/size)+1 : Math.round(totalNotificatonsCount/size) : 1}
                    page={page}
                    onChange={(event, value) =>{ console.log("value onChange => ", value); setPage(value)} }
                  />
                </Box>
              </Box>
            </>
          ) : (
            // <NoResultMsg searchValueText={`“${searchVal}”`} />
            ""
          )}
        </Box>
      </Box>
    </>
  );
};

export default SendNotificationDriverDataGrid;
