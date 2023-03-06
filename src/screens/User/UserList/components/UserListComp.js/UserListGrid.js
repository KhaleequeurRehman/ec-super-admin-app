import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { DataGrid } from "@mui/x-data-grid";
import Pagination from "@mui/material/Pagination";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import CancelSubscriptionComp from "../../../../Subscription/Component/CancelSubscription/CancelSubscriptionComp";
// import { SingleOrderHeader } from "./SingleOrderHeader";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CircularProgress from '@mui/material/CircularProgress';
import { useGetAllUsersMutation, useGetUsersQuery, useSearchUsersMutation, useUserDeleteMutation } from "../../../../../api/users"
import Header from "screens/Product/Header";
import NoResultMsg from "components/NoResultMsg/NoResultMsg";

const CardData = [
  {
    title: "5012",
    subTitle: "Personal Subscription",
    image: "./assets/images/Frame 712.svg",
  },

  {
    title: "512",
    subTitle: "Business Subscription",
    image: "./assets/images/frame512.svg",
  },

  {
    title: "420",
    subTitle: "Multiple Subscription",
    image: "./assets/images/frame420.svg",
  },

  {
    title: "5012",
    subTitle: "Personal Subscription",
    image: "./assets/images/Frame 712.svg",
  },
];

const SearchInputField = styled(TextField)({
  background: "#F6F6F6",
  "& fieldset.MuiOutlinedInput-notchedOutline.css-1d3z3hw-MuiOutlinedInput-notchedOutline":
    {
      borderColor: "#e1e1e6",
      borderRadius: "6px",
    },
});

const paginationSx = {
  "& .css-1awya33-MuiButtonBase-root-MuiPaginationItem-root": {
    border: "1px solid #E1E1E6",
    borderRadius: "8px",
    color: "#9EA3AE",
    background: "none",
  },
  "& .css-1awya33-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected": {
    backgroundColor: "#2b817b",
    color: "white",
    borderRadius: "8px",
  },
};

const Typo1 = {
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "20px",
  color: "#9EA3AE",
};

