import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { DataGrid } from "@mui/x-data-grid";
import Pagination from "@mui/material/Pagination";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import WarningIcon from '@mui/icons-material/Warning';
import SearchIcon from "@mui/icons-material/Search";
import { Grid } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import CancelSubscriptionComp from "../../Subscription/Component/CancelSubscription/CancelSubscriptionComp";
import CustomCheckbox from "../../Customer/components/CustomCheckbox";
import moment from "moment";
import CustomizedModal from "../../../components/CustomizedModal";
import { IMG_BASE_URL } from "config";
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
    image: "./assets/images/iMacMemojiRed.svg",
    title: "Healthy food recommended for ‘Interludes",
    // date: " 9 Hours Ago",
    date: { dateTitle: "Last modified", dateSubTitle: "9 Hours Ago" },
    Id: "12345",
    contentType: "FAQ",
    deliveryDate: "Thu, 21 Nov 2021",
  },
  {
    id: 2,
    image: "./assets/images/iMacMemojiRed.svg",
    title: "Healthy food recommended for ‘Interludes",
    // date: " 9 Hours Ago",
    date: { dateTitle: "Last modified", dateSubTitle: "9 Hours Ago" },
    Id: "12345",
    contentType: "FAQ",
    deliveryDate: "Thu, 21 Nov 2021",
  },
  {
    id: 3,
    image: "./assets/images/iMacMemojiRed.svg",
    title: "Healthy food recommended for ‘Interludes",
    // date: " 9 Hours Ago",
    date: { dateTitle: "Last modified", dateSubTitle: "9 Hours Ago" },
    Id: "12345",
    contentType: "FAQ",
    deliveryDate: "Thu, 21 Nov 2021",
  },
  {
    id: 4,
    image: "./assets/images/iMacMemojiRed.svg",
    title: "Healthy food recommended for ‘Interludes",
    // date: " 9 Hours Ago",
    date: { dateTitle: "Last modified", dateSubTitle: "9 Hours Ago" },
    Id: "12345",
    contentType: "FAQ",
    deliveryDate: "Thu, 21 Nov 2021",
  },
  {
    id: 5,
    image: "./assets/images/iMacMemojiRed.svg",
    title: "Healthy food recommended for ‘Interludes",
    // date: " 9 Hours Ago",
    date: { dateTitle: "Last modified", dateSubTitle: "9 Hours Ago" },
    Id: "12345",
    contentType: "FAQ",
    deliveryDate: "Thu, 21 Nov 2021",
  },
  {
    id: 6,
    image: "./assets/images/iMacMemojiRed.svg",
    title: "Healthy food recommended for ‘Interludes",
    // date: " 9 Hours Ago",
    date: { dateTitle: "Last modified", dateSubTitle: "9 Hours Ago" },
    Id: "12345",
    contentType: "FAQ",
    deliveryDate: "Thu, 21 Nov 2021",
  },
  {
    id: 7,
    image: "./assets/images/iMacMemojiRed.svg",
    title: "Healthy food recommended for ‘Interludes",
    // date: " 9 Hours Ago",
    date: { dateTitle: "Last modified", dateSubTitle: "9 Hours Ago" },
    Id: "12345",
    contentType: "FAQ",
    deliveryDate: "Thu, 21 Nov 2021",
  },
  {
    id: 8,
    image: "./assets/images/iMacMemojiRed.svg",
    title: "Healthy food recommended for ‘Interludes",
    // date: " 9 Hours Ago",
    date: { dateTitle: "Last modified", dateSubTitle: "9 Hours Ago" },
    Id: "12345",
    contentType: "FAQ",
    deliveryDate: "Thu, 21 Nov 2021",
  },
  {
    id: 9,
    image: "./assets/images/iMacMemojiRed.svg",
    title: "Healthy food recommended for ‘Interludes",
    // date: " 9 Hours Ago",
    date: { dateTitle: "Last modified", dateSubTitle: "9 Hours Ago" },
    Id: "12345",
    contentType: "FAQ",
    deliveryDate: "Thu, 21 Nov 2021",
  },
  {
    id: 10,
    image: "./assets/images/iMacMemojiRed.svg",
    title: "Healthy food recommended for ‘Interludes",
    // date: " 9 Hours Ago",
    date: { dateTitle: "Last modified", dateSubTitle: "9 Hours Ago" },
    Id: "12345",
    contentType: "FAQ",
    deliveryDate: "Thu, 21 Nov 2021",
  },
];

