import React, { useRef, useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import TextField from '@mui/material/TextField';
import PersonIcon from '@mui/icons-material/Person';
import WarningIcon from '@mui/icons-material/Warning';
import dayjs from 'dayjs';
import { useFormik } from "formik";
// import { signUpSchema } from "../../schemas";
import styles from "./EmailForm.module.sass"
import TextInputField from "../../../components/TextInputField";
import CustomTextarea from "../../../components/CustomTextarea";
import Checkbox from '@mui/material/Checkbox';
import { useComposeEmailMutation } from "../../../api/email";
import { IconButton } from "@mui/material";
import CustomizedModal from "../../../components/CustomizedModal";
import swal from "sweetalert";
import moment from "moment/moment";
import OutlinedInput from "@mui/material/OutlinedInput";
import CustomDatePicker from "../../../components/CustomDatePicker";
import CustomTimePicker from "../../../components/CustomTimePicker";


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

const Para = styled(Typography)(({ theme }) => ({
  fontFamily: "Outfit",
  fontWeight: "500",
  fontSize: "12px",
  color: "#1A1824;",
  lineHeight: "16px",
}));

const FieldBox = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: "32px",
  border: "1px solid #E1E1E6",
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(3),
}));

const initialValues = {
  email: "",
  from: "",
  to: "",
  reply: false,
  date: new Date() || dayjs('2014-08-18T21:11:54'),
  time: new Date().getTime() || dayjs('2014-08-18T21:11:54'),
  subject: "",
  description: "",
  period: false,
  periodStartDate: new Date() || dayjs('2014-08-18T21:11:54'),
  periodEndDate: new Date() || dayjs('2014-08-18T21:11:54'),
  image: "",
};

