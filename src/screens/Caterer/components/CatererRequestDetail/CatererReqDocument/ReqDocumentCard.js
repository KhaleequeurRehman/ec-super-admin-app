import React from "react";
import Box from "@mui/material/Box";
import { styled, Typography, Button } from "@mui/material";

const CardBox = {
  width: "100%",
  padding: "16px",
  border: "1px solid #E1E1E6",
  borderRadius: "8px",
};
const ImgBox = styled("div")(({ theme }) => ({
  width: "60px",
  height: "60px",
  borderRadius: "4px",
  padding: "18px",
  backgroundColor: "#F6F6F6",
}));

const Typo1 = styled("div")(({ theme }) => ({
  fontSize: "14px",
  fontWeight: "600",
  lineHeight: "20px",
  color: "#1A1824",
  letter: "1.5%",
}));

const Typo2 = styled("div")(({ theme }) => ({
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "20px",
  color: "#9EA3AE",
  letter: "1.5%",
}));

const Button1 = {
    fontSize: "16px",
    fontWeight: "400",
    color: "#42C677",
    lineHeight: "16px",
    letter: "1.5%",
    textTransform: "capitalize",
  };

export const ReqDocumentCard = ({item}) => {
  return (
    <div>
      <Box sx={CardBox}>
        <Box sx={{ display: "flex" }}>
          <ImgBox>
            <Box sx={{ width: "24px", height: "24px" }}>
              <img
                src={item.image}
                alt=""
                width="100%"
                height="auto"
              />
            </Box>
          </ImgBox>

          <Box sx={{display: "flex", justifyContent: "space-between", width: "100%"}}>

          <Box ml="16px">
            <Box>
              <Typo1 sx={{ display: "flex", alignItems: "flex-start" }}>
                {item.title}
              </Typo1>
            </Box>
            <Box mt="20px">
              <Typo2>{item.subTitle}</Typo2>
            </Box>
          </Box>

          <Box  sx={{display: "flex", alignItems: "center"}}>
            <Button sx={Button1} variant="text" color="primary">
            {item.textButtonTitle}
            </Button>
          </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
