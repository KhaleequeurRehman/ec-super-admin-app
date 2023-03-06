import React from 'react';
import Chip from '@mui/material/Chip';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from '@mui/system';

export const CustomStatusChip = ({title}) => {

    const CustomStatusChip = styled(Chip)({
        color: '#30A15F',
        backgroundColor: '#F1FFF7',
        border:"1px solid #81D9A5",
        borderRadius: 4,
        padding: "2px, 9px, 2px, 9px",
        height: "24px",
        fontSize: "14px",
        fontWeight: "400",
        lineHeight: "20px",
      });


  return (
    <div>
        <Box>
        <CustomStatusChip label={title} variant="outlined" />
        </Box>
    </div>
  )
}
