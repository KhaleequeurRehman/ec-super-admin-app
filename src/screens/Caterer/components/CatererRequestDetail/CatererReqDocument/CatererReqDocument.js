import React from "react";
import Box from "@mui/material/Box";
import { ReqDocumentCard } from "./ReqDocumentCard";
import { styled, Typography, Button } from "@mui/material";


const Typo1 = styled("div")(({ theme }) => ({
  fontSize: "14px",
  fontWeight: "600",
  lineHeight: "20px",
  color: "#1A1824",
  letter: "1.5%",
}));

export const CatererReqDocument = ({Data}) => {
  return (
    <div>
      <Box>
        <Box mb="8px">
          <Typo1>Document</Typo1>
        </Box>

        <Box>
          {Data.map((item,index) => {
            return (
                <Box mb="16px">
                  <ReqDocumentCard item={item} key={index}/>
                </Box>
            );
          })}
        </Box>
      </Box>
    </div>
  );
};
