import React, { useState } from "react";
import Box from "@mui/material/Box";
import { ArrowUpward } from "@mui/icons-material";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from '@mui/icons-material/Add';
import Typography from "@mui/material/Typography";
import { styled, alpha } from "@mui/material/styles";
import { Grid, OutlinedInput } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CustomizedModal from "../../../components/CustomizedModal";
// import { useMakeAdjustmentForFinancialDetailOfCatererMutation } from "../../../api/caterers";
import { useFormik } from "formik";


const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));


const BalanceCard = ({title,mainText,superText,lowerText,underlineText,percentText,labelSx,hasBtn = true,textSx,isCalledFromDriverApps=false,selectedRow,balanceValue,onSubmitHandler }) => {

  const [open, setOpen] = React.useState(false);

  // const [makeAdjustmentForFinancialDetailOfCaterer,responsedata] = useMakeAdjustmentForFinancialDetailOfCatererMutation()

  // const [addAmount, setAddAmount] = React.useState('');
  // const [amount, setAmount] = React.useState('');
  // const [reason, setReason] = React.useState('');


  // makeAdjustmentForFinancialDetailOfCaterer({id:"63c00bce2197ca82a09533ec",page:1,size:10}).then((res) => {
    //   if (res.data){
    //     console.log("res.data subscriptionForFinancialDetailOfCatererData ", res?.data);
    //     setSubscriptionForFinancialDetailOfCaterer(res?.data)
    //   }
    // });

    
  // const amountOnChangeHandler = (event) => {
  //   setAmount(event.target.value);
  // };

  // const addAmountOnChangeHandler = (event) => {
  //   setAddAmount(event.target.value);
  // };


  // const reasonOnChangeHandler = (event) => {
  //   setReason(event.target.value);
  // };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  const formik = useFormik({
    initialValues: {
        amount: "",
        addAmount: "",
        reason: "",
    },
    validateOnChange: (values) => {
      console.log("values", values);
    },
    onSubmit: (values, action) => {

      if(values?.amount && values?.addAmount && values?.reason){
      // makeAdjustmentForFinancialDetailOfCaterer({id:selectedRow?._id,...values}).then((res) => {
      onSubmitHandler({id:selectedRow?._id,...values}).then((res) => {
          if (res.data){
            // console.log("res.data makeAdjustmentForFinancialDetailOfCaterer ", res?.data);
            console.log("res.data makeAdjustment onSubmitHandler ", res?.data);
          }
        });
        console.log("amount=> ",values?.amount," ","addAmount=> ",values?.addAmount," ","reason=> ",values?.reason)
      }else{
        console.log('plz fill all values')
      }

      console.log("AddCuisine Form => ", values);
     
      action.resetForm();
    },
  });

  return (
    <>
      <Box
        sx={{
          width: "100%",
          border: "1px solid #E1E1E6",
          borderRadius: "8px",
          padding: "16px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={
              labelSx
                ? labelSx
                : {
                    fontSize: { xs: "13px", md: "18px" },
                    fontWeight: "500",
                    color: "#1A1824",
                    my: "5px",
                  }
            }
          >
            {title && title}
          </Typography>
          <Box
            sx={{
              border: `1px solid #81D9A5`,
              bgcolor: "#F1FFF7",
              borderRadius: "4px",
              color: "#30A15F",
              // p: "2px 9px",
              fontSize: "12px",
              fontWeight: "400",
              p: "3px 5px",
              my: "5px",
            }}
          >
            {percentText && percentText}
            <ArrowUpward
              sx={{
                color: "inherit",
                mx: "10px",
                fontSize: "18px",
                verticalAlign: "top",
              }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            mt: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              border: "1px solid #F6F6F6",
              borderRadius: "6px",
              p: "8px 16px",
              my: "5px",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "20px" },
                fontWeight: "600",
                my: "5px",
              }}
            >
              {mainText && mainText}
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                color: "#42C677",
                fontWeight: "400",
                my: "3px",
                ml: "5px",
              }}
            >
              {superText && superText}
            </Typography>
          </Box>
          <Box sx={{ my: "5px" }}>
            {hasBtn ? (
              <Button
                variant="outlined"
                sx={{
                  borderColor: "#80B3B0",
                  color: "#2B817B",
                  fontWeight: "600",
                  fontSize: "14px",
                  minWidth: "127px",
                  "&:hover": { borderColor: "#80B3B0" },
                }}
                onClick={handleClickOpen && handleClickOpen}
              >
                Make Adjusment
              </Button>
            ) : 
              <>
                {
                  isCalledFromDriverApps === false ? (
                    <Typography
                      sx={textSx? {
                        fontSize: { xs: "13px", md: "16px" },
                        fontWeight: "400",
                        ...textSx
                      }
                      :
                      {
                        fontSize: { xs: "13px", md: "16px" },
                        fontWeight: "400",
                        color: "#42C677",
                      }
                    }
                    >
                      See Detail 
                    </Typography>
                    )  : ""
                }
              </>
              // <Typography
              //   sx={textSx? {
              //     fontSize: { xs: "13px", md: "16px" },
              //     fontWeight: "400",
              //     ...textSx
              //   }
              //   :
              //   {
              //     fontSize: { xs: "13px", md: "16px" },
              //     fontWeight: "400",
              //     color: "#42C677",
              //   }
              // }
              // >
              //   See Detail 
              // </Typography>
            
            }
          </Box>
        </Box>
        {
          isCalledFromDriverApps? (
            <Box sx={{my:"5px",display:"flex",justifyContent:"space-between"}}>
              <Typography sx={{fontSize: { xs: "13px", md: "14px" },fontWeight: "400",color: "#9EA3AE",}}>
                {lowerText && lowerText} 
              </Typography>
              <Typography sx={{fontSize: { xs: "13px", md: "16px" },fontWeight: "400",textDecoration:"underline",color: "#2B817B",}}>
              {underlineText && underlineText} 
              </Typography>
          </Box>
          ):
          ""
        }
        {/* <Box sx={{my:"5px",display:"flex",justifyContent:"space-between"}}>
            <Typography sx={{fontSize: { xs: "13px", md: "14px" },fontWeight: "400",color: "#9EA3AE",}}>
              Hours 
            </Typography>
            <Typography sx={{fontSize: { xs: "13px", md: "16px" },fontWeight: "400",textDecoration:"underline",color: "#2B817B",}}>
              See Detail 
            </Typography>
        </Box> */}
      </Box>

      <div>
        <CustomizedModal
          title="Make Adjusment"
          aria-labelledby="customized-dialog-title"
          open={open}
          handleClose={handleClose}
          actionBtnsText={['Close','Submit']}
          actionBtn2OnClickHandler={formik.handleSubmit}
          // actionBtn2OnClickHandler={
          //   ()=> {
          //     if(amount && addAmount && reason){
          //       const makeAdjustmentData = {
          //         id:selectedRow?._id,
          //         amount:amount,
          //         reason:reason,
          //         addAmount:addAmount
          //       }
          //       // makeAdjustmentForFinancialDetailOfCaterer({id:"63c00bce2197ca82a09533ec",page:1,size:10}).then((res) => {
          //     makeAdjustmentForFinancialDetailOfCaterer(makeAdjustmentData).then((res) => {
          //         if (res.data){
          //           console.log("res.data makeAdjustmentForFinancialDetailOfCaterer ", res?.data);
          //         }
          //       });
          //       console.log("amount=> ",amount," ","addAmount=> ",addAmount," ","reason=> ",reason)
          //     }else{
          //       console.log('plz fill all values')
          //     }
          //   }
          // } 
        >
           <Box
              sx={{
                my: "5px",
                p: "16px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid #E1E1E6",
                borderRadius: "4px",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "13px", md: "14px" },
                  fontWeight: "400",
                  color: "#9EA3AE",
                }}
              >
                Balance
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "16px", md: "20px" },
                  fontWeight: "600",
                  my: "3px",
                }}
              >
                {/* $ 312.00 */}
                {balanceValue !==undefined || balanceValue !== null ? `$${Number(balanceValue).toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 })}` : 'no data'}
              </Typography>
            </Box>
            <Box sx={{my:"20px",minWidth:{xs:"310px",sm:"400px",md:"500px"},mb:"20px"}}>
            {/* <Box sx={{my:"20px",minWidth:{xs:"310px",sm:"400px",md:"500px"},mb:"20px"}} component="form" onSubmit={formik.handleSubmit}  autoComplete="off"> */}
                <Typography sx={{fontSize: { xs: "13px", md: "14px" },fontWeight: "500",color: "#545359",my:"10px"}}>
                    Add Amount
                </Typography>
                <Grid container gap={1}>
                    <Grid item xs={12} sm={4} my="3px">
                         <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth size="small">
                                <Select
                                // value={addAmount}
                                // onChange={addAmountOnChangeHandler}
                                name='addAmount'
                                value={formik.values.addAmount} 
                                onChange={formik.handleChange}
                                // onChange={(e)=> formik.setFieldValue('addAmount',e.target.value)}
                                onBlur={formik.handleBlur} 
                                errors={formik.errors.addAmount} 
                                touched={formik.touched.addAmount}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                >
                                <MenuItem value="">
                                <Typography sx={{fontSize: { xs: "13px", md: "14px" },fontWeight: "500",color: "#545359"}}>Select</Typography>
                                </MenuItem>
                                <MenuItem value="addUp">
                                <Typography sx={{fontSize: { xs: "13px", md: "14px" },fontWeight: "500",color: "#545359"}}>Add Up</Typography>
                                </MenuItem>
                                <MenuItem value="removeUp">
                                <Typography sx={{fontSize: { xs: "13px", md: "14px" },fontWeight: "500",color: "#545359"}}>Remove Up</Typography>
                                </MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={7.7} my="3px">
                        <Box sx={{ minWidth: 120 }}>
                          <OutlinedInput
                            type="number"
                            // value={amount} 
                            // onChange={amountOnChangeHandler}
                            name='amount' 
                            value={formik.values.amount} 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur} 
                            errors={formik.errors.amount} 
                            touched={formik.touched.amount}
                            placeholder="Enter Amount"
                            fullWidth
                            sx={{
                                // backgroundColor: "#F6F6F6",
                                width: "100%",
                                height: "40px",
                                fontSize: "14px",
                            }}
                            />
                            {/* <FormControl fullWidth size="small">
                                <Select
                                value={age2}
                                onChange={handleChange2}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                >
                                <MenuItem value="">
                                    <Typography sx={{fontSize: { xs: "13px", md: "14px" },fontWeight: "500",color: "#545359"}}>+ 30.00</Typography>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl> */}
                        </Box>
                    </Grid>
                </Grid>
                <Box sx={{my:"20px"}}>
                    <Typography sx={{fontSize: { xs: "13px", md: "14px" },fontWeight: "500",color: "#545359",my:"10px"}}>
                        Reason :
                    </Typography>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth size="small">
                            <Select
                            // value={reason}
                            // onChange={reasonOnChangeHandler}
                            name='reason' 
                            value={formik.values.reason} 
                            onChange={formik.handleChange}
                            // onChange={(e)=> formik.setFieldValue('reason',e.target.value)}
                            onBlur={formik.handleBlur} 
                            errors={formik.errors.reason} 
                            touched={formik.touched.reason}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            >
                            <MenuItem value="">
                            <Typography sx={{fontSize: { xs: "13px", md: "14px" },fontWeight: "400",color: "#9EA3AE"}}>Select Reason</Typography>
                            </MenuItem>
                            <MenuItem value="Our Appreciation for loyalty">
                                <Typography sx={{fontSize: { xs: "13px", md: "14px" },fontWeight: "400",color: "#1A1824"}}>Our Appreciation for loyalty</Typography>
                            </MenuItem>
                            <MenuItem value="Hightest order quantity">
                                <Typography sx={{fontSize: { xs: "13px", md: "14px" },fontWeight: "400",color: "#1A1824"}}>Hightest order quantity</Typography>
                            </MenuItem>
                            <MenuItem value="Highest rating from from customers">
                                <Typography sx={{fontSize: { xs: "13px", md: "14px" },fontWeight: "400",color: "#1A1824"}}>Highest rating from from customers</Typography>
                            </MenuItem>
                            {/* <MenuItem value={40}>
                                <AddIcon sx={{color: "#6A82CF",fontSize: { xs: "14px", md: "16px" }}} />
                                <Typography component="span" sx={{fontSize: { xs: "13px", md: "14px" },fontWeight: "400",color: "#6A82CF",ml:"10px"}}>Add reason</Typography>
                            </MenuItem> */}
                            </Select>
                        </FormControl>
                    </Box>
                </Box>
            </Box>
        </CustomizedModal>
        {/* <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleClose}>
              <CloseIcon sx={{ color: "#E75C62" }} />
            </IconButton>
            <Typography fontSize="20px" fontWeight="600" mx="auto">
              Make Adjusment
            </Typography>
          </DrawerHeader>
          <DialogContent>
            <Box
              sx={{
                my: "5px",
                p: "16px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid #E1E1E6",
                borderRadius: "4px",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "13px", md: "14px" },
                  fontWeight: "400",
                  color: "#9EA3AE",
                }}
              >
                Balance
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "16px", md: "20px" },
                  fontWeight: "600",
                  my: "3px",
                }}
              >
                $ 312.00
              </Typography>
            </Box>
            <Box sx={{my:"20px",minWidth:{xs:"310px",sm:"400px",md:"500px"},mb:"20px"}}>
                <Typography sx={{fontSize: { xs: "13px", md: "14px" },fontWeight: "500",color: "#545359",my:"10px"}}>
                    Add Amount
                </Typography>
                <Grid container gap={1}>
                    <Grid item xs={12} sm={4} my="3px">
                         <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth size="small">
                                <Select
                                value={age}
                                onChange={handleChange}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                >
                                <MenuItem value="">
                                <Typography sx={{fontSize: { xs: "13px", md: "14px" },fontWeight: "500",color: "#545359"}}>Add Up</Typography>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={7.7} my="3px">
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth size="small">
                                <Select
                                value={age2}
                                onChange={handleChange2}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                >
                                <MenuItem value="">
                                    <Typography sx={{fontSize: { xs: "13px", md: "14px" },fontWeight: "500",color: "#545359"}}>+ 30.00</Typography>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                </Grid>
                <Box sx={{my:"20px"}}>
                    <Typography sx={{fontSize: { xs: "13px", md: "14px" },fontWeight: "500",color: "#545359",my:"10px"}}>
                        Reason :
                    </Typography>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth size="small">
                            <Select
                            value={reason}
                            onChange={reasonOnChangeHandler}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            >
                            <MenuItem value="">
                            <Typography sx={{fontSize: { xs: "13px", md: "14px" },fontWeight: "400",color: "#9EA3AE"}}>Select Reason</Typography>
                            </MenuItem>
                            <MenuItem value={10}>
                                <Typography sx={{fontSize: { xs: "13px", md: "14px" },fontWeight: "400",color: "#1A1824"}}>Our Appreciation for loyalty</Typography>
                            </MenuItem>
                            <MenuItem value={20}>
                                <Typography sx={{fontSize: { xs: "13px", md: "14px" },fontWeight: "400",color: "#1A1824"}}>Hightest order quantity</Typography>
                            </MenuItem>
                            <MenuItem value={30}>
                                <Typography sx={{fontSize: { xs: "13px", md: "14px" },fontWeight: "400",color: "#1A1824"}}>Highest rating from from customers</Typography>
                            </MenuItem>
                            <MenuItem value={40}>
                                <AddIcon sx={{color: "#6A82CF",fontSize: { xs: "14px", md: "16px" }}} />
                                <Typography component="span" sx={{fontSize: { xs: "13px", md: "14px" },fontWeight: "400",color: "#6A82CF",ml:"10px"}}>Add reason</Typography>
                            </MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Box>
            </Box>
          </DialogContent>
          <DialogActions sx={{ justifyContent: "center", mt: "10px" }}>
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
                textTransform: "capitalize",
              }}
            >
              Close
            </Button>

            <Button
              disabled={false}
              variant="contained"
              onClick={handleClose}
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
              Submit
            </Button>
          </DialogActions>
        </BootstrapDialog> */}
      </div>
    </>
  );
};

export default BalanceCard;
