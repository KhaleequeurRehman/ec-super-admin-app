import * as React from "react";
import PropTypes from "prop-types";
import { styled, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import CustomIconButton from "../Button/CustomIconButton";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
// import { H1Typo } from "../Typography";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  ".MuiPaper-root": {
    width: "100%",
  },
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
    width: "100%",
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedModal({
  isOpened,
  hasTopHeader,
  handleOnClose,
  title,
  children,
}) {
  const [open, setOpen] = React.useState(isOpened);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        style={{ width: "100%" }}
      >
        <DialogContent dividers>
          {hasTopHeader && (
            <Box
              display={"flex"}
              alignItems="center"
              style={{ marginBottom: "20px" }}
            >
              <CustomIconButton
                onClick={handleOnClose}
                icon={<ClearRoundedIcon style={{ color: "#E75C62" }} />}
              />
              <Box style={{ width: "100%", textAlign: "center" }}>
                {/* <H1Typo>{title}</H1Typo> */}
                <Typography>{title}</Typography>
              </Box>
            </Box>
          )}
          <Box gutterBottom>{children}</Box>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
