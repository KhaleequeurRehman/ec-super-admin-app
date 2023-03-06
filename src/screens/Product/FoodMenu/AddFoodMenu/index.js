import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import AddIcon from "@mui/icons-material/Add";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
// import TextInputField from "../../../../components/TextInputField";
import Button from '@mui/material/Button';
import { useFormik } from "formik";
// import { signUpSchema } from "../../schemas";
// import { useAddCusineMutation } from "../../../../api/cusine";
import { FormControl, MenuItem, OutlinedInput, Select, TextField } from "@mui/material";
import { useAddMealplanMutation } from "../../../../api/mealplan";
import { useGetAllCusinesMutation } from "api/cusine";

const Para = styled(Typography)(({ theme }) => ({
    fontFamily: "Outfit",
    fontWeight: "500",
    fontSize: "12px",
    color: "#1A1824;",
    lineHeight: "16px",
  }));

const Typo1 = styled("div")(({ theme }) => ({
    // padding: theme.spacing(0, 2),
    fontFamily: "outfit",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "20px",
    color: "#9EA3AE",
}));

const Button1 = {
    // padding: theme.spacing(0, 2),
    fontFamily: "outfit",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "20px",
    textTransform: "capitalize",
    color: "#2B817B",
    marginTop: "10px",
  };



