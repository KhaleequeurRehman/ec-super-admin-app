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
function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(open);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  const [word, setWord] = React.useState(0);
  const [disabled, setDisabled] = React.useState(false);

  const wordCoutn = (e) => {
    setWord(e.length);
    if (e.length > 10) {
      setDisabled("");
    } else {
      setDisabled("disabled");
    }
  };


  
  const Title = styled(Typography)({
    fontSize: "18px",
    fontWeight: "600",
    lineHeight: "26.1px",
    textTransform: "capitalize",
    letter: "1.5%",
    color: "#1A1824",
  });

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
            height: "476px",
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
              <Title>Issue Refund</Title>
            </Box>
          </Box>
        <Box>
          <Para sx={{ fontSize: "16px", fontWeight: "500", mb: "8px" }}>
            Refund Amount
          </Para>
          <OutlinedInput
            placeholder="$ 82.50"
            sx={{ backgroundColor: "#F6F6F6", width: "100%", height: "40px" }}
          />
        </Box>

        <Box mt="16px">
          <Para sx={{ fontSize: "16px", fontWeight: "500", mb: "8px" }}>
            Reason
          </Para>
          <CustomSelectInputField
            placeholder={"Select reason"}
            disabled={false}
            icon={"./assets/images/arrow-down.svg"}
          />
        </Box>

        <Box
          mt="16px"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Para
            sx={{
              fontSize: "16px",
              fontWeight: "500",
              marginTop: "9px",
              mb: "8px",
            }}
          >
            Description
          </Para>
          <Para sx={{ marginTop: "9px", fontSize: "14px", fontWeight: "500" }}>
            {word}/80
          </Para>
        </Box>

        <OutlinedInput
          fullWidth
          inputProps={{ maxLength: 80 }}
          maxLength="80"
          onChange={(e) => wordCoutn(e.target.value)}
          components="input"
          multiline
          rows={3}
          placeholder="Type description here"
          sx={{
            backgroundColor: "#F6F6F6",
            width: "100%",
            height: "100px",
            alignItems: "flex-start",
          }}
        />
      </Box>


      <Box sx={{ display: "flex", justifyContent: "center", mt: "16px" }}>
            <Box>
              <Button1 variant="outlined" onClick={handleClose}>Cancel</Button1>
            </Box>
            <Box ml="24px">
              <Button2 variant="contained">Refund</Button2>
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

export default function IssueRefund({ open, setOpen }) {
  // const [open, setOpen] = React.useState(false);

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div>
      <SimpleDialog open={open} onClose={handleClose} />
    </div>
  );
}
