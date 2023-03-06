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
import { useDeleteRoleMutation, useGetAllRolesQuery } from "api/roles";
import CustomizedModal from "components/CustomizedModal";
import { EditRole } from "../EditRole/EditRole";
import moment from "moment";
// import { SingleOrderHeader } from "./SingleOrderHeader";

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
    rollName: "Administrator",
    modules: "21 Nov 2021, 08 : 00 Am",
    createdAt: "2021 - 02 - 02",
  },
  {
    id: 2,
    rollName: "Administrator",
    modules: "21 Nov 2021, 08 : 00 Am",
    createdAt: "2021 - 02 - 02",
  },
  {
    id: 3,
    rollName: "Administrator",
    modules: "21 Nov 2021, 08 : 00 Am",
    createdAt: "2021 - 02 - 02",
  },
  {
    id: 4,
    rollName: "Administrator",
    modules: "21 Nov 2021, 08 : 00 Am",
    createdAt: "2021 - 02 - 02",
  },
  {
    id: 5,
    rollName: "Administrator",
    modules: "21 Nov 2021, 08 : 00 Am",
    createdAt: "2021 - 02 - 02",
  },
  {
    id: 6,
    rollName: "Administrator",
    modules: "21 Nov 2021, 08 : 00 Am",
    createdAt: "2021 - 02 - 02",
  },
  {
    id: 7,
    rollName: "Administrator",
    modules: "21 Nov 2021, 08 : 00 Am",
    createdAt: "2021 - 02 - 02",
  },
  {
    id: 8,
    rollName: "Administrator",
    modules: "21 Nov 2021, 08 : 00 Am",
    createdAt: "2021 - 02 - 02",
  },
  {
    id: 9,
    rollName: "Administrator",
    modules: "21 Nov 2021, 08 : 00 Am",
    createdAt: "2021 - 02 - 02",
  },
  {
    id: 10,
    rollName: "Administrator",
    modules: "21 Nov 2021, 08 : 00 Am",
    createdAt: "2021 - 02 - 02",
  },
];


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

const UserRoleDataGrid = ({ IdSubColor, setOpenCustomerDetail }) => {
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [totalUserRoleCount, setTotalUserRoleCount] = useState(1);
  const [selectedRole, setSelectedRole] = useState("");
  const [editRoleModalOpen, setEditRoleModalOpen] = useState(false);

  const [userRoleData, setUserRoleData] = useState([])
  // const { data: userRoles, isLoading } = useGetAllRolesQuery('searchBy=')
  // const { data: userRoles, isLoading } = useGetAllRolesQuery(`page=${page}&size=${size}&sortBy=createdAt`)
  const { data: userRoles, isLoading } = useGetAllRolesQuery(`page=${page}&size=${size}&searchBy=`)
  const [deleteRole, { isLoading: isDeleting }] = useDeleteRoleMutation()
  const [searchVal, setSearchVal] = useState("");
  const [openCancelDialog, setOpenCancelDialog] = useState(null);


  const handleEditRoleModalOpen = () => {
    setEditRoleModalOpen(true);
};

const handleEditRoleModalClose = () => {
    setEditRoleModalOpen(false);
};

  const subscriptionTableColumns = [
    { field: "#", hide: true },
    { field: "_id", headerName: "#", width: 100 },
    {
      field: "title",
      headerName: "Role Name",
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
      field: "modules",
      headerName: "Modules",
      minWidth: 300,
      flex:1,
      renderCell: (params) => {
        const { value } = params;
        return (
          <>
            <Box sx={{ width:"100%",height:"45px"}}>
              <Typography
                pl="8px"
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "20px",
                  width:"100%",
                  height: "100%",
                  overflow:"auto"
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
      field: "createdAt",
      headerName: "Created at",
      width: 230,
      renderCell: (params) => {
        const { value } = params;
        return (
          <>
            <Box>
              <Typography
                pl="8px"
                sx={{
                  color: "#9EA3AE",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "20px",
                }}
              >
                {/* {moment(params.value).format('ll').replace(',',"")} */}
                {moment(params.value).format('YYYY-MM-DD')}
              </Typography>
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
        const { value } = params;
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
                        <img
                          src="./assets/images/More.svg"
                          alt=""
                          width="16px"
                          height="16px"
                        />
                      </Box>
                    </Box>
                    <Menu {...bindMenu(popupState)}>
                      <MenuItem 
                      // onClick={popupState.close}
                      onClick={() => {
                        setSelectedRole(params?.row)
                        handleEditRoleModalOpen();
                        popupState.close();
                      }}
                      
                      >
                        <ListItemIcon>
                          <BorderColorOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Edit Role</ListItemText>
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          popupState.close();
                          setOpenCancelDialog(params.row._id);
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
                          Delete Role
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

  const handleDeleteRole = (id) => {
    deleteRole(id).then(res => { if (res) setOpenCancelDialog(null) })
  }
  useEffect(() => {
    const tmpData = []
    if (userRoles && userRoles.data) {
      userRoles.data.map((item, index) => {
        tmpData.push({
          id: index,
          _id: item._id,
          title: item.title,
          modules: item.modules.join(", "),
          createdAt: item.createdAt
        })
      })
    }
    setUserRoleData(tmpData)
    setTotalUserRoleCount(userRoles?.totalUserRoleCount)
  }, [userRoles])

  console.log('totalUserRoleCount ',totalUserRoleCount)

  console.log('selectedRole ',selectedRole)

  return (
    <>
      <Box width="100%">
        <Box
          width="100%"
          border="1px solid #e1e1e6"
          p="10px 20px"
          borderRadius="8px"
          minHeight="60vh"
        >
          {!searchVal ? (
            <>
              <Box sx={{ width: "100%" }}>
                <StyledDataGrid
                  rows={userRoleData}
                  columns={subscriptionTableColumns}
                  disableSelectionOnClick
                  autoHeight
                  hideFooterPagination={true}
                />
              </Box>

              {openCancelDialog ? (
                <CancelSubscriptionComp
                  open={openCancelDialog !== null}
                  isLoading={isDeleting}
                  setOpen={setOpenCancelDialog}
                  handleOnClick={() => {
                    handleDeleteRole(openCancelDialog)
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
                  <Typography sx={Typo1}>{`Show ${page}-${size} of ${totalUserRoleCount} entries`}</Typography>
                </Box>
                <Box
                  sx={{ mt: { lg: "0px", md: "0px", sm: "0px", xs: "30px" } }}
                >
                  <Pagination
                    sx={paginationSx}
                    count={totalUserRoleCount>size? totalUserRoleCount%size !==0? Math.round(totalUserRoleCount/size)+1 : Math.round(totalUserRoleCount/size) : 1}
                    page={page}
                    onChange={(event, value) =>{ console.log("value onChange => ", value); setPage(value)} }
                  />
                </Box>
              </Box>
            </>
          ) : (
            // <NoResultMsg searchValueText={`“${searchVal}”`} />
            ""
          )}
        </Box>
      </Box>

      <CustomizedModal
        title="Edit Role"
        aria-labelledby="customized-dialog-title"
        open={editRoleModalOpen}
        handleClose={handleEditRoleModalClose}
        isActionShown={false}
        >
          <Box sx={{my:"20px",minWidth:{xs:"310px",sm:"400px",md:"500px"},mb:"20px"}}>
            <EditRole selectedRole={selectedRole} handleEditRoleModalClose={handleEditRoleModalClose} />
          </Box>
        </CustomizedModal>
    </>
  );
};

export default UserRoleDataGrid;
