import React, { useState } from 'react'
import OrderDetails from './Component/OrderDetails'
import SubscriptionHistory from './Component/SubscriptionHistory';
import SubscriptionMain from './Component/SubscriptionMain'

export const Subscription = () => {
  const [isShownSubscriptionHistory, setIsShownSubscriptionHistory] = useState(false);

  return (
    <>
      {
        isShownSubscriptionHistory ?
        (
          <div><SubscriptionHistory setIsShownSubscriptionHistory={setIsShownSubscriptionHistory}/></div>
        )
        :
        (
          <div><SubscriptionMain setIsShownSubscriptionHistory={setIsShownSubscriptionHistory}/></div>
        )
      }
    </>
    
    // <div><OrderDetails/></div>
  )
}

