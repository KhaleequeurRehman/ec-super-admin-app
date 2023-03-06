import React,{useState} from 'react';
import { Button } from '@mui/material';
import  iconButton  from '../Assets/icon-btn.png';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import eyeIcon from '../Assets/Eye.png';
import editIcon from  '../Assets/edit-2.png';
import trashIcon from '../Assets/trash.png';
import Overlay from '../Overlay/Overlay';

function IconButton({onClick,setViewDetails}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isOpen,setIsOpen] = React.useState(false)
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleChange = ()=>{
      setIsOpen(true)
    }
    return ( 
        <React.Fragment>
            <Button
            onClick={handleClick}
            sx={{
                '&:hover':{backgroundColor:"white"}
            }}
            >
                <img src={iconButton} alt="Icon Button"/>
            </Button>
            <Overlay isOpen={isOpen} setIsOpenFunc={setIsOpen}/>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
     
      >
        <MenuItem sx={{width:'200px'}} onClick={()=>setViewDetails(true)}>
            <img style={{marginRight:'10px'}} src={eyeIcon} alt="Eye Icon" />
            View Details
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <img style={{marginRight:'10px'}} src={editIcon} alt="Edit Icon" />
            Edit
        </MenuItem>
        <MenuItem sx={{color:'#E75C62'}} onClick={handleChange}>
            <img style={{marginRight:'10px'}} src={trashIcon} alt="tarsh icon" />
            Delete
        </MenuItem>
      </Menu>
      

        </React.Fragment>
     );
}

export default IconButton;