import React from 'react'
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography'
import moment from 'moment';

const WidthDrawHistoryItemCard = ({date,widthdraw,remain}) => {

  return (
    <>
        <Box sx={{border:"1px solid #E1E1E6",borderRadius:"8px",padding:"16px",display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}>
            <Box sx={{display:"flex",flexWrap:"wrap",alignItems:"center",my:"5px"}}>
                <Box sx={{maxWidth:"20px",maxHeight:"20px",borderRadius:"50%"}}>
                    <img src="assets/images/greentickcircle.svg" alt="greentickcircle" style={{width:"100%",height:"auto"}} />
                </Box>
                <Box sx={{ml:"25px"}}>
                    {/* <Typography sx={{fontSize:{xs:"13px",md:"14px"},fontWeight:"600"}}>$ 1.200</Typography> */}
                    <Typography sx={{fontSize:{xs:"13px",md:"14px"},fontWeight:"600"}}>{remain !==undefined || remain !== null? ` $ ${Number(remain).toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 })}`: "no data"}</Typography>
                    {/* <Typography sx={{fontSize:{xs:"13px",md:"12px"},fontWeight:"400",color:"#9EA3AE"}}>- $100.00</Typography> */}
                    <Typography sx={{fontSize:{xs:"13px",md:"12px"},fontWeight:"400",color:"#9EA3AE"}}>{widthdraw !==undefined || widthdraw !== null? ` -$ ${Number(widthdraw).toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 })}`: "no data"}</Typography>
                </Box>
            </Box>
            <Box sx={{my:"5px"}}>
                {/* <Typography sx={{fontSize:{xs:"13px",md:"12px"},fontWeight:"400",color:"#9EA3AE"}}>Oct 21, 2021</Typography> */}
                <Typography sx={{fontSize:{xs:"13px",md:"12px"},fontWeight:"400",color:"#9EA3AE"}}>{date !==undefined || date !== null ? `${moment(date).format('ll')}` : "no data"}</Typography>
            </Box>
        </Box>
    </>
  )
}

export default WidthDrawHistoryItemCard