import React, { useContext } from "react";
import Box from "@mui/material/Box";
import CustomBreadcrumbs from "../../../../components/CustomBreadcrumbs"
import DriverContext from "../../../../contexts/DriverContext/DriverContext";


function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}



const DriverReqDetailBreadcrumbs = () => {

  const driverContextval = useContext(DriverContext)

  const breadcrumbsLinksDataArr = [
    {
      text: "Driver",
      url: "#",
    },
    {
      text: "Approval Request",
      url: "#",
    },
  ];

  return (
    <>
      <Box width="100%" pl="20px" pb="20px">
        <CustomBreadcrumbs
          typographyText="Chef Juna Catering"
          breadcrumbsLinksArr={breadcrumbsLinksDataArr}
          clickHandler={driverContextval?.closeDriverRequestDetail && driverContextval?.closeDriverRequestDetail}
        />
      </Box>
    </>
  );
};

export default DriverReqDetailBreadcrumbs;
