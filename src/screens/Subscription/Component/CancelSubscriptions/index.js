import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { IconButton } from "@mui/material";
import WarningIcon from '@mui/icons-material/Warning';
import CancelIcon from '@mui/icons-material/Cancel';
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
// import TextInputField from "../../../../components/TextInputField";
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Button from '@mui/material/Button';
// import { useFormik } from "formik";
// import { signUpSchema } from "../../schemas";
import { InputAdornment, OutlinedInput, TextField } from "@mui/material";
import { useCancelSubscriptionMutation } from "../../../../api/subscription";
import CustomizedModal from "../../../../components/CustomizedModal";

const Para = styled(Typography)(({ theme }) => ({
    fontFamily: "Outfit",
    fontWeight: "500",
    fontSize: "12px",
    color: "#1A1824;",
    lineHeight: "16px",
  }));

const Typo1 = styled("div")(({ theme }) => ({
    // padding: theme.spacing(0, 2),
    fontFamily: "outfit",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "20px",
    color: "#9EA3AE",
}));

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
  // width: "147px",

  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
    width: "70px",

  },
  "&:hover":{
    border: "1px solid #DD7474"
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
    // width: "147px",

    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      width: "70px",

    },
    "&:hover":{
      backgroundColor: "#2B817B"
    }
  }));


