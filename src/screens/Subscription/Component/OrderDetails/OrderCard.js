import React from 'react'
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { CustomStatusChip } from './CustomStatusChip';
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';

export const OrderCard = ({item,hasBtn=true,hasMsgIcon=false}) => {

  const navigate = useNavigate()

  return (
    <div>
        <Box width="100%">
            <Typography fontSize="18px" fontWeight="600" mb="8px">
              {item?.mainTitle}
            </Typography>
            <Box
              border="1px solid #E1E1E6"
              borderRadius="8px"
              height="100%"
              sx={{ padding: "16px" }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box sx={{ display: "flex", flexWrap: {lg: "nowrap", md: "nowrap", sm: "wrap", xs: "wrap"} }}>
                  <Box sx={{ width: "84px", height: "84px" }}>
                    <img
                      src={item?.image}
                      alt=""
                      width="100%"
                      height="auto"
                    />
                  </Box>
                  <Box  sx={{mt: {lg: "0px", md: "10px", sm: "10px", xs: "10px"}, ml:{lg: "16px", md: "16px", sm: "16px", xs: "0px"}}}>
                    {item?.status && 
                    
                    <Box mb="14px">
                      <CustomStatusChip title={item?.status} />
                    </Box>
                    }
                    <Box >
                      <Typography
                        sx={{
                          fontSize: "16px",
                          fontWeight: "600",
                          lineHeight: "25.6px",
                          letter: "1.5%",
                        }}
                      >
                        {item?.title}
                      </Typography>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Box sx={{ display: "flex", alignItems: "center", width: "16px", height: "16px" }}>
                        <img src={item?.icon} alt="" width="100%" height="auto" />
                      </Box>
                      <Box ml="8px">
                        <Typography sx={{fontSize: "14px", fontWeight: "400", lineHeight: "20px", color: "#9EA3AE", width: {lg: "100%", md: "80%", sm: "100%", xs: "100%"}}}>{item?.subTitle}</Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>

                {
                  hasBtn && 
                  <Box>
                    <Button
                      variant="text"
                      color="primary"
                      sx={{ padding: "0px", minWidth: "0px", minHeight: "0px" }}
                      onClick={item?.btnTitleOnClickHandler}
                    >
                      <Box my="5px">
                        <Typography
                          fontSize="14px"
                          fontWeight="400"
                          color="#2B817B"
                          borderBottom="1.5px solid #2B817B"
                          mr="10px"
                          textTransform="capitalize"
                        >
                          {item?.btnTitle}
                        </Typography>
                      </Box>{" "}
                    </Button>
                  </Box>
                }

                {
                  hasMsgIcon && 
                  <Box sx={{display:"flex",alignItems:"center"}}>
                    <Box sx={{width:"40px",height:"40px",border:"none",outline:"none"}} component="button" onClick={() => { navigate("/inbox"); }}>
                        <img src="assets/images/msgsendicon.svg" alt="orderbookIcon" width="100%" height="100%"/>
                    </Box>
                  </Box>
                }
              </Box>
            </Box>
        </Box>
    </div>
  )
}
