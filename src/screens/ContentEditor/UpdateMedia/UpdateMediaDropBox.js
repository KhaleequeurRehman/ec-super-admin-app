import * as React from "react";
import Button from "@mui/material/Button";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import { styled } from "@mui/material/styles";

import { styled, IconButton, createStyles } from "@mui/material";
import { useState, useRef } from "react";

export default function UpdateMedia({formik}) {
// export default function UpdateMedia({ open, setOpen }) {
  // const [open, setOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);

 

  const DropHereBox = styled(Box)(({ theme }) => ({
    borderRadius: "6px",
    width: "100%",
    height: "254px",
    border: "1.5px dashed #80B3B0",
    borderRadius: "6px",
    paddingTop: "20px",
    paddingBottom: "20px",
    [theme.breakpoints.up("sm")]: {
      //   width: 'auto',
    },
  }));

 
  const BoxTypo1 = styled(Typography)(({ theme }) => ({
    fontSize: "14px",
    fontWeight: "600",
    lineHeight: "20px",
    textTransform: "capitalize",
    color: "#1A1824",

    // [theme.breakpoints.up("md")]: {
    //     display: "inline-flex",
    //   },
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
      textAlign: "center",
    },
  }));

  const BoxTypo2 = styled(Typography)(({ theme }) => ({
    fontSize: "18px",
    fontWeight: "400",
    lineHeight: "20px",
    textTransform: "capitalize",
    color: "#42C677",
    // [theme.breakpoints.up("md")]: {
    //     display: "inline-flex",
    //   },
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
      textAlign: "center",
    },
  }));

  const Typo2 = styled(Typography)({
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "20px",
    textTransform: "capitalize",
    color: "#545359",
  });

 

  const Ellipse = styled(Typography)(({ theme }) => ({
    width: "12px",
    height: "12px",
    border: "2px solid #80B3B0",
    backgroundColor: "#2B817B",
    borderRadius: "50%",
  }));

 

  // const [image, setImage] = useState("");
  const inputFile = useRef(null);

  // const handleFileUpload = (e) => {
  //   const { files } = e.target;
  //   if (files && files.length) {
  //     const filename = files[0].name;

  //     var parts = filename.split(".");
  //     const fileType = parts[parts.length - 1];
  //     console.log("fileType", fileType); //ex: zip, rar, jpg, svg etc.

  //     setImage(files[0]);
  //   }
  // };

  const onButtonClick = () => {
    inputFile.current.click();
  };

  return (
    <div>
      <Box >
        <Box
          sx={{
            display: "flex",
            flexDirection: { lg: "row", md: "row", sm: "row", xs: "row" },
          }}
        >
          <Box width="100%">
            <DropHereBox
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Box
                  sx={{
                    width: {
                      lg: "107px",
                      md: "107px",
                      sm: "107px",
                      xs: "50px",
                    },
                    height: { lg: "65px", md: "65px", sm: "65px", xs: "30px" },
                  }}
                >
                  <img
                    src="./assets/images/Frame 1097.png"
                    alt=""
                    width="100%"
                    height="auto"
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: {
                    lg: "row",
                    md: "row",
                    sm: "row",
                    xs: "column",
                  },
                  justifyContent: "center",
                  mt: "11px",
                }}
              >
                <BoxTypo1>Drop your image here or</BoxTypo1>
                <input
                  style={{ display: "none" }}
                  // accept=".zip,.rar"
                  ref={inputFile}
                  // onChange={handleFileUpload}
                  onChange={(e)=> formik.setFieldValue('image',e.target.files[0])}
                  type="file"
                />
                <Button
                  variant="text"
                  onClick={onButtonClick}
                  sx={{ padding: "0px", minWidth: "0px", minHeight: "0px" }}
                >
                  <BoxTypo2 pl="4px">Browse here</BoxTypo2>
                </Button>
              </Box>
            </DropHereBox>

            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mt: "24px",
                  mb: "8px",
                }}
              >
                <Ellipse />
                <Typo2 ml="13px">Maximum upload file size : 8Mb</Typo2>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Ellipse />
                <Typo2 ml="13px">Image format is jpeg. png.</Typo2>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
