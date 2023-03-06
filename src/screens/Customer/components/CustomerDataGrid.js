import React, { useEffect, useState } from "react";
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
import CustomCheckbox from "./CustomCheckbox";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import CircularProgress from '@mui/material/CircularProgress';
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import CancelSubscriptionComp from "../../Subscription/Component/CancelSubscription/CancelSubscriptionComp";
// import { useGetCustomersMutation,useDeleteCustomerMutation } from "../../../api/customers";
import {useDeleteCustomerMutation } from "../../../api/customers";
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

const gridTableRowArr = [
  {
    id: 1,
    fullName: "Muhammad Bairos",
    email: "Bairos@gmail.com",
    addresses: "Tamworth, Long Eaton ...",
    status: "Active",
    deliveryDate: "Thu, 21 Nov 2021",
  },
  {
    id: 2,
    fullName: "Muhammad Bairos",
    email: "Bairos@gmail.com",
    addresses: "Tamworth, Long Eaton ...",
    status: "Terminated",
    deliveryDate: "Thu, 21 Nov 2021",
  },
  {
    id: 3,
    fullName: "Muhammad Bairos",
    email: "Bairos@gmail.com",
    addresses: "Tamworth, Long Eaton ...",
    status: "Hold",
    deliveryDate: "Thu, 21 Nov 2021",
  },
  {
    id: 4,
    fullName: "Muhammad Bairos",
    email: "Bairos@gmail.com",
    addresses: "Tamworth, Long Eaton ...",
    status: "Active",
    deliveryDate: "Thu, 21 Nov 2021",
  },
  {
    id: 5,
    fullName: "Muhammad Bairos",
    email: "Bairos@gmail.com",
    addresses: "Tamworth, Long Eaton ...",
    status: "Active",
    deliveryDate: "Thu, 21 Nov 2021",
  },
  {
    id: 6,
    fullName: "Muhammad Bairos",
    email: "Bairos@gmail.com",
    addresses: "Tamworth, Long Eaton ...",
    status: "Active",
    deliveryDate: "Thu, 21 Nov 2021",
  },
  {
    id: 7,
    fullName: "Muhammad Bairos",
    email: "Bairos@gmail.com",
    addresses: "Tamworth, Long Eaton ...",
    status: "Hold",
    deliveryDate: "Thu, 21 Nov 2021",
  },
  {
    id: 8,
    fullName: "Muhammad Bairos",
    email: "Bairos@gmail.com",
    addresses: "Tamworth, Long Eaton ...",
    status: "Active",
    deliveryDate: "Thu, 21 Nov 2021",
  },
  {
    id: 9,
    fullName: "Muhammad Bairos",
    email: "Bairos@gmail.com",
    addresses: "Tamworth, Long Eaton ...",
    status: "Active",
    deliveryDate: "Thu, 21 Nov 2021",
  },
  {
    id: 10,
    fullName: "Muhammad Bairos",
    email: "Bairos@gmail.com",
    addresses: "Tamworth, Long Eaton ...",
    status: "Active",
    deliveryDate: "Thu, 21 Nov 2021",
  },
];

