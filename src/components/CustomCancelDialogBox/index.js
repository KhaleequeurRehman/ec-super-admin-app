import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import { styled } from "@mui/material/styles";
import { styled } from "@mui/material";
function SimpleDialog(props) {
  const { onClose, selectedValue, open,  title, subTitle, BtnmarginTop } = props;

  const handleClose = () => {
    onClose(open);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

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
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
    ":hover" : {
      border: "1px solid #DD7474",
    }
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

    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
    ":hover" : {
      backgroundColor: "#2B817B",
    }
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
          },
        },
      }}
    >
      <Box sx={{ paddingTop: "32px", paddingBottom: "32px" }}>
        <DialogTitle>
          {" "}
          <Box sx={{ display: "flex", justifyContent: "center" }} onClose={handleClose}>
            <Box sx={{ width: "64px", height: "64px" }}>
              <img
                src="./assets/images/cancelicon.svg"
                alt=""
                width="100%"
                height="auto"
              />
            </Box>
          </Box>
        </DialogTitle>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            {title ? <Typo1>{title}</Typo1> : <Typo1>Cancel Subscription</Typo1>}
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", mt: "16px" }}>
            {subTitle ? (
              <Typo2 sx={{ textAlign: "center", width: "360px" }}>{subTitle}</Typo2>
            ) : (
              <Typo2 sx={{ textAlign: "center", width: "360px" }}>
                Subscriptions that have been canceled cannot be returned, are
                you sure about this?
              </Typo2>
            )}
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", mt: BtnmarginTop ? BtnmarginTop : "16px" }}>
            <Box>
              <Button1 variant="outlined" onClick={handleClose}>
                Discard
              </Button1>
            </Box>
            <Box ml="24px">
              <Button2 variant="contained">Yes, sure</Button2>
            </Box>
          </Box>
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

export default function CustomCancelDialogBox({ open, setOpen, title, subTitle, BtnmarginTop }) {
  // const [open, setOpen] = React.useState(false);

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div>
      <SimpleDialog open={open} onClose={handleClose}  title={title} subTitle={subTitle} BtnmarginTop={BtnmarginTop} />
    </div>
  );
}
