import React, { useState } from "react";
import styles from './TextInputField.module.sass'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const CustomTextField = styled(TextField)({
    width: "100%",
    '& label.MuiInputLabel-root': {
        display: "none"
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'unset',
    },
    '& .MuiOutlinedInput-root': {
        width: "100%",
        '& input': {
        width: "100%",
        color: "black",
        backgroundColor: "#F6F6F6",
        fontSize: "14px",
        fontWeight:"400",
        border: "1px solid #9EA3AE",
        borderRadius: "4px",
        padding: "12px 24px 12px 24px",
      },
    '& input::placeholder': {
        color: "#9EA3AE",
        fontSize: "14px",
        fontWeight:"400",
        opacity: 1
    },
    '& fieldset': {
        borderColor: 'unset',
        display: "none"
      },
    '&': {
        padding: 0,
        margin: "5px 0",
        position: "static"
    },
    '& textarea#mui-3': {
        width: "100%",
        height: "auto",
        overflow: "auto",
        padding: "12px 24px 12px 24px",
        border: "1px solid #00A2FD",
        borderRadius: "18px",
        overflowWrap: "break-word",
        backgroundColor: "transparent",
        fontSize: "14px",
        fontWeight:"400",
        color: "black",
      },
    '& textarea#mui-3::placeholder': {
        color: "#9EA3AE",
        opacity: "1"
      },
    },
  });

const CustomPasswordField = styled(TextField)({
    width: "100%",
    border: "1px solid #9EA3AE",
    borderRadius: "4px",
    paddingRight: "14px",
    backgroundColor: "#F6F6F6",
    '& label.MuiInputLabel-root': {
        display: "none"
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'unset',
    },
    '& .MuiOutlinedInput-root': {
        width: "100%",
        '& input': {
        width: "100%",
        color: "black",
        backgroundColor: "#F6F6F6",
        fontSize: "14px",
        fontWeight:"400",
        padding: "10px 24px 10px 24px",
      },
    '& input::placeholder': {
        color: "#9EA3AE",
        fontSize: "14px",
        fontWeight:"400",
        opacity: 1
    },
    '& fieldset': {
        borderColor: 'unset',
        display: "none"
      },
    '&': {
        padding: 0,
        margin: "5px 0",
        position: "static"
    },
    '& textarea#mui-3': {
        width: "100%",
        height: "auto",
        overflow: "auto",
        padding: "12px 24px 12px 24px",
        border: "1px solid #00A2FD",
        borderRadius: "18px",
        overflowWrap: "break-word",
        backgroundColor: "transparent",
        fontSize: "14px",
        fontWeight:"400",
        color: "black",
      },
    '& textarea#mui-3::placeholder': {
        color: "#9EA3AE",
        opacity: "1"
      },
    },
  });

const TextInputField = ({label, name, value, onChangeHandler, onBlurHandler, placeholder, errors, touched, multiline, rows, required=false, isPasswordField=false}) => {

  const [showPassword, setShowPassword] = useState(false);
    
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  return (
    <>
    {
      isPasswordField? (
        <>
          <Box className={styles.textInputFieldWrapper}>
            {
              label && 
              <label htmlFor={label}>
                <Typography>{label}{required && "*"}</Typography>
              </label>
            } 
            <CustomPasswordField
              placeholder={placeholder}
              name={name && name}
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
              value={value && value}
              onChange={onChangeHandler && onChangeHandler}
              onBlur={onBlurHandler && onBlurHandler}
            />
            {errors && touched ? (
              <Typography
                sx={{ color: "#9c3c3c", mt: "5px", ml: "10px" }}
                variant="caption"
              >
                {errors}
              </Typography>
            ) : null}
          </Box>
        </>
      )
      :
      (
        <>
          <Box className={styles.textInputFieldWrapper}>
            {
              label && 
              <label htmlFor={label}>
                <Typography>{label}{required && "*"}</Typography>
              </label>
            } 
            <CustomTextField
              placeholder={placeholder}
              name={name && name}
              value={value && value}
              onChange={onChangeHandler && onChangeHandler}
              onBlur={onBlurHandler && onBlurHandler}
              multiline={multiline && multiline}
              rows={rows && rows}
            />
            {errors && touched ? (
              <Typography
                sx={{ color: "#9c3c3c", mt: "5px", ml: "10px" }}
                variant="caption"
              >
                {errors}
              </Typography>
            ) : null}
          </Box>
        </>
      )
    }
      
    </>
  );
};

export default TextInputField;
