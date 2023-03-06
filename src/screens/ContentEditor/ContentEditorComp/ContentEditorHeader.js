import React from "react";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";
import SendNotificationTabs from "../../SendNotification/components/SendNotificationComp/SendNotificationTabs";
import { ContentEditorHeaderSearch } from "./ContentEditorHeaderSearch";
import ContentEditorTab from "./ContentEditorTab";


const SearchInputField = styled(TextField)({
  background: "#F6F6F6",
  "& fieldset.MuiOutlinedInput-notchedOutline.css-1d3z3hw-MuiOutlinedInput-notchedOutline":
    {
      borderColor: "#e1e1e6",
      borderRadius: "6px",
    },
});

const Button1 = {
  //   width: "103px",
  width: "72px",
  height: "32px",
  padding: "10px, 16px, 10px, 16px",
  border: "1px solid #80B3B0",
  borderRadius: "4px",
  backgroundColor: "#F1FFF7",
  borderColor:  "1px solid #81D9A5",
  ":hover": {
    border: "1px solid #80B3B0",
  },
};

const BtnTypo1 = {
  fontSize: "14px",
  fontWeight: "600",
  lineHeight: "20px",
  color: "#2B817B",
  textTransform: "capitalize",
};

const Button2 = {
  width: "103px",
  height: "40px",
  padding: "10px, 16px, 10px, 16px",
  backgroundColor: "#2B817B",
  borderRadius: "4px",
  width: { lg: "166px", md: "166px", sm: "166px", xs: "30px" },
  ":hover": {
    backgroundColor: "#2B817B",
  },
};

const BtnTypo2 = {
  fontSize: "14px",
  fontWeight: "600",
  lineHeight: "20px",
  color: "#FFFFFF",
  textTransform: "capitalize",
};

const BtnTextTypo1 = {
  fontSize: "12px",
  fontWeight: "400",
  lineHeight: "140%",
  color: "#2B817B",
  textTransform: "capitalize",
  textDecoration: "underline",
};

export const ContentEditorHeader = ({setShowUploadMedia,setShowUpdateMedia,setSelectMediaItem}) => {
  const [searchVal, setSearchVal] = useState("");
  const [openSendNotification, setOpenSendNotification] = useState(false);


  // const searchCustomersFunc = (newValSearch)=> {
  //   if(newValSearch === ""){
  //     getCustomersList()
  //     setIsShownNoResult(false)
  //   }else{
  //     searchCustomers({ search: newValSearch }).then((res) => {
  //       if (res.data){
  //         console.log("searchCustomers res.data customersData ", res?.data);
  //         setCustomersData(res?.data)
  //         if(res?.data?.data.length === 0) {
  //           setIsShownNoResult(true)
  //         }else{
  //           setIsShownNoResult(false)
  //         }
  //       }
  //     });
  //   }
  // }

  return (
    <div>
        <Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontSize: { md: "20px", xs: "14px" },
                  // mb: TypoMarginBottom ? TypoMarginBottom : "30px",
                  color: "#1A1824",
                  lineHeight: "20px",
                  fontWeight: "600",
                  mt: "10px",
                }}
              >
                Media Item
              </Typography>
            </Box>
            <Box sx={{ display: "flex", mt: "10px" }}>
              <Box>
                <Button onClick={() => {setShowUploadMedia(true)}} variant="contained" sx={Button2}>
                <AddIcon sx={{width: "16px", height :"16px"}} />
                  <Box
                    sx={{
                      display: {
                        lg: "flex",
                        md: "flex",
                        sm: "flex",
                        xs: "none",
                      }
                    }}
                  >
                    <Typography ml="8px" sx={BtnTypo2}>
                      Add New item
                    </Typography>
                  </Box>
                </Button>
              </Box>
            </Box>
          </Box>

          {/* <Box><SendNotificationTabs setShowUpdateMedia={setShowUpdateMedia} setSelectMediaItem={setSelectMediaItem} /></Box> */}
          <Box><ContentEditorTab setShowUpdateMedia={setShowUpdateMedia} setSelectMediaItem={setSelectMediaItem} /></Box>


          {/* <Box><ContentEditorHeaderSearch/></Box> */}
        </Box>
    </div>
  );
};












// import React, { useEffect } from "react";
// import AddIcon from "@mui/icons-material/Add";
// import Box from "@mui/material/Box";
// import { useState } from "react";
// import { styled } from "@mui/material/styles";
// import Typography from "@mui/material/Typography";
// import TextField from "@mui/material/TextField";

