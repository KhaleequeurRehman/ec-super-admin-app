import React, { useEffect, useState } from 'react'
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Menu, MenuItem } from '@mui/material';
import DeliveryStatus from 'components/DeliveryStatus';
import { useNavigate } from 'react-router-dom';
import { CustomChip } from 'screens/Subscription/Component/OrderDetails/CustomChip';
import { useGetAllOrdersQuery } from 'api/orders';
import { useGetAllCaterersWithFilterMutation } from 'api/caterers';

const BtnTextTypo1Sx = {
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "140%",
    color: "#2B817B",
    textTransform: "capitalize",
    textDecoration: "underline"
  };

const OrderActivity = () => {

    const navigate = useNavigate()

    const [page2, setPage2] = useState(0);
    const [size2, setSize2] = useState(0);

    const [page, setPage] = useState(1);
    const [size, setSize] = useState(10);
    
    const [getCaterers, resdata] = useGetAllCaterersWithFilterMutation()

    const {data:allOrdersData,isLoading,refetch,isSuccess} = useGetAllOrdersQuery(`page=${page2}&size=${size2}`)
    
    const [caterersData, setCaterersData] = useState("");

    const [allOrders, setAllOrders] = useState("");

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = (data) => {
        setAnchorEl(null);
      };


    const getCaterersList = ()=> {
        getCaterers({ page:page, size:size }).then((res) => {
            if (res.data){
            console.log("res.data caterersData ", res?.data);
            setCaterersData(res?.data)
            }
        });
    }

  useEffect(() => {

    setAllOrders(allOrdersData?.data)

  }, [allOrdersData])
  

  useEffect(() => {
    getCaterersList()
  }, [page])

  console.log("caterersData orderAcitivity ",caterersData)
  console.log("allOrders orderAcitivity ",allOrders)

  return (
    <Box width="100%">
        <Grid container gap={3} my="5px">
            <Grid
                item
                my="5px"
                xs={12}
                md={6.7}
            >
                <Box sx={{width:"100%",border:"1px solid #e1e1e6",borderRadius:"6px",p:"20px",minHeight:"75vh"}}>
                    <Box sx={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
                        <Box sx={{my:{xs:"10px",md:"5px"}}}>
                            <Typography sx={{color:"#1A1824",fontSize:{xs:"14px",md:"16px",lg:'20px'},fontWeight:"600"}}>Today Request Order</Typography>
                            <Typography sx={{color:"#9EA3AE",fontSize:{xs:"14px",md:"16px",lg:'18px'},fontWeight:"400"}}>2 Restaurant</Typography>
                        </Box>
                        <Box sx={{ml:"10px",my:{xs:"10px",md:"5px"}}}>
                            <Button 
                            variant="text"
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            >
                            <Typography sx={BtnTextTypo1Sx}>
                                Newest
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
                                <MenuItem sx={{color: "#2B817B",}} onClick={() => {handleClose();console.log("clicked")}}>MenuItem1</MenuItem>
                                <MenuItem sx={{color: "#2B817B",}} onClick={() => {handleClose();console.log("clicked")}}>MenuItem2</MenuItem>
                                <MenuItem sx={{color: "#2B817B",}} onClick={() => {handleClose();console.log("clicked")}}>MenuItem3</MenuItem>
                            </Menu>
                        </Box>
                    </Box>
                    <Box sx={{mt:"3rem"}}>

                        {
                            Array.isArray(allOrders) && allOrders.length>0 && allOrders.map((currentOrder,i)=>{
                                return (
                                        <Box sx={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",my:"15px"}} key={i}>
                                            <Box sx={{display:"flex",my:{xs:"10px"}}}>
                                                <Box sx={{width:"80px",height:"80px"}}>
                                                    <img src="assets/images/iMacMemojiwithBgPurple.svg" alt="iMacMemoji" style={{width:"100%",height:"100%"}} />
                                                </Box>
                                                <Box sx={{ml:"15px",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                                                    <Box>
                                                        {/* <Typography sx={{fontSize:{xs:"14px",md:"16px",lg:'18px'},fontWeight:"600"}}>Chef Juna Restaurant</Typography> */}
                                                        <Typography sx={{fontSize:{xs:"14px",md:"16px",lg:'18px'},fontWeight:"600"}}>{currentOrder?.deliveryDetails[0]?.subscriptionId?.caterer?.merchantName}</Typography>
                                                        <Box sx={{ display: "flex", alignItems: "center" }}>
                                                            <Box sx={{ display: "flex", alignItems: "center", width: "16px", height: "16px" }}>
                                                                <img src="assets/images/location.svg" alt="location" width="100%" height="auto" />
                                                            </Box>
                                                            <Box ml="8px">
                                                                <Typography sx={{fontSize: "14px", fontWeight: "400", lineHeight: "20px", color: "#9EA3AE"}}>{currentOrder?.deliveryDetails[0]?.subscriptionId?.caterer?.address}</Typography>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Typography sx={{color:"#559A95",fontSize:{xs:"14px",md:"16px"},fontWeight:"400"}}>11 Order request pending</Typography>
                                                </Box>
                                            </Box>
                                            <Box sx={{my:{xs:"10px"},display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                                            <DeliveryStatus text="2 Request passed time" variant="maroon" />
                                            <Button variant="contained" sx={{textTransform:"capitalize",bgcolor:"#2B817B",minWidth:"127px",my:{xs:"10px",lg:"0px"},'&:hover':{bgcolor:"#2B817B"}}}>Details</Button>
                                            </Box>
                                        </Box>
                                )
                            })
                        }

                        {/* {
                        [1,2,3,4,5].map((item,i)=> (
                            <Box sx={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",my:"15px"}} key={i}>
                                <Box sx={{display:"flex",my:{xs:"10px"}}}>
                                    <Box sx={{width:"80px",height:"80px"}}>
                                        <img src="assets/images/iMacMemojiwithBgPurple.svg" alt="iMacMemoji" style={{width:"100%",height:"100%"}} />
                                    </Box>
                                    <Box sx={{ml:"15px",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                                        <Box>
                                            <Typography sx={{fontSize:{xs:"14px",md:"16px",lg:'18px'},fontWeight:"600"}}>Chef Juna Restaurant</Typography>
                                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                                <Box sx={{ display: "flex", alignItems: "center", width: "16px", height: "16px" }}>
                                                    <img src="assets/images/location.svg" alt="location" width="100%" height="auto" />
                                                </Box>
                                                <Box ml="8px">
                                                    <Typography sx={{fontSize: "14px", fontWeight: "400", lineHeight: "20px", color: "#9EA3AE"}}>Tamworth Rd, Long Eaton</Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Typography sx={{color:"#559A95",fontSize:{xs:"14px",md:"16px"},fontWeight:"400"}}>11 Order request pending</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{my:{xs:"10px"},display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                                <DeliveryStatus text="2 Request passed time" variant="maroon" />
                                <Button variant="contained" sx={{textTransform:"capitalize",bgcolor:"#2B817B",minWidth:"127px",my:{xs:"10px",lg:"0px"},'&:hover':{bgcolor:"#2B817B"}}}>Details</Button>
                            </Box>
                        </Box>
                        )
                        )} */}
                    </Box>
                </Box> 
            </Grid>
            <Grid
                item
                my="5px"
                xs={12}
                md={5}
            >
                <Box sx={{width:"100%",p:"20px",minHeight:"75vh"}}>
                    <Box sx={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
                        <Box sx={{my:{xs:"10px",md:"5px"}}}>
                            <Typography sx={{color:"#1A1824",fontSize:{xs:"14px",md:"16px",lg:'20px'},fontWeight:"600"}}>Detail Order Request</Typography>
                            <Typography sx={{color:"#9EA3AE",fontSize:{xs:"14px",md:"16px"},fontWeight:"400"}}>Chef Juna Restaurant</Typography>
                        </Box>
                        <Box sx={{ml:"10px",my:{xs:"10px",md:"5px"},display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <Box sx={{width:"32px",height:"32px",border:"none",outline:"none"}} component="button" onClick={() => { navigate("/inbox"); }}>
                                <img src="assets/images/msgsendicon.svg" alt="orderbookIcon" width="100%" height="100%"/>
                            </Box>
                            <Box sx={{ml:"15px",width:"32px",height:"32px",border:"none",outline:"none"}} component="button" onClick={() => { navigate("/inbox");}}>
                                <img src="assets/images/callicon.svg" alt="call" width="100%" height="100%"/>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{mt:"3rem"}}>
                        {[1,2,3,4].map((item,i)=> (
                            <Box sx={{width:"100%",border:"1px solid #e1e1e6",borderRadius:"6px",p:"15px",my:"10px"}} key={i}>
                                <Box sx={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
                                    <Box sx={{my:"5px"}}>
                                        <CustomChip chipTitle="Fitness subscription" />
                                    </Box>
                                    <Box sx={{my:"5px"}}>
                                        <DeliveryStatus text="2 hours ago" variant="maroonLight" />
                                    </Box>
                                </Box>
                                <Box sx={{my:"8px",display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
                                    <Typography sx={{color:"#1A1824",fontSize:{xs:"14px",md:"16px",lg:'18px'},fontWeight:"500",my:"5px"}}>Salmon with sweet chili</Typography>
                                    <Typography sx={{color:"#1A1824",fontSize:{xs:"14px",md:"16px",lg:'18px'},fontWeight:"600",my:"5px"}}>1 Order</Typography>
                                </Box>
                                <Box sx={{my:"8px",display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
                                    <Box sx={{my:"5px",display: "flex", alignItems: "center" }}>
                                        <Box sx={{ display: "flex", alignItems: "center", width: "16px", height: "16px" }}>
                                            <img src="assets/images/calendar.svg" alt="calendar" width="100%" height="auto" />
                                        </Box>
                                        <Box ml="8px">
                                            <Typography sx={{fontSize: "14px", fontWeight: "500", lineHeight: "20px", color: "#9EA3AE"}}>Weekly subscription :</Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{my:"5px"}}>
                                        <DeliveryStatus text="Thursday, Sept 02, 2021" variant="text" />
                                    </Box>
                                </Box>
                                <Box sx={{my:"3px",display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
                                    <Box sx={{my:"5px",display: "flex", alignItems: "center" }}>
                                        <Box sx={{ display: "flex", alignItems: "center", width: "16px", height: "16px" }}>
                                            <img src="assets/images/timerAlarm.svg" alt="timerAlarm" width="100%" height="auto" />
                                        </Box>
                                        <Box ml="8px">
                                            <Typography sx={{fontSize: "14px", fontWeight: "500", lineHeight: "20px", color: "#9EA3AE"}}>Time :</Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{my:"5px"}}>
                                        <DeliveryStatus text="10.00 am - 01.00 pm" variant="text" />
                                    </Box>
                                </Box>
                            </Box>
                        )
                        )}
                        
                        {/* <Box sx={{width:"100%",border:"1px solid #e1e1e6",borderRadius:"6px",p:"15px"}}>
                            <Box sx={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
                                <Box sx={{my:"5px"}}>
                                    <CustomChip chipTitle="Fitness subscription" />
                                </Box>
                                <Box sx={{my:"5px"}}>
                                    <DeliveryStatus text="2 hours ago" variant="maroonLight" />
                                </Box>
                            </Box>
                            <Box sx={{my:"8px",display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
                                <Typography sx={{color:"#1A1824",fontSize:{xs:"14px",md:"16px",lg:'18px'},fontWeight:"500",my:"5px"}}>Salmon with sweet chili</Typography>
                                <Typography sx={{color:"#1A1824",fontSize:{xs:"14px",md:"16px",lg:'18px'},fontWeight:"600",my:"5px"}}>1 Order</Typography>
                            </Box>
                            <Box sx={{my:"8px",display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
                                <Box sx={{my:"5px",display: "flex", alignItems: "center" }}>
                                    <Box sx={{ display: "flex", alignItems: "center", width: "16px", height: "16px" }}>
                                        <img src="assets/images/calendar.svg" alt="calendar" width="100%" height="auto" />
                                    </Box>
                                    <Box ml="8px">
                                        <Typography sx={{fontSize: "14px", fontWeight: "500", lineHeight: "20px", color: "#9EA3AE"}}>Weekly subscription :</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{my:"5px"}}>
                                    <DeliveryStatus text="Thursday, Sept 02, 2021" variant="text" />
                                </Box>
                            </Box>
                            <Box sx={{my:"3px",display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
                                <Box sx={{my:"5px",display: "flex", alignItems: "center" }}>
                                    <Box sx={{ display: "flex", alignItems: "center", width: "16px", height: "16px" }}>
                                        <img src="assets/images/timerAlarm.svg" alt="timerAlarm" width="100%" height="auto" />
                                    </Box>
                                    <Box ml="8px">
                                        <Typography sx={{fontSize: "14px", fontWeight: "500", lineHeight: "20px", color: "#9EA3AE"}}>Time :</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{my:"5px"}}>
                                    <DeliveryStatus text="10.00 am - 01.00 pm" variant="text" />
                                </Box>
                            </Box>
                        </Box> */}
                    </Box>
                </Box> 
            </Grid>
        </Grid>
        {/* <Grid container gap={3} my="5px">
            <Grid
                item
                my="5px"
                xs={12}
                md={6.7}
            >
                <Typography fontSize="20px" fontWeight="600">
                Order Details
                </Typography>
                <Box
                border="1px solid #E1E1E6"
                borderRadius="8px"
                height="auto"
                p="16px"
                >
                <Box>
                    { SubscriptionMainCardData && SubscriptionMainCardData.map((item,i) => {
                    return (
                        <SubscriptionMainCard item={item} key={i}/>
                    );
                    })}
                </Box>

                <Box
                    border="1px solid #E1E1E6"
                    borderRadius="8px"
                    height="auto"
                    p="16px"
                >
                    <Typography fontSize="14px" fontWeight="600" color="#545359">
                    Meal Plan
                    </Typography>
                    <Box
                    width="100%"
                    mt="16px"
                    >
                        <Box
                            display="flex"
                            flexWrap="wrap"
                            justifyContent="space-between"
                        >
                            <OrderListItemMediaCard
                            title="Burger"
                            subTitle="10 dishes selected"
                            imgUrl="assets/images/dish1.svg"
                            />
                            <Box sx={{my:"5px",background:"none",border:"none",outline:"none"}} component="button" onClick={() => { navigate("/food_Menu") }} >
                            <Typography
                                fontSize="14px"
                                fontWeight="400"
                                color="#2B817B"
                                borderBottom="1.5px solid #2B817B"
                                mr="10px"
                            >
                                See All Details
                            </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box
                    sx={{
                    mt: "16px",
                    }}
                >
                    <Box>
                    <Typography sx={Typo5}>Payment Summary</Typography>
                    </Box>
                    <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mt: "18px",
                    }}
                    >
                    <Box>
                        <Typography sx={Typo2}>Price</Typography>
                    </Box>
                    <Box>
                        <Typography sx={Typo3}>$15.00</Typography>
                    </Box>
                    </Box>

                    <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mt: "16px",
                    }}
                    >
                    <Box>
                        <Typography sx={Typo2}>Delivery Fee</Typography>
                    </Box>
                    <Box>
                        <Typography sx={Typo3}>no data</Typography>
                    </Box>
                    </Box>

                    <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mt: "16px",
                    }}
                    >
                    <Box>
                        <Typography sx={Typo2}>Total Payment</Typography>
                    </Box>
                    <Box>
                        <Typography sx={Typo4}>no data</Typography>
                    </Box>
                    </Box>
                </Box>
                </Box>
            </Grid>
        </Grid> */}
    </Box>
  )
}

export default OrderActivity