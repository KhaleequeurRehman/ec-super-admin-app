import React, { useContext } from "react";
import Box from "@mui/material/Box";
import CustomBreadcrumbs from "../../../../components/CustomBreadcrumbs"
import DriverContext from "../../../../contexts/DriverContext/DriverContext";


function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}



const DriverDetailsBreadcrumbs = () => {

  const driverContextval = useContext(DriverContext)

  const breadcrumbsLinksDataArr = [
    {
      text: "Driver",
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
          typographyText="Muhammed Bairos"
          breadcrumbsLinksArr={breadcrumbsLinksDataArr}
          clickHandler={driverContextval?.closeDriverDetail && driverContextval?.closeDriverDetail}
        />
      </Box>
    </>
  );
};

export default DriverDetailsBreadcrumbs;
