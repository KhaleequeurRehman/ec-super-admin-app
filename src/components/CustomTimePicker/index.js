import React from "react";
import Box from '@mui/material/Box';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

// const CustomTextField = styled(TextField)({
//     width: "100%",
//     '& label.MuiInputLabel-root': {
//         display: "none"
//     },
//     '& .MuiInput-underline:after': {
//         borderBottomColor: 'unset',
//     },
//     '& .MuiOutlinedInput-root': {
//         width: "100%",
//         '& input': {
//         width: "100%",
//         color: "black",
//         backgroundColor: "#F6F6F6",
//         fontSize: "14px",
//         fontWeight:"400",
//         border: "1px solid #9EA3AE",
//         borderRadius: "4px",
//         padding: "12px 24px 12px 24px",
//       },
//     '& input::placeholder': {
//         color: "#9EA3AE",
//         fontSize: "14px",
//         fontWeight:"400",
//         opacity: 1
//     },
//     '& fieldset': {
//         borderColor: 'unset',
//         display: "none"
//       },
//     '&': {
//         padding: 0,
//         margin: "5px 0",
//         position: "static"
//     },
//     '& textarea#mui-3': {
//         width: "100%",
//         height: "auto",
//         overflow: "auto",
//         padding: "12px 24px 12px 24px",
//         border: "1px solid #00A2FD",
//         borderRadius: "18px",
//         overflowWrap: "break-word",
//         backgroundColor: "transparent",
//         fontSize: "14px",
//         fontWeight:"400",
//         color: "black",
//       },
//     '& textarea#mui-3::placeholder': {
//         color: "#9EA3AE",
//         opacity: "1"
//       },
//     },
//   });

const CustomTimePicker = ({...restParams}) => {

  return (
    <>
        <Box>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
                {...restParams}
            />
            </LocalizationProvider>
        </Box>
    </>
  );
};

export default CustomTimePicker;
