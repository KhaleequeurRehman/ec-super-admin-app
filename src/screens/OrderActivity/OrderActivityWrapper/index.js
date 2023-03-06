import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import OrderActivityMainCmp from "../OrderActivityMainCmp";
import OrderDetails from "../../OrderDetails";
import { useOrderActivityContext } from "../../../contexts/OrderActivityContext/OrderActivityContext";


const OrderActivityWrapper = () => {

  const orderActivityStateData = useOrderActivityContext()

console.log("orderActivityStateData => ",orderActivityStateData)
  return (
    <>
      {
       orderActivityStateData?.state?.isShownOrderDetails ? 
        <OrderDetails/>
        :
        <OrderActivityMainCmp 
        // closeOrderDetail={orderActivityStateData?.closeOrderDetail}
        // openOrderDetail={()=> {orderActivityStateData?.openOrderDetail()}}
        />
      }
    </>
  );
};

export default OrderActivityWrapper;
