import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { CustomerChip } from "../../Customer/components/CustomerDetail/CustomerChip";

import { styled, Button } from "@mui/material";

const CardBox = {
  width: "100%",
  padding: "16px",
  border: "1px solid #E1E1E6",
  borderRadius: "6px",
};

const Typo1 = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  fontWeight: "500",
  lineHeight: "26.1px",
  letter: "1.5%",
  color: "#1A1824",
}));

const Typo2 = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "19.6px",
  color: "#9EA3AE",
  letter: "1.5%",
}));

const Typo3 = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  fontWeight: "500",
  lineHeight: "28px",
  letter: "1.5%",
  color: "#1A1824",
}));

const Typo4 = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "24px",
  color: "#9EA3AE",
  letter: "1.5%",
}));

const Button1 = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#6A82CF",
  lineHeight: "24px",
  letter: "1.5%",
  textTransform: "capitalize",
  border: "1px solid #6A82CF",
  padding: "8px, 24px, 8px, 24px",
  width: "332px",
  height: "40px",
};
export const DriverCard = ({item}) => {
  
  return (
    <div>
      <Box sx={CardBox}>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ width: "84px", height: "84px" }}>
            <img
              src={item.image && item.image}
              alt=""
              width="100%"
              height="auto"
            />
          </Box>

          <Box ml="16px">
            <Box>
              <CustomerChip chipTitle={item.chipTitle && item.chipTitle} />
            </Box>

            <Box mt="14px">
              <Typo1>{item.title && item.title}</Typo1>
              <Typo2>{item.subTitle && item.subTitle}</Typo2>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{ display: "flex", mt: "32px", justifyContent: "space-between" }}
        >
          
          {item?.subData && item?.subData.map((val,index) => {
          return(
              <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
            key={index}
          >

            <Typo3>{val.num && val.num}</Typo3>
            <Typo4>{val.numTitle && val.numTitle}</Typo4>
          </Box>
          )
          })}


        </Box>
        {
          
        }
        <Box sx={{ display: "flex", mt: "32px", justifyContent: "center" }}>
          <Button sx={Button1} variant="outlined" color="primary" onClick={item?.btnOnClickHandler && item?.btnOnClickHandler}>
            {item.btnText && item.btnText}
          </Button>
        </Box>
      </Box>
    </div>
  );
};
