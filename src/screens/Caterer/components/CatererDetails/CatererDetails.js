import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { CatererDetailsMainCard } from "./CatererDetailsMainCard";
import { CustomerDetailMainCard } from "../../../Customer/components/CustomerDetail/CustomerDetailMainCard";
import { CustomLongButton } from "../../../Customer/components/CustomerDetail/CustomLongButton";
import { ThreeDotsButton } from "../../../Customer/components/CustomerDetail/ThreeDotsButton";
import { CustomerDetail_MapSec } from "../../../Customer/components/CustomerDetail/CustomerDetail_MapSec";
import { SubscriptionCard } from "../../../Subscription/Component/SubscriptionCard";
import { Grid, Typography, Button } from "@mui/material";
import { CustomerHeader } from "../../../Customer/components/CustomerHeader";
import CatererDetailsDataGrid from "./CatererDetailsDataGrid";
import { CateringChart } from "../CateringChart/CateringChart";
import CatererBreadcrumbs from "./CatererBreadcrumb/CatererBreadcrumbs";
import { CateringChart2 } from "../CateringChart/CateringChart2";
import { useGetCatererDetailMutation, useUpdateCatererStatusMutation } from "../../../../api/caterers";
import { useCreateNoteMutation } from "../../../../api/notes";
import CatererContext from "../../../../contexts/CatererContext/CatererContext";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";



const CardBox = {
  width: "100%",
  // padding: "16px",
  paddingLeft: "16px",
  paddingRight: "16px",
  paddingBottom: "16px",
  border: "1px solid #E1E1E6",
  borderRadius: "8px",
};

const Button1 = {
  fontSize: "14px",
  fontWeight: "400",
  color: "#2B817B",
  lineHeight: "22.4px",
  letter: "1.5%",
  textDecoration: "underline",
  textTransform: "capitalize",
};

const Button2 = {
  fontSize: "12px",
  fontWeight: "600",
  color: "#545359",
  border: "1px solid #F6F6F6",
  borderRadius: "6px",
  width: "81px",
  height: "26px",
  lineHeight: "22.4px",
  letter: "1.5%",
  textTransform: "capitalize",

  ":hover": {
    border: "1px solid #F6F6F6",
  },
};

const Typo1 = {
  fontSize: "20px",
  fontWeight: "600",
  lineHeight: "32px",
  color: "#1A1824",
  letter: "1.5%",
};

const Typo2 = {
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "20px",
  color: "#9EA3AE",
  letter: "1.5%",
};



const Typo3 = {
  fontSize: "12px",
  fontWeight: "500",
  lineHeight: "16px",
  color: "#9EA3AE",
  letter: "1.5%",
};


const Typo4 = {
  fontSize: "18px",
  fontWeight: "500",
  lineHeight: "26.1px",
  color: "#1A1824",
  letter: "1.5%",
};


