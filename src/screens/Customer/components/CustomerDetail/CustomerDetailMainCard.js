import React from "react";
import Box from "@mui/material/Box";
// import CustomMediaCard from "../../components/CustomMediaCard";
import Typography from "@mui/material/Typography";
import { CustomChip } from "../../../Subscription/Component/OrderDetails/CustomChip";
import DeliveryStatus from "../../../../components/DeliveryStatus";
import { CustomerChip } from "./CustomerChip";

export const CustomerDetailMainCard = ({ item }) => {
  
  const Typo1 = {
    fontSize: { lg: "18px", md: "18px", sm: "18px", xs: "16px" },
    fontWeight: "500",
    lineHeight: "26.1px",
    letter: "1.5%",
    color: "#1A1824",
  };

  const Typo2 = {
    fontSize: { lg: "14px", md: "14px", sm: "14px", xs: "12px" },
    fontWeight: "400",
    lineHeight: { lg: "19.6px", md: "19.6px", sm: "19.6px", xs: "16px" },
    color: "#9EA3AE",
    letter: "1.5%",
  };

  const Typo3 = {
    fontSize: { lg: "14px", md: "14px", sm: "14px", xs: "12px" },
    fontWeight: "400",
    lineHeight: { lg: "20px", md: "20px", sm: "20px", xs: "16px" },
    color: "#545359",
    letter: "1.5%",
  };

  return (
    <div>
      <Box
        width="100%"
        // display="flex"
        // flexWrap="wrap"
        // justifyContent="space-between"
        // my="10px"
      >
        <Box sx={{ display: "flex", flexWrap: "wrap", mb: "16px", mt: "14px" }}>
          <Box sx={{}}>
            <Box
              sx={{
                width: {
                  // lg: "104px",
                  // md: "104px",
                  // sm: "104px",
                  // xs: "40%",
                  xs: "104px",
                },
                height: {
                  // lg: "104px",
                  // md: "104px",
                  // sm: "104px",
                  // xs: "40%",
                  xs: "104px",
                },
              }}
            >
              <img src={item.image && item.image} alt="" width="100%" height="auto" />
            </Box>
          </Box>

          <Box
            sx={{
              pt: { lg: "0px", md: "0px", sm: "0px", xs: "10px" },
              // pl: { lg: "12px", md: "12px", sm: "12px", xs: "0px" },
              pl: {xs: "12px" },
            }}
          >
            <Box pb="10px">
            <CustomerChip chipTitle={item.ChipTitle && item.ChipTitle} />
            </Box>

            {item.SingleId && (
              <Box>
                <Typography sx={Typo3}>{item.SingleId && item.SingleId}</Typography>
              </Box>
            )}

            <Typography  sx={Typo1}>
              {item.title}
            </Typography>

              <Box sx={{ display: "flex" }}>

                {item.titleWithIcon && (
                  <Box sx={{display: "flex",}}>
                  <Box>
                    <img src={item.icon} alt="" width="16px" height="16px" />
                  </Box>
                <Box pl="8px">
                  <Typography sx={Typo2}>{item.titleWithIcon && item.titleWithIcon}</Typography>
                </Box>
                </Box>
                )}

                {item.singleIdTitle && (
                  <Box>
                  <Typography sx={Typo3}>{item.singleIdTitle && item.singleIdTitle}</Typography>
                </Box>
                )}
                {item.singleIdDate && (
                  <>
                  <Box ml="16px">
                  <Typography sx={Typo3}>|</Typography>
                </Box>
                <Box ml="16px">
                  <Typography sx={Typo3}>{item.singleIdDate}</Typography>
                </Box>
                  </>
                )}
              </Box>

            <Box sx={{ display: "flex", pt: "4px" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box>
                  <Typography sx={Typo2}>{item.sheduledSubTitle && item.sheduledSubTitle}</Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", ml: "16px" }}>
               {item.dateOrTimeSubTitle &&
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
                  <Typography sx={Typo2}>
                    {item.dateOrTimeSubTitle && item.dateOrTimeSubTitle}
                  </Typography>
                </Box>
              </Box>
               }

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
