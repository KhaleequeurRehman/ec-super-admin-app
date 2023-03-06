import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const CheckEmail = () => {
  const navigate = useNavigate()

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
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
          Check Your Email
        </Typography>
      </Box>
      <Link to={-1}>
        <Button
          sx={{ position: "absolute", content: '""', marginTop: "40px" }}
          disableRipple={true}
        >
          <img
            src="assets/images/leftAngle.svg"
            style={{ fontSize: "20px", color: "#1A1824" }}
          />
        </Button>
      </Link>

      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={12} sx={{ marginTop: "80px" }}>
            <Box textAlign="center">
              <img
                alt=""
                style={{ width: "112px", height: "112px" }}
                src="assets/images/chekEmail1083.png"
              />
            </Box>

            <Typography
              variant="body2"
              textAlign="center"
              component={"div"}
              sx={{
                color: "545359",
                marginTop: "24px",
                fontFamily: "Outfit",
                fontWeight: "400",
                fontSize: "16px",
              }}
            >
              We have sent a password recover instruction <br />
              to your email
            </Typography>
            <a href={"https://mail.google.com/mail/u/0/#inbox"} target="_blank">
              <Button
                disableRipple={true}
                style={{
                  border: 2,
                  background: "#2B817B",
                  width: "100%",
                  color: "white",
                  marginTop: "20px",
                  textTransform: "none",
                }}
              >
                <span
                  style={{
                    fontFamily: "Outfit",
                    textDecorationLine: "underline",
                    textDecorationColor: "#2B817B",
                    color: "#FFFFFF",
                    fontFamily: "Outfit",
                    fontSize: "16px",
                  }}
                  onClick={()=> setTimeout(()=> navigate('/passwordReset'),1000)}
                >
                  Open email app
                </span>
              </Button>
            </a>

            {/* <Button
                disableRipple={true}
                style={{
                  border: 2,
                  background: "#2B817B",
                  width: "100%",
                  color: "white",
                  marginTop: "20px",
                  textTransform: "none",
                }}
              >
                <span
                  style={{
                    fontFamily: "Outfit",
                    textDecorationLine: "underline",
                    textDecorationColor: "#2B817B",
                    color: "#FFFFFF",
                    fontFamily: "Outfit",
                    fontSize: "16px",
                  }}
                  onClick={()=> navigate('/passwordReset')}
                >
                  Reset Password
                </span>
              </Button> */}

            <Typography
              variant="body2"
              component={"div"}
              textAlign="center"
              sx={{
                fontFamily: "Outfit",
                fontsize: "16px",
                marginTop: "20px",
                color: "#2B817B",
              }}
            >
              Skip, i’ll confirm later
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ margin: "30px" }}>
        <Typography
          textAlign="center"
          variant="body1"
          component={"div"}
          sx={{
            color: "545359",
            fontFamily: "Outfit",
            fontWeight: "400",
            fontSize: "16px",
            marginBottom: "10px",
          }}
        >
          Did not recieve the email ? Check your spam filter
        </Typography>
        <Link to={-1}>
          <Typography
            variant="body2"
            textAlign="center"
            component={"div"}
            sx={{
              letterSpacing: "1px",
              fontsize: "16px",
              fontFamily: "Outfit",
              color: "#2B817B",
            }}
          >
            <span
              style={{
                fontFamily: "Outfit",
                textDecorationLine: "underline",
                textDecorationColor: "#fff",
                color: "#2B817B",
                fontFamily: "Outfit",
                fontSize: "16px",
              }}
            >
              {" "}
              Try another email address
            </span>
          </Typography>
        </Link>
      </Box>
    </div>
  );
};

export default CheckEmail