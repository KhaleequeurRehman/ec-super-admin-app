import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import WarningIcon from '@mui/icons-material/Warning';
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import IconButton from "@mui/material/IconButton";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { BsThreeDots } from "react-icons/bs";
import CustomDataGrid from "../../../components/CustomDataGrid";
import CustomPagination from "../../../components/CustomPagination";
import Layout from "../../Layout";
import Header from "../Header";
import ViewDetails from "../ViewDetails/ViewDetails";
import { NotifcationCard } from "../NotifcationCard";
import {useDeleteMealplanMutation, useFilterMealpansWithStatusMutation, useGetAllMealpansQuery,useGetAllMealpansWithFilterMutation,useGetAllMealpansWithFilterQuery,useGetMealplanDetailMutation,useSearchMealpansMutation} from "../../../api/mealplan"
import { CircularProgress, ListItemIcon, ListItemText } from "@mui/material";
import  CustomCancelDialogBox from "../../../components/CustomCancelDialogBox"
import CustomizedModal from "../../../components/CustomizedModal";
import NoResultMsg from '../../../components/NoResultMsg/NoResultMsg'
import AddFoodMenu from "./AddFoodMenu";
import UpdateFoodMenu from "./UpdateFoodMenu";
import { IMG_BASE_URL } from "config";

const NotificationData = [
    {
      icon: "./assets/images/greenNotification.svg",
      title: "You have new meal approval request",
      subTitle:
        "you have 4 meal approval request from 3 caterer that you need to review",
      buttonText: "See all request",
    },
  ];


  
