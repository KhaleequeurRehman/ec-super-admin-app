import React, { useState } from "react";
import Box from "@mui/material/Box";
import { styled, Typography, Button } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useUpdateCatererStatusMutation } from "../../../../../api/caterers";

const Button1 = styled(Button)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: "600",
  color: "#FFFFFF",
  lineHeight: "24px",
  letter: "1.5%",
  backgroundColor: "#2B817B",
  textTransform: "capitalize",
  height: "40px",
  width: "111px",
  padding: "8px, 12px, 8px, 12px",
  "&:hover": {
    backgroundColor: "#2B817B",
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: "12px",
  },
}));

const Button2 = styled(Button)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: "600",
  color: "#FFFFFF",
  lineHeight: "24px",
  letter: "1.5%",
  backgroundColor: "#FAA641",
  textTransform: "capitalize",
  height: "40px",
  width: "111px",
  padding: "8px, 12px, 8px, 12px",
  "&:hover": {
    backgroundColor: "#FAA641",
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: "12px",
  },
}));

const Button3 = styled(Button)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: "600",
  color: "#FFFFFF",
  lineHeight: "24px",
  letter: "1.5%",
  backgroundColor: "#E75C62",
  textTransform: "capitalize",
  height: "40px",
  width: "111px",
  padding: "8px, 12px, 8px, 12px",
  "&:hover": {
    backgroundColor: "#E75C62",
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: "12px",
  },
}));

export const Buttons = ({data,refetchCatererDetailData}) => {

  const [updateCatererStatus, resdata] = useUpdateCatererStatusMutation()

  const updateStatus = (newdata)=> {
    updateCatererStatus(newdata).then((res) => {
      if (res.data){
        console.log("res.data updateCatererStatusData ", res?.data);
      }
    })
  }

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: { lg: "row", md: "row", sm: "row", xs: "column" },
        }}
      >
        <Box
          mr="20px"
          sx={{ mb: { lg: "0px", md: "0px", sm: "10px", xs: "10px" } }}
        >
          <Button1 variant="contained" endIcon={<CheckCircleOutlineIcon />} 
          onClick={()=> {
            console.log('data?._id ',data?._id); 
            updateStatus({id:data?._id,status:"approved"})
            setTimeout(()=> refetchCatererDetailData(),1000)
          }}>
            Approve
          </Button1>
        </Box>
        <Box
          mr="20px"
          sx={{ mb: { lg: "0px", md: "0px", sm: "10px", xs: "10px" } }}
        >
          <Button2 variant="contained" endIcon={<ErrorOutlineIcon />} 
          onClick={()=> {
            console.log('data?._id ',data?._id); 
            updateStatus({id:data?._id,status:"revision"})
            setTimeout(()=> refetchCatererDetailData(),1000)
          }}
          >
            Revision
          </Button2>
        </Box>
        <Box sx={{ mb: { lg: "0px", md: "0px", sm: "10px", xs: "10px" } }}>
          <Button3 variant="contained" endIcon={<HighlightOffIcon />} 
          onClick={()=> {
            console.log('data?._id ',data?._id); 
            updateStatus({id:data?._id,status:"rejected"})
            setTimeout(()=> refetchCatererDetailData(),1000)
          }}
          >
            Reject
          </Button3>
        </Box>
      </Box>
    </div>
  );
};
