import React from "react";
import {useState} from "react";
import Box from "@mui/material/Box";
import { AppChatHeader } from "./AppChatHeader";
import CustomCheckbox from "../../../../Customer/components/CustomCheckbox";
import Divider from '@mui/material/Divider';
import PopularQuestionTag from "./PopularQuestionTag";
import Chip from '@mui/material/Chip';
import { ResponseMsgBox } from "./ResponseMsgBox";
import { ReplyMsgBox } from "./ReplyMsgBox";
import ChatFooter from "./ChatFooter";
import InboxCallDialogBox from "../../InboxCallDialogBox/InboxCallDIalogBox";


export const DriverAppChat = () => {
  const [openDialog, setOpenDialog] = useState(false)
  return (
    <div>
      <Box  sx={{
            border: "1px solid #E1E1E6",
            p: "16px",
            // borderRadius: "6px",
          }}>
        <Box>
          <AppChatHeader
            name="Chef Juna Food "
            imageSrc="assets/images/iMacMemojiWhite.svg"
            email="ECD - 012345"
            duration="2 min ago"
            description="I don’t know the function of this page, can you help ..."
            hasDivider={true}
            setOpenDialog={setOpenDialog}
          />
        </Box>


        <Box mt="16px"> <Divider /></Box>
              

              <Box mt="24px" sx={{display: "flex", justifyContent: "center"}}>
              <Chip label="Today Aug 21, 2021" variant="outlined" sx={{fontSize: "12px", fontWeight :"400", color: "#9EA3AE"}} />
              </Box>
      
      
              <Box
              //  mt="316px"
              sx={{mt:"100vh"}}
              >
              <Box><ResponseMsgBox/></Box>
              <Box mt="32px"><ReplyMsgBox/></Box>
              </Box>
      
      
      
      
      
      
      
              <Box mt="43px" sx={{display: "flex", justifyContent:"center"}}><PopularQuestionTag/></Box>

              <Box mt="8px" mb="8px"> <Divider /></Box>


              <Box mt="24px"><ChatFooter /> </Box>

              <Box><InboxCallDialogBox open={openDialog} setOpen={setOpenDialog}/></Box>
      
      </Box>
    </div>
  );
};
