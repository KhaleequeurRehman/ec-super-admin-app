import React, { useState } from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import CustomSearchInputField from '../../../components/CustomSearchInputField';
import CustomDataGrid from '../../../components/CustomDataGrid';
import CustomPagination from '../../../components/CustomPagination';
import CustomizedDrop from '../../../components/CustomizedDropdown/Input/DropDown'
import Button from "@mui/material/Button";
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import { BsThreeDots } from "react-icons/bs";

const RecentOrder = ({heading='Recent Order',girdTableColumns,gridTableRow}) => {
  const [searchVal, setSearchVal] = useState("");

  const [actionAnchorEl, setActionAnchorEl] = useState(null);

  const isActionMenuOpen = Boolean(actionAnchorEl);

  const handleActionMenuClose = () => {
    setActionAnchorEl(null);
  };

  const handleActionMenuOpen = (event) => {
    setActionAnchorEl(event.currentTarget);
  };

 

  const actionMenuId = 'primary-search-account-menu-mobile';
  const actionMenu = (
    <Menu
      anchorEl={actionAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={actionMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isActionMenuOpen}
      onClose={handleActionMenuClose}
    >
      <MenuItem onClick={()=>{ handleActionMenuClose() }}>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <img src="assets/images/eyeIcon.svg" alt="eyeIcon" />
        </IconButton>
        <Typography sx={{fontSize:"14px",fontWeight:"600",color:"#1A1824"}}>View Details</Typography>
      </MenuItem>
      <MenuItem onClick={handleActionMenuClose}>
        <IconButton
          size="large"
          color="inherit"
        >
         <img src="assets/images/messageIcon.svg" alt="messageIcon" />
        </IconButton>
        <Typography sx={{fontSize:"14px",fontWeight:"600",color:"#1A1824"}}>Send Message</Typography>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <Box width="100%">
        <Typography sx={{fontSize:{xs:"13px",md:"16px"},margin:{xs:"8px 0px",md:"8px 16px"},fontWeight:"600",color:"#1A1824"}}>{heading}</Typography>  
        <Box sx={{mt:"30px",mb:"20px",display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center"}}>
          <Box sx={{my:"10px"}}>
            <CustomSearchInputField
              id="outlined-start-adornment"
              sx={{ m: 1, width: "32ch",margin:{xs:"8px 0px",md:"0px"} }}
              size="small"
              placeholder="Search"
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton aria-label="toggle password visibility">
                      <SearchIcon sx={{ color: "#9EA3AE" }} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",my:"10px"}}>
            <CustomizedDrop label='All Main Courses' />
            <CustomizedDrop label='Last Added' />
            <CustomizedDrop label='Any Status' />
          </Box>
        </Box>
        <Box sx={{my:"10px"}}>
          <Box
            width="100%"
            border="1px solid #e1e1e6"
            p="10px 20px"
            borderRadius="8px"
            minHeight="60vh"
          >
            <CustomDataGrid
              rows={gridTableRow}
              columns={girdTableColumns}
              disableSelectionOnClick
              autoHeight
              hideFooterPagination={true}
            />
            <Box sx={{
              margin: "20px 0",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}>
              <Typography sx={{color:"#9EA3AE",fontSize:"14px",fontWeight:"400"}}>
              Show 1-10 of 50 entries
              </Typography>
              <CustomPagination />
            </Box>
          </Box>
          {actionMenu}
        </Box>
      </Box>
    </>
  )
}

export default RecentOrder