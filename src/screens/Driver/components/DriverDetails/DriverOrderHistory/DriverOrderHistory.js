import React from "react";
import Box from "@mui/material/Box";
import { styled, Typography, Button } from "@mui/material";
import DriverOrderHistoryTabs from "./DriverOrderHistoryTabs";
const MainBox = styled(Box)(({ theme }) => ({
    borderRadius: "6px",
    padding: "24px",
    width: "100%",
    border: "1px solid #E1E1E6",
    [theme.breakpoints.up("sm")]: {
      //   width: 'auto',
    },
  }));

export const DriverOrderHistory = ({driverDetailData}) => {
    const BtnTextTypo1 = {
        fontSize: "12px",
        fontWeight: "400",
        lineHeight: "140%",
        color: "#2B817B",
        textTransform: "capitalize",
        textDecoration: "underline",
      };
  return (
    <div>
      <Box>
        <MainBox>
            <Box sx={{display: "flex", justifyContent: "space-between"}}>
                <Box><Typography>Order History</Typography></Box>
                <Box>
                    <Button variant="text">
                    <Typography sx={BtnTextTypo1}>Last Month</Typography>
                    <Box sx={{ width: "16px", height: "16px" }}>
                      <img
                        src="./assets/images/GreenArrow-down.svg"
                        alt=""
                        width="100%"
                        height="auto"
                      />
                    </Box>
                  </Button>
                  </Box>
            </Box>

            <Box>
                <DriverOrderHistoryTabs driverDetailData={driverDetailData} />
            </Box>
        </MainBox>
      </Box>
    </div>
  );
};
