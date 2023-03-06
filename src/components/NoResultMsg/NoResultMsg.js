import Box from '@mui/material/Box'
import React from 'react'
import { FiSearch } from "react-icons/fi";
import { Typography } from '@mui/material';

const NoResultMsg = ({searchValueText}) => {
  return (
    <>
        <Box display="flex" justifyContent="center" alignItems="center" mt={10}>
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                <Box width="88px" height="88px" bgcolor="#F0D859" borderRadius="50%"  display="flex" justifyContent="center" alignItems="center" >
                  <FiSearch style={{fontSize:"2rem",color:"#FAA641"}} />
                </Box>
                 <Typography fontSize="18px" fontWeight="400" my="5px">Oops, there’s no results for</Typography>
                 <Typography fontSize="18px" fontWeight="600" my="5px">{searchValueText !==undefined || searchValueText !==null ? `“${searchValueText}”` : ''}</Typography>
            </Box>
        </Box>
    </>
  )
}

export default NoResultMsg