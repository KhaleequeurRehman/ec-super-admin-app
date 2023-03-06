import React, { useState } from 'react'
import Box from "@mui/material/Box";
import { SendNotificationHeader } from './SendNotificationHeader';
// import SendNotificationTabs from './SendNotificationTabs';
import ContentEditorTabs from '../../../ContentEditor/ContentEditorComp/ContentEditorTabs';
import { CustomerHeader } from '../../../Customer/components/CustomerHeader';
import { SendNotificationOrderDetails } from '../SendNotificationOrderDetails/SendNotificationOrderDetails';
import SendNotificationTabs from './SendNotificationTabs';

function SendNotificationComp() {
  const [isShownSendNotificationOrderDetails, setIsShownSendNotificationOrderDetails] 
  = useState(false)
  
  return (
    <div>
      {/* <Box>
        <SendNotificationHeader setIsShownSendNotificationOrderDetails={setIsShownSendNotificationOrderDetails} title={"Notification History"}/>
      </Box> */}
      {
        isShownSendNotificationOrderDetails?
        (
          <Box>
            <SendNotificationOrderDetails setIsShownSendNotificationOrderDetails={setIsShownSendNotificationOrderDetails} />
          </Box>
        )
        :
        (
          <Box>
            {/* <SendNotificationTabs/> */}
            <SendNotificationTabs 
            setIsShownSendNotificationOrderDetails={setIsShownSendNotificationOrderDetails} />
          </Box>
        )
      }
      
      
    </div>
  )
}

export default SendNotificationComp