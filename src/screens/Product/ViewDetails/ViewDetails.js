import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Layout from "../../Layout";
import ChefDetails from "../ChefDetails/ChefDetails";
import MealDetails from "../MealDetails/MealDetails";
import { ArrowBack } from "@mui/icons-material"
import WarningIcon from '@mui/icons-material/Warning';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CustomIconButton from "../../../components/Button/CustomIconButton";
import CustomBreadcrumbs from "../../../components/CustomBreadcrumbs";
import {useDeleteMealplanMutation, useDisableMealplanMutation, useGetMealplanDetailMutation} from "../../../api/mealplan"
import moment from "moment";
import CustomizedModal from "../../../components/CustomizedModal";
import UpdateFoodMenu from "../FoodMenu/UpdateFoodMenu";
import { IconButton } from "@mui/material";
import { IMG_BASE_URL } from "config";

// const product_details = [
//   {
//     heading_title: "Arabian Kebab, Middle East Special",
//     title: "Arabian Kebab, Middle East Special",
//     price: "$59.20",
//     endData: "2021/10/12",
//     img: "assets/foodmenuimages/Chef.png",
//     chefName: "Chef Juna Food",
//     stars: 4.7,
//     reviews: 150,
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//   },
// ];

const mealPlanDetails = [
  {
    img: "assets/foodmenuimages/dish.png",
    title: "Main Courrse",
    quantity: "10 dishes",
  },
  {
    img: "assets/foodmenuimages/salad.png",
    title: "Salad Dishes",
    quantity: "10 dishes",
  },
  {
    img: "assets/foodmenuimages/salad.png",
    title: "Sweet Dishes",
    quantity: "10 dishes",
  },
];

const addOnDetaisl = [
  {
    img: "assets/foodmenuimages/dish.png",
    title: "Juices",
    quantity: "10 dishes",
  },
  {
    img: "assets/foodmenuimages/salad.png",
    title: "Slide",
    quantity: "10 dishes",
  },
  {
    img: "assets/foodmenuimages/salad.png",
    title: "Dipa",
    quantity: "10 dishes",
  },
];

