import React from "react";
import Box from "@mui/material/Box";
import { styled, Typography, Button } from "@mui/material";
import { Buttons } from "./Buttons";
import { ReqOwnerCard } from "./ReqOwnerCard";

const Typo1 = {
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "26px",
  color: "#9EA3AE",
  letter: "1.5%",
};

// const ReqOwnerData = [
//   {
//     title: "John Lennon",
//     subTitle: "ID Card : 12345678",
//     image: "./assets/images/iMAcMemojiRed.svg",
//     emailData: [
//       {
//         emailTitle1: "Email Address",
//         email2: "Bairos@gmail.com",
//       },
//       {
//         emailTitle1: "Email Address",
//         email2: "Bairos@gmail.com",
//       },
//     ],
//   },
// ];

export const ReqOwnerInfo = ({data,refetchCatererDetailData}) => {

  const ReqOwnerData = [
    {
      title: data?.owberName || "no data",
      subTitle: `ID Card : ${data?.idCard ? data?.idCard : "no data"}`,
      image: "./assets/images/iMAcMemojiRed.svg",
      emailData: [
        {
          emailTitle1: "Email Address",
          email2: data?.email || "no data",
        },
        {
          emailTitle1: "Email Address",
          email2: data?.email || "no data",
        },
      ],
    },
  ];

  return (
    <div>
      <Box>
        <Buttons data={data} refetchCatererDetailData={refetchCatererDetailData} />

        <Box sx={{ display: "flex", mt: "16px" }}>
          <Box width="30%">
            <Typography sx={Typo1}>Owner Information</Typography>
          </Box>
          <Box width="100%">
            <Box sx={{ width: "100%" }}>
              <img
                src="./assets/images/Vector 85.svg" //lineImg
                alt=""
                width="100%"
                height="auto"
              />
            </Box>
          </Box>
        </Box>

        <Box mt="16px">
          {ReqOwnerData.map((item, index) => {
            return (
              <ReqOwnerCard item={item} key={index}/>
            )
          })}
        </Box>
      </Box>
    </div>
  );
};
