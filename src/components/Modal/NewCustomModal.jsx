import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
// import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled, alpha } from "@mui/material/styles";
import { useState } from "react";
import ImageSection from "../../components/Menu/ImageSection";
import MenuButton1 from "./AddCuisineMenuButtons/MenuButton1";
import MenuButton2 from "./AddCuisineMenuButtons/MenuButton2";
import CuisineCategoryCard from "./CuisineMenu/CuisineCategoryCard";
import { Data } from "./CuisineMenu/config";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    width: "508px",
    height: "436px",
  },
  "& .MuiDialogActions-root": {
    // padding: theme.spacing(1),
    color: "#2B817B",
    borderColor: "#2B817B",
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box>
          <DialogTitle sx={{ m: 0, p: 0 }}>
            {onClose ? (
              <IconButton
                aria-label="close"
                onClick={onClose}
                sx={{
                  // position: 'absolute',
                  position: "left",
                  right: 8,
                  top: 8,
                  color: "#E75C62",
                }}
              >
                <CloseIcon />
              </IconButton>
            ) : null}
          </DialogTitle>
        </Box>
        <Box>
          <DialogTitle sx={{ m: 0, p: 0, pt: 0 }} {...props}>
            {children}
          </DialogTitle>
        </Box>
      </Box>
    </>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function NewCustomModal({ setIsShownButtonBoxFunc }) {
  const TypoTitle = styled("div")(({ theme }) => ({
    // padding: theme.spacing(0, 14),
    fontFamily: "Outfit",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "20px",
    lineHeight: "32px",
    color: "#1A1824",
    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
    },
  }));

  const Typo1 = styled("div")(({ theme }) => ({
    // padding: theme.spacing(0, 17),
    fontFamily: "Outfit",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "20px",

    // display: "flex",
    alignItems: "center",
    // textAlign: "center",

    color: "#1A1824",
    paddingBottom: "8px",
  }));

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [val, setVal] = React.useState("");

  const handleChange = (event) => {
    setVal(event.target.value);
  };

  const [open, setOpen] = useState(true);
  const [checkbox, setCheckbox] = useState(false);
  const [isShownCuisine, setIsShownCuisine] = useState(false);
  const [menuVal, setMenuVal] = useState("Arabian Cuisine");
  const [showAllCuisine, setShowAllCuisine] = useState(false);
  const [disable, setDisable] = useState(false);
  
  console.log("disable" , disable);

  const handleClickCheckbox = () => {
    // setOpen(!open);
    setCheckbox(!checkbox);
  };

  const ItemStyle = {
    "& .Mui-Selected": {
      color: "green",
    },
  };

  const handleClickBtn = (event) => {
    setIsShownCuisine((current) => !current);
    handleClose();
    setIsShownButtonBoxFunc(true);
  };

  const handleCloseBtn = (event) => {
    handleClose();
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openBox = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseBox = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div>
        <Dialog
          aria-labelledby="customized-dialog-title"
          open={open}
          sx={{
            color: "#E75C62",
            "& .MuiDialog-container": {
              "& .MuiPaper-root": {
                width: "100%",
                maxWidth: {
                  xl: "600px",
                  lg: "500px",
                  md: "500px",
                  sm: "500px",
                  xs: "500px",
                },
                height: {
                  xl: "400px",
                  lg: "auto",
                  md: "auto",
                  sm: "auto",
                  xs: "auto",
                },
              },
            },
          }}
        >
          <DialogTitle
            id="customized-dialog-title"
            // onClose={handleClose}
            sx={{ display: "flex" }}
          >
            <Box>
              <IconButton
                aria-label="close"
                onClick={handleCloseBtn}
                sx={{
                  position: "left",
                  right: 8,
                  top: 0,
                  color: "#E75C62",
                }}
              >
                <CloseIcon />
              </IconButton>
            </Box>
            <Box
              sx={{
                pl: {
                  xl: "180px",
                  lg: "120px",
                  md: "120px",
                  sm: "120px",
                  xs: "50px",
                },
              }}
            >
              <TypoTitle>Add Cuisine</TypoTitle>
            </Box>
          </DialogTitle>

          <DialogContent>
            <Box>
              <Box>
                <Typo1
                  sx={{
                    fontSize: {
                      xl: "18px",
                      lg: "14px",
                      md: "14px",
                      sm: "14px",
                      xs: "14px",
                    },
                    fontWeight: "500",
                  }}
                >
                  Cuisine
                </Typo1>
              </Box>

              <MenuButton1 setDisableFunc={setDisable}/>
            
            </Box>

            <Box mt="16px">
              <Box>
                <Typo1
                  sx={{
                    fontSize: {
                      xl: "18px",
                      lg: "14px",
                      md: "14px",
                      sm: "14px",
                      xs: "14px",
                    },
                    fontWeight: "500",
                  }}
                >
                  Sub-cuisine <span>(Optional)</span>
                </Typo1>
              </Box>

              <MenuButton2 />
            </Box>

            <DialogActions sx={{ justifyContent: "center", mt: "32px" }}>
              <Button
                variant="outlined"
                onClick={handleClose}
                sx={{
                  borderColor: "#2B817B",
                  color: "#2B817B",
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
                    borderColor: "#2B817B",
                  },
                  textTransform: "capitalize"
                }}
              >
                Close
              </Button>

              <Button
              disabled={disable? false : true}
                variant="contained"
                onClick={handleClickBtn}
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
                    backgroundColor: "#2B817B" ,
                  },
                  "&.Mui-disabled":  {
                    color: "#fff",
                    background:"#D5E6E5",
                  },
                  textTransform: "capitalize"
                }}
              >
                Save
              </Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      </div>
      <Box
        sx={
          {
            // pt: "40px"
          }
        }
      >
        {/* {isShownCuisine ? <ArabianCuisineMenu /> : <ImageSection />} */}
        {isShownCuisine ? (
          <CuisineCategoryCard title={"Arabian Cuisine"} Data={Data} subTitle={"6 Sub-cuisine"}/>
        ) : (
          <ImageSection />
        )}
      </Box>
    </>
  );
}
