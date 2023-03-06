import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { BsThreeDots } from "react-icons/bs";
import CustomPagination from "../../../components/CustomPagination";
import CustomDataGrid from "../../../components/CustomDataGrid";
import { useGetDriversMutation, useSearchDriversMutation } from "../../../api/drivers";
import NoResultMsg from "../../../components/NoResultMsg/NoResultMsg";
import { Chip, CircularProgress } from "@mui/material";
import CustomSearchInputField from "../../../components/CustomSearchInputField";
import { useNavigate } from "react-router-dom";


const DriverApps = ({setShowDriverDetailFunc,setSelectedDriverFunc}) => {
  
  const navigate = useNavigate()

  const [actionAnchorEl, setActionAnchorEl] = React.useState(null);

  const [getDrivers, resdata] = useGetDriversMutation()

  const [searchDrivers, respdata] = useSearchDriversMutation()

  const [driversData, setDriversData] = useState("")

  const [searchVal, setSearchVal] = useState("");
  const [isShownNoResult, setIsShownNoResult] = useState(false);


  
  const isActionMenuOpen = Boolean(actionAnchorEl);

  const handleActionMenuClose = () => {
    setActionAnchorEl(null);
  };

  const handleActionMenuOpen = (event) => {
    setActionAnchorEl(event.currentTarget);
  };

  const getDriversList = ()=> {
    getDrivers({ page:1, size:10 }).then((res) => {
      if (res.data){
        // console.log("res.data driversData ", res?.data);
        console.log("res.data driversData ", res?.data);
        setDriversData(res?.data?.driverList)
      }
    });
  }
  
  const searchDriversFunc = (newValSearch)=> {
    if(newValSearch === ""){
      getDriversList()
      setIsShownNoResult(false)
    }else{
      searchDrivers({ search: newValSearch }).then((res) => {
        if (res.data){
          console.log("searchDrivers res.data driversData ", res?.data);
          if(res?.data?.data.length === 0) {
            setIsShownNoResult(true)
          }else{
            setIsShownNoResult(false)
          }
          // setDriversData(res?.data?.data)
        }
      });
    }
  }
  
  useEffect(() => {
    getDriversList()
  }, [])

  // const girdTableColumnsArr = [
  //   { field: "id", headerName: "#", width: 70 },
  //   {
  //     field: "caterer",
  //     headerName: "Caterer",
  //     width: 300,
  //     height:70,
  //     renderCell: (params) => {
  //       return (
  //         <>
  //           <Box py="5px" sx={{display:"flex",alignItems:"center"}}>
  //             <Box sx={{width:"48px",height:"48px",borderRadius:"6px"}}>
  //               <img src={params.value.img} alt="dishIcon" width="100%" height="100%" />
  //             </Box>
  //             <Box ml="10px">
  //               <Typography>{params.value.name}</Typography>
  //             </Box>
  //           </Box>
  //         </>
  //       );
  //     },
  //   },
  //   {
  //     field: "email",
  //     headerName: "Email",
  //     width: 200,
  //   },
  //   {
  //     field: "city",
  //     headerName: "City",
  //     width: 220,
  //   },
  //   {
  //     field: "WorkingAs",
  //     headerName: "Working as",
  //     width: 220,
  //   },
  //   {
  //     field: "action",
  //     headerName: "Action",
  //     width: 100,
  //     renderCell: (params) => {
  //       return (
  //         <>
  //           <Box>
  //             <Button sx={{minWidth:"24px",minHeight:"24px",p:"4px",color:"#42C677",textTransform:"none",p:"4px",border:"1px solid #80B3B0", borderRadius:"3px"}} variant="text" onClick={handleActionMenuOpen} >
  //               <BsThreeDots style={{color:"#2B817B"}} />
  //             </Button>
  //           </Box>
  //         </>
  //       );
  //     },
  //   },
  // ];

  const girdTableColumnsArr = [ 
    { field: "id", headerName: "#", width: 50 },
    {
      field: "driverId",
      headerName: "Driver Id",
      width: 230,
      renderCell: (params) => {
        return (
          <>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                pl="8px"
                sx={{
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
      field: "firstName",
      headerName: "Name",
      width: 230,
      renderCell: (params) => {
        return (
          <>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                pl="8px"
                sx={{
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
      field: "deliveries",
      headerName: "Deliveries",
      width: 180,
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
  
        if (value.toLowerCase() === "active" || value.toLowerCase() === "online" || value.toLowerCase() === "approved" || value.toLowerCase() === "approve") {
          chipBgColor = "#F1FFF7";
          chipBorderColor = "1px solid #81D9A5";
          chipFontColor = "#30A15F";
        } 
        else if (value.toLowerCase() === "terminated") {
          chipBgColor = "#FFF1F1";
          chipBorderColor = "1px solid #DD7474";
          chipFontColor = "#9F2D2D";
        } 
        else if (value.toLowerCase() === "hold") {
          chipBgColor = "#FEF9E8";
          chipBorderColor = "1px solid #F0D859";
          chipFontColor = "#DFA90D";
        }
        else if (value.toLowerCase() === "pending") {
          chipBgColor = "#F1F6FF";
          chipBorderColor = "1px solid #819ED9";
          chipFontColor = "#2F549D";
        }
        else if (value.toLowerCase() === "rejected" || value.toLowerCase() === "reject") {
          chipBgColor = "#FFF1F1";
          chipBorderColor = "1px solid #DD7474";
          chipFontColor = "#9F2D2D";
        }
        else if (value.toLowerCase() === "in revision" || value.toLowerCase() === "revision") {
          chipBgColor = "#FEF9E8";
          chipBorderColor = "1px solid #F0D859";
          chipFontColor = "#DFA90D";
        }
        else if (value.toLowerCase() === "request"  ) {
          chipBgColor = "#FEF9E8";
          chipBorderColor = "1px solid #F0D859";
          chipFontColor = "#DFA90D";
        } 

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
      return (
        <>
          <Box>
            <Button sx={{minWidth:"24px",minHeight:"24px",p:"4px",color:"#42C677",textTransform:"none",p:"4px",border:"1px solid #80B3B0", borderRadius:"3px"}} variant="text" 
            onClick={(e)=>{
              setSelectedDriverFunc(params.row)
                handleActionMenuOpen(e)
              }
            } 
            >
              <BsThreeDots style={{color:"#2B817B"}} />
            </Button>
          </Box>
        </>
      );
    },
    }
  ]

  const gridTableRowArr = [
    {
      id: 1,
      caterer: {
        img:"assets/images/dish1.svg",
        name:"Chef Juna Catering"
      },
      email: "Bairos@gmail.com",
      city: "Toronto",
      WorkingAs: "Full - time",
    },
    {
      id: 2,
      caterer: {
        img:"assets/images/dish1.svg",
        name:"Chef Juna Catering"
      },
      email: "Bairos@gmail.com",
      city: "Toronto",
      WorkingAs: "Full - time",
    },
    {
      id: 3,
      caterer: {
        img:"assets/images/dish1.svg",
        name:"Chef Juna Catering"
      },
      email: "Bairos@gmail.com",
      city: "Toronto",
      WorkingAs: "Full - time",
    },
    {
      id: 4,
      caterer: {
        img:"assets/images/dish1.svg",
        name:"Chef Juna Catering"
      },
      email: "Bairos@gmail.com",
      city: "Toronto",
      WorkingAs: "Full - time",
    },
    {
      id: 5,
      caterer: {
        img:"assets/images/dish1.svg",
        name:"Chef Juna Catering"
      },
      email: "Bairos@gmail.com",
      city: "Toronto",
      WorkingAs: "Full - time",
    },
    {
      id: 6,
      caterer: {
        img:"assets/images/dish1.svg",
        name:"Chef Juna Catering"
      },
      email: "Bairos@gmail.com",
      city: "Toronto",
      WorkingAs: "Full - time",
    },
    {
      id: 7,
      caterer: {
        img:"assets/images/dish1.svg",
        name:"Chef Juna Catering"
      },
      email: "Bairos@gmail.com",
      city: "Toronto",
      WorkingAs: "Full - time",
    },
    {
      id: 8,
      caterer: {
        img:"assets/images/dish1.svg",
        name:"Chef Juna Catering"
      },
      email: "Bairos@gmail.com",
      city: "Toronto",
      WorkingAs: "Full - time",
    },
    {
      id: 9,
      caterer: {
        img:"assets/images/dish1.svg",
        name:"Chef Juna Catering"
      },
      email: "Bairos@gmail.com",
      city: "Toronto",
      WorkingAs: "Full - time",
    },
  ];

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
      <MenuItem onClick={()=>{setShowDriverDetailFunc(true); handleActionMenuClose()}}>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <img src="assets/images/eyeIcon.svg" alt="eyeIcon" />
        </IconButton>
        <Typography sx={{fontSize:"14px",fontWeight:"600",color:"#1A1824"}}>View Details</Typography>
      </MenuItem>
      <MenuItem onClick={()=>{handleActionMenuClose(); navigate("/inbox")}}>
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

    
  return (
    <>
        <Box width="100%">
        <Box sx={{my:{xs:"10px",md:"0px"}}}>
          <CustomSearchInputField
            id="outlined-start-adornment"
            sx={{ m: 1, width: "32ch",margin:{xs:"8px 0px",md:"8px"} }}
            size="small"
            placeholder="Search"
            value={searchVal}
            onChange={
              (e) => {
                 setSearchVal(e.target.value);
                 searchDriversFunc(e.target.value)
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
              {!isShownNoResult ? (
                <> 
                  <CustomDataGrid
                      // rows={gridTableRowArr}
                      // rows={[]}
                      rows={driversData|| []}
                      columns={girdTableColumnsArr}
                      disableSelectionOnClick
                      autoHeight
                      hideFooterPagination={true}
                  />
                  <Box sx={{
                      margin: "20px 0",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center"
                  }}>
                      <Typography sx={{color:"#9EA3AE",fontSize:"14px",fontWeight:"400"}}>
                      Show 1-10 of 50 entries
                      </Typography>
                      <CustomPagination />
                  </Box>
                </>
                ) : (
                <NoResultMsg searchValueText={searchVal} />
              )}
            </Box>
          </>
        }
        {actionMenu}
        </Box>
    </>
  )
}

export default DriverApps