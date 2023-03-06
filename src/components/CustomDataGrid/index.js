import React from 'react'
import { DataGrid } from "@mui/x-data-grid";
import { styled } from "@mui/material/styles";

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
    "& .css-17jjc08-MuiDataGrid-footerContainer": {
      display: "none",
    },
    boxShadow: "none",
    border: "none",
    borderColor: "green",
    color: "#545359",
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
  

const CustomDataGrid = (props) => {
  return (
    <>
        <StyledDataGrid
            {...props}
        />
    </>
  )
}

export default CustomDataGrid