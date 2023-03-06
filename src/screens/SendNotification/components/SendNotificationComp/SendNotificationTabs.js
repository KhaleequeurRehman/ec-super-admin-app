// import * as React from "react";
// import {useState} from "react";
// import PropTypes from "prop-types";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import { SendNotificationMainBox } from "./SendNotificationMainBox";
// import { ContentEditorHeaderSearch } from "../../../ContentEditor/ContentEditorComp/ContentEditorHeaderSearch";
// import ContentEditorDataGrid from "../../../ContentEditor/ContentEditorComp/ContentEditorDataGrid";
// import { ContentEditorGridCards } from "../../../ContentEditor/ContentEditorComp/ContentEditorGridCards/ContentEditorGridCards";
// import { useEffect } from "react";
// import { useDeleteEditorContentDataMutation, useGetAllDraftContentMutation, useGetAllPublishedContentMutation, useSearchEditorContentDataMutation } from "../../../../api/contentEditor";
// import { CircularProgress } from "@mui/material";
// import CustomizedModal from "../../../../components/CustomizedModal";
// import NoResultMsg from "../../../../components/NoResultMsg/NoResultMsg";
// import { useGetNotificationHistoryMutation } from "../../../../api/notification";

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box>
//           <Typography sx={{ fontFamily: "outfit" }}>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

// export default function SendNotificationTabs({ onHandleClick,setShowUpdateMedia,setSelectMediaItem }) {

//   const [getNotificationHistory, resdata] = useGetNotificationHistoryMutation()

//    const [notificationHistoryData, setNotificationHistoryData] = useState("");
   
//   // const [getAllPublishedContent,resdata] = useGetAllPublishedContentMutation()
//   // const [allPublishedContent, setAllPublishedContent] = useState("");

//   // const [getAllDraftContent,respdata] = useGetAllDraftContentMutation()
//   // const [allDraftContent, setAllDraftContent] = useState("");

//   // const [deleteEditorContentData,respondata] = useDeleteEditorContentDataMutation()

//   // const [searchEditorContentData,responsedata] = useSearchEditorContentDataMutation()

//   // const [selectedRow, setSelectedRow] = useState("");

//   // const [searchVal, setSearchVal] = useState("");
//   // const [isShownNoResult, setIsShownNoResult] = useState(false);

//   // const [openGridCards, setOpenGridCards] = useState(false)