const AddFoodMenu = ({handleAddModalClose,refetchAllFoodMenusData}) => {

  const [getAllCusines,resdata] = useGetAllCusinesMutation()
  const [cusines, setCusines] = useState("");

  const [addMealplan, { isLoading }] = useAddMealplanMutation()
  const [image, setImage] = useState("assets/images/image profile.svg");

    const formik = useFormik({
    initialValues: {
        name: "",
        description: "",
        endDate: new Date() || dayjs('2014-08-18T21:11:54'),
        reviewStatus: false,
        mealCourse: "",
        addOnes: "",
        forReview: false,
        cuisine: "",
        image: "",
    },
    validateOnChange: (values) => {
      console.log("values", values);
    },
    onSubmit: (values, action) => {
      console.log("Add Menu Form => ", values);

      let formData = new FormData(); //formdata object
      Object.keys(values).map((keys) => {
       formData.append(keys, values[keys]);
      });

    addMealplan(formData).then((res) => {
      if (res.data) {
        console.log("added successfully");
          handleAddModalClose();
        refetchAllFoodMenusData();
      }
    });
      action.resetForm();
    },
  });

  const getAllCusinesData = ()=> {
    getAllCusines({ page:1,size:20,status:"all" }).then((res) => {
    // getAllCusines({status:"all" }).then((res) => {
      if (res.data){
        console.log("res.data all Cusines at add food menu ", res?.data);
        setCusines(res?.data?.data)
      }
    });
  }

  useEffect(() => {
    if (formik.values.image !== "") {
      let reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };

      reader.readAsDataURL(formik.values.image);
    }
  }, [formik]);


  useEffect(() => {
    getAllCusinesData()
  }, [])
  
  console.log("cusines add mealplan ",cusines)

  return (
    <>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12}>
            <Typography sx={{color:"#9EA3AE",fontSize:"16px",fontWeight:"400",mt:"6px"}}>Add Menu</Typography>
            <Box component="form" onSubmit={formik.handleSubmit}  autoComplete="off">
              <Box sx={{my:"10px"}}>
                <Para
                sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                    mb: "8px",
                    color: "#545359",
                }}
                >
                    Name
                </Para>
                <OutlinedInput
                name='name' 
                value={formik.values.name} 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder='Enter name' 
                errors={formik.errors.name} 
                touched={formik.touched.name}
                fullWidth
                sx={{
                    backgroundColor: "#F6F6F6",
                    width: "100%",
                    height: "40px",
                    fontSize: "14px",
                }}
                />
              </Box>
              <Box sx={{my:"10px"}}>
                <Para
                sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                    mb: "8px",
                    color: "#545359",
                }}
                >
                    Description
                </Para>
                <OutlinedInput
                name='description' 
                value={formik.values.description} 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder='Enter description' 
                errors={formik.errors.description} 
                touched={formik.touched.description}
                fullWidth
                sx={{
                    backgroundColor: "#F6F6F6",
                    width: "100%",
                    height: "40px",
                    fontSize: "14px",
                }}
                />
              </Box>
              <Box sx={{my:"10px"}}>
                <Para
                sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                    mb: "8px",
                    color: "#545359",
                }}
                >
                    Cuisine
                </Para>
                <FormControl fullWidth size="small">
                    <Select
                    name="cuisine"
                    value={formik.values.cuisine}
                    onChange={formik.handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    sx={{mt:"7px",py:"3px",backgroundColor: '#F6F6F6'}}
                    >
                    <MenuItem value="" selected>
                    <Typography sx={{fontSize: { xs: "13px", md: "14px" },fontWeight: "500",color: "#545359"}}>Select</Typography>
                    </MenuItem>
                    {
                      (Array.isArray(cusines) && cusines?.length>0) &&
                      cusines.map((item,i)=> (
                        <MenuItem value={item?._id} key={i}>{item?.cuisine}</MenuItem>
                      ))
                    }
                    
                    {/* <MenuItem value="pakistani">Pakistani</MenuItem>
                    /* <MenuItem value="pakistani">Pakistani</MenuItem>
                    <MenuItem value="mexican">Mexican</MenuItem> */}
                    </Select>
                </FormControl>
                {/* <OutlinedInput
                name='cuisine' 
                value={formik.values.cuisine} 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder='Enter cuisine' 
                errors={formik.errors.cuisine} 
                touched={formik.touched.cuisine}
                fullWidth
                sx={{
                    backgroundColor: "#F6F6F6",
                    width: "100%",
                    height: "40px",
                    fontSize: "14px",
                }}
                /> */}
              </Box>
              <Box sx={{my:"10px"}}>
                <Para
                sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                    mb: "8px",
                    color: "#545359",
                }}
                >
                    Meal Course
                </Para>
                <FormControl fullWidth size="small">
                    <Select
                    name="mealCourse"
                    value={formik.values.mealCourse}
                    onChange={formik.handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    sx={{mt:"7px",py:"3px",backgroundColor: '#F6F6F6'}}
                    >
                    <MenuItem value="" selected>
                    <Typography sx={{fontSize: { xs: "13px", md: "14px" },fontWeight: "500",color: "#545359"}}>Select Meal Course</Typography>
                    </MenuItem>
                    <MenuItem value="burger">Burger</MenuItem>
                    <MenuItem value="biryani">Biryani</MenuItem>
                    <MenuItem value="karahi">Karahi</MenuItem>
                    </Select>
                </FormControl>
                {/* <OutlinedInput
                name='mealCourse' 
                value={formik.values.mealCourse} 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder='Enter mealCourse' 
                errors={formik.errors.mealCourse} 
                touched={formik.touched.mealCourse}
                fullWidth
                sx={{
                    backgroundColor: "#F6F6F6",
                    width: "100%",
                    height: "40px",
                    fontSize: "14px",
                }}
                /> */}
              </Box>
              <Box sx={{my:"10px"}}>
                <Para
                sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                    mb: "8px",
                    color: "#545359",
                }}
                >
                    Add Ones
                </Para>
                <FormControl fullWidth size="small">
                    <Select
                    name="addOnes"
                    value={formik.values.addOnes}
                    onChange={formik.handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    sx={{mt:"7px",py:"3px",backgroundColor: '#F6F6F6'}}
                    >
                    <MenuItem value="" selected>
                    <Typography sx={{fontSize: { xs: "13px", md: "14px" },fontWeight: "500",color: "#545359"}}>Select addOnes</Typography>
                    </MenuItem>
                    <MenuItem value="raita">Raita</MenuItem>
                    <MenuItem value="salad">Salad</MenuItem>
                    <MenuItem value="drinks">Drinks</MenuItem>
                    </Select>
                </FormControl>
                {/* <OutlinedInput
                name='addOnes' 
                value={formik.values.addOnes} 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder='Enter addOnes' 
                errors={formik.errors.addOnes} 
                touched={formik.touched.addOnes}
                fullWidth
                sx={{
                    backgroundColor: "#F6F6F6",
                    width: "100%",
                    height: "40px",
                    fontSize: "14px",
                }}
                /> */}
              </Box>
              <Box sx={{my:"10px"}}>
                <Para
                sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                    mb: "8px",
                    color: "#545359",
                }}
                >
                    End Date
                </Para>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    // label="End Date"
                    inputFormat="MM/DD/YYYY"
                    value={formik.values.endDate}
                    onChange={(e)=> formik.setFieldValue("endDate",e)}
                    renderInput={(params) => <TextField size="small" sx={{width:"100%"}} {...params} />}
                  />
                </LocalizationProvider>
                {/* <OutlinedInput
                name='endDate' 
                value={formik.values.endDate} 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder='Enter endDate' 
                errors={formik.errors.endDate} 
                touched={formik.touched.endDate}
                fullWidth
                sx={{
                    backgroundColor: "#F6F6F6",
                    width: "100%",
                    height: "40px",
                    fontSize: "14px",
                }}
                /> */}
              </Box>
              <Box sx={{my:"10px"}}>
                <Para
                sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                    mb: "8px",
                    color: "#545359",
                }}
                >
                    Review Status
                </Para>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch  
                      name='reviewStatus' 
                      value={formik.values.reviewStatus} 
                      onChange={(e)=>  {formik.setFieldValue("reviewStatus",e.target.checked)}}
                      />
                    }
                  />
                </FormGroup>
                {/* <OutlinedInput
                name='reviewStatus' 
                value={formik.values.reviewStatus} 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder='Enter reviewStatus' 
                errors={formik.errors.reviewStatus} 
                touched={formik.touched.reviewStatus}
                fullWidth
                sx={{
                    backgroundColor: "#F6F6F6",
                    width: "100%",
                    height: "40px",
                    fontSize: "14px",
                }}
                /> */}
              </Box>
              <Box sx={{my:"10px"}}>
                <Para
                sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                    mb: "8px",
                    color: "#545359",
                }}
                >
                    For Review
                </Para>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch  
                      name='forReview' 
                      value={formik.values.forReview} 
                      onChange={(e)=>  {formik.setFieldValue("forReview",e.target.checked)}}
                      />
                    }
                  />
                </FormGroup>
                {/* <OutlinedInput
                name='forReview' 
                value={formik.values.forReview} 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder='Enter forReview' 
                errors={formik.errors.forReview} 
                touched={formik.touched.forReview}
                fullWidth
                sx={{
                    backgroundColor: "#F6F6F6",
                    width: "100%",
                    height: "40px",
                    fontSize: "14px",
                }}
                /> */}
              </Box>
              <Box sx={{my:"20px"}}>
                <Box sx={{display:"flex"}}>
                    <Box>
                        <Box sx={{width: "96px", height: "97px" }}>
                            <img
                                src={image}
                                alt="upload cusine pic"
                                style={{ width: "100%", height: "100%" }}
                            />
                        </Box>
                    </Box>
                    <Box sx={{ml:"10px",display:"flex",flexDirection:"column"}}>
                        <Box>
                            <Typo1
                            sx={{
                                maxWidth: "230px",
                                pb: "18px",
                                textAlign: "center",
                            }}
                            >
                            *uploaded photos are 1 : 1 in size and a maximum of 1 mb
                            </Typo1>
                        </Box>
                        <Box>
                            <Button
                            sx={Button1}
                            variant="text"
                            component="label"
                            startIcon={<AddIcon />}
                            >
                                Upload Photo
                                <input
                                hidden
                                accept="image/*"
                                multiple
                                type="file"
                                id="image"
                                image="image"
                                onChange={(event) => {
                                    formik.setFieldValue(
                                    "image",
                                    event.currentTarget.files[0]
                                    );
                                }}
                                />
                            </Button>
                        </Box>
                    </Box>
                </Box>
              </Box>
              <Box sx={{mt:"40px",mb:"20px"}}>
                <Button type='submit' sx={{py:"12px",borderRadius:"8px",backgroundColor:"#2B817B",textTransform:"capitalize","&:hover":{
                  backgroundColor: "#2B817B"
                }}} variant="contained" disabled={isLoading} fullWidth >Add Menu</Button>
              </Box>
            </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default AddFoodMenu;
