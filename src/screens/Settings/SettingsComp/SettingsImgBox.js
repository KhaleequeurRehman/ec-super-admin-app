import React from "react";
import Box from "@mui/material/Box";
import { styled, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState, useRef } from "react";

const ImgBox = styled(Box)(({ theme }) => ({
  width: "150px",
  height: "150px",
  border: "1.5px dashed #80B3B0",
  borderRadius: "6px",
}));

const Para = styled(Typography)(({ theme }) => ({
  fontFamily: "Outfit",
  fontWeight: "500",
  fontSize: "12px",
  color: "#1A1824;",
  lineHeight: "16px",
}));

const Typo3 = styled(Typography)(({ theme }) => ({
  fontFamily: "Outfit",
  fontWeight: "400",
  fontSize: "14px",
  color: "#9EA3AE",
  lineHeight: "16px",
}));

const TextBtn = styled(Button)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "22.4px",
  textTransform: "capitalize",
  color: "#2B817B",
  textDecoration: "underline",
}));

export const SettingImgBox = ({loginUserData}) => {
  const [image, setImage] = useState("");
  const inputFile = useRef(null);

  console.log("image is", image);
  console.log("inputfile", inputFile);

  const handleFileUpload = (e) => {
    const { files } = e.target;
    if (files && files.length) {
      const filename = files[0].name;

      var parts = filename.split(".");
      const fileType = parts[parts.length - 1];
      console.log("fileType", fileType); //ex: zip, rar, jpg, svg etc.

      setImage(files[0]);
    }
  };

  const onButtonClick = () => {
    inputFile.current.click();
  };

  return (
    <div>
      <Box
        width="100%"
        sx={{
          display: "flex",
          flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
        }}
      >
        <Box mt="16px" width="100%">
          <Box sx={{ display: "flex", mt: "8px" }}>
            <Box>
              <ImgBox
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ width: "58px", height: "37px" }}>
                  <img
                    src="./assets/images/Frame 1097.svg"
                    alt=""
                    width="100%"
                    height="auto"
                  />
                </Box>
              </ImgBox>
            </Box>

            <Box sx={{ ml: "32px", mt: "24px", }}>
              <Typo3 width="251px">
                *The uploaded image is a maximum of 10MB and has a ratio of 1:1,
                3:4, 5:4, 3:2, etc.
              </Typo3>

              <Box mt="20px">
                <TextBtn
                  onClick={() => {
                    setImage("");
                  }}
                  variant="text"
                  sx={{ padding: "0px", minWidth: "0px", minHeight: "0px" }}
                >
                  Remove Image
                </TextBtn>
                <TextBtn
                  variant="text"
                  sx={{
                    padding: "0px",
                    minWidth: "0px",
                    minHeight: "0px",
                    ml: "24px",
                  }}
                >
                  View Image
                </TextBtn>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box width="100%">
        <Box
          width="100%"
          sx={{
            mt: { lg: "10px", md: "10px", sm: "20px", xs: "20px" },
            ml: { lg: "20px", md: "20px", sm: "0px", xs: "0px" },
          }}
        >
          <Box
          // width="100%"
          // sx={{
          //   mt: { lg: "0px", md: "0px", sm: "20px", xs: "20px" },
          //   ml: { lg: "20px", md: "20px", sm: "0px", xs: "0px" },
          // }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "500",
                mb: "8px",
                color: "#9EA3AE",
              }}
            >
              ID User :
            </Typography>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "500",
                mb: "8px",
                color: "#545359",
              }}
            >
              {/* EC - 12345 */}
              {loginUserData?._id !== undefined ? `EC - ${loginUserData?._id}` : ""}
            </Typography>
          </Box>
          <Box
            mt="32px"
            // width="100%"
            // sx={{
            //   mt: { lg: "0px", md: "0px", sm: "20px", xs: "20px" },
            //   ml: { lg: "20px", md: "20px", sm: "0px", xs: "0px" },
            // }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "500",
                mb: "8px",
                color: "#9EA3AE",
              }}
            >
              Role :
            </Typography>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "500",
                mb: "8px",
                color: "#545359",
              }}
            >
              {/* Administrator */}
              {loginUserData?.type !== undefined ? `${loginUserData?.type === "admin"? "Administrator":loginUserData?.type}` : "no data"}
            </Typography>
          </Box>
        </Box>
        </Box>
      </Box>
    </div>
  );
};
