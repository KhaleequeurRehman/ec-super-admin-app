import React from 'react'
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

const SearchInputField = styled(TextField)({
    background: "#F6F6F6",
    "& fieldset.MuiOutlinedInput-notchedOutline.css-1d3z3hw-MuiOutlinedInput-notchedOutline":
      {
        borderColor: "#e1e1e6",
        borderRadius: "6px",
      },
  });

const CustomSearchInputField = (props) => {
  return (
    <>
        <SearchInputField
            {...props}
        />
    </>
  )
}

export default CustomSearchInputField