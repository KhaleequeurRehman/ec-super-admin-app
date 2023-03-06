import React from 'react'
import Box from "@mui/material/Box";
import { styled, Typography, Button } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";

export const CustomerDetail_MapSec = ({data,note,setNote,btnOnClick,isLoading}) => {

  // const Data = [
  //   {
  //     title1: "Email Address",
  //     subTitle1: "Bairos@gmail.com",
  //     title2: "Phone Number",
  //     subTitle2: "0123456789",
  //     title3: "Address",
  //     subTitle3: "Tamworth Rd, Long Eaton, Canada",
  //     inputTitle: "Admin Note",
  //     inputSubtitleIcon: "./assets/images/bignote.svg",
  //     inputSubTitle: "Create Note",
  //     placeholder: "None",
  //     mapImage: "./assets/images/map.png"
  //   }
  // ]
  const Data = [
    {
      title1: "Email Address",
      subTitle1: `${data?.email ? data?.email : "no data"}`,
      title2: "Phone Number",
      subTitle2: `${data?.phone ? data?.phone : "no data"}`,
      title3: "Address",
      // subTitle3: `${data?.address ? data?.address : data?.addresses !== undefined ? data?.addresses[0]?.address ? 'nodata':'none' : "no data"}`,
      subTitle3: `${data?.address ? data?.address : data?.addresses !== undefined ? data?.addresses[0]?.address ? `${data?.addresses[0]?.address} ${data?.addresses[0]?.city} ${data?.addresses[0]?.country}`:'none' : data?.city ? data?.city : "no data"}`,
      // subTitle3: `${data?.address ? data?.address : data?.addresses?.length === 0 ? "no data" : "none"}`,
      inputTitle: "Admin Note",
      inputSubtitleIcon: "./assets/images/bignote.svg",
      inputSubTitle: "Create Note",
      placeholder: "None",
      mapImage: "./assets/images/map.png"
    }
  ]

    const Typo1 = styled(Typography)(({theme}) => ({
        color: "#9EA3AE",
        fontSize: "14px",
        fontWeight: "400",
        lineHeight: "20px",
        textTransform: "capitalize",
        [theme.breakpoints.down('sm')]: {
          fontSize: "12px",
        }
        
      }));
      const Typo2 = styled(Typography)(({theme}) => ({
        color: "#1A1824",
        fontSize: "16px",
        fontWeight: "500",
        lineHeight: "160%",
        textTransform: "capitalize",
        letterSpacing: "1.5%",
        [theme.breakpoints.down('sm')]: {
          fontSize: "14px",
        }
        
      }));

      const Typo3 = styled(Typography)(({theme}) => ({
        color: "#42C677",
        fontSize: "12px",
        fontWeight: "400",
        lineHeight: "16px",
        textTransform: "capitalize",
        letterSpacing: "1.5%",
        textDecoration: "underline",
        [theme.breakpoints.down('sm')]: {
          fontSize: "10px",
        }
        
      }));

      const Typo4 = styled(Typography)(({theme}) => ({
        color: "#1A1824",
        fontSize: "14px",
        fontWeight: "500",
        lineHeight: "19.6px",
        textTransform: "capitalize",
        [theme.breakpoints.down('sm')]: {
          fontSize: "12px",
        }
        
      }));

  return (
    <div>
        {Data.map((item,i) => {
          return (
            //<>
            <Box key={i}>
              
              <Box>
                  <Box sx={{display: "flex", justifyContent: "space-between", width: {lg: "80%", md: "80%", sm: "80%", xs: "100%"}}}>
                    <Box>
                        <Typo1>{item.title1}</Typo1>
                        <Typo2>{item.subTitle1}</Typo2>
                    </Box>

                    <Box>
                        <Typo1>{item.title2}</Typo1>
                        <Typo2>{item.subTitle2}</Typo2>
                    </Box>
                  </Box>

                  <Box mt="16px">
                      <Typo1>{item.title3}</Typo1>
                      <Typo2 >{item.subTitle3}</Typo2>
                  </Box>
              </Box>

              <Box mt="16px">
                <Box 
                // width="536px"
                //  height="217px"
                >
                  <img
                    src={item.mapImage}
                    alt=""
                    width="100%"
                    // height="auto"
                    height="217px"
                  />
                </Box>
              </Box>

              <Box mt="16px">
                <Box sx={{display: "flex", justifyContent: "space-between"}}>
                  <Typo4>{item.inputTitle}</Typo4>
                  <Button variant="text" onClick={btnOnClick} disabled={isLoading} sx={{my:"5px"}}>
                    <img src={item.inputSubtitleIcon} alt="" width="16px" height="16px" />
                    <Typo3 pl="4px">{item.inputSubTitle}</Typo3></Button>
                </Box>

                <Box>
                  <OutlinedInput
                    placeholder={item.placeholder}
                    value={note}
                    onChange={(e)=> {setNote(e.target.value);}}
                    sx={{ backgroundColor: "#F6F6F6", width: "100%", height: "40px", borderRadius: "1px", fontSize: {lg: "14px", md: "14px", sm: "14px", xs: "12px"} }}
                  />
                </Box>
              </Box>

            </Box>
            //</>
          )
        })}
    </div>
  )
}












