import React, { useState } from 'react'
import SingleOrderComp from './Component/SingleOrderComp'
import SingleOrderDetails from './Component/SingleOrderDetails'
import SingleOrderHistory from './Component/SingleOrderHistory'

export const SingleOrder = () => {
  const [isShownSingleOrderHistory, setIsShownSingleOrderHistory] = useState(false);
  
  return (
    <>
    {
      isShownSingleOrderHistory ?
      (
        <div><SingleOrderHistory setIsShownSingleOrderHistory={setIsShownSingleOrderHistory} /></div>
      )
      :
      (
        <div><SingleOrderComp setIsShownSingleOrderHistory={setIsShownSingleOrderHistory} /></div>
      )
    }
    </>
    // <div>
        /* <SingleOrderComp/> */
        // <SingleOrderHistory/>
        /* <SingleOrderDetails/> */
    // </div>
  )
}
