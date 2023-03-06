import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import TextInputField from "../TextInputField"
import { Link, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import { useFormik } from "formik";
import { signUpSchema } from "../../schemas";
import styles from "./LoginForm.module.sass"
import { useGetAuthenticateMutation } from "../../api/authenticate";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(3),
}));

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const [flag, setFlag] = useState(true)
  const navigate = useNavigate();
  const [authenticate, { isLoading }] = useGetAuthenticateMutation()

  const { values, errors, touched, handleBlur, handleChange, handleSubmit,setFieldValue } =
  useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      console.log("loginForm => ", values);
      authenticate(values).then((res) => {
        if (res.data) navigate("/dashboard");
      });
      action.resetForm();
    },
  });

  useEffect(() => {
    const token = localStorage.getItem("admin-token");
    setFlag(false)
    if (token){
      // setFlag(true)
      navigate("/dashboard");
    }
    // else{
    //   setFlag(false)
    // }
    // localStorage.removeItem("token");
    // localStorage.removeItem("user");
  }, []);

  flag && console.log("flag => ",flag)
  return (
    <>
    {
      // flag !== true ? 
      flag == false ? 
      <>
        <Grid minHeight="100vh" container justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={8} md={6}>
            <Item>
              <Box className={styles.imageWrapper} sx={{textAlign:"center"}}>
                  {/* <img src="assets/images/eatcoastlogosvg.svg" alt="logopic" /> */}
                  <img src="assets/images/eatcostlogo1.png" alt="logopic" />
              </Box>
              <Box className={styles.textContentWrapper} sx={{my:"20px",textAlign:"center"}}>
                <Typography sx={{fontSize:"20px",fontWeight:"600",mt:"6px"}}>Welcome back !</Typography>
                <Typography sx={{color:"#9EA3AE",fontSize:"16px",fontWeight:"400",mt:"6px"}}>Enter your credential to access your account.</Typography>
              </Box>
              <Box component="form" onSubmit={handleSubmit}  autoComplete="off">
                <Box sx={{my:"10px"}}>
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
                  <Typography sx={{color:"#2B817B",fontSize:"14px",fontWeight:"400"}}><Link style={{color:"#2B817B"}} to="/forgotpass">Forgot the password ?</Link></Typography>
                </Box>
                <Box sx={{mt:"40px",mb:"20px"}}>
                  <Button type='submit' sx={{py:"12px",borderRadius:"8px",backgroundColor:"#2B817B",textTransform:"capitalize","&:hover":{
                    backgroundColor: "#2B817B"
                  }}} variant="contained" disabled={isLoading} fullWidth >Login</Button>
                </Box>
              </Box>
            </Item>
          </Grid>
        </Grid>
      </>
      :
      ""
    }
    </>
  );
};

export default LoginForm;










// import React, { useEffect } from "react";
// import swal from "sweetalert";
// import Typography from "@mui/material/Typography";
// import Grid from "@mui/material/Grid";
// import { styled } from "@mui/material/styles";
// import Paper from "@mui/material/Paper";
// import Box from "@mui/material/Box";
// import TextInputField from "../TextInputField"
// import { Link, useNavigate } from "react-router-dom";
// import Button from '@mui/material/Button';
// import { useFormik } from "formik";
// import { signUpSchema } from "../../schemas";
// import styles from "./LoginForm.module.sass"
// import { useGetAuthenticateMutation } from "../../api/authenticate";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(3),
// }));

// const initialValues = {
//   email: "",
//   password: "",
// };

// const LoginForm = () => {

//   const navigate = useNavigate();
//   const [authenticate, { isLoading }] = useGetAuthenticateMutation()

//   const { values, errors, touched, handleBlur, handleChange, handleSubmit,setFieldValue } =
//   useFormik({
//     initialValues,
//     validationSchema: signUpSchema,
//     onSubmit: (values, action) => {
//       console.log("loginForm => ", values);
//       authenticate(values).then((res) => {
//         if (res.data) navigate("/dashboard");
//       });
//       action.resetForm();
//     },
//   });

//   useEffect(() => {
//     const token = localStorage.getItem("admin-token");
//     if (token) navigate("/dashboard");
//     // localStorage.removeItem("token");
//     // localStorage.removeItem("user");
//   }, []);

//   return (
//     <>
//       <Grid minHeight="100vh" container justifyContent="center" alignItems="center">
//         <Grid item xs={12} sm={8} md={6}>
//           <Item>
//             <Box className={styles.imageWrapper} sx={{textAlign:"center"}}>
//                 {/* <img src="assets/images/eatcoastlogosvg.svg" alt="logopic" /> */}
//                 <img src="assets/images/eatcostlogo1.png" alt="logopic" />
//             </Box>
//             <Box className={styles.textContentWrapper} sx={{my:"20px",textAlign:"center"}}>
//               <Typography sx={{fontSize:"20px",fontWeight:"600",mt:"6px"}}>Welcome back !</Typography>
//               <Typography sx={{color:"#9EA3AE",fontSize:"16px",fontWeight:"400",mt:"6px"}}>Enter your credential to access your account.</Typography>
//             </Box>
//             <Box component="form" onSubmit={handleSubmit}  autoComplete="off">
//               <Box sx={{my:"10px"}}>
//                 <TextInputField 
//                   label='Email'
//                   name='email' 
//                   value={values.email} 
//                   onChangeHandler={handleChange} 
//                   onBlurHandler={handleBlur} 
//                   placeholder='Enter your email address' 
//                   errors={errors.email} 
//                   touched={touched.email}
//                 />
//               </Box>
//               <Box sx={{my:"10px"}}>
//                 <TextInputField 
//                   label='Password'
//                   name='password' 
//                   value={values.password} 
//                   onChangeHandler={handleChange} 
//                   onBlurHandler={handleBlur} 
//                   placeholder='Enter your password' 
//                   errors={errors.password} 
//                   touched={touched.password}
//                   isPasswordField={true}
//                 />
//               </Box>
//               <Box sx={{my:"20px"}}>
//                 <Typography sx={{color:"#2B817B",fontSize:"14px",fontWeight:"400"}}><Link style={{color:"#2B817B"}} to="/forgotpass">Forgot the password ?</Link></Typography>
//               </Box>
//               <Box sx={{mt:"40px",mb:"20px"}}>
//                 <Button type='submit' sx={{py:"12px",borderRadius:"8px",backgroundColor:"#2B817B",textTransform:"capitalize","&:hover":{
//                   backgroundColor: "#2B817B"
//                 }}} variant="contained" disabled={isLoading} fullWidth >Login</Button>
//               </Box>
//             </Box>
//           </Item>
//         </Grid>
//       </Grid>
//     </>
//   );
// };

// export default LoginForm;