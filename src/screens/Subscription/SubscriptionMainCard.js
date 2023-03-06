import React from "react";
import Box from "@mui/material/Box";
import CustomMediaCard from "../../components/CustomMediaCard";
import { CustomChip } from "./Component/OrderDetails/CustomChip";
import DeliveryStatus from "../../components/DeliveryStatus";
import Typography from "@mui/material/Typography";

export const SubscriptionMainCard = ({ item }) => {
  const Typo1 = {
    fontSize: "18px",
    fontWeight: "500",
    lineHeight: "26.1px",
    letter: "1.5%",
    color: "#1A1824",
  };

  const Typo2 = {
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "19.6px",
    color: "#9EA3AE",
    letter: "1.5%",
  };

  return (
    <div>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={Typo1}>{item.heading && item.heading}</Typography>
          {item.deliveryStatusTitle && 
          <Box>
          <DeliveryStatus variant="blue" my={0} text={item.deliveryStatusTitle && item.deliveryStatusTitle} />
        </Box>
          }
        </Box>

        <Box>
          <Typography sx={Typo2}>{item.subHeading && item.subHeading }</Typography>
          {/* <Typography sx={Typo2}>Estimate delivered at 10:00 Am</Typography> */}
        </Box>
      </Box>

      <Box
        width="100%"
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        // my="10px"
      >

        <Box sx={{ display: "flex", mb: "16px", mt: "14px" }}>
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
              <img src={item.image && item.image} alt="" width="100%" height="auto" />
            </Box>
          </Box>

          <Box pl="12px">
            <CustomChip chipTitle={item.ChipTitle && item.ChipTitle} />

            <Typography pt="10px" sx={Typo1}>
              {item.title && item.title}
            </Typography>

            <Box sx={{ display: "flex", pt: "4px" }}>
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
                  <Typography sx={Typo2}>{item.sheduledSubTitle && item.sheduledSubTitle}</Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", ml: "16px" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    sx={{
                      width: "8px",
                      height: "8px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="./assets/images/Ellipse 60.svg"
                      alt=""
                      width="100%"
                      height="auto"
                    />
                  </Box>
                  <Box pl="16px">
                    <Typography sx={Typo2}>{item.dateSubTitle && item.dateSubTitle}</Typography>
                  </Box>
                </Box>

                {item.timeSubTitle && (
                  <>
                    <Box
                      sx={{ display: "flex", alignItems: "center", ml: "16px" }}
                    >
                      <Box
                        sx={{
                          width: "8px",
                          height: "8px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src="./assets/images/Ellipse 60.svg"
                          alt=""
                          width="100%"
                          height="auto"
                        />
                      </Box>
                      <Box pl="16px">
                        <Typography sx={Typo2}>{item.timeSubTitle}</Typography>
                      </Box>
                    </Box>
                  </>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
