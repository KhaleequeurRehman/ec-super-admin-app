import React from "react";
import Box from "@mui/material/Box";
// import CustomMediaCard from "../../components/CustomMediaCard";
// import { CustomChip } from "./Component/OrderDetails/CustomChip";
// import DeliveryStatus from "../../components/DeliveryStatus";
import Typography from "@mui/material/Typography";
import DeliveryStatus from "../../../../components/DeliveryStatus";
import { CustomChip } from "../../../Subscription/Component/OrderDetails/CustomChip";

export const CustomerOrderHistoryCard = ({ item }) => {
  const Typo1 = {
    fontSize: {lg: "18px", md: "18px", sm: "18px", xs: "16px"},
    fontWeight: "500",
    lineHeight: {lg: "26.1px", md: "26.1px", sm: "26.1px", xs: "22px"},
    letter: "1.5%",
    color: "#1A1824",
    
  };

  const Typo2 = {
    fontSize: {lg: "14px", md: "14px", sm: "14px", xs: "12px"},
    fontWeight: "400",
    lineHeight: {lg: "19.6px", md: "19.6px", sm: "19.6px", xs: "16px"},
    color: "#9EA3AE",
    letter: "1.5%",
  };

  const Typo3 = {
    fontSize: {lg: "12px", md: "12px", sm: "12px", xs: "10px"},
    fontWeight: "400",
    lineHeight: {lg: "19.6px", md: "19.6px", sm: "19.6px", xs: "16px"},
    color: "#9EA3AE",
    letter: "1.5%",
  };

  const Typo4 = {
    fontSize: {lg: "18px", md: "18px", sm: "18px", xs: "16px"},
    fontWeight: "600",
    lineHeight: "26.1px",
    letter: "1.5%",
    color: "#1A1824",
  };

  return (
    <div>
      <Box sx={{ display: "flex", mb: "16px", mt: "14px", width: "100%" }}>
        <Box>
          <Box
            sx={{
              width: {
                lg: "104px",
                md: "104px",
                sm: "104px",
                xs: "100%",
              },
              height: {
                lg: "104px",
                md: "104px",
                sm: "104px",
                xs: "100%",
              },
            }}
          >
            <img src={item.image} alt="" width="100%" height="auto" />
          </Box>
        </Box>

        <Box pl="12px" sx={{ width: "100%" }}>
          {item.ChipTitle && 
          <CustomChip
          chipTitle={item.ChipTitle}
          height={"24px"}
          borderRadius={"6px"}
          padding={"2px, 8px, 2px, 8px"}
        />
          }

          <Typography sx={Typo1}>{item.title}</Typography>

          <Box sx={{ display: "flex", mt: {lg: "0px", md: "0px", sm: "0px", xs: "6px"} }}>
            <Box sx={{ width: "16px", height: "16px" }}>
              <img
                src={item.iMacIcon}
                alt=""
                width="100%"
                height="auto"
              />
            </Box>
            <Box pl="8px">
              {" "}
              <Typography sx={Typo2}>
                {item.iconSubTitle}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", pt: "9px" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  width: "16px",
                  height: "16px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src="./assets/images/calendar.svg"
                  alt=""
                  width="100%"
                  height="auto"
                />
              </Box>
              <Box pl="8px">
                <Typography sx={Typo3}>{item.sheduledSubTitle}</Typography>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              mt: "12px",
            }}
          >
            <Box>
              <Typography sx={Typo2}>{item.paidtitle}</Typography>
            </Box>
            <Box>
              <Typography sx={Typo4}>{item.price}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
