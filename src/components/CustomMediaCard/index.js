import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styles from './CustomMediaCard.module.sass'
import cn from "classnames";

const CustomMediaCard = ({imgUrl, title, iconUrl, subTitle, subTitleWithIcon }) => {
  return (
    <>
        <Box className={cn(styles.customMediaCard)} display="flex" flexWrap="wrap" my="10px" >
            {
                imgUrl && 
                <Box className={cn(styles.imgWrapper)} my="10px" mr="15px" width="48px" height="48px">
                    <img src={imgUrl && imgUrl} alt="mediaCardIcon" width="100%" height="100%"/>
                </Box>
            }
            <Box className={cn(styles.detailWrapper)} my="10px">
            <Typography className={cn(styles.title)} fontSize="18px" fontWeight="500" >{title && title}</Typography>
            {
                subTitle && iconUrl ?  
                <Typography className={cn(styles.subTitleWithIconImg)} fontSize="14px" fontWeight="400" my="10px" color="#9EA3AE" >
                    {iconUrl && <span><img src={iconUrl} alt="Icon" /></span>}
                {subTitle && subTitle}</Typography>
                :  
                <Typography className={cn(styles.subTitle)} fontSize="14px" fontWeight="400" my="5px" color="#9EA3AE" >{subTitle && subTitle}</Typography>
            }
            {/* {
                subTitleWithIcon && 
                <Typography className={cn(styles.subTitleWithIconImg)} fontSize="14px" fontWeight="400" my="10px" color="#9EA3AE" >
                    {iconUrl && <span><img src={iconUrl} alt="Icon" /></span>}
                {subTitleWithIcon}</Typography>
            } */}
            </Box>
        </Box>
    </>
  )
}

export default CustomMediaCard