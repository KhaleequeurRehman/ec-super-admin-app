import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { DriverOrderHistoryCard } from "./DriverOrderHistoryCard";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import { styled } from "@mui/material";

const MainBox = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: "16px",
  border: "1px solid #E1E1E6",
  borderRadius: "6px",
}));

const Data = [
  {
    mainTitle: "Today",
    mainsubTitle: "Upcoming",
    chipTitle: "In Delivery",
    timeSchedule: "12:00 - 03.00 Pm",
    dateSchedule: "Friday, 22 Nov 2021",
    title: "Delivering 40 orders",
    subTitle: "From",
    textBtnName: "Chef Juna Catering",
    containedBtn1: "Track Order",
    // containedBtn2: "Optimize Quantity",
    OutlinedBtn1: "Details",
    alertTitle: "Over Limit",
    // alertIcon: true,
    // checkIcon: true,
  },
  {
    mainsubTitle: "Upcoming",
    timeSchedule: "12:00 - 03.00 Pm",
    dateSchedule: "Friday, 22 Nov 2021",
    title: "Delivering 40 orders",
    subTitle: "From",
    textBtnName: "Chef Juna Catering",
    containedBtn2: "Optimize Quantity",
    alertTitle: "Over Limit",
    alertIcon: true,
  },
  {
    timeSchedule: "12:00 - 03.00 Pm",
    dateSchedule: "Friday, 22 Nov 2021",
    title: "Delivering 40 orders",
    subTitle: "From",
    textBtnName: "Chef Juna Catering",
    OutlinedBtn1: "Details",
    alertTitle: "Over Limit",
    checkIcon: true,
  },
  {
    timeSchedule: "12:00 - 03.00 Pm",
    dateSchedule: "Friday, 22 Nov 2021",
    title: "Delivering 40 orders",
    subTitle: "From",
    textBtnName: "Chef Juna Catering",
    OutlinedBtn1: "Details",
    alertTitle: "Over Limit",
    checkIcon: true,
  },
  {
    timeSchedule: "12:00 - 03.00 Pm",
    dateSchedule: "Friday, 22 Nov 2021",
    title: "Delivering 40 orders",
    subTitle: "From",
    textBtnName: "Chef Juna Catering",
    OutlinedBtn1: "Details",
    alertTitle: "Over Limit",
    checkIcon: true,
  },
];

export const DriverHistoryMainBox = ({driverDetailData}) => {
  
  return (
    <div>
      {Data.map((item,index) => {
        return (
            <Box key={index}>
              <DriverOrderHistoryCard item={item} key={index} />
            </Box>
        );
      })}
    </div>
  );
};