const CancelSubscriptions = ({handleModalClose,refetchAllSubscriptionsData,selectedsubscription}) => {
  const [cancelSubscription, { isLoading }] = useCancelSubscriptionMutation()

  const [isOpenCancelConfirmDialog, setIsOpenCancelConfirmDialog] = useState(false);

  const [reason, setReason] = useState("");

  const [fromDateValue, setFromDateValue] = useState(dayjs('2014-08-18T21:11:54'));

  const [toDateValue, setToDateValue] = useState(dayjs('2014-08-18T21:11:54'));

  const handleChangeForFromDate = (newfromDateValue) => {
    setFromDateValue(newfromDateValue);
  };
  const handleChangeForToDate = (newtoDateValue) => {
    setToDateValue(newtoDateValue);
  };

  const handleCloseCancelConfirmDialog = () => {
    setIsOpenCancelConfirmDialog(false);
  };

  const handleOpenCancelConfirmDialog = () => {
    setIsOpenCancelConfirmDialog(true);
  };


  const onSubmitHandler = () => {
    const formStateData = {
      id:selectedsubscription?._id,
      to:toDateValue,
      From:fromDateValue,
      reason:reason
    }
    console.log("cancel subscription formStateData ",formStateData);
    cancelSubscription(formStateData).then((res) => {
        if (res.data) {
          console.log("subscription cancel successfully");
          refetchAllSubscriptionsData !== undefined && refetchAllSubscriptionsData();
        }
        //   handleModalClose();
        //   refetchAllSubscriptionsData();
        // }else{
        //   handleModalClose();
        // }
      });

      handleModalClose();
  }

  //   const formik = useFormik({
  //   initialValues: {
  //       reason: "",
  //   },
  //   validateOnChange: (values) => {
  //     console.log("values", values);
  //   },
  //   onSubmit: (values, action) => {
  //     console.log("cancelSubscription Form => ", values);
  //     // handleModalClose()

  //   const formStateData = {
  //     id:selectedsubscription?._id,
  //     to:toDateValue,
  //     From:fromDateValue,
  //     reason:values.reason
  // }
  // console.log("cancel subscription formStateData ",formStateData);
  //   // cancelSubscription(formStateData).then((res) => {
  //   //     if (res.data) {
  //   //       console.log("subscription cancelled successfully");
  //   //       handleModalClose();
  //   //       refetchAllSubscriptionsData();
  //   //     }
  //   //   });
  //     action.resetForm();
  //   },
  // });


  return (
    <>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12}>
            {/* <Box component="form" onSubmit={formik.handleSubmit}  autoComplete="off"> */}
            <Box>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Box sx={{ width: "64px", height: "64px" }}>
                  {/* <img
                    src="./assets/images/pauseIcon.svg"
                    alt=""
                    width="100%"
                    height="auto"
                  /> */}
                  {/* <WarningIcon sx={{ color: "yellow",fontSize:{xs:"32px",md:"48px"} }} /> */}
                  {/* <CancelIcon sx={{ color: "#9fa8da",fontSize:{xs:"32px",md:"48px"} }} /> */}
                  {/* <CancelIcon sx={{ color: "#e75c62",fontSize:{xs:"32px",md:"48px"} }} /> */}
                  <CancelIcon sx={{ color: "#ff7b71",fontSize:{xs:"32px",md:"48px"} }} />
                </Box>
              </Box>

              <Box sx={{display:{sm:"flex"},flexWrap:{sm:"wrap"},justifyContent:{sm:"space-between"},alignItems:{sm:"center"}}}>
                <Box sx={{my:"10px"}}>
                  <Para
                  sx={{
                      fontSize: "14px",
                      fontWeight: "500",
                      mb: "8px",
                      color: "#545359",
                  }}
                  >
                      ID Account
                  </Para>
                  <OutlinedInput
                  placeholder="EC - 12345" 
                  fullWidth
                  defaultValue={selectedsubscription?.subId !== undefined || selectedsubscription?.subId !== null ? selectedsubscription?.subId : ""}
                  sx={{
                      backgroundColor: "#F6F6F6",
                      width: "100%",
                      height: "40px",
                      fontSize: "14px",
                  }}
                  disabled
                  // InputProps={{
                  //   readOnly: true,
                  // }}
                  />
                </Box>
                <Box sx={{my:"10px"}}>
                  <Para
                  sx={{
                      fontSize: "14px",
                      fontWeight: "500",
                      mb: "8px",
                      color: "#545359",
                  }}
                  >
                      Name
                  </Para>
                  <OutlinedInput
                  placeholder="Ilham Syaif" 
                  fullWidth
                  defaultValue={selectedsubscription?.User?.fullName !== undefined || selectedsubscription?.User?.fullName !== null ? selectedsubscription?.User?.fullName : ""}
                  sx={{
                      backgroundColor: "#F6F6F6",
                      width: "100%",
                      height: "40px",
                      fontSize: "14px",
                  }}
                  disabled
                  // InputProps={{
                  //   readOnly: true,
                  // }}
                  />
                </Box>
              </Box>
              <Box sx={{my:"10px"}}>
                <Para
                sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                    mb: "8px",
                    color: "#545359",
                }}
                >
                    Reason
                </Para>
                <OutlinedInput
                 placeholder='Reason' 
                 value={reason}
                 onChange={(e)=> setReason(e.target.value)}
                // name='reason' 
                // value={formik.values.reason} 
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // placeholder='Reason' 
                // errors={formik.errors.reason} 
                // touched={formik.touched.reason}
                fullWidth
                sx={{
                    backgroundColor: "#F6F6F6",
                    width: "100%",
                    height: "40px",
                    fontSize: "14px",
                }}
                />
              </Box> 
              <Box sx={{my:"10px"}}>
                <Para
                sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                    mb: "8px",
                    color: "#545359",
                }}
                >
                    {/* Pause date */}
                  Date
                </Para>
                <Box sx={{my:"10px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <Box sx={{my:"2px"}}>
                    <Para
                    sx={{
                        fontSize: "14px",
                        fontWeight: "500",
                        mb: "8px",
                        color: "#545359",
                    }}
                    >
                        From
                    </Para>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDatePicker
                          // label="From"
                          inputFormat="MM/DD/YYYY"
                          value={fromDateValue}
                          onChange={handleChangeForFromDate}
                          renderInput={(params) => <TextField size="small" {...params} />}
                        />
                    </LocalizationProvider>
                  </Box>
                  <Box sx={{ml:"10px",my:"2px"}}>
                    <Para
                    sx={{
                        fontSize: "14px",
                        fontWeight: "500",
                        mb: "8px",
                        color: "#545359",
                    }}
                    >
                        To
                    </Para>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDatePicker
                          // label="To"
                          inputFormat="MM/DD/YYYY"
                          value={toDateValue}
                          onChange={handleChangeForToDate}
                          renderInput={(params) => <TextField size="small" {...params} />}
                        />
                    </LocalizationProvider>
                  </Box>
                </Box>
                {/* <OutlinedInput
                placeholder='Now'
                fullWidth
                sx={{
                    backgroundColor: "#F6F6F6",
                    width: "100%",
                    height: "40px",
                    fontSize: "14px",
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <img src="assets/images/calendar.svg" alt="calendar pic" height="16px" width="16px" />
                  </InputAdornment>
                }
                /> */}
                
              </Box>
              <Box sx={{display: "flex",justifyContent: "center",mt:"40px",mb:"20px" }}>
                <Box onClick={handleModalClose}>
                  <Button1 variant="outlined">
                    {/* Cancel */}
                    Close
                  </Button1>
                </Box>
                <Box ml="24px">
                  <Button2 variant="contained" 
                  // type='submit'
                  // disabled={isLoading}
                  // onClick={onSubmitHandler}
                  onClick={handleOpenCancelConfirmDialog}
                  >
                    {/* Submit */}
                    Cancel Subscription
                  </Button2>
                </Box>
              </Box>
            </Box>
        </Grid>
      </Grid>
      <CustomizedModal
      title="Cancel Confirm Dialog"
      aria-labelledby="customized-dialog-title"
      open={isOpenCancelConfirmDialog}
      handleClose={handleCloseCancelConfirmDialog}
      actionBtnsText={['Discard','Yes, sure']}
      actionBtn2OnClickHandler={onSubmitHandler}
      disableActionBtn2WhileLoading={isLoading}
      isHeaderShown={false}
      >
          <Box sx={{my:"20px",minWidth:{xs:"310px",sm:"400px"}}}>
              <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center"}}>
                  <Box sx={{borderRadius:"8px",p:"16px 16px 32px 16px",textAlign:"center"}}>
                      <IconButton sx={{backgroundColor:"#FEF9E8"}}>
                          <WarningIcon sx={{ color: "yellow",fontSize:{xs:"32px",md:"48px"} }} />
                      </IconButton>
                      <Typography sx={{fontSize: { xs: "13px", md: "16px" },fontWeight: "600",color: "#1A1824",}}>Cancel Subscription</Typography>  
                      <Typography sx={{fontSize: { xs: "13px", md: "14px" },fontWeight: "400",color: "#545359",}}>Subscriptions that have been canceled cannot be returned,</Typography>  
                      <Typography sx={{fontSize: { xs: "13px", md: "14px" },fontWeight: "400",color: "#545359",}}>are you sure about this?</Typography>  
                  </Box>
              </Box>
          </Box>
      </CustomizedModal>
    </>
  );
};

export default CancelSubscriptions;
