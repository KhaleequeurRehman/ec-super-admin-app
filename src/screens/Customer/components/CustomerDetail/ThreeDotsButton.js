import React from "react";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import CancelSubscriptionComp from "../../../Subscription/Component/CancelSubscription/CancelSubscriptionComp";
import IssueRefund from "../../../Subscription/Component/IssueRefund";
import CustomizedModal from "components/Modal/CustomModal";
import { IconButton } from "@mui/material";
import WarningIcon from '@mui/icons-material/Warning';
// import CancelSubscriptionComp from "../../Subscription/Component/CancelSubscription/CancelSubscriptionComp";

export const ThreeDotsButton = ({IsCustomerButtonMenu, IsCatererButtonMenu,updateStatus,refetchDetailData}) => {
  const [openCancelDialog, setOpenCancelDialog] = useState(false);
  const [open, setOpen] = useState(false);
  const [openRefund, setOpenRefund] = React.useState(false);
  const [openTerminateDialog, setOpenTerminateDialog] = useState(false);
  
  return (
    <div>
      <Box>
        <Box>
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                <Box sx={{ width: "24px", height: "24px" }}>
                  <Box
                    variant="contained"
                    {...bindTrigger(popupState)}
                    sx={{
                      width: "40px",
                      height: "40px",
                      border: "1px solid #80B3B0",
                      backgroundColor: "#ffffff",
                      padding: "8px",
                      borderRadius: "3px",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      src="./assets/images/More.svg"
                      alt=""
                      width="24px"
                      height="24px"
                    />
                  </Box>
                </Box>
                {IsCustomerButtonMenu && (
                  <>
                    <Menu {...bindMenu(popupState)}>
                      <MenuItem 
                      // onClick={popupState.close}
                      onClick={() => {
                        popupState.close();
                        setOpenRefund(true);
                      }}
                      >
                        <ListItemIcon>
                          {/* <BorderColorOutlinedIcon fontSize="small" /> */}
                          <img
                            src="./assets/images/bignoteBlack.svg"
                            alt=""
                            width="16px"
                            height="16px"
                          />
                        </ListItemIcon>
                        <ListItemText>Issue Refund</ListItemText>
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          popupState.close();
                          setOpen(true);
                        }}
                      >
                        <ListItemIcon>
                          {/* <BorderColorOutlinedIcon fontSize="small" /> */}
                          <img
                            src="./assets/images/trash.svg"
                            alt=""
                            width="16px"
                            height="16px"
                          />
                        </ListItemIcon>
                        <ListItemText sx={{ color: "#E75C62" }}>
                          Cancel Subscription
                        </ListItemText>
                      </MenuItem>
                    </Menu>
                  </>
                )}



{IsCatererButtonMenu && (
                  <>
                    <Menu {...bindMenu(popupState)}>
                      <MenuItem onClick={popupState.close}>
                        <ListItemIcon>
                          {/* <BorderColorOutlinedIcon fontSize="small" /> */}
                          <img
                            src="./assets/images/bignoteBlack.svg"
                            alt=""
                            width="16px"
                            height="16px"
                          />
                        </ListItemIcon>
                        <ListItemText>View Document</ListItemText>
                      </MenuItem>
                      <MenuItem 
                      onClick={() => {
                        setOpen(true);
                        updateStatus("hold")
                        setTimeout(()=> refetchDetailData(),500)
                        popupState.close();
                      }}
                      >
                        <ListItemIcon>
                          {/* <BorderColorOutlinedIcon fontSize="small" /> */}
                          <img
                            src="./assets/images/pause-circle.svg"
                            alt=""
                            width="16px"
                            height="16px"
                          />
                        </ListItemIcon>
                        <ListItemText>Hold Account</ListItemText>
                      </MenuItem>
                      <MenuItem
                        // onClick={() => {
                        //   popupState.close();
                        //   setOpen(true);
                          
                        // }}
                        onClick={() => {
                          setOpenTerminateDialog(true)
                          // updateStatus("terminated")
                          // setTimeout(()=> refetchDetailData(),500)
                          popupState.close();
                        }}
                      >
                        <ListItemIcon>
                          {/* <BorderColorOutlinedIcon fontSize="small" /> */}
                          <img
                            src="./assets/images/minus-circle.svg"
                            alt=""
                            width="16px"
                            height="16px"
                          />
                        </ListItemIcon>
                        <ListItemText sx={{ color: "#E75C62" }}>
                        Terminate
                        </ListItemText>
                      </MenuItem>
                    </Menu>
                  </>
                )}
              </React.Fragment>
            )}
          </PopupState>
        </Box>

        {open ? <CancelSubscriptionComp open={open} setOpen={setOpen} /> : ""}
        {openTerminateDialog ? 
        
        <CancelSubscriptionComp 
        open={openTerminateDialog} 
        setOpen={setOpenTerminateDialog} 
        title="Terminate"
        subTitle="Do you want to terminate this merchant, are you sure?" 
        handleOnClick={()=>{
          updateStatus("terminated")
          setTimeout(()=> refetchDetailData(),500)
          setOpenTerminateDialog(false)
        }}
        /> : ""}

        {
          openRefund ? (
                <IssueRefund open={openRefund} setOpen={setOpenRefund} />
              ) 
              : 
              ""
        }

      {/* {
        openTerminateDialog ? 
          <>
            <CustomizedModal
            title="Terminate"
            aria-labelledby="customized-dialog-title"
            open={openTerminateDialog}
            handleClose={()=> setOpenTerminateDialog(false)}
            actionBtnsText={['Discard','Yes, sure']}
            actionBtn2OnClickHandler={
              ()=> {
                updateStatus("terminated")
                setTimeout(()=> refetchDetailData(),500)
                // deleteCusine({ id:seletedCusine?._id });
                // getAllCusinesData()
                // deletedItemFunc && deletedItemFunc()
              }
            }
            isHeaderShown={false}
            >
                <Box sx={{my:"20px",minWidth:{xs:"310px",sm:"400px"}}}>
                    <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center"}}>
                        <Box sx={{borderRadius:"8px",p:"16px 16px 4px 16px",textAlign:"center"}}>
                            <IconButton sx={{backgroundColor:"#FEF9E8"}}>
                                <WarningIcon sx={{ color: "yellow",fontSize:{xs:"32px",md:"48px"} }} />
                            </IconButton>
                            <Typography sx={{fontSize: { xs: "13px", md: "16px" },fontWeight: "600",color: "#1A1824",}}>Terminate</Typography>  
                            <Typography sx={{fontSize: { xs: "13px", md: "14px" },fontWeight: "400",color: "#545359",}}>Do you want to terminate this merchant,<br /> are you sure?</Typography>  
                        </Box>
                    </Box>
                </Box>
            </CustomizedModal>
          </>
        : 
        ""
      } */}
      </Box>
    </div>
  );
};
