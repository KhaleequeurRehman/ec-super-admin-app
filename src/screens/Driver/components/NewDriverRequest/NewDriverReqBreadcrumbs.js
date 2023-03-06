import React, { useContext } from "react";
import Box from "@mui/material/Box";
import CustomBreadcrumbs from "../../../../components/CustomBreadcrumbs";
import DriverContext from "../../../../contexts/DriverContext/DriverContext";


function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}



const NewDriverBreadcrumbs = () => {

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
      <Box width="100%" >
        <CustomBreadcrumbs
          typographyText="Approval Request"
          breadcrumbsLinksArr={breadcrumbsLinksDataArr}
          clickHandler={driverContextval?.closeNewDriverRequest && driverContextval?.closeNewDriverRequest}
        />
      </Box>
    </>
  );
};

export default NewDriverBreadcrumbs;
