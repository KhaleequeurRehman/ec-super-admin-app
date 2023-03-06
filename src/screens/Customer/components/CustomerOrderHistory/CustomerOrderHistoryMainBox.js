import React from "react";
import moment from "moment/moment";
import { CustomerOrderHistoryCard} from "./CustomerOrderHistoryCard";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

// export const CustomerOrderHistoryMainBox = ({data}) => {
export const CustomerOrderHistoryMainBox = ({data}) => {

  
  console.log('svdfsd ', data)
  return (
    <div>
      <Box
        // border="1px solid #E1E1E6"
        // borderRadius="8px"
        // height="auto"
        // // p="10px 15px"
        // p="16px"
        sx={{width:"100%",minHeight:"95vh"}}
      >
        <Box>
          {/* {data.map((item,i) => {
            return (
                <CustomerOrderHistoryCard item={item} key={i} />
            );
          })} */}
          
           {data !== undefined && data.length>0 ?(data.map((item,i) => {
            const dataitem = {
              ChipTitle: "Multiple subscription",
              image: "./assets/images/Rectangle 80.svg",
              title: `${item?.mealPlane !== undefined ? item?.mealPlane : 'no data'}`,
              iMacIcon: "./assets/images/iMacIcon.svg",
              iconSubTitle: `${item?.caterer !== undefined ? item?.caterer : 'no data'}`,
              sheduledSubTitle: `Ends on ${item?.to !== undefined ? `${moment(item?.to).format('ll')}`  : 'no data'}`,
              paidtitle: "Total Paid :",
              price: `$${item?.price !== undefined ? Number(item?.price).toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 })  : 'no data'}`
          
            }
            return (
                <CustomerOrderHistoryCard item={dataitem} key={i} />
            );
          })) : <Typography sx={{mt:"30px",textAlign:"center"}}>no data</Typography>}
        </Box>
      </Box>
    </div>
  );
};
