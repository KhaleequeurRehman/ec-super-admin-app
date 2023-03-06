import React, { useEffect, useState } from "react";
import moment from "moment";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
// import OrderListItemMediaCard from "../../../../components/OrderListItemMediaCard";
// import { OrderCard } from "./OrderCard";
// import { SubscriptionMainCard } from "../../SubscriptionMainCard";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";
import { OrderCard } from "screens/Subscription/Component/OrderDetails/OrderCard";
import { SubscriptionMainCard } from "screens/Subscription/SubscriptionMainCard";
import OrderListItemMediaCard from "components/OrderListItemMediaCard";


const OrderDetailsContentBox = ({orderDetial}) => {

  const navigate = useNavigate();




  const Typo1 = {
    fontSize: "18px",
    fontWeight: "500",
    lineHeight: "26.1px",
    letter: "1.5%",
    color: "#1A1824",
  };

  const Typo2 = {
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "19.6px",
    color: "#9EA3AE",
    letter: "1.5%",
  };

  const Typo3 = {
    fontSize: "14px",
    fontWeight: "600",
    lineHeight: "20px",
    color: "#1A1824",
    letter: "1.5%",
  };

  const Typo4 = {
    fontSize: "18px",
    fontWeight: "600",
    lineHeight: "26px",
    color: "#1A1824",
    letter: "1.5%",
  };

  const Typo5 = {
    fontSize: "14px",
    fontWeight: "600",
    lineHeight: "20px",
    color: "#545359",
    letter: "1.5%",
  };

  const Typo6 = {
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "25.6px",
    color: "#1A1824",
    letter: "1.5%",
  };

  const SubscriptionMainCardData = [
    {
      // heading: "Order #1020",
      heading: `Order ${orderDetial?.data?.orderId !== undefined ? orderDetial?.data?.orderId: "no data"}`,
      // subHeading: "Estimate delivered at 10:00 Am",
      // subHeading: `Estimate delivered at ${orderDetial?.data?.deliveryDetails[0]?.deliveryShift !== undefined ? orderDetial?.data?.deliveryDetails[0]?.deliveryShift?.toLowerCase() === "morning"? "10:00 Am" : "04:00 Pm": "no data"}`,
      subHeading: `Estimate delivered at ${orderDetial?.data?.deliveryDetails[0]?.deliveryShift !== undefined ? orderDetial?.data?.deliveryDetails[0]?.deliveryShift?.toLowerCase() === "morning"? "10.00 AM - 01.00 PM" : "04.00 PM - 06.00PM": "no data"}`,
      // ChipTitle: "Personal subscription",
      ChipTitle: `${orderDetial?.data?.deliveryDetails[0]?.subscriptionId !== undefined ? `${orderDetial?.data?.deliveryDetails[0]?.subscriptionId?.type} subscription` :"no data"}`,
      image: "./assets/images/iMacMemoji.svg",
      // title: "Arabian Kebab, Middle East Special",
      title: `${orderDetial?.data?.deliveryDetails[0]?.subscriptionId?.caterer?.merchantName !== undefined ? orderDetial?.data?.deliveryDetails[0]?.subscriptionId?.caterer?.merchantName :"no data"}`,
      sheduledSubTitle: "Scheduled",
      // dateSubTitle: "13 Oct - 23 Nov 2021",
      dateSubTitle: `${orderDetial?.data?.deliveryDetails[0]?.subscriptionId?.from ? `${moment(orderDetial?.data?.deliveryDetails[0]?.subscriptionId?.from).format('ll').replace(',',"").substring(4,5)} ${moment(orderDetial?.data?.deliveryDetails[0]?.subscriptionId?.from).format('ll').replace(',',"").substring(0,3)} - ${moment(orderDetial?.data?.deliveryDetails[0]?.subscriptionId?.to).format('ll').replace(',',"").substring(4,6)} ${moment(orderDetial?.data?.deliveryDetails[0]?.subscriptionId?.to).format('ll').replace(',',"").substring(0,3)} ${moment(orderDetial?.data?.deliveryDetails[0]?.subscriptionId?.to).format('ll').replace(',',"").substring(9,11)}`:"no data"}`,
      // timeSubTitle="02:00 Am",
      // deliveryStatusTitle: "In Delivery",
      deliveryStatusTitle: `${orderDetial?.data?.status !== undefined ? orderDetial?.data?.status: "no data"}`,
    },
  ];

  // const SubscriptionMainCardData = [
  //   {
  //     heading: "Order #1020",
  //     subHeading: "Estimate delivered at 10:00 Am",
  //     ChipTitle: `${customerDetailData?.user?.status ? customerDetailData?.user?.status : "no data"}`,
  //     image: "./assets/images/iMacMemoji.svg",
  //     title: `${customerDetailData?.user?.fullName ? customerDetailData?.user?.fullName : "no data"}`,
  //     sheduledSubTitle: "Last Login : 10 Feb 2020",
  //     dateOrTimeSubTitle: "01 : 02 Pm",
  //     singleIdTitle: "UED-12345",
  //     singleIdDate: `Joined : ${customerDetailData?.user?.createdAt ? moment(customerDetailData?.user?.createdAt).format('ll').replace(',',"") : 'no data'}`
  //     // timeSubTitle:"02:00 Am",
  //     // deliveryStatusTitle: "In Delivery",
  //   },
  // ];

// const SubscriptionMainCardData = [
//     {
//       heading: "Order #1020",
//       subHeading: `Estimate delivered at ${subscriptionDetailData?.deliveryTime ==="Morning"? '10.00 AM - 01.00 PM':subscriptionDetailData?.deliveryTime ==="Evening"? '04.00 PM - 06.00PM':'no data'}`,
//       ChipTitle: `${subscriptionDetailData?.type} subscription`,
//       image: "./assets/images/iMacMemoji.svg",
//       title: `${subscriptionDetailData?.User?.fullName}`,
//       sheduledSubTitle: "Scheduled",
//       dateSubTitle: 'no data',
//       deliveryStatusTitle: `${subscriptionDetailData?.status}`,
//     },
//   ];

  const OrderCardData = [
    {
      mainTitle: "Customer",
      image: "./assets/images/iMacMemojiRed.svg",
      status: "Active",
      // title: "John Lennon", 
      title: `${orderDetial?.data?.deliveryDetails[0]?.subscriptionId?.user?.fullName !== undefined ? orderDetial?.data?.deliveryDetails[0]?.subscriptionId?.user?.fullName :"no data"}`, 
      icon: "./assets/images/location.svg",
      // subTitle: "Tamworth Rd, Long Eaton",
      subTitle: `${orderDetial?.data?.deliveryDetails[0]?.subscriptionId?.user?.addresses[0]?.address !== undefined ? orderDetial?.data?.deliveryDetails[0]?.subscriptionId?.user?.addresses[0]?.address :"no data"}`,
      btnTitle: "See Details",
    },

    {
      mainTitle: "Caterer",
      image: "./assets/images/iMacMemojiBlue.svg",
      // title: "Chef Juna Food",
      title: `${orderDetial?.data?.deliveryDetails[0]?.subscriptionId?.caterer?.merchantName !== undefined ? orderDetial?.data?.deliveryDetails[0]?.subscriptionId?.caterer?.merchantName :"no data"}`,
      icon: "./assets/images/location.svg",
      // subTitle: "4474 Bridgeport Rd, Canada",
      subTitle: `${orderDetial?.data?.deliveryDetails[0]?.subscriptionId?.caterer?.address !== undefined ? orderDetial?.data?.deliveryDetails[0]?.subscriptionId?.caterer?.address :"no data"}`,
      btnTitle: "See Details",
    },

    // {
    //   mainTitle: "Driver",
    //   image: "./assets/images/iMacMemojiBlue.svg",
    //   // status: "Online",
    //   status: `${orderDetial?.data?.deliveryDetails[0]?.subscriptionId?.driver?.online !== undefined ? orderDetial?.data?.deliveryDetails[0]?.subscriptionId?.driver?.online === true ? "Online" : "Offline" :"no data"}`,
    //   // title: "Muhammad Bairos",
    //   title: `${orderDetial?.data?.deliveryDetails[0]?.subscriptionId?.driver?.firstName !== undefined ? `${orderDetial?.data?.deliveryDetails[0]?.subscriptionId?.driver?.firstName} ${orderDetial?.data?.deliveryDetails[0]?.subscriptionId?.driver?.lastName}` :"no data"}`,
    //   icon: "./assets/images/location.svg",
    //   // subTitle: "Driver ID : ECD - 12345",
    //   subTitle: `Driver ID : ${orderDetial?.data?.deliveryDetails[0]?.subscriptionId?.driver?.driverId !== undefined ? orderDetial?.data?.deliveryDetails[0]?.subscriptionId?.driver?.driverId :"no data"}`,
    //   btnTitle: "View Details",
    // },
  ];

//   const OrderCardData = [
//     {
//       mainTitle: "Customer",
//       image: "./assets/images/iMacMemojiRed.svg",
//       status: "Active",
//       title: `${subscriptionDetailData?.User?.fullName? subscriptionDetailData?.User?.fullName : 'no data' }`,
//       icon: "./assets/images/location.svg",
//       subTitle: 'Tamworth Rd, Long Eaton',
//       btnTitle: "See Details",
//       btnTitleOnClickHandler: () => { navigate("/customer") }
//     },

//     {
//       mainTitle: "Caterer",
//       image: "./assets/images/iMacMemojiBlue.svg",
//       title: `${subscriptionDetailData?.caterer?.merchantName? subscriptionDetailData?.caterer?.merchantName : 'Chef Juna Food'}`,
//       icon: "./assets/images/location.svg",
//       subTitle: `${subscriptionDetailData?.caterer?.address? subscriptionDetailData?.caterer?.address : '4474 Bridgeport Rd, Canada'}`,
//       btnTitle: "See Details",
//       btnTitleOnClickHandler: () => { navigate("/caterer") }
//     },

//     {
//       mainTitle: "Driver",
//       image: "./assets/images/iMacMemojiBlue.svg",
//       status: `${subscriptionDetailData?.Driver?.online === true? `Online` : `Offline`}`,
//       // status: "Online",
//       title: `${subscriptionDetailData?.Driver?.firstName && subscriptionDetailData?.Driver?.lastName? `${subscriptionDetailData?.Driver?.firstName} ${subscriptionDetailData?.Driver?.lastName}` : 'Muhammad Bairos'}`,
//       icon: "./assets/images/location.svg",
//       subTitle: `${subscriptionDetailData?.Driver?.driverId? `Driver ID : ${subscriptionDetailData?.Driver?.driverId}` : 'Driver ID : ECD - 12345'}`,
//       btnTitle: "View Details",
//       btnTitleOnClickHandler: () => { navigate("/driver") }
//     },
//   ];



console.log("OrderDetailsContentBox orderDetial ",orderDetial)

  return (
    <>
    <Box>
      {
        // resdata?.isLoading ? (
        //   <Box sx={{minHeight:"30vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
        //     <CircularProgress color="greenclr"/>
        //   </Box>
        // ) 
        // : 
        // <>
          <Box width="100%">
            <Grid container gap={3} my="5px">
              <Grid
                item
                my="5px"
                xs={12}
                md={6.7}
                //  minHeight="70vh"
              >
                <Typography fontSize="20px" fontWeight="600">
                  Order Details
                </Typography>
                <Box
                  border="1px solid #E1E1E6"
                  borderRadius="8px"
                  height="auto"
                  // p="10px 15px"
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
                      {/* {OrderListItemDataArr &&
                        OrderListItemDataArr.map((currItem, index) => ( */}
                      
                       {/* subscriptionDetailData &&
                         subscriptionDetailData?.mealPlanList.map((currItem, index) => ( */}

                        {/* {subscriptionDetailData &&
                            subscriptionDetailData?.mealPlane.map((currItem, index) => (
                          <Box
                            display="flex"
                            flexWrap="wrap"
                            justifyContent="space-between"
                            key={index}
                          >
                            <OrderListItemMediaCard
                              title={currItem?.name}
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
                        ))} */}
                        

                        {
                          // orderDetial?.data?.orderSummary[0]?.mealPlan
                          Array.isArray(orderDetial?.data?.orderSummary[0]?.mealPlan) && orderDetial?.data?.orderSummary[0]?.mealPlan?.length>0 && orderDetial?.data?.orderSummary[0]?.mealPlan.map((currItem,index)=> (
                            <Box
                            display="flex"
                            flexWrap="wrap"
                            justifyContent="space-between"
                            key={index}
                            >
                                <OrderListItemMediaCard
                                  title="Burger"
                                  // subTitle="10 dishes selected"
                                  subTitle={`${currItem?.count} dishes selected`}
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

                          ))
                        }

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

                        <Typography sx={Typo3}>{orderDetial?.data?.paymentDetails[0]?.totalPayment !==undefined ? `$${Number(orderDetial?.data?.paymentDetails[0]?.totalPayment).toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 })}` : 'no data'}</Typography>
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
                        <Typography sx={Typo3}>Free</Typography>
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
                        {/* <Typography sx={Typo4}>no data</Typography> */}
                        <Typography sx={Typo4}>{orderDetial?.data?.paymentDetails[0]?.totalPayment !==undefined ? `$${Number(orderDetial?.data?.paymentDetails[0]?.totalPayment).toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 })}` : 'no data'}</Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>

                <Box
                    sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: {
                        xl: "40%",
                        lg: "40%",
                        md: "40%",
                        sm: "100%",
                        xs: "100%",
                    },
                    }}
                >
                    {OrderCardData && OrderCardData.map((item,index) => {
                    return (
                        <Box mb="16px" key={index}>
                            <OrderCard item={item} hasBtn={false} hasMsgIcon={true} />
                        </Box>
                    );
                    })}
                </Box>
            </Grid>
          </Box>
        // </>
      }
    </Box>
    </>
  );
};

export default OrderDetailsContentBox;
