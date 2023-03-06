import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const CustomModalHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const CustomModal = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const CustomizedModal = ({
  title,
  open,
  handleClose,
  children,
  isHeaderShown=true,
  isActionShown=true,
  actionBtnsText=['Close','Submit'],
  actionBtn1OnClickHandler,
  actionBtn2OnClickHandler,
  disableActionBtn2WhileLoading=false,
  titleSx,
  ...restProps
}) => {
  return (
    <>
      <CustomModal
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        {...restProps}
      >
        {
          isHeaderShown? 
              <>
                <CustomModalHeader>
                  <IconButton onClick={handleClose}>
                    <CloseIcon sx={{ color: "#E75C62" }} />
                  </IconButton>
                  <Typography
                    sx={{ fontSize: "20px", fontWeight: "600", mx: "auto", ...titleSx }}
                  >
                    {title && title}
                  </Typography>
                </CustomModalHeader>
              </> : ""
        }
        
        {/* <CustomModalHeader>
          <IconButton onClick={handleClose}>
            <CloseIcon sx={{ color: "#E75C62" }} />
          </IconButton>
          <Typography
            sx={{ fontSize: "20px", fontWeight: "600", mx: "auto", ...titleSx }}
          >
            {title && title}
          </Typography>
        </CustomModalHeader> */}
        <DialogContent>{children && children}</DialogContent>
        {isActionShown && (
          <>
            <DialogActions sx={{ justifyContent: "center", mt: "10px" }}>
              <Button
                variant="outlined"
                // onClick={handleClose}
                // onClick={actionBtn1OnClickHandler? actionBtn1OnClickHandler : handleClose}
                onClick={
                  ()=> { 
                     handleClose();
                     actionBtn1OnClickHandler && actionBtn1OnClickHandler();
                  }
                }
                sx={{
                  borderColor: "#DD7474",
                  color: "#DD7474",
                  width: {
                    xl: "120px",
                    lg: "120px",
                    md: "120px",
                    sm: "80px",
                    xs: "70px",
                  },
                  height: {
                    xl: "auto",
                    lg: "40px",
                    md: "auto",
                    sm: "auto",
                    xs: "auto",
                  },
                  "&:hover": {
                    borderColor: "#DD7474",
                  },
                  textTransform: "capitalize",
                }}
              >
                {/* Close */}
                {actionBtnsText[0] && actionBtnsText[0]}
              </Button>

              <Button
                // disabled={false}
                disabled={disableActionBtn2WhileLoading}
                variant="contained"
                // onClick={handleClose}
                // onClick={actionBtn2OnClickHandler? actionBtn2OnClickHandler : handleClose}
                onClick={
                  ()=> { 
                     handleClose();
                     actionBtn2OnClickHandler && actionBtn2OnClickHandler();
                  }
                }
                sx={{
                  backgroundColor: "#2B817B",
                  width: {
                    xl: "120px",
                    lg: "120px",
                    md: "120px",
                    sm: "80px",
                    xs: "70px",
                  },
                  height: {
                    xl: "auto",
                    lg: "40px",
                    md: "auto",
                    sm: "auto",
                    xs: "auto",
                  },
                  "&:hover": {
                    backgroundColor: "#2B817B",
                  },
                  "&.Mui-disabled": {
                    color: "#fff",
                    background: "#D5E6E5",
                  },
                  textTransform: "capitalize",
                }}
              >
                {/* Submit */}
                {actionBtnsText[1] && actionBtnsText[1]}
              </Button>
            </DialogActions>
          </>
        )}
      </CustomModal>
    </>
  );
};

export default CustomizedModal;
