import React, { useState } from "react";
import moment from "moment";
import { CustomerDetailMainCard } from "./CustomerDetailMainCard";
import Box from "@mui/material/Box";
import { styled, Typography, Button } from "@mui/material";
import { CustomLongButton } from "./CustomLongButton";
import { ThreeDotsButton } from "./ThreeDotsButton";
import { TransactionBox } from "./TransactionBox";
import {  CustomerDetail_MapSec } from "./CustomerDetail_MapSec";
import { useCreateNoteMutation } from "api/notes";
import { useNavigate } from "react-router-dom";


const MainBox = styled(Box)(({ theme }) => ({
  borderRadius: "6px",
  padding: "24px",
  width: "100%",
  border: "1px solid #E1E1E6",
  [theme.breakpoints.up("sm")]: {
    //   width: 'auto',
  },
}));

export const CustomerDetailsMainBox = ({customerDetailData}) => {

  const navigate = useNavigate()

  const [createNote, respdata] = useCreateNoteMutation()
  const [note, setNote] = useState("");
  const [cancelSubscriptionModalOpen, setCancelSubscriptionModalOpen] = React.useState(false);

  // const SubscriptionMainCardData = [
  //   {
  //     heading: "Order #1020",
  //     subHeading: "Estimate delivered at 10:00 Am",
  //     ChipTitle: "Active",
  //     image: "./assets/images/iMacMemoji.svg",
  //     title: "Mohammed Bairos",
  //     sheduledSubTitle: "Last Login : 10 Feb 2020",
  //     dateOrTimeSubTitle: "01 : 02 Pm",
  //     singleIdTitle: "UED-12345",
  //     singleIdDate: "Joined : 1 jan 2020"
  //     // timeSubTitle:"02:00 Am",
  //     // deliveryStatusTitle: "In Delivery",
  //   },
  // ];


  const SubscriptionMainCardData = [
    {
      heading: "Order #1020",
      subHeading: "Estimate delivered at 10:00 Am",
      ChipTitle: `${customerDetailData?.user?.status ? customerDetailData?.user?.status : "no data"}`,
      image: "./assets/images/iMacMemoji.svg",
      title: `${customerDetailData?.user?.fullName ? customerDetailData?.user?.fullName : "no data"}`,
      sheduledSubTitle: "Last Login : 10 Feb 2020",
      dateOrTimeSubTitle: "01 : 02 Pm",
      singleIdTitle: "UED-12345",
      singleIdDate: `Joined : ${customerDetailData?.user?.createdAt ? moment(customerDetailData?.user?.createdAt).format('ll').replace(',',"") : 'no data'}`
      // timeSubTitle:"02:00 Am",
      // deliveryStatusTitle: "In Delivery",
    },
  ];
  
  const handleCancelSubscriptionModalClose = () => {
    setCancelSubscriptionModalOpen(false);
  };

  const createAdminNote = () => {
    createNote({description:note ,userId:customerDetailData?.user?._id }).then((res) => {
      if (res.data){
        swal("Success!", `${res.data.message}`, "success");
        setNote("")
      }
    });
  }


  return (
    <div>
      <Box>
        <MainBox>
          {SubscriptionMainCardData.map((item,i) => {
            return (
              //<>
                <CustomerDetailMainCard item={item} key={i} />
              //</>
            );
          })}

          <Box width="100%">
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box width="100%">
                {" "}
                <CustomLongButton
                  variant={"contained"}
                  title={"Send Message"}
                  isContained
                  color={"#ffffff"}
                  image={"./assets/images/message-text.svg"}
                  onClickFunc={()=> navigate("/inbox")}
                />
              </Box>
              <Box ml="16px">
                <ThreeDotsButton IsCustomerButtonMenu={true} />
              </Box>
            </Box>
          </Box>

          <Box mt="24px">
            <TransactionBox data={customerDetailData} />
          </Box>

          <Box mt="28px">
            <CustomerDetail_MapSec data={customerDetailData?.user} note={note} setNote={setNote} btnOnClick={createAdminNote} isLoading={respdata.isLoading} />
          </Box>

          
          <Box mt="16px">

          </Box>
        </MainBox>
      </Box>

      {/* {cancelSubscriptionModalOpen ? (
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
              )} */}
    </div>
  );
};
