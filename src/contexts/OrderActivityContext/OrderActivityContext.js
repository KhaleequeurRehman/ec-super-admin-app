import { createContext, useContext, useState } from "react";

const OrderActivityContext = createContext();


const OrderActivityProvider = ({ children }) => {

    const [orderActivityContext, setOrderActivityContext] = useState({
    isShownOrderDetails:false,
    })

    const openOrderDetail = ()=> {
        console.log("orderActivityStateData?.openOrderDetail");
        setOrderActivityContext({isShownOrderDetails:true})
        // setOrderActivityContext({...orderActivityContext,isShownOrderDetails:true})
    }
    
    const closeOrderDetail = ()=> {
        setOrderActivityContext({isShownOrderDetails:false})
        // setOrderActivityContext({...orderActivityContext,isShownOrderDetails:false})
    }

  return (
    <OrderActivityContext.Provider
     value={{ 
        state:{...orderActivityContext},
        openOrderDetail,
        closeOrderDetail
     }}>
      {children}
    </OrderActivityContext.Provider>
  );
};

// custom hooks
const useOrderActivityContext = () => {
  return useContext(OrderActivityContext);
};

export { OrderActivityProvider, OrderActivityContext, useOrderActivityContext };






// import React, { createContext } from 'react';

// const OrderActivityContext = createContext();

// export default OrderActivityContext;
