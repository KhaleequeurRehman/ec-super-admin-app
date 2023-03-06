import Typography from '@mui/material/Typography'
import React from 'react'
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const Error = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <Typography sx={{my:"10px",fontSize:"30px",fontWeight:"600"}}>404 page Not Found</Typography>
        <Box sx={{my:"10px"}}>
          <Button size='small' sx={{p:"6px 22px 6px 22px",borderStyle:"solid",borderColor:"#80B3B0",color:"#2B817B",'&:hover':{borderStyle:"solid",borderColor:"#80B3B0"}}} variant='outlined' onClick={() => navigate("/")}>Go to Home</Button>
        </Box>
      </Box>
    </>
  )
}

export default Error