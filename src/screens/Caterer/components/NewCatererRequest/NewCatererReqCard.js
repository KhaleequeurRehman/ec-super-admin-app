import React from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { CustomerChip } from "../../../Customer/components/CustomerDetail/CustomerChip";


export const NewCatererReqCard = ({item}) => {
  const Typo1 = styled(Typography)(({ theme }) => ({
    fontSize: "14px",
    fontWeight: "400",
    color: "#9EA3AE",
    lineHeight: "20px",
    [theme.breakpoints.down('sm')]: {
        fontSize: "12px",
      },
  }));

  const Typo2 = styled(Typography)(({ theme }) => ({
    fontSize: "20px",
    fontWeight: "500",
    color: "#1A1824",
    lineHeight: "28px",
    letterSpacing: "1.5%",
    [theme.breakpoints.down('sm')]: {
        fontSize: "18px",
      },
  }));

  const Button1 = styled(Button)(({ theme }) => ({
    fontSize: "16px",
    fontWeight: "400",
    color: "#2B817B",
    lineHeight: "25.6px",
    letter: "1.5%",
    textDecoration: "underline",
    textTransform: "capitalize",
    [theme.breakpoints.down('sm')]: {
        fontSize: "14px",
      },
}));



  return (
    <div>
      <Box sx={{display: "flex", justifyContent: "space-between"}}>


      <Box sx={{ display: "flex" }}>
       
        <Box sx={{ width: "6px", height: "136px" }}>
        <img src={item?.pipeImg && item?.pipeImg} alt="" width="100%" height="auto" />
      </Box>
        
        

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box ml="16px" sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ width: {lg: "84px", md: "84px", sm: "84px", xs: "74px"}, height: {lg: "84px", md: "84px", sm: "84px", xs: "74px"} }}>
              <img
                src={item?.image && item?.image}
                alt=""
                width="100%"
                height="auto"
              />
            </Box>
          </Box>

          <Box ml="16px">
            <Box mb="12px">
              <CustomerChip chipTitle={item?.chipTitle && item?.chipTitle} />
            </Box>

          {item?.timeSchedule && 
          <Box>
          <Typo1 variant="body1" color="initial">{item?.timeSchedule && item?.timeSchedule}</Typo1>
        </Box>

          }
            
            <Box>
              <Typo1>{item?.scheduleTitle && item?.scheduleTitle}</Typo1>
              <Typo2>{item?.title && item?.title}</Typo2>

              <Box sx={{ display: "flex" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={item?.locationIcon && item?.locationIcon}
                    alt=""
                    width="16px"
                    height="16px"
                  />
                </Box>
                <Typo1 ml="8px">{item?.locationTitle && item?.locationTitle}</Typo1>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box sx={{display: "flex", alignItems: "center"}}>
        <Button1 
        onClick={item?.btnOnClickHandler && item?.btnOnClickHandler}
        // onClick={() => { item?.btnOnClickHandler(); }}
        >
          {item?.textButtonTitle}
        </Button1>
      </Box>
    

      </Box>
    </div>
  );
};
