import React, { useContext, useEffect, useState } from "react";
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
// import CustomCheckbox from "./CustomCheckbox";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import CircularProgress from '@mui/material/CircularProgress';
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import CancelSubscriptionComp from "../../../Subscription/Component/CancelSubscription/CancelSubscriptionComp";
import CustomCheckbox from "../../../Customer/components/CustomCheckbox";
import { useFilterAllCaterersWithStatusMutation, useGetAllCaterersWithFilterMutation, useGetCaterersMutation, useSearchCaterersMutation } from "../../../../api/caterers";
import CatererContext from "../../../../contexts/CatererContext/CatererContext";
import { CustomerHeader } from "../../../Customer/components/CustomerHeader";
import NoResultMsg from "../../../../components/NoResultMsg/NoResultMsg";
import Header from "screens/Product/Header";
// import CancelSubscriptionComp from "../../Subscription/Component/CancelSubscription/CancelSubscriptionComp";
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

// const gridTableRowArr = [
//   {
//     id: "1.",
//     idSubs: "ECS - 12345",
//     caterer: "Chef Juna Catering",
//     email: "Bairos@gmail.com",
//     address: "Tamworth, Long Eaton ...",
//     status: "Open",
//     deliveryDate: "Thu, 21 Nov 2021",
//   },
//   {
//     id: "2.",
//     idSubs: "ECS - 12345",
//     caterer: "Chef Juna Catering",
//     email: "Bairos@gmail.com",
//     address: "Tamworth, Long Eaton ...",
//     status: "Closed",
//     deliveryDate: "Thu, 21 Nov 2021",
//   },
//   {
//     id: "3.",
//     idSubs: "ECS - 12345",
//     caterer: "Chef Juna Catering",
//     email: "Bairos@gmail.com",
//     address: "Tamworth, Long Eaton ...",
//     status: "Open",
//     deliveryDate: "Thu, 21 Nov 2021",
//   },
//   {
//     id: "4.",
//     idSubs: "ECS - 12345",
//     caterer: "Chef Juna Catering",
//     email: "Bairos@gmail.com",
//     address: "Tamworth, Long Eaton ...",
//     status: "Open",
//     deliveryDate: "Thu, 21 Nov 2021",
//   },
//   {
//     id: "5.",
//     idSubs: "ECS - 12345",
//     caterer: "Chef Juna Catering",
//     email: "Bairos@gmail.com",
//     address: "Tamworth, Long Eaton ...",
//     status: "Closed",
//     deliveryDate: "Thu, 21 Nov 2021",
//   },
//   {
//     id: "6.",
//     idSubs: "ECS - 12345",
//     caterer: "Chef Juna Catering",
//     email: "Bairos@gmail.com",
//     address: "Tamworth, Long Eaton ...",
//     status: "Open",
//     deliveryDate: "Thu, 21 Nov 2021",
//   },
//   {
//     id: "7.",
//     idSubs: "ECS - 12345",
//     caterer: "Chef Juna Catering",
//     email: "Bairos@gmail.com",
//     address: "Tamworth, Long Eaton ...",
//     status: "Open",
//     deliveryDate: "Thu, 21 Nov 2021",
//   },
//   {
//     id: "8.",
//     idSubs: "ECS - 12345",
//     caterer: "Chef Juna Catering",
//     email: "Bairos@gmail.com",
//     address: "Tamworth, Long Eaton ...",
//     status: "Open",
//     deliveryDate: "Thu, 21 Nov 2021",
//   },
//   {
//     id: "9.",
//     idSubs: "ECS - 12345",
//     caterer: "Chef Juna Catering",
//     email: "Bairos@gmail.com",
//     address: "Tamworth, Long Eaton ...",
//     status: "Closed",
//     deliveryDate: "Thu, 21 Nov 2021",
//   },
//   {
//     id: "10.",
//     idSubs: "ECS - 12345",
//     caterer: "Chef Juna Catering",
//     email: "Bairos@gmail.com",
//     address: "Tamworth, Long Eaton ...",
//     status: "Open",
//     deliveryDate: "Thu, 21 Nov 2021",
//   },
// ];
// const gridTableRowArr = [
const gridTableRowArr = [
  {
    id: "1.",
    catererId: "ECS - 12345",
    merchantName: "Chef Juna Catering",
    email: "Bairos@gmail.com",
    address: "Tamworth, Long Eaton ...",
    status: "Open",
    deliveryDate: "Thu, 21 Nov 2021",
  },
  {
    id: "2.",
    catererId: "ECS - 12345",
    merchantName: "Chef Juna Catering",
    email: "Bairos@gmail.com",
    address: "Tamworth, Long Eaton ...",
    status: "Closed",
    deliveryDate: "Thu, 21 Nov 2021",
  },
  {
    id: "3.",
    catererId: "ECS - 12345",
    merchantName: "Chef Juna Catering",
    email: "Bairos@gmail.com",
    address: "Tamworth, Long Eaton ...",
    status: "Open",
    deliveryDate: "Thu, 21 Nov 2021",
  },
  {
    id: "4.",
    catererId: "ECS - 12345",
    merchantName: "Chef Juna Catering",
    email: "Bairos@gmail.com",
    address: "Tamworth, Long Eaton ...",
    status: "Open",
    deliveryDate: "Thu, 21 Nov 2021",
  },
  {
    id: "5.",
    catererId: "ECS - 12345",
    merchantName: "Chef Juna Catering",
    email: "Bairos@gmail.com",
    address: "Tamworth, Long Eaton ...",
    status: "Closed",
    deliveryDate: "Thu, 21 Nov 2021",
  },
  {
    id: "6.",
    catererId: "ECS - 12345",
    merchantName: "Chef Juna Catering",
    email: "Bairos@gmail.com",
    address: "Tamworth, Long Eaton ...",
    status: "Open",
    deliveryDate: "Thu, 21 Nov 2021",
  },
  {
    id: "7.",
    catererId: "ECS - 12345",
    merchantName: "Chef Juna Catering",
    email: "Bairos@gmail.com",
    address: "Tamworth, Long Eaton ...",
    status: "Open",
    deliveryDate: "Thu, 21 Nov 2021",
  },
  {
    id: "8.",
    catererId: "ECS - 12345",
    merchantName: "Chef Juna Catering",
    email: "Bairos@gmail.com",
    address: "Tamworth, Long Eaton ...",
    status: "Open",
    deliveryDate: "Thu, 21 Nov 2021",
  },
  {
    id: "9.",
    catererId: "ECS - 12345",
    merchantName: "Chef Juna Catering",
    email: "Bairos@gmail.com",
    address: "Tamworth, Long Eaton ...",
    status: "Closed",
    deliveryDate: "Thu, 21 Nov 2021",
  },
  {
    id: "10.",
    catererId: "ECS - 12345",
    merchantName: "Chef Juna Catering",
    email: "Bairos@gmail.com",
    address: "Tamworth, Long Eaton ...",
    status: "Open",
    deliveryDate: "Thu, 21 Nov 2021",
  },
];

const CatererDataGrid = ({ IdSubColor, setOpenCustomerDetail }) => {

  const catererContextval = useContext(CatererContext)

  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [totalCaterersCount, setTotalCaterersCount] = useState(1);

  // const [getCaterers, resdata] = useGetCaterersMutation()
  const [getCaterers, resdata] = useGetAllCaterersWithFilterMutation()

  const [filterAllCaterersWithStatus, responsedata] = useFilterAllCaterersWithStatusMutation()

  const [searchCaterers, respdata] = useSearchCaterersMutation()

  const [caterersData, setCaterersData] = useState("");

  const [searchVal, setSearchVal] = useState("");
  const [isShownNoResult, setIsShownNoResult] = useState(false);
  
  const [openCancelDialog,setOpenCancelDialog] = useState(false)


  const getCaterersList = ()=> {
    getCaterers({ page:page, size:size }).then((res) => {
      if (res.data){
        console.log("res.data caterersData ", res?.data);
        setCaterersData(res?.data)
        setTotalCaterersCount(res?.data?.totalCaterersCount)
      }
    });
  }

  const getLastAddedCaterersData = ()=> {
    getCaterers({ page:page, size:size,sortBy:"createdAt",orderBy:"desc" }).then((res) => {
      if (res.data){
        console.log("res.data getLastAddedCaterersData ", res?.data);
        setCaterersData(res?.data)
        setTotalCaterersCount(res?.data?.totalCaterersCount)
      }
    });
  }


  const filterCaterersWithStatusData = (status)=> {
    if(status === "approved" || status === "request"){
      filterAllCaterersWithStatus({ page:page, size:10,status:status }).then((res) => {
        if (res.data){
          console.log("res.data filterCaterersWithStatusData ", res?.data);
          setCaterersData(res?.data)
        setTotalCaterersCount(res?.data?.totalCaterersCount)
        }
      });
    }else if(status === "all"){
      getCaterers()
    }
    
  }

  const searchCaterersFunc = (newValSearch)=> {
    if(newValSearch === ""){
      getCaterersList()
      setIsShownNoResult(false)
    }else{
      searchCaterers({ search: newValSearch }).then((res) => {
        if (res.data){
          console.log("searchCaterers res.data caterersData ", res?.data);
          setCaterersData(res?.data)
          setTotalCaterersCount(res?.data?.totalCaterersCount)
          if(res?.data?.data.length === 0) {
            setIsShownNoResult(true)
          }else{
            setIsShownNoResult(false)
          }
        }
      });
    }
    // searchDrivers({ search: newValSearch }).then((res) => {
    //   if (res.data){
    //     console.log("searchDrivers res.data driversData ", res?.data);
    //     if(res?.data?.data.length === 0) {
    //       setIsShownNoResult(true)
    //     }
    //     // setDriversData(res?.data?.data)
    //   }
    // });
  }
  
  useEffect(() => {
    getCaterersList()
  }, [page])


  
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
        field: "catererId",
        headerName: "Id subs",
        width: 160,
        renderHeader: () => (
          <strong>
            {"Id subs "}
            <span role="img" aria-label="enjoy" style={{ paddingLeft: "20px" }}>
              <img src="assets/images/arrow-3.svg" alt="" />
            </span>
          </strong>
        ),
        renderCell: (params) => {
          const { value } = params;
          return (
            <>
              <Box>
                <Typography
                  sx={{
                    color: "#2B817B",
                    // color: `${IdSubColor}`,
                    fontSize: "16px",
                    fontWeight: "400",
                    lineHeight: "16px",
                  }}
                >
                  {params.value? params.value : ''}
                </Typography>
              </Box>
            </>
          );
        },
      },
    {
      field: "merchantName",
      headerName: "Caterer",
      width: 230,
      renderHeader: () => (
        <strong>
          {"Caterer "}
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
                  color: "#2B817B",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "20px",
                }}
              >
                {params.value? params.value : ''}
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
      field: "address",
      headerName: "Address",
      width: 230,
      renderCell: (params) => {
        const { value } = params;
        return (
          <>
            <Box >

              <Typography
                pl="8px"
                sx={{
                  color: "#9EA3AE",
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
      field: "status",
      headerName: "Status",
      width: 180,

      renderCell: (params) => {
        const { value } = params;
        let chipBgColor = "";
        let chipBorderColor = "";
        let chipFontColor = "";

        if (value.toLowerCase() === "open") {
          chipBgColor = "#F1FFF7";
          chipBorderColor = "1px solid #81D9A5";
          chipFontColor = "#30A15F";
        } else if (value.toLowerCase() === "closed") {
          chipBgColor = "#F6F6F6";
          chipBorderColor = "1px solid #9EA3AE";
          chipFontColor = "#9EA3AE";
        } else {
          chipBgColor = "#FEF9E8";
          chipBorderColor = "1px solid #F0D859";
          chipFontColor = "#DFA90D";
        }
        // if (value === "Open") {
        //   chipBgColor = "#F1FFF7";
        //   chipBorderColor = "1px solid #81D9A5";
        //   chipFontColor = "#30A15F";
        // } else if (value === "Closed") {
        //   chipBgColor = "#F6F6F6";
        //   chipBorderColor = "1px solid #9EA3AE";
        //   chipFontColor = "#9EA3AE";
        // } else if (value === "Hold") {
        //   chipBgColor = "#FEF9E8";
        //   chipBorderColor = "1px solid #F0D859";
        //   chipFontColor = "#DFA90D";
        // }

        return (
          <>
            <Box>
              <Chip
                label={params.value? params.value : ''}
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
                          catererContextval?.selectRow(params?.row)
                          catererContextval?.openCatererDetail()
                        }}>
                        <ListItemIcon>
                          <VisibilityOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>View Details</ListItemText>
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          popupState.close();
                          setOpenCancelDialog(true)
                        }}
                      >
                        <ListItemIcon>
                          <img
                            src="./assets/images/trash.svg"
                            alt=""
                            width="16px"
                            height="16px"
                          />
                        </ListItemIcon>
                        <ListItemText sx={{ color: "#E75C62" }}>
                          delete
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
  // console.log("catererContextval ",catererContextval)
  return (
    <>
      <Box width="100%">
        <Box sx={{my:"10px"}}>
          <Header
          title="All Caterer"
          // addButtonTitle="New Menu"
          // addButtonOnclickHandler={handleAddModalOpen}
          isShownCustomBtn={false}
          hasNotificationButton={true}
          // hasFilterBtn={true}
          lastAddedBtnOnClickHandler={getLastAddedCaterersData}
          // handleClickFilter={handleClickFilter}
          searchVal={searchVal}
          setSearchVal={setSearchVal}
          searchFunc={searchCaterersFunc}
          menuItems={[
            { name: "request", onClick: () => { filterCaterersWithStatusData("request"); console.log('menuItem request click handler') }},
            { name: "approved", onClick: () => { filterCaterersWithStatusData("approved"); console.log('menuItem approved click handler') }},
            { name: "all", onClick: () => { filterCaterersWithStatusData("all"); console.log('menuItem all click handler') }},
          ]}
          />
          {/* <CustomerHeader
            title={"All Caterer"}
            hasNotificationButton={true}
            hasTextButtonTitle1={"Last Added"}
            hasTextButtonTitle2={"Any Status"}
            hasTextButtonTitle3={"All Main Courses"}
            hasFilterBtn={false}
            searchVal={searchVal}
            setSearchVal={setSearchVal}
            searchFunc={searchCaterersFunc}
          /> */}
        </Box>
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
            {/* {!searchVal ? ( */}
            {!isShownNoResult ? (
              <>
                <Box sx={{ width: "100%" }}>
                  <StyledDataGrid
                    // rows={gridTableRowArr}
                    rows={caterersData?.caterersList || []}
                    columns={subscriptionTableColumns}
                    disableSelectionOnClick
                    autoHeight
                    hideFooterPagination={true}
                    checkboxSelection
                    // components={{
                    //   BaseCheckbox: CustomCheckbox,
                    // }}
                  />
                </Box>
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
                    <Typography sx={Typo1}>{`Show ${page}-${size} of ${totalCaterersCount} entries`}</Typography>
                  </Box>
                  <Box
                    sx={{ mt: { lg: "0px", md: "0px", sm: "0px", xs: "30px" } }}
                  >
                    <Pagination
                      sx={paginationSx}
                      count={totalCaterersCount>size? totalCaterersCount%size !==0? Math.round(totalCaterersCount/size)+1 : Math.round(totalCaterersCount/size) : 1}
                      page={page}
                      onChange={(event, value) =>{ console.log("value onChange => ", value); setPage(value)} }
                    />
                  </Box>
                </Box>
              </>
            ) : (
              <NoResultMsg searchValueText={searchVal} />
            )}
          </Box>

          {openCancelDialog ? <CancelSubscriptionComp open={openCancelDialog} setOpen={setOpenCancelDialog}  /> : ""}
        </>
    }
      </Box>
    </>
  );
};

export default CatererDataGrid;
