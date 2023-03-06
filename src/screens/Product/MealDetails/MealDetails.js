import React from 'react';
import { Box,Typography,Link } from '@mui/material';

function MealDetails({mealPlanDetails,addOnDetails}) {
    
    return ( 
        <React.Fragment>
            <Box sx={{width:"100%"}}>
                <Typography
                sx={{color:'#545359',fontSize:'14px',fontWeight:'500'}}
                >Meal Plan</Typography>
                {
                    mealPlanDetails !== undefined && mealPlanDetails.length>0 && mealPlanDetails.map((currentitem,i)=>{
                        const items = {
                            img: "assets/foodmenuimages/dish.png",
                            title: `${currentitem?.name !==undefined || currentitem?.name !== null ? currentitem?.name : 'no data'}`,
                            quantity: `${currentitem?.dish !== undefined || currentitem?.dish !== null ? `${currentitem?.dish.length} dishes` : 'no data'}`,
                          }
                        return (
                        <Box sx={{display:'flex',justifyContent:'space-between',margin:'10px 0px 10px 0px',flexWrap:'wrap'}} key={i}>
                            <Box sx={{display:'flex',width:{xs:"46%",md:"46%"},justifyContent:'space-between',my:"5px"}}>
                                <Box sx={{width:"49px",height:"49px",borderRadius:"6px"}}> 
                                    <img style={{width:"100%",height:"100%",marginLeft:'5px'}} src={items.img && items.img} alt="meal icon"/>
                                </Box>
                                <Box sx={{ml:{xs:"10px",md:"10px"},width:"100%"}}>
                                    <Typography
                                    sx={{
                                        fontSize:{xs:"13px",md:"16px"},
                                        fontWeight:'500',
                                        // lineHeight:'160%',
                                        color:'#1A1824'
                                    }}
                                    >{items.title && items.title}</Typography>
                                    <Typography
                                    sx={{
                                        color:'#9EA3AE',
                                        fontSize:{xs:"13px",md:"14px"},
                                        fontWeight:'400'
                                    }}
                                    >{items.quantity && items.quantity}</Typography>
                                </Box>
                            </Box>
                            <Box sx={{my:"5px"}}>
                                <Link
                                href="#"
                                sx={{
                                    color:"#2B817B",
                                    fontSize:'14px',
                                    fontWeight:'400',
                                }}
                                >See All Dishes</Link>
                            </Box>
                        </Box>
                        )

                    })
                }

                <Typography sx={{color:'#545359',fontSize:{xs:"13px",md:"14px"},fontWeight:'500'}}>Add-Ons</Typography>
                { 
                    addOnDetails !== undefined && addOnDetails.length>0 &&  addOnDetails.map((currentitem,i)=>{
                        const items = {
                            img: "assets/foodmenuimages/dish.png",
                            title: `${currentitem?.name !==undefined || currentitem?.name !== null ? currentitem?.name : 'no data'}`,
                            quantity: `${currentitem?.dish !== undefined || currentitem?.dish !== null ? `${currentitem?.dish.length} dishes` : 'no data'}`,
                          }
                        return <Box sx={{display:'flex',justifyContent:'space-between',margin:'10px 0px 10px 0px',flexWrap:'wrap'}} key={i}>
                            <Box sx={{display:'flex',width:{xs:"46%",md:"46%"},justifyContent:'space-between',my:"5px"}}>
                                <Box sx={{width:"49px",height:"49px",borderRadius:"6px"}}> 
                                    <img style={{width:"100%",height:"100%",marginLeft:'5px'}} src={items.img} alt="addOn icon"/>
                                </Box>
                                <Box sx={{ml:{xs:"10px",md:"10px"},width:"100%"}}>
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
                            <Box sx={{my:"5px"}}>
                                <Link
                                href="#"
                                sx={{
                                    color:"#2B817B",
                                    fontSize:{xs:"13px",md:"14px"},
                                    fontWeight:'400',
                                }}
                                >See All Dishes</Link>                            
                            </Box>
                        </Box>
                    })
                }

            </Box>

        </React.Fragment>
     );
}

export default MealDetails;