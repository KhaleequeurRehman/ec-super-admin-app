import React, { useState } from "react";
import { Container, Box, Button, Typography, OutlinedInput,} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import { styled } from "@mui/material";
import CustomizedDrop from "../../../components/Input/DropDown";
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SendNotification from "../../Customer/components/SendNotification/SendNotification";

const BtnTextTypo1 = {
  fontSize: "12px",
  fontWeight: "400",
  lineHeight: "140%",
  color: "#2B817B",
  textTransform: "capitalize",
  textDecoration: "underline"
};

const Button2 = {
  width: "103px",
  height: "40px",
  padding: "10px, 16px, 10px, 16px",
  backgroundColor: "#2B817B",
  borderRadius: "4px",
  width: { lg: "166px", md: "166px", sm: "166px", xs: "30px" },
  ":hover": {
    backgroundColor: "#2B817B",
  },
};

const CustomSearch = styled(OutlinedInput)(({ theme }) => ({
  padding: "10px 16px",
  width: "350px",
  height: "40px",
  background: "#F6F6F6",
  border: "1px solid #E1E1E6",
  borderRadius: "4px"
}));

const BtnTypo2 = {
  fontSize: "14px",
  fontWeight: "600",
  lineHeight: "20px",
  color: "#FFFFFF",
  textTransform: "capitalize",
};

function Header({addButtonTitle="New Cuisine",menu = [],title='All Cuisines',searchVal,setSearchVal,searchFunc,isShownCustomBtn=true,hasNotificationButton,addButtonOnclickHandler,lastAddedBtnOnClickHandler,menuItems,hasFilterBtn,handleClickFilter}) {


  const CustomButton = styled(Button)(({ theme }) => ({
    padding: "10px 16px",
    // width: "133px",
    height: "40px",
    background: "#2B817B",
    borderRadius: "4px",
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: "14px",
    "&:hover": { backgroundColor: "#2B817B", color: "white" },
  }));

  const CustomText = styled(Typography)(({ theme }) => ({
    color: "#1A1824",
    fontWeight: "600",
    fontSize: "20px",
    letterSpacing: "0.01em",
    fontFamily: "Outfit",
  }));

  const [openSendNotification, setOpenSendNotification] = useState(false);

  const [actionAnchorEl, setActionAnchorEl] = useState(null);

  const isActionMenuOpen = Boolean(actionAnchorEl);

  const handleActionMenuClose = () => {
    setActionAnchorEl(null);
  };

  const handleActionMenuOpen = (event) => {
    setActionAnchorEl(event.currentTarget);
  };

  
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const Button1 = {
    //   width: "103px",
    width: "72px",
    height: "32px",
    padding: "10px, 16px, 10px, 16px",
    border: "1px solid #80B3B0",
    borderRadius: "4px",
    backgroundColor: "#F1FFF7",
    borderColor: "1px solid #81D9A5",
    ":hover": {
      border: "1px solid #80B3B0",
    },
  };

  const BtnTypo1 = {
    fontSize: "14px",
    fontWeight: "600",
    lineHeight: "20px",
    color: "#2B817B",
    textTransform: "capitalize",
  };

  return (
    <>
      <Box sx={{width:{xs:"100%"}, display: "flex",alignItems: "center",justifyContent: "space-between",flexWrap: "wrap"}}>
        <Box>
          <CustomText>{title}</CustomText>
        </Box>
        <Box>
            {
              isShownCustomBtn && 
              (
                <CustomButton 
                startIcon={<AddIcon sx={{width: "16px", height :"16px"}} />}
                onClick={addButtonOnclickHandler && addButtonOnclickHandler}
                > 
                {addButtonTitle}
                </CustomButton>
              )
            }

            {hasNotificationButton && (
              <Box>
                <Button
                  variant="contained"
                  sx={Button2}
                  onClick={() => {
                    setOpenSendNotification(true);
                  }}
                >
                  <img src="./assets/images/notification.svg" alt="" />
                  <Box
                    sx={{
                      display: {
                        lg: "flex",
                        md: "flex",
                        sm: "flex",
                        xs: "none",
                      },
                    }}
                  >
                    <Typography ml="8px" sx={BtnTypo2}>
                      Send Notification
                    </Typography>
                  </Box>
                </Button>
              </Box>
            )}
            
        </Box>
      </Box>
      <Box sx={{width:{xs:"100%"},marginTop:3,marginBottom:3, display: "flex",alignItems: "center",justifyContent: "space-between",flexWrap: "wrap",}}>
        <Box>
          <CustomSearch endAdornment={
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          } 
          placeholder="Search"
          value={searchVal}
          onChange={
            (e) => {
               setSearchVal(e.target.value);
               searchFunc(e.target.value)
            }
          }
          />
        </Box>
        <Box sx={{display:'flex'}} gap={2}>
          {/* {
           menu.map((item,i)=>(
            <CustomizedDrop
            key={i}
            label={item.title}
            items={item?.items}
                      // items={[
                      //   {
                      //     label: "View Details",
                      //     icon: "fa fa-eye",
                      //     id: "view-details",
                      //   },
                      //   {
                      //     label: "Pause Subscription",
                      //     icon: "fa fa-eye",
                      //     color: "#6A82CF",
                      //     id: "pause-subscription",
                      //   },
                      //   {
                      //     label: "Change Address",
                      //     icon: "fa fa-eye",
                      //     id: "change-address",
                      //   },
                      //   {
                      //     label: "View Receipt",
                      //     icon: "fa fa-eye",
                      //     id: "view-receipt",
                      //   },
                      //   {
                      //     label: "Cancel Subscription",
                      //     icon: "fa fa-eye",
                      //     color: "#E75C62",
                      //     id: "cancel-subscription",
                      //   },
                      //   { label: "Help", icon: "fa fa-eye", id: "help" },
                      // ]}
                      onClick={(e) => {
                        console.log(e);
                      }}
                    />
            ))
          } */}
        <Button variant="text" onClick={lastAddedBtnOnClickHandler && lastAddedBtnOnClickHandler}>
            <Typography sx={BtnTextTypo1}> Last Added</Typography>
            <Box sx={{width: "16px", height: "16px"}}><img src="./assets/images/GreenArrow-down.svg" alt="" width="100%" height="auto" /></Box>
        </Button>
        <Box sx={{ml:"10px"}}>
          <Button 
          variant="text"
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          >
            <Typography sx={BtnTextTypo1}>
              Any Status
            </Typography>
            <Box sx={{ width: "16px", height: "16px" }}>
              <img
                src="./assets/images/GreenArrow-down.svg"
                alt=""
                width="100%"
                height="auto"
              />
            </Box>
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={()=> setAnchorEl(null)}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            {
              Array.isArray(menuItems) && menuItems?.length>0 && menuItems.map((item,i) => (
                <MenuItem sx={{color: "#2B817B",}} onClick={() => { item?.onClick(); setAnchorEl(null)}} key={i}>{item?.name}</MenuItem>
              ) )
              }
          </Menu>
        </Box>
        {hasFilterBtn && (
          <Box sx={{ml:"10px"}}>
            <Button
              variant="outlined"
              sx={Button1}
              onClick={handleClickFilter && handleClickFilter}
            >
              <Typography sx={BtnTypo1}>Filter</Typography>
              <Box
                ml="8px"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <img src="./assets/images/setting-4.svg" alt="" />
              </Box>
            </Button>
          </Box>
        )}
        </Box>
      </Box>
      {openSendNotification ? (
          <SendNotification
            open={openSendNotification}
            setOpen={setOpenSendNotification}
          />
        ) : (
          ""
        )}
    </>
  );
}

export default Header;
