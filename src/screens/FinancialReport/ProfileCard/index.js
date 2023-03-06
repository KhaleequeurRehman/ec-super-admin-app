import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const ProfileCard = ({imgSrc,title,subTitle,address}) => {
  return (
    <>
        <Box sx={{width:"100%",border:"1px solid #E1E1E6",borderRadius:"8px",display:"flex",flexWrap:"wrap",alignItems:"center",padding:"16px"}}>
            <Box sx={{maxWidth:"84px",maxHeight:"84px",borderRadius:"50%"}}>
            {imgSrc &&  <img src={imgSrc} alt="profileicon" style={{width:"100%",height:"auto"}} />}
            </Box>
            <Box sx={{ml:"15px"}}>
                <Typography sx={{fontSize:{xs:"13px",md:"18px"},fontWeight:"500"}}>{title && title}</Typography>
                <Typography sx={{fontSize:{xs:"13px",md:"14px"},fontWeight:"400",my:"3px",color:"#545359"}}>{subTitle && subTitle}</Typography>
                {
                    address && 
                    <>
                        <Box sx={{display:"flex",flexWrap:"wrap",alignItems:"center",mt:"5px"}}>
                            <Box sx={{width:"20px",height:"20px"}}>
                                <img src="assets/images/location.svg" alt="location" style={{width:"100%",height:"100%"}} />
                            </Box>
                            <Typography sx={{fontSize:{xs:"13px",md:"14px"},fontWeight:"400",ml:"10px",color:"#9EA3AE"}}>{address}</Typography>
                        </Box>
                    </>
                }
            </Box>
        </Box>
    </>
  )
}

export default ProfileCard
