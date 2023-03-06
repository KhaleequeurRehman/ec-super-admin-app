import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';



const CustomTextareaInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    // backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    backgroundColor: '#F6F6F6',
    // border: '1px solid #ced4da',
    border: 'none',
    fontSize: 14,
    // width: 'auto',
    padding: '10px 12px',
    transition: theme.transitions.create([
      // 'border-color',
      'background-color',
      // 'box-shadow',
    ]),
    // // Use the system font instead of the default Roboto font.
    // fontFamily: [
    //   '-apple-system',
    //   'BlinkMacSystemFont',
    //   '"Segoe UI"',
    //   'Roboto',
    //   '"Helvetica Neue"',
    //   'Arial',
    //   'sans-serif',
    //   '"Apple Color Emoji"',
    //   '"Segoe UI Emoji"',
    //   '"Segoe UI Symbol"',
    // ].join(','),
    // '&:focus': {
      // boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      // borderColor: theme.palette.primary.main,
    // },
  },
}));


const CustomTextarea = ({label, name, value, onChangeHandler, onBlurHandler, placeholder, errors, touched, multiline, rows, InuptSx}) => {

    
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  return (
    <>
        <Box sx={{width:"100%"}}>
          <FormControl variant="standard" sx={{width:"100%"}}>
            {
              label && 
              <InputLabel shrink htmlFor="bootstrap-input">
                {label && label}
              </InputLabel>
            } 
            <CustomTextareaInput 
            id="bootstrap-input"
            placeholder={placeholder}
            name={name && name}
            value={value && value}
            onChange={onChangeHandler && onChangeHandler}
            onBlur={onBlurHandler && onBlurHandler}
            multiline={multiline && multiline}
            rows={rows && rows}
            sx={InuptSx && InuptSx}   
            />
          </FormControl>
        </Box>
    </>
    
  );
};

export default CustomTextarea;
