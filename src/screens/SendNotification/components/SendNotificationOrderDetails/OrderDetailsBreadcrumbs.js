import React from "react";
import Box from "@mui/material/Box";
import CustomBreadcrumbs from "../../../../components/CustomBreadcrumbs";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const SubscriptionMainCardData = [
  {
    heading: "Order #1020",
    subHeading: "Estimate delivered at 10:00 Am",
    ChipTitle: "Personal subscription",
    image: "./assets/images/iMacMemoji.svg",
    title: "Arabian Kebab, Middle East Special",
    sheduledSubTitle: "Scheduled",
    dateSubTitle: "13 Oct - 23 Nov 2021",
    // timeSubTitle="02:00 Am",
    deliveryStatusTitle: "In Delivery",
  },
];

const OrderDetailsBreadcrumbs = ({setIsShownSendNotificationOrderDetails}) => {
  const breadcrumbsLinksDataArr = [
    {
      text: "Send Notification",
      url: "#",
    },
    // {
    //   text: "Delivery Details",
    //   url: "#",
    // },
  ];

  return (
    <>
      <Box width="100%" pl="20px" pb="20px">
        <CustomBreadcrumbs
          typographyText="New Notification"
          breadcrumbsLinksArr={breadcrumbsLinksDataArr}
          // clickHandler={handleClick}
          clickHandler={()=> setIsShownSendNotificationOrderDetails(false)}
        />
      </Box>
    </>
  );
};

export default OrderDetailsBreadcrumbs;