//   const [value, setValue] =useState(0);
  

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const getNotificationHistoryFunc = () => {
//     getNotificationHistory({page:1,size:10}).then((res) => {
//       if(res.data){
//         console.log("res.data getNotificationHistoryData ", res?.data);
//         setNotificationHistoryData(res?.data)
//       }
//     })
//   }
  

//   useEffect(() => {
//     getNotificationHistoryFunc()
//   }, [])

//   console.log("notificationHistoryData => ",notificationHistoryData)

//   // const deletePublishedContentItem = ()=> {
//   //   deleteEditorContentData({id:selectedRow?._id}).then((res) => {
//   //     if(res.data){
//   //       getAllPublishedContentFunc()
//   //       console.log("published content deleted",selectedRow)
        
//   //     }
//   //   })
//   // }

//   // const deleteDraftContentItem = ()=> {
//   //   deleteEditorContentData({id:selectedRow?._id}).then((res) => {
//   //     if(res.data){
//   //       getAllDraftContentFunc()
//   //       console.log("draft content deleted",selectedRow)
//   //     }
//   //   })
//   // }
  
//   // const getAllPublishedContentFunc = () => {
//   //   getAllPublishedContent({page:1,size:10}).then((res) => {
//   //     if(res.data){
//   //       console.log("res.data allPublishedContentData ", res?.data);
//   //       setAllPublishedContent(res?.data)
//   //     }
//   //   })
//   // }
//   // const getAllDraftContentFunc = () => {
//   //   getAllDraftContent({page:1,size:10}).then((res) => {
//   //     if(res.data){
//   //       console.log("res.data allDraftContentData ", res?.data);
//   //       setAllDraftContent(res?.data)
//   //     }
//   //   })
//   // }

//   // const searchPublishedContentFunc = (newValSearch)=> {
//   //   if(newValSearch === ""){
//   //     getAllPublishedContentFunc()
//   //     setIsShownNoResult(false)
//   //   }else{
//   //     searchEditorContentData({search: newValSearch}).then((res)=> {
//   //       if (res.data){
//   //         console.log("searchEditorContent res.data ", res?.data);
//   //         const searchResData = res?.data && res?.data?.data.length>0 && res?.data?.data.filter((currItem)=> currItem.publish === true)
//   //         console.log("searchResData search ", searchResData);
//   //         const allPublishedContentListData = searchResData && searchResData.length>0 && searchResData.map((item,i)=>{
//   //         return {
//   //           id:i+1,
//   //           ...item,
//   //         }
//   //       })
//   //         setAllPublishedContent({allPublishedContentList:allPublishedContentListData})
//   //         if(res?.data?.data.length === 0) {
//   //           setIsShownNoResult(true)
//   //         }else{
//   //           setIsShownNoResult(false)
//   //         }
//   //       }
//   //     })

//   //   }
//   // }

//   // const searchDraftContentFunc = (newValSearch)=> {
//   //   if(newValSearch === ""){
//   //     getAllDraftContentFunc()
//   //     setIsShownNoResult(false)
//   //   }else{
//   //     searchEditorContentData({search: newValSearch}).then((res)=> {
//   //       // if (res.data){
//   //       //   console.log("searchEditorContent res.data ", res?.data);
//   //       //   setAllDraftContent(res?.data)
//   //       //   if(res?.data?.data.length === 0) {
//   //       //     setIsShownNoResult(true)
//   //       //   }else{
//   //       //     setIsShownNoResult(false)
//   //       //   }
//   //       // }
//   //       if (res.data){
//   //         console.log("searchEditorContent res.data ", res?.data);
//   //         const searchResData = res?.data && res?.data?.data.length>0 && res?.data?.data.filter((currItem)=> currItem.publish === false)
//   //         console.log("searchResData search ", searchResData);
//   //         const allDraftContentListData = searchResData && searchResData.length>0 && searchResData.map((item,i)=>{
//   //         return {
//   //           id:i+1,
//   //           ...item,
//   //         }
//   //       })
//   //         setAllDraftContent({allDraftContentList:allDraftContentListData})
//   //         if(res?.data?.data.length === 0) {
//   //           setIsShownNoResult(true)
//   //         }else{
//   //           setIsShownNoResult(false)
//   //         }
//   //       }
//   //     })
      
//   //   }
//   // }

//   // useEffect(() => {
//   //   getAllPublishedContentFunc()
//   // }, [])

//   // useEffect(() => {
//   //   getAllDraftContentFunc()
//   // }, [])

//   // console.log("allDraftContent => ",allDraftContent)

//   return (
//     <Box sx={{ width: "100%" }}>
//       <Box
//         sx={{
//           borderBottom: "1px solid #E1E1E6",
//           borderBottom: 1,
//           borderColor: "divider",
//         }}
//       >
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           aria-label="basic tabs example"
//           textColor="#1A1824"
//           padding="0px"
//           // // textColor="secondary"
//           // indicatorColor="#2B817B"
//           TabIndicatorProps={{
//             style: {
//               backgroundColor: "#2B817B",
//               paddingTop: "0px",
//               margin: "0px",
//             },
//           }}
//           sx={{
//             "& .MuiTabs-indicator": {
//               backgroundColor: "#2B817B",
//               height: "4px",
//             },
//             "& .MuiTab-root": {
//               color: "#9EA3AE",
//               fontSize: { lg: "16px", md: "16px", sm: "16px", xs: "12px" },
//               fontWeight: "400",
//               lineHeight: "25.6px",
//               paddingBottom: "0px",
//               paddingLeft: { lg: "15px", md: "15px", sm: "auto", xs: "0px" },
//               //   paddingTop : "0px"
//             },
//             "& .Mui-selected": {
//               color: "#1A1824",
//               fontSize: { lg: "16px", md: "16px", sm: "16px", xs: "12px" },
//               fontWeight: "600",
//               lineHeight: "25.6px",
//             },
//           }}
//         >
//           <Tab
//             label="All User"
//             {...a11yProps(0)}
//             sx={{
//               textTransform: "capitalize",
//             }}
//           />
//           <Tab
//             label="Customer"
//             {...a11yProps(1)}
//             sx={{
//               textTransform: "capitalize",
//             }}
//           />
//           <Tab
//             label="Caterer"
//             {...a11yProps(2)}
//             sx={{
//               textTransform: "capitalize",
//             }}
//           />
//           <Tab
//             label="Driver"
//             {...a11yProps(3)}
//             sx={{
//               textTransform: "capitalize",
//             }}
//           />
          
//         </Tabs>
//       </Box>
//       <TabPanel value={value} index={0}>
//         {
//           resdata?.isLoading ? (
//             <Box sx={{minHeight:"30vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
//               <CircularProgress color="greenclr"/>
//             </Box>
//           ) 
//           : 
//           <>
//             <p>All User</p>
//           </>
//         }
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         <p>Customer</p>
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         <p>Caterer</p>
//       </TabPanel>
//       <TabPanel value={value} index={3}>
//         <p>Driver</p>
//       </TabPanel>
//     </Box>
//   );
// }




















// <TabPanel value={value} index={0}>
//       {
//       resdata?.isLoading ? (
//         <Box sx={{minHeight:"30vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
//           <CircularProgress color="greenclr"/>
//         </Box>
//       ) 
//       : 
//       <>
//         <Box>
//           <Box>
//             <ContentEditorHeaderSearch 
//             setOpenGridCards={setOpenGridCards}
//             searchVal={searchVal}
//             setSearchVal={setSearchVal}
//             searchFunc={searchPublishedContentFunc}
//             />
//           </Box>
//           {/* <Box>
//                 <ContentEditorDataGrid/>
//             </Box> */}

//         {!isShownNoResult ? (
//           <Box>
//             {openGridCards ? (
//               <Box>
//               <ContentEditorGridCards/>
//             </Box>
//             ) : (
//               <Box>
//                 <ContentEditorDataGrid 
//                 gridRowsData={allPublishedContent?.allPublishedContentList}
//                 deletedItemFunc={deletePublishedContentItem}
//                 // refetchAllData={getAllPublishedContentFunc}
//                 setSelectedRowFunc={setSelectedRow}
//                 setShowUpdateMedia={setShowUpdateMedia}
//                 setSelectMediaItem={setSelectMediaItem}
//                 />
//               </Box>
//             )}
//           </Box>
//           )
//           : 
//           (
//             // <NoResultMsg searchValueText={`“${searchVal}”`} />
//             <NoResultMsg searchValueText={searchVal} />
//           )}
//         </Box>
//       </>
//       }
      
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//       {
//         respdata?.isLoading ? (
//           <Box sx={{minHeight:"30vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
//             <CircularProgress color="greenclr"/>
//           </Box>
//         ) 
//         : 
//         <>
//           <Box>
//             <Box>
//               <ContentEditorHeaderSearch 
//               setOpenGridCards={setOpenGridCards}
//               searchVal={searchVal}
//               setSearchVal={setSearchVal}
//               searchFunc={searchDraftContentFunc}
//               />
//             </Box>
//             {/* <Box>
//                   <ContentEditorDataGrid/>
//               </Box> */}
//             {openGridCards ? (
//               <Box>
//               <ContentEditorGridCards/>
//             </Box>
//             ) : (
//               <Box>
//                 <ContentEditorDataGrid 
//                 gridRowsData={allDraftContent?.allDraftContentList}
//                 deletedItemFunc={deleteDraftContentItem}
//                 setSelectedRowFunc={setSelectedRow}
//                 />
//             </Box>
//             )}
//           </Box>
//         </>
//         }
        
//       </TabPanel>



import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { SendNotificationMainBox } from "./SendNotificationMainBox";
import SendNotificationAllUserDataGrid from "./SendNotificationAllUserDataGrid";
import SendNotificationCustomerDataGrid from "./SendNotificationCustomerDataGrid";
import SendNotificationCatererDataGrid from "./SendNotificationCatererDataGrid";
import SendNotificationDriverDataGrid from "./SendNotificationDriverDataGrid";
import { SendNotificationHeader } from "./SendNotificationHeader";
// import { SendNotificationMainBox } from "../../SendNotification/components/SendNotificationComp/SendNotificationMainBox";
// import { SendNotificationMainBox } from "./SendNotificationMainBox";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography sx={{ fontFamily: "outfit" }}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function SendNotificationTabs({ onHandleClick,setIsShownSendNotificationOrderDetails }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <SendNotificationHeader setIsShownSendNotificationOrderDetails={setIsShownSendNotificationOrderDetails} title={"Notification History"}/>
      </Box>
      <Box
        sx={{
          borderBottom: "1px solid #E1E1E6",
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor="#1A1824"
          padding="0px"
          // // textColor="secondary"
          // indicatorColor="#2B817B"
          TabIndicatorProps={{
            style: {
              backgroundColor: "#2B817B",
              paddingTop: "0px",
              margin: "0px",
            },
          }}
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "#2B817B",
              height: "4px",
            },
            "& .MuiTab-root": {
              color: "#9EA3AE",
              fontSize: { lg: "16px", md: "16px", sm: "16px", xs: "12px" },
              fontWeight: "400",
              lineHeight: "25.6px",
              paddingBottom: "0px",
              paddingLeft: { lg: "15px", md: "15px", sm: "auto", xs: "0px" },
              //   paddingTop : "0px"
            },
            "& .Mui-selected": {
              color: "#1A1824",
              fontSize: { lg: "16px", md: "16px", sm: "16px", xs: "12px" },
              fontWeight: "600",
              lineHeight: "25.6px",
            },
          }}
        >
          <Tab
            label="All User"
            {...a11yProps(0)}
            sx={{
              textTransform: "capitalize",
            }}
          />
          <Tab
            label="Customer"
            {...a11yProps(1)}
            sx={{
              textTransform: "capitalize",
            }}
          />
          <Tab
            label="Caterer"
            {...a11yProps(2)}
            sx={{
              textTransform: "capitalize",
            }}
          />
          <Tab
            label="Driver"
            {...a11yProps(2)}
            sx={{
              textTransform: "capitalize",
            }}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <SendNotificationAllUserDataGrid/>
        {/* <SendNotificationMainBox
          hasTextButtonTitle1={"Last Added"}
          hasTextButtonTitle2={"Any Status"}
          hasTextButtonTitle3={"All Main Courses"}
          allUserDataGrid = {true}
        /> */}
      </TabPanel>
      <TabPanel value={value} index={1}>
      <SendNotificationCustomerDataGrid/>
      {/* <SendNotificationMainBox
          hasTextButtonTitle1={"Last Added"}
          hasTextButtonTitle2={"Any Status"}
          hasTextButtonTitle3={"All Main Courses"}
          customerDataGrid = {true}
        /> */}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {/* {" "} */}
        <SendNotificationCatererDataGrid />
      </TabPanel>
      <TabPanel value={value} index={3}>
        {/* {" "} */}
        <SendNotificationDriverDataGrid />
      </TabPanel>
    </Box>
  );
}
