import React from 'react'
import { InboxHeader } from './components/InboxHeader'
import { Box } from "@mui/material";
import InboxTabs from './components/InboxTabs';

export const Inbox = () => {
  return (
    <div>
        <Box>
            <InboxHeader/>
        </Box>
        <Box>
            <InboxTabs/>
        </Box>
    </div>
  )
}
