import React from 'react'
import CustomCheckbox from '../../../../Customer/components/CustomCheckbox'
import Box from "@mui/material/Box";
import { Typography } from '@mui/material';
import { styled, IconButton, createStyles } from "@mui/material";
import { LightTitle } from '../../../../../components/Typography';

export const CheckboxWithTitle = ({data, handleCheckCheckbox}) => {
  return (
    <div>
       <Box sx={{display: "flex", alignItems: "center"}}>
       <Box>
            <CustomCheckbox handleCheckCheckbox={handleCheckCheckbox} checkboxVal={data.value}/>
        </Box>
        <Box ml="10px">
            <LightTitle color="#1A1824">{data.title}</LightTitle>
        </Box>
      </Box>
    </div>
  )
}