export const CatererDetails = () => {

  const navigate = useNavigate();

  const catererContextval = useContext(CatererContext)

  const [getCatererDetail, resdata] = useGetCatererDetailMutation()

  const [updateCatererStatus, responsedata] = useUpdateCatererStatusMutation()

  const [createNote, respdata] = useCreateNoteMutation()

  const [catererDetailData, setCatererDetailData] = useState("");
  const [note, setNote] = useState("");
  

  const getCatererDetailData = ()=> {
    getCatererDetail({ id:catererContextval?.state?.selectedRowData?._id }).then((res) => {
      if (res.data){
        console.log("res.data catererDetailData ", res?.data?.details);
        setCatererDetailData(res?.data?.details)
      }
    });
  }


  const updateCatererStatusFunc = (status)=> {
    updateCatererStatus({id:catererContextval?.state?.selectedRowData?._id ,status:status}).then((res) => {
      if (res.data){
        console.log("res.data updateCatererStatusData ", res?.data);
      }
    })
  }


const createAdminNote = () => {
  createNote({description:note ,userId:catererContextval?.state?.selectedRowData?._id }).then((res) => {
    if (res.data){
      swal("Success!", `${res.data.message}`, "success");
      setNote("")
    }
  });
}
  
  useEffect(() => {
    getCatererDetailData()
  }, [])


  // const SubscriptionMainCardData = [
  //   {
  //     heading: "Order #1020",
  //     subHeading: "Estimate delivered at 10:00 Am",
  //     ChipTitle: "Active",
  //     image: "./assets/images/iMacMemoji.svg",
  //     title: "Mohammed Bairos",
  //     sheduledSubTitle: "Last Login : 10 Feb 2020",
  //     dateOrTimeSubTitle: "01 : 02 Pm",
  //     SingleId: "ECC - 12345",
  //     // titleWithIcon: "Created : 16 August 2021",
  //     // icon: "./assets/images/calendar.svg"
  //     // timeSubTitle:"02:00 Am",
  //     // deliveryStatusTitle: "In Delivery",
  //   },
  // ];
  const SubscriptionMainCardData = [
    {
      heading: "Order #1020",
      subHeading: "Estimate delivered at 10:00 Am",
      ChipTitle: catererDetailData?.data?.status || 'no data',
      image: "./assets/images/iMacMemoji.svg",
      title: catererDetailData?.data?.merchantName || 'no data',
      sheduledSubTitle: "Last Login : 10 Feb 2020",
      dateOrTimeSubTitle: "01 : 02 Pm",
      SingleId: catererDetailData?.data?.catererId || 'no data',
    },
  ];


  // const CardData = [
  //   {
  //     title: "5012",
  //     subTitle: "Active Subscription",
  //     image: "./assets/images/Frame 712.svg",
  //     textButtonTitle: "See Details",
  //     exponentTitle: "+ 5",
  //   },
  
  //   {
  //     title: "512",
  //     subTitle: "Subscription Request",
  //     image: "./assets/images/frame512.svg",
  //     textButtonTitle: "See Details",
  //   },
  
  //   {
  //     title: "420",
  //     subTitle: "Order Complete",
  //     image: "./assets/images/frame420.svg",
  //     textButtonTitle: "See Details",
  //     exponentTitle: "+ 5",
  //   },
  // ];

  const CardData = [
    {
      title: catererDetailData?.active!==undefined ? catererDetailData?.active : 'no data',
      subTitle: "Active Subscription",
      image: "./assets/images/Frame 712.svg",
      textButtonTitle: "See Details",
      exponentTitle: "+ 5",
      btnOnClickHandler:()=> navigate("/subscription")
      // btnOnClickHandler:()=> catererContextval?.openNewCatererRequest()
    },
  
    {
      title: catererDetailData?.request!==undefined ? catererDetailData?.request : 'no data',
      subTitle: "Subscription Request",
      image: "./assets/images/frame512.svg",
      textButtonTitle: "See Details",
      btnOnClickHandler:()=> navigate("/subscription")
      // btnOnClickHandler:()=> catererContextval?.openNewCatererRequest()
    },
  
    {
      title: catererDetailData?.complete!==undefined ? catererDetailData?.complete : 'no data',
      subTitle: "Order Complete",
      image: "./assets/images/frame420.svg",
      textButtonTitle: "See Details",
      exponentTitle: "+ 5",
      btnOnClickHandler:()=> navigate("/subscription")
      // btnOnClickHandler:()=> catererContextval?.openNewCatererRequest()
    },
  ];
  
  console.log("note ",note)
  
  return (
      <>
    <div>

      <Box><CatererBreadcrumbs/></Box>
      
      <Box sx={{ display: "flex", flexDirection: {lg: "row", md: "row", sm: "column", xs: "column"} }}>
        <Box sx={CardBox} width="100%">
          <Box>
            <Box>
              {SubscriptionMainCardData.map((item,i) => {
                return (
                    <CustomerDetailMainCard item={item} key={i} />
                );
              })}
            </Box>

            <Box width="100%" pr="16px">
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box width="100%">
                  <CustomLongButton
                    variant={"contained"}
                    title={"Send Message"}
                    isContained
                    color={"#ffffff"}
                    image={"./assets/images/message-text.svg"}
                    onClickFunc={() => navigate("/inbox")}
                  />
                </Box>
                <Box ml="16px">
                  <ThreeDotsButton 
                  IsCatererButtonMenu={true}
                  updateStatus={updateCatererStatusFunc} 
                  refetchDetailData={getCatererDetailData}
                  />
                </Box>
              </Box>
            </Box>
          </Box>

          <Box mt="16px">
            <CustomerDetail_MapSec data={catererDetailData?.data} note={note} setNote={setNote} btnOnClick={createAdminNote} isLoading={respdata.isLoading} />
          </Box>
        </Box>

        <Box ml="20px" width="100%">
          <Box>
            <Grid
              container
              spacing={1}
              sx={{
                display: "flex",
                flexDirection: "row",
                // justifyContent: "center",
              }}
            >
              {CardData.map((item, i) => {
                return (
                    <Grid xl={4} item lg={4} md={4} sm={6} xs={12} key={i}>
                      {/* <SubscriptionCard item={item} titleMarginTop="32px" /> */}
                      <SubscriptionCard item={item} btnOnClickHandler={item?.btnOnClickHandler} titleMarginTop="32px" />
                    </Grid>
                );
              })}
            </Grid>
          </Box>

          <Box mt="24px" sx={CardBox}>
            <Box mt="16px" sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box >
                <Typography sx={Typo4}>Caterer Earnings</Typography>
              </Box>
              <Box>
                <Button sx={Button1} variant="text">
                  Transaction History
                </Button>
              </Box>
            </Box>

            <Box>
              <Typography sx={Typo1}>$ 5000</Typography>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Typography sx={Typo2}>From all order</Typography>
              </Box>

              <Box sx={{ display: "flex" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography sx={Typo3}>Sort by :</Typography>
                </Box>

                <Box ml="4px">
                  <Button sx={Button2} variant="outlined">
                    Monthly
                    <Box
                      ml="4px"
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <img
                        src="./assets/images/GreenArrow-down.svg"
                        alt=""
                        width="16px"
                        height="16px"
                      />
                    </Box>
                  </Button>
                </Box>
              </Box>
            </Box>

            <Box mt="55px">
              {/* <Box sx={{ 
                width: "100%",
              //  height: "256px",
               height: "auto",
             }}>
                <img
                  src="./assets/images/Frame 1063.png"
                  alt=""
                  width="100%"
                  height="auto"
                />
              </Box> */}
              {/* <CateringChart /> */}
              <CateringChart2 />
            </Box>
          </Box>
        </Box>
      </Box>



      <Box mt="24px">
      <Box mb="12px">
        <CustomerHeader
          title={"Menu"}
          hasNotificationButton={false}
          hasTextButtonTitle1={"Last Added"}
          hasTextButtonTitle2={"Any Status"}
          hasTextButtonTitle3={"All Cuisines"}
          hasFilterBtn={false}
          // openFilter={openFilter}
          // setOpenFilter={setOpenFilter}
          // handleClickFilter={handleClickFilter}
        />
      </Box>


      <Box>
        <CatererDetailsDataGrid/>
      </Box>
      </Box>





    </div>
      </>
  );
};
