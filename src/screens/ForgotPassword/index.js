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
import { useForgotPasswordMutation } from "../../api/authenticate";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [forgotPasswordRequest, { isLoading }] = useForgotPasswordMutation();
  const [email, setEmail] = useState("");

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
    forgotPasswordRequest({ email }).then((res) => {
      if (res.data) navigate("/checkemail");
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
          Forgot Password
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
          Enter your account and we will send instructions
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
                    defaultValue=""
                    size="small"
                    type="email"
                    autoFocus={true}
                    onChange={(e) => setEmail(e.target.value)}
                  />
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
                      Send Email
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

export default ForgotPassword