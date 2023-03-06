import React from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import { styled, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
export default function CustomerButtonGroup() {
  const [flag1, setFlag1] = React.useState(true);
  const [flag2, setFlag2] = React.useState(false);
  const [flag3, setFlag3] = React.useState(false);
  const [flag4, setFlag4] = React.useState(false);

  const handleClick1 = () => {
    setFlag1(!flag1);
    setFlag2(false);
    setFlag3(false);
    setFlag4(false);
  };
  const handleClick2 = () => {
    setFlag2(!flag2);
    setFlag1(false);
    setFlag3(false);
    setFlag4(false);
  };

  const handleClick3 = () => {
    setFlag3(!flag3);
    setFlag1(false);
    setFlag2(false);
    setFlag4(false);
  };

  const handleClick4 = () => {
    setFlag4(!flag4);
    setFlag1(false);
    setFlag2(false);
    setFlag3(false);
  };

  const Button1 = styled(Button)(({ theme }) => ({
    fontSize: "12px",
    fontWeight: "400",
    lineHeight: "16px",
    textTransform: "capitalize",
    [theme.breakpoints.down("sm")]: {
      fontSize: "8px",
    },
  }));

  const Typo1 = styled(Typography)(({ theme }) => ({
    fontSize: "12px",
    fontWeight: "400",
    lineHeight: "16px",
    color: "#9EA3AE",
    [theme.breakpoints.up("sm")]: {
      //   width: 'auto',
    },
  }));

  return (
    <Box>
      <Box>
        <Typo1>Status :</Typo1>
      </Box>

      <Box mt="8px">
        <ButtonGroup
          orientation="horizontal"
          variant="contained"
          aria-label="outlined primary button group"
          sx={{ height: "24px"  }}
        >
          <Button1
            onClick={handleClick1}
            sx={{
              color: flag1 ? "#F1F6FF" : "#9EA3AE",
              backgroundColor: flag1 ? "#2B817B" : "#F6F6F6",
              "&:hover": {
                backgroundColor: flag1 ? "#2B817B" : "#F6F6F6",
              },
            }}
          >
            Show All
          </Button1>
          <Button1
            onClick={handleClick2}
            sx={{
              color: flag2 ? "#F1F6FF" : "#9EA3AE",
              backgroundColor: flag2 ? "#2B817B" : "#F6F6F6",

              "&:hover": {
                backgroundColor: flag2 ? "#2B817B" : "#F6F6F6",
              },
            }}
          >
            Active
          </Button1>
          <Button1
            onClick={handleClick3}
            sx={{
              color: flag3 ? "#F1F6FF" : "#9EA3AE",
              backgroundColor: flag3 ? "#2B817B" : "#F6F6F6",
              "&:hover": {
                backgroundColor: flag3 ? "#2B817B" : "#F6F6F6",
              },
            }}
          >
            Hold
          </Button1>
          <Button1
            onClick={handleClick4}
            sx={{
              color: flag4 ? "#F1F6FF" : "#9EA3AE",
              backgroundColor: flag4 ? "#2B817B" : "#F6F6F6",
              "&:hover": {
                backgroundColor: flag4 ? "#2B817B" : "#F6F6F6",
              },
            }}
          >
            Terminated
          </Button1>
        </ButtonGroup>
      </Box>
    </Box>
  );
}
