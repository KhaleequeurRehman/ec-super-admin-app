import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled, Button, IconButton } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import { CustomSelectInputField } from "../../../Subscription/Component/CustomSelectInputField";
import InputAdornment from "@mui/material/InputAdornment";
import WarningIcon from '@mui/icons-material/Warning';
import { useState, useRef } from "react";
import CancelSubscriptionComp from "../../../Subscription/Component/CancelSubscription/CancelSubscriptionComp";
import CustomizedModal from "../../../../components/CustomizedModal";

const CardBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "auto",
  padding: "32px",
  border: "1px solid #E1E1E6",
  borderRadius: "8px",
}));

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

const ImgBox = styled(Box)(({ theme }) => ({
  width: "150px",
  height: "150px",
  border: "1.5px dashed #80B3B0",
  borderRadius: "6px",
}));

const Button2 = {
  width: "103px",
  height: "40px",
  padding: "10px, 16px, 10px, 16px",
  backgroundColor: "#2B817B",
  borderRadius: "4px",
  width: { lg: "166px", md: "166px", sm: "166px", xs: "30px" },
  ":hover": {
    backgroundColor: "#2B817B",
  },
};
const BtnTypo2 = {
  fontSize: "14px",
  fontWeight: "600",
  lineHeight: "20px",
  color: "#FFFFFF",
  textTransform: "capitalize",
};

export const SendNotificationsFields = ({formik}) => {
  const [disabled, setDisabled] = React.useState(false);
  
  const [openCancelDialog, setOpenCancelDialog] = useState(false);

  const [image, setImage] = useState("");
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
      <CardBox>
        <Box>
          <Box>
            <Para
              sx={{
                fontSize: "14px",
                fontWeight: "500",
                mb: "8px",
                color: "#545359",
              }}
            >
              Notification Title
            </Para>
            <OutlinedInput
              fullWidth
              placeholder="Notification Title"
              name='title'
              value={formik.values.title} 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur} 
              errors={formik.errors.title} 
              touched={formik.touched.title}
              sx={{
                backgroundColor: "#F6F6F6",
                width: "100%",
                height: "40px",
                fontSize: "14px",
              }}
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
                fontSize: "14px",
                fontWeight: "500",
                marginTop: "9px",
                mb: "8px",
                color: "#545359",
              }}
            >
              Description
            </Para>
          </Box>

          <OutlinedInput
            fullWidth
            components="input"
            multiline
            rows={2}
            placeholder="Type description here"
            name='description'
            value={formik.values.description} 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} 
            errors={formik.errors.description} 
            touched={formik.touched.description}
            sx={{
              backgroundColor: "#F6F6F6",
              width: "100%",
              height: "80px",
              alignItems: "flex-start",
              fontSize: "14px",
            }}
          />

          <Box mt="16px">
            <Para display="inline" sx={{ fontSize: "14px", fontWeight: "500" }}>
              Direct Link
            </Para>

            <OutlinedInput
              fullWidth
              placeholder={"Direct Link"}
              name='link'
              value={formik.values.link} 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur} 
              errors={formik.errors.link} 
              touched={formik.touched.link}
              sx={{
                backgroundColor: "#F6F6F6",
                width: "100%",
                height: "40px",
                mt: "8px",
                fontSize: "14px",
              }}
              endAdornment={
                <InputAdornment position="start">
                  <Box
                    sx={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      backgroundColor: "#FFFFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src="./assets/images/link.svg"
                      alt=""
                      height="16px"
                      width="16px"
                    />
                  </Box>
                </InputAdornment>
              }
            />
          </Box>

          <Box mt="16px">
            <Para
              display="inline"
              sx={{ fontSize: "14px", fontWeight: "500", mb: "8px" }}
            >
              Image
            </Para>
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
                  <Box mt="14px">
                    <Para width="86px">Drop your image here or</Para>
                    <input
                      style={{ display: "none" }}
                      // accept=".zip,.rar"
                      ref={inputFile}
                      // onChange={handleFileUpload}
                      onChange={(e)=> 
                        {
                          // handleFileUpload(e); 
                          formik.setFieldValue('image',e.target.files[0])
                        }
                      }
                      type="file"
                    />
                    <Button
                      onClick={onButtonClick}
                      variant="text"
                      color="primary"
                      sx={{
                        fontFamily: "Outfit",
                        fontWeight: "500",
                        fontSize: "12px",
                        color: "#42C677",
                        lineHeight: "16px",
                        textTransform: "capitalize",
                        textDecoration: "underline",
                        padding: "0px",
                        minHeight: "0px",
                        minWidth: "0px",
                      }}
                    >
                      Browse here
                    </Button>
                  </Box>
                </ImgBox>
              </Box>

              <Box sx={{ ml: "32px", mt: "24px" }}>
                <Typo3 width="251px">
                  *The uploaded image is a maximum of 10MB and has a ratio of
                  1:1, 3:4, 5:4, 3:2, etc.
                </Typo3>
              </Box>
            </Box>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: "12px" }}>
            <Box>
              <Button
                variant="contained"
                sx={Button2}
                // type="submit"
                onClick={() => {
                  setOpenCancelDialog(true);
                }}
              >
                <img src="./assets/images/send-2.svg" alt="" />
                <Box
                  sx={{
                    display: {
                      lg: "flex",
                      md: "flex",
                      sm: "flex",
                      xs: "none",
                    },
                  }}
                >
                  <Typography ml="8px" sx={BtnTypo2}>
                    Send Notification
                  </Typography>
                </Box>
              </Button>
            </Box>
          </Box>
        </Box>
        {/* {openCancelDialog ? (
          <CancelSubscriptionComp
            open={openCancelDialog}
            setOpen={setOpenCancelDialog}
            title={"Are you sure ?"}
            subTitle={"You will not be able to recover this module"}
            BtnmarginTop={"30px"}
          />
        ) : (
          ""
        )}  */}
         <CustomizedModal
         title="Confirmation"
         aria-labelledby="customized-dialog-title"
         open={openCancelDialog}
         handleClose={()=> setOpenCancelDialog(false)}
         actionBtnsText={['Discard','Yes, sure']}
         actionBtn2OnClickHandler={formik.handleSubmit}
         isHeaderShown={false}
         >
             <Box sx={{my:"20px",minWidth:{xs:"310px",sm:"400px"}}}>
                 <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center"}}>
                     <Box sx={{borderRadius:"8px",p:"16px 16px 32px 16px",textAlign:"center"}}>
                         <IconButton sx={{backgroundColor:"#FEF9E8"}}>
                             <WarningIcon sx={{ color: "yellow",fontSize:{xs:"32px",md:"48px"} }} />
                         </IconButton>
                         <Typography sx={{fontSize: { xs: "13px", md: "16px" },fontWeight: "600",color: "#1A1824",}}>Are you sure ?</Typography>  
                         <Typography sx={{fontSize: { xs: "13px", md: "14px" },fontWeight: "400",color: "#545359",}}>You will not be able to recover this module</Typography>  
                     </Box>
                 </Box>
             </Box>
         </CustomizedModal>
      </CardBox>
    </div>
  );
};
