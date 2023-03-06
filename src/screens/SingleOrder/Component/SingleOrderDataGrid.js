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
import SearchIcon from "@mui/icons-material/Search";
import { Grid } from "@mui/material";
import { SingleOrderHeader } from "./SingleOrderHeader";
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


// const subscriptionTableRow = [
//   {
//     id: 1,
//     idSubs: "ECS - 12345",
//     cusName: "Mesopotamian cuisine",
//     caterer: "Chef Jina Catering",
//     type: "Personal subscription",
//     deliveryDate: "Thu, 21 Nov 2021",
//   },
//   {
//     id: 2,
//     idSubs: "ECS - 12345",
//     cusName: "Mesopotamian cuisine",
//     caterer: "Chef Jina Catering",
//     type: "Fitness subscription",
//     deliveryDate: "Thu, 21 Nov 2021",
//   },
//   {
//     id: 3,
//     idSubs: "ECS - 12345",
//     cusName: "Mesopotamian cuisine",
//     caterer: "Chef Jina Catering",
//     type: "Bussines subscription",
//     deliveryDate: "Thu, 21 Nov 2021",
//   },
//   {
//     id: 4,
//     idSubs: "ECS - 12345",
//     cusName: "Mesopotamian cuisine",
//     caterer: "Chef Jina Catering",
//     type: "Multiple subscription",
//     deliveryDate: "Thu, 21 Nov 2021",
//   },
//   {
//     id: 5,
//     idSubs: "ECS - 12345",
//     cusName: "Mesopotamian cuisine",
//     caterer: "Chef Jina Catering",
//     type: "Fitness subscription",
//     deliveryDate: "Thu, 21 Nov 2021",
//   },
//   {
//     id: 6,
//     idSubs: "ECS - 12345",
//     cusName: "Mesopotamian cuisine",
//     caterer: "Chef Jina Catering",
//     type: "Single order",
//     deliveryDate: "Thu, 21 Nov 2021",
//   },
//   {
//     id: 7,
//     idSubs: "ECS - 12345",
//     cusName: "Mesopotamian cuisine",
//     caterer: "Chef Jina Catering",
//     type: "Personal subscription",
//     deliveryDate: "Thu, 21 Nov 2021",
//   },
//   {
//     id: 8,
//     idSubs: "ECS - 12345",
//     cusName: "Mesopotamian cuisine",
//     caterer: "Chef Jina Catering",
//     type: "Fitness subscription",
//     deliveryDate: "Thu, 21 Nov 2021",
//   },
//   {
//     id: 9,
//     idSubs: "ECS - 12345",
//     cusName: "Mesopotamian cuisine",
//     caterer: "Chef Jina Catering",
//     type: "Single order",
//     deliveryDate: "Thu, 21 Nov 2021",
//   },
//   {
//     id: 10,
//     idSubs: "ECS - 12345",
//     cusName: "Mesopotamian cuisine",
//     caterer: "Chef Jina Catering",
//     type: "Personal subscription",
//     deliveryDate: "Thu, 21 Nov 2021",
//   },
// ];


// const SingleOrderDataGrid = ({IdSubColor}) => {

const SingleOrderDataGrid = ({girdTableColumns,gridTableRow,searchVal,isShownNoResult,PaginationCount,paginationPage,paginationOnchange}) => {


  // const subscriptionTableColumns = [
  //   { field: "id", headerName: "#", width: 100 },
  //   {
  //     field: "idSubs",
  //     headerName: "Id subs",
  //     width: 160,
  //     renderHeader: () => (
  //       <strong>
  //         {"Id subs "}
  //         <span role="img" aria-label="enjoy" style={{ paddingLeft: "20px" }}>
  //           <img src="assets/images/arrow-3.svg" alt="" />
  //         </span>
  //       </strong>
  //     ),
  //     renderCell: (params) => {
  //       const { value } = params;
  //       return (
  //         <>
  //           <Box>
  //             <Typography
  //               sx={{
  //                 color: "#42C677",
  //                 // color: `${IdSubColor}`,
  //                 fontSize: "16px",
  //                 fontWeight: "400",
  //                 lineHeight: "16px",
  //               }}
  //             >
  //               {params.value}
  //             </Typography>
  //           </Box>
  //         </>
  //       );
  //     },
  //   },
  //   {
  //     field: "cusName",
  //     headerName: "Customer Name",
  //     width: 230,
  //     renderHeader: () => (
  //       <strong>
  //         {"Customer Name "}
  //         <span role="img" aria-label="enjoy" style={{ paddingLeft: "20px" }}>
  //           <img src="assets/images/arrow-3.svg" alt="" />
  //         </span>
  //       </strong>
  //     ),
  //   },
  //   {
  //     field: "caterer",
  //     headerName: "Caterer",
  //     width: 230,
  //     renderHeader: () => (
  //       <strong>
  //         {"Caterer "}
  //         <span role="img" aria-label="enjoy" style={{ paddingLeft: "20px" }}>
  //           <img src="assets/images/arrow-3.svg" alt="" />
  //         </span>
  //       </strong>
  //     ),
  //   },
  //   {
  //     field: "deliveryDate",
  //     headerName: "Delivery date",
  //     width: 230,
  //     renderHeader: () => (
  //       <strong>
  //         {"Delivery date "}
  //         <span role="img" aria-label="enjoy" style={{ paddingLeft: "20px" }}>
  //           <img src="assets/images/arrow-3.svg" alt="" />
  //         </span>
  //       </strong>
  //     ),
  //     renderCell: (params) => {
  //       const { value } = params;
  //       return (
  //         <>
  //           <Box>
  //             <Chip
  //               label={params.value}
  //               variant="outlined"
  //               sx={{
  //                 // background: chipBgColor,
  //                 border: "1px solid #D5E6E5",
  //                 color: "#545359",
  //                 borderRadius: "6px",
  //                 p: "0px 20px",
  //                 textAlign: "center",
  //               }}
  //             />
  //           </Box>
  //         </>
  //       );
  //     },
  //   },
  //   {
  //     field: "type",
  //     headerName: "Type",
  //     width: 230,
  //     renderHeader: () => (
  //       <strong>
  //         {"Type "}
  //         <span role="img" aria-label="enjoy" style={{ paddingLeft: "20px" }}>
  //           <img src="assets/images/arrow-3.svg" alt="" />
  //         </span>
  //       </strong>
  //     ),
  //     renderCell: (params) => {
  //       const { value } = params;
  //       let chipBgColor = "";
  //       if (value === "Personal subscription") {
  //         chipBgColor = "#7B49E5";
  //       } else if (value === "Multiple subscription") {
  //         chipBgColor = "#158FAD";
  //       } else if (value === "Bussines subscription") {
  //         chipBgColor = "#FF9933";
  //       } else if (value === "Single order") {
  //         chipBgColor = "#7ECC49";
  //       } else if (value === "Fitness subscription") {
  //         chipBgColor = "#FF8D85";
  //       }
  //       return (
  //         <>
  //           <Box>
  //             <Chip
  //               label={params.value}
  //               variant="contained"
  //               sx={{
  //                 background: chipBgColor,
  //                 borderRadius: "6px",
  //                 color: "#fff",
  //                 p: "2px 8px",
  //                 textAlign: "center",
  //               }}
  //             />
  //           </Box>
  //         </>
  //       );
  //     },
  //   },
  // ];

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
          {/* {!searchVal ? ( */}
          {!isShownNoResult ? (
            <>
              <Box sx={{ width: "100%" }}>
                <StyledDataGrid
                  rows={gridTableRow}
                  columns={girdTableColumns}
                  disableSelectionOnClick
                  autoHeight
                  hideFooterPagination={true}
                />
              </Box>

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
                  <Typography sx={Typo1}>{`Show ${page}-${size} of ${PaginationCount} entries`}</Typography>
                </Box>
                <Box
                  sx={{ mt: { lg: "0px", md: "0px", sm: "0px", xs: "30px" } }}
                >
                  <Pagination
                    sx={paginationSx}
                    // count={10}
                    count={PaginationCount}
                    page={paginationPage}
                    onChange={paginationOnchange}
                  />
                </Box>
              </Box>
            </>
          ) : (
            <NoResultMsg searchValueText={`“${searchVal}”`} />
            // ""
          )}
        </Box>
      </Box>
    </>
  );
};

export default SingleOrderDataGrid;
