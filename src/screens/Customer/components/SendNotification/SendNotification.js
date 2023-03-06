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
import SendNotificationChip from "./SendNotificationChip";
import { useFormik } from 'formik';
import { useCreateNotificationMutation } from '../../../../api/notification';
import swal from "sweetalert";
import { useEffect } from "react";
import { useState } from "react";
function SimpleDialog(props) {
  // const { onClose, selectedValue, open } = props;
  const { onClose, open } = props;

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

  const [createNotification, resdata] = useCreateNotificationMutation()
  // const [image, setImage] = useState("assets/images/image profile.svg");
  const [image, setImage] = useState("./assets/images/Frame 1097.png");

  const formik = useFormik({
    initialValues: {
      to:"Customer",
      title: "",
      description:  "",
      link: "",
      image:""
    },
    onSubmit: (values, action) => {
      console.log("Create New Notification Form values => ", values);

      let formData = new FormData(); //formdata object
        
      Object.keys(values).map((keys) => {
        formData.append(keys, values[keys])
      });
      
      Object.keys(formik.values).map((keys) => {
        console.log(`keys ${keys} = ${formData.get(keys)}`)
      });


      if(values?.to && values?.title && values?.description && values?.link && values?.image){
      
        // createNotification(formData).then((res) => {
        //       if (res.data){
        //         console.log("res.data createNotification ", res?.data);
        //         // swal("Success!", `Content Saved Successfully`, "success");
        //         swal("Success!", `${res?.data?.message}`, "success");
        //       }
        //     });

      }else{
        // console.log('plz fill all values')
        swal("Error!", `Please fill all fields`, "error");
      }

     
      action.resetForm();
      handleClose()
    },
  });

  const DropHereBox = styled(Box)(({ theme }) => ({
    borderRadius: "6px",
    width: "100%",
    border: "1px dashed #80B3B0",
    borderRadius: "6px",
    paddingTop: "20px",
    paddingBottom: "20px",
    [theme.breakpoints.up("sm")]: {
      //   width: 'auto',
    },
  }));

  const Title = styled(Typography)({
    fontSize: "18px",
    fontWeight: "600",
    lineHeight: "26.1px",
    textTransform: "capitalize",
    letter: "1.5%",
    color: "#1A1824",
  });

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
        textAlign: "center"
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
        textAlign: "center"
      },
  }));


  

  const Typo2 = styled(Typography)({
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "20px",
    textTransform: "capitalize",
    color: "#545359",
  });

  const FieldTitle = styled(Typography)(({ theme }) => ({
    fontFamily: theme.typography.fontFamily,
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: "16px",
    color: "#1A1824",
    // [theme.breakpoints.up("xl")]: {
    //   fontSize: "22px",
    // },
  }));

  const BtnTypo2 = {
    fontSize: "14px",
    fontWeight: "600",
    lineHeight: "20px",
    color: "#FFFFFF",
    textTransform: "capitalize",
  };

  const NotificationButton = {
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
    lineHeight: "16px",
  }));

  const Button1Sx = {
    // padding: theme.spacing(0, 2),
    fontFamily: "outfit",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "20px",
    textTransform: "capitalize",
    color: "#2B817B",
    py:0,
    // marginTop: "10px",
  };


  
  useEffect(() => {
    if (formik.values.image !== "") {
      let reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };

      reader.readAsDataURL(formik.values.image);
    }
  }, [formik]);

  return (
    <Dialog
      // onClose={handleClose}
      onClose={handleClose}
      open={open}
      sx={{
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "100%",
            maxWidth: "764px", // Set your width here
            height: "460px",
            paddingLeft: "16px",
            paddingRight: "16px",
            // paddingBottom: "32px",
            // paddingTop: "16px",
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
            <Title>Send Notification</Title>
          </Box>
        </Box>

        <Box sx={{ display: "flex", flexDirection: {lg: "row", md: "row", sm: "row", xs: "row"} }}>
          <Box width="100%">
            <DropHereBox
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Box sx={{ width: {lg: "107px", md: "107px", sm: "107px", xs: "50px"}, height: {lg: "65px", md: "65px", sm: "65px", xs: "30px"} }}>
                  <img
                    // src="./assets/images/Frame 1097.png"
                    src={image}
                    alt="frame image"
                    style={{width:"100%",height:"100%"}}
                  />
                </Box>
              </Box>
              {/* <Box
                sx={{ display: "flex", flexDirection: {lg: "row", md: "row", sm: "row", xs: "column"} , justifyContent: "center", mt: "11px" }}
              >
                <BoxTypo1>Drop your image here or</BoxTypo1>
                <BoxTypo2 pl="4px">Browse here</BoxTypo2>
              </Box> */}
              <Box
                sx={{ display: "flex", flexDirection: {lg: "row", md: "row", sm: "row", xs: "column"} , justifyContent: "center", mt: "11px" }}
              >
                <BoxTypo1>Drop your image here or</BoxTypo1>
                <Button
                sx={Button1Sx}
                variant="text"
                component="label"
                >
                    Browse here
                    <input
                    hidden
                    accept="image/*"
                    multiple
                    type="file"
                    id="image"
                    image="image"
                    onChange={(event) => {
                        formik.setFieldValue(
                        "image",
                        event.currentTarget.files[0]
                        );
                    }}
                    />
                </Button>
              </Box>
            </DropHereBox>
            {/* <input
              onChange={(e)=> 
                { 
                  formik.setFieldValue('image',e.target.files[0])
                }
              }
              type="file"
            /> */}

            <Box mt="8px">
              <SendNotificationChip />
            </Box>
          </Box>

          <Box width="100%" ml="16px">
            <Box>
              <FieldTitle
                sx={{
                  fontSize: "12px",
                  fontWeight: "500",
                  mb: "8px",
                  display: "inline-flex",
                }}
              >
                Direct Link
              </FieldTitle>
              <FieldTitle
                sx={{
                  fontSize: "12px",
                  fontWeight: "500",
                  color: "#9EA3AE",
                  display: "inline-flex",
                  pl: "4px",
                }}
              >
                (Optional)
              </FieldTitle>
              <OutlinedInput
                // placeholder="Notification title"
                placeholder="Direct Link"
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
                  fontSize: "14px",
                }}
              />
            </Box>

            <Box mt="16px">
              <FieldTitle
                sx={{ fontSize: "12px", fontWeight: "500", mb: "8px" }}
              >
                Title
              </FieldTitle>
              <OutlinedInput
                placeholder="Notification title"
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

            <Box>
              <Box
                mt="16px"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <FieldTitle
                  sx={{
                    fontSize: "12px",
                    fontWeight: "500",
                    marginTop: "9px",
                    mb: "8px",
                  }}
                >
                  Description
                </FieldTitle>
                <Para
                  sx={{ marginTop: "9px", fontSize: "12px", fontWeight: "500" }}
                >
                  {word}/80
                </Para>
              </Box>

              <OutlinedInput
                fullWidth
                // inputProps={{ maxLength: 80 }}
                // maxLength="80"
                // onChange={(e) => wordCoutn(e.target.value)}
                // components="input"
                multiline
                rows={3}
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
                  height: "100px",
                  alignItems: "flex-start",
                  fontSize: "14px",
                }}
              />
            </Box>

            <Box mt="16px" sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button variant="contained" sx={NotificationButton} onClick={formik.handleSubmit}>
                <img src="./assets/images/send-2.svg" alt="" />
                <Box
                  sx={{
                    display: { lg: "flex", md: "flex", sm: "flex", xs: "none" },
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
      </Box>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  // selectedValue: PropTypes.string.isRequired,
};

export default function SendNotification({ open, setOpen }) {
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