// const EmailForm = ({handleOpenModal}) => {
const EmailForm = () => {
  const [composeEmail, resdata] = useComposeEmailMutation()

  const [ampm, setAmpm] = useState(false);
  const inputFile = useRef(null);

  const [isOpenConfirmDialog, setIsOpenConfirmDialog] = React.useState(false);

  // const [dateeValue, setDateeValue] = useState(dayjs('2014-08-18T21:11:54'));
  // const [dateValue, setDateValue] = useState(dayjs('2014-08-18T21:11:54'));

  const { values, errors, touched, handleBlur, handleChange, handleSubmit,setFieldValue } =
  useFormik({
    initialValues,
    // validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      console.log("compose email values => ", values);
      // console.log("values.date formated => ", moment(values.date).format('YYYY-MM-DD'));
      // console.log("values.time formated => ", moment(values.time).format('HH:mm'));
      // console.log("values.time formated => ", values.time.toLocaleString('en-US', {hour12: false,
        // }));
    
      // const formatedDate = moment(values?.time).format('HH:mm')

      let formData = new FormData(); //formdata object
        
      // Object.keys(values).map((keys) => {
      //   formData.append(keys, values[keys])
      // });

      formData.append("from", values.from)
      formData.append("reply", values.reply)
      formData.append("date", values.date)
      formData.append("time", values.time)
      // formData.append("date", moment(values.date).format('YYYY-MM-DD'))
      // formData.append("time", formatedDate)
      // formData.append("time", values.time.toLocaleString('en-US', {
      //   hour12: false,
      // }))
      formData.append("subject", values.subject)
      formData.append("description", values.description)
      formData.append("period", values.period)
      formData.append("image", values.image)
      formData.append("status", "sent")

      if(values.email === "" || values.email === null || values.email === undefined){
        console.log("compose email values with email's value equal to null value => ", values);
        formData.append("to", values.to)
      }else{
        console.log("compose email values with email's value not equal to null value => ", values);
        formData.append("to", values.email)
      }
      if(values.period === true){
        // console.log("period value == true => ", values.period);
        // formData.append("periodStartDate", moment(values.periodStartDate).format('YYYY-MM-DD'))
        // formData.append("periodEndDate", moment(values.periodEndDate).format('YYYY-MM-DD'))
        formData.append("periodStartDate", values.periodStartDate)
        formData.append("periodEndDate", values.periodEndDate)
      }

      // if(formData.has("date")){
        let date = formData.get("date")
        date = moment(date).format('YYYY-MM-DD')
        formData.set("date", date)

        let time = formData.get("time")
        time = moment(time).format('HH:mm')
        formData.set("time", time)

        let periodStartDate = formData.get("periodStartDate")
        periodStartDate = moment(periodStartDate).format('YYYY-MM-DD')
        formData.set("periodStartDate", periodStartDate)

        let periodEndDate = formData.get("periodEndDate")
        periodEndDate = moment(periodEndDate).format('YYYY-MM-DD')
        formData.set("periodEndDate", periodEndDate)
      // }

      Object.keys(values).map((keys) => {
        console.log(`keys ${keys} = ${formData.get(keys)}`)
      });
      console.log(`keys status = ${formData.get("status")}`)


      // // Get year, month, and day part from the date
      // var year = values.date.toLocaleString("default", { year: "numeric" });
      // var month = values.date.toLocaleString("default", { month: "2-digit" });
      // var day = values.date.toLocaleString("default", { day: "2-digit" });

      // // Generate yyyy-mm-dd date string
      // var formattedDate = year + "-" + month + "-" + day;
      // console.log("formattedDate ",formattedDate);  // Prints: 04-05-2022


      
      composeEmail(formData).then((res)=>{
        if(res?.data){
          console.log("compose email form submitted => ", res?.data);
          console.log("res?.data => ", res?.data);
          swal("Success!", `${res?.data?.message}`, "success");
        }
      })
      // console.log("res?.data => ",  moment('171054','HHmmss').format('HH:mm:ss'));
      // console.log("res?.data => ", new Date(values.time).toLocaleTimeString());
      // console.log("res?.data 24h format => ", moment(values.time).format('HH:mm'));
      // console.log("res?.data => ",  moment(values.time,'HHmmss').format('HH:mm:ss'));
      // action.resetForm();
    },
  });



  const emailDiscardHandler = () => {
    console.log("emailDiscardHandler clicked")
  };

  const handleCloseConfirm = () => {
    setIsOpenConfirmDialog(false);
  };

  const handleOpenConfirm = () => {
    setIsOpenConfirmDialog(true);
  };

  const onButtonClick = () => {
    inputFile.current.click();
  };
  


  const moreEditTextIconsArr = [
    {
      imageSrc:"assets/moreEditTextIcons/textAlignLeft.png",
    },
    {
      imageSrc:"assets/moreEditTextIcons/textAlignCenter.png",
    },
    {
      imageSrc:"assets/moreEditTextIcons/textItalicIcon.png",
    },
    {
      imageSrc:"assets/moreEditTextIcons/textAlignRight.png",
    },
    {
      imageSrc:"assets/moreEditTextIcons/textIcon.png",
    },
    {
      imageSrc:"assets/moreEditTextIcons/textBoldIcon.png",
    },
    {
      imageSrc:"assets/moreEditTextIcons/textUnderlineIcon.png",
    },
    {
      imageSrc:"assets/moreEditTextIcons/pharagraphSpacingIcon.png",
    },
    // {
    //   imageSrc:"assets/moreEditTextIcons/linkIcon.png",
    // },
]


  return (
    <>
      <Box sx={{width:"100%"}}>
        {/* <Box component="form" onSubmit={handleSubmit}  autoComplete="off"> */}
        <Box component="form">
          <Box sx={{my:"5px"}}>
            <Grid container gap={2} justifyContent="space-between">
              <Grid item xs={12} md={5.8} my="5px">
                <TextInputField 
                label='From :'
                name='from' 
                value={values.from} 
                onChangeHandler={handleChange} 
                onBlurHandler={handleBlur} 
                placeholder='<Administrator@gmail.com>' 
                errors={errors.from} 
                touched={touched.from}
              />
              {/* <FieldTitle
                sx={{
                  fontSize: {xs:"13px",md:"14px"},
                  fontWeight: "500",
                  my:"10px",
                  color:"#545359"
                }}
              >
                Sent to :
              </FieldTitle>
              <OutlinedInput
                placeholder="<Administrator@gmail.com>"
                // size="small"
                name='from'
                value={values.from} 
                onChange={handleChange}
                // onChange={(e)=> formik.setFieldValue('link',e.target.value)}
                onBlur={handleBlur} 
                errors={errors.from} 
                touched={touched.from}
                sx={{
                  backgroundColor: "#F6F6F6",
                  width: "100%",
                  fontSize: "14px",
                }}
              /> */}
              </Grid>
              <Grid item xs={12} md={5.8} my="5px">
                <Box sx={{width:"100%"}}>
                  {
                    values.to.toLocaleLowerCase() !== "specific email address" ? 
                    (
                      <>
                        <Box>
                          {/* <FieldTitle
                            sx={{
                              fontSize: {xs:"13px",md:"14px"},
                              fontWeight: "500",
                              my:"10px",
                              color:"#545359"
                            }}
                          >
                            Sent to :
                          </FieldTitle> */}
                          <Typography sx={{fontSize:{xs:"10px",md:"14px"},fontWeight:"500",color:"#545359"}}>Sent to :</Typography>
                          <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth size="small">
                                <Select
                                name="to"
                                value={values.to}
                                onChange={handleChange}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                sx={{mt:"7px",py:"3px",backgroundColor: '#F6F6F6'}}
                                >
                                <MenuItem value="All User">
                                <Typography sx={{fontSize: { xs: "13px", md: "14px" },fontWeight: "500",color: "#545359"}}>All User</Typography>
                                </MenuItem>
                                <MenuItem value="Customer">Customer</MenuItem>
                                <MenuItem value="Caterer">Caterer</MenuItem>
                                <MenuItem value="Driver">Driver</MenuItem>
                                <MenuItem value="Specific email address">Specific email address</MenuItem>
                                </Select>
                            </FormControl>
                          </Box>
                        </Box>
                      </>
                    )
                    :
                    (
                      <>
                        <Box>
                          <Box sx={{ minWidth: 120 }}>
                            <TextInputField 
                              label='Sent to :'
                              name='email' 
                              value={values.email} 
                              onChangeHandler={handleChange} 
                              onBlurHandler={handleBlur} 
                              placeholder='<example@abcmail.com>' 
                              errors={errors.email} 
                              touched={touched.email}
                            />
                            {/* <FieldTitle
                              sx={{
                                fontSize: {xs:"13px",md:"14px"},
                                fontWeight: "500",
                                my:"10px",
                                color:"#545359"
                              }}
                            >
                              Sent to :
                            </FieldTitle>
                            <OutlinedInput
                              placeholder="<example@abcmail.com>"
                              size="small"
                              name='email'
                              value={values.email} 
                              onChange={handleChange}
                              onBlur={handleBlur} 
                              errors={errors.email} 
                              touched={touched.email}
                              sx={{
                                backgroundColor: "#F6F6F6",
                                width: "100%",
                                // height: "40px",
                                fontSize: "14px",
                              }}
                            /> */}
                          </Box>
                        </Box>
                      </>
                    )
                  }
                  
                  <Box sx={{width:"100%",display:"flex",flexWrap:"wrap",alignItems:"center"}}>
                    <Checkbox
                      disableRipple
                      color="greenclr"
                      checked={values.reply} 
                      onChange={() => {setFieldValue('reply',!values.reply); }}
                      inputProps={{ 'aria-label': 'Checkbox demo' }}
                    />
                    <Typography sx={{fontSize:{xs:"10px",md:"12px"},fontWeight:"400",color:"#1A1824",ml:"3px"}}>User can???t replies this message</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{my:"10px"}}>
            <Grid container justifyContent="space-between">
              <Grid item container gap={2} xs={12} md={7}>
                <Grid item xs={12} md={5.7} my="5px">
                  <Box sx={{my:"30px",width:"100%" }}>
                    {/* <FieldTitle
                      sx={{
                        fontSize: {xs:"13px",md:"14px"},
                        fontWeight: "500",
                        my:"10px",
                        color:"#545359"
                      }}
                    >
                      Date :
                    </FieldTitle> */}
                    <Typography sx={{my:"10px",color:"#545359",fontSize:{xs:"13px",md:"14px"},fontWeight:"500"}}>Date :</Typography>
                    <CustomDatePicker 
                      // label="Date"
                      inputFormat="MM/DD/YYYY"
                      value={values.date}
                      onChange={(e)=> {
                        console.log("date value => ", e);
                        setFieldValue("date",e)
                      }}
                      renderInput={(params) => <TextField size="small" sx={{width:"100%"}} {...params} />}
                    />
                  </Box>
                  <Box sx={{width:"100%",display:"flex",flexWrap:"wrap",alignItems:"center"}}>
                    <Checkbox
                        disableRipple
                        color="greenclr"
                        inputProps={{ 'aria-label': 'Checkbox demo' }}
                        checked={values.period} 
                        onChange={() => {setFieldValue('period',!values.period); }}
                    />
                    <Typography sx={{fontSize:{xs:"10px",md:"12px"},fontWeight:"400",color:"#1A1824",ml:"3px"}}>Send message for time period</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={5.7} my="5px">
                  <Box sx={{my:"30px",width:"100%"}}>
                    <Box sx={{mt:"60px"}}>
                        <CustomTimePicker
                          // label="Time"
                          value={values.time}
                          onChange={(e)=> {
                            setFieldValue("time",e)
                          }}
                          ampm={ampm}
                          renderInput={(params) => <TextField size="small" sx={{width:"100%"}} {...params} />}
                        />
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Box>
          
          {
            values.period ? 
            <>
              <Box sx={{my:"10px"}}>
                <Grid container justifyContent="space-between">
                  <Grid item container gap={2} xs={12} md={7}>
                    <Grid item xs={12} md={5.7} my="5px">
                      <Box sx={{width:"100%" }}>
                        {/* <FieldTitle
                          sx={{
                            fontSize: {xs:"13px",md:"14px"},
                            fontWeight: "500",
                            my:"10px",
                            color:"#545359"
                          }}
                        >
                          Date :
                        </FieldTitle> */}
                        <Typography sx={{my:"10px",color:"#545359",fontSize:{xs:"13px",md:"14px"},fontWeight:"500"}}>Date :</Typography>
                        <Box>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DesktopDatePicker
                              label="Start"
                              inputFormat="MM/DD/YYYY"
                              value={values.periodStartDate}
                              onChange={(e)=> setFieldValue("periodStartDate",e)}
                              renderInput={(params) => <TextField size="small" sx={{width:"100%"}} {...params} />}
                            />
                          </LocalizationProvider>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={5.7} my="5px" sx={{display:"flex",alignItems:"center"}}>
                      <Box sx={{width:"100%"}}>
                        <Box sx={{mt:"40px"}}>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DesktopDatePicker
                              label="End"
                              inputFormat="MM/DD/YYYY"
                              value={values.periodEndDate}
                              onChange={(e)=> setFieldValue("periodEndDate",e)}
                              renderInput={(params) => <TextField size="small" sx={{width:"100%"}} {...params} />}
                            />
                          </LocalizationProvider>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
              {/* <Box sx={{my:"3px"}}>
                <Grid container justifyContent="space-between" alignItems="center">
                  <Grid item container gap={2} xs={12} md={7}>
                    <Grid item xs={12} md={5.7} my="5px">
                      <Box sx={{width:"100%" }}>
                        <Box>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DesktopDatePicker
                              // label="Date desktop"
                              inputFormat="MM/DD/YYYY"
                              value={dateValue}
                              onChange={handleChange}
                              renderInput={(params) => <TextField size="small" sx={{width:"100%"}} {...params} />}
                            />
                          </LocalizationProvider>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={5.7} my="5px">
                      <Box sx={{width:"100%"}}>
                        <Box>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <TimePicker
                              // label="Time"
                              value={dateValue}
                              onChange={handleChange}
                              ampm={ampm}
                              renderInput={(params) => <TextField size="small" sx={{width:"100%"}} {...params} />}
                            />
                          </LocalizationProvider>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Box> */}
            </> : <Box pb={7}></Box>
          }
          
          <Box sx={{mt:"80px",mb:"20px",border:"1px solid #E1E1E6",borderRadius:"8px",p:"24px"}}>
              <Box sx={{width:"100%",my:"15px"}}>
                <TextInputField 
                  label='Subject :'
                  name='subject' 
                  value={values.subject} 
                  onChangeHandler={handleChange} 
                  onBlurHandler={handleBlur} 
                  placeholder='Subscription bonus' 
                  errors={errors.subject} 
                  touched={touched.subject}
                />
                {/* <FieldTitle
                  sx={{
                    fontSize: {xs:"13px",md:"14px"},
                    fontWeight: "500",
                    my:"10px",
                    color:"#545359"
                  }}
                >
                  Subject :
                </FieldTitle>
                <OutlinedInput
                  placeholder="Subscription bonus"
                  size="small"
                  name='subject'
                  value={values.subject} 
                  onChange={handleChange}
                  onBlur={handleBlur} 
                  errors={errors.subject} 
                  touched={touched.subject}
                  sx={{
                    backgroundColor: "#F6F6F6",
                    width: "100%",
                    // height: "40px",
                    fontSize: "14px",
                  }}
                /> */}
              </Box>
              <Box sx={{width:"100%",my:"15px"}}>
                <Typography sx={{my:"10px",color:"#545359",fontSize:{xs:"13px",md:"14px"},fontWeight:"500"}}>Customer Notes</Typography>
                {/* <Box sx={{border:"1px solid #E1E1E6",borderRadius:"6px"}}> */}
                  <CustomTextarea
                    multiline
                    rows={12}
                    placeholder="Good news has arrived !!


                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    
                    "
                    name='description' 
                    value={values.description} 
                    onChangeHandler={handleChange} 
                    onBlurHandler={handleBlur} 
                    errors={errors.description} 
                    touched={touched.description}
                    />
                {/* </Box> */}
                {/* <FieldTitle
                  sx={{
                    fontSize: {xs:"13px",md:"14px"},
                    fontWeight: "500",
                    my:"10px",
                    color:"#545359"
                  }}
                >
                  Customer Notes
                </FieldTitle>
                  <OutlinedInput
                    multiline
                    rows={12}
                    placeholder="Good news has arrived !!


                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    
                    "
                    size="small"
                    name='description'
                    value={values.description} 
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    errors={errors.description} 
                    touched={touched.description}
                    sx={{
                      backgroundColor: "#F6F6F6",
                      width: "100%",
                      fontSize: "14px",
                    }}
                  /> */}
              </Box>
              <Box sx={{width:"100%",my:"10px"}}>
                <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center"}}>
                  <Box sx={{width:"60%",display:"flex",justifyContent:"space-around",alignItems:"center",mr:"20px",p:"10px",mb:"15px"}}>
                      {
                      moreEditTextIconsArr && moreEditTextIconsArr.map((item,index)=> (
                          <Box sx={{width:"16px",height:"16px",my:"3px"}} key={index}>
                              <img src={item.imageSrc} alt="moreIcon"
                              style={{width:"100%",height:"100%"}} 
                              />
                          </Box>
                      ))
                      }
                      {/* <Box sx={{width:"16px",height:"16px",my:"3px"}} component="button" onClick={onButtonClick}> */}
                      <Box sx={{width:"16px",height:"16px",my:"3px"}} >
                        <input
                          // style={{ display: "none" }}
                          // accept=".zip,.rar"
                          // ref={inputFile}
                          // onChange={handleFileUpload}
                          type="file"
                          onChange={(e)=>setFieldValue('image',e.target.files[0])}
                          />
                          {/* <input
                          style={{ display: "none" }}
                          // accept=".zip,.rar"
                          ref={inputFile}
                          // onChange={handleFileUpload}
                          onChange={(e)=> formik.setFieldValue('image',e.target.files[0])}
                          type="file"
                          /> */}
                          {/* <img src="assets/moreEditTextIcons/linkIcon.png" alt="moreIcon"
                          style={{width:"100%",height:"100%"}} 
                          /> */}
                      </Box>
                  </Box>
                  <Box sx={{ml:"10px"}}>
                    {/* <Button variant="contained" disableRipple sx={{borderColor:"unset",bgcolor:"#2B817B",fontWeight:"500",fontSize:"14px",minWidth:"auto",'&:hover':{bgcolor:"#2B817B",borderColor:"unset"}}} endIcon={<SendIcon />}>Send</Button> */}
                    {/* <Button variant="contained" disableRipple sx={{borderColor:"unset",bgcolor:"#2B817B",fontWeight:"500",fontSize:"14px",minWidth:"auto",'&:hover':{bgcolor:"#2B817B",borderColor:"unset"}}} endIcon={<img src="assets/images/messageSendIcon.svg" alt="messageSendIcon"  style={{width:"auto",height:"auto"}} />} onClick={handleOpenModal && handleOpenModal}>Send</Button> */}
                    <Button variant="contained" disableRipple sx={{borderColor:"unset",bgcolor:"#2B817B",fontWeight:"500",fontSize:"14px",minWidth:"auto",'&:hover':{bgcolor:"#2B817B",borderColor:"unset"}}} endIcon={<img src="assets/images/messageSendIcon.svg" alt="messageSendIcon"  style={{width:"auto",height:"auto"}} />} onClick={handleOpenConfirm}>Send</Button>
                  </Box>
                </Box>
              </Box>
          </Box>

          <CustomizedModal
          title="Confirm Dialog"
          aria-labelledby="customized-dialog-title"
          open={isOpenConfirmDialog}
          handleClose={handleCloseConfirm}
          actionBtnsText={['Discard','Yes, sure']}
          actionBtn1OnClickHandler={emailDiscardHandler}
          actionBtn2OnClickHandler={handleSubmit}
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
          {/* <Box sx={{my:"10px"}}>
            <TextInputField 
              label='Email'
              name='email' 
              value={values.email} 
              onChangeHandler={handleChange} 
              onBlurHandler={handleBlur} 
              placeholder='Enter your email address' 
              errors={errors.email} 
              touched={touched.email}
            />
          </Box>
          <Box sx={{my:"10px"}}>
            <TextInputField 
              label='Password'
              name='password' 
              value={values.password} 
              onChangeHandler={handleChange} 
              onBlurHandler={handleBlur} 
              placeholder='Enter your password' 
              errors={errors.password} 
              touched={touched.password}
              isPasswordField={true}
            />
          </Box>
          <Box sx={{my:"20px"}}>
            <Typography sx={{color:"#2B817B",fontSize:"14px",fontWeight:"400"}}><Link style={{color:"#2B817B"}} to="#">Forgot the password ?</Link></Typography>
          </Box>
          <Box sx={{mt:"40px",mb:"20px"}}>
            <Button type='submit' sx={{py:"12px",borderRadius:"8px",backgroundColor:"#2B817B",textTransform:"capitalize","&:hover":{
              backgroundColor: "#2B817B"
            }}} variant="contained" fullWidth >Login</Button>
          </Box> */}
        </Box>
      </Box>
    </>
  );
};