const Button1 = {
  width: "103px",
  height: "40px",
  padding: "10px, 16px, 10px, 16px",
  border: "1px solid #80B3B0",
  borderRadius: "4px",
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

const subscriptionTableRow = [
  {
    id: 1,
    customer: "Mohammad Bairos",
    email: "Muhammadbairos@gmail.com",
    role: "Customer Service Driver",
  },
  {
    id: 2,
    customer: "Mohammad Bairos",
    email: "Muhammadbairos@gmail.com",
    role: "Super Administrator",
  },
  {
    id: 3,
    customer: "Mohammad Bairos",
    email: "Muhammadbairos@gmail.com",
    role: "Customer Service Customer",
  },
  {
    id: 4,
    customer: "Mohammad Bairos",
    email: "Muhammadbairos@gmail.com",
    role: "Administrator",
  },
  {
    id: 5,
    customer: "Mohammad Bairos",
    email: "Muhammadbairos@gmail.com",
    role: "Customer Service Driver",
  },
  {
    id: 6,
    customer: "Mohammad Bairos",
    email: "Muhammadbairos@gmail.com",
    role: "Super Administrator",
  },
  {
    id: 7,
    customer: "Mohammad Bairos",
    email: "Muhammadbairos@gmail.com",
    role: "Administrator",
  },
  {
    id: 8,
    customer: "Mohammad Bairos",
    email: "Muhammadbairos@gmail.com",
    role: "Super Administrator",
  },
  {
    id: 9,
    customer: "Mohammad Bairos",
    email: "Muhammadbairos@gmail.com",
    role: "Customer Service Driver",
  },
  {
    id: 10,
    customer: "Mohammad Bairos",
    email: "Muhammadbairos@gmail.com",
    role: "Administrator",
  },
];

const UserListGrid = ({ IdSubColor, setOpenCustomerDetail, setShowUserDetail,selectedUser,setSelectedUser }) => {
    
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [totalUsersCount, setTotalUsersCount] = useState(1);

  // const { data: usersData, isLoading, isSuccess } = useGetUsersQuery()
  const [getAllUsers,resdata] = useGetAllUsersMutation()
  const [allUsers, setAllUsers] = useState("");
  
  const [deleteUser,respdata] = useUserDeleteMutation()

  const [searchUsers, responsedata] = useSearchUsersMutation()

  const [searchVal, setSearchVal] = useState("");
  const [isShownNoResult, setIsShownNoResult] = useState(false);
  const [openCancelDialog, setOpenCancelDialog] = useState(false);

  const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
    "& .css-17jjc08-MuiDataGrid-footerContainer": {
      display: "none",
    },
    boxShadow: "none",
    border: "none",
    borderColor: "green",
    // color: "#545359",
    color: "#1A1824",
    "& .MuiDataGrid-cell:focus": {
      outline: "none",
      color: "#1A1824",
      border: "1px solid transparent !important",
    },
    "& .MuiDataGrid-iconButtonContainer": {
      marginLeft: "2px",
      visibility: "visible !important",
      width: "auto !important",
    },
    "& .css-gl260s-MuiDataGrid-columnHeadersInner": {
      color: "#9EA3AE",
    },
  }));

  const subscriptionTableColumns = [
    { field: "id", headerName: "#", width: 100 },
    {
      field: "customer",
      headerName: "Customer",
      width: 230,

      renderCell: (params) => {
        const { value } = params;
        return (
          <>
            <Box>
              <Typography
                pl="8px"
                sx={{
                  color: "#1A1824",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "20px",
                }}
              >
                {params.value}
              </Typography>
            </Box>
          </>
        );
      },
    },

    {
      field: "email",
      headerName: "Email",
      width: 280,
    },

    {
      field: "role",
      headerName: "Role",
      width: 250,
      
    },

    {
      field: "action",
      headerName: "Action",
      width: 100,
      renderCell: (params) => {
        const { value } = params;
        // setSelectedUser(params?.row)
        return (
          <>
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
                        <Box sx={{display: "flex", justifyContent: "center"}}><img
                          src="./assets/images/More.svg"
                          alt=""
                          width="16px"
                          height="16px"
                        /></Box>
                      </Box>
                    </Box>
                    <Menu {...bindMenu(popupState)}>
                      <MenuItem  onClick={() => {
                        setSelectedUser(params?.row)
                        setShowUserDetail(true);
                        popupState.close();
                        }}>
                        <ListItemIcon>
                          <PersonOutlineOutlinedIcon sx={{fill: "#1A1824"}}/>
                        </ListItemIcon>
                        <ListItemText sx={{color: "#1A1824"}}>Profile Settings</ListItemText>
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          setSelectedUser(params?.row)
                          setOpenCancelDialog(true);
                          popupState.close();
                        }}
                      >
                        <ListItemIcon>
                          {/* <BorderColorOutlinedIcon fontSize="small" /> */}
                          <img
                            src="./assets/images/trash.svg"
                            alt=""
                            width="16px"
                            height="16px"
                          />
                        </ListItemIcon>
                        <ListItemText sx={{ color: "#E75C62" }}>
                        Delete Account
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

  const searchUsersFunc = (newValSearch)=> {
    if(newValSearch === ""){
      getAllUsersData()
      setIsShownNoResult(false)
    }else{
      searchUsers({ page:page,size:size,searchBy: newValSearch }).then((res) => {
        if (res.data){
          console.log("searchUsers res.data searchUsersFunc ", res?.data);
          setAllUsers(res?.data?.userList)
          setTotalUsersCount(res?.data?.totalUsersCount)
          if(res?.data?.data.length === 0) {
            setIsShownNoResult(true)
          }else{
            setIsShownNoResult(false)
          }
        }
      });
    }
  }

  // isSuccess && console.log("usersData ",usersData)

  const getAllUsersData = ()=> {
    getAllUsers({ page:page,size:size }).then((res) => {
      if (res.data){
        console.log("res.data getAllUsersData ", res?.data);
        setAllUsers(res?.data?.userList)
        setTotalUsersCount(res?.data?.totalUsersCount)
      }
    });
  }


  useEffect(() => {
    getAllUsersData()
  }, [])
  
  console.log("allUsers ",allUsers)

  return (
    <>
      <Box width="100%">

      <Box>
      <Header
            title="User"
            // addButtonTitle="New Menu"
            // addButtonOnclickHandler={handleAddModalOpen}
            isShownCustomBtn={false}
            hasNotificationButton={false}
            hasFilterBtn={false}
            // lastAddedBtnOnClickHandler={getLastAddedCustomersData}
            // handleClickFilter={handleClickFilter}
            searchVal={searchVal}
            setSearchVal={setSearchVal}
            searchFunc={searchUsersFunc}
            menuItems={[
              { name: "active", onClick: () => {console.log('menuItem active click handler') }},
              { name: "hold", onClick: () => { console.log('menuItem hold click handler') }},
              { name: "all", onClick: () => { console.log('menuItem cancel click handler') }},
            ]}
            />
      </Box>

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
        //   border="1px solid #e1e1e6"
          p="10px 20px"
        //   borderRadius="8px"
          minHeight="60vh"
        >
          {/* {!searchVal ? ( */}
          {!isShownNoResult ? (
            <>
              <Box sx={{ width: "100%" }}>
                <StyledDataGrid
                  // rows={subscriptionTableRow}
                  // rows={usersData?.userList}
                  rows={allUsers || []}
                  columns={subscriptionTableColumns}
                  disableSelectionOnClick
                  autoHeight
                  hideFooterPagination={true}
                />
              </Box>

              {openCancelDialog ? (
                <CancelSubscriptionComp
                  open={openCancelDialog}
                  setOpen={setOpenCancelDialog}
                  handleOnClick={()=> { 
                  deleteUser({id:selectedUser?._id}).then((res) => {
                      if(res.data){
                        getAllUsersData()
                      }
                  })
                  setOpenCancelDialog(false)
                }}
                />
              ) : (
                ""
              )}

              <Box
                sx={{
                  display: "flex",
                  flexDirection: {
                    lg: "row",
                    md: "row",
                    sm: "row",
                    xs: "column",
                  },
                  justifyContent: "space-between",
                  mt: "35px",
                }}
              >
                <Box>
                  {/* <Typography sx={Typo1}>Show 1-10 of 50 entries</Typography> */}
                  <Typography sx={Typo1}>{`Show ${page}-${size} of ${totalUsersCount} entries`}</Typography>
                </Box>
                <Box
                  sx={{ mt: { lg: "0px", md: "0px", sm: "0px", xs: "30px" } }}
                >
                  <Pagination
                    sx={paginationSx}
                    count={totalUsersCount>size? totalUsersCount%size !==0? Math.round(totalUsersCount/size)+1 : Math.round(totalUsersCount/size) : 1}
                    page={page}
                    onChange={(event, value) =>{ console.log("value onChange => ", value); setPage(value)} }
                  />
                </Box>
              </Box>
            </>
          ) : (
            <NoResultMsg searchValueText={`“${searchVal}”`} />
            // ""
          )}
        </Box>
        </>
      }
      </Box>
    </>
  );
};

export default UserListGrid;
