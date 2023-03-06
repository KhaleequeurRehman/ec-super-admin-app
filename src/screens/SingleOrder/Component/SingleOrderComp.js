import React, { useEffect, useState } from "react";
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
import { SingleOrderHeader } from "./SingleOrderHeader";
import SingleOrderDataGrid from "./SingleOrderDataGrid";
import { useFilterSubscriptionsMutation, useGetSubscriptionsMutation, useSearchSubscriptionsMutation } from "../../../api/subscription";
import { useNavigate } from "react-router-dom";
import SingleOrderDetails from "./SingleOrderDetails";
import { styled } from "@mui/material";


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

const SingleOrderComp = ({setIsShownSingleOrderHistory}) => {
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [totalSingleOrderRecordsCount, setTotalSingleOrderRecordsCount] = useState(1);

  const [getSingleOrder, resdata] = useGetSubscriptionsMutation()

  const [searchSingleOrders, respdata] = useSearchSubscriptionsMutation()
  const [filterSingleOrdersWithStatus, responsedata] = useFilterSubscriptionsMutation()

  const [isShownSingleOrderDetails, setIsShownSingleOrderDetails] = useState(false);
  const [singleOrdersData, setSingleOrdersData] = useState("");
  const [selectedSingleOrderRow, setSelectedSingleOrderRow] = useState("");

  const [searchVal, setSearchVal] = useState("");
  const [isShownNoResult, setIsShownNoResult] = useState(false);

  const [actionAnchorEl, setActionAnchorEl] = useState(null);

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
  
  const handleClose = (data) => {
    if(data === "cancel" || data === "pause" || data === "active" || data === "request"){
      filterSingleOrdersWithStatusData(data)
    }else if(data === "all"){
      getSingleOrderData()
    }
    setAnchorEl(null);
  };

  
const getSingleOrderData = ()=> {
  getSingleOrder({ page:page, size:size }).then((res) => {
  // getSingleOrder({ page:1, size:10 }).then((res) => {
    if (res.data){
      console.log("res.data ", res?.data);
      setSingleOrdersData(res?.data)
      setTotalSingleOrderRecordsCount(res?.data?.Details?.totalSubscriptions)
    }
  });
}


const getLastAddedSingleOrdersData = ()=> {
  getSingleOrder({ page:page, size:size,sortBy:"createdAt",orderBy:"desc" }).then((res) => {
    if (res.data){
      console.log("res.data ", res?.data);
      setSingleOrdersData(res?.data)
      setTotalSingleOrderRecordsCount(res?.data?.totalSubscriptions)
    }
  });
}

const filterSingleOrdersWithStatusData = (status)=> {
  filterSingleOrdersWithStatus({ status: status}).then((res) => {
    if (res.data){
      console.log("res.datanf ", res?.data);
      setSingleOrdersData(res?.data)
      setTotalSingleOrderRecordsCount(res?.data?.totalSubscriptions)
    }
  });
}


const searchSingleOrdersFunc = (newValSearch)=> {
  if(newValSearch === ""){
    getSingleOrderData()
    setIsShownNoResult(false)
  }else{
    searchSingleOrders({ search: newValSearch }).then((res) => {
      if (res.data){
        console.log("searchSingleOrders res.data singleOrdersData ", res?.data);
        setSingleOrdersData(res?.data)
        setTotalSingleOrderRecordsCount(res?.data?.totalSubscriptions)
        if(res?.data?.data.length === 0) {
          setIsShownNoResult(true)
        }else{
          setIsShownNoResult(false)
        }
      }
    });
  }
}



// const searchSingleOrdersFunc = (e) => {
//   console.log('searchSingleOrdersFunc')
// }

useEffect(() => {
  getSingleOrderData()
}, [page])





  // const subscriptionTableColumns = [
  //   { field: "id", headerName: "#", width: 100 },
  //   {
  //     field: "subId",
  //     headerName: "Id subs",
  //     width: 160,
  //     renderHeader: () => (
  //       <strong>
  //         {"Id subs "}
  //         <span role="img" aria-label="enjoy" style={{ paddingLeft: "20px" }}>
  //           <img src="assets/images/arrow-3.svg" alt="" />
  //         </span>
  //       </strong>
  //     ),
  //   },
  //   {
  //     field: "customerName",
  //     headerName: "Customer Name",
  //     width: 230,
  //     renderHeader: () => (
  //       <strong>
  //         {"Customer Name "}
  //         <span role="img" aria-label="enjoy" style={{ paddingLeft: "20px" }}>
  //           <img src="assets/images/arrow-3.svg" alt="" />
  //         </span>
  //       </strong>
  //     ),
  //   },
  //   {
  //     field: "caterer",
  //     headerName: "Caterer",
  //     width: 230,
  //     renderHeader: () => (
  //       <strong>
  //         {"Caterer "}
  //         <span role="img" aria-label="enjoy" style={{ paddingLeft: "20px" }}>
  //           <img src="assets/images/arrow-3.svg" alt="" />
  //         </span>
  //       </strong>
  //     ),
  //   },
  //   {
  //     // field: "subcriptionPeriod",
  //     field: "period",
  //     headerName: "Period",
  //     width: 230,
  //     renderHeader: () => (
  //       <strong>
  //         {"Period "}
  //         <span role="img" aria-label="enjoy" style={{ paddingLeft: "20px" }}>
  //           <img src="assets/images/arrow-3.svg" alt="" />
  //         </span>
  //       </strong>
  //     ),
  //     renderCell: (params) => {
  //       const { value } = params;
  //       let chipBgColor = "";
  //       // if (value === "Monthly") {
  //       //   chipBgColor = "#F89082";
  //       // } else if (value === "Weekly") {
  //       //   chipBgColor = "#F8C982";
  //       // }
  //       if (value === "monthly") {
  //         chipBgColor = "#F89082";
  //       } else if (value === "weekly") {
  //         chipBgColor = "#F8C982";
  //       }
  
  //       return (
  //         <>
  //           <Box>
  //             <Chip
  //               label={params.value}
  //               variant="contained"
  //               sx={{
  //                 background: chipBgColor,
  //                 borderRadius: "6px",
  //                 color: "#fff",
  //                 p: "0px 20px",
  //                 textAlign: "center",
  //               }}
  //             />
  //           </Box>
  //         </>
  //       );
  //     },
  //   },
  //   {
  //     field: "type",
  //     headerName: "Type",
  //     width: 230,
  //     renderCell: (params) => {
  //       const { value } = params;
  //       let chipBgColor = "";
  //       // if (value === "Personal subscription") {
  //       //   chipBgColor = "#7B49E5";
  //       // } else if (value === "Multiple subscription") {
  //       //   chipBgColor = "#158FAD";
  //       // } else if (value === "Bussines subscription") {
  //       //   chipBgColor = "#FF9933";
  //       // } else if (value === "Single order") {
  //       //   chipBgColor = "#7ECC49";
  //       // } else if (value === "Fitness subscription") {
  //       //   chipBgColor = "#FF8D85";
  //       // }
  //       if (value === "personal") {
  //         chipBgColor = "#7B49E5";
  //       } else if (value === "multiple") {
  //         chipBgColor = "#158FAD";
  //       } else if (value === "bussines") {
  //         chipBgColor = "#FF9933";
  //       } else if (value === "single order") {
  //         chipBgColor = "#7ECC49";
  //       } else if (value === "fitness") {
  //         chipBgColor = "#FF8D85";
  //       }
  //       return (
  //         <>
  //           <Box>
  //             <Chip
  //               label={params.value}
  //               variant="contained"
  //               sx={{
  //                 background: chipBgColor,
  //                 borderRadius: "6px",
  //                 color: "#fff",
  //                 p: "2px 8px",
  //                 textAlign: "center",
  //               }}
  //             />
  //           </Box>
  //         </>
  //       );
  //     },
  //   },
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
  //               setSelectedSubscriptionRow(params?.row)
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
  // ];
  
  // const subscriptionTableRow = [
  //   {
  //     id: 1,
  //     idSubs: "ECS - 12345",
  //     customerName: "Mesopotamian cuisine",
  //     caterer: "Chef Jina Catering",
  //     type: "Personal subscription",
  //     period: "Monthly",
  //   },
  //   {
  //     id: 2,
  //     idSubs: "ECS - 12345",
  //     customerName: "Mesopotamian cuisine",
  //     caterer: "Chef Jina Catering",
  //     type: "Fitness subscription",
  //     period: "Monthly",
  //   },
  //   {
  //     id: 3,
  //     idSubs: "ECS - 12345",
  //     customerName: "Mesopotamian cuisine",
  //     caterer: "Chef Jina Catering",
  //     type: "Bussines subscription",
  //     period: "Weekly",
  //   },
  //   {
  //     id: 4,
  //     idSubs: "ECS - 12345",
  //     customerName: "Mesopotamian cuisine",
  //     caterer: "Chef Jina Catering",
  //     type: "Multiple subscription",
  //     period: "Monthly",
  //   },
  //   {
  //     id: 5,
  //     idSubs: "ECS - 12345",
  //     customerName: "Mesopotamian cuisine",
  //     caterer: "Chef Jina Catering",
  //     type: "Fitness subscription",
  //     period: "Weekly",
  //   },
  //   {
  //     id: 6,
  //     idSubs: "ECS - 12345",
  //     customerName: "Mesopotamian cuisine",
  //     caterer: "Chef Jina Catering",
  //     type: "Single order",
  //     period: "Monthly",
  //   },
  //   {
  //     id: 7,
  //     idSubs: "ECS - 12345",
  //     customerName: "Mesopotamian cuisine",
  //     caterer: "Chef Jina Catering",
  //     type: "Personal subscription",
  //     period: "Weekly",
  //   },
  //   {
  //     id: 8,
  //     idSubs: "ECS - 12345",
  //     customerName: "Mesopotamian cuisine",
  //     caterer: "Chef Jina Catering",
  //     type: "Fitness subscription",
  //     period: "Weekly",
  //   },
  //   {
  //     id: 9,
  //     idSubs: "ECS - 12345",
  //     customerName: "Mesopotamian cuisine",
  //     caterer: "Chef Jina Catering",
  //     type: "Single order",
  //     period: "Monthly",
  //   },
  //   {
  //     id: 10,
  //     idSubs: "ECS - 12345",
  //     customerName: "Mesopotamian cuisine",
  //     caterer: "Chef Jina Catering",
  //     type: "Personal subscription",
  //     period: "Monthly",
  //   },
  // ];

  const SearchInputField = styled(TextField)({
    background: "#F6F6F6",
    "& fieldset.MuiOutlinedInput-notchedOutline.css-1d3z3hw-MuiOutlinedInput-notchedOutline":
      {
        borderColor: "#e1e1e6",
        borderRadius: "6px",
      },
  });
  

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
      // field: "subcriptionPeriod",
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
        // if (value === "Monthly") {
        //   chipBgColor = "#F89082";
        // } else if (value === "Weekly") {
        //   chipBgColor = "#F8C982";
        // }
        if (value === "monthly" || value === "Monthly") {
          chipBgColor = "#F89082";
        } else if (value === "weekly" || value === "Weekly") {
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
      width: 210,
      renderCell: (params) => {
        const {value} = params
        let chipBgColor = ''
        if(value.toLowerCase() ==="personal subscription" || value.toLowerCase() ==="personal" || value.toLowerCase() === "weekly subscription"|| value.toLowerCase() === "weekly"){
          chipBgColor ='#7B49E5'
        }else if(value.toLowerCase() === "multiple subscription" || value.toLowerCase() === "multiple"){
          chipBgColor ='#158FAD'
        }else if(value.toLowerCase() === "bussines subscription" || value.toLowerCase() === "bussines"){
          chipBgColor ='#FF9933'
        }else if(value.toLowerCase() === "single order"){
          chipBgColor ='#7ECC49'
        }else if(value.toLowerCase() === "fitness subscription" || value.toLowerCase() === "fitness"){
          chipBgColor ='#FF8D85'
        }
        return (
          <>
            <Box>
              <Chip label={params.value} variant="contained" sx={{background: chipBgColor,
               borderRadius: '6px', color: '#fff'}} />
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
        return (
          <>
            <Box>
              <Button sx={{minWidth:"24px",minHeight:"24px",p:"4px",color:"#42C677",textTransform:"none",p:"4px",border:"1px solid #80B3B0", borderRadius:"3px"}} variant="text" 
              onClick={(e)=> {
                setSelectedSingleOrderRow(params?.row)
                handleActionMenuOpen(e)
              }}
              >
                <BsThreeDots style={{color:"#2B817B"}} />
              </Button>
            </Box>
          </>
        );
      },
    },
  ];
  
  // const subscriptionTableRow = [
  //   {
  //     id: 1,
  //     subId: "ECS - 12345",
  //     customerName: "Mesopotamian cuisine",
  //     caterer: "Chef Jina Catering",
  //     type: "Personal subscription",
  //     period: "Monthly",
  //   },
  //   {
  //     id: 2,
  //     subId: "ECS - 12345",
  //     customerName: "Mesopotamian cuisine",
  //     caterer: "Chef Jina Catering",
  //     type: "Fitness subscription",
  //     period: "Monthly",
  //   },
  //   {
  //     id: 3,
  //     subId: "ECS - 12345",
  //     customerName: "Mesopotamian cuisine",
  //     caterer: "Chef Jina Catering",
  //     type: "Bussines subscription",
  //     period: "Weekly",
  //   },
  //   {
  //     id: 4,
  //     subId: "ECS - 12345",
  //     customerName: "Mesopotamian cuisine",
  //     caterer: "Chef Jina Catering",
  //     type: "Multiple subscription",
  //     period: "Monthly",
  //   },
  //   {
  //     id: 5,
  //     subId: "ECS - 12345",
  //     customerName: "Mesopotamian cuisine",
  //     caterer: "Chef Jina Catering",
  //     type: "Fitness subscription",
  //     period: "Weekly",
  //   },
  //   {
  //     id: 6,
  //     subId: "ECS - 12345",
  //     customerName: "Mesopotamian cuisine",
  //     caterer: "Chef Jina Catering",
  //     type: "Single order",
  //     period: "Monthly",
  //   },
  //   {
  //     id: 7,
  //     subId: "ECS - 12345",
  //     customerName: "Mesopotamian cuisine",
  //     caterer: "Chef Jina Catering",
  //     type: "Personal subscription",
  //     period: "Weekly",
  //   },
  //   {
  //     id: 8,
  //     subId: "ECS - 12345",
  //     customerName: "Mesopotamian cuisine",
  //     caterer: "Chef Jina Catering",
  //     type: "Fitness subscription",
  //     period: "Weekly",
  //   },
  //   {
  //     id: 9,
  //     subId: "ECS - 12345",
  //     customerName: "Mesopotamian cuisine",
  //     caterer: "Chef Jina Catering",
  //     type: "Single order",
  //     period: "Monthly",
  //   },
  //   {
  //     id: 10,
  //     subId: "ECS - 12345",
  //     customerName: "Mesopotamian cuisine",
  //     caterer: "Chef Jina Catering",
  //     type: "Personal subscription",
  //     period: "Monthly",
  //   },
  // ];


  const actionMenuId = 'primary-search-account-menu-mobile';
  const actionMenu = (
    <Menu
      anchorEl={actionAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={actionMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isActionMenuOpen}
      onClose={handleActionMenuClose}
    >
      <MenuItem onClick={()=>{ 
        setIsShownSingleOrderDetails(true); 
        handleActionMenuClose() 
        }}>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <img src="assets/images/eyeIcon.svg" alt="eyeIcon" />
        </IconButton>
        <Typography sx={{fontSize:"14px",fontWeight:"600",color:"#1A1824"}}>View Details</Typography>
      </MenuItem>
      <MenuItem onClick={()=>{ handleActionMenuClose(); navigate("/inbox")}}>
        <IconButton
          size="large"
          color="inherit"
        >
         <img src="assets/images/messageIcon.svg" alt="messageIcon" />
        </IconButton>
        <Typography sx={{fontSize:"14px",fontWeight:"600",color:"#1A1824"}}>Send Message</Typography>
      </MenuItem>
    </Menu>
  );

console.log("singleOrdersData singleorder => ",singleOrdersData)
console.log("totalSingleOrderRecordsCount => ",totalSingleOrderRecordsCount)
  return (
    <>
      <Box width="100%">
        {/* <Box>
          <SingleOrderHeader title={"Single Order List"} hasHistoryButton={true} hasExportButton= {true} hasTextButtonTitle1={"Last Added"} hasTextButtonTitle2={"Any Status"}/>
        </Box> */}

      {
        isShownSingleOrderDetails?
          <SingleOrderDetails selectedSingleOrder={selectedSingleOrderRow} setIsShownSingleOrderDetails={setIsShownSingleOrderDetails} />
        :
        <>

        {
          resdata?.isLoading ? (
            <Box sx={{minHeight:"30vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
              <CircularProgress color="greenclr"/>
            </Box>
          ) 
          : 
          <>
          <Box sx={{my:"10px"}}>
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
                  Single Order List
                </Typography>
              </Box>
              <Box sx={{ display: "flex", mt: "10px" }}>
                <Box sx={{ paddingRight: "16px" }}>
                  <Button variant="outlined" sx={Button1} 
                  onClick={()=> { setIsShownSingleOrderHistory(true) }}>
                    <img src="./assets/images/timer.svg" alt="" />
                    <Typography ml="8px" sx={BtnTypo1}>History</Typography>
                  </Button>
                </Box>
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
                      value={searchVal}
                      onChange={
                        (e) => {
                          setSearchVal(e.target.value);
                          searchSingleOrdersFunc(e.target.value)
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
                    <Button variant="text" onClick={getLastAddedSingleOrdersData}>
                        <Typography sx={BtnTextTypo1}> Last Added</Typography>
                        <Box sx={{width: "16px", height: "16px"}}><img src="./assets/images/GreenArrow-down.svg" alt="" width="100%" height="auto" /></Box>
                    </Button>
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
            {/* <SingleOrderHeader
              title={"Single Order List"}
              hasHistoryButton={true}
              hasExportButton= {true}
              hasTextButtonTitle1={"Last Added"}
              hasTextButtonTitle2={"Any Status"}
              // hasTextButtonTitle3={"All Main Courses"}
              hasFilterBtn={false}
              searchVal={searchVal}
              setSearchVal={setSearchVal}
              searchFunc={searchSingleOrdersFunc}
              historyBtnOnClickHandler={()=> { setIsShownSingleOrderHistory(true) }}
            /> */}
          </Box>

          <Box>
            <SingleOrderDataGrid 
            girdTableColumns={subscriptionTableColumns} 
            gridTableRow={singleOrdersData?.newSubscriptionList || []} 
            // gridTableRow={subscriptionTableRow} 
            searchVal={searchVal} 
            isShownNoResult={isShownNoResult} 
            PaginationCount={totalSingleOrderRecordsCount>size? totalSingleOrderRecordsCount%size !==0? Math.round(totalSingleOrderRecordsCount/size)+1 : Math.round(totalSingleOrderRecordsCount/size) : 1}
            paginationPage={page}
            paginationOnchange={(event, value) =>{ console.log("value onChange => ", value); setPage(value)} }
            />
            {/* <SingleOrderDataGrid IdSubColor={"#42C677"}/> */}
          </Box>
          </>
        }
      
        </>
      }
      </Box>
      {actionMenu}
    </>
  );
};

export default SingleOrderComp;
