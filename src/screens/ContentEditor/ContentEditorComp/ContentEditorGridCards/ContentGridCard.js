import React from "react";
import Box from "@mui/material/Box";
import { styled, Typography } from "@mui/material";
import { H1Typo, H3Typo, LightTitle, LightTitle2 } from "../../../../components/Typography"
import { ContentThreedDotsBtn } from "./ContentThreedDotsBtn";

const MainBox = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: "16px",
  border: "1px solid #E1E1E6",
  borderRadius: "6px",
}));


const Typo1 = styled(Typography)(({ color = "#9EA3AE", theme }) => ({
    fontFamily: theme.typography.fontFamily,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "12px",
    letterSpacing: "0.015em",
    color,
  }));
  
export const ContentGridCard = ({item}) => {
  return (
    <div>
      <MainBox sx={{ display: "flex", flexDirection:{lg: "row", md: "row", sm: "row", xs: "column"} }}>
        <Box sx={{display: "flex", justifyContent: "space-between"}}>
        <Box width="84px" height="84px">
          <img
            src={item.image}
            alt=""
            width="100%"
            height="auto"
          />
        </Box>
        <Box sx={{display: {lg: "none", md: "none", sm: "none", xs: "block"}}}>
            <Typo1>{item.faqTitle}</Typo1>
            <Box mt="15px"><ContentThreedDotsBtn/></Box>
          </Box>
        </Box>
        <Box sx={{display: "flex", justifyContent: "space-between", width: "100%"}}>
          <Box sx={{ ml: {lg: "16px", md: "16px", sm: "16px", xs: "0px"}, mt: {lg: "0px", md: "0px", sm: "0px", xs: "16px"}, display: "flex", flexDirection: "column",  }}>
            <Box>
              <H3Typo>{item.title}</H3Typo>
              <LightTitle>
               {item.subTitle}
              </LightTitle>
            </Box>

            <Box mt="21px">
              <Typo1>{item.timeTitle}</Typo1>
            </Box>
          </Box>

          <Box sx={{display: {lg: "block", md: "block", sm: "block", xs: "none"}}}>
            <Typo1>{item.faqTitle}</Typo1>
            <Box mt="15px"><ContentThreedDotsBtn/></Box>
          </Box>


        </Box>
      </MainBox>
    </div>
  );
};
