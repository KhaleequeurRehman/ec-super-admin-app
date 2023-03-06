import React from "react";
import { Box, Typography, Button, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ChefDetails({ chefImage, chefName, stars, reviews, description }) {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Box
        sx={{
          marginTop: 2,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img src={chefImage} alt="chef icon" />
          <Box
          //   sx={{
          //     display:'flex',
          //     flexDirection:'column',
          //     alignItems:'center'
          //   }}
          >
            <Typography
              sx={{
                fontFamily: "Outfit",
                fontSize: { md: "20px", xs: "16px" },
                fontWeight: "600",
                padding: "0px 10px 0px 10px",
              }}
            >
              {chefName}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img
                style={{ margin: "0px 10px 0px 10px" }}
                src="assets/foodmenuimages/star.png"
                alt="star icon"
              />
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: "600",
                  lineHeight: "18px",
                  color: "#1A1824",
                }}
              >
                {stars}
              </Typography>
              <Typography
                sx={{
                  padding: "10px",
                  fontSize: "12px",
                  fontWeight: "400",
                  color: "#9EA3AE",
                }}
              >
                ({reviews}) Reviews
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <Button
            sx={{
              "&:hover": { backgroundColor: "none" },
            }}
            onClick={()=> navigate("/inbox")}
          >
            <img src="assets/foodmenuimages/msgicon.png" />
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: 1,
        }}
      >

      </Box>
    </React.Fragment>
  );
}

export default ChefDetails;
