import { createContext, useContext, useState } from "react";

const DeliveryActivityContext = createContext();


const DeliveryActivityProvider = ({ children }) => {

    const [deliveryActivityContext, setDeliveryActivityContext] = useState({
      isShownTrackOrder:false,
      isShownOrderDetails:false,
      isShownOrderActivityMainCmp:false
    })

    const [selectedOrder, setSelectedOrder] = useState("")

    const [selectedSingleOrder, setSelectedSingleOrder] = useState("")

    const openTrackOrder = ()=> {
        setDeliveryActivityContext({...deliveryActivityContext,isShownTrackOrder:true})
    }
    
    const closeTrackOrder = ()=> {
        setDeliveryActivityContext({...deliveryActivityContext,isShownTrackOrder:false})
    }

    const selectOrder = (newData)=> {
      setSelectedOrder(newData)
    }
    
    const selectSingleOrder = (newData)=> {
      setSelectedSingleOrder(newData)
    }


    const openOrderDetail = ()=> {
      setDeliveryActivityContext({...deliveryActivityContext,isShownOrderDetails:true})
    }
  
    const closeOrderDetail = ()=> {
        setDeliveryActivityContext({...deliveryActivityContext,isShownOrderDetails:false})
    }

    const openOrderActivityMainCmp = ()=> {
      setDeliveryActivityContext({...deliveryActivityContext,isShownOrderActivityMainCmp:true})
    }
  
    const closeOrderActivityMainCmp = ()=> {
        setDeliveryActivityContext({...deliveryActivityContext,isShownOrderActivityMainCmp:false})
    }

  return (
    <DeliveryActivityContext.Provider
     value={{ 
        state:{...deliveryActivityContext,selectedOrder,selectedSingleOrder},
        openTrackOrder,
        closeTrackOrder,
        selectOrder,
        openOrderDetail,
        closeOrderDetail,
        openOrderActivityMainCmp,
        closeOrderActivityMainCmp,
        selectSingleOrder
     }}>
      {children}
    </DeliveryActivityContext.Provider>
  );
};

// custom hooks
const useDeliveryActivityContext = () => {
  return useContext(DeliveryActivityContext);
};

export { DeliveryActivityProvider, DeliveryActivityContext, useDeliveryActivityContext };






// import React, { createContext } from 'react';

// const DeliveryActivityContext = createContext();

// export default DeliveryActivityContext;
