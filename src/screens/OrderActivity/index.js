import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { OrderActivityProvider} from "../../contexts/OrderActivityContext/OrderActivityContext";
import OrderActivityWrapper from "./OrderActivityWrapper";

const OrderActivity = () => {

  return (
    <>
    <OrderActivityProvider>
      <OrderActivityWrapper />
    </OrderActivityProvider>
    </>
  );
};

export default OrderActivity;



// import React, { useState } from "react";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import OrderActivityMainCmp from "./OrderActivityMainCmp";
// import OrderDetails from "../OrderDetails";
// import { OrderActivityProvider,useOrderActivityContext } from "../../contexts/OrderActivityContext/OrderActivityContext";


// const OrderActivity = () => {

//   // const orderActivityStateData = useOrderActivityContext()
//   // const [isShownOrderDetails, setIsShownOrderDetails] = useState(false);

// // console.log("orderActivityStateData => ",orderActivityStateData)
//   return (
//     // <>
//     // <OrderActivityProvider>
//     //   {
//     //    orderActivityStateData?.state?.isShownOrderDetails ? 
//     //     <OrderDetails/>
//     //     :
//     //     <OrderActivityMainCmp 
//     //     closeOrderDetail={orderActivityStateData?.closeOrderDetail}
//     //     openOrderDetail={()=> {orderActivityStateData?.openOrderDetail()}}
//     //     />
//     //   }
//     // </OrderActivityProvider>
//     // </>
//     // <>
//     // {
//     //   isShownOrderDetails ? 
//     //   <OrderDetails/>
//     //   :
//     //   <OrderActivityMainCmp setIsShownOrderDetails={setIsShownOrderDetails}/>
//     // }
//     // </>
//     <OrderActivityProvider>
//       <OrderActivityMainCmp />
//     </OrderActivityProvider>
//   );
// };

// export default OrderActivity;