// import Button from "@mui/material/Button";
// import SendNotificationTabs from "../../SendNotification/components/SendNotificationComp/SendNotificationTabs";
// import { ContentEditorHeaderSearch } from "./ContentEditorHeaderSearch";
// import { useGetAllPublishedContentMutation } from "../../../api/contentEditor";

// export const ContentEditorHeader = ({setShowUploadMedia}) => {

//   const [getAllPublishedContent,resdata] = useGetAllPublishedContentMutation()

//   const [searchVal, setSearchVal] = useState("");
//   const [openSendNotification, setOpenSendNotification] = useState(false);

//   const SearchInputField = styled(TextField)({
//     background: "#F6F6F6",
//     "& fieldset.MuiOutlinedInput-notchedOutline.css-1d3z3hw-MuiOutlinedInput-notchedOutline":
//       {
//         borderColor: "#e1e1e6",
//         borderRadius: "6px",
//       },
//   });

//   const Button1 = {
//     //   width: "103px",
//     width: "72px",
//     height: "32px",
//     padding: "10px, 16px, 10px, 16px",
//     border: "1px solid #80B3B0",
//     borderRadius: "4px",
//     backgroundColor: "#F1FFF7",
//     borderColor:  "1px solid #81D9A5",
//     ":hover": {
//       border: "1px solid #80B3B0",
//     },
//   };

//   const BtnTypo1 = {
//     fontSize: "14px",
//     fontWeight: "600",
//     lineHeight: "20px",
//     color: "#2B817B",
//     textTransform: "capitalize",
//   };

//   const Button2 = {
//     width: "103px",
//     height: "40px",
//     padding: "10px, 16px, 10px, 16px",
//     backgroundColor: "#2B817B",
//     borderRadius: "4px",
//     width: { lg: "166px", md: "166px", sm: "166px", xs: "30px" },
//     ":hover": {
//       backgroundColor: "#2B817B",
//     },
//   };

//   const BtnTypo2 = {
//     fontSize: "14px",
//     fontWeight: "600",
//     lineHeight: "20px",
//     color: "#FFFFFF",
//     textTransform: "capitalize",
//   };

//   const BtnTextTypo1 = {
//     fontSize: "12px",
//     fontWeight: "400",
//     lineHeight: "140%",
//     color: "#2B817B",
//     textTransform: "capitalize",
//     textDecoration: "underline",
//   };

//   const getAllPublishedContentFunc = () => {
//     getAllPublishedContent({page:1,size:10}).then((res) => {
//       if(res.data){
//         console.log("res.data allPublishedContentData ", res?.data);
//       }
//     })
//     // getAllPublishedContent({ page:1, size:10 }).then((res) => {
//     //   if (res.data){
//     //     console.log("res.data caterersData ", res?.data);
//     //     setCaterersData(res?.data)
//     //   }
//     // });
//   }

//   useEffect(() => {
//     getAllPublishedContentFunc()
//   }, [])

//   return (
//     <div>
//         <Box>
//           <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//             <Box>
//               <Typography
//                 sx={{
//                   fontFamily: "Outfit",
//                   fontSize: { md: "20px", xs: "14px" },
//                   // mb: TypoMarginBottom ? TypoMarginBottom : "30px",
//                   color: "#1A1824",
//                   lineHeight: "20px",
//                   fontWeight: "600",
//                   mt: "10px",
//                 }}
//               >
//                 Media Item
//               </Typography>
//             </Box>
//             <Box sx={{ display: "flex", mt: "10px" }}>
//               <Box>
//                 <Button onClick={() => {setShowUploadMedia(true)}} variant="contained" sx={Button2}>
//                 <AddIcon sx={{width: "16px", height :"16px"}} />
//                   <Box
//                     sx={{
//                       display: {
//                         lg: "flex",
//                         md: "flex",
//                         sm: "flex",
//                         xs: "none",
//                       }
//                     }}
//                   >
//                     <Typography ml="8px" sx={BtnTypo2}>
//                       Add New item
//                     </Typography>
//                   </Box>
//                 </Button>
//               </Box>
//             </Box>
//           </Box>

//           <Box><SendNotificationTabs/></Box>


//           {/* <Box><ContentEditorHeaderSearch/></Box> */}
//         </Box>
//     </div>
//   );
// };
