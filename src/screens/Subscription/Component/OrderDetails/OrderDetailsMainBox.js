import React, { useEffect, useState } from "react";
import moment from "moment";
// import CustomBreadcrumbs from "../../components/CustomBreadcrumbs";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import OrderListItemMediaCard from "../../../../components/OrderListItemMediaCard";
import { OrderCard } from "./OrderCard";
import { CustomLargeButton } from "./CustomLargeButton";
import CancelSubscriptionComp from "../CancelSubscription/CancelSubscriptionComp";
import CancelSubscriptions from "../CancelSubscriptions";
import PauseSubscriptions from "../PauseSubscriptions";
import IssueRefund from "../IssueRefund";
import PauseSubscription from "../PauseSubscription";
import { SubscriptionMainCard } from "../../SubscriptionMainCard";
import { DisposanleSection } from "./DisposanleSection";
import { CustomerNotes } from "./CustomerNotes";
import { useGetSubscriptionDetailMutation,useCancelSubscriptionMutation,usePauseSubscriptionMutation } from "../../../../api/subscription";
import CircularProgress from "@mui/material/CircularProgress";
import CustomizedModal from "../../../../components/CustomizedModal";
import { useNavigate } from "react-router-dom";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}


const OrderDetailsMainBox = ({
  chipTitle,
  selectedsubscription,
//   SubscriptionMainCardData,
  hasPauseButton,
  hasEventBox,
  hasDisposanle,
  hasCustomerNotes
}) => {

  const navigate = useNavigate();

const [getSubscriptionDetail, resdata] = useGetSubscriptionDetailMutation()

// const [cancelSubscription, respdata] = useCancelSubscriptionMutation()

// const [pauseSubscription, resppdata] = usePauseSubscriptionMutation()

const [subscriptionDetailData, setSubscriptionDetailData] = useState("")

  // const [open, setOpen] = React.useState(false);
  const [openRefund, setOpenRefund] = React.useState(false);
  const [openPause, setOpenPause] = React.useState(false);

  const [cancelSubscriptionModalOpen, setCancelSubscriptionModalOpen] = React.useState(false);
  const [pauseSubscriptionModalOpen, setPauseSubscriptionModalOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClickOpenRefund = () => {
    setOpenRefund(true);
  };

  const handleClickOpenPause = () => {
    setOpenPause(true);
  };

  const handleCancelSubscriptionModalOpen = () => {
    setCancelSubscriptionModalOpen(true);
  };

  const handleCancelSubscriptionModalClose = () => {
      setCancelSubscriptionModalOpen(false);
  };

  const handlePauseSubscriptionModalOpen = () => {
    setPauseSubscriptionModalOpen(true);
  };

  const handlePauseSubscriptionModalClose = () => {
      setPauseSubscriptionModalOpen(false);
  };


  const getSubscriptionDetailData = ()=> {
    getSubscriptionDetail({ id:selectedsubscription._id }).then((res) => {
      if (res.data){
        console.log("res.data ", res?.data);
        setSubscriptionDetailData(res?.data?.data[0])
      }
    });
  }
  
  useEffect(() => {
    getSubscriptionDetailData()
  }, [])
  

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

//   const SubscriptionMainCardData = [
//     {
//       heading: "Order #1020",
//       subHeading: "Estimate delivered at 10:00 Am",
//       ChipTitle: "Personal subscription",
//       image: "./assets/images/iMacMemoji.svg",
//       title: "Arabian Kebab, Middle East Special",
//       sheduledSubTitle: "Scheduled",
//       dateSubTitle: "13 Oct - 23 Nov 2021",
//       // timeSubTitle="02:00 Am",
//       deliveryStatusTitle: "In Delivery",
//     },
//   ];


const SubscriptionMainCardData = [
    {
      heading: "Order #1020",
      // subHeading: `Estimate delivered at ${subscriptionDetailData?.deliveryTime ==="Morning"? '10:00 Am':subscriptionDetailData?.deliveryTime ==="Evening"? '4:00 Pm':'no data'}`,
      subHeading: `Estimate delivered at ${subscriptionDetailData?.deliveryTime ==="Morning"? '10.00 AM - 01.00 PM':subscriptionDetailData?.deliveryTime ==="Evening"? '04.00 PM - 06.00PM':'no data'}`,
      // subHeading: 'Estimate delivered at no data',
      ChipTitle: `${subscriptionDetailData?.type} subscription`,
      image: "./assets/images/iMacMemoji.svg",
      title: `${subscriptionDetailData?.User?.fullName}`,
      sheduledSubTitle: "Scheduled",
      // dateSubTitle: `${moment(subscriptionDetailData?.from).format('ll').replace(',',"")} - ${moment(subscriptionDetailData?.to).format('ll').replace(',',"")}`,
      // dateSubTitle: `${moment(subscriptionDetailData?.subcriptionDateFrom).format('ll').replace(',',"")} - ${moment(subscriptionDetailData?.subcriptionDateTo).format('ll').replace(',',"")}`,
      dateSubTitle: 'no data',
      deliveryStatusTitle: `${subscriptionDetailData?.status}`,
    },
  ];


//   const OrderListItemDataArr = [
//     {
//       title: "Main Course",
//       subTitle: "30 dishes selected",
//       imgUrl: "assets/images/dish1.svg",
//     },
//     {
//       title: "Salad Dishes",
//       subTitle: "10 dishes selected",
//       imgUrl: "assets/images/dish2.svg",
//     },
//     {
//       title: "Sweet Dishes",
//       subTitle: "10 dishes selected",
//       imgUrl: "assets/images/dish3.svg",
//     },
//   ];

//   const OrderCardData = [
//     {
//       mainTitle: "Customer",
//       image: "./assets/images/iMacMemojiRed.svg",
//       status: "Active",
//       title: "John Lennon",
//       icon: "./assets/images/location.svg",
//       subTitle: "Tamworth Rd, Long Eaton",
//       btnTitle: "See Details",
//     },

//     {
//       mainTitle: "Caterer",
//       image: "./assets/images/iMacMemojiBlue.svg",
//       title: "Chef Juna Food",
//       icon: "./assets/images/location.svg",
//       subTitle: "4474 Bridgeport Rd, Canada",
//       btnTitle: "See Details",
//     },

//     {
//       mainTitle: "Driver",
//       image: "./assets/images/iMacMemojiBlue.svg",
//       status: "Online",
//       title: "Muhammad Bairos",
//       icon: "./assets/images/location.svg",
//       subTitle: "Driver ID : ECD - 12345",
//       btnTitle: "View Details",
//     },
//   ];
  const OrderCardData = [
    {
      mainTitle: "Customer",
      image: "./assets/images/iMacMemojiRed.svg",
      status: "Active",
      title: `${subscriptionDetailData?.User?.fullName? subscriptionDetailData?.User?.fullName : 'no data' }`,
      icon: "./assets/images/location.svg",
      subTitle: 'Tamworth Rd, Long Eaton',
      // subTitle: `${subscriptionDetailData?.User?.address? subscriptionDetailData?.User?.address : 'Tamworth Rd, Long Eaton' }`,
      btnTitle: "See Details",
      btnTitleOnClickHandler: () => { navigate("/customer") }
    },

    {
      mainTitle: "Caterer",
      image: "./assets/images/iMacMemojiBlue.svg",
      title: `${subscriptionDetailData?.caterer?.merchantName? subscriptionDetailData?.caterer?.merchantName : 'Chef Juna Food'}`,
      icon: "./assets/images/location.svg",
      subTitle: `${subscriptionDetailData?.caterer?.address? subscriptionDetailData?.caterer?.address : '4474 Bridgeport Rd, Canada'}`,
      btnTitle: "See Details",
      btnTitleOnClickHandler: () => { navigate("/caterer") }
    },

    {
      mainTitle: "Driver",
      image: "./assets/images/iMacMemojiBlue.svg",
      status: `${subscriptionDetailData?.Driver?.online === true? `Online` : `Offline`}`,
      // status: "Online",
      title: `${subscriptionDetailData?.Driver?.firstName && subscriptionDetailData?.Driver?.lastName? `${subscriptionDetailData?.Driver?.firstName} ${subscriptionDetailData?.Driver?.lastName}` : 'Muhammad Bairos'}`,
      icon: "./assets/images/location.svg",
      subTitle: `${subscriptionDetailData?.Driver?.driverId? `Driver ID : ${subscriptionDetailData?.Driver?.driverId}` : 'Driver ID : ECD - 12345'}`,
      btnTitle: "View Details",
      btnTitleOnClickHandler: () => { navigate("/driver") }
    },
  ];

//   console.log('selectedsubscription andar ',selectedsubscription)
  console.log('selectedsubscription ',selectedsubscription)
  console.log('subscriptionDetailData ',subscriptionDetailData)
  return (
    <>
    <Box>
      {
        resdata?.isLoading ? (
          <Box sx={{minHeight:"30vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <CircularProgress color="greenclr"/>
          </Box>
        ) 
        : 
        <>
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

                  {hasEventBox && (
                    <Box
                      sx={{
                        width: "70%",
                        display: "flex",
                        justifyContent: "space-between",
                        pb: "24px",
                        pt: "10px",
                      }}
                    >
                      <Box>
                        <Typography sx={Typo2}>Event Type</Typography>
                        <Typography sx={Typo6}>Birthday Party</Typography>
                      </Box>

                      <Box>
                        <Typography sx={Typo2}>Number of attendence</Typography>
                        <Typography sx={Typo6}>50 Person</Typography>
                      </Box>
                    </Box>
                  )}

                  <Box
                    border="1px solid #E1E1E6"
                    borderRadius="8px"
                    height="auto"
                    // p="10px 15px"
                    p="16px"
                  >
                    <Typography fontSize="14px" fontWeight="600" color="#545359">
                      Meal Plan
                    </Typography>
                    <Box
                      width="100%"
                      //  my="5px"
                      mt="16px"
                    >
                      {/* {OrderListItemDataArr &&
                        OrderListItemDataArr.map((currItem, index) => ( */}
                      {subscriptionDetailData &&
                            subscriptionDetailData?.mealPlane.map((currItem, index) => (
                    //   {subscriptionDetailData &&
                    //     subscriptionDetailData?.mealPlanList.map((currItem, index) => (
                          <Box
                            // my="2px"
                            display="flex"
                            flexWrap="wrap"
                            justifyContent="space-between"
                            key={index}
                          >
                            <OrderListItemMediaCard
                              title={currItem?.name}
                              subTitle="10 dishes selected"
                              imgUrl="assets/images/dish1.svg"
                            //   title={currItem.title}
                            //   subTitle={currItem.subTitle}
                            //   imgUrl={currItem.imgUrl}
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
                        ))}
                    </Box>
                  </Box>


                  {
                    hasDisposanle && 
                    <Box mt="24px">
                    <DisposanleSection/>
                  </Box>
                  }

                  {hasCustomerNotes && 
                  <Box  mt="24px">
                  <CustomerNotes/>
                </Box>
                  }

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
                        {/* <Typography sx={Typo3}>$15.00</Typography> */}
                        {/* <Typography sx={Typo3}>{subscriptionDetailData?.price? `$${subscriptionDetailData?.price}.00` : 'no data'}</Typography> */}
                        <Typography sx={Typo3}>{subscriptionDetailData?.price !==undefined ? `$${Number(subscriptionDetailData?.price).toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 })}` : 'no data'}</Typography>
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
                        <Typography sx={Typo3}>{subscriptionDetailData?.deliveryCharges !==undefined ? `$${Number(subscriptionDetailData?.deliveryCharges).toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 })}` : 'no data'}</Typography>
                        {/* <Typography sx={Typo3}>Free</Typography> */}
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
                        {/* <Typography sx={Typo4}>$412.22</Typography> */}
                        <Typography sx={Typo4}>{subscriptionDetailData?.deliveryCharges !==undefined && subscriptionDetailData?.price !==undefined ? `$${(Number(subscriptionDetailData?.deliveryCharges)+Number(subscriptionDetailData?.price)).toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 })}` : 'no data'}</Typography>
                        {/* <Typography sx={Typo4}>{subscriptionDetailData?.price? `$${subscriptionDetailData?.price}.00` : 'no data'}</Typography> */}
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
                        <OrderCard item={item} />
                      </Box>
                  );
                })}

                {hasPauseButton && (
                  <Box mt="24px">
                    <CustomLargeButton
                      // onClickFunc={handleClickOpenPause}
                      onClickFunc={handlePauseSubscriptionModalOpen}
                      variant="contained"
                      title="Pause Subscription"
                      isContained={true}
                      color="#ffffff"
                    />
                  </Box>
                )}
                <Box mt="16px">
                  <CustomLargeButton
                    // onClickFunc={handleClickOpen}
                    onClickFunc={handleCancelSubscriptionModalOpen}
                    // variant="contained"
                    variant="outlined"
                    title="Cancel Subscription"
                    isContained={false}
                    borderColor="1px solid #DD7474"
                    color="#DD7474"
                  />
                </Box>

                <Box mt="16px">
                  <CustomLargeButton
                    onClickFunc={handleClickOpenRefund}
                    // variant="contained"
                    variant="outlined"
                    title="Issue Refund"
                    isContained={false}
                    borderColor="1px solid #6A82CF"
                    color="#6A82CF"
                  />
                </Box>
              </Box>

              <Box></Box>
            </Grid>
            <Box>
              {/* {open ? <CancelSubscriptionComp open={open} setOpen={setOpen} /> : ""} */}

              {pauseSubscriptionModalOpen ? (
                <CustomizedModal
                title="Pause Subscription"
                aria-labelledby="customized-dialog-title"
                open={pauseSubscriptionModalOpen}
                handleClose={handlePauseSubscriptionModalClose}
                isActionShown={false}
                >
                  <Box sx={{my:"20px",minWidth:{xs:"310px",sm:"400px",md:"500px"},mb:"20px"}}>
                    <PauseSubscriptions
                    // handleModalClose={handleCancelSubscriptionModalClose}
                    handleModalClose={handlePauseSubscriptionModalClose}
                    refetchAllSubscriptionsData={getSubscriptionDetailData}
                    // selectedsubscription={selectedsubscription}
                    selectedsubscription={subscriptionDetailData}
                    />
                  </Box>
                </CustomizedModal>
              ) : (
                ""
              )}


              {openRefund ? (
                <IssueRefund open={openRefund} setOpen={setOpenRefund} />
              ) : (
                ""
              )}

              {/* {openPause ? (
               <PauseSubscription open={openPause} setOpen={setOpenPause} selectedsubscription={selectedsubscription} /> */}
               
              {cancelSubscriptionModalOpen ? (
                <CustomizedModal
                title="Cancel Subscription"
                aria-labelledby="customized-dialog-title"
                open={cancelSubscriptionModalOpen}
                handleClose={handleCancelSubscriptionModalClose}
                isActionShown={false}
                >
                  <Box sx={{my:"20px",minWidth:{xs:"310px",sm:"400px",md:"500px"},mb:"20px"}}>
                    <CancelSubscriptions
                    handleModalClose={handleCancelSubscriptionModalClose}
                    refetchAllSubscriptionsData={getSubscriptionDetailData}
                    // selectedsubscription={selectedsubscription}
                    selectedsubscription={subscriptionDetailData}
                    />
                  </Box>
                </CustomizedModal>
              ) : (
                ""
              )}
            </Box>
          </Box>
        </>
      }
    </Box>
    </>
  );
};

export default OrderDetailsMainBox;
