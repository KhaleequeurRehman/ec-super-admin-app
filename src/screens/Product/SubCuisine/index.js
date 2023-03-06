import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import InputAdornment from "@mui/material/InputAdornment";
import WarningIcon from '@mui/icons-material/Warning';
import IconButton from "@mui/material/IconButton";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { BsThreeDots } from "react-icons/bs";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import CustomDataGrid from "../../../components/CustomDataGrid";
import CustomPagination from "../../../components/CustomPagination";
import Header from "../Header";
import Layout from "../../Layout";
import CustomCancelDialogBox from "../../../components/CustomCancelDialogBox"
import CustomizedSwitch from "../../Products/Components/CustomizedSwtich/CustomizedSwitch";
import { useGetAllCusinesMutation,useDeleteCusineMutation } from "../../../api/cusine";
import { CircularProgress, ListItemIcon, ListItemText } from "@mui/material";
import CustomizedModal from "../../../components/CustomizedModal";
import AddCuisine from "../Cuisine/AddCuisine";
import UpdateCuisine from "../Cuisine/UpdateCuisine";
import { useDeleteSubCusineMutation, useGetAllSubCusinesMutation, useSearchSubCusinesMutation } from "../../../api/subCuisine";
import AddSubCuisine from "./AddSubCuisine";
import UpdateSubCuisine from "./UpdateSubCuisine";
import NoResultMsg from "../../../components/NoResultMsg/NoResultMsg";
import { IMG_BASE_URL } from "config";
// import AddCuisine from "./AddCuisine";
// import UpdateCuisine from "./UpdateCuisine";


