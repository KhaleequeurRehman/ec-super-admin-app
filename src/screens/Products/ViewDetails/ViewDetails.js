import React from "react";
import { Container, Typography, Box,Button } from "@mui/material";
import Layout from "../../Layout";
import arrowRight from "../Components/Assets/Vector.png";
import product_img from "../Components/Assets/product_img.png";
import tag from "../Components/Assets/tag.png";
import ellipse from "../Components/Assets/Ellipse.png";
import ChefDetails from "../Components/ChefDetails/ChefDetails";
import chef from "../Components/Assets/Chef.png";
import MealDetails from "../Components/MealDetails/MealDetails";
import dish from "../Components/Assets/dish.png";
import salad from "../Components/Assets/salad.png";
import sweet from "../Components/Assets/sweet.png";
import CustomIconButton from "../../../components/Button/CustomIconButton";
import { ArrowBack } from "@mui/icons-material"

const product_details = [
  {
    heading_title: "Arabian Kebab, Middle East Special",
    title: "Arabian Kebab, Middle East Special",
    price: "$59.20",
    endData: "2021/10/12",
    img: chef,
    chefName: "Chef Juna Food",
    stars: 4.7,
    reviews: 150,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

const mealPlanDetails = [
  {
    img: dish,
    title: "Main Courrse",
    quantity: "10 dishes",
  },
  {
    img: salad,
    title: "Salad Dishes",
    quantity: "10 dishes",
  },
  {
    img: sweet,
    title: "Sweet Dishes",
    quantity: "10 dishes",
  },
];

const addOnDetaisl = [
  {
    img: dish,
    title: "Juices",
    quantity: "10 dishes",
  },
  {
    img: salad,
    title: "Slide",
    quantity: "10 dishes",
  },
  {
    img: sweet,
    title: "Dipa",
    quantity: "10 dishes",
  },
];

function ViewDetails() {
  return (
    <React.Fragment>
      <Layout>
        {product_details.map((items,index) => {
          return (
            <Container sx={{ display: "flex" }} maxWidth="xl" key={index}>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Outfit",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "14px",
                      lineHeight: "20px",
                      color: "#2B817B",
                    }}
                  >
                    Food Menu
                  </Typography>
                  <img
                    style={{ margin: "0px 30px 0px 30px" }}
                    src={arrowRight}
                    alt="arrow icon"
                  />
                  <Typography
                    sx={{
                      fontFamily: "Outfit",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "14px",
                      lineHeight: "20px",
                      color: "#9EA3AE",
                    }}
                  >
                    {items.heading_title}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    border: "1px solid  #E1E1E6",
                    padding: "20px",
                    borderRadius: "8px",
                    width: "674px",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    marginTop: 2,
                  }}
                >
                  <img src={product_img} alt="Product Image" />
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Outfit",
                        fontSize: { md: "20px", xs: "16px" },
                        fontWeight: "600",
                        marginTop: 2,
                      }}
                    >
                      {items.title}
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItem: "center",
                        marginTop: 2,
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: "400",
                          fontSize: "14px",
                          lineHeight: "140%",
                          fontFamily: "Outfit",
                          color: "#9EA3AE",
                        }}
                      >
                        End Date
                      </Typography>
                      <Typography
                        sx={{
                          color: "#1A1824",
                          fontSize: "16px",
                          fontWeight: "500",
                          lineHeight: "26px",
                        }}
                      >
                        {items.endData}
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img
                      style={{ margin: "0px 10px 0px 0px" }}
                      src={tag}
                      alt="tag icon"
                    />
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: "400",
                        lineHeight: "24px",
                        color: "#9EA3AE",
                      }}
                    >
                      Start from {items.price}
                    </Typography>
                    <img
                      style={{ margin: "0px 20px 0px 20px" }}
                      src={ellipse}
                      alt="ellipse icon"
                    />
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: "400",
                        lineHeight: "24px",
                        color: "#9EA3AE",
                      }}
                    >
                      13 - Oct - 2021
                    </Typography>
                  </Box>

                  <ChefDetails
                    chefImage={items.img}
                    chefName={items.chefName}
                    stars={items.stars}
                    reviews={items.reviews}
                  />
                  <Typography
                    sx={{
                      fontFamily: "Outfit",
                      color: "#1A1824",
                      fontSize: "16px",
                      fontWeight: "600",
                      textTransform: "none",
                    }}
                  >
                    About menu
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",
                      lineHeight: "20px",
                      color: "#545359",
                      marginTop: 1,
                    }}
                  >
                    {items.description}
                  </Typography>
                  <Button
                  sx={{
                    fontSize:'14px',
                    fontWeight:'400',
                    color:'#2B817B',
                    textTransform:"none",
                    textDecoration:'underline'
                  }}
                  >Show More</Button>
                  <Box
                    sx={{
                      marginTop: 5,
                    }}
                  >
                    <CustomIconButton
                      startIcon={""}
                      color={"#2B817B"}
                      textColor={"white"}
                      variant={"contained"}
                      width={"634px"}
                      label={"Edit Menu Details"}
                      icon={<img style={{marginRight:'5px'}} src='./assets/images/edit.png' alt="edit icon" />}
                    />
                    <CustomIconButton
                      sx={{ marginTop: "10px" }}
                      label={"Delete This Menu"}
                      variant={"outlined"}
                      color={"#DD7474"}
                      width={"634px"}
                      icon={<img style={{marginRight:'5px'}} src="./assets/images/trash.png" /> }
                    />
                    <CustomIconButton
                      variant={"outlined"}
                      label={"Delete This Menu"}
                      width={"634px"}
                      sx={{ marginTop: "10px" }}
                      icon={<img style={{marginRight:'5px'}} src="./assets/images/disable.png"/>}
                    />
                  </Box>
                </Box>
              </Box>

              <Box
                sx={{
                  margin: "35px 0px 0px 20px",
                  border: "1px solid #E1E1E6",
                  width: "40%",
                  height:'20%',
                  borderRadius: "8px",
                  padding: "10px",
                }}
              >
                <MealDetails
                  addOnDetaisl={addOnDetaisl}
                  mealPlanDetails={mealPlanDetails}
                />
              </Box>
            </Container>
          );
        })}
      </Layout>
    </React.Fragment>
  );
}

export default ViewDetails;
