import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { DataGrid } from "@mui/x-data-grid";
import Pagination from "@mui/material/Pagination";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import CancelSubscriptionComp from "../../Subscription/Component/CancelSubscription/CancelSubscriptionComp";
// import CancelSubscriptionComp from "../../../../Subscription/Component/CancelSubscription/CancelSubscriptionComp";
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
    idUser: "ECC - 12345",
    startEnd: "20 : 02 Am - 20 : 02 Am",
    duration: "19 : 22",
    date: "Thu, 21 Nov 2021",
    responsible: {image: "./assets/images/iMacIcon.svg", title: "Chef Juna Food"},
    
  },
  {
    id: 2,
    idUser: "ECC - 12345",
    startEnd: "20 : 02 Am - 20 : 02 Am",
    duration: "19 : 22",
    date: "Thu, 21 Nov 2021",
     responsible: {image: "./assets/images/iMacIcon.svg", title: "Chef Juna Food"},
    
  },
  {
    id: 3,
    idUser: "ECC - 12345",
    startEnd: "20 : 02 Am - 20 : 02 Am",
    duration: "19 : 22",
    date: "Thu, 21 Nov 2021",
     responsible: {image: "./assets/images/iMacIcon.svg", title: "Chef Juna Food"},
    
  },
  {
    id: 4,
    idUser: "ECC - 12345",
    startEnd: "20 : 02 Am - 20 : 02 Am",
    duration: "19 : 22",
    date: "Thu, 21 Nov 2021",
     responsible: {image: "./assets/images/iMacIcon.svg", title: "Chef Juna Food"},
    
  },
  {
    id: 5,
    idUser: "ECC - 12345",
    startEnd: "20 : 02 Am - 20 : 02 Am",
    duration: "19 : 22",
    date: "Thu, 21 Nov 2021",
     responsible: {image: "./assets/images/iMacIcon.svg", title: "Chef Juna Food"},
    
  },
  {
    id: 6,
    idUser: "ECC - 12345",
    startEnd: "20 : 02 Am - 20 : 02 Am",
    duration: "19 : 22",
    date: "Thu, 21 Nov 2021",
     responsible: {image: "./assets/images/iMacIcon.svg", title: "Chef Juna Food"},
    
  },
  {
    id: 7,
    idUser: "ECC - 12345",
    startEnd: "20 : 02 Am - 20 : 02 Am",
    duration: "19 : 22",
    date: "Thu, 21 Nov 2021",
     responsible: {image: "./assets/images/iMacIcon.svg", title: "Chef Juna Food"},
    
  },
  {
    id: 8,
    idUser: "ECC - 12345",
    startEnd: "20 : 02 Am - 20 : 02 Am",
    duration: "19 : 22",
    date: "Thu, 21 Nov 2021",
     responsible: {image: "./assets/images/iMacIcon.svg", title: "Chef Juna Food"},
    
  },
  {
    id: 9,
    idUser: "ECC - 12345",
    startEnd: "20 : 02 Am - 20 : 02 Am",
    duration: "19 : 22",
    date: "Thu, 21 Nov 2021",
     responsible: {image: "./assets/images/iMacIcon.svg", title: "Chef Juna Food"},
    
  },
  {
    id: 10,
    idUser: "ECC - 12345",
    startEnd: "20 : 02 Am - 20 : 02 Am",
    duration: "19 : 22",
    date: "Thu, 21 Nov 2021",
     responsible: {image: "./assets/images/iMacIcon.svg", title: "Chef Juna Food"},
    
  },
];

const InboxDataGrid = ({ IdSubColor, setOpenCustomerDetail }) => {
  const [searchVal, setSearchVal] = useState("");
  const [openCancelDialog, setOpenCancelDialog] = useState(false);

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
      field: "idUser",
      headerName: "ID User",
      width: 130,

      renderCell: (params) => {
        const { value } = params;
        return (
          <>
            <Box>
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
      field: "startEnd",
      headerName: "Start - End",
      width: 190,
    },

    {
        field: "duration",
        headerName: "Duration",
        width: 100,
      },
    
      {
        field: "date",
        headerName: "Date",
        width: 150,
      },
      {
        field: "responsible",
        headerName: "Responsible",
        width: 200,
        renderCell: (params) => {
            const { value } = params;
            return (
              <>
              <Box sx={{display: "flex", alignItems: "center"}}>
              <Box><img src={params.value.image} alt="" width="16px" height="16px" /></Box>
                <Box>
                  <Typography
                    pl="8px"
                    sx={{
                      color: "#9EA3AE",
                      fontSize: "14px",
                      fontWeight: "400",
                      lineHeight: "20px",
                    }}
                  >
                    {params.value.title}
                  </Typography>
                </Box>
              </Box>
              </>
            );
          },
      },

   
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
                      <MenuItem onClick={popupState.close}>
                        <ListItemIcon>
                          <BorderColorOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Edit Role</ListItemText>
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
                          Delete Role
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

  return (
    <>
      <Box width="100%">
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
                  rows={subscriptionTableRow}
                  columns={subscriptionTableColumns}
                  disableSelectionOnClick
                  autoHeight
                  hideFooterPagination={true}
                />
              </Box>

              {openCancelDialog ? (
                <CancelSubscriptionComp
                  open={openCancelDialog}
                  setOpen={setOpenCancelDialog}
                />
              ) : (
                ""
              )}

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
                  <Typography sx={Typo1}>Show 1-10 of 50 entries</Typography>
                </Box>
                <Box
                  sx={{ mt: { lg: "0px", md: "0px", sm: "0px", xs: "30px" } }}
                >
                  <Pagination
                    sx={paginationSx}
                    style={
                      {
                        //   margin: "20px 0",
                        //   display: "flex",
                        //   justifyContent: "flex-end",
                      }
                    }
                    count={10}
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

export default InboxDataGrid;
