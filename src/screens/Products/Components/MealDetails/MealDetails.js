import React from 'react';
import { Box,Typography,Link } from '@mui/material';

function MealDetails({mealPlanDetails,addOnDetaisl}) {
    
    return ( 
        <React.Fragment>
            <Box>
                <Typography
                sx={{
                    color:'#545359',
                    fontSize:'14px',
                    fontWeight:'500'
                }}
                >Meal Plan</Typography>
                {mealPlanDetails.map((items,index)=>{
                    return <Box sx={{display:'flex',justifyContent:'space-between',margin:'10px 0px 10px 0px'}} key={index}>
                        <Box sx={{display:'flex',width:'35%',justifyContent:'space-between',alignItems:'center'}}>
                            <img style={{marginLeft:'5px'}} src={items.img} alt="meal icon" />
                            <Box>
                                <Typography
                                sx={{
                                    fontSize:'16px',
                                    fontWeight:'500',
                                    lineHeight:'160%',
                                    color:'#1A1824'
                                }}
                                >{items.title}</Typography>
                                <Typography
                                sx={{
                                    color:'#9EA3AE',
                                    fontSize:'14px',
                                    fontWeight:'400'
                                }}
                                >{items.quantity}</Typography>
                            </Box>
                        </Box>
                        <Box>
                        <Link
                        href="#"
                        sx={{
                            color:"#2B817B",
                            fontSize:'14px',
                            fontWeight:'400',
                            lineHeight:'160%'
                        }}
                       
                        >Sell All Dishes</Link>
                        </Box>
                    </Box>

                })}
                <Typography
                sx={{
                    color:'#545359',
                    fontSize:'14px',
                    fontWeight:'500'
                }}
                >Add-Ons</Typography>
                {addOnDetaisl.map((items,index)=>{
                    return <Box sx={{display:'flex',justifyContent:'space-between',margin:'10px 0px 10px 0px'}} key={index}>
                        <Box sx={{display:'flex',width:'25%',justifyContent:'space-between'}}>
                            <img src={items.img} />
                            <Box>
                                <Typography
                                sx={{
                                    fontSize:'16px',
                                    fontWeight:'500',
                                    lineHeight:'160%',
                                    color:'#1A1824'
                                }}
                                >{items.title}</Typography>
                                <Typography
                                sx={{
                                    color:'#9EA3AE',
                                    fontSize:'14px',
                                    fontWeight:'400'
                                }}
                                >
                                    {items.quantity}

                                </Typography>
                            </Box>
                        </Box>
                        <Box>
                        <Link
                        href="#"
                        sx={{
                            color:"#2B817B",
                            fontSize:'14px',
                            fontWeight:'400',
                            lineHeight:'160%'
                        }}
                       
                        >Sell All Dishes</Link>                            
                        </Box>
                    </Box>
                })}

            </Box>

        </React.Fragment>
     );
}

export default MealDetails;