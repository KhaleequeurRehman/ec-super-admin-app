import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
const Data = [
  {
    title: "Muhammad Bairos",
    width: "190px",
  },
  {
    title: "Syamsyul hidayat",
    width: "266px",
  },
  {
    title: "Alybaba",
    width: "191px",
  },
  {
    title: "Alybaba",
    width: "175px",
  },
  {
    title: "Alybaba",
    width: "193px",
  },
  {
    title: "Muhammad Bairos",
    width: "292px",
  },

  {
    title: "+5 are selectected",
    color: "#559A95",
    icon: CheckCircleIcon,
  },
];

const Title = styled(Typography)(({ theme }) => ({
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

export default function SendNotificationChip() {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };
  return (
    <>
      <Box>
        <Box mb="16px">
          <Title>Send to : </Title>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Grid container spacing={1}>
            {Data.map((item,index) => {
              return (
                  <Grid item key={index}>
                    <Chip
                      label={item.title}
                      // deleteIcon={<item.icon sx={{fill: "#2B817B", width: "16px", height: "16px"}}/>}
                      onDelete={item.icon && handleDelete }
                      onClick={handleClick}
                      sx={{
                        borderRadius: "12px",
                        padding: "8px, 24px, 8px, 24px",
                        backgroundColor: "#F6F6F6",
                        color: `${item.color ? item.color : "#1A1824"}`,
                        fontWeight: 400,
                        fontSize: {
                          xl: "16px",
                          lg: "12px",
                          md: "12px",
                          sm: "12px",
                          xs: "12px",
                        },
                        lineHeight: "16px",
                        height: "24px",
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
