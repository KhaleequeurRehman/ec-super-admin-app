import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
// import TextInputField from "../../../../components/TextInputField";
import Button from '@mui/material/Button';
import { useFormik } from "formik";
// import { signUpSchema } from "../../schemas";
import { useAddCusineMutation } from "../../../../api/cusine";
import { OutlinedInput } from "@mui/material";

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



const AddCuisine = ({handleAddModalClose,refetchAllCuisinesData}) => {

  const [addCuisine, { isLoading }] = useAddCusineMutation()
  const [image, setImage] = useState("assets/images/image profile.svg");

    const formik = useFormik({
    initialValues: {
        cuisine: "",
        subCuisine: "",
        image: "",
    },
    validateOnChange: (values) => {
      console.log("values", values);
    },
    onSubmit: (values, action) => {
      console.log("AddCuisine Form => ", values);

      let formData = new FormData(); //formdata object
      Object.keys(values).map((keys) => {
       formData.append(keys, values[keys]);
      });

      addCuisine(formData).then((res) => {
        if (res.data) {
          console.log("added successfully");
          handleAddModalClose();
          refetchAllCuisinesData();
        }
      });
      action.resetForm();
    },
  });

  useEffect(() => {
    if (formik.values.image !== "") {
      let reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };

      reader.readAsDataURL(formik.values.image);
    }
  }, [formik]);

  return (
    <>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12}>
            <Typography sx={{color:"#9EA3AE",fontSize:"16px",fontWeight:"400",mt:"6px"}}>Add Cuisine</Typography>
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
                    Cuisine
                </Para>
                <OutlinedInput
                name='cuisine' 
                value={formik.values.cuisine} 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder='Enter your cuisine name' 
                errors={formik.errors.cuisine} 
                touched={formik.touched.cuisine}
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
                    Sub Cuisine
                </Para>
                <OutlinedInput
                name='subCuisine' 
                value={formik.values.subCuisine} 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder='Enter sub cuisine name' 
                errors={formik.errors.subCuisine} 
                touched={formik.touched.subCuisine}
                fullWidth
                sx={{
                    backgroundColor: "#F6F6F6",
                    width: "100%",
                    height: "40px",
                    fontSize: "14px",
                }}
                />
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
                }}} variant="contained" disabled={isLoading} fullWidth >Add Cuisine</Button>
              </Box>
            </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default AddCuisine;



              {/* <Box sx={{my:"10px"}}>
                <TextInputField 
                  label='Email'
                  name='email' 
                  value={values.email} 
                  onChangeHandler={handleChange} 
                  onBlurHandler={handleBlur} 
                  placeholder='Enter your email address' 
                  errors={errors.email} 
                  touched={touched.email}
                />
              </Box> */}
              {/* <Box sx={{my:"10px"}}>
                <TextInputField 
                  label='Password'
                  name='password' 
                  value={values.password} 
                  onChangeHandler={handleChange} 
                  onBlurHandler={handleBlur} 
                  placeholder='Enter your password' 
                  errors={errors.password} 
                  touched={touched.password}
                  isPasswordField={true}
                />
              </Box> */}


                  {/* <Box sx={{my:"10px"}}>
                <Para
                sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                    mb: "8px",
                    color: "#545359",
                }}
                >
                    Upload Image
                </Para>
                <OutlinedInput
                type="image"
                name='image'
                value={values.image} 
                onChange={(e)=> setFieldValue("image",e.target.files[0])}
                onBlur={handleBlur}
                errors={errors.image} 
                touched={touched.image}
                fullWidth
                sx={{
                    backgroundColor: "#F6F6F6",
                    width: "100%",
                    height: "40px",
                    fontSize: "14px",
                }}
                />
              </Box> */}