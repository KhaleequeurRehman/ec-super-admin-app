import React, { useContext } from "react";
import Box from "@mui/material/Box";
import CustomBreadcrumbs from "../../../../../components/CustomBreadcrumbs";
import CatererContext from "../../../../../contexts/CatererContext/CatererContext";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}


const CatererBreadcrumbs = () => {

  const catererContextval = useContext(CatererContext)

  const breadcrumbsLinksDataArr = [
    {
      text: "Caterer",
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
          typographyText="Chef Juna Catering"
          breadcrumbsLinksArr={breadcrumbsLinksDataArr}
          // clickHandler={handleClick}
          clickHandler={catererContextval?.closeCatererDetail && catererContextval?.closeCatererDetail}
        />
      </Box>
    </>
  );
};

export default CatererBreadcrumbs;
