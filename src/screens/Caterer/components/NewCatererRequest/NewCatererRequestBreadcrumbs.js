import React, { useContext } from 'react'
import CustomBreadcrumbs from '../../../../components/CustomBreadcrumbs';
import Box from "@mui/material/Box";
import CatererContext from '../../../../contexts/CatererContext/CatererContext';

export const NewCatererRequestBreadcrumbs = () => {

  const catererContextval = useContext(CatererContext)


    function handleClick(event) {
        event.preventDefault();
        console.info("You clicked a breadcrumb.");
      }
      
      
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
    <div>
        <>
        <Box width="100%" >
        <CustomBreadcrumbs
          typographyText="Muhammad Bairos"
          breadcrumbsLinksArr={breadcrumbsLinksDataArr}
        //   clickHandler={handleClick}
          clickHandler={()=> {catererContextval?.closeNewCatererRequest()}}
        />
      </Box>
        </>
    </div>
  )
}
