import React, { useState } from "react";
import moment from "moment";
import Box from "@mui/material/Box";
import { CustomerDetailMainCard } from "../../../Customer/components/CustomerDetail/CustomerDetailMainCard";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { CustomerDetail_MapSec } from "../../../Customer/components/CustomerDetail/CustomerDetail_MapSec";
import { CatererReqDocument } from "./CatererReqDocument/CatererReqDocument";
import { ReqOwnerInfo } from "./ReqOwnerInfo/ReqOwnerInfo";
import { useCreateNoteMutation } from "api/notes";

const CardBox = {
  width: "100%",
  // padding: "16px",
  paddingLeft: "16px",
  paddingRight: "16px",
  paddingBottom: "16px",
  border: "1px solid #E1E1E6",
  borderRadius: "8px",
};

const Typo1 = {
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "26px",
  color: "#9EA3AE",
  letter: "1.5%",
};

export const RequestMainCard = ({data}) => {

  const [createNote, respdata] = useCreateNoteMutation()
  const [note, setNote] = useState("");

  // const SubscriptionMainCardData = [
  //   {
  //     heading: "Order #1020",
  //     subHeading: "Estimate delivered at 10:00 Am",
  //     ChipTitle: "Pending",
  //     image: "./assets/images/iMacMemoji.svg",
  //     title: "Arabian Kebab, Middle East Special",
  //     // sheduledSubTitle: "Last Login : 10 Feb 2020",
  //     // dateOrTimeSubTitle: "01 : 02 Pm",
  //     // SingleId: "ECC - 12345",
  //     titleWithIcon: "Created : 16 August 2021",
  //     icon: "./assets/images/calendar.svg",
  //     // timeSubTitle:"02:00 Am",
  //     // deliveryStatusTitle: "In Delivery",
  //   },
  // ];
  
  const SubscriptionMainCardData = [
    {
      heading: "Order #1020",
      subHeading: "Estimate delivered at 10:00 Am",
      ChipTitle: data?.status || "no data",
      image: "./assets/images/iMacMemoji.svg",
      title: data?.merchantName || "no data",
      // sheduledSubTitle: "Last Login : 10 Feb 2020",
      // dateOrTimeSubTitle: "01 : 02 Pm",
      // SingleId: "ECC - 12345",
      titleWithIcon: `Created : ${data?.createdAt? moment(data?.createdAt).format('ll').replace(',',""): 'no data'}`,
      icon: "./assets/images/calendar.svg",
      // timeSubTitle:"02:00 Am",
      // deliveryStatusTitle: "In Delivery",
    },
  ];


  const CardData = [
    {
      image: "./assets/images/directbox-notif.svg",
      title: "Business License",
      subTitle: "Chef Juna Business License.jpg",
      textButtonTitle: "View",
    },
    {
      image: "./assets/images/directbox-notif.svg",
      title: "Food Safety Certificate",
      subTitle: "Chef Juna Business License.jpg",
      textButtonTitle: "View",
    },
  ];
  
  const createAdminNote = () => {
    createNote({description:note ,userId:data?._id }).then((res) => {
      if (res.data){
        swal("Success!", `${res.data.message}`, "success");
        setNote("")
      }
    });
  }

// console.log('request main card ', data)
  return (
    <div>
      <Box>

      <Box sx={CardBox}>
        {SubscriptionMainCardData.map((item,index) => {
          return (
              <CustomerDetailMainCard item={item} key={index} />
          );
        })}

        <Box sx={{ display: "flex", }}>
          <Box width="40%">
            <Typography sx={Typo1}>Customer Information</Typography>
          </Box>
          <Box width="100%">
            <Box sx={{ width: "100%" }}>
              <img
                src="./assets/images/Vector 85.svg"
                alt=""
                width="100%"
                height="auto"
              />
            </Box>
          </Box>
        </Box>


        <Box mt="16px">
          <CustomerDetail_MapSec data={data} note={note} setNote={setNote} btnOnClick={createAdminNote} isLoading={respdata.isLoading}/>
        </Box>

        <Box mt="16px">
          <CatererReqDocument Data = {CardData}/>
        </Box>
      </Box>
      
     {/* <Box> <ReqOwnerInfo/></Box> */}
      </Box>
    </div>
  );
};
