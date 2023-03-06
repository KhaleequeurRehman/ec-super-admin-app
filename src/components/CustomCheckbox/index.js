import * as React from 'react';
import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';



export default function CustomCheckbox({color='#137cbd',...restProps}) {
  const BpIcon = styled('span')(({ theme }) => ({
    borderRadius: 3,
    width: 16,
    height: 16,
    boxShadow:
      theme.palette.mode === 'dark'
        ? '0 0 0 1px rgb(16 22 26 / 40%)'
        : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: color,
    '.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: color,
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background:
        theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
    },
  }));
  
  const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: color,
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: color,
    },
  });

  return (
    <Checkbox
      disableRipple
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      inputProps={{ 'aria-label': 'Checkbox demo' }}
      {...restProps}
    />
  );
}


























// function CustomizedCheckbox(colorVal,...restprops) {

//   // const [colorValue, setColorValue] = useState('#f882ad')
//   const [colorValue, setColorValue] = useState('#f882ad')
//   const BpIcon = styled('span')(({ theme }) => ({
//     borderRadius: 3,
//     width: 16,
//     height: 16,
//     boxShadow:
//       theme.palette.mode === 'dark'
//         ? '0 0 0 1px rgb(16 22 26 / 40%)'
//         : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
//     // backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
//     // backgroundColor: color? color : '#f882ad',
//     backgroundColor: colorValue,
//     // backgroundImage:
//     //   theme.palette.mode === 'dark'
//     //     ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
//     //     : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
//     '.Mui-focusVisible &': {
//       outline: '2px auto rgba(19,124,189,.6)',
//       outlineOffset: 2,
//     },
//     'input:hover ~ &': {
//       // backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
//       // backgroundColor: color? color : '#f882ad',
//       backgroundColor: colorValue,
//     },
//     'input:disabled ~ &': {
//       boxShadow: 'none',
//       background:
//         theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
//     },
//   }));
  
//   const BpCheckedIcon = styled(BpIcon)({
//     // backgroundColor: color? color : '#f882ad',
//     backgroundColor: colorValue,
//     // backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
//     '&:before': {
//       display: 'block',
//       width: 16,
//       height: 16,
//       backgroundImage:
//         "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
//         " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
//         "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
//       content: '""',
//     },
//     'input:hover ~ &': {
//       // backgroundColor: '#106ba3',
//       // backgroundColor: color? color : '#f882ad',
//       backgroundColor: colorValue,
//     },
//   });

//   return (
//     <Checkbox
//       // sx={{
//       //   '&:hover': { bgcolor: 'transparent' },
//       // }}
//       disableRipple
//       // color="default"
//       checkedIcon={<BpCheckedIcon />}
//       icon={<BpIcon />}
//       inputProps={{ 'aria-label': 'Checkbox demo' }}
//       {...restprops}
//     />
//   );
// }

// export default function CustomCheckbox(color,...restProps) {
//   return (
//     <div>
//       {/* <CustomizedCheckbox color={color && color} defaultChecked {...restProps}/> */}
//       <CustomizedCheckbox colorVal='#f882ad' defaultChecked {...restProps}/>
//       {/* <CustomizedCheckbox defaultChecked />
//       <CustomizedCheckbox disabled /> */}
//     </div>
//   );
// }