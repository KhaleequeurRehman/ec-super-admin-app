import React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ButtonGroup from "@mui/material/ButtonGroup";


const BtnTextTypo1 = {
  fontSize: "12px",
  fontWeight: "400",
  lineHeight: "140%",
  color: "#2B817B",
  textTransform: "capitalize",
  textDecoration: "underline",
};

const SearchInputField = styled(TextField)({
  background: "#F6F6F6",
  "& fieldset.MuiOutlinedInput-notchedOutline.css-1d3z3hw-MuiOutlinedInput-notchedOutline":
    {
      borderColor: "#e1e1e6",
      borderRadius: "6px",
    },
});

export const ContentEditorHeaderSearch = ({
  title,
  hasNotificationButton,
  hasFilterBtn,
  hasTextButtonTitle1,
  hasTextButtonTitle2,
  handleClickFilter,
  openFilter,
  hasTextButtonTitle3,
  TypoMarginBottom,
  TypoMarginTop,
  allUserDataGrid,
  customerDataGrid,
  searchVal,
  setSearchVal,
  searchFunc,
  setOpenGridCards
}) => {
  // const [searchVal, setSearchVal] = useState("");
  const [openSendNotification, setOpenSendNotification] = useState(false);

  const Button1 = {
    //   width: "103px",
    width: "72px",
    height: "32px",
    padding: "10px, 16px, 10px, 16px",
    border: "1px solid #80B3B0",
    borderRadius: "4px",
    backgroundColor: openFilter && "#F1FFF7",
    borderColor: openFilter && "1px solid #81D9A5",
    ":hover": {
      border: "1px solid #80B3B0",
    },
  };


  return (
    <div>
      <Box>
        <Box>
          <Box width="100%">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              flexWrap="wrap"
            >
              {/* <Box sx={{ my: { xs: "10px", md: "0px",} }}> */}

              <Box>
                <SearchInputField
                  id="outlined-start-adornment"
                  sx={{
                    m: 1,
                    width: "32ch",
                    margin: { xs: "8px 0px", md: "8px" },
                  }}
                  size="small"
                  placeholder="Search "
                  value={searchVal}
                  // onChange={(e) => setSearchVal(e.target.value)}
                  onChange={
                    (e) => {
                       setSearchVal(e.target.value);
                       searchFunc(e.target.value)
                    }
                  }
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton aria-label="toggle password visibility">
                          <SearchIcon sx={{ color: "#9EA3AE" }} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              <Box sx={{display: "flex"}}>
                <Button variant="text">
                  <Typography sx={BtnTextTypo1}>Last Month</Typography>
                  <Box sx={{ width: "16px", height: "16px" }}>
                    <img
                      src="./assets/images/GreenArrow-down.svg"
                      alt=""
                      width="100%"
                      height="auto"
                    />
                  </Box>
                </Button>

                <Box ml="26px">
                  <ButtonGroup
                    variant="contained"
                    aria-label="outlined primary button group"
                  >
                    <Button
                    onClick={
                      () => setOpenGridCards(false)
                    }
                    sx={{
                        background: "#2B817B",
                        width: "40px",
                        height: "40px",
                        ":hover": {
                            background: "#2B817B",
                        }
                    }}>
                        <img src="./assets/images/task.svg" alt="" width="24px" height="24px" />
                    </Button>
                    <Button 
                    onClick={
                      () => setOpenGridCards(true)
                    }
                    sx={{
                        background: "#F0FAF9",
                        width: "40px",
                        height: "40px",
                        ":hover": {
                            background: "#F0FAF9",
                        }
                    }}
                    >
                        <img src="./assets/images/grid-1.svg" alt="" width="24px" height="24px" />
                    </Button>
                  </ButtonGroup>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
