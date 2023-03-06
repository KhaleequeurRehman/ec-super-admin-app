import React, { useEffect, useState } from 'react'
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DashboardStatsData, DashboardStatsData2 } from '../../../config';
import Button from '@mui/material/Button';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import { useGetAllOrdersQuery } from 'api/orders';
import { useDeliveryActivityContext } from 'contexts/DeliveryActivityContext/DeliveryActivityContext';
import { countInDeliveryOrder, countOrdersByOrderStatus, filterOrdersByOrderStatus, getOrdersOtherThanGivenOrderStatus } from 'utils';
import DeliveryStatus from 'components/DeliveryStatus';
import { useGetAllCaterersWithFilterMutation } from 'api/caterers';


const DeliveryMainCmp = () => {

  const deliveryActivityStateData = useDeliveryActivityContext()

  const [page, setPage] = useState(0);
  const [size, setSize] = useState(0);

  const {data:allOrdersData,isLoading,refetch,isSuccess} = useGetAllOrdersQuery(`page=${page}&size=${size}`)
  // const {data:allOrdersData,isLoading,refetch,isSuccess} = useGetAllOrdersQuery(`page=${page}&size=${size}&sortBy=createdAt`)

  const [allOrders, setAllOrders] = useState("");


  useEffect(() => {

    setAllOrders(allOrdersData?.data)

  }, [allOrdersData])


  console.log("allOrders ",allOrders)

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Grid container gap={1} sx={{justifyContent:"space-around"}}>
          <Grid item container  xs={12} md={6} sx={{border:"1px solid #E5E5E5",borderRadius:"6px",p:"10px 15px",my:"10px"}}>
            <Box sx={{width: "100%",display:"flex",flexWrap:"wrap",justifyContent:"space-between",m:"0 0 30px 0"}}>
              <Box>
                <Typography sx={{fontSize:"18px",fontWeight:"600"}}>Delivery Activity</Typography>
                <Typography sx={{fontSize:"14px",fontWeight:"400",color:"#9EA3AE",mt:"5px",mb:"10"}}>
                  {/* {`${countInDeliveryOrder(allOrders || [])} Delivery  Process`} */}
                  {`${countOrdersByOrderStatus(allOrders || [],"in delivery")} Delivery  Process`}
                </Typography>
              </Box>
              <Box>
                <Typography sx={{fontSize:"14px",fontWeight:"400",color:"#2B817B",textDecoration:"underline"}}>All Delivery <ExpandMoreIcon sx={{verticalAlign: "middle"}}/></Typography>
              </Box>
            </Box>

            {
                // Array.isArray(allOrders) && allOrders.length>0 && allOrders.map((currentOrder,i)=> 
                Array.isArray(allOrders) && allOrders.length>0 && getOrdersOtherThanGivenOrderStatus(allOrders,"upcomming").map((currentOrder,i)=> 
                    {
                        return (
                          <Box sx={{borderLeft:`${currentOrder?.status === "in delivery" || currentOrder?.status === "delivered"? '6px solid #819ED9': currentOrder?.status === "waiting caterer" || currentOrder?.status === "upcomming"? '6px solid #F0D859':'6px solid #81D9A5'}`,width: "100%",minHeight:"180px",p:"10px",my:"15px"}} key={i}>
                            <Box sx={{display:"flex",flexWrap:"wrap",alignItems:"center",m:"5px 0 30px 0"}}>
                              {/* <Typography component="button" sx={{fontSize:"12px",fontWeight:"600",color:`${currentOrder?.status === "in delivery" || currentOrder?.status === "delivered"? '#2F549D':currentOrder?.status === "waiting caterer" || currentOrder?.status === "upcomming"? '#DFA90D' :'#30A15F'}`,p:"4px 16px 4px 16px",borderRadius:"16px",border:`${currentOrder?.status === "in delivery" || currentOrder?.status === "delivered"? '1px solid #819ED9': currentOrder?.status === "waiting caterer" || currentOrder?.status === "upcomming"? '1px solid #F0D859' :'1px solid #81D9A5'}`,backgroundColor:`${currentOrder?.status === "in delivery" || currentOrder?.status === "delivered"? '#F1F6FF':currentOrder?.status === "waiting caterer" || currentOrder?.status === "upcomming"? '#FEF9E8' :'#F1FFF7'}`,mr:"20px",my:"5px",textTransform:"capitalize"}}>
                                    {currentOrder?.status}
                              </Typography> */}
                              <DeliveryStatus text={currentOrder?.status} 
                              variant={currentOrder?.status?.toLowerCase() === "in delivery" || currentOrder?.status?.toLowerCase() === "delivered"? "blue" : currentOrder?.status?.toLowerCase() === "waiting caterer" || currentOrder?.status?.toLowerCase() === "upcomming"? "yellow" :"green"} 
                              />
                              <Typography sx={{fontSize:"12px",fontWeight:"400",color:"#9EA3AE",my:"5px"}}>{currentOrder?.deliveryDetails[0]?.deliveryShift === "morning"? '10:00 AM - 01.00 PM' : currentOrder?.deliveryDetails[0]?.deliveryShift === "evening"? '04:00 PM - 06.00 PM' : '' }</Typography>
                            </Box>
                            <Box sx={{width:"90%",display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",m:"5px 0"}}>
                              <Box>
                                <Typography sx={{fontSize:"20px",fontWeight:"500",my:"5px"}}>
                                  {currentOrder?.deliveryDetails[0]?.subscriptionId?.user?.fullName}
                                </Typography>
                                <Typography sx={{fontSize:"14px",fontWeight:"400",m:"0 0 17px 0",color:"#9EA3AE"}}>Delivering 40 orders</Typography>
                                <Typography sx={{fontSize:"14px",fontWeight:"400",m:"5px 0",color:"#9EA3AE"}}>From <span style={{fontSize:"16px",fontWeight:"400",margin:"0 0 0 5px",color:"#2B817B",textDecoration:"underline"}}>
                                  {currentOrder?.deliveryDetails[0]?.subscriptionId?.caterer?.merchantName}
                                </span></Typography>
                              </Box>
                              <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                                <Button variant="contained" sx={{mb:"10px",bgcolor:"#2B817B",minWidth:"127px",'&:hover':{bgcolor:"#2B817B"}}} 
                                onClick={()=> { 
                                  deliveryActivityStateData?.selectOrder(currentOrder);
                                  deliveryActivityStateData?.openTrackOrder()}}
                                >Track Order</Button>
                                <Button variant="outlined" sx={{borderColor:"#80B3B0",color:"#2B817B",minWidth:"127px",'&:hover':{borderColor:"#80B3B0"}}}
                                onClick={()=> { 
                                  deliveryActivityStateData?.selectOrder(currentOrder);
                                  deliveryActivityStateData?.openOrderActivityMainCmp()}}
                                >Details</Button>
                              </Box>
                            </Box>
                          </Box>
                        )
                    }
                )
            }

            {/* {
              [1,2].map((item,index) => (
                  <Box sx={{borderLeft:"6px solid #81D9A5",width: "100%",minHeight:"180px",p:"10px",my:"15px"}} key={index}>
                    <Box sx={{display:"flex",flexWrap:"wrap",alignItems:"center",m:"5px 0 30px 0"}}>
                      <Typography component="button" sx={{fontSize:"12px",fontWeight:"600",color:"#2F549D",p:"4px 16px 4px 16px",borderRadius:"16px",border:"1px solid #819ED9",backgroundColor:"#F1F6FF",mr:"20px",my:"5px"}}>In Delivery</Typography>
                      <Typography sx={{fontSize:"12px",fontWeight:"400",color:"#9EA3AE",my:"5px"}}>12:00 - 03.00 Pm</Typography>
                    </Box>
                    <Box sx={{width:"90%",display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",m:"5px 0"}}>
                      <Box>
                        <Typography sx={{fontSize:"20px",fontWeight:"500",my:"5px"}}>John Lennon</Typography>
                        <Typography sx={{fontSize:"14px",fontWeight:"400",m:"0 0 17px 0",color:"#9EA3AE"}}>Delivering 40 orders</Typography>
                        <Typography sx={{fontSize:"14px",fontWeight:"400",m:"5px 0",color:"#9EA3AE"}}>From <span style={{fontSize:"16px",fontWeight:"400",margin:"0 0 0 5px",color:"#2B817B",textDecoration:"underline"}}>Chef Juna Catering</span></Typography>
                      </Box>
                      <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                        <Button variant="contained" sx={{mb:"10px",bgcolor:"#2B817B",minWidth:"127px",'&:hover':{bgcolor:"#2B817B"}}} onClick={()=>  deliveryActivityStateData?.openTrackOrder()}>Track Order</Button>
                        <Button variant="outlined" sx={{borderColor:"#80B3B0",color:"#2B817B",minWidth:"127px",'&:hover':{borderColor:"#80B3B0"}}}>Details</Button>
                      </Box>
                    </Box>
                  </Box>
              ))
            } */}

            {/* {
              [1,2].map((item,index) => (
                  <Box sx={{borderLeft:"6px solid #DFA90D",width: "100%",minHeight:"180px",p:"10px",my:"15px"}} key={index}>
                    <Box sx={{display:"flex",flexWrap:"wrap",alignItems:"center",m:"5px 0 30px 0"}}>
                      <Typography component="button" sx={{fontSize:"12px",fontWeight:"600",color:"#DFA90D",p:"4px 16px 4px 16px",borderRadius:"16px",border:"1px solid #F0D859",backgroundColor:"#FEF9E8",mr:"20px",my:"5px"}}>Waiting Caterer</Typography>
                      <Typography sx={{fontSize:"12px",fontWeight:"400",color:"#9EA3AE",my:"5px"}}>12:00 - 03.00 Pm</Typography>
                    </Box>
                    <Box sx={{width:"90%",display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"flex-start",m:"5px 0"}}>
                      <Box>
                        <Typography sx={{fontSize:"20px",fontWeight:"500",my:"5px"}}>John Lennon</Typography>
                        <Typography sx={{fontSize:"14px",fontWeight:"400",m:"0 0 17px 0",color:"#9EA3AE"}}>Delivering 40 orders</Typography>
                        <Typography sx={{fontSize:"14px",fontWeight:"400",m:"5px 0",color:"#9EA3AE"}}>From <span style={{fontSize:"16px",fontWeight:"400",margin:"0 0 0 5px",color:"#2B817B",textDecoration:"underline"}}>Chef Juna Catering</span></Typography>
                      </Box>
                      <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                        <Button variant="outlined" sx={{borderColor:"#80B3B0",color:"#2B817B",minWidth:"127px",'&:hover':{borderColor:"#80B3B0"}}}>Details</Button>
                      </Box>
                    </Box>
                  </Box>
              ))
            } */}
          </Grid>
          <Grid item xs={12} md={5} my="10px" sx={{border:"1px solid #E5E5E5",borderRadius:"6px",p:"20px 15px 10px 15px"}}>
            <Box>
              <Typography sx={{fontSize:"18px",fontWeight:"600",my:"5px"}}>Upcoming Delivery</Typography>
              <Typography sx={{fontSize:"14px",fontWeight:"400",color:"#9EA3AE",mt:"5px"}}>
                {`${countOrdersByOrderStatus(allOrders || [],"upcomming")} upcoming delivery for tomorrow`}
              </Typography>
            </Box>

            {
                Array.isArray(allOrders) && allOrders.length>0 && filterOrdersByOrderStatus(allOrders,"upcomming").map((currentOrder,i)=> 
                    {
                        return (
                          <Box sx={{border:"1px solid #E5E5E5",borderRadius:"6px",p:"10px 15px",my:"20px"}} key={i}>
                            <Typography sx={{fontSize:"12px",fontWeight:"400",color:"#9EA3AE",mt:"10px",mb:"30px"}}>
                              {currentOrder?.deliveryDetails[0]?.deliveryShift === "morning"? '10:00 AM - 01.00 PM' : currentOrder?.deliveryDetails[0]?.deliveryShift === "evening"? '04:00 PM - 06.00 PM' : '' }
                            </Typography>
                            <Box sx={{mt:"10px",mb:"30px"}}>
                              <Typography sx={{fontSize:"20px",fontWeight:"500",my:"5px"}}>
                                {currentOrder?.deliveryDetails[0]?.subscriptionId?.user?.fullName}
                              </Typography>
                              <Typography sx={{fontSize:"14px",fontWeight:"400",color:"#9EA3AE",mt:"5px"}}>Delivering 40 orders <span style={{color:"#DD7474",fontWeight:"600",margin: "0 5px"}}>Over Limit <ErrorOutlineOutlinedIcon style={{verticalAlign: "top",margin:"-1px 2px 0 2px"}} /></span></Typography>
                            </Box>
                            
                            <Typography sx={{fontSize:"14px",fontWeight:"400",my:"10px",color:"#9EA3AE"}}>From <span style={{fontSize:"16px",fontWeight:"400",margin:"0 0 0 5px",color:"#2B817B",textDecoration:"underline"}}>
                              {currentOrder?.deliveryDetails[0]?.subscriptionId?.caterer?.merchantName}
                            </span></Typography>
                            <Button variant="contained" fullWidth sx={{mb:"10px",mt:"30px",bgcolor:"#2B817B",minWidth:"127px",textTransform:"capitalize",'&:hover':{bgcolor:"#2B817B"}}}>Optimize Quantity</Button>
                          </Box>
                        )
                    }
                )
            }
            
            {/* {
              [1].map((currItem,index)=> (
              <Box sx={{border:"1px solid #E5E5E5",borderRadius:"6px",p:"10px 15px",my:"20px"}} key={index}>
                <Typography sx={{fontSize:"12px",fontWeight:"400",color:"#9EA3AE",mt:"10px",mb:"30px"}}>12:00 - 03.00 Pm</Typography>
                <Box sx={{mt:"10px",mb:"30px"}}>
                  <Typography sx={{fontSize:"20px",fontWeight:"500",my:"5px"}}>John Lennon</Typography>
                  <Typography sx={{fontSize:"14px",fontWeight:"400",color:"#9EA3AE",mt:"5px"}}>Delivering 40 orders <span style={{color:"#DD7474",fontWeight:"600",margin: "0 5px"}}>Over Limit <ErrorOutlineOutlinedIcon style={{verticalAlign: "top",margin:"-1px 2px 0 2px"}} /></span></Typography>
                </Box>
                
                <Typography sx={{fontSize:"14px",fontWeight:"400",my:"10px",color:"#9EA3AE"}}>From <span style={{fontSize:"16px",fontWeight:"400",margin:"0 0 0 5px",color:"#2B817B",textDecoration:"underline"}}>Chef Juna Catering</span></Typography>
                <Button variant="contained" fullWidth sx={{mb:"10px",mt:"30px",bgcolor:"#2B817B",minWidth:"127px",textTransform:"capitalize",'&:hover':{bgcolor:"#2B817B"}}}>Optimize Quantity</Button>
              </Box>
              ))
            } */}


            
            {/* {
              [1,2].map((currItem,index)=> (
                <Box key={index} sx={{border:"1px solid #E5E5E5",borderRadius:"6px",p:"10px 15px",my:"20px"}}>
                  <Typography sx={{fontSize:"12px",fontWeight:"400",color:"#9EA3AE",mt:"10px",mb:"30px"}}>12:00 - 03.00 Pm</Typography>
                  <Box sx={{mt:"10px",mb:"30px"}}>
                    <Typography sx={{fontSize:"20px",fontWeight:"500",my:"5px"}}>John Lennon</Typography>
                    <Typography sx={{fontSize:"14px",fontWeight:"400",color:"#9EA3AE",mt:"5px"}}>Delivering 40 orders <span style={{color:"#42C677",fontWeight:"600",margin: "0 5px"}}> <CheckCircleOutlinedIcon style={{verticalAlign: "top",margin:"1px 5px 0 5px",fontSize:"20px"}} /></span></Typography>
                  </Box>
                  
                  <Typography sx={{fontSize:"14px",fontWeight:"400",my:"10px",color:"#9EA3AE"}}>From <span style={{fontSize:"16px",fontWeight:"400",margin:"0 0 0 5px",color:"#2B817B",textDecoration:"underline"}}>Chef Juna Catering</span></Typography>
                  <Button variant="outlined" fullWidth sx={{mb:"10px",mt:"30px",borderColor:"#80B3B0",color:"#2B817B",textTransform:"capitalize",minWidth:"127px",'&:hover':{borderColor:"#80B3B0"}}}>Optimize Quantity</Button>
                </Box>
              ))
            } */}
            

          </Grid>
        </Grid>
      </Box>
    </ >
  )
}

export default DeliveryMainCmp