const FoodMenu = () => {
  // const {data:allMealplanListData,isLoading,refetch} = useGetAllMealpansQuery()
  // const {data,isLoading,refetch,isSuccess} = useGetAllMealpansQuery()
  // const [getMealplanDetail,resdata] = useGetMealplanDetailMutation()
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [totalMealPlansCount, setTotalMealPlansCount] = useState(1);
  // const {data,isLoading,refetch,isSuccess} = useGetAllMealpansWithFilterQuery(`page=${page}&size=${size}`)
  const [getAllMealplans,responsedata] = useGetAllMealpansWithFilterMutation()

  const [filterMealpans,responsdata] = useFilterMealpansWithStatusMutation()

  const [deleteMealplan,resdata] = useDeleteMealplanMutation()

  const [searchMealpans,respdata] = useSearchMealpansMutation()

  // const [allMealplanListData, setAllMealplanListData] = useState(data || []);
  const [allMealplanListData, setAllMealplanListData] = useState([]);

  // const [refetchFlag, setRefetchFlag] = useState(false);

  const [selectedMealplan, setSelectedMealplan] = useState("");
  
  const [viewDetails, setViewDetails] = useState(false);

  const [openDeleteDialog,setOpenDeleteDialog] = useState(false)

  const [searchVal, setSearchVal] = useState("");
  const [isShownNoResult, setIsShownNoResult] = useState(false);

  const [addModalOpen, setAddModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  // const [actionAnchorEl, setActionAnchorEl] = useState(null);

  const handleAddModalOpen = () => {
      setAddModalOpen(true);
  };

  const handleAddModalClose = () => {
      setAddModalOpen(false);
  };

  const handleUpdateModalOpen = () => {
      setUpdateModalOpen(true);
  };

  const handleUpdateModalClose = () => {
      setUpdateModalOpen(false);
  };

  
  
  const handleFilter = (data) => {
    if(data === "active" || data === "deactive"){
      filterMealpansWithStatus(data)
    }else if(data === "all"){
      getMealplanData()
    }
  };
  

  // const getSearchValue =(val)=>{
  //   console.log(val)
  // }



  // const isActionMenuOpen = Boolean(actionAnchorEl);

  // const handleActionMenuClose = () => {
  //   setActionAnchorEl(null);
  // };

  // const handleActionMenuOpen = (event) => {
  //   setActionAnchorEl(event.currentTarget);
  // };

  // const getMealplanDetailData = ()=> {
  //   getMealplanDetail({ id:"63b6714cdb5e4c3babd843b3" }).then((res) => {
  //     if (res.data){
  //       console.log("res.data malplanDetailData ", res?.data);
  //       setMealplanDetailData(res?.data?.data)
  //     }
  //   });
  // }
  
  const getMealplanData = ()=> {
    getAllMealplans({ page:page, size:size }).then((res) => {
      if (res.data){
        console.log("res.data getMealplanData ", res?.data);
        setAllMealplanListData(res?.data)
        setTotalMealPlansCount(res?.data?.totalMealPlansCount)
      }
    });
  }


  const getLastAddedMealpansData = ()=> {
    getAllMealplans({ page:page, size:size,sortBy:"createdAt",orderBy:"desc" }).then((res) => {
      if (res.data){
        console.log("res.data getLastAddedMealpansData ", res?.data);
        setAllMealplanListData(res?.data)
        setTotalMealPlansCount(res?.data?.totalMealPlansCount)
      }
    });
  }

  const filterMealpansWithStatus = (status)=> {
    filterMealpans({ page:page, size:10,status:status }).then((res) => {
      if (res.data){
        console.log("res.data filterMealpansWithStatus ", res?.data);
        setAllMealplanListData(res?.data)
        setTotalMealPlansCount(res?.data?.totalMealPlansCount)
      }
    });
  }
  
  useEffect(() => {
    getMealplanData()
  }, [page])


  // useEffect(() => {
  //   // getMealplanDetailData()

  //   if(isSuccess === true){
  //     setAllMealplanListData(data || [])
  //   }
  //   if(refetchFlag === true){
  //     refetch()
  //     setAllMealplanListData(data || [])
  //   }
  // }, [refetchFlag,isSuccess])


  const searchMealpansFunc = (newValSearch)=> {
    if(newValSearch === ""){
      setRefetchFlag(true)
      setIsShownNoResult(false)
    }else{
      searchMealpans({ search: newValSearch }).then((res) => {
        if (res.data){
          console.log("searchMealpans res.data mealpansData ", res?.data);
          setAllMealplanListData(res?.data)
          setTotalMealPlansCount(res?.data?.totalMealPlansCount)
          if(res?.data?.data.length === 0) {
            setIsShownNoResult(true)
          }else{
            setIsShownNoResult(false)
          }
        }
      });
    }
  }


  
  const girdTableColumnsArr = [
    { field: "id", headerName: "#", width: 70 },
    {
      field: "image",
      headerName: "Image",
      width: 150,
      height:70,
      renderCell: (params) => {
        return (
          <>
            <Box py="5px" sx={{display:"flex",alignItems:"center"}}>
              <Box sx={{width:"48px",height:"48px",borderRadius:"6px"}}>
                {/* <img src={`https://backend.eatcoast.ca/v1/mealplane/${params.value}`} alt="dishIcon" style={{width:"100%", height:"100%",borderRadius:"6px"}} /> */}
                {/* <img src={`https://ec-backend-app-mg6rk.ondigitalocean.app/image/mealplane/${params.value}`} alt="dishIcon" style={{width:"100%", height:"100%",borderRadius:"6px"}} /> */}
                <img src={`${IMG_BASE_URL}/image/mealplane/${params.value}`} alt="dishIcon" style={{width:"100%", height:"100%",borderRadius:"6px"}} />
              </Box>
            </Box>
          </>
        );
      },
    },
    {
      field: "menuName", 
      headerName: "Menu Name",
      width: 200,
    },
    {
      field: "cuisine",
      headerName: "Cuisine",
      width: 220,
    },
    {
      field: "caterer",
      headerName: "Caterer",
      width: 220,
    },
    {
      field: "period",
      headerName: "Period",
      width: 220,
      renderCell: (params) => {
        return (
          <>
            <Box sx={{border:"1px solid #D5E6E5",borderRadius:"2px",p:"5px 10px"}}>
              <Typography>{params.value.from && params.value.from}</Typography> 
              <Typography>{params.value.to && params.value.to}</Typography> 
            </Box>
          </>
        );
      },
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Box>
                { params.value}
            </Box>
          </>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 100,
      renderCell: (params) => {
        return (
          <>
            {/* <Box>
              <Button sx={{minWidth:"24px",minHeight:"24px",p:"4px",color:"#42C677",textTransform:"none",p:"4px",border:"1px solid #80B3B0", borderRadius:"3px"}} variant="text" onClick={(e)=>{handleActionMenuOpen(e);setSelectedMealplan(params?.row);}} >
                <BsThreeDots style={{color:"#2B817B"}} />
              </Button>
            </Box> */}

            <Box>
              <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                  <React.Fragment>
                    <Box sx={{ width: "24px", height: "24px" }}>
                      <Box
                        variant="contained"
                        {...bindTrigger(popupState)}
                        sx={{
                          width: "24px",
                          height: "24px",
                          border: "1px solid #80B3B0",
                          backgroundColor: "#ffffff",
                          padding: "4px",
                          borderRadius: "3px",
                          cursor: "pointer",
                        }}
                      >
                        <img
                          src="./assets/images/More.svg"
                          alt=""
                          width="16px"
                          height="16px"
                        />
                      </Box>
                    </Box>
                    <Menu {...bindMenu(popupState)}>
                      <MenuItem onClick={() => {
                          setViewDetails(true);
                          setSelectedMealplan(params?.row);
                          popupState.close();
                        }}>
                        <ListItemIcon>
                          <VisibilityOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>View Details</ListItemText>
                      </MenuItem>
                      <MenuItem onClick={() => {
                          popupState.close();
                          setSelectedMealplan(params?.row);
                          handleUpdateModalOpen()
                        }}>
                        <ListItemIcon>
                          <img
                            src="assets/images/editbtnicon.png"
                            alt="edit btn icon"
                            width="16px"
                            height="16px"
                          />
                        </ListItemIcon>
                        <ListItemText>Edit</ListItemText>
                      </MenuItem>
                      {/* <MenuItem onClick={() => {
                          popupState.close();
                          // setSeletedCusine(params?.row)
                          // handleUpdateModalOpen()
                        }}>
                        <ListItemIcon>
                          <img
                            src="assets/images/editbtnicon.png"
                            alt="edit btn icon"
                            width="16px"
                            height="16px"
                          />
                        </ListItemIcon>
                        <ListItemText>Edit</ListItemText>
                      </MenuItem> */}
                      <MenuItem
                        onClick={() => {
                          popupState.close();
                          setOpenDeleteDialog(true);
                          setSelectedMealplan(params?.row);
                          // deleteMealplan()
                        }}
                      >
                        <ListItemIcon>
                          <img
                            src="assets/images/trash.svg"
                            alt=""
                            width="16px"
                            height="16px"
                          />
                        </ListItemIcon>
                        <ListItemText sx={{ color: "#E75C62" }}>
                          delete
                        </ListItemText>
                      </MenuItem>
                    </Menu>
                  </React.Fragment>
                )}
              </PopupState>
            </Box>
          </>
        );
      },
    },
  ];

  // const gridTableRowArr = [
  //   {
  //     id: 1,
  //     image: "assets/images/dish1.svg",
  //     menuName: "Arabian Kebab, Middle East Special",
  //     cuisine:'Arabic',
  //     caterer:'Chef Juna Caterer',
  //     period:'2021/09/12  2021/10/12',
  //     status:'Active',
  //   },
  //   {
  //     id: 2,
  //     image: "assets/images/dish1.svg",
  //     menuName: "Arabian Kebab, Middle East Special",
  //     cuisine:'Arabic',
  //     caterer:'Chef Juna Caterer',
  //     period:'2021/09/12  2021/10/12',
  //     status:'Active',
  //   },
  //   {
  //     id: 3,
  //     image: "assets/images/dish1.svg",
  //     menuName: "Arabian Kebab, Middle East Special",
  //     cuisine:'Arabic',
  //     caterer:'Chef Juna Caterer',
  //     period:'2021/09/12  2021/10/12',
  //     status:'Active',
  //   },
  //   {
  //     id: 4,
  //     image: "assets/images/dish1.svg",
  //     menuName: "Arabian Kebab, Middle East Special",
  //     cuisine:'Arabic',
  //     caterer:'Chef Juna Caterer',
  //     period:'2021/09/12  2021/10/12',
  //     status:'Active',
  //   },
  //   {
  //     id: 5,
  //     image: "assets/images/dish1.svg",
  //     menuName: "Arabian Kebab, Middle East Special",
  //     cuisine:'Arabic',
  //     caterer:'Chef Juna Caterer',
  //     period:'2021/09/12  2021/10/12',
  //     status:'Active',
  //   },
  //   {
  //     id: 6,
  //     image: "assets/images/dish1.svg",
  //     menuName: "Arabian Kebab, Middle East Special",
  //     cuisine:'Arabic',
  //     caterer:'Chef Juna Caterer',
  //     period:'2021/09/12  2021/10/12',
  //     status:'Active',
  //   },
  //   {
  //     id: 7,
  //     image: "assets/images/dish1.svg",
  //     menuName: "Arabian Kebab, Middle East Special",
  //     cuisine:'Arabic',
  //     caterer:'Chef Juna Caterer',
  //     period:'2021/09/12  2021/10/12',
  //     status:'Active',
  //   },
  // ];


  // const gridTableRowArr = [
  //   {
  //     id: 1,
  //     image: "assets/images/dish1.svg",
  //     menuName: `${mealplanDetailData?.name !== undefined ? mealplanDetailData?.name : 'no data'}`,
  //     cuisine:`${mealplanDetailData?.cuisine !== undefined ? mealplanDetailData?.cuisine : 'no data'}`,
  //     caterer:`${mealplanDetailData?.owner !== undefined ? mealplanDetailData?.owner : 'no data'}`,
  //     period:{
  //       from:`${mealplanDetailData?.createdAt !== undefined ? new Date(mealplanDetailData?.createdAt).toLocaleDateString() : 'no data'}`,
  //       to:`${mealplanDetailData?.endDate  !== undefined ? new Date(mealplanDetailData?.endDate).toLocaleDateString() : 'no data'}`
  //     },
  //     status:`${mealplanDetailData?.status !== undefined ? mealplanDetailData?.status === true ? "Active"  : "Deactive" :'no data'}`,
  //   },
  // ]
  // const actionMenuId = 'primary-search-account-menu-mobile';
  // const actionMenu = (
  //   <Menu
  //     anchorEl={actionAnchorEl}
  //     anchorOrigin={{
  //       vertical: 'top',
  //       horizontal: 'right',
  //     }}
  //     id={actionMenuId}
  //     keepMounted
  //     transformOrigin={{
  //       vertical: 'top',
  //       horizontal: 'right',
  //     }}
  //     open={isActionMenuOpen}
  //     onClose={handleActionMenuClose}
  //   >
  //     <MenuItem onClick={()=>{ setViewDetails(true); handleActionMenuClose(); }}>
  //       <IconButton size="large" aria-label="show 4 new mails" color="inherit">
  //         <img src="assets/images/eyeIcon.svg" alt="eyeIcon" />
  //       </IconButton>
  //       <Typography sx={{fontSize:"14px",fontWeight:"600",color:"#1A1824"}}>View Details</Typography>
  //     </MenuItem>
  //     <MenuItem onClick={handleActionMenuClose}>
  //       <IconButton
  //         size="large"
  //         color="inherit"
  //       >
  //        <img src="assets/images/messageIcon.svg" alt="messageIcon" />
  //       </IconButton>
  //       <Typography sx={{fontSize:"14px",fontWeight:"600",color:"#1A1824"}}>Send Message</Typography>
  //     </MenuItem>
  //   </Menu>
  // );


  // console.log('mealplanData => ', mealplanDetailData)
  // console.log('mealplanData => ', squery)
  return (
    <React.Fragment>
      {viewDetails ? (
        <Box>
            <ViewDetails setViewDetails={setViewDetails} selectedMealplan={selectedMealplan} />
        </Box>
      ) : (
        <Layout>
          <Box>
            <Box>
              {
                NotificationData.length && NotificationData.length>0 && NotificationData.map((item,i) => {
                  return (
                      <NotifcationCard item={item} key={i} />
                  );
                })
              }
              <Box my="20px">
                <Header
                  title="All Menu"
                  addButtonTitle="New Menu"
                  addButtonOnclickHandler={handleAddModalOpen}
                  lastAddedBtnOnClickHandler={getLastAddedMealpansData}
                  searchVal={searchVal}
                  setSearchVal={setSearchVal}
                  searchFunc={searchMealpansFunc}
                  menuItems={[
                    { name: "active", onClick: () => { handleFilter("active"); console.log('menuItem active click handler') }},
                    { name: "deactive", onClick: () => { handleFilter("deactive"); console.log('menuItem pause click handler') }},
                    { name: "all", onClick: () => { handleFilter("all"); console.log('menuItem cancel click handler') }},
                  ]}

                  // menu={[
                  //   { title: "All Main Courses", items: ["item_1", "item_2", "item_3"] },
                  //   { title: "Last Added" },
                  //   { title: "Any Status" },
                  // ]}
                  // getSearchValue={getSearchValue}
                  // isShownCustomBtn={false}
                  />
                  {/* <Header addButtonOnclickHandler={handleAddModalOpen} menu={[
            {title:'Last Added',items:['Item_1','Item_2','Item_3'],handleChange:'onClick'},
            {title:'Any Status',items:['Item_1','Item_2','Item_3'],handleChange:'onClick'}]}/> */}
              </Box>
            </Box>

            {
              responsedata?.isLoading ? (
                <Box sx={{minHeight:"30vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
                  <CircularProgress color="greenclr"/>
                </Box>
              ) 
              : 
              <>
               {!isShownNoResult ? (
                <Box
                  width="100%"
                  border="1px solid #e1e1e6"
                  p="10px 20px"
                  borderRadius="8px"
                  minHeight="60vh"
                >
                  {
                    allMealplanListData?.allMealplanList && allMealplanListData?.allMealplanList !==undefined?
                    <>
                      <CustomDataGrid
                        // rows={gridTableRowArr}
                        rows={allMealplanListData?.allMealplanList}
                        columns={girdTableColumnsArr}
                        disableSelectionOnClick
                        autoHeight
                        hideFooterPagination={true}
                      />
                    </>
                    : 
                    "no data"
                  }

                  <Box sx={{
                    margin: "20px 0",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}>
                    <Typography sx={{color:"#9EA3AE",fontSize:"14px",fontWeight:"400"}}>
                    {/* Show 1-10 of 50 entries */}
                    {`Show ${page}-${size} of ${totalMealPlansCount} entries`}
                    </Typography>
                    <CustomPagination 
                    // count={totalMealPlansCount>=size? Math.round(totalMealPlansCount/size) : 1}
                    count={totalMealPlansCount>size? totalMealPlansCount%size !==0? Math.round(totalMealPlansCount/size)+1 : Math.round(totalMealPlansCount/size) : 1}
                    page={page}
                    onChangeHandler={(event, value) =>{ console.log("value onChange => ", value); setPage(value)} }
                    />
                  </Box>
                </Box>
                ) 
                : 
                (
                  <NoResultMsg searchValueText={searchVal} />
                )}
              </>
            }

          {/* {openDeleteDialog ? <CustomCancelDialogBox open={openDeleteDialog} setOpen={setOpenDeleteDialog}  /> : ""} */}
          {
            openDeleteDialog ? 
              <>
                <CustomizedModal
                title="Delete Mealplan"
                aria-labelledby="customized-dialog-title"
                open={openDeleteDialog}
                handleClose={()=> setOpenDeleteDialog(false)}
                actionBtnsText={['Discard','Yes, sure']}
                actionBtn2OnClickHandler={
                  ()=> {
                    deleteMealplan({ id:selectedMealplan?._id });
                    getMealplanData()
                    // setRefetchFlag(true)
                  }
                }
                isHeaderShown={false}
                >
                    <Box sx={{my:"20px",minWidth:{xs:"310px",sm:"400px"}}}>
                        <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center"}}>
                            <Box sx={{borderRadius:"8px",p:"16px 16px 4px 16px",textAlign:"center"}}>
                                <IconButton sx={{backgroundColor:"#FEF9E8"}}>
                                    <WarningIcon sx={{ color: "yellow",fontSize:{xs:"32px",md:"48px"} }} />
                                </IconButton>
                                <Typography sx={{fontSize: { xs: "13px", md: "16px" },fontWeight: "600",color: "#1A1824",}}>Delete Mealplan</Typography>  
                                <Typography sx={{fontSize: { xs: "13px", md: "14px" },fontWeight: "400",color: "#545359",}}>Deleted items cannot be returned,<br /> are you sure you want to delete this item?</Typography>  
                            </Box>
                        </Box>
                    </Box>
                </CustomizedModal>
              </>
            : 
            ""
          }

          {/* {actionMenu} */}

          <CustomizedModal
          title="Add Menu"
          aria-labelledby="customized-dialog-title"
          open={addModalOpen}
          handleClose={handleAddModalClose}
          isActionShown={false}
          >
            <Box sx={{my:"20px",minWidth:{xs:"310px",sm:"400px",md:"500px"},mb:"20px"}}>
              <AddFoodMenu 
              handleAddModalClose={handleAddModalClose}
              refetchAllFoodMenusData={()=> {getMealplanData()}}
              // refetchAllFoodMenusData={()=> {setRefetchFlag(true)}}
              />
            </Box>
          </CustomizedModal>


          <CustomizedModal
          title="Update Menu"
          aria-labelledby="customized-dialog-title"
          open={updateModalOpen}
          handleClose={handleUpdateModalClose}
          isActionShown={false}
          >
            <Box sx={{my:"20px",minWidth:{xs:"310px",sm:"400px",md:"500px"},mb:"20px"}}>
              <UpdateFoodMenu 
              handleUpdateModalClose={handleUpdateModalClose}
              selectedMealplan={selectedMealplan}
              refetchAllFoodMenusData={()=> {getMealplanData()}}
              // refetchAllFoodMenusData={()=> {setRefetchFlag(true)}}
              />
            </Box>
          </CustomizedModal>

          </Box>
        </Layout>
      )}
    </React.Fragment>
  );
}

export default FoodMenu;






















// import React, { useEffect, useState } from "react";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import WarningIcon from '@mui/icons-material/Warning';
// import InputAdornment from "@mui/material/InputAdornment";
// import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
// import IconButton from "@mui/material/IconButton";
// import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
// import { BsThreeDots } from "react-icons/bs";
// import CustomDataGrid from "../../../components/CustomDataGrid";
// import CustomPagination from "../../../components/CustomPagination";
// import Layout from "../../Layout";
// import Header from "../Header";
// import ViewDetails from "../ViewDetails/ViewDetails";
// import { NotifcationCard } from "../NotifcationCard";
// import {useDeleteMealplanMutation, useGetAllMealpansQuery,useGetMealplanDetailMutation} from "../../../api/mealplan"
// import { CircularProgress, ListItemIcon, ListItemText } from "@mui/material";
// import  CustomCancelDialogBox from "../../../components/CustomCancelDialogBox"
// import CustomizedModal from "../../../components/CustomizedModal";

// const NotificationData = [
//     {
//       icon: "./assets/images/greenNotification.svg",
//       title: "You have new meal approval request",
//       subTitle:
//         "you have 4 meal approval request from 3 caterer that you need to review",
//       buttonText: "See all request",
//     },
//   ];

// const FoodMenu = () => {
//   const {data:allMealplanListData,isLoading,refetch} = useGetAllMealpansQuery()
//   // const [getMealplanDetail,resdata] = useGetMealplanDetailMutation()
//   const [deleteMealplan,resdata] = useDeleteMealplanMutation()

//   const [refetchFlag, setRefetchFlag] = useState(false);

//   const [selectedMealplan, setSelectedMealplan] = useState("");
  
//   const [viewDetails, setViewDetails] = useState(false);

//   const [openDeleteDialog,setOpenDeleteDialog] = useState(false)

  // const getSearchValue =(val)=>{
//     console.log(val)
//   }

//   // const [actionAnchorEl, setActionAnchorEl] = useState(null);

//   // const isActionMenuOpen = Boolean(actionAnchorEl);

//   // const handleActionMenuClose = () => {
//   //   setActionAnchorEl(null);
//   // };

//   // const handleActionMenuOpen = (event) => {
//   //   setActionAnchorEl(event.currentTarget);
//   // };

//   // const getMealplanDetailData = ()=> {
//   //   getMealplanDetail({ id:"63b6714cdb5e4c3babd843b3" }).then((res) => {
//   //     if (res.data){
//   //       console.log("res.data malplanDetailData ", res?.data);
//   //       setMealplanDetailData(res?.data?.data)
//   //     }
//   //   });
//   // }
  
//   // useEffect(() => {
//   //   getMealplanDetailData()
//   // }, [])

//   useEffect(() => {
//     // getMealplanDetailData()
//     if(refetchFlag === true)
//     refetch()
//   }, [refetchFlag])

  
//   const girdTableColumnsArr = [
//     { field: "id", headerName: "#", width: 70 },
//     {
//       field: "image",
//       headerName: "Image",
//       width: 150,
//       height:70,
//       renderCell: (params) => {
//         return (
//           <>
//             <Box py="5px" sx={{display:"flex",alignItems:"center"}}>
//               <Box sx={{width:"48px",height:"48px",borderRadius:"6px"}}>
//                 <img src={`https://backend.eatcoast.ca/v1/mealplane/${params.value}`} alt="dishIcon" style={{width:"100%", height:"100%",borderRadius:"6px"}} />
//               </Box>
//             </Box>
//           </>
//         );
//       },
//     },
//     {
//       field: "menuName", 
//       headerName: "Menu Name",
//       width: 200,
//     },
//     {
//       field: "cuisine",
//       headerName: "Cuisine",
//       width: 220,
//     },
//     {
//       field: "caterer",
//       headerName: "Caterer",
//       width: 220,
//     },
//     {
//       field: "period",
//       headerName: "Period",
//       width: 220,
//       renderCell: (params) => {
//         return (
//           <>
//             <Box sx={{border:"1px solid #D5E6E5",borderRadius:"2px",p:"5px 10px"}}>
//               <Typography>{params.value.from && params.value.from}</Typography> 
//               <Typography>{params.value.to && params.value.to}</Typography> 
//             </Box>
//           </>
//         );
//       },
//     },
//     {
//       field: "status",
//       headerName: "Status",
//       width: 150,
//       renderCell: (params) => {
//         return (
//           <>
//             <Box>
//                 { params.value}
//             </Box>
//           </>
//         );
//       },
//     },
//     {
//       field: "action",
//       headerName: "Action",
//       width: 100,
//       renderCell: (params) => {
//         return (
//           <>
//             {/* <Box>
//               <Button sx={{minWidth:"24px",minHeight:"24px",p:"4px",color:"#42C677",textTransform:"none",p:"4px",border:"1px solid #80B3B0", borderRadius:"3px"}} variant="text" onClick={(e)=>{handleActionMenuOpen(e);setSelectedMealplan(params?.row);}} >
//                 <BsThreeDots style={{color:"#2B817B"}} />
//               </Button>
//             </Box> */}

//             <Box>
//               <PopupState variant="popover" popupId="demo-popup-menu">
//                 {(popupState) => (
//                   <React.Fragment>
//                     <Box sx={{ width: "24px", height: "24px" }}>
//                       <Box
//                         variant="contained"
//                         {...bindTrigger(popupState)}
//                         sx={{
//                           width: "24px",
//                           height: "24px",
//                           border: "1px solid #80B3B0",
//                           backgroundColor: "#ffffff",
//                           padding: "4px",
//                           borderRadius: "3px",
//                           cursor: "pointer",
//                         }}
//                       >
//                         <img
//                           src="./assets/images/More.svg"
//                           alt=""
//                           width="16px"
//                           height="16px"
//                         />
//                       </Box>
//                     </Box>
//                     <Menu {...bindMenu(popupState)}>
//                       <MenuItem onClick={() => {
//                           setViewDetails(true);
//                           setSelectedMealplan(params?.row);
//                           popupState.close();
//                         }}>
//                         <ListItemIcon>
//                           <VisibilityOutlinedIcon fontSize="small" />
//                         </ListItemIcon>
//                         <ListItemText>View Details</ListItemText>
//                       </MenuItem>
//                       {/* <MenuItem onClick={() => {
//                           popupState.close();
//                           // setSeletedCusine(params?.row)
//                           // handleUpdateModalOpen()
//                         }}>
//                         <ListItemIcon>
//                           <img
//                             src="assets/images/editbtnicon.png"
//                             alt="edit btn icon"
//                             width="16px"
//                             height="16px"
//                           />
//                         </ListItemIcon>
//                         <ListItemText>Edit</ListItemText>
//                       </MenuItem> */}
//                       <MenuItem
//                         onClick={() => {
//                           popupState.close();
//                           setOpenDeleteDialog(true);
//                           setSelectedMealplan(params?.row);
//                           // deleteMealplan()
//                         }}
//                       >
//                         <ListItemIcon>
//                           <img
//                             src="assets/images/trash.svg"
//                             alt=""
//                             width="16px"
//                             height="16px"
//                           />
//                         </ListItemIcon>
//                         <ListItemText sx={{ color: "#E75C62" }}>
//                           delete
//                         </ListItemText>
//                       </MenuItem>
//                     </Menu>
//                   </React.Fragment>
//                 )}
//               </PopupState>
//             </Box>
//           </>
//         );
//       },
//     },
//   ];

//   // const gridTableRowArr = [
//   //   {
//   //     id: 1,
//   //     image: "assets/images/dish1.svg",
//   //     menuName: "Arabian Kebab, Middle East Special",
//   //     cuisine:'Arabic',
//   //     caterer:'Chef Juna Caterer',
//   //     period:'2021/09/12  2021/10/12',
//   //     status:'Active',
//   //   },
//   //   {
//   //     id: 2,
//   //     image: "assets/images/dish1.svg",
//   //     menuName: "Arabian Kebab, Middle East Special",
//   //     cuisine:'Arabic',
//   //     caterer:'Chef Juna Caterer',
//   //     period:'2021/09/12  2021/10/12',
//   //     status:'Active',
//   //   },
//   //   {
//   //     id: 3,
//   //     image: "assets/images/dish1.svg",
//   //     menuName: "Arabian Kebab, Middle East Special",
//   //     cuisine:'Arabic',
//   //     caterer:'Chef Juna Caterer',
//   //     period:'2021/09/12  2021/10/12',
//   //     status:'Active',
//   //   },
//   //   {
//   //     id: 4,
//   //     image: "assets/images/dish1.svg",
//   //     menuName: "Arabian Kebab, Middle East Special",
//   //     cuisine:'Arabic',
//   //     caterer:'Chef Juna Caterer',
//   //     period:'2021/09/12  2021/10/12',
//   //     status:'Active',
//   //   },
//   //   {
//   //     id: 5,
//   //     image: "assets/images/dish1.svg",
//   //     menuName: "Arabian Kebab, Middle East Special",
//   //     cuisine:'Arabic',
//   //     caterer:'Chef Juna Caterer',
//   //     period:'2021/09/12  2021/10/12',
//   //     status:'Active',
//   //   },
//   //   {
//   //     id: 6,
//   //     image: "assets/images/dish1.svg",
//   //     menuName: "Arabian Kebab, Middle East Special",
//   //     cuisine:'Arabic',
//   //     caterer:'Chef Juna Caterer',
//   //     period:'2021/09/12  2021/10/12',
//   //     status:'Active',
//   //   },
//   //   {
//   //     id: 7,
//   //     image: "assets/images/dish1.svg",
//   //     menuName: "Arabian Kebab, Middle East Special",
//   //     cuisine:'Arabic',
//   //     caterer:'Chef Juna Caterer',
//   //     period:'2021/09/12  2021/10/12',
//   //     status:'Active',
//   //   },
//   // ];


//   // const gridTableRowArr = [
//   //   {
//   //     id: 1,
//   //     image: "assets/images/dish1.svg",
//   //     menuName: `${mealplanDetailData?.name !== undefined ? mealplanDetailData?.name : 'no data'}`,
//   //     cuisine:`${mealplanDetailData?.cuisine !== undefined ? mealplanDetailData?.cuisine : 'no data'}`,
//   //     caterer:`${mealplanDetailData?.owner !== undefined ? mealplanDetailData?.owner : 'no data'}`,
//   //     period:{
//   //       from:`${mealplanDetailData?.createdAt !== undefined ? new Date(mealplanDetailData?.createdAt).toLocaleDateString() : 'no data'}`,
//   //       to:`${mealplanDetailData?.endDate  !== undefined ? new Date(mealplanDetailData?.endDate).toLocaleDateString() : 'no data'}`
//   //     },
//   //     status:`${mealplanDetailData?.status !== undefined ? mealplanDetailData?.status === true ? "Active"  : "Deactive" :'no data'}`,
//   //   },
//   // ]
//   // const actionMenuId = 'primary-search-account-menu-mobile';
//   // const actionMenu = (
//   //   <Menu
//   //     anchorEl={actionAnchorEl}
//   //     anchorOrigin={{
//   //       vertical: 'top',
//   //       horizontal: 'right',
//   //     }}
//   //     id={actionMenuId}
//   //     keepMounted
//   //     transformOrigin={{
//   //       vertical: 'top',
//   //       horizontal: 'right',
//   //     }}
//   //     open={isActionMenuOpen}
//   //     onClose={handleActionMenuClose}
//   //   >
//   //     <MenuItem onClick={()=>{ setViewDetails(true); handleActionMenuClose(); }}>
//   //       <IconButton size="large" aria-label="show 4 new mails" color="inherit">
//   //         <img src="assets/images/eyeIcon.svg" alt="eyeIcon" />
//   //       </IconButton>
//   //       <Typography sx={{fontSize:"14px",fontWeight:"600",color:"#1A1824"}}>View Details</Typography>
//   //     </MenuItem>
//   //     <MenuItem onClick={handleActionMenuClose}>
//   //       <IconButton
//   //         size="large"
//   //         color="inherit"
//   //       >
//   //        <img src="assets/images/messageIcon.svg" alt="messageIcon" />
//   //       </IconButton>
//   //       <Typography sx={{fontSize:"14px",fontWeight:"600",color:"#1A1824"}}>Send Message</Typography>
//   //     </MenuItem>
//   //   </Menu>
//   // );


//   // console.log('mealplanData => ', mealplanDetailData)
//   // console.log('mealplanData => ', squery)
//   return (
//     <React.Fragment>
//       {viewDetails ? (
//         <Box>
//             <ViewDetails setViewDetails={setViewDetails} selectedMealplan={selectedMealplan} />
//         </Box>
//       ) : (
//         <Layout>
//           <Box>
//             <Box>
//               {
//                 NotificationData.length && NotificationData.length>0 && NotificationData.map((item,i) => {
//                   return (
//                       <NotifcationCard item={item} key={i} />
//                   );
//                 })
//               }
//               <Box my="20px">
//                 <Header
//                   title="All Menu"
//                   menu={[
//                     { title: "All Courses", items: ["item_1", "item_2", "item_3"] },
//                     { title: "Last Added" },
//                     { title: "Any Status" },
//                   ]}
                  // getSearchValue={getSearchValue}
//                   isShownCustomBtn={false}
//                   />
//               </Box>
//             </Box>

//             {
//               isLoading ? (
//                 <Box sx={{minHeight:"30vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
//                   <CircularProgress color="greenclr"/>
//                 </Box>
//               ) 
//               : 
//               <>
//                 <Box
//                   width="100%"
//                   border="1px solid #e1e1e6"
//                   p="10px 20px"
//                   borderRadius="8px"
//                   minHeight="60vh"
//                 >
//                   {
//                     allMealplanListData?.allMealplanList && allMealplanListData?.allMealplanList !==undefined?
//                     <>
//                       <CustomDataGrid
//                         // rows={gridTableRowArr}
//                         rows={allMealplanListData?.allMealplanList}
//                         columns={girdTableColumnsArr}
//                         disableSelectionOnClick
//                         autoHeight
//                         hideFooterPagination={true}
//                       />
//                     </>
//                     : 
//                     "no data"
//                   }
//                   {/* <CustomDataGrid
//                     // rows={gridTableRowArr}
//                     rows={allMealplanListData?.allMealplanList}
//                     columns={girdTableColumnsArr}
//                     disableSelectionOnClick
//                     autoHeight
//                     hideFooterPagination={true}
//                   /> */}
//                   <Box sx={{
//                     margin: "20px 0",
//                     display: "flex",
//                     justifyContent: "space-between",
//                     alignItems: "center"
//                   }}>
//                     <Typography sx={{color:"#9EA3AE",fontSize:"14px",fontWeight:"400"}}>
//                     Show 1-10 of 50 entries
//                     </Typography>
//                     <CustomPagination />
//                   </Box>
//                 </Box>
//               </>
//             }

//           {/* {openDeleteDialog ? <CustomCancelDialogBox open={openDeleteDialog} setOpen={setOpenDeleteDialog}  /> : ""} */}
//           {
//             openDeleteDialog ? 
//               <>
//                 <CustomizedModal
//                 title="Delete Mealplan"
//                 aria-labelledby="customized-dialog-title"
//                 open={openDeleteDialog}
//                 handleClose={()=> setOpenDeleteDialog(false)}
//                 actionBtnsText={['Discard','Yes, sure']}
//                 actionBtn2OnClickHandler={
//                   ()=> {
//                     deleteMealplan({ id:selectedMealplan?._id });
//                     setRefetchFlag(true)
//                   }
//                 }
//                 isHeaderShown={false}
//                 >
//                     <Box sx={{my:"20px",minWidth:{xs:"310px",sm:"400px"}}}>
//                         <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center"}}>
//                             <Box sx={{borderRadius:"8px",p:"16px 16px 4px 16px",textAlign:"center"}}>
//                                 <IconButton sx={{backgroundColor:"#FEF9E8"}}>
//                                     <WarningIcon sx={{ color: "yellow",fontSize:{xs:"32px",md:"48px"} }} />
//                                 </IconButton>
//                                 <Typography sx={{fontSize: { xs: "13px", md: "16px" },fontWeight: "600",color: "#1A1824",}}>Delete Mealplan</Typography>  
//                                 <Typography sx={{fontSize: { xs: "13px", md: "14px" },fontWeight: "400",color: "#545359",}}>Deleted items cannot be returned,<br /> are you sure you want to delete this item?</Typography>  
//                             </Box>
//                         </Box>
//                     </Box>
//                 </CustomizedModal>
//               </>
//             : 
//             ""
//           }

//           {/* {actionMenu} */}
//           </Box>
//         </Layout>
//       )}
//     </React.Fragment>
//   );
// }

// export default FoodMenu;
