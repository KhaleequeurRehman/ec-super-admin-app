import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const CardBox = {
  width: "100%",
  padding: "16px",
  border: "1px solid #E1E1E6",
  borderRadius: "8px",
};

const Typo1 = {
  fontSize: "18px",
  fontWeight: "500",
  lineHeight: "26.1px",
  color: "#1A1824",
  letter: "1.5%",
};

const Typo2 = {
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "20px",
  color: "#9EA3AE",
  letter: "1.5%",
};

const Typo3 = {
  fontSize: "14px",
  fontWeight: "600",
  lineHeight: "20px",
  color: "#1A1824",
  letter: "1.5%",
};
export const ReqOwnerCard = ({ item }) => {
  return (
    <div>
      <Box sx={CardBox}>
        <Box sx={{ display: "flex" }}>
          <Box>
            <img src={item.image} alt="" />
          </Box>

          <Box ml="16px">
            <Typography sx={Typo1}>{item.title}</Typography>
            <Typography sx={Typo2}>{item.subTitle}</Typography>
          </Box>
        </Box>

        <Box>
          {item?.emailData &&
            item?.emailData.map((item, index) => {
              return (
                  <Box mt="16px" key={index}>
                    <Typography sx={Typo2}>{item.emailTitle1}</Typography>
                    <Typography sx={Typo3}>{item.email2}</Typography>
                  </Box>
              );
            })}
        </Box>
      </Box>
    </div>
  );
};
