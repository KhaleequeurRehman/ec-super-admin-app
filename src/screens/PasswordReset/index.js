import {
  Box,
  Button,
  createTheme,
  Grid,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useVerifyOTPMutation } from "../../api/authenticate";
import swal from "sweetalert";

const PasswordReset = () => {
  
  const navigate = useNavigate();
  const [verifyOTPMutationRequest, { isLoading }] = useVerifyOTPMutation();

  const [formState, setFormState] = useState({
    email:"",
    newPassword:"",
    otp:"",
  });

const onChangeHandler = (e) => {
  setFormState({
    ...formState,[e.target.name]:e.target.value
  })
}


  const theme = createTheme({
    palette: {
      loginField: {
        main: "#E1E1E",
      },
      loginField2: {
        main: "#E1E1E",
      },
    },
  });

  const handleSendRequest = () => {
    console.log('password reset formState => ', formState)
    verifyOTPMutationRequest(formState).then((res) => {
      if (res.data) {
        console.log("res.data => ",res.data)
        // localStorage.setItem(
        //   "admin-token",
        //   JSON.stringify(res.data.data.token)
        // );
        // delete res.data.data.token;
        // localStorage.setItem("user", JSON.stringify(res.data.data));
        // swal("Success!", `${res.data.message}`, "success");
        navigate("/")
      };
    });
  };
  
  return (
    <>
      <Box sx={{ mt: 4 }}>
        <Typography
          variant="h4"
          textAlign="center"
          component="div"
          sx={{
            color: "#1A1824",
            fontWeight: "600",
            fontFamily: "Outfit",
            fontSize: "24px",
          }}
        >
          Reset Password
        </Typography>

        <Typography
          textAlign="center"
          variant="body2"
          component="div"
          sx={{
            color: "#9EA3AE",
            fontFamily: "Outfit",
            fontWeight: "400",
            fontSize: "20px",
          }}
        >
          Enter your verfication code which we have sent you via email, password and email.
        </Typography>
      </Box>
      <Link to={-1}>
        <Button
          sx={{ position: "absolute", content: '""', marginTop: "-40px" }}
          disableRipple={true}
        >
          {/* <i className="fa-solid fa-angle-left" style={{ fontSize: '20px', color: '#1A1824' }}></i> */}
          <img
            src="assets/images/leftAngle.svg"
            style={{ fontSize: "20px", color: "#1A1824" }}
          />
        </Button>
      </Link>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minheight: "100vh" }}
      >
        <Grid item xs={12} sx={{ marginTop: "80px" }}>
          <Box
            sx={{
              maxWidth: "450px",
              alignItems: "center",
              backgroundColor: "transparent",
              height: "auto",
            }}
          >
            <Box sx={{ py: 3, px: 5 }}>
              <form>
                <ThemeProvider theme={theme}>
                  <Box sx={{my:"10px"}}>
                    <label
                      style={{
                        fontSize: "14px",
                        fontFamily: "Outfit",
                        fontWeight: "600",
                        color: "#1A1824",
                        mb: 1,
                      }}
                    >
                      Email
                    </label>
                    <TextField
                      sx={{
                        marginBottom: 3,
                        marginTop: "5px",
                        width: "100%",
                        background: "#F6F6F6",
                        height: "40px",
                        border: "1px solid #E1E1E6",
                        borderRadius: "6px",
                        "&:hover": { color: "#F6F6F6" },
                        color: "#E1E1E",
                      }}
                      color={"loginField"}
                      name="email"
                      value={formState.email}
                      size="small"
                      type="email"
                      autoFocus={true}
                      onChange={onChangeHandler}
                    />
                  </Box>
                
                  <Box sx={{my:"10px"}}>
                    <label
                      style={{
                        fontSize: "14px",
                        fontFamily: "Outfit",
                        fontWeight: "600",
                        color: "#1A1824",
                        mb: 1,
                      }}
                    >
                      Verification Code
                    </label>
                    <TextField
                      type="number"
                      sx={{
                        marginBottom: 3,
                        marginTop: "5px",
                        width: "100%",
                        background: "#F6F6F6",
                        height: "40px",
                        border: "1px solid #E1E1E6",
                        borderRadius: "6px",
                        "&:hover": { color: "#F6F6F6" },
                        color: "#E1E1E",
                      }}
                      color={"loginField"}
                      name="otp"
                      value={formState.otp}
                      size="small"
                      onChange={onChangeHandler}
                    />
                  </Box>

                  <Box sx={{my:"10px"}}>
                    <label
                      style={{
                        fontSize: "14px",
                        fontFamily: "Outfit",
                        fontWeight: "600",
                        color: "#1A1824",
                        mb: 1,
                      }}
                    >
                      New Password
                    </label>
                    <TextField
                      sx={{
                        marginBottom: 3,
                        marginTop: "5px",
                        width: "100%",
                        background: "#F6F6F6",
                        height: "40px",
                        border: "1px solid #E1E1E6",
                        borderRadius: "6px",
                        "&:hover": { color: "#F6F6F6" },
                        color: "#E1E1E",
                      }}
                      color={"loginField"}
                      name="newPassword"
                      value={formState.newPassword}
                      size="small"
                      onChange={onChangeHandler}
                    />
                  </Box>

                  <Button
                    disableRipple={true}
                    style={{
                      border: 2,
                      background: "#2B817B",
                      width: "100%",
                      color: "white",
                      textTransform: "none",
                    }}
                    disabled={isLoading}
                    onClick={handleSendRequest}
                  >
                    <span
                      style={{
                        color: "#FFFFFF",
                        fontFamily: "Outfit",
                        fontSize: "16px",
                        textDecorationLine: "underline",
                        textDecorationColor: "#2B817B",
                      }}
                    >
                      Sumbit
                    </span>
                  </Button>
                </ThemeProvider>
              </form>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default PasswordReset