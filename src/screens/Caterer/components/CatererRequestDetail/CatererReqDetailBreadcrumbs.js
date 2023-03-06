import React, { useContext } from 'react'
import CustomBreadcrumbs from '../../../../components/CustomBreadcrumbs';
import Box from "@mui/material/Box";
import CatererContext from '../../../../contexts/CatererContext/CatererContext';

export const CatererReqDetailBreadcrumbs = () => {

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
        {
          text: "Approval Request",
          url: "#",
        },
      ];
    
  return (
    <div>
        <>
        <Box width="100%" >
        <CustomBreadcrumbs
          typographyText="Chef Juna Catering"
          breadcrumbsLinksArr={breadcrumbsLinksDataArr}
          clickHandler={catererContextval?.closeCatererRequestDetail}
        //   clickHandler={handleClick}
        />
      </Box>
        </>
    </div>
  )
}
