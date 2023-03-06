import React, { useEffect, useState } from 'react'
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DashboardStatsData, DashboardStatsData2 } from '../../config';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { useGetAllOrderRelatedToCustomerQuery } from 'api/orders';
import { countInDeliveryOrder, countOrdersByOrderStatus } from 'utils';
import { useDeliveryActivityContext } from 'contexts/DeliveryActivityContext/DeliveryActivityContext';
import DeliveryStatus from 'components/DeliveryStatus';

const TrackOrder = () => {

    const deliveryActivityStateData = useDeliveryActivityContext()

  const [page, setPage] = useState(0);
  const [size, setSize] = useState(0);

  const {data:allOrderRelatedToCustomerData,isLoading,refetch,isSuccess} = useGetAllOrderRelatedToCustomerQuery(`${deliveryActivityStateData?.state?.selectedOrder?.deliveryDetails[0]?.subscriptionId?._id},page=${page}&size=${size}`)
//   const {data:allOrderRelatedToCustomerData,isLoading,refetch,isSuccess} = useGetAllOrderRelatedToCustomerQuery(`63baae754e575315b7b78454,page=${page}&size=${size}`)
//   const {data:allOrderRelatedToCustomerData,isLoading,refetch,isSuccess} = useGetAllOrderRelatedToCustomerQuery(`63baae754e575315b7b78454,page=${page}&size=${size}&sortBy=createdAt`)

  const [allOrderRelatedToCustomer, setAllOrderRelatedToCustomer] = useState("");

  useEffect(() => {

    setAllOrderRelatedToCustomer(allOrderRelatedToCustomerData?.data)
  }, [allOrderRelatedToCustomerData])


  console.log("allOrderRelatedToCustomer track ",allOrderRelatedToCustomer)

  console.log("deliveryActivityStateData?.state?.selectedOrder trackOrder ",deliveryActivityStateData?.state?.selectedOrder?.deliveryDetails[0]?.subscriptionId?._id)

    return (
      <>
        <Box sx={{ width: "100%", backgroundImage: `url("assets/images/trackOrderPageBgImg.svg")`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center center",p:"20px"}}>
            <Box sx={{mb:"15px"}}>
                <Button variant="outlined" startIcon={<ArrowBackIcon />} sx={{borderColor:"#80B3B0",color:"#2B817B",minWidth:"90px",'&:hover':{borderColor:"#80B3B0"}}} onClick={()=>  deliveryActivityStateData?.closeTrackOrder()}></Button>
            </Box>
            <Grid item container  xs={12} md={5} sx={{border:"1px solid #E5E5E5",borderRadius:"6px",p:"10px 15px",my:"10px",background:"white"}}>
            <Box sx={{width: "100%",display:"flex",flexWrap:"wrap",justifyContent:"space-between",m:"10px 0 30px 0"}}>
                <Box>
                    <Typography sx={{fontSize:"18px",fontWeight:"600"}}>
                        {deliveryActivityStateData?.state?.selectedOrder?.deliveryDetails[0]?.subscriptionId?.user?.fullName}
                    </Typography>
                    <Typography sx={{fontSize:"14px",fontWeight:"400",m:"5px 0",color:"#9EA3AE"}}>From <span style={{fontSize:"16px",fontWeight:"400",margin:"0 0 0 5px",color:"#2B817B",textDecoration:"underline"}}>
                        {deliveryActivityStateData?.state?.selectedOrder?.deliveryDetails[0]?.subscriptionId?.caterer?.merchantName}
                    </span></Typography>
                </Box>
                <Box>
                    <Box sx={{border:"1px solid #E5E5E5",borderRadius:"8px",my:"5px",background:"white",position:"relative"}}>
                        <input type="text" style={{width:"50px",height:"50px",border:"none",outline:"1px solid #E5E5E5",borderRadius:"8px",padding:"5px"}}/>
                        <SearchIcon sx={{color:"#9EA3AE",position:"absolute",top:"12px",left:"12px"}} />
                    </Box>
                </Box>
            </Box>
            <Box sx={{width: "100%",m:"10px 0 30px 0"}}>
                <Box>
                    <Typography sx={{fontSize:"18px",fontWeight:"500"}}>Track Order</Typography>
                    <Typography sx={{fontSize:"14px",fontWeight:"400",m:"5px 0",color:"#9EA3AE"}}><span><img src="assets/images/deliveryIcon.svg" alt="deliveryIcon" style={{marginRight:"5px",    verticalAlign: "text-top"}}/></span>
                    {`Delivering ${countOrdersByOrderStatus(allOrderRelatedToCustomer || [],"in delivery")} of ${allOrderRelatedToCustomer?.length} orders`}
                    </Typography>
                    {/* <Typography sx={{fontSize:"14px",fontWeight:"400",m:"5px 0",color:"#9EA3AE"}}><span><img src="assets/images/deliveryIcon.svg" alt="deliveryIcon" style={{marginRight:"5px",    verticalAlign: "text-top"}}/></span>{`Delivering ${allOrderRelatedToCustomer?.length>0? countInDeliveryOrder(allOrderRelatedToCustomer || []):0} of ${allOrderRelatedToCustomer?.length} orders`}</Typography> */}
                </Box>
            </Box>

            {
                Array.isArray(allOrderRelatedToCustomer) && allOrderRelatedToCustomer.length>0 && allOrderRelatedToCustomer.map((currentOrder,i)=> 
                    {
                        return (
                            <Box sx={{border:`${currentOrder?.status === "in delivery" || currentOrder?.status === "delivered"? '2px solid #819ED9': currentOrder?.status === "waiting caterer" || currentOrder?.status === "upcomming"? '2px solid #F0D859':'2px solid #81D9A5'}`,borderRadius:"8px",width: "100%",minHeight:"180px",p:"16px",my:"15px"}} key={i}>
                                <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",m:"5px 0 30px 0"}}>
                                <Typography sx={{fontSize:"14px",fontWeight:"400",color:"#9EA3AE",my:"5px"}}>
                                    Order {currentOrder?.orderId}
                                </Typography>
                                {/* <Typography component="button" sx={{fontSize:"12px",fontWeight:"600",color:`${currentOrder?.status === "in delivery" || currentOrder?.status === "delivered"? '#2F549D':currentOrder?.status === "waiting caterer" || currentOrder?.status === "upcomming"? '#DFA90D' :'#30A15F'}`,p:"4px 16px 4px 16px",borderRadius:"16px",border:`${currentOrder?.status === "in delivery" || currentOrder?.status === "delivered"? '1px solid #819ED9': currentOrder?.status === "waiting caterer" || currentOrder?.status === "upcomming"? '1px solid #F0D859' :'1px solid #81D9A5'}`,backgroundColor:`${currentOrder?.status === "in delivery" || currentOrder?.status === "delivered"? '#F1F6FF':currentOrder?.status === "waiting caterer" || currentOrder?.status === "upcomming"? '#FEF9E8' :'#F1FFF7'}`,mr:"20px",my:"5px",textTransform:"capitalize"}}>
                                    {currentOrder?.status}
                                </Typography> */}
                                <DeliveryStatus text={currentOrder?.status} 
                                variant={currentOrder?.status?.toLowerCase() === "in delivery" || currentOrder?.status?.toLowerCase() === "delivered"? "blue" : currentOrder?.status?.toLowerCase() === "waiting caterer" || currentOrder?.status?.toLowerCase() === "upcomming"? "yellow" :"green"} 
                                />
                            
                                </Box>
                                <Box sx={{width:"100%",m:"5px 0"}}>
                                    <Box>
                                        <Typography sx={{fontSize:"18px",fontWeight:"500"}}>Mariam Jake</Typography>
                                        <Typography sx={{fontSize:"14px",fontWeight:"400",m:"5px 0",color:"#9EA3AE"}}><span><img src="assets/images/location.svg" alt="locationIcon" style={{marginRight:"5px",verticalAlign: "text-top"}}/></span>
                                        {currentOrder?.deliveryDetails[0]?.deliveryTo?.address}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        )
                    }
                )
            }

            {/* {
            [1].map((item,index) => (
                <Box sx={{border:"2px solid #81D9A5",borderRadius:"8px",width: "100%",minHeight:"180px",p:"16px",my:"15px"}} key={index}>
                    <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",m:"5px 0 30px 0"}}>
                    <Typography sx={{fontSize:"14px",fontWeight:"400",color:"#9EA3AE",my:"5px"}}>Order #12345</Typography>
                    <Typography component="button" sx={{fontSize:"12px",fontWeight:"600",color:"#30A15F",p:"4px 16px 4px 16px",borderRadius:"16px",border:"1px solid #81D9A5",backgroundColor:"#F1FFF7",mr:"20px",my:"5px"}}>Delivered</Typography>
                   
                    </Box>
                    <Box sx={{width:"100%",m:"5px 0"}}>
                        <Box>
                            <Typography sx={{fontSize:"18px",fontWeight:"500"}}>Mariam Jake</Typography>
                            <Typography sx={{fontSize:"14px",fontWeight:"400",m:"5px 0",color:"#9EA3AE"}}><span><img src="assets/images/location.svg" alt="locationIcon" style={{marginRight:"5px",verticalAlign: "text-top"}}/></span>Tamworth Rd, Long Eaton</Typography>
                        </Box>
                    </Box>
                </Box>
            ))
            } */}

            {/* {
            [1].map((item,index) => (
                <Box sx={{border:"2px solid #81D9A5",borderRadius:"8px",width: "100%",minHeight:"180px",p:"16px",my:"15px"}} key={index}>
                    <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",m:"5px 0 30px 0"}}>
                    <Typography sx={{fontSize:"14px",fontWeight:"400",color:"#9EA3AE",my:"5px"}}>Order #12345</Typography>
                    <Typography component="button" sx={{fontSize:"12px",fontWeight:"600",color:"#2F549D",p:"4px 16px 4px 16px",borderRadius:"16px",border:"1px solid #819ED9",backgroundColor:"#F1F6FF",mr:"20px",my:"5px"}}>In Delivery</Typography>
                   
                    </Box>
                    <Box sx={{width:"100%",m:"5px 0"}}>
                        <Box>
                            <Typography sx={{fontSize:"18px",fontWeight:"500"}}>Mariam Jake</Typography>
                            <Typography sx={{fontSize:"14px",fontWeight:"400",m:"5px 0",color:"#9EA3AE"}}><span><img src="assets/images/location.svg" alt="locationIcon" style={{marginRight:"5px",verticalAlign: "text-top"}}/></span>Tamworth Rd, Long Eaton</Typography>
                        </Box>
                    </Box>
                </Box>
            ))
            } */}

            {/* {
            [1,2].map((item,index) => (
                <Box sx={{border:"2px solid #F0D859",borderRadius:"8px",width: "100%",minHeight:"180px",p:"16px",my:"15px"}} key={index}>
                    <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",m:"5px 0 30px 0"}}>
                    <Typography sx={{fontSize:"14px",fontWeight:"400",color:"#9EA3AE",my:"5px"}}>Order #12345</Typography>
                    <Typography component="button" sx={{fontSize:"12px",fontWeight:"600",color:"#DFA90D",p:"4px 16px 4px 16px",borderRadius:"16px",border:"1px solid #F0D859",backgroundColor:"#FEF9E8",mr:"20px",my:"5px"}}>Delivered</Typography>
                   
                    </Box>
                    <Box sx={{width:"100%",m:"5px 0"}}>
                        <Box>
                            <Typography sx={{fontSize:"18px",fontWeight:"500"}}>Mariam Jake</Typography>
                            <Typography sx={{fontSize:"14px",fontWeight:"400",m:"5px 0",color:"#9EA3AE"}}><span><img src="assets/images/location.svg" alt="locationIcon" style={{marginRight:"5px",verticalAlign: "text-top"}}/></span>Tamworth Rd, Long Eaton</Typography>
                        </Box>
                    </Box>
                </Box>
            ))
            } */}

                {/* <Box sx={{border:"2px solid #F0D859",borderRadius:"8px",width: "100%",minHeight:"180px",p:"16px",my:"15px"}}>
                    <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",m:"5px 0 30px 0"}}>
                    <Typography sx={{fontSize:"14px",fontWeight:"400",color:"#9EA3AE",my:"5px"}}>Order #12345</Typography>
                    <Typography component="button" sx={{fontSize:"12px",fontWeight:"600",color:"#DFA90D",p:"4px 16px 4px 16px",borderRadius:"16px",border:"1px solid #F0D859",backgroundColor:"#FEF9E8",mr:"20px",my:"5px"}}>Waiting Caterer</Typography>
                   
                    </Box>
                    <Box sx={{width:"100%",m:"5px 0"}}>
                        <Box>
                            <Typography sx={{fontSize:"18px",fontWeight:"500"}}>Mariam Jake</Typography>
                            <Typography sx={{fontSize:"14px",fontWeight:"400",m:"5px 0",color:"#9EA3AE"}}><span><img src="assets/images/location.svg" alt="locationIcon" style={{marginRight:"5px",verticalAlign: "text-top"}}/></span>Tamworth Rd, Long Eaton</Typography>
                        </Box>
                    </Box>
                </Box> */}


                {/* <Box sx={{border:"2px solid #F0D859",borderRadius:"8px",width: "100%",minHeight:"180px",p:"16px",my:"15px"}}>
                    <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",m:"5px 0 30px 0"}}>
                    <Typography sx={{fontSize:"14px",fontWeight:"400",color:"#9EA3AE",my:"5px"}}>Order #12345</Typography>
                    <Typography component="button" sx={{fontSize:"12px",fontWeight:"600",color:"#DFA90D",p:"4px 16px 4px 16px",borderRadius:"16px",border:"1px solid #F0D859",backgroundColor:"#FEF9E8",mr:"20px",my:"5px"}}>Waiting Caterer</Typography>
                   
                    </Box>
                    <Box sx={{width:"100%",m:"5px 0"}}>
                        <Box>
                            <Typography sx={{fontSize:"18px",fontWeight:"500"}}>Mariam Jake</Typography>
                            <Typography sx={{fontSize:"14px",fontWeight:"400",m:"5px 0",color:"#9EA3AE"}}><span><img src="assets/images/location.svg" alt="locationIcon" style={{marginRight:"5px",verticalAlign: "text-top"}}/></span>Tamworth Rd, Long Eaton</Typography>
                        </Box>
                    </Box>
                </Box> */}

            </Grid>
        </Box>
    </>
  )
}

export default TrackOrder