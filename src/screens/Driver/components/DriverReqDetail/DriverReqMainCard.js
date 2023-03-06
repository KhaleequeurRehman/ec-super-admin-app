import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { CustomerDetailMainCard } from "../../../Customer/components/CustomerDetail/CustomerDetailMainCard";
import { CustomerDetail_MapSec } from "../../../Customer/components/CustomerDetail/CustomerDetail_MapSec";
import { CatererReqDocument } from "../../../Caterer/components/CatererRequestDetail/CatererReqDocument/CatererReqDocument";
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

export const DriverReqMainCard = ({driverDetailData}) => {

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


  const createAdminNote = () => {
    createNote({description:note ,userId:driverDetailData?._id }).then((res) => {
      if (res.data){
        swal("Success!", `${res.data.message}`, "success");
        setNote("")
      }
    });
  }

  return (
    <div>
      <Box>

      <Box sx={CardBox}>
        {SubscriptionMainCardData.map((item,i) => {
          return (
              <CustomerDetailMainCard item={item} key={i} />
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
          <CustomerDetail_MapSec data={driverDetailData} note={note} setNote={setNote} btnOnClick={createAdminNote} isLoading={respdata.isLoading} />
        </Box>

        {/* <Box mt="16px">
          <CatererReqDocument/>
        </Box> */}
      </Box>
      
     {/* <Box> <ReqOwnerInfo/></Box> */}
      </Box>
    </div>
  );
};