export default EmailForm;

















// onSubmit: (values, action) => {
//   console.log("compose email values => ", values);
//   // console.log("values.date formated => ", moment(values.date).format('YYYY-MM-DD'));
//   // console.log("values.time formated => ", moment(values.time).format('HH:mm'));
//   // console.log("values.time formated => ", values.time.toLocaleString('en-US', {hour12: false,
//     // }));

//   // const formatedDate = moment(values?.time).format('HH:mm')

//   let formData = new FormData(); //formdata object
    
//   // Object.keys(values).map((keys) => {
//   //   formData.append(keys, values[keys])
//   // });

//   formData.append("from", values.from)
//   formData.append("reply", values.reply)
//   formData.append("date", values.date)
//   formData.append("time", values.time)
//   // formData.append("date", moment(values.date).format('YYYY-MM-DD'))
//   // formData.append("time", formatedDate)
//   // formData.append("time", values.time.toLocaleString('en-US', {
//   //   hour12: false,
//   // }))
//   formData.append("subject", values.subject)
//   formData.append("description", values.description)
//   formData.append("period", values.period)
//   formData.append("image", values.image)
//   formData.append("status", "sent")

//   if(values.email === "" || values.email === null || values.email === undefined){
//     console.log("compose email values with email's value equal to null value => ", values);
//     formData.append("to", values.to)
//   }else{
//     console.log("compose email values with email's value not equal to null value => ", values);
//     formData.append("to", values.email)
//   }
//   if(values.period === true){
//     // console.log("period value == true => ", values.period);
//     // formData.append("periodStartDate", moment(values.periodStartDate).format('YYYY-MM-DD'))
//     // formData.append("periodEndDate", moment(values.periodEndDate).format('YYYY-MM-DD'))
//     formData.append("periodStartDate", values.periodStartDate)
//     formData.append("periodEndDate", values.periodEndDate)
//   }

//   // if(formData.has("date")){
//     let date = formData.get("date")
//     date = moment(date).format('YYYY-MM-DD')
//     formData.set("date", date)

//     let time = formData.get("time")
//     time = moment(time).format('HH:mm')
//     formData.set("time", time)

//     let periodStartDate = formData.get("periodStartDate")
//     periodStartDate = moment(periodStartDate).format('YYYY-MM-DD')
//     formData.set("periodStartDate", periodStartDate)

//     let periodEndDate = formData.get("periodEndDate")
//     periodEndDate = moment(periodEndDate).format('YYYY-MM-DD')
//     formData.set("periodEndDate", periodEndDate)
//   // }

//   Object.keys(values).map((keys) => {
//     console.log(`keys ${keys} = ${formData.get(keys)}`)
//   });
//   console.log(`keys status = ${formData.get("status")}`)


//   // // Get year, month, and day part from the date
//   // var year = values.date.toLocaleString("default", { year: "numeric" });
//   // var month = values.date.toLocaleString("default", { month: "2-digit" });
//   // var day = values.date.toLocaleString("default", { day: "2-digit" });

//   // // Generate yyyy-mm-dd date string
//   // var formattedDate = year + "-" + month + "-" + day;
//   // console.log("formattedDate ",formattedDate);  // Prints: 04-05-2022


  
//   // composeEmail(formData).then((res)=>{
//   //   if(res?.data){
//   //     console.log("compose email form submitted => ", res?.data);
//   //     console.log("res?.data => ", res?.data);
//   //     swal("Success!", `${res?.data?.message}`, "success");
//   //   }
//   // })
//   // console.log("res?.data => ",  moment('171054','HHmmss').format('HH:mm:ss'));
//   // console.log("res?.data => ", new Date(values.time).toLocaleTimeString());
//   // console.log("res?.data 24h format => ", moment(values.time).format('HH:mm'));
//   // console.log("res?.data => ",  moment(values.time,'HHmmss').format('HH:mm:ss'));
//   // action.resetForm();
// },