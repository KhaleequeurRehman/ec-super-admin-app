import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DeliveryActivityWrapper from "./DeliveryActivityWrapper";
import { DeliveryActivityProvider } from "contexts/DeliveryActivityContext/DeliveryActivityContext";

const DeliveryActivity = () => {

  return (
    <>
    <DeliveryActivityProvider>
      <DeliveryActivityWrapper />
    </DeliveryActivityProvider>
    </>
  );
};

export default DeliveryActivity;




// import React, { useState } from 'react'
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import { DashboardStatsData, DashboardStatsData2 } from '../../config';
// import Button from '@mui/material/Button';
// import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
// import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
// import TrackOrder from '../TrackOrder';
// import DeliveryActivityMainCmp from './DeliveryActivityMainCmp';

// const DeliveryActivity = () => {
  
//   const [isShownTrackOrder, setIsShownTrackOrder] = useState(false);

//   return (
//     <>

//     {
//       isShownTrackOrder ? 
//       <> 
//         <TrackOrder/>
//       </>
//       :
//       <>
//         <DeliveryActivityMainCmp setIsShownTrackOrder={setIsShownTrackOrder}/>
//       </>
//     }

//       {/* <Box sx={{ width: "100%" }}>
//         <Grid container gap={1} sx={{justifyContent:"space-around"}}>
//           <Grid item container  xs={12} md={6} sx={{border:"1px solid #E5E5E5",borderRadius:"6px",p:"10px 15px",my:"10px"}}>
//             <Box sx={{width: "100%",display:"flex",flexWrap:"wrap",justifyContent:"space-between",m:"0 0 30px 0"}}>
//               <Box>
//                 <Typography sx={{fontSize:"18px",fontWeight:"600"}}>Delivery Activity</Typography>
//                 <Typography sx={{fontSize:"14px",fontWeight:"400",color:"#9EA3AE",mt:"5px",mb:"10"}}>12 Delivery  Process</Typography>
//               </Box>
//               <Box>
//                 <Typography sx={{fontSize:"14px",fontWeight:"400",color:"#2B817B",textDecoration:"underline"}}>All Delivery <ExpandMoreIcon sx={{verticalAlign: "middle"}}/></Typography>
//               </Box>
//             </Box>

//             {
//               [1,2].map((item,index) => (
//                 <>
//                   <Box sx={{borderLeft:"6px solid #81D9A5",width: "100%",minHeight:"180px",p:"10px",my:"15px"}}>
//                     <Box sx={{display:"flex",flexWrap:"wrap",alignItems:"center",m:"5px 0 30px 0"}}>
//                       <Typography component="button" sx={{fontSize:"12px",fontWeight:"600",color:"#2F549D",p:"4px 16px 4px 16px",borderRadius:"16px",border:"1px solid #819ED9",backgroundColor:"#F1F6FF",mr:"20px",my:"5px"}}>In Delivery</Typography>
//                       <Typography sx={{fontSize:"12px",fontWeight:"400",color:"#9EA3AE",my:"5px"}}>12:00 - 03.00 Pm</Typography>
//                     </Box>
//                     <Box sx={{width:"90%",display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",m:"5px 0"}}>
//                       <Box>
//                         <Typography sx={{fontSize:"20px",fontWeight:"500",my:"5px"}}>John Lennon</Typography>
//                         <Typography sx={{fontSize:"14px",fontWeight:"400",m:"0 0 17px 0",color:"#9EA3AE"}}>Delivering 40 orders</Typography>
//                         <Typography sx={{fontSize:"14px",fontWeight:"400",m:"5px 0",color:"#9EA3AE"}}>From <span style={{fontSize:"16px",fontWeight:"400",margin:"0 0 0 5px",color:"#2B817B",textDecoration:"underline"}}>Chef Juna Catering</span></Typography>
//                       </Box>
//                       <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
//                         <Button variant="contained" sx={{mb:"10px",bgcolor:"#2B817B",minWidth:"127px",'&:hover':{bgcolor:"#2B817B"}}}>Track Order</Button>
//                         <Button variant="outlined" sx={{borderColor:"#80B3B0",color:"#2B817B",minWidth:"127px",'&:hover':{borderColor:"#80B3B0"}}}>Details</Button>
//                       </Box>
//                     </Box>
//                   </Box>
//                 </>
//               ))
//             }

//             {
//               [1,2].map((item,index) => (
//                 <>
//                   <Box sx={{borderLeft:"6px solid #DFA90D",width: "100%",minHeight:"180px",p:"10px",my:"15px"}}>
//                     <Box sx={{display:"flex",flexWrap:"wrap",alignItems:"center",m:"5px 0 30px 0"}}>
//                       <Typography component="button" sx={{fontSize:"12px",fontWeight:"600",color:"#DFA90D",p:"4px 16px 4px 16px",borderRadius:"16px",border:"1px solid #F0D859",backgroundColor:"#FEF9E8",mr:"20px",my:"5px"}}>Waiting Caterer</Typography>
//                       <Typography sx={{fontSize:"12px",fontWeight:"400",color:"#9EA3AE",my:"5px"}}>12:00 - 03.00 Pm</Typography>
//                     </Box>
//                     <Box sx={{width:"90%",display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"flex-start",m:"5px 0"}}>
//                       <Box>
//                         <Typography sx={{fontSize:"20px",fontWeight:"500",my:"5px"}}>John Lennon</Typography>
//                         <Typography sx={{fontSize:"14px",fontWeight:"400",m:"0 0 17px 0",color:"#9EA3AE"}}>Delivering 40 orders</Typography>
//                         <Typography sx={{fontSize:"14px",fontWeight:"400",m:"5px 0",color:"#9EA3AE"}}>From <span style={{fontSize:"16px",fontWeight:"400",margin:"0 0 0 5px",color:"#2B817B",textDecoration:"underline"}}>Chef Juna Catering</span></Typography>
//                       </Box>
//                       <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
//                         <Button variant="outlined" sx={{borderColor:"#80B3B0",color:"#2B817B",minWidth:"127px",'&:hover':{borderColor:"#80B3B0"}}}>Details</Button>
//                       </Box>
//                     </Box>
//                   </Box>
//                 </>
//               ))
//             }
//           </Grid>
//           <Grid item xs={12} md={5} my="10px" sx={{border:"1px solid #E5E5E5",borderRadius:"6px",p:"20px 15px 10px 15px"}}>
//             <Box>
//               <Typography sx={{fontSize:"18px",fontWeight:"600",my:"5px"}}>Upcoming Delivery</Typography>
//               <Typography sx={{fontSize:"14px",fontWeight:"400",color:"#9EA3AE",mt:"5px"}}>12 upcoming delivery for tomorrow</Typography>
//             </Box>
//             {
//               [1].map((currItem,index)=> (
//               <Box sx={{border:"1px solid #E5E5E5",borderRadius:"6px",p:"10px 15px",my:"20px"}}>
//                 <Typography sx={{fontSize:"12px",fontWeight:"400",color:"#9EA3AE",mt:"10px",mb:"30px"}}>12:00 - 03.00 Pm</Typography>
//                 <Box sx={{mt:"10px",mb:"30px"}}>
//                   <Typography sx={{fontSize:"20px",fontWeight:"500",my:"5px"}}>John Lennon</Typography>
//                   <Typography sx={{fontSize:"14px",fontWeight:"400",color:"#9EA3AE",mt:"5px"}}>Delivering 40 orders <span style={{color:"#DD7474",fontWeight:"600",margin: "0 5px"}}>Over Limit <ErrorOutlineOutlinedIcon style={{verticalAlign: "top",margin:"-1px 2px 0 2px"}} /></span></Typography>
//                 </Box>
                
//                 <Typography sx={{fontSize:"14px",fontWeight:"400",my:"10px",color:"#9EA3AE"}}>From <span style={{fontSize:"16px",fontWeight:"400",margin:"0 0 0 5px",color:"#2B817B",textDecoration:"underline"}}>Chef Juna Catering</span></Typography>
//                 <Button variant="contained" fullWidth sx={{mb:"10px",mt:"30px",bgcolor:"#2B817B",minWidth:"127px",textTransform:"capitalize",'&:hover':{bgcolor:"#2B817B"}}}>Optimize Quantity</Button>
//               </Box>
//               ))
//             }


            
//             {
//               [1,2].map((currItem,index)=> (
//                 <Box key={index} sx={{border:"1px solid #E5E5E5",borderRadius:"6px",p:"10px 15px",my:"20px"}}>
//                   <Typography sx={{fontSize:"12px",fontWeight:"400",color:"#9EA3AE",mt:"10px",mb:"30px"}}>12:00 - 03.00 Pm</Typography>
//                   <Box sx={{mt:"10px",mb:"30px"}}>
//                     <Typography sx={{fontSize:"20px",fontWeight:"500",my:"5px"}}>John Lennon</Typography>
//                     <Typography sx={{fontSize:"14px",fontWeight:"400",color:"#9EA3AE",mt:"5px"}}>Delivering 40 orders <span style={{color:"#42C677",fontWeight:"600",margin: "0 5px"}}> <CheckCircleOutlinedIcon style={{verticalAlign: "top",margin:"1px 5px 0 5px",fontSize:"20px"}} /></span></Typography>
//                   </Box>
                  
//                   <Typography sx={{fontSize:"14px",fontWeight:"400",my:"10px",color:"#9EA3AE"}}>From <span style={{fontSize:"16px",fontWeight:"400",margin:"0 0 0 5px",color:"#2B817B",textDecoration:"underline"}}>Chef Juna Catering</span></Typography>
//                   <Button variant="outlined" fullWidth sx={{mb:"10px",mt:"30px",borderColor:"#80B3B0",color:"#2B817B",textTransform:"capitalize",minWidth:"127px",'&:hover':{borderColor:"#80B3B0"}}}>Optimize Quantity</Button>
//                 </Box>
//               ))
//             }
            

//           </Grid>
//         </Grid>
//       </Box> */}
//     </ >
//   )
// }

// export default DeliveryActivity