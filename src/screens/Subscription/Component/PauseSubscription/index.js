import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import { styled } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import ClearIcon from "@mui/icons-material/Clear";

import { styled, IconButton } from "@mui/material";
import { CustomSelectInputField } from "../CustomSelectInputField";
import { usePauseSubscriptionMutation } from "../../../../api/subscription";
import { useState } from "react";
function SimpleDialog(props) {
  const { onClose, selectedValue, open,selectedsubscription } = props;
  const [pauseSubscription, resppdata] = usePauseSubscriptionMutation()

  const [pauseFormState, setPauseFormState] = useState({to:"",from:"",reason:""});

  const handleClose = () => {
    onClose(open);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  const [word, setWord] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const wordCoutn = (e) => {
    setWord(e.length);
    if (e.length > 10) {
      setDisabled("");
    } else {
      setDisabled("disabled");
    }
  };


  

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "18px",
    fontWeight: "600",
    lineHeight: "26.1px",
    textTransform: "capitalize",
    letter: "1.5%",
    color: "#1A1824",
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      fontSize: "14px"
    },
  }));

  const Typo1 = styled(Typography)({
    fontSize: "18px",
    fontWeight: "500",
    lineHeight: "26.1px",
    textTransform: "capitalize",
    color: "#1A1824",
  });

  const Typo2 = styled(Typography)({
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "20px",
    textTransform: "capitalize",
    color: "#545359",
  });

  const Button1 = styled(Button)(({ theme }) => ({
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "24px",
    textTransform: "capitalize",
    color: "#E75C62",
    border: "1px solid #DD7474",
    borderRadius: "4px",
    paddingLeft: "24px",
    paddingRight: "24px",
    paddingTop: "8px",
    paddingBottom: "8px",
    width: "147px",

    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      width: "70px",

    },
  }));

  const Button2 = styled(Button)(({ theme }) => ({
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "24px",
    textTransform: "capitalize",
    color: "#FFFFFF",
    backgroundColor: "#2B817B",
    borderRadius: "4px",
    paddingLeft: "24px",
    paddingRight: "24px",
    paddingTop: "8px",
    paddingBottom: "8px",
    width: "147px",

    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      width: "70px",

    },
  }));

  const Para = styled(Typography)(({ theme }) => ({
    fontFamily: "Outfit",
    fontWeight: "500",
    fontSize: "12px",
    color: "#1A1824;",
    lineHeight: "16px"
  }));

  return (
    <Dialog
      // onClose={handleClose}
      onClose={handleClose}
      open={open}
      sx={{
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "100%",
            maxWidth: "469px", // Set your width here
            height: "416px",
            paddingLeft: "33.6px",
            paddingRight: "33.6px",
            paddingBottom: "32px",
          },
        },
      }}
    >
      <Box pt="19px">
        <Box display={"flex"} style={{ marginBottom: "16px" }}>
            <Box width="10%">
              <IconButton onClick={handleClose}>
                <ClearIcon style={{ color: "#E75C62" }} />
              </IconButton>
            </Box>

            <Box style={{ width: "100%", textAlign: "center" }}>
              <Title>Pause Subscription</Title>
            </Box>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ width: "64px", height: "64px" }}>
              <img
                src="./assets/images/pauseIcon.svg"
                alt=""
                width="100%"
                height="auto"
              />
            </Box>
          </Box>

         <Box sx={{display: "flex", mt: "20px"}}>
         <Box>
          <Para sx={{ fontSize: "16px", fontWeight: "500", pb: "8px" }}>
          ID Account
          </Para>
          <OutlinedInput
            placeholder="EC - 12345"
            value={selectedsubscription?.subId && selectedsubscription?.subId }
            sx={{ backgroundColor: "#F6F6F6", width: "95%", height: "40px" }}
          />
          </Box>

          <Box>
          <Para sx={{ fontSize: "16px", fontWeight: "500",  pb: "8px"  }}>
          Name
          </Para>
          <OutlinedInput 
            placeholder="Ilham Syaif"
            value={selectedsubscription?.subId && selectedsubscription?.subId}
            // value={selectedsubscription && selectedsubscription?.User.email !==undefined?selectedsubscription?.User.email : ""}
            sx={{ backgroundColor: "#F6F6F6", width: "95%", height: "40px" }}
          />
          </Box>

          
         </Box>


         <Box mt="16px" mr="10px"> 
         <Para sx={{ fontSize: "16px", fontWeight: "500", }}>
         Pause date
          </Para>
          <CustomSelectInputField
            placeholder={"Now"}
            disabled={false}
            icon={"./assets/images/calendar.svg"}
            
          />
         </Box>
      </Box>

      <Box>
        <Para sx={{ fontSize: "16px", fontWeight: "500",  pb: "8px"  }}>
        Reason
        </Para>
        <OutlinedInput 
          placeholder="Ilham Syaif"
          value={selectedsubscription?.subId && selectedsubscription?.subId}
          // value={selectedsubscription && selectedsubscription?.User.email !==undefined?selectedsubscription?.User.email : ""}
          sx={{ backgroundColor: "#F6F6F6", width: "95%", height: "40px" }}
        />
      </Box>



      <Box sx={{ display: "flex", justifyContent: "center", mt: "32px" }}>
            <Box>
              <Button1 variant="outlined" onClick={handleClose}>Cancel</Button1>
            </Box>
            <Box ml="24px">
              <Button2 variant="contained" onClick={
                ()=> {
                  handleClose()
                  pauseSubscription({ id:selectedsubscription._id })
                }
              }>Pause</Button2>
            </Box>
          </Box>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function PauseSubscription({ open, setOpen,selectedsubscription }) {
  // const [open, setOpen] = React.useState(false);

  const handleClose = (value) => {
    setOpen(false);
  };
console.log("selectedsubscription sdfsd ", selectedsubscription)
  return (
    <div>
      <SimpleDialog open={open} onClose={handleClose} selectedsubscription={selectedsubscription} />
    </div>
  );
}
