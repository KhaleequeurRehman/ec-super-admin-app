import React from "react";
import Box from "@mui/material/Box";
import CustomBreadcrumbs from "../../../components/CustomBreadcrumbs";
import OrderDetailsMainBox from "../../Subscription/Component/OrderDetails/OrderDetailsMainBox";

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
    timeSubTitle: "02:00 Am",
    deliveryStatusTitle: "In Delivery",
  },
];

const EventOrderDetail = () => {
  const breadcrumbsLinksDataArr = [
    {
      text: "Single Order",
      url: "#",
    },
    // {
    //   text: "Delivery Details",
    //   url: "#",
    // },
  ];

  return (
    <>
      <Box width="100%" p="20px">
        <CustomBreadcrumbs
          typographyText="Order Details"
          breadcrumbsLinksArr={breadcrumbsLinksDataArr}
          clickHandler={handleClick}
        />
        <OrderDetailsMainBox
          SubscriptionMainCardData={SubscriptionMainCardData}
          hasPauseButton={false}
          hasEventBox={true}
          hasDisposanle={true}
          hasCustomerNotes={true}
        />
      </Box>
    </>
  );
};

export default EventOrderDetail;
