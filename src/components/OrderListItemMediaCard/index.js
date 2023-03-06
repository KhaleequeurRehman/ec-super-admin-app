import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styles from './OrderListItemMediaCard.module.sass'
import cn from "classnames";


const OrderListItemMediaCard = ({imgUrl, title, iconUrl, subTitle, subTitleWithIcon }) => {
  return (
    <>
    <Box className={cn(styles.orderListItemMediaCard)} display="flex" flexWrap="wrap" my="10px" >
            {
                imgUrl && 
                <Box className={cn(styles.imgWrapper)} mr="15px" width="48px" height="48px">
                    <img src={imgUrl && imgUrl} alt="mediaCardIcon" width="100%" height="100%"/>
                </Box>
            }
            <Box className={cn(styles.detailWrapper)}>
            <Typography className={cn(styles.title)} fontSize="16px" fontWeight="600" >{title && title}</Typography>
            {
                subTitle && iconUrl ?  
                <Typography className={cn(styles.subTitleWithIconImg)} fontSize="14px" fontWeight="400" my="5px" color="#9EA3AE" >
                    {iconUrl && <span><img src={iconUrl} alt="Icon" /></span>}
                {subTitle && subTitle}</Typography>
                :  
                <Typography className={cn(styles.subTitle)} fontSize="14px" fontWeight="400" my="5px" color="#9EA3AE" >{subTitle && subTitle}</Typography>
            }
            </Box>
        </Box>
    </>
  )
}

export default OrderListItemMediaCard