import React from "react";
import Box from "@mui/material/Box";
import { styled, Typography, Button } from "@mui/material";
import DeliveryStatus from "../../../../../components/DeliveryStatus";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const MainBox = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: "16px",
  border: "1px solid #E1E1E6",
  borderRadius: "6px",
}));

const Typo1 = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "19.6px",
  color: "#9EA3AE",
  letter: "1.5%",
}));
const Typo2 = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "25.6px",
  color: "#1A1824",
  letter: "1.5%",
}));

const Typo3 = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "25.6px",
  color: "#DD7474",
  letter: "1.5%",
}));

const Button1 = styled(Button)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: "400",
  color: "#2B817B",
  lineHeight: "25.6px",
  letter: "1.5%",
  textDecoration: "underline",
  textTransform: "capitalize",
}));

const Button2 = styled(Button)(({ theme }) => ({
  fontFamily: "Outfit",
  fontWeight: 600,
  fontSize: "14px",
  color: "#FFFFFF",
  lineHeight: "20px",
  textTransform: "capitalize",
  backgroundColor: "#2B817B",
  padding: "10px, 16px, 10px, 16px",
  borderRadius: "4px",
  width: "109px",
  height: "40px",
  "&:hover": {
    backgroundColor: "#2B817B",
  },
}));

const Button3 = styled(Button)(({ theme }) => ({
  fontFamily: "Outfit",
  fontWeight: 600,
  fontSize: "14px",
  color: "#2B817B",
  lineHeight: "20px",
  textTransform: "capitalize",
  padding: "10px, 16px, 10px, 16px",
  borderRadius: "4px",
  borderColor: "#2B817B",
  width: "109px",
  height: "40px",
  "&:hover": {
    borderColor: "#2B817B",
  },
}));

const Button4 = styled(Button)(({ theme }) => ({
  fontFamily: "Outfit",
  fontWeight: 600,
  fontSize: "14px",
  // color: variantType==="outlined" ? "#2B817B" : "#FFFFFF",
  color: "#FFFFFF",
  lineHeight: "20px",
  textTransform: "capitalize",
  // backgroundColor: variantType==="outlined" ? "" : "#2B817B",
  backgroundColor: "#FAA641",
  padding: "10px, 16px, 10px, 16px",
  borderRadius: "4px",
  // borderColor: "#2B817B",
  width: "150px",
  height: "40px",
  "&:hover": {
    //   backgroundColor: variantType==="outlined" ? "" : "#2B817B",
    //   backgroundColor: "#2B817B",
    //   borderColor: variantType==="outlined" ? "#2B817B" : "",
  },
}));

const TypoTitle1 = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  fontWeight: "500",
  lineHeight: "26px",
  color: "#1A1824",
  letter: "1.5%",
}));

const TypoTitle2 = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "26px",
  color: "#1A1824",
  letter: "1.5%",
}));

export const DriverOrderHistoryCard = ({ item }) => {
  return (
    <div>
      <Box>
        <Box mb="12px" mt="16px">
          <TypoTitle1>{item.mainTitle}</TypoTitle1>
        </Box>

        <Box mb="12px" mt="24px">
          <TypoTitle2>{item.mainsubTitle}</TypoTitle2>
        </Box>

        <MainBox>
          <Box sx={{ display: "flex", alignItems: "center" }}>
           {item.chipTitle ? 
           ( <Box>
            <DeliveryStatus
              variant="blue"
              my={0}
              text={item.chipTitle}
              mr={"16px"}
            />
          </Box>) : (
             <Box sx={{ display: "flex", alignItems: "center" }}>
             <Box>
               <Typo1>{item.dateSchedule}</Typo1>
             </Box>
             <Box ml="16px" mr="16px">
               <img
                 src="./assets/images/Ellipse 60.svg"
                 alt=""
                 width="8px"
                 height="8px"
               />
             </Box>
           </Box>
          )
           
           }
           

            <Box>
              <Typo1>{item.timeSchedule}</Typo1>
            </Box>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Box mt="32px" sx={{ display: "flex" }}>
                <Box>
                  <Typo2>{item.title}</Typo2>
                </Box>
                {item.alertIcon && (
                <>
                <Box>
                  <Typo3 ml="8px">{item.alertTitle}</Typo3>
                </Box>

                
                  <Box ml="10px">
                    <ErrorOutlineIcon sx={{ fill: "#DD7474" }} />
                  </Box>
                </>
                )}

                {item.checkIcon && (
                  <Box ml="8px">
                    <CheckCircleOutlineIcon sx={{ fill: "#42C677" }} />
                  </Box>
                )}
              </Box>

              <Box sx={{ display: "flex" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typo1>{item.subTitle}</Typo1>
                </Box>
                <Box ml="8px">
                  <Button1
                    variant="text"
                    color="primary"
                    sx={{ padding: "0px", minWidth: "0px", minHeight: "0px" }}
                  >
                    {item.textBtnName}
                  </Button1>
                </Box>
              </Box>
            </Box>

            <Box sx={{ display: "display", alignItems: "flex-start" }}>
              {item.containedBtn1 && (
                <Box>
                  <Button2 variant="contained" color="primary">
                    {item.containedBtn1}
                  </Button2>
                </Box>
              )}

              {item.OutlinedBtn1 && (
                <Box mt="8px" sx={{display: "flex", alignItems: "flex-end"}}>
                  <Button3 variant="outlined" color="primary">
                    {item.OutlinedBtn1}
                  </Button3>
                </Box>
              )}

              {item.containedBtn2 && (
                <Box>
                  <Button4 variant="contained" color="primary">
                    {item.containedBtn2}
                  </Button4>
                </Box>
              )}
            </Box>
          </Box>
        </MainBox>
      </Box>
    </div>
  );
};
