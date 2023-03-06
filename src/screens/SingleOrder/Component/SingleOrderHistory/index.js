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
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { BsThreeDots } from "react-icons/bs";
import Grid from "@mui/material/Grid";
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from "react-router-dom";
import { useGetSubscriptionHistoryMutation, useGetSubscriptionsMutation, useSearchSubscriptionHistoryMutation, useSearchSubscriptionsMutation } from "api/subscription";
import NoResultMsg from "components/NoResultMsg/NoResultMsg";
import CustomBreadcrumbs from "components/CustomBreadcrumbs";



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
  }
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
    }
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
    textDecoration: "underline"
  };

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  "& .css-17jjc08-MuiDataGrid-footerContainer": {
    display: "none",
  },
  boxShadow: "none",
  border: "none",
  borderColor: "green",
  color: "#545359",
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

const breadcrumbsLinksDataArr = [
    {
      text: "Single Order",
      url: "#",
    }
  ];
  


const SingleOrderHistory = ({setIsShownSingleOrderHistory}) => {
  
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [totalSingleOrderHistoryCount, setTotalSingleOrderHistoryCount] = useState(1);

  const [getSingleOrderHistory, resdata] = useGetSubscriptionHistoryMutation()

  const [searchSingleOrderHistory, respdata] = useSearchSubscriptionHistoryMutation()

  const [singleOrderData, setSingleOrderData] = useState("");
  const [actionAnchorEl, setActionAnchorEl] = useState(null);

  const [searchVal, setSearchVal] = useState("");
  const [isShownNoResult, setIsShownNoResult] = useState(false);

  const isActionMenuOpen = Boolean(actionAnchorEl);

  const handleActionMenuClose = () => {
    setActionAnchorEl(null);
  };

  const handleActionMenuOpen = (event) => {
    setActionAnchorEl(event.currentTarget);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
const getSingleOrderHistoryData = ()=> {
  getSingleOrderHistory({ page:page, size:size,status:"all" }).then((res) => {
    if (res.data){
      console.log("res.data subscription history ", res?.data);
      setSingleOrderData(res?.data)
      setTotalSingleOrderHistoryCount(res?.data?.totalSubscriptionHistoryCount)
    }
  });
}


const getLastAddedSingleOrderHistoryData = ()=> {
  getSingleOrderHistory({ page:page, size:size,status:"all",sortBy:"createdAt",orderBy:"desc" }).then((res) => {
    if (res.data){
      console.log("res.data getLastAddedSingleOrderHistoryData ", res?.data);
      setSingleOrderData(res?.data)
      setTotalSingleOrderHistoryCount(res?.data?.totalSubscriptionHistoryCount)
    }
  });
}

const filterSingleOrderHistoryWithStatusData = (status)=> {
  getSingleOrderHistory({ page:page, size:size,status:status }).then((res) => {
    if (res.data){
      console.log("res.data filterSingleOrderHistoryWithStatusData ", res?.data);
      setSingleOrderData(res?.data)
      setTotalSingleOrderHistoryCount(res?.data?.totalSubscriptionHistoryCount)
    }
  });
}

const handleClose = (data) => {
  if(data === "cancel" || data === "pause" || data === "active" || data === "request"){
    filterSingleOrderHistoryWithStatusData(data)
  }else if(data === "all"){
    getSingleOrderHistoryData()
  }
  setAnchorEl(null);
};



const searchSingleOrderHistoryFunc = (newValSearch)=> {
  if(newValSearch === ""){
    getSingleOrderHistoryData()
    setIsShownNoResult(false)
  }else{
    searchSingleOrderHistory({ search: newValSearch }).then((res) => {
      if (res.data){
        console.log("searchSingleOrderHistory res.data SingleOrderHistoryData ", res?.data);
        setSingleOrderData(res?.data)
        setTotalSingleOrderHistoryCount(res?.data?.totalSubscriptionHistoryCount)
        if(res?.data?.data.length === 0) {
          setIsShownNoResult(true)
        }else{
          setIsShownNoResult(false)
        }
      }
    });
  }
}


useEffect(() => {
  getSingleOrderHistoryData()
}, [])


const subscriptionTableColumns = [
  { field: "id", headerName: "#", width: 100 },
  {
    field: "subId",
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
  },
  {
    field: "customerName",
    headerName: "Customer Name",
    width: 230,
    renderHeader: () => (
      <strong>
        {"Customer Name "}
        <span role="img" aria-label="enjoy" style={{ paddingLeft: "20px" }}>
          <img src="assets/images/arrow-3.svg" alt="" />
        </span>
      </strong>
    ),
  },
  {
    field: "caterer",
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
  },
  {
    field: "deliveryTime",
    headerName: "Delivery Date",
    width: 230,
    renderHeader: () => (
      <strong>
        {"Delivery Date "}
        <span role="img" aria-label="enjoy" style={{ paddingLeft: "20px" }}>
          <img src="assets/images/arrow-3.svg" alt="" />
        </span>
      </strong>
    ),
  },
  {
    field: "status",
    headerName: "Status",
    width: 230,
    renderHeader: () => (
      <strong>
        {"Status "}
        <span role="img" aria-label="enjoy" style={{ paddingLeft: "20px" }}>
          <img src="assets/images/arrow-3.svg" alt="" />
        </span>
      </strong>
    ),
  },
  {
    field: "period",
    headerName: "Period",
    width: 230,
    renderHeader: () => (
      <strong>
        {"Period "}
        <span role="img" aria-label="enjoy" style={{ paddingLeft: "20px" }}>
          <img src="assets/images/arrow-3.svg" alt="" />
        </span>
      </strong>
    ),
    renderCell: (params) => {
      const { value } = params;
      let chipBgColor = "";
      if (value === "monthly") {
        chipBgColor = "#F89082";
      } else if (value === "weekly") {
        chipBgColor = "#F8C982";
      }

      return (
        <>
          <Box>
            <Chip
              label={params.value}
              variant="contained"
              sx={{
                background: chipBgColor,
                borderRadius: "6px",
                color: "#fff",
                p: "0px 20px",
                textAlign: "center",
              }}
            />
          </Box>
        </>
      );
    },
  },
  {
    field: "type",
    headerName: "Type",
    width: 230,
    renderCell: (params) => {
      const { value } = params;
      let chipBgColor = "";
      if (value === "personal") {
        chipBgColor = "#7B49E5";
      } else if (value === "multiple") {
        chipBgColor = "#158FAD";
      } else if (value === "bussines") {
        chipBgColor = "#FF9933";
      } else if (value === "single order") {
        chipBgColor = "#7ECC49";
      } else if (value === "fitness") {
        chipBgColor = "#FF8D85";
      }
      return (
        <>
          <Box>
            <Chip
              label={params.value}
              variant="contained"
              sx={{
                background: chipBgColor,
                borderRadius: "6px",
                color: "#fff",
                p: "2px 8px",
                textAlign: "center",
              }}
            />
          </Box>
        </>
      );
    },
  },
//   {
//     field: "action",
//     headerName: "Action",
//     width: 100,
//     renderCell: (params) => {
//       return (
//         <>
//           <Box>
//             <Button sx={{minWidth:"24px",minHeight:"24px",p:"4px",color:"#42C677",textTransform:"none",p:"4px",border:"1px solid #80B3B0", borderRadius:"3px"}} variant="text" 
//             onClick={(e)=> {
//               handleActionMenuOpen(e)
//             }}
//             >
//               <BsThreeDots style={{color:"#2B817B"}} />
//             </Button>
//           </Box>
//         </>
//       );
//     },
//   },
];

const subscriptionTableRow = [
  {
    id: 1,
    idSubs: "ECS - 12345",
    customerName: "Mesopotamian cuisine",
    caterer: "Chef Jina Catering",
    type: "Personal subscription",
    period: "Monthly",
  },
  {
    id: 2,
    idSubs: "ECS - 12345",
    customerName: "Mesopotamian cuisine",
    caterer: "Chef Jina Catering",
    type: "Fitness subscription",
    period: "Monthly",
  },
  {
    id: 3,
    idSubs: "ECS - 12345",
    customerName: "Mesopotamian cuisine",
    caterer: "Chef Jina Catering",
    type: "Bussines subscription",
    period: "Weekly",
  },
  {
    id: 4,
    idSubs: "ECS - 12345",
    customerName: "Mesopotamian cuisine",
    caterer: "Chef Jina Catering",
    type: "Multiple subscription",
    period: "Monthly",
  },
  {
    id: 5,
    idSubs: "ECS - 12345",
    customerName: "Mesopotamian cuisine",
    caterer: "Chef Jina Catering",
    type: "Fitness subscription",
    period: "Weekly",
  },
  {
    id: 6,
    idSubs: "ECS - 12345",
    customerName: "Mesopotamian cuisine",
    caterer: "Chef Jina Catering",
    type: "Single order",
    period: "Monthly",
  },
  {
    id: 7,
    idSubs: "ECS - 12345",
    customerName: "Mesopotamian cuisine",
    caterer: "Chef Jina Catering",
    type: "Personal subscription",
    period: "Weekly",
  },
  {
    id: 8,
    idSubs: "ECS - 12345",
    customerName: "Mesopotamian cuisine",
    caterer: "Chef Jina Catering",
    type: "Fitness subscription",
    period: "Weekly",
  },
  {
    id: 9,
    idSubs: "ECS - 12345",
    customerName: "Mesopotamian cuisine",
    caterer: "Chef Jina Catering",
    type: "Single order",
    period: "Monthly",
  },
  {
    id: 10,
    idSubs: "ECS - 12345",
    customerName: "Mesopotamian cuisine",
    caterer: "Chef Jina Catering",
    type: "Personal subscription",
    period: "Monthly",
  },
];

// const actionMenuId = 'primary-search-account-menu-mobile';
//   const actionMenu = (
//     <Menu
//       anchorEl={actionAnchorEl}
//       anchorOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       id={actionMenuId}
//       keepMounted
//       transformOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       open={isActionMenuOpen}
//       onClose={handleActionMenuClose}
//     >
//       <MenuItem onClick={()=>{ handleActionMenuClose() }}>
//         <IconButton size="large" aria-label="show 4 new mails" color="inherit">
//           <img src="assets/images/eyeIcon.svg" alt="eyeIcon" />
//         </IconButton>
//         <Typography sx={{fontSize:"14px",fontWeight:"600",color:"#1A1824"}}>View Details</Typography>
//       </MenuItem>
//       <MenuItem onClick={()=>{ handleActionMenuClose(); navigate("/inbox")}}>
//         <IconButton
//           size="large"
//           color="inherit"
//         >
//          <img src="assets/images/messageIcon.svg" alt="messageIcon" />
//         </IconButton>
//         <Typography sx={{fontSize:"14px",fontWeight:"600",color:"#1A1824"}}>Send Message</Typography>
//       </MenuItem>
//     </Menu>
//   );


  return (
    <>
      <Box width="100%">
        <CustomBreadcrumbs
        typographyText="Order History"
        breadcrumbsLinksArr={breadcrumbsLinksDataArr}
        clickHandler={()=> setIsShownSingleOrderHistory(false)}
        />
        <Box sx={{my:"10px"}}>
            {
                resdata?.isLoading ? (
                <Box sx={{minHeight:"30vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <CircularProgress color="greenclr"/>
                </Box>
                ) 
                : 
                <>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Box>
                    <Typography
                        sx={{
                        fontFamily: "Outfit",
                        fontSize: { md: "20px", xs: "14px" },
                        mb: "30px",
                        color: "#1A1824",
                        lineHeight: "20px",
                        fontWeight: "600",
                        mt: "10px",
                        }}
                    >
                        Single Order History
                    </Typography>
                    </Box>
                    <Box sx={{ display: "flex", mt: "10px" }}>
                    <Box>
                        <Button variant="contained" sx={Button2}>
                        <img src="./assets/images/export.svg" alt="" />
                        <Typography ml="8px" sx={BtnTypo2}>Export</Typography>
                        </Button>
                    </Box>
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
                            m: 1,
                            width: "32ch",
                            margin: { xs: "8px 0px", md: "8px" },
                            }}
                            size="small"
                            placeholder="Search"
                            // value={searchVal}
                            // onChange={(e) => setSearchVal(e.target.value)}
                            value={searchVal}
                            onChange={
                              (e) => {
                                setSearchVal(e.target.value);
                                searchSingleOrderHistoryFunc(e.target.value)
                              }
                            }
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

                        <Box sx={{display:'flex'}}>
                          <Button variant="text" onClick={getLastAddedSingleOrderHistoryData}>
                              <Typography sx={BtnTextTypo1}> Last Added</Typography>
                              <Box sx={{width: "16px", height: "16px"}}><img src="./assets/images/GreenArrow-down.svg" alt="" width="100%" height="auto" /></Box>
                          </Button>

                          {/* <Button variant="text" >
                              <Typography sx={BtnTextTypo1}> Any Status</Typography>
                              <Box sx={{width: "16px", height: "16px"}}><img src="./assets/images/GreenArrow-down.svg" alt="" width="100%" height="auto" /></Box>
                          </Button> */}

                          <Box sx={{ml:"10px"}}>
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
                              <MenuItem sx={{color: "#2B817B",}} onClick={() => {handleClose("active")}}>active</MenuItem>
                              <MenuItem sx={{color: "#2B817B",}} onClick={() => {handleClose("cancel")}}>cancel</MenuItem>
                              <MenuItem sx={{color: "#2B817B",}} onClick={() => {handleClose("pause")}}>pause</MenuItem>
                              <MenuItem sx={{color: "#2B817B",}} onClick={() => {handleClose("all")}}>all</MenuItem>
                            </Menu>
                          </Box>
                        </Box>



                        {/* </Box> */}
                    </Box>
                    </Box>
                </Box>
                
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
                            // rows={subscriptionTableRow}
                            // rows={singleOrderData?.newSubscriptionList || []}
                            rows={singleOrderData?.subscriptionHistoryList || []}
                            columns={subscriptionTableColumns}
                            disableSelectionOnClick
                            autoHeight
                            hideFooterPagination={true}
                        />
                        </Box>

                        <Box
                        sx={{
                            display: "flex",
                            flexDirection: {lg: "row", md: "row", sm: "row", xs: "column"},
                            justifyContent: "space-between",
                            mt: "35px",
                        }}
                        >
                        <Box>
                            {/* <Typography sx={Typo1}>Show 1-10 of 50 entries</Typography> */}
                            <Typography sx={Typo1}>{`Show ${page}-${size} of ${totalSingleOrderHistoryCount} entries`}</Typography>
                        </Box>
                        <Box sx={{mt: {lg: "0px", md: "0px", sm: "0px", xs: "30px"}}}>
                            <Pagination
                            sx={paginationSx}
                            count={totalSingleOrderHistoryCount>size? totalSingleOrderHistoryCount%size !==0? Math.round(totalSingleOrderHistoryCount/size)+1 : Math.round(totalSingleOrderHistoryCount/size) : 1}
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
                </>
            }
        </Box>
        {/* {actionMenu} */}
      </Box>
    </>
  );
};

export default SingleOrderHistory;





