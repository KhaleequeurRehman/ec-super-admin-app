import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import {Box,Button, Typography}from '@mui/material';
import icon from '../Assets/Icon.png'
function Overlay({isOpen,setIsOpenFunc}) {
 
    return ( 
        <>
       
            <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isOpen}
             
        
          >
            <Box
            sx={{
                width:{lg:'509px',md:'509px',sm:'250px',xs:'250px'},
                minheight:'205px',
                backgroundColor:"#FFFFFF",
                borderRadius:'8px',
                display:'flex',
                padding:3,
                flexDirection:'column',
                alignItems:'center'
            }}
            >
                <img src={icon} alt="icon" />
             
                <Typography
                sx={{
                    fontSize:{lg:'20px',md:'20px',sm:'16px',xs:'16px'},
                    fontWeight:'600',
                    color:'black'
                }}
                >Cancel Subscription</Typography>
                <Typography
                sx={{
                    color:'#545359',
                    fontSize:"14px",
                    width:'350px',
                    textAlign:'center'
    
                }}
                >Deleted items cannot be returned, are you sure you want to delete this item?</Typography>
                <Box sx={{display:'flex',flexWrap:'wrap'}}>
                <Button
                onClick={()=>setIsOpenFunc(false)}
                sx={{
                    padding:'8px 24px',
                    color:'#DD7474',
                    border:'1px solid #DD7474',
                    borderRadius:'4px',
                    width:'147px',
                    height:'40px',
                    margin:2,
                    textTransform:'capitalize'
    
                }}
                >Discard</Button>
                <Button
                
                sx={{
                    borderRadius:'4px',
                    width:'150px',
                    height:'40px',
                    padding:'8px 24px',
                    backgroundColor:"#2B817B",
                    color:"white",
                    margin:2,
                    '&:hover':{backgroundColor:'#2B817B'},
                    textTransform:'capitalize'
    
    
                }}
                >Yes, Sure</Button>
                </Box>
            </Box>
            </Backdrop>
    
            
       
        </>
     );
}

export default Overlay;