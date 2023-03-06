import React, { useState } from "react";
import { styled, Button } from "@mui/material";
import Box from "@mui/material/Box";
import { CustomerDetailMainCard } from "../../../Customer/components/CustomerDetail/CustomerDetailMainCard";
import { CustomLongButton } from "../../../Customer/components/CustomerDetail/CustomLongButton";
import { CustomerDetail_MapSec } from "../../../Customer/components/CustomerDetail/CustomerDetail_MapSec";
import { ThreeDotsButton } from "../../../Customer/components/CustomerDetail/ThreeDotsButton";
import { Grid, Typography } from "@mui/material";
import { CateringChart2 } from "../../../Caterer/components/CateringChart/CateringChart2";
import { useCreateNoteMutation } from "../../../../api/notes";
import { useNavigate } from "react-router-dom";
import { useUpdateDriverRequestStatusMutation } from "api/drivers";

// const SubscriptionMainCardData = [
//   {
//     heading: "Order #1020",
//     subHeading: "Estimate delivered at 10:00 Am",
//     ChipTitle: "Online",
//     image: "./assets/images/iMacMemoji.svg",
//     title: "Mohammed Bairos",
//     sheduledSubTitle: "Last Login : 10 Feb 2020",
//     dateSubTitle: "13 Oct - 23 Nov 2021",
//     timeSubTitle: "02:00 Am",
//     deliveryStatusTitle: "In Delivery",
//     singleIdTitle: "ECD - 12345",
//   },
// ];

const MainBox = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: "16px",
  border: "1px solid #E1E1E6",
  borderRadius: "6px",
}));


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



export const DriverDetailsMainBox = ({driverDetailData,refetchDriverDetailData}) => {
// export const DriverDetailsMainBox = ({driverDetailData, note, setNote,createAdminNote,isLoading}) => {

const navigate = useNavigate();

const [updateDriverRequestStatus, resdata] = useUpdateDriverRequestStatusMutation()

  const [createNote, respdata] = useCreateNoteMutation()
  const [note, setNote] = useState("");

  const SubscriptionMainCardData = [
    {
      heading: "Order #1020",
      subHeading: "Estimate delivered at 10:00 Am",
      ChipTitle: `${driverDetailData?.status !== undefined ? driverDetailData?.status : `no data`}`,
      // ChipTitle: `${driverDetailData?.online === true? `Online` : `Offline`}`,
      image: "./assets/images/iMacMemoji.svg",
      title: `${driverDetailData?.firstName? `${driverDetailData?.firstName} ${driverDetailData?.lastName}` : 'no data' }`,
      sheduledSubTitle: "Last Login : 10 Feb 2020",
      dateSubTitle: "13 Oct - 23 Nov 2021",
      timeSubTitle: "02:00 Am",
      deliveryStatusTitle: "In Delivery",
      singleIdTitle: `${driverDetailData?.driverId? driverDetailData?.driverId : 'no data' }`,
    },
  ];

  const updateDriverStatusFunc = (status)=> {
    updateDriverRequestStatus({id:driverDetailData?._id ,status:status}).then((res) => {
      if (res.data){
        console.log("res.data updateDriverRequestStatus ", res?.data);
      }
    })
  }

  const createAdminNote = () => {
    // createNote({description:note ,userId:catererContextval?.state?.selectedRowData?._id }).then((res) => {
    createNote({description:note ,userId:driverDetailData?._id }).then((res) => {
      if (res.data){
        swal("Success!", `${res.data.message}`, "success");
        setNote("")
      }
    });
  }

  return (
    <div>
      <MainBox>
        <Box>
          {SubscriptionMainCardData.map((item,i) => {
            return (
                <CustomerDetailMainCard item={item} key={i}/>
            );
          })}
        </Box>

        <Box>
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
                  updateStatus={updateDriverStatusFunc} 
                  refetchDetailData={refetchDriverDetailData}
                  />
                </Box>
              </Box>
        </Box>
          </Box>

          <Box mt="16px">
            <CustomerDetail_MapSec data={driverDetailData} note={note} setNote={setNote} btnOnClick={createAdminNote} isLoading={respdata.isLoading}/>
          </Box>


          <Box>
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
              <Typography sx={Typo1}>{driverDetailData?.earning? `$${Number(driverDetailData?.earning).toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 })}` : 'no data'}</Typography>
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
 
              <CateringChart2 />
            </Box>
          </Box>
          </Box>

      </MainBox>
    </div>
  );
};
