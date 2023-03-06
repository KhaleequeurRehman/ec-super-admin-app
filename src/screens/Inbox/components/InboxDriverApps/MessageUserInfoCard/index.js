import React from "react";
import {useState} from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

const MessageUserInfoCard = ({
  imageSrc,
  name,
  email,
  duration,
  description,
  nameSx,
  emailSx,
  durationSx,
  descriptionSx,
  hasDivider,
}) => {
  const [activeCard, setActiveCard] = useState(false);
  return (
    <>
      <Box
        onClick={() => {setActiveCard(current => !current)}}
        sx={{
            border: activeCard ? "1px solid #80B3B0" : "1px solid #E1E1E6", 
            p: "16px",
            borderRadius: "6px"
         }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", flexWrap: "wrap", my: "5px" }}>
            <Box sx={{ width: "40px", height: "40px", borderRadius: "50%" }}>
              <img
                src={imageSrc && imageSrc}
                alt="userIcon"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
            <Box sx={{ ml: "15px" }}>
              <Typography
                sx={{
                  fontSize: { xs: "13px", md: "16px" },
                  fontWeight: "600",
                  color: "#1A1824",
                  ...nameSx,
                }}
              >
                {name && name}
              </Typography>
              {/* <Typography sx={nameSx ? nameSx : {fontSize:{xs:"13px",md:"16px"},fontWeight:"500",color:"#1A1824"}}>{name && name}</Typography> */}
              <Typography
                sx={{
                  fontSize: { xs: "10px", md: "12px" },
                  fontWeight: "400",
                  color: "#9EA3AE",
                  ...emailSx,
                }}
              >
                {email && email}
              </Typography>
              {/* <Typography sx={emailSx? emailSx : {fontSize:{xs:"10px",md:"12px"},fontWeight:"400",color:"#9EA3AE"}}>{email && email}</Typography> */}
            </Box>
          </Box>
          <Box sx={{ my: "5px" }}>
            <Typography
              sx={{
                fontSize: { xs: "10px", md: "12px" },
                fontWeight: activeCard ? "600" : "400",
                color: activeCard ? "#2B817B" :  "#9EA3AE",
                ...durationSx,
              }}
            >
              {duration && duration}
            </Typography>
            {/* <Typography sx={durationSx? durationSx : {fontSize:{xs:"10px",md:"12px"},fontWeight:"400",color:"#2B817B"}}>{duration && duartion}</Typography> */}
          </Box>
        </Box>

        {hasDivider && (
          <Box mt="16px">
            {" "}
            <Divider variant="middle" />
          </Box>
        )}

        <Box sx={{ mt: "20px", mb: "5px" }}>
          <Typography
            sx={{
              fontSize: { xs: "11px", md: "12px" },
              fontWeight: activeCard ? "600" : "400",
              color: activeCard ? "#1A1824" : "#9EA3AE",
              ...descriptionSx,
            }}
          >
            {description && description}
          </Typography>
          {/* <Typography sx={descriptionSx? descriptionSx : {fontSize:{xs:"13px",md:"14px"},fontWeight:"400",color:"#9EA3AE"}}>{description && description}</Typography> */}
        </Box>
      </Box>
    </>
  );
};

export default MessageUserInfoCard;
