import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material";
import { ContentGridCard } from "./ContentGridCard";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";



const data = [
    { 
        title: "Healthy food recommendati ... ",
        subTitle: "Lorem Ipsum is simply dummy text of the printing and .....",
        timeTitle: "9 Hours Ago",
        faqTitle: "FAQ",
        image: "./assets/images/iMac Memoji.png"
    },
    { 
        title: "Healthy food recommendati ... ",
        subTitle: "Lorem Ipsum is simply dummy text of the printing and .....",
        timeTitle: "9 Hours Ago",
        faqTitle: "FAQ",
        image: "./assets/images/iMac Memoji.png"
    },
    { 
        title: "Healthy food recommendati ... ",
        subTitle: "Lorem Ipsum is simply dummy text of the printing and .....",
        timeTitle: "9 Hours Ago",
        faqTitle: "FAQ",
        image: "./assets/images/iMac Memoji.png"
    },
    { 
        title: "Healthy food recommendati ... ",
        subTitle: "Lorem Ipsum is simply dummy text of the printing and .....",
        timeTitle: "9 Hours Ago",
        faqTitle: "FAQ",
        image: "./assets/images/iMac Memoji.png"
    },
    { 
        title: "Healthy food recommendati ... ",
        subTitle: "Lorem Ipsum is simply dummy text of the printing and .....",
        timeTitle: "9 Hours Ago",
        faqTitle: "FAQ",
        image: "./assets/images/iMac Memoji.png"
    },
    { 
        title: "Healthy food recommendati ... ",
        subTitle: "Lorem Ipsum is simply dummy text of the printing and .....",
        timeTitle: "9 Hours Ago",
        faqTitle: "FAQ",
        image: "./assets/images/iMac Memoji.png"
    },
    { 
        title: "Healthy food recommendati ... ",
        subTitle: "Lorem Ipsum is simply dummy text of the printing and .....",
        timeTitle: "9 Hours Ago",
        faqTitle: "FAQ",
        image: "./assets/images/iMac Memoji.png"
    },
    { 
        title: "Healthy food recommendati ... ",
        subTitle: "Lorem Ipsum is simply dummy text of the printing and .....",
        timeTitle: "9 Hours Ago",
        faqTitle: "FAQ",
        image: "./assets/images/iMac Memoji.png"
    }
]


const MainBox = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: "16px",
  border: "1px solid #E1E1E6",
  borderRadius: "6px",
}));

export const ContentEditorGridCards = () => {
  return (
    <div>
      <Box>
        <Grid
          container
          spacing={2}

        >
          {data.map((item, i) => {
            return (
                <Grid xl={4} item lg={6} md={6} sm={12} xs={12} key={i}>
                  <ContentGridCard item = {item} />
                </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};
