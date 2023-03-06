import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import CustomBreadcrumbs from "components/CustomBreadcrumbs";
import { useDeliveryActivityContext } from "contexts/DeliveryActivityContext/DeliveryActivityContext";
import OrderDetailsContentBox from "./OrderDetailsContentBox";
import { useGetSingleOrderQuery } from "api/orders";
import { useState } from "react";

function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
}

const OrderDetails = () => {

    const deliveryActivityStateData = useDeliveryActivityContext()
  
    const {data:orderData,isLoading,refetch,isSuccess} = useGetSingleOrderQuery(`${deliveryActivityStateData?.state?.selectedSingleOrder?._id}`)

    const [orderDetial, setOrderDetial] = useState(deliveryActivityStateData?.state?.selectedSingleOrder || "");


  useEffect(() => {
    // setOrderDetial(deliveryActivityStateData?.state?.selectedSingleOrder)
    setOrderDetial(orderData)
  }, [orderData])

    const breadcrumbsLinksDataArr = [
        {
            text:"Order Activity",
            url:"#",
        },
        {
            text:"Delivery Details",
            url:"#",
        },
    ]

  return (
    <>
      <Box width="100%" p="20px">
        <CustomBreadcrumbs
          // typographyText="Order #1020"
          typographyText={`Order ${orderDetial?.data?.orderId}`} 
          breadcrumbsLinksArr={breadcrumbsLinksDataArr}
          // clickHandler={handleClick}
            clickHandler={()=> 
                deliveryActivityStateData?.closeOrderDetail()
            } 
        />
        {/* <OrderDetailsMainBox selectedsubscription={selectedsubscription} SubscriptionMainCardData = {SubscriptionMainCardData} hasPauseButton={true}/> */}
        
        <OrderDetailsContentBox orderDetial={orderDetial} />
      </Box>
    
    </>
  );
};

export default OrderDetails;


// import React, { useEffect, useState } from 'react'
// import CustomBreadcrumbs from "../../components/CustomBreadcrumbs";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";
// import CustomMediaCard from "../../components/CustomMediaCard";
// import OrderListItemMediaCard from "../../components/OrderListItemMediaCard";
// import DeliveryStatus from "../../components/DeliveryStatus";
// import { useOrderActivityContext } from '../../contexts/OrderActivityContext/OrderActivityContext';
// import { useDeliveryActivityContext } from 'contexts/DeliveryActivityContext/DeliveryActivityContext';
// import { useGetSingleOrderQuery } from 'api/orders';

// function handleClick(event) {
//     event.preventDefault();
//     console.info("You clicked a breadcrumb.");
// }

// const OrderDetails = () => {
    
//     const deliveryActivityStateData = useDeliveryActivityContext()
//     // const orderActivityStateData = useOrderActivityContext()
    
// //   const {data:orderData,isLoading,refetch,isSuccess} = useGetSingleOrderQuery(`${deliveryActivityStateData?.state?.selectedSingleOrder?._id}`)

//   const [orderDetial, setOrderDetial] = useState(deliveryActivityStateData?.state?.selectedSingleOrder || "");


//   useEffect(() => {

//     // setOrderDetial(orderData?.data)
//     setOrderDetial(deliveryActivityStateData?.state?.selectedSingleOrder)

//   }, [])
// //   }, [orderData])


//     const breadcrumbsLinksDataArr = [
//         {
//             text:"Order Activity",
//             url:"#",
//         },
//         {
//             text:"Delivery Details",
//             url:"#",
//         },
//     ]

//     const OrderListItemDataArr = [
//         {
//             title:"Main Course",
//             subTitle:"30 dishes selected",
//             imgUrl: "assets/images/dish1.svg"
//         },
//         {
//             title:"Salad Dishes",
//             subTitle:"10 dishes selected",
//             imgUrl: "assets/images/dish2.svg"
//         },
//         {
//             title:"Sweet Dishes",
//             subTitle:"10 dishes selected",
//             imgUrl: "assets/images/dish3.svg"
//         },
//     ]

//     console.log("deliveryActivityStateData?.state?.selectedSingleOrder ",deliveryActivityStateData?.state?.selectedSingleOrder)
//     console.log("orderDetial ",orderDetial)

//   return (
//     <>
//         <Box width= "100%" p="20px" >
//             <CustomBreadcrumbs 
//             // typographyText="Order #1020" 
//             typographyText={`Order ${orderDetial?.orderId}`} 
//             breadcrumbsLinksArr={breadcrumbsLinksDataArr} 
//             // clickHandler={handleClick} 
//             clickHandler={()=> 
//                 deliveryActivityStateData?.closeOrderDetail()
//                 // orderActivityStateData?.closeOrderDetail()
//             } 
//             />
//             <Grid container gap={3} my="5px">
//                 <Grid item my="5px" xs={12} md={6.7} minHeight="70vh">
//                     <Typography fontSize="20px" fontWeight="600">Order Details</Typography>
//                     <Box border="1px solid #E1E1E6" borderRadius="8px" height="100%" p="10px 15px">
//                         <Box width= "100%" display="flex" flexWrap="wrap" justifyContent="space-between" my="10px">
//                             <CustomMediaCard 
//                             // title="Order #1020"
//                             title={`Order ${orderDetial?.orderId}`}
//                             // subTitle="Estimate delivered at 10:00 Am"
//                             subTitle={`Estimate delivered at ${orderDetial?.deliveryDetails[0]?.deliveryShift === "morning"? '10:00 AM - 01.00 PM' : orderDetial?.deliveryDetails[0]?.deliveryShift === "evening"? '04:00 PM - 06.00 PM' : '' }`}
//                             />
//                             <Box my="10px">
//                                 {/* <DeliveryStatus variant="blue" text="In Delivery" /> */}
//                                 <DeliveryStatus text={orderDetial?.status} 
//                                 variant={orderDetial?.status?.toLowerCase() === "in delivery" || orderDetial?.status?.toLowerCase() === "delivered"? "blue" : orderDetial?.status?.toLowerCase() === "waiting caterer" || orderDetial?.status?.toLowerCase() === "upcomming"? "yellow" :"green"} 
//                                 />
//                             </Box>
//                         </Box>
//                         <Box border="1px solid #E1E1E6" borderRadius="8px" height="100%" p="10px 15px">
//                             <Typography fontSize="14px" fontWeight="600" color="#545359">Meal Plan</Typography>
//                             <Box width= "100%" my="5px">
//                                 {
//                                     OrderListItemDataArr && OrderListItemDataArr.map((currItem,index) => (
//                                         <Box my="2px" display="flex" flexWrap="wrap" justifyContent="space-between" key={index}>
//                                             <OrderListItemMediaCard 
//                                             title={currItem.title}
//                                             subTitle={currItem.subTitle}
//                                             imgUrl={currItem.imgUrl}
//                                             />
//                                             <Box my="5px">
//                                                 <Typography fontSize="14px" fontWeight="400" color="#2B817B" borderBottom="1.5px solid #2B817B" mr="10px">See All Details</Typography>
//                                             </Box>
//                                         </Box>
//                                     ))
//                                 }
                               
//                             </Box>
//                         </Box>
//                     </Box>
//                 </Grid>
//                 <Grid item my="5px" xs={12} md={5} minHeight="70vh">
//                     <Typography fontSize="20px" fontWeight="600">Customer</Typography>
//                     <Box border="1px solid #E1E1E6" borderRadius="8px" height="100%">
                        
//                     </Box>
//                 </Grid>
//             </Grid>
//         </Box>
//     </>
//   )
// }

// export default OrderDetails