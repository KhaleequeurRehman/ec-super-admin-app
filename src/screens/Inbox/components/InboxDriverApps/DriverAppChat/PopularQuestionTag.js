import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const Data = [
  {
    title: "How do I receive an order?",
    width: "190px",
  },
  {
    title: "How to change the location my location ?",
    width: "266px",
  },
  {
    title: "How do I see my spending?",
    width: "191px",
  },
 
];

const Title = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "18px",
  lineHeight: "26px",
  color: "#1A1824",
  [theme.breakpoints.up('xl')]:{
    fontSize: "22px",
}
}));

const Typo1 = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "12px",
  color: "#2B817B",
  lineHeight: "16px",
  padding: "8px, 24px, 8px, 24px",
}));

const TypoBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#F0FAF9",
  textAlign: "center",
  padding: "8px, 24px, 8px, 24px",
  borderRadius: "6px",
  //   width: "190px",
  height: "32px",
}));



export default function PopularQuestionTag() {
  return (
    <>
      <Box>
      

        <Box  sx={{ display: "flex", justifyContent: "center" }}>
          <Grid container spacing={1}>
            {Data.map((item,index) => {
              return (
                  <Grid item key={index}>
                    <Chip
                      label={item.title}
                      sx={{
                        borderRadius: "16px",
                        padding: "10px, 16px, 10px, 16px",
                        backgroundColor: "#F0FAF9",
                        color: "#1A1824",
                        fontWeight: 500,
                        fontSize: {xl: "16px", lg: "12px", md: "12px", sm: "12px", xs: "12px"},
                        lineHeight: "16px",
                        height: "36px",
                        width: {xl: "100%", lg: `${item.width}`, md: `${item.width}`, sm: `${item.width}`, xs: `${item.width}`},
                      }}
                    />
                  </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </>
  );
}
