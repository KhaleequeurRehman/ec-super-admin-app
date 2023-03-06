import React from 'react'
import Typography from '@mui/material/Typography'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Box from "@mui/material/Box";
import { styled,  Button } from "@mui/material";
import Divider from '@mui/material/Divider';


export const TransactionBox = ({data}) => {

    // const Data = [
    //     {
    //         mainTitle1: "Transaction",
    //         subTitle1: "3 Order",
    //         orderStatus: "Completed",
    //         mainTitle2: "Total Spent",
    //         subTitle2: "$ 98.90",
    //         icon: "./assets/images/verticalDivider.svg"
    //     }
    // ]

    const Data = [
        {
            mainTitle1: "Transaction",
            subTitle1: `${data?.transection !== undefined ? data?.transection: 'no data'}`,
            orderStatus: "Completed",
            mainTitle2: "Total Spent",
            subTitle2: `$${data?.totalspent !== undefined ? data?.totalspent: 'no data'}`,
            icon: "./assets/images/verticalDivider.svg"
        }
    ]


    const Typo1 = styled(Typography)(({theme}) => ({
        color: "#9EA3AE",
        fontSize: "16px",
        fontWeight: "500",
        lineHeight: "26px",
        textTransform: "capitalize",
        [theme.breakpoints.down('sm')]: {
            fontSize: "14px",
            lineHeight: "20px",
        }
        
      }));
      const Typo2 = styled(Typography)(({theme}) => ({
        color: "#000000",
        fontSize: "20px",
        fontWeight: "600",
        lineHeight: "28px",
        textTransform: "capitalize",
        letterSpacing: "1.5%",
        [theme.breakpoints.down('sm')]: {
            fontSize: "18px",
            lineHeight: "28px",
        }
        
      }));

      const Typo3 = styled(Typography)(({theme}) => ({
        color: "#42C677",
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "24px",
        textTransform: "capitalize",
        letterSpacing: "1.5%",
        [theme.breakpoints.down('sm')]: {
            fontSize: "14px",
        }
      }));

  return (
    <div>
        {Data.map((item,i) => {
            return(
                //<>
                    <Box sx={{display: "flex", justifyContent: "space-between"}} key={i}>
                        <Box>
                            <Typo1 >{item.mainTitle1}</Typo1>
                            <Typo2 >{item.subTitle1}</Typo2>
                            <Box sx={{display :"flex"}}>
                            <Box><Typo3 variant="body1" color="initial">{item.orderStatus}</Typo3></Box>
                        <Box sx={{display: "flex", alignItems: "center", ml: "8px"}}> <CheckCircleIcon sx={{fill: "#42C677", width:"16px", height:"16px"}}/></Box>
                            </Box>
                        </Box>

                        <Box sx={{display: "flex", alignItems: "center"}}>
                        <Box sx={{height: "56px"}}>
                        <img src={item.icon} alt="" height="auto" />
                        </Box>
                        </Box>

                        <Box>
                            <Typo1 >{item.mainTitle2}</Typo1>
                            <Typo2 >{item.subTitle2}</Typo2>
                            <Box sx={{display :"flex"}}>
                        
                            </Box>
                        </Box>
                    </Box>
                //</>
            )
        })}
       
    </div>
  )
}