function ViewDetails({setViewDetails,selectedMealplan}) {

  const [getMealplanDetail,resdata] = useGetMealplanDetailMutation()

  const [deleteMealplan,respdata] = useDeleteMealplanMutation()
  const [disableMealplan,responsedata] = useDisableMealplanMutation()

  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  const [openDisableMealplaneDialog,setOpenDisableMealplaneDialog] = useState(false)

  const [openDeleteDialog,setOpenDeleteDialog] = useState(false)

  const [mealplanDetailData, setMealplanDetailData] = useState("");
  
  
  const getMealplanDetailData = ()=> {
    getMealplanDetail({ id:selectedMealplan?._id }).then((res) => {
      if (res.data){
        console.log("res.data malplanDetailData ", res?.data);
        setMealplanDetailData(res?.data?.data)
      }
    });
  }
  
  useEffect(() => {
    getMealplanDetailData()
  }, [])

  const breadcrumbsLinksDataArr = [
    {
      text: "Food Menu",
      url: "#",
    },
    // {
    //   text: "Delivery Details",
    //   url: "#",
    // },
  ];

  const product_details = [
    {
      heading_title: "Arabian Kebab, Middle East Special",
      title: `${mealplanDetailData?.name !== undefined || mealplanDetailData?.name !== null? mealplanDetailData?.name : 'no data'}`,
      price: "$59.20",
      endData: `${mealplanDetailData?.endDate !== undefined || mealplanDetailData?.endDate !== null? moment(mealplanDetailData?.endDate).format('ll').replace(',',"") : 'no data'}`,
      img: "assets/foodmenuimages/Chef.png",
      // productImg: `${mealplanDetailData?.image !== undefined || mealplanDetailData?.image !== null? `https://backend.eatcoast.ca/v1/mealplane/${mealplanDetailData?.image}`: 'no data'}`,
      // productImg: `${mealplanDetailData?.image !== undefined || mealplanDetailData?.image !== null? `https://ec-backend-app-mg6rk.ondigitalocean.app/image/mealplane/${mealplanDetailData?.image}`: 'no data'}`,
      productImg: `${mealplanDetailData?.image !== undefined || mealplanDetailData?.image !== null? `${IMG_BASE_URL}/image/mealplane/${mealplanDetailData?.image}`: 'no data'}`,
      chefName: "Chef Juna Food",
      stars: 4.7,
      reviews: 150,
      description:`${mealplanDetailData?.description !== undefined || mealplanDetailData?.description !== null? mealplanDetailData?.description : 'no data'}`,
    },
  ];


  const handleUpdateModalClose = () => {
    setUpdateModalOpen(false);
  };

  const handleUpdateModalOpen = () => {
    setUpdateModalOpen(true);
};


  // console.log("selectedMealplan ",selectedMealplan)
  console.log("mealplanDetailData =>  ",mealplanDetailData?.name)
  return (
    <React.Fragment>
      <Layout>
        <Box sx={{width:"100%"}}>
          <Box width="100%" pl="20px" pb="20px">
            <CustomBreadcrumbs
              typographyText="Arabian Kebab, Middle East Special"
              breadcrumbsLinksArr={breadcrumbsLinksDataArr}
              clickHandler={()=> {setViewDetails(false); console.log('clicked');}}
            />
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              {product_details && product_details.length>0 && product_details.map((items,i) => {
                return (
                  <Box sx={{width:"100%"}} key={i}>
                    <Box>
                      <Box
                        sx={{
                          border: "1px solid  #E1E1E6",
                          padding: "20px",
                          borderRadius: "8px",
                          width: "674px",
                          display: "flex",
                          justifyContent: "center",
                          flexDirection: "column",
                          // marginTop: 2,
                          width:"100%"
                        }}
                      >
                        <Box sx={{width:"497px",height:"180px"}}>
                          {/* <img src="assets/foodmenuimages/product_img.png" alt="Product Image" /> */}
                          <img src={items?.productImg} style={{width:"100%",height:"100%"}} alt="Product Image" />
                        </Box>
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
                            src="assets/foodmenuimages/tag.png"
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
                            src="assets/foodmenuimages/Ellipse.png"
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
                            width={"100%"}
                            label={"Edit Menu Details"}
                            icon={<img style={{marginRight:'5px'}} src='assets/foodmenuimages/edit2.png' alt="edit icon" />}
                            onClick={handleUpdateModalOpen}
                          />
                          <Box sx={{my:"10px"}}>
                            <CustomIconButton
                              sx={{ marginTop: "10px" }}
                              label={"Delete This Menu"}
                              variant={"outlined"}
                              color={"#DD7474"}
                              width={"100%"}
                              icon={<img style={{marginRight:'5px'}} src="assets/foodmenuimages/trash.png" /> }
                              onClick={()=> setOpenDeleteDialog(true)}
                            />
                          </Box>
                          <CustomIconButton
                            variant={"outlined"}
                            label={"Disable This Menu"}
                            width={"100%"}
                            sx={{ marginTop: "10px" }}
                            icon={<img style={{marginRight:'5px'}} src="assets/foodmenuimages/eyeslash.png"/>}
                            onClick={() => setOpenDisableMealplaneDialog(true)}
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                );
              })}
            </Grid> 
            <Grid item xs={12} md={4}>
              <Box sx={{width:"100%",border:"1px solid #E1E1E6",borderRadius:"8px",p:"10px"}}>
                {/* <MealDetails
                  addOnDetails={addOnDetaisl}
                  mealPlanDetails={mealPlanDetails}
                /> */}
                <MealDetails
                  addOnDetails={mealplanDetailData?.addOnes}
                  mealPlanDetails={mealplanDetailData?.mealCourse}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>

        <CustomizedModal
          title="Update Menu"
          aria-labelledby="customized-dialog-title"
          open={updateModalOpen}
          handleClose={handleUpdateModalClose}
          isActionShown={false}
          >
            <Box sx={{my:"20px",minWidth:{xs:"310px",sm:"400px",md:"500px"},mb:"20px"}}>
              <UpdateFoodMenu 
              handleUpdateModalClose={handleUpdateModalClose}
              selectedMealplan={selectedMealplan}
              refetchAllFoodMenusData={()=> {console.log("refetchAllFoodMenusData")}}
              // refetchAllFoodMenusData={()=> {setRefetchFlag(true)}}
              />
            </Box>
        </CustomizedModal>

        <CustomizedModal
        title="Delete Mealplan"
        aria-labelledby="customized-dialog-title"
        open={openDeleteDialog}
        handleClose={()=> setOpenDeleteDialog(false)}
        actionBtnsText={['Discard','Yes, sure']}
        actionBtn2OnClickHandler={
          ()=> {
            deleteMealplan({ id:selectedMealplan?._id });
            // setRefetchFlag(true)
          }
        }
        isHeaderShown={false}
        >
            <Box sx={{my:"20px",minWidth:{xs:"310px",sm:"400px"}}}>
                <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center"}}>
                    <Box sx={{borderRadius:"8px",p:"16px 16px 4px 16px",textAlign:"center"}}>
                        <IconButton sx={{backgroundColor:"#FEF9E8"}}>
                            <WarningIcon sx={{ color: "yellow",fontSize:{xs:"32px",md:"48px"} }} />
                        </IconButton>
                        <Typography sx={{fontSize: { xs: "13px", md: "16px" },fontWeight: "600",color: "#1A1824",}}>Delete Mealplan</Typography>  
                        <Typography sx={{fontSize: { xs: "13px", md: "14px" },fontWeight: "400",color: "#545359",}}>Deleted items cannot be returned,<br /> are you sure you want to delete this item?</Typography>  
                    </Box>
                </Box>
            </Box>
        </CustomizedModal>

        <CustomizedModal
        title="Disable Mealplan"
        aria-labelledby="customized-dialog-title"
        open={openDisableMealplaneDialog}
        handleClose={()=> setOpenDisableMealplaneDialog(false)}
        actionBtnsText={['Cancel','Yes, sure']}
        actionBtn2OnClickHandler={
          ()=> {
            disableMealplan({ id:selectedMealplan?._id });
            console.log("disableMealplan clicked")
          }
        }
        isHeaderShown={false}
        >
            <Box sx={{my:"20px",minWidth:{xs:"310px",sm:"400px"}}}>
                <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center"}}>
                    <Box sx={{borderRadius:"8px",p:"16px 16px 4px 16px",textAlign:"center"}}>
                        <IconButton sx={{backgroundColor:"#FEF9E8"}}>
                            <VisibilityOffIcon sx={{ color: "#819ED9",fontSize:{xs:"32px",md:"48px"} }} />
                        </IconButton>
                        <Typography sx={{fontSize: { xs: "13px", md: "16px" },fontWeight: "600",color: "#1A1824",}}>Disable Mealplan</Typography>  
                        <Typography sx={{fontSize: { xs: "13px", md: "14px" },fontWeight: "400",color: "#545359",}}>The item to be disabled cannot be seen by the customer, are you sure?</Typography>  
                    </Box>
                </Box>
            </Box>
        </CustomizedModal>
      </Layout>
    </React.Fragment>
  );
}

export default ViewDetails;
