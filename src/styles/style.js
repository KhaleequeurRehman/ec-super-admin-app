import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        // primary:{
        //   main:'#2B817B'
        // },
        // secondary:{
        //   main:'#2B817B'
        // },
        greenclr: {
          main: '#2B817B',
        },
        tomatoclr: {
          main: 'tomato',
        },
        // customclr: {
        //   main: '#2B817B',
        //   green: '#2B817B',
        //   black: '#1A1824',
        // }
      },
      typography: {
        fontFamily: "Outfit",
      },
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1536,
        },
      },
})

export default theme