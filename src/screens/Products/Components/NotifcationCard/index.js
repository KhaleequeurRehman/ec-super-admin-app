import React from 'react'
import Box from "@mui/material/Box";
import { styled, Typography, Button } from "@mui/material";

export const NotifcationCard = ({item}) => {

    const MainBox = styled(Box)(({ theme }) => ({
        borderRadius: "8px",
        padding: "32px",
        width: "100%",
        height: "110px",
        border: "2px dashed #80B3B0",
        backgroundColor: "#F0FAF9",
        [theme.breakpoints.down("md")]: {
            //   width: 'auto',
            height: "auto"
          },
      }));

      const ImgBox = styled(Box)(({ theme }) => ({
        borderRadius: "8px",
        padding: "8px",
        width: "40px",
        height: "40px",
        border: "1px solid #D5E6E5",
        
      }));

      const Typo1 = styled(Typography)(({ theme }) => ({
        fontFamily: theme.typography.fontFamily,
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "18px",
        lineHeight: "26.1px",
        color: "#1A1824",
        [theme.breakpoints.down("sm")]: {
          width: "100%"
        },
      }));

      
      const Typo2 = styled(Typography)(({ theme }) => ({
        fontFamily: theme.typography.fontFamily,
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "19.6px",
        color: "#9EA3AE",
        [theme.breakpoints.down("sm")]: {
            width: "100%"
          },
      }));


      const Button1 = styled(Button)(({ theme }) => ({
        fontFamily: theme.typography.fontFamily,
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "16px",
        lineHeight: "24px",
        color: "#2B817B",
        backgroundColor: "#FFFFFF",
        border: "1px solid #80B3B0",
        textTransform: "capitalize",
        [theme.breakpoints.down("md")]: {
            marginTop: "24px",
            display: "flex",
            justifyContent: "center",
          },
      }));
  return (
    <div>
        <MainBox sx={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
           <Box sx={{display: "flex",}}>
           <ImgBox>
                <Box sx={{width: "24px", height: "24px"}}>
                <img src={item?.icon} alt="" width="100%" height="auto" />
                </Box>
            </ImgBox>


            <Box ml="16px">
                <Typo1>{item?.title}</Typo1>
                <Typo2>{item?.subTitle}</Typo2>
            </Box>
           </Box>

           <Box sx={{display: "flex",}}>
          <Button1 variant="contained" sx={{padding: "8px, 24px, 8px, 24px"}}
            onClick={item?.btnOnClickHandler && item?.btnOnClickHandler}
          >
            {item?.buttonText}
          </Button1>
           </Box>
        </MainBox>
    </div>
  )
}