// const ContentEditorDataGrid = ({ IdSubColor, setOpenCustomerDetail,allPublishedContent }) => {
const ContentEditorDataGrid = ({ IdSubColor, setOpenCustomerDetail,gridRowsData,deletedItemFunc,refetchAllData,setSelectedRowFunc,setShowUpdateMedia,setSelectMediaItempage,page,count,onChangeHandler }) => {
  const [searchVal, setSearchVal] = useState("");
  // const [openCancelDialog, setOpenCancelDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

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
    { field: "id", headerName: "#", width: 80 },
    {
      field: "image",
      headerName: "Image",
      width: 130,
      height: "60px",

      renderCell: (params) => {
        const { value } = params;
        return (
          <>
            <Box>
              <Box sx={{ width: "48px", height: "48px" }}>
                {/* <img
                  //   src="./assets/images/AllCustomerImg.png"
                    src="assets/images/iMacMemojiRed.svg"
                  // src={params.value}
                  alt=""
                  width="100%"
                  height="auto"
                /> */}
                <img
                  //   src="./assets/images/AllCustomerImg.png"
                    // src={`https://backend.eatcoast.ca/v1/contentEditor/${params.value}`}
                    // src={`https://ec-backend-app-mg6rk.ondigitalocean.app/image/contentEditor/${params.value}`}
                    src={`${IMG_BASE_URL}/image/contentEditor/${params.value}`}
                  // src={params.value}
                  alt=""
                  width="100%"
                  height="auto"
                />
              </Box>
            </Box>
          </>
        );
      },
    },
    {
      field: "title",
      headerName: "Title",
      width: 250,
      
      renderCell: (params) => {
        const { value } = params;
        return (
          <>
            <Box >
              <Typography
                sx={{ fontSize: "14px", fontWeight: "400", color: "#1A1824", maxWidth: "144px", textOverflow: "clip", }}
              >
                {params.value}
              </Typography>
             
            </Box>
          </>
        );
      },
    },
    {
      field: "updatedAt",
      headerName: "Date",
      width: 220,
      height: "60px",
      renderCell: (params) => {
        const { value } = params;
        return (
          <>
            <Box>
              <Typography
                sx={{ fontSize: "14px", fontWeight: "400", color: "#9EA3AE" }}
              >
                {/* {params.value.dateTitle} */}
                Last modified
              </Typography>
              <Typography
                sx={{ fontSize: "14px", fontWeight: "400", color: "#1A1824" }}
              >
                {/* {params.value.dateSubTitle} */}
                {/* {params.value} */}
                {/* {moment(params.value).format('ll')} */}
                {/* {new Date(params.value).toLocaleDateString()} */}
                {/* {new Date(params.value).toLocaleTimeString()} */}
                {`${new Date(params.value).getHours()} Hours Ago`}
              </Typography>
            </Box>
            <Box></Box>
          </>
        );
      },
    },
    {
      field: "contentEditorId",
      headerName: "Id",
      width: 100,
      height: "60px",
    },
    {
      field: "type",
      headerName: "Content Type",
      width: 130,
      height: "60px",
    },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        const { value } = params;
        // console.log("allPublishedContent => ",allPublishedContent?.allPublishedContentList
        // )

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
                      {/* <MenuItem
                        onClick={() => {
                          popupState.close();
                          // setOpenCustomerDetail(true);
                        }}
                      >
                        <ListItemIcon>
                          <VisibilityOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>View Details</ListItemText>
                      </MenuItem> */}
                      <MenuItem 
                      onClick={() => {
                        popupState.close();
                        setSelectMediaItem(params?.row)
                        setShowUpdateMedia(true)
                        // setOpenCancelDialog(true);
                      }}
                      // onClick={popupState.close}
                      >
                        <ListItemIcon>
                          <BorderColorOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Edit</ListItemText>
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          popupState.close();
                          setSelectedRowFunc(params?.row)
                          setOpenDeleteDialog(true)
                          // setOpenCancelDialog(true);
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
                  // rows={subscriptionTableRow}
                  // rows={allPublishedContent?.allPublishedContentList || []}
                  rows={gridRowsData || []}
                  columns={subscriptionTableColumns}
                  disableSelectionOnClick
                  autoHeight
                  hideFooterPagination={true}
                  //   checkboxSelection
                  //   components={{
                  //     BaseCheckbox: CustomCheckbox,
                  //   }}
                />
              </Box>

              {/* {openCancelDialog ? (
                <CancelSubscriptionComp
                  open={openCancelDialog}
                  setOpen={setOpenCancelDialog}
                />
              ) : (
                ""
              )} */}

                {
                  openDeleteDialog ? 
                    <>
                      <CustomizedModal
                      title="Delete"
                      aria-labelledby="customized-dialog-title"
                      open={openDeleteDialog}
                      handleClose={()=> setOpenDeleteDialog(false)}
                      actionBtnsText={['Discard','Yes, sure']}
                      actionBtn2OnClickHandler={deletedItemFunc}
                        // ()=> {
                        //   // deleteCusine({ id:seletedCusine?._id });
                        //   // getAllCusinesData()
                        //   // deletedItemFunc && deletedItemFunc()
                        // }
                      // }
                      isHeaderShown={false}
                      >
                          <Box sx={{my:"20px",minWidth:{xs:"310px",sm:"400px"}}}>
                              <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center"}}>
                                  <Box sx={{borderRadius:"8px",p:"16px 16px 4px 16px",textAlign:"center"}}>
                                      <IconButton sx={{backgroundColor:"#FEF9E8"}}>
                                          <WarningIcon sx={{ color: "yellow",fontSize:{xs:"32px",md:"48px"} }} />
                                      </IconButton>
                                      <Typography sx={{fontSize: { xs: "13px", md: "16px" },fontWeight: "600",color: "#1A1824",}}>Delete</Typography>  
                                      <Typography sx={{fontSize: { xs: "13px", md: "14px" },fontWeight: "400",color: "#545359",}}>Deleted items cannot be returned,<br /> are you sure you want to delete this item?</Typography>  
                                  </Box>
                              </Box>
                          </Box>
                      </CustomizedModal>
                    </>
                  : 
                  ""
                }

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
                  <Typography sx={Typo1}>Show 1-10 of 50 entries</Typography>
                  {/* <Typography sx={Typo1}>{`Show ${page}-${size} of ${count} entries`}</Typography> */}
                </Box>
                <Box
                  sx={{ mt: { lg: "0px", md: "0px", sm: "0px", xs: "30px" } }}
                >
                  <Pagination
                    sx={paginationSx}
                    page={page && page} 
                    count={count && count} 
                    onChange={onChangeHandler && onChangeHandler}
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
    </>
  );
};

export default ContentEditorDataGrid;
