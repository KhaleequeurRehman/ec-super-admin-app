import * as React from "react";
import {useState} from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";
// import CustomizedModal from "../../../../components/CustomizedModal";
import NoResultMsg from "../../../components/NoResultMsg/NoResultMsg";
import { ContentEditorGridCards } from "./ContentEditorGridCards/ContentEditorGridCards";
import { ContentEditorHeaderSearch } from "./ContentEditorHeaderSearch";
import ContentEditorDataGrid from "./ContentEditorDataGrid";
import { useDeleteEditorContentDataMutation, useGetAllDraftContentMutation, useGetAllPublishedContentMutation, useSearchEditorContentDataMutation } from "../../../api/contentEditor";

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

export default function ContentEditorTab({ onHandleClick,setShowUpdateMedia,setSelectMediaItem }) {

  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [totalPublishedContentCount, setTotalPublishedContentCount] = useState(1);

  const [page2, setPage2] = useState(1);
  const [size2, setSize2] = useState(10)
  const [totalDraftContentCount, setTotalDraftContentCount] = useState(1);

  const [getAllPublishedContent,resdata] = useGetAllPublishedContentMutation()
  const [allPublishedContent, setAllPublishedContent] = useState("");

  const [getAllDraftContent,respdata] = useGetAllDraftContentMutation()
  const [allDraftContent, setAllDraftContent] = useState("");

  const [deleteEditorContentData,respondata] = useDeleteEditorContentDataMutation()

  const [searchEditorContentData,responsedata] = useSearchEditorContentDataMutation()

  const [selectedRow, setSelectedRow] = useState("");

  const [searchVal, setSearchVal] = useState("");
  const [isShownNoResult, setIsShownNoResult] = useState(false);

  const [value, setValue] =useState(0);
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [openGridCards, setOpenGridCards] = useState(false)

  const deletePublishedContentItem = ()=> {
    deleteEditorContentData({id:selectedRow?._id}).then((res) => {
      if(res.data){
        getAllPublishedContentFunc()
        console.log("published content deleted",selectedRow)
        
      }
    })
  }

  const deleteDraftContentItem = ()=> {
    deleteEditorContentData({id:selectedRow?._id}).then((res) => {
      if(res.data){
        getAllDraftContentFunc()
        console.log("draft content deleted",selectedRow)
      }
    })
  }
  
  const getAllPublishedContentFunc = () => {
    getAllPublishedContent({page:page,size:size}).then((res) => {
      if(res.data){
        console.log("res.data allPublishedContentData ", res?.data);
        setAllPublishedContent(res?.data)
        setTotalPublishedContentCount(res?.data?.totalpublishedContentCount)
      }
    })
    // getAllPublishedContent({ page:1, size:10 }).then((res) => {
    //   if (res.data){
    //     console.log("res.data caterersData ", res?.data);
    //     setCaterersData(res?.data)
    //   }
    // });
  }
  const getAllDraftContentFunc = () => {
    getAllDraftContent({page:page2,size:size2}).then((res) => {
      if(res.data){
        console.log("res.data allDraftContentData ", res?.data);
        setAllDraftContent(res?.data)
        setTotalDraftContentCount(res?.data?.totalDraftContentCount)
      }
    })
  }

  const searchPublishedContentFunc = (newValSearch)=> {
    if(newValSearch === ""){
      getAllPublishedContentFunc()
      setIsShownNoResult(false)
    }else{
      searchEditorContentData({search: newValSearch}).then((res)=> {
        if (res.data){
          console.log("searchEditorContent res.data ", res?.data);
          const searchResData = res?.data && res?.data?.data.length>0 && res?.data?.data.filter((currItem)=> currItem.publish === true)
          console.log("searchResData search ", searchResData);
          const allPublishedContentListData = searchResData && searchResData.length>0 && searchResData.map((item,i)=>{
          return {
            id:i+1,
            ...item,
          }
        })
          setAllPublishedContent({allPublishedContentList:allPublishedContentListData})
          setTotalPublishedContentCount(allPublishedContentListData?.length)
          if(res?.data?.data.length === 0) {
            setIsShownNoResult(true)
          }else{
            setIsShownNoResult(false)
          }
        }
      })
      // searchCustomers({ search: newValSearch }).then((res) => {
      //   if (res.data){
      //     console.log("searchCustomers res.data customersData ", res?.data);
      //     setCustomersData(res?.data)
      //     if(res?.data?.data.length === 0) {
      //       setIsShownNoResult(true)
      //     }else{
      //       setIsShownNoResult(false)
      //     }
      //   }
      // });
    }
  }

  const searchDraftContentFunc = (newValSearch)=> {
    if(newValSearch === ""){
      getAllDraftContentFunc()
      setIsShownNoResult(false)
    }else{
      searchEditorContentData({search: newValSearch}).then((res)=> {
        // if (res.data){
        //   console.log("searchEditorContent res.data ", res?.data);
        //   setAllDraftContent(res?.data)
        //   if(res?.data?.data.length === 0) {
        //     setIsShownNoResult(true)
        //   }else{
        //     setIsShownNoResult(false)
        //   }
        // }
        if (res.data){
          console.log("searchEditorContent res.data ", res?.data);
          const searchResData = res?.data && res?.data?.data.length>0 && res?.data?.data.filter((currItem)=> currItem.publish === false)
          console.log("searchResData search ", searchResData);
          const allDraftContentListData = searchResData && searchResData.length>0 && searchResData.map((item,i)=>{
          return {
            id:i+1,
            ...item,
          }
        })
          setAllDraftContent({allDraftContentList:allDraftContentListData})
          setTotalDraftContentCount(allDraftContentListData?.length)
          if(res?.data?.data.length === 0) {
            setIsShownNoResult(true)
          }else{
            setIsShownNoResult(false)
          }
        }
      })
      
      // searchCustomers({ search: newValSearch }).then((res) => {
      //   if (res.data){
      //     console.log("searchCustomers res.data customersData ", res?.data);
      //     setCustomersData(res?.data)
      //     if(res?.data?.data.length === 0) {
      //       setIsShownNoResult(true)
      //     }else{
      //       setIsShownNoResult(false)
      //     }
      //   }
      // });
    }
  }

  useEffect(() => {
    getAllPublishedContentFunc()
  }, [page])

  useEffect(() => {
    getAllDraftContentFunc()
  }, [page2])

  console.log("allDraftContent => ",allDraftContent)

  return (
    <Box sx={{ width: "100%" }}>
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
            label="Publish"
            {...a11yProps(0)}
            sx={{
              textTransform: "capitalize",
            }}
          />
          <Tab
            label="Draft"
            {...a11yProps(1)}
            sx={{
              textTransform: "capitalize",
            }}
          />
          
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      {
      resdata?.isLoading ? (
        <Box sx={{minHeight:"30vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
          <CircularProgress color="greenclr"/>
        </Box>
      ) 
      : 
      <>
        <Box>
          <Box>
            <ContentEditorHeaderSearch 
            setOpenGridCards={setOpenGridCards}
            searchVal={searchVal}
            setSearchVal={setSearchVal}
            searchFunc={searchPublishedContentFunc}
            />
          </Box>
          {/* <Box>
                <ContentEditorDataGrid/>
            </Box> */}

        {!isShownNoResult ? (
          <Box>
            {openGridCards ? (
              <Box>
              <ContentEditorGridCards/>
            </Box>
            ) : (
              <Box>
                <ContentEditorDataGrid 
                gridRowsData={allPublishedContent?.allPublishedContentList}
                deletedItemFunc={deletePublishedContentItem}
                // refetchAllData={getAllPublishedContentFunc}
                setSelectedRowFunc={setSelectedRow}
                setShowUpdateMedia={setShowUpdateMedia}
                setSelectMediaItem={setSelectMediaItem}
                count={totalPublishedContentCount>size? totalPublishedContentCount%size !==0? Math.round(totalPublishedContentCount/size)+1 : Math.round(totalPublishedContentCount/size) : 1}
                page={page}
                onChangeHandler={(event, value) =>{ console.log("value onChange => ", value); setPage(value)} }
                />
              </Box>
            )}
          </Box>
          )
          : 
          (
            // <NoResultMsg searchValueText={`“${searchVal}”`} />
            <NoResultMsg searchValueText={searchVal} />
          )}
        </Box>
      </>
      }
      
    </TabPanel>
    <TabPanel value={value} index={1}>
    {
      respdata?.isLoading ? (
        <Box sx={{minHeight:"30vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
          <CircularProgress color="greenclr"/>
        </Box>
      ) 
      : 
      <>
        <Box>
          <Box>
            <ContentEditorHeaderSearch 
            setOpenGridCards={setOpenGridCards}
            searchVal={searchVal}
            setSearchVal={setSearchVal}
            searchFunc={searchDraftContentFunc}
            />
          </Box>
          {/* <Box>
                <ContentEditorDataGrid/>
            </Box> */}
          {!isShownNoResult ? (
            <Box>
              {openGridCards ? (
              <Box>
              <ContentEditorGridCards/>
            </Box>
              ) : (
                <Box>
                  <ContentEditorDataGrid 
                  gridRowsData={allDraftContent?.allDraftContentList}
                  deletedItemFunc={deleteDraftContentItem}
                  setSelectedRowFunc={setSelectedRow}
                  setShowUpdateMedia={setShowUpdateMedia}
                  setSelectMediaItem={setSelectMediaItem}
                  count={totalDraftContentCount>size? totalDraftContentCount%size !==0? Math.round(totalDraftContentCount/size)+1 : Math.round(totalDraftContentCount/size) : 1}
                  page={page}
                  onChangeHandler={(event, value) =>{ console.log("value onChange => ", value); setPage(value)} }
                  />
              </Box>
              )}
            </Box>
           )
           : 
           (
             // <NoResultMsg searchValueText={`“${searchVal}”`} />
             <NoResultMsg searchValueText={searchVal} />
           )}
        </Box>
      </>
      }
      
    </TabPanel>
    </Box>
  );
}