// import React from 'react'
// import Box from "@mui/material/Box";
// import { styled, Typography, Button } from "@mui/material";
// import OutlinedInput from "@mui/material/OutlinedInput";

// export const CustomerDetail_MapSec = ({customerDetailData}) => {

//   // const Data = [
//   //   {
//   //     title1: "Email Address",
//   //     subTitle1: "Bairos@gmail.com",
//   //     title2: "Phone Number",
//   //     subTitle2: "0123456789",
//   //     title3: "Address",
//   //     subTitle3: "Tamworth Rd, Long Eaton, Canada",
//   //     inputTitle: "Admin Note",
//   //     inputSubtitleIcon: "./assets/images/bignote.svg",
//   //     inputSubTitle: "Create Note",
//   //     placeholder: "None",
//   //     mapImage: "./assets/images/map.png"
//   //   }
//   // ]
//   const Data = [
//     {
//       title1: "Email Address",
//       subTitle1: `${customerDetailData?.email? customerDetailData?.email : "no data"}`,
//       title2: "Phone Number",
//       subTitle2: `${customerDetailData?.phone? customerDetailData?.phone : "no data"}`,
//       title3: "Address",
//       subTitle3: `${customerDetailData?.address?.address ? customerDetailData?.address?.address : customerDetailData?.addresses?.length === 0 ? "no data" : "Tamworth Rd, Long Eaton, Canada"}`,
//       inputTitle: "Admin Note",
//       inputSubtitleIcon: "./assets/images/bignote.svg",
//       inputSubTitle: "Create Note",
//       placeholder: "None",
//       mapImage: "./assets/images/map.png"
//     }
//   ]

//     const Typo1 = styled(Typography)(({theme}) => ({
//         color: "#9EA3AE",
//         fontSize: "14px",
//         fontWeight: "400",
//         lineHeight: "20px",
//         textTransform: "capitalize",
//         [theme.breakpoints.down('sm')]: {
//           fontSize: "12px",
//         }
        
//       }));
//       const Typo2 = styled(Typography)(({theme}) => ({
//         color: "#1A1824",
//         fontSize: "16px",
//         fontWeight: "500",
//         lineHeight: "160%",
//         textTransform: "capitalize",
//         letterSpacing: "1.5%",
//         [theme.breakpoints.down('sm')]: {
//           fontSize: "14px",
//         }
        
//       }));

//       const Typo3 = styled(Typography)(({theme}) => ({
//         color: "#42C677",
//         fontSize: "12px",
//         fontWeight: "400",
//         lineHeight: "16px",
//         textTransform: "capitalize",
//         letterSpacing: "1.5%",
//         textDecoration: "underline",
//         [theme.breakpoints.down('sm')]: {
//           fontSize: "10px",
//         }
        
//       }));

//       const Typo4 = styled(Typography)(({theme}) => ({
//         color: "#1A1824",
//         fontSize: "14px",
//         fontWeight: "500",
//         lineHeight: "19.6px",
//         textTransform: "capitalize",
//         [theme.breakpoints.down('sm')]: {
//           fontSize: "12px",
//         }
        
//       }));


//   return (
//     <div>
//         {Data.map((item,i) => {
//           return (
//             //<>
//             <Box key={i}>
              
//               <Box>
//                   <Box sx={{display: "flex", justifyContent: "space-between", width: {lg: "80%", md: "80%", sm: "80%", xs: "100%"}}}>
//                     <Box>
//                         <Typo1>{item.title1}</Typo1>
//                         <Typo2>{item.subTitle1}</Typo2>
//                     </Box>

//                     <Box>
//                         <Typo1>{item.title2}</Typo1>
//                         <Typo2>{item.subTitle2}</Typo2>
//                     </Box>
//                   </Box>

//                   <Box mt="16px">
//                       <Typo1>{item.title3}</Typo1>
//                       <Typo2 >{item.subTitle3}</Typo2>
//                   </Box>
//               </Box>

//               <Box mt="16px">
//                 <Box 
//                 // width="536px"
//                 //  height="217px"
//                 >
//                   <img
//                     src={item.mapImage}
//                     alt=""
//                     width="100%"
//                     // height="auto"
//                     height="217px"
//                   />
//                 </Box>
//               </Box>

//               <Box mt="16px">
//                 <Box sx={{display: "flex", justifyContent: "space-between"}}>
//                   <Typo4>{item.inputTitle}</Typo4>
//                   <Button variant="text">
//                     <img src={item.inputSubtitleIcon} alt="" width="16px" height="16px" />
//                     <Typo3 pl="4px">{item.inputSubTitle}</Typo3></Button>
//                 </Box>

//                 <Box>
//                   <OutlinedInput
//                     placeholder={item.placeholder}
//                     sx={{ backgroundColor: "#F6F6F6", width: "100%", height: "40px", borderRadius: "1px", fontSize: {lg: "14px", md: "14px", sm: "14px", xs: "12px"} }}
//                   />
//                 </Box>
//               </Box>

//             </Box>
//             //</>
//           )
//         })}
//     </div>
//   )
// }