const CustomerDataGrid = ({ IdSubColor, setOpenCustomerDetail,setSelectedCustomerRow,customersData,resdata,getCustomersList,count,page,onChangeHandler }) => {

  // const [getCustomers, resdata] = useGetCustomersMutation()
  // const [customersData, setCustomersData] = useState("")

  const [deleteCustomer, res_data] = useDeleteCustomerMutation()

  const [searchVal, setSearchVal] = useState("");
  const [openCancelDialog,setOpenCancelDialog] = useState(false)



  // const getCustomersList = ()=> {
  //   getCustomers({ page:1, size:10 }).then((res) => {
  //     if (res.data){
  //       console.log("res.data customersData ", res?.data);
  //       setCustomersData(res?.data)
  //     }
  //   });
  // }
  
  // useEffect(() => {
  //   getCustomersList()
  // }, [])



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

  const girdTableColumnsArr = [
    { field: "id", headerName: "#", width: 100 },
    {
      field: "fullName",
      headerName: "Customer",
      width: 230,
      renderHeader: () => (
        <strong>
          {"Customer "}
          <span role="img" aria-label="enjoy" style={{ paddingLeft: "20px" }}>
            <img src="assets/images/arrow-3.svg" alt="" />
          </span>
        </strong>
      ),
      renderCell: (params) => {
        const { value } = params;
        return (
          <>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ width: "48px", height: "48px" }}>
                <img
                  src="./assets/images/AllCustomerImg.png"
                  alt=""
                  width="100%"
                  height="auto"
                />
              </Box>

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
      field: "email",
      headerName: "Email",
      width: 180,
      renderHeader: () => (
        <strong>
          {"Email "}
          <span role="img" aria-label="enjoy" style={{ paddingLeft: "20px" }}>
            <img src="assets/images/arrow-3.svg" alt="" />
          </span>
        </strong>
      ),
    },
    {
      field: "addresses",
      headerName: "Address",
      width: 230,
    },
    {
      field: "status",
      headerName: "Status",
      width: 230,

      renderCell: (params) => {
        const { value } = params;
        let chipBgColor = "";
        let chipBorderColor = "";
        let chipFontColor = "";

        if (value.toLowerCase() === "active") {
          chipBgColor = "#F1FFF7";
          chipBorderColor = "1px solid #81D9A5";
          chipFontColor = "#30A15F";
        } else if (value.toLowerCase() === "terminated") {
          chipBgColor = "#FFF1F1";
          chipBorderColor = "1px solid #DD7474";
          chipFontColor = "#9F2D2D";
        } else if (value.toLowerCase() === "hold") {
          chipBgColor = "#FEF9E8";
          chipBorderColor = "1px solid #F0D859";
          chipFontColor = "#DFA90D";
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
    {
      field: "action",
      headerName: "Action",
      width: 150,
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
                          setSelectedCustomerRow(params?.row)
                        }}>
                        <ListItemIcon>
                          <VisibilityOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>View Details</ListItemText>
                      </MenuItem>
                      <MenuItem 
                      // onClick={popupState.close}
                        onClick={() => {
                          popupState.close();
                          console.log("customer _id for delete ", params?.row?._id)
                          // setOpenCancelDialog(true);
                        }}
                      >
                        <ListItemIcon>
                          <BorderColorOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Edit</ListItemText>
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          popupState.close();
                          console.log("customer _id for delete ", params?.row?._id)
                          // setOpenCancelDialog(true);
                          deleteCustomer({id:params?.row?._id})
                          // setTimeout(()=> getCustomers(),1000)
                          setTimeout(()=> getCustomersList(),1000)
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
                          delete
                          {/* Cancel Subscription */}
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
      {
        resdata?.isLoading ? (
          <Box sx={{minHeight:"30vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <CircularProgress color="greenclr"/>
          </Box>
        ) 
        : 
        <>
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
                    // rows={gridTableRowArr}
                    rows={customersData?.customersList || []}
                    columns={girdTableColumnsArr}
                    disableSelectionOnClick
                    autoHeight
                    hideFooterPagination={true}
                    checkboxSelection
                    // components={{
                    //   BaseCheckbox: CustomCheckbox,
                    // }}
                  />
                </Box>

                {openCancelDialog ? <CancelSubscriptionComp open={openCancelDialog} setOpen={setOpenCancelDialog}  /> : ""}

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
                    {/* <Typography sx={Typo1}>{`Show ${page}-${size} of ${count} entries`}</Typography> */}
                  </Box>
                  <Box
                    sx={{ mt: { lg: "0px", md: "0px", sm: "0px", xs: "30px" } }}
                  >
                    <Pagination
                      sx={paginationSx}
                      count={count && count}
                      page={page && page}
                      onChange={onChangeHandler && onChangeHandler}
                    />
                  </Box>
                </Box>
              </>
            ) : (
              // <NoResultMsg searchValueText={`“${searchVal}”`} />
              ""
            )}
          </Box>
        </>
      }
      </Box>
    </>
  );
};

export default CustomerDataGrid;
