import React from 'react'
import Typography from "@mui/material/Typography";

const DeliveryStatus = ({text,variant,...props}) => {
  return (
    <>
    {
      text && (
        <>
          {
            variant === "blue"  &&
            <> 
              <Typography fontSize="12px" fontWeight="600" color="#2F549D" p="4px 16px 4px 16px" borderRadius="16px" border="1px solid #819ED9" backgroundColor="#F1F6FF" my="5px" mr="30px" component="button" {...props}>{text && text}</Typography>
            </>
          }
          
          {
            variant === "green" && 
            <> 
              <Typography fontSize="12px" fontWeight="600" color="#30A15F" p="4px 16px 4px 16px" borderRadius="16px" border="1px solid #81D9A5" backgroundColor="#F1FFF7" my="5px" mr="30px" component="button" {...props}>{text && text}</Typography>
            </>
          }
          
          {
            variant === "yellow" && 
            <> 
              <Typography fontSize="12px" fontWeight="600" color="#DFA90D" p="4px 16px 4px 16px" borderRadius="16px" border="1px solid #F0D859" backgroundColor="#FEF9E8" my="5px" mr="30px" component="button" {...props}>{text && text}</Typography>
            </>
          }

          {
            variant === "maroon" && 
            <> 
              <Typography fontSize="12px" fontWeight="600" color="#DD7474" p="4px 12px 4px 12px" borderRadius="4px" border="1px solid #DD7474" backgroundColor="#FFF1F1" component="button" {...props}>{text && text} <img src="assets/images/infoCircle.svg" alt="infoCircle" style={{verticalAlign:"text-top",padding:"0px 5px"}} />
              </Typography>
            </>
          }
          {
            variant === "maroonLight" && 
            <> 
              <Typography fontSize="12px" fontWeight="600" color="#DD7474" p="4px 12px 4px 12px" borderRadius="4px" border="1px solid #DD7474" backgroundColor="#FFF1F1" component="button" {...props}>{text && text}</Typography>
            </>
          }
          {
            variant === "text" && 
            <> 
              <Typography fontSize="14px" fontWeight="400" color="#545359" p="6px 12px 6px 12px" borderRadius="4px" border="1px solid #D5E6E5" backgroundColor="transparent" component="button" {...props}>{text && text}</Typography>
            </>
          }
        </>
      )
    }
        
    </>
  )
}

export default DeliveryStatus