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
import { Chip, CircularProgress } from "@mui/material";
import { useGetCaterersMutation, useSearchCaterersMutation } from "../../../api/caterers";
import NoResultMsg from "../../../components/NoResultMsg/NoResultMsg";
import CustomSearchInputField from "../../../components/CustomSearchInputField";
import { useNavigate } from "react-router-dom";


const CatererApps = ({setShowCatererDetailFunc,setSelectedCatererFunc}) => {
  
    const navigate = useNavigate()

  const [actionAnchorEl, setActionAnchorEl] = useState(null);

  const [getCaterers, resdata] = useGetCaterersMutation()

  const [searchCaterers, respdata] = useSearchCaterersMutation()

  const [caterersData, setCaterersData] = useState("");

  const [searchVal, setSearchVal] = useState("");
  const [isShownNoResult, setIsShownNoResult] = useState(false);

  const isActionMenuOpen = Boolean(actionAnchorEl);

  const handleActionMenuClose = () => {
    setActionAnchorEl(null);
  };

  const handleActionMenuOpen = (event) => {
    setActionAnchorEl(event.currentTarget);
  };

  const getCaterersList = ()=> {
    getCaterers({ page:1, size:10 }).then((res) => {
      if (res.data){
        console.log("res.data caterersData ", res?.data);
        setCaterersData(res?.data)
      }
    });
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
    getCaterersList()
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
  //     field: "address",
  //     headerName: "Address",
  //     width: 220,
  //   },
  //   // {
  //   //   field: "subscriptionType",
  //   //   headerName: "Subscription type",
  //   //   width: 230,
  //   //   renderCell: (params) => {
  //   //     const {value} = params
  //   //     let chipBgColor = ''
  //   //     if(value==="Personal subscription"){
  //   //       chipBgColor ='#7B49E5'
  //   //     }else if(value==="Multiple subscription"){
  //   //       chipBgColor ='#158FAD'
  //   //     }else if(value==="Bussines subscription"){
  //   //       chipBgColor ='#FF9933'
  //   //     }else if(value==="Single order"){
  //   //       chipBgColor ='#7ECC49'
  //   //     }else if(value==="Fitness subscription"){
  //   //       chipBgColor ='#FF8D85'
  //   //     }
  //   //     return (
  //   //       <>
  //   //         <Box>
  //   //           <Chip label={params.value} variant="contained" sx={{background: chipBgColor,
  //   //            borderRadius: '6px', color: '#fff'}} />
  //   //         </Box>
  //   //       </>
  //   //     );
  //   //   },
  //   // },
  //   {
  //     field: "status",
  //     headerName: "Status",
  //     width: 120,
  //     renderCell: (params) => {
  //       const {value} = params
  //       let statusBtnBgColor='',statusBtnBorderColor='',statusBtncolor=''
  //       if(value==="Closed"){
  //         statusBtnBgColor ='#F6F6F6'
  //         statusBtnBorderColor='#9EA3AE'
  //         statusBtncolor='#9EA3AE'
  //       }else if(value==="Open"){
  //         statusBtnBgColor='#F1FFF7'
  //         statusBtnBorderColor='#81D9A5'
  //         statusBtncolor='#30A15F'
  //       }else{
  //         statusBtnBgColor='inherit'
  //         statusBtnBorderColor='inherit'
  //         statusBtncolor='inherit'
  //       }
  //       return (
  //         <>
  //            <Box  sx={{border: `1px solid ${statusBtnBorderColor}`,bgcolor:statusBtnBgColor ,borderRadius: '4px', color:statusBtncolor,p:"2px 9px"}}>
  //              {params.value}
  //            </Box>
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
                // color: "#2B817B",
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
            setSelectedCatererFunc(params.row)
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
      address: "Tamworth, Long Eaton ...",
      status: "Open",
    },
    {
      id: 2,
      caterer: {
        img:"assets/images/dish1.svg",
        name:"Chef Juna Catering"
      },
      email: "Bairos@gmail.com",
      address: "Tamworth, Long Eaton ...",
      status: "Closed",
    },
    {
      id: 3,
      caterer: {
        img:"assets/images/dish1.svg",
        name:"Chef Juna Catering"
      },
      email: "Bairos@gmail.com",
      address: "Tamworth, Long Eaton ...",
      status: "Open",
    },
    {
      id: 4,
      caterer: {
        img:"assets/images/dish1.svg",
        name:"Chef Juna Catering"
      },
      email: "Bairos@gmail.com",
      address: "Tamworth, Long Eaton ...",
      status: "Closed",
    },
    {
      id: 5,
      caterer: {
        img:"assets/images/dish1.svg",
        name:"Chef Juna Catering"
      },
      email: "Bairos@gmail.com",
      address: "Tamworth, Long Eaton ...",
      status: "Open",
    },
    {
      id: 6,
      caterer: {
        img:"assets/images/dish1.svg",
        name:"Chef Juna Catering"
      },
      email: "Bairos@gmail.com",
      address: "Tamworth, Long Eaton ...",
      status: "Open",
    },
    {
      id: 7,
      caterer: {
        img:"assets/images/dish1.svg",
        name:"Chef Juna Catering"
      },
      email: "Bairos@gmail.com",
      address: "Tamworth, Long Eaton ...",
      status: "Closed",
    },
    {
      id: 8,
      caterer: {
        img:"assets/images/dish1.svg",
        name:"Chef Juna Catering"
      },
      email: "Bairos@gmail.com",
      address: "Tamworth, Long Eaton ...",
      status: "Open",
    },
    {
      id: 9,
      caterer: {
        img:"assets/images/dish1.svg",
        name:"Chef Juna Catering"
      },
      email: "Bairos@gmail.com",
      address: "Tamworth, Long Eaton ...",
      status: "Closed",
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
      <MenuItem onClick={()=>{setShowCatererDetailFunc(true); handleActionMenuClose() }}>
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
                 searchCaterersFunc(e.target.value)
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
                  rows={caterersData?.caterersList || []}
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

export default CatererApps