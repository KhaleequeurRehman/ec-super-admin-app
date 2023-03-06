import React from 'react'
import Pagination from "@mui/material/Pagination";
import { styled } from "@mui/material/styles";

const StyledPagination = styled(Pagination)(({ theme }) => ({
    "& .css-1awya33-MuiButtonBase-root-MuiPaginationItem-root":{
        border: "1px solid #E1E1E6",
        borderRadius: "8px",
        color: "#9EA3AE",
        background: "none",
    },
    "& .css-1awya33-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected":{
        backgroundColor: "#2b817b",
        color: "white",
        borderRadius: "8px",
    },
}));

const CustomPagination = ({page,count,onChangeHandler,...props}) => {
  return (
    <>
        <StyledPagination page={page} count={count} onChange={onChangeHandler} {...props} />
        {/* <StyledPagination count={10}/> */}
    </>
  )
}

export default CustomPagination