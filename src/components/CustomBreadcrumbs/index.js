import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const breadcrumbsLinkStyles = {
    fontSize: "14px",
    fontWeight: "400",
  };
  const breadcrumbsTypographyStyles = {
    color: "#9EA3AE",
    fontSize: "14px",
    fontWeight: "400",
  };
  
  const breadcrumbsStyles = {
    color: "#2B817B",
    padding: "10px 0",
  };

 

const CustomBreadcrumbs = ({clickHandler,breadcrumbsLinksArr,typographyText}) => {
  
  const breadcrumbs = breadcrumbsLinksArr && breadcrumbsLinksArr.map((currrentItem,index) => (

    <Link
      underline="hover"
      key={index+1}
      color="inherit"
      // href={currrentItem.url}
      sx={breadcrumbsLinkStyles}
      onClick={clickHandler && clickHandler}
    >
      {currrentItem.text}
    </Link>
    
  ))
    


  return (
    <>
        <Stack spacing={2}>
        <Breadcrumbs
          separator={
            <NavigateNextIcon fontSize="small" sx={{ color: "#2B817B" }} />
          }
          aria-label="breadcrumb"
          sx={breadcrumbsStyles}
        >
          {breadcrumbs}
          {
            typographyText && 
              <Typography key={breadcrumbsLinksArr? (breadcrumbsLinksArr.length>0? breadcrumbsLinksArr.length+1 : 0) : 0} sx={breadcrumbsTypographyStyles}>
                {typographyText && typographyText}
              </Typography>
          }
        </Breadcrumbs>
      </Stack>
    </>
  )
}

export default CustomBreadcrumbs