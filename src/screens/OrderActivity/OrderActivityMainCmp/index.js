import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CustomBreadcrumbs from "../../../components/CustomBreadcrumbs";
import CustomMediaCard from "../../../components/CustomMediaCard";
import DeliveryStatus from "../../../components/DeliveryStatus";
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { useOrderActivityContext } from "../../../contexts/OrderActivityContext/OrderActivityContext";
import { useDeliveryActivityContext } from "contexts/DeliveryActivityContext/DeliveryActivityContext";
import { useGetAllOrderRelatedToCustomerQuery } from "api/orders";
import { useNavigate } from "react-router-dom";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}


const OrderActivityMainCmp = () => {

  const navigate = useNavigate();

  const deliveryActivityStateData = useDeliveryActivityContext()

  const [page, setPage] = useState(0);
  const [size, setSize] = useState(0);

  const {data:allOrderRelatedToCustomerData,isLoading,refetch,isSuccess} = useGetAllOrderRelatedToCustomerQuery(`${deliveryActivityStateData?.state?.selectedOrder?.deliveryDetails[0]?.subscriptionId?._id},page=${page}&size=${size}`)
//   const {data:allOrderRelatedToCustomerData,isLoading,refetch,isSuccess} = useGetAllOrderRelatedToCustomerQuery(`63baae754e575315b7b78454,page=${page}&size=${size}`)
//   const {data:allOrderRelatedToCustomerData,isLoading,refetch,isSuccess} = useGetAllOrderRelatedToCustomerQuery(`63baae754e575315b7b78454,page=${page}&size=${size}&sortBy=createdAt`)

  const [allOrderRelatedToCustomer, setAllOrderRelatedToCustomer] = useState("");

  const orderStatus = deliveryActivityStateData?.state?.selectedOrder?.status

  useEffect(() => {
    setAllOrderRelatedToCustomer(allOrderRelatedToCustomerData?.data)
  }, [allOrderRelatedToCustomerData])


  console.log("allOrderRelatedToCustomer ",allOrderRelatedToCustomer)

  // const orderActivityStateData = useOrderActivityContext()
// const OrderActivityMainCmp = ({setIsShownOrderDetails}) => {
// const OrderActivityMainCmp = ({openOrderDetail,closeOrderDetail}) => {

// function clickHandler(event) {
//     event.preventDefault();
//     console.info("You clicked a breadcrumb.");
//   }

  const breadcrumbsLinksDataArr = [
    {
        text:"Order Activity",
        url:"#",
    },
  ]
  
  console.log("deliveryActivityStateData?.state?.selectedOrder OrderActivityMainCmp ",deliveryActivityStateData?.state?.selectedOrder?.deliveryDetails[0]?.subscriptionId?._id)

  return (
    <>
    <Box width= "100%" p="20px" >
      <CustomBreadcrumbs typographyText="Delivery Details" breadcrumbsLinksArr={breadcrumbsLinksDataArr} 
      // clickHandler={handleClick} 
      clickHandler={()=> deliveryActivityStateData?.closeOrderActivityMainCmp()} 
      />
      <Box sx={{width: "100%",borderBottom:"1px solid #E1E1E6",display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",m:"10px 0 10px 0"}}>
        <Box>
            <Box sx={{display:"flex",flexWrap:"wrap",m:"10px 0 10px 0"}}>
                <Box sx={{m:"10px 15px 10px 0",width:"65px",height:"65px"}}>
                    <img src="assets/images/iMacIcon.svg" alt="iMacIcon" width="100%" height="100%"/>
                </Box>
                <Box sx={{m:"10px 0 10px 0"}}>
                    <Typography sx={{fontSize:"18px",fontWeight:"600"}}>
                      {/* John Lennon */}
                      {deliveryActivityStateData?.state?.selectedOrder?.deliveryDetails[0]?.subscriptionId?.user?.fullName}
                    </Typography>
                    <Typography sx={{fontSize:"14px",fontWeight:"400",m:"5px 0",color:"#9EA3AE"}}>Delivering 40 order</Typography>
                    <Typography sx={{fontSize:"14px",fontWeight:"400",m:"10px 0",color:"#9EA3AE"}}>From <span style={{fontSize:"16px",fontWeight:"400",margin:"0 0 0 5px",color:"#2B817B",textDecoration:"underline"}}>
                      {/* Chef Juna Catering */}
                      {deliveryActivityStateData?.state?.selectedOrder?.deliveryDetails[0]?.subscriptionId?.caterer?.merchantName}
                    </span></Typography>
                </Box>
            </Box>
        </Box>
        <Box>
            <Box sx={{m:"10px 0 10px 0"}}>
                <Box sx={{m:"5px 0",display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center"}}>
                  <Typography sx={{fontSize:"12px",fontWeight:"400",color:"#9EA3AE",my:"5px",mr:"30px"}}>
                    {deliveryActivityStateData?.state?.selectedOrder?.deliveryDetails[0]?.deliveryShift === "morning"? '10:00 AM - 01.00 PM' : deliveryActivityStateData?.state?.selectedOrder?.deliveryDetails[0]?.deliveryShift === "evening"? '04:00 PM - 06.00 PM' : '' }
                  </Typography>
                  {/* <Typography component="button" sx={{fontSize:"12px",fontWeight:"600",color:`${orderStatus === "in delivery" || orderStatus === "delivered"? '#2F549D':orderStatus === "waiting caterer" || orderStatus === "upcomming"? '#DFA90D' :'#30A15F'}`,p:"4px 16px 4px 16px",borderRadius:"16px",border:`${orderStatus === "in delivery" || orderStatus === "delivered"? '1px solid #819ED9': orderStatus === "waiting caterer" || orderStatus === "upcomming"? '1px solid #F0D859' :'1px solid #81D9A5'}`,backgroundColor:`${orderStatus === "in delivery" || orderStatus === "delivered"? '#F1F6FF':orderStatus === "waiting caterer" || orderStatus === "upcomming"? '#FEF9E8' :'#F1FFF7'}`,mr:"20px",my:"5px",textTransform:"capitalize"}}>
                    {deliveryActivityStateData?.state?.selectedOrder?.status}
                  </Typography> */}
                  <DeliveryStatus text={orderStatus} 
                  variant={orderStatus?.toLowerCase() === "in delivery" || orderStatus?.toLowerCase() === "delivered"? "blue" : orderStatus?.toLowerCase() === "waiting caterer" || orderStatus?.toLowerCase() === "upcomming"? "yellow" :"green"} 
                  />
                </Box>
                <Box sx={{m:"5px 0",display:"flex",flexWrap:"wrap",justifyContent:"flex-end",alignItems:"center"}}>
                  <Box sx={{width:"41px",height:"41px",mr:"20px",border:"none",outline:"none"}} component="button" onClick={() => { navigate("/inbox"); }}>
                    <img src="assets/images/orderbookIcon.svg" alt="orderbookIcon" width="100%" height="100%"/>
                  </Box>
                  <Button variant="contained" sx={{my:"5px",bgcolor:"#2B817B",minWidth:"127px",mr:"10px",'&:hover':{bgcolor:"#2B817B"}}} 
                  onClick={()=> { deliveryActivityStateData?.openTrackOrder() }}>Track Order</Button>
                </Box>
            </Box>
        </Box>
      </Box>

      {
        Array.isArray(allOrderRelatedToCustomer) && allOrderRelatedToCustomer.length>0 && allOrderRelatedToCustomer.map((currentOrder,i)=> 
          {
            return (
                <Box sx={{width:"100%",display:"flex",flexWrap:"wrap",justifyContent:"space-between", my:"10px"}} key={i}>
                  <Box>
                      <CustomMediaCard 
                      title={`Order ${currentOrder?.orderId}`}
                      subTitle={`${currentOrder?.deliveryDetails[0]?.deliveryTo?.address}`}
                      imgUrl="assets/images/iMacIcon.svg"
                      iconUrl="assets/images/location.svg" 
                      />
                  </Box>
                  <Box>
                    <Box my="10px">
                        <Box my="5px" display="flex" flexWrap="wrap" justifyContent="space-between" alignItems="center">
                          {/* <DeliveryStatus text="Delivered" variant="blue" /> */}
                          <DeliveryStatus text={currentOrder?.status} 
                          variant={currentOrder?.status?.toLowerCase() === "in delivery" || currentOrder?.status?.toLowerCase() === "delivered"? "blue" : currentOrder?.status?.toLowerCase() === "waiting caterer" || currentOrder?.status?.toLowerCase() === "upcomming"? "yellow" :"green"} 
                          />
                          <Button disableRipple={true} variant="text" sx={{color:"#2B817B",textTransform:"capitalize",p:"0px",background:"none",borderBottom:"2px solid #2B817B",borderRadius:"0px",fontSize:"14px",fontWeight:"400",'&:hover':{borderBottom:"2px solid #2B817B"}}} 
                          onClick={()=>{
                            deliveryActivityStateData?.selectSingleOrder(currentOrder);
                            deliveryActivityStateData?.openOrderDetail();
                          }}
                          >See details</Button>
                        </Box>
                    </Box>
                  </Box>
              </Box>
            )
          }
        )
      }




    {/* {
      [1,2,3,4,5].map((currItem,index) => (
        <Box sx={{width:"100%",display:"flex",flexWrap:"wrap",justifyContent:"space-between", my:"10px"}} key={index}>
          <Box>
              <CustomMediaCard 
              title="Order #12345"
              subTitle="Tamworth Rd, Long Eaton"
              imgUrl="assets/images/iMacIcon.svg"
              iconUrl="assets/images/location.svg" 
              />
          </Box>
          <Box>
            <Box my="10px">
                <Box my="5px" display="flex" flexWrap="wrap" justifyContent="space-between" alignItems="center">
                  <DeliveryStatus text="Delivered" variant="blue" />
                  <Button disableRipple={true} variant="text" sx={{color:"#2B817B",textTransform:"capitalize",p:"0px",background:"none",borderBottom:"2px solid #2B817B",borderRadius:"0px",fontSize:"14px",fontWeight:"400",'&:hover':{borderBottom:"2px solid #2B817B"}}} 
                  onClick={()=>{
                    deliveryActivityStateData?.openOrderDetail()
                  }}
                  >See details</Button>
                </Box>
            </Box>
          </Box>
        </Box>
      ))
    } */}
    </Box>
    </>
  );
};

export default OrderActivityMainCmp;









// {
//   [1,2,3,4,5].map((currItem,index) => (
//     <Box sx={{width:"100%",display:"flex",flexWrap:"wrap",justifyContent:"space-between", my:"10px"}} key={index}>
//       <Box>
//           {/* <Box sx={{display:"flex",flexWrap:"wrap",m:"10px 0 10px 0"}}>
//               <Box sx={{m:"10px 15px 10px 0",width:"48px",height:"48px"}}>
//                   <img src="assets/images/iMacIcon.svg" alt="iMacIcon" width="100%" height="100%"/>
//               </Box>
//               <Box sx={{m:"10px 0 10px 0"}}>
//                 <Typography sx={{fontSize:"18px",fontWeight:"500"}}>Order #12345</Typography>
//                 <Typography sx={{fontSize:"14px",fontWeight:"400",m:"10px 0",color:"#9EA3AE"}}><span><img src="assets/images/location.svg" alt="locationIcon" style={{marginRight:"5px",verticalAlign: "text-top"}}/></span>Tamworth Rd, Long Eaton</Typography>
//               </Box>
//           </Box> */}
//           <CustomMediaCard 
//           title="Order #12345"
//           subTitle="Tamworth Rd, Long Eaton"
//           imgUrl="assets/images/iMacIcon.svg"
//           iconUrl="assets/images/location.svg" 
//           />
//       </Box>
//       <Box>
//         <Box my="10px">
//             <Box my="5px" display="flex" flexWrap="wrap" justifyContent="space-between" alignItems="center">
//               <DeliveryStatus text="Delivered" variant="blue" />
//               {/* <Typography fontSize="14px" fontWeight="400" color="#2B817B" borderBottom="1.5px solid #2B817B" mr="10px" >See details</Typography> */}
//               <Button disableRipple={true} variant="text" sx={{color:"#2B817B",textTransform:"capitalize",p:"0px",background:"none",borderBottom:"2px solid #2B817B",borderRadius:"0px",fontSize:"14px",fontWeight:"400",'&:hover':{borderBottom:"2px solid #2B817B"}}} 
//               onClick={()=>{
//                 console.log("clicked")
//                 deliveryActivityStateData?.openOrderDetail()
//                 // orderActivityStateData?.openOrderDetail()
//               }}
//               >See details</Button>
//               {/* <Button disableRipple={true} variant="text" sx={{color:"#2B817B",textTransform:"capitalize",p:"0px",background:"none",borderBottom:"2px solid #2B817B",borderRadius:"0px",fontSize:"14px",fontWeight:"400",'&:hover':{borderBottom:"2px solid #2B817B"}}} onClick={()=> setIsShownOrderDetails(true)}>See details</Button> */}
//               {/* <Button variant="text" sx={{borderColor:"#80B3B0",color:"#2B817B",minWidth:"127px",'&:hover':{borderColor:"#80B3B0"}}}>Details</Button> */}
//             </Box>
//         </Box>
//       </Box>
//     </Box>
//   ))
// }