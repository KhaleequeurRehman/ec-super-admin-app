import React from "react";
import Box from "@mui/material/Box";
import CustomBreadcrumbs from "../../../../../components/CustomBreadcrumbs";

function handleClick(event) {
// function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}



const UserListBreadcrumbs = ({setShowUserDetail}) => {
  const breadcrumbsLinksDataArr = [
    {
      text: "User",
      url: "#",
    },
    // {
    //   text: "Delivery Details",
    //   url: "#",
    // },
  ];

  return (
    <>
      <Box width="100%" pb="20px">
        <CustomBreadcrumbs
          typographyText="Detail User"
          breadcrumbsLinksArr={breadcrumbsLinksDataArr}
          clickHandler={()=> setShowUserDetail(false)}
          // clickHandler={handleClick}
        />
      </Box>
    </>
  );
};

export default UserListBreadcrumbs;