const SubCuisine = () => {

  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [totalSubCuisineCount, setTotalSubCuisineCount] = useState(1);
  
  // const [getAllCusines,resdata] = useGetAllCusinesMutation()
  const [getAllSubCusines,resdata] = useGetAllSubCusinesMutation()

  const [searchSubCusines, responsedata] = useSearchSubCusinesMutation()
  // const [deleteCusine,respdata] = useDeleteCusineMutation()
  const [deleteSubCusine,respdata] = useDeleteSubCusineMutation()

  const [allSubCuisinesData, setAllSubCuisinesData] = useState("");

  const [seletedSubCuisine, setSeletedSubCuisine] = useState("");

  const [openDeleteDialog,setOpenDeleteDialog] = useState(false)

  const [addModalOpen, setAddModalOpen] = React.useState(false);
  const [updateModalOpen, setUpdateModalOpen] = React.useState(false);

  const [searchVal, setSearchVal] = useState("");
  const [isShownNoResult, setIsShownNoResult] = useState(false);

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


  // const [actionAnchorEl, setActionAnchorEl] = useState(null);

  // const isActionMenuOpen = Boolean(actionAnchorEl);

  // const handleActionMenuClose = () => {
  //   setActionAnchorEl(null);
  // };

  // const handleActionMenuOpen = (event) => {
  //   setActionAnchorEl(event.currentTarget);
  // };


  const getAllSubCuisinesData = ()=> {
    getAllSubCusines({ page:page,size:size,status:"all" }).then((res) => {
      if (res.data){
        console.log("res.data allSubCuisinesData ", res?.data);
        setAllSubCuisinesData(res?.data?.allSubCusinesList)
        setTotalSubCuisineCount(res?.data?.totalCuisinesCount)
      }
    });
  }

  const getLastAddedSubCuisinesData = ()=> {
    getAllSubCusines({ page:page, size:size,status:"all",sortBy:"createdAt",orderBy:"desc" }).then((res) => {
      if (res.data){
        console.log("res.data getLastAddedSubCuisinesData ", res?.data);
        setAllSubCuisinesData(res?.data?.allSubCusinesList)
        setTotalSubCuisineCount(res?.data?.totalCuisinesCount)
      }
    });
  }
  
  const filterSubCuisinesWithStatusData = (status)=> {
    getAllSubCusines({ page:page, size:size,status:status }).then((res) => {
      if (res.data){
        console.log("res.data filterSubCuisinesWithStatusData ", res?.data);
        setAllSubCuisinesData(res?.data?.allSubCusinesList)
        setTotalSubCuisineCount(res?.data?.totalCuisinesCount)
      }
    });
  }


  const searchSubCusinesFunc = (newValSearch)=> {
    if(newValSearch === ""){
      getAllSubCuisinesData()
      setIsShownNoResult(false)
    }else{
      searchSubCusines({ search: newValSearch }).then((res) => {
        if (res.data){
          console.log("SubCusines res.data customersData ", res?.data);
          setAllSubCuisinesData(res?.data?.allSubCusinesList)
          setTotalSubCuisineCount(res?.data?.totalCuisinesCount)
          if(res?.data?.data.length === 0) {
            setIsShownNoResult(true)
          }else{
            setIsShownNoResult(false)
          }
        }
      });
    }
  }
  
  useEffect(() => {
    getAllSubCuisinesData()
  }, [page])

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
                {/* <img src={`https://backend.eatcoast.ca/v1/cuisineImages/${params.value}`} alt="dishIcon" style={{width:"100%", height:"100%",borderRadius:"6px"}} /> */}
                {/* <img src={`https://ec-backend-app-mg6rk.ondigitalocean.app/image/cuisineImages/${params.value}`} alt="dishIcon" style={{width:"100%", height:"100%",borderRadius:"6px"}} /> */}
                <img src={`${IMG_BASE_URL}/image/cuisineImages/${params.value}`} alt="dishIcon" style={{width:"100%", height:"100%",borderRadius:"6px"}} />
                {/* <img src="assets/images/dish1.svg" alt="dishIcon" style={{width:"100%", height:"100%",borderRadius:"6px"}} /> */}
              </Box>
              {/* <Box sx={{width:"48px",height:"48px",borderRadius:"6px"}}>
                <img src={params.value.img} alt="dishIcon" width="100%" height="100%" />
              </Box>
              <Box ml="10px">
                <Typography>{params.value.name}</Typography>
              </Box> */}
            </Box>
          </>
        );
      },
    },
    {
      field: "subCuisine", 
      headerName: "Sub Cuisine Name",
      width: 200,
    },
    {
      field: "cuisine", 
      headerName: "Cuisine Name",
      width: 200,
    },
    {
      field: "noOfMenu",
      headerName: "Num of Menu",
      width: 220,
    },
    {
      field: "active",
      headerName: "Active",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Box>
              {
                params.value === true? <CustomizedSwitch defaultChecked /> : <CustomizedSwitch />
              }
              {/* <CustomizedSwitch 
                checked={params.value}
                // onChange={handleChange}
                // inputProps={{ 'aria-label': 'controlled' }}
              /> */}
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
              <Button sx={{minWidth:"24px",minHeight:"24px",p:"4px",color:"#42C677",textTransform:"none",p:"4px",border:"1px solid #80B3B0", borderRadius:"3px"}} variant="text" onClick={handleActionMenuOpen} >
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
                          popupState.close();
                        }}>
                        <ListItemIcon>
                          <VisibilityOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>View Details</ListItemText>
                      </MenuItem>
                      <MenuItem onClick={() => {
                          popupState.close();
                          setSeletedSubCuisine(params?.row)
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
                      <MenuItem
                        onClick={() => {
                          popupState.close();
                          setSeletedSubCuisine(params?.row)
                          setOpenDeleteDialog(true)
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

  const subscriptionTableRow = [
    {
      id: 1,
      image: "assets/images/dish1.svg",
      cuisineName: "American",
      noOfMenu: "150",
      active:true,
    },
    {
      id: 2,
      image: "assets/images/dish1.svg",
      cuisineName: "American",
      noOfMenu: "150",
      active: false,
    },
    {
      id: 3,
      image: "assets/images/dish1.svg",
      cuisineName: "American",
      noOfMenu: "150",
      active: false,
    },
    {
      id: 4,
      image: "assets/images/dish1.svg",
      cuisineName: "American",
      noOfMenu: "150",
      active: false,
    },
    {
      id: 5,
      image: "assets/images/dish1.svg",
      cuisineName: "American",
      noOfMenu: "150",
      active: false,
    },
    {
      id: 6,
      image: "assets/images/dish1.svg",
      cuisineName: "American",
      noOfMenu: "150",
      active: true,
    },
    {
      id: 7,
      image: "assets/images/dish1.svg",
      cuisineName: "American",
      noOfMenu: "150",
      active: true,
    },
    {
      id: 8,
      image: "assets/images/dish1.svg",
      cuisineName: "American",
      noOfMenu: "150",
      active: false,
    },
    {
      id: 9,
      image: "assets/images/dish1.svg",
      cuisineName: "American",
      noOfMenu: "150",
      active: false,
    },
  ];

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
  //     <MenuItem onClick={()=>{handleActionMenuClose() }}>
  //       <IconButton size="large" aria-label="show 4 new mails" color="inherit">
  //         <img src="assets/images/eyeIcon.svg" alt="eyeIcon" />
  //       </IconButton>
  //       <Typography sx={{fontSize:"14px",fontWeight:"600",color:"#1A1824"}}>View Details</Typography>
  //     </MenuItem>
  //     <MenuItem onClick={()=>{setOpenDeleteDialog(true); handleActionMenuClose()}}>
  //       <IconButton
  //         size="large"
  //         color="inherit"
  //       >
  //        <img src="assets/images/trash.svg" alt="messageIcon" width="16px" height="16px" />
  //       </IconButton>
  //       <Typography sx={{fontSize:"14px",fontWeight:"600",color: "#E75C62" }}>delete</Typography>
  //     </MenuItem>
  //   </Menu>
  // );

    console.log('allSubCuisinesData ',allSubCuisinesData)
  return (
    <>
      <Layout>
        <Box width="100%" px="10px" py="5px">
        <Header
            title="All Sub Cuisines"
            addButtonTitle="New Sub Cuisine"
            addButtonOnclickHandler={handleAddModalOpen}
            isShownCustomBtn={true}
            // hasNotificationButton={true}
            // hasFilterBtn={true}
            lastAddedBtnOnClickHandler={getLastAddedSubCuisinesData}
            // handleClickFilter={handleClickFilter}
            searchVal={searchVal}
            setSearchVal={setSearchVal}
            searchFunc={searchSubCusinesFunc}
            menuItems={[
              { name: "active", onClick: () => { filterSubCuisinesWithStatusData("true"); console.log('menuItem active click handler') }},
              { name: "deactive", onClick: () => { filterSubCuisinesWithStatusData("false"); console.log('menuItem deactive click handler') }},
              { name: "all", onClick: () => { filterSubCuisinesWithStatusData("all"); console.log('menuItem cancel click handler') }},
            ]}
            />
          {/* <Header addButtonOnclickHandler={handleAddModalOpen}
            title="All Sub Cuisines"
            addButtonTitle="New Sub Cuisine" 
            menu={[
                {title:'Last Added',items:['Item_1','Item_2','Item_3'],handleChange:'onClick'},
                {title:'Any Status',items:['Item_1','Item_2','Item_3'],handleChange:'onClick'}
            ]}
            searchVal={searchVal}
            setSearchVal={setSearchVal}
            searchFunc={searchSubCusinesFunc}
            /> */}
          
          {
            resdata?.isLoading ? (
              <Box sx={{minHeight:"30vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <CircularProgress color="greenclr"/>
              </Box>
            ) 
            : 
            <>
            <Box
              width="100%"
              border="1px solid #e1e1e6"
              p="10px 20px"
              borderRadius="8px"
              minHeight="60vh"
            >
               {!isShownNoResult ? (
                <Box>
                  <CustomDataGrid
                    // rows={subscriptionTableRow}
                    rows={allSubCuisinesData  || []}
                    columns={girdTableColumnsArr}
                    disableSelectionOnClick
                    autoHeight
                    hideFooterPagination={true}
                  />
                </Box>
                ) 
                : 
                (
                  // <NoResultMsg searchValueText={`“${searchVal}”`} />
                  <NoResultMsg searchValueText={searchVal} />
                )}
              <Box sx={{
                margin: "20px 0",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}>
                <Typography sx={{color:"#9EA3AE",fontSize:"14px",fontWeight:"400"}}>
                {/* Show 1-10 of 50 entries */}
                {`Show ${page}-${size} of ${totalSubCuisineCount} entries`}
                </Typography>
                <CustomPagination 
                 count={totalSubCuisineCount>size? totalSubCuisineCount%size !==0? Math.round(totalSubCuisineCount/size)+1 : Math.round(totalSubCuisineCount/size) : 1}
                 page={page}
                 onChangeHandler={(event, value) =>{ console.log("value onChange => ", value); setPage(value)} }
                />
              </Box>
            </Box>
            </>
          }

          {/* {openDeleteDialog ? <CustomCancelDialogBox open={openDeleteDialog} setOpen={setOpenDeleteDialog}  /> : ""} */}

          {
            openDeleteDialog ? 
              <>
                <CustomizedModal
                title="Delete Cuisine"
                aria-labelledby="customized-dialog-title"
                open={openDeleteDialog}
                handleClose={()=> setOpenDeleteDialog(false)}
                actionBtnsText={['Discard','Yes, sure']}
                actionBtn2OnClickHandler={
                  ()=> {
                    deleteSubCusine({ id:seletedSubCuisine?._id });
                    getAllSubCuisinesData()
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
                                <Typography sx={{fontSize: { xs: "13px", md: "16px" },fontWeight: "600",color: "#1A1824",}}>Delete Cuisine</Typography>  
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
          title="Add Sub Cuisine"
          aria-labelledby="customized-dialog-title"
          open={addModalOpen}
          handleClose={handleAddModalClose}
          isActionShown={false}
          >
            <Box sx={{my:"20px",minWidth:{xs:"310px",sm:"400px",md:"500px"},mb:"20px"}}>
              <AddSubCuisine
              handleAddModalClose={handleAddModalClose}
              refetchAllSubCuisinesData={getAllSubCuisinesData}
              />
            </Box>
          </CustomizedModal>

          <CustomizedModal
          title="Update Sub Cuisine"
          aria-labelledby="customized-dialog-title"
          open={updateModalOpen}
          handleClose={handleUpdateModalClose}
          isActionShown={false}
          >
            <Box sx={{my:"20px",minWidth:{xs:"310px",sm:"400px",md:"500px"},mb:"20px"}}>
              <UpdateSubCuisine 
              handleAddModalClose={handleAddModalClose}
              refetchAllSubCuisinesData={handleUpdateModalClose}
              seletedSubCuisine={seletedSubCuisine}
              />
            </Box>
          </CustomizedModal>
        </Box>
      </Layout>
    </>
  )
}

export default SubCuisine







// import React from 'react'

// const index = () => {
//   return (
//     <div>Sub Cuisine</div>
//   )
// }

// export default index