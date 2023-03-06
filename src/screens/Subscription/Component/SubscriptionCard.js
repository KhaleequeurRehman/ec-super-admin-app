import React from "react";
import Box from "@mui/material/Box";
import { Typography, Button } from "@mui/material";

export const SubscriptionCard = ({ item, titleMarginTop, btnOnClickHandler }) => {

 
  const CardBox = {
    // width: "274px",
    width: "100%",
    // height: "136px",
    padding: "16px",
    border: "1px solid #E1E1E6",
    borderRadius: "6px",
    background:"none"
  };

  const Typo1 = {
    fontSize: "20px",
    fontWeight: "500",
    lineHeight: "28px",
    color: "#000000",
    letter: "1.5%",
  };

  const Typo2 = {
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "19.6px",
    color: "#9EA3AE",
    letter: "1.5%",
  };

  const Typo3 = {
    fontSize: "12px",
    fontWeight: "400",
    lineHeight: "16px",
    color: "#42C677",
    letter: "1.5%",
  };

  const Button1 = {
    fontSize: "14px",
    fontWeight: "400",
    color: "#2B817B",
    lineHeight: "22.4px",
    letter: "1.5%",
    textDecoration: "underline",
    textTransform: "capitalize",
  };

  return (
    <div>
      <Box sx={CardBox} component="button" onClick={item?.onClick}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ width: "40px", height: "40px" }}>
            <img src={item?.image} alt="" width="100%" height="auto" />
          </Box>

          {item.textButtonTitle && (
            <Box>
              <Button sx={Button1} variant="text" color="primary" 
              onClick={btnOnClickHandler && btnOnClickHandler}
              >
                {item?.textButtonTitle}
              </Button>
            </Box>
          )}
        </Box>

        <Box
        //  mt="16px"
        
        sx={{mt: titleMarginTop ? titleMarginTop : "16px"}}
        >
          <Box sx={{ display: "flex" }}>
            <Box>
              <Typography sx={Typo1}>{item?.title}</Typography>
            </Box>
            {item.exponentTitle && (
              <Box ml="4px">
                <Typography sx={Typo3}>{item?.exponentTitle}</Typography>
              </Box>
            )}
          </Box>
          <Typography sx={Typo2}>{item?.subTitle}</Typography>
        </Box>
      </Box>
    </div>
  );
};
