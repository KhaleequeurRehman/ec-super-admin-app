import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";

import { styled } from "@mui/material";
import { InboxCallDialogCard } from "./InboxCallDialogCard";
import { display } from "@mui/system";

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

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
    ":hover": {
      border: "1px solid #DD7474",
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

    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
    ":hover": {
      backgroundColor: "#2B817B",
    },
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
            maxWidth: "538px", // Set your width here
            paddingBottom: "32px",
            paddingTop: "16px",
            paddingLeft: "16px",
            paddingRight: "16px"

          },
        },
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <Box>
          <InboxCallDialogCard />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: "400",
                color: "#9EA3AE",
              }}
            >
              Audio Quality
            </Typography>
            <Box mt="4px" mb="14px" sx={{
              display: "flex",
              justifyContent: "center",
            }}>
            <Chip
              label="Good"
              sx={{
                
                padding: "2px, 8px, 2px, 8px",
                border: "1px solid #81D9A5",
                backgroundColor: "#F1FFF7",
                color: "#30A15F",
                fontSize: "12px",
                fontWeight: "400",
                height: "20px",
              }}
            />
            </Box>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", mb: "14px" }}>
            <Box
              sx={{
                width: "60px",
                height: "60px",
                padding: "6px",
                borderRadius: "50%",
                border: "1px solid rgba(128, 179, 176, 0.1)",
                background: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: "48px",
                  height: "48px",
                  padding: "6px",
                  borderRadius: "50%",
                  border: "1px solid rgba(128, 179, 176, 0.3)",
                  background: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    width: "36px",
                    height: "36px",
                    padding: "6px",
                    borderRadius: "50%",
                    border: "1px solid rgba(128, 179, 176, 0.6)",
                    background: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box width="24px" height="24px">
                    <img
                      src="./assets/images/arrow-right.svg"
                      alt=""
                      width="100%"
                      height="auto"
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center"
            }}
          >
            <Box mb="4px">
              <Typography
                sx={{
                  fontSize: "10px",
                  fontWeight: "500",
                  color: "#9EA3AE",
                }}
              >
                Record :
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: "400",
                  color: "#1A1824",
                }}
              >
                12 : 56{" "}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box>
          <InboxCallDialogCard />
        </Box>
      </Box>


      <Box sx={{display: "flex", justifyContent: "center"}}>
      <Box sx={{
        width: "56px",
        height: "56px",
        padding: "16px",
        borderRadius: "50%",
        border: "1px solid #E1E1E6",
        display: "flex", justifyContent: "center", alignItems:"center",
        cursor: "pointer"
      }}>
        <Box width="24px" height="24px"><img src="./assets/images/microphone-2.svg" alt="" width="100%" height="auto" /></Box>
      </Box>


      <Box sx={{
        ml: "24px",
        width: "56px",
        height: "56px",
        padding: "16px",
        borderRadius: "50%",
        border: "1px solid #E1E1E6",
        display: "flex", justifyContent: "center", alignItems:"center",
        cursor: "pointer"
      }}>
        <Box width="24px" height="24px"><img src="./assets/images/volume-high.svg" alt="" width="100%" height="auto" /></Box>
      </Box>


      <Box sx={{
        ml: "24px",
        width: "56px",
        height: "56px",
        padding: "16px",
        borderRadius: "50%",
        border: "1px solid #E1E1E6",
        display: "flex", justifyContent: "center", alignItems:"center",
        cursor: "pointer"
      }}>
        <Box width="24px" height="24px"><img src="./assets/images/user.svg" alt="" width="100%" height="auto" /></Box>
      </Box>


      <Box onClick={handleClose} sx={{
        ml: "24px",
        width: "56px",
        height: "56px",
        padding: "16px",
        borderRadius: "50%",
        border: "1px solid #E1E1E6",
        display: "flex", justifyContent: "center", alignItems:"center",
        cursor: "pointer"
      }}>
        <Box width="24px" height="24px"><img src="./assets/images/close.svg" alt="" width="100%" height="auto" /></Box>
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

export default function InboxCallDialogBox({
  open,
  setOpen,
  title,
  subTitle,
  BtnmarginTop,
}) {
  // const [open, setOpen] = React.useState(false);

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div>
      <SimpleDialog
        open={open}
        onClose={handleClose}
        title={title}
        subTitle={subTitle}
        BtnmarginTop={BtnmarginTop}
      />
    </div>
  );
}
