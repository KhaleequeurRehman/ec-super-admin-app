import React from 'react'
import TextInputField from '../../../src/components/TextInputField'
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const ChatFooter = () => {
  return (
    <>
        <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center"}}>
            <Box sx={{width:"32px",height:"32px",border:"1px solid #F6F6F6",mr:"5px",borderRadius:"50%",p:"4px"}}>
                <AddIcon sx={{color:"#2B817B",fontSize:"24px"}}/>
            </Box>
            <Box sx={{flexGrow:1}}>
                <TextInputField 
                name='message' 
                placeholder='Type some message'
                />
            </Box>
            <Box sx={{ml:"10px"}}>
                <Button variant="contained" disableRipple sx={{borderColor:"unset",bgcolor:"#2B817B",fontWeight:"500",fontSize:"14px",minWidth:"auto",'&:hover':{bgcolor:"#2B817B",borderColor:"unset"}}} endIcon={<SendIcon />}>Send</Button>
            </Box>
        </Box>
    </>
  )
}

export default ChatFooter