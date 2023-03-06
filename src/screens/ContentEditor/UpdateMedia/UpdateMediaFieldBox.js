import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import OutlinedInput from "@mui/material/OutlinedInput";
import ClearIcon from "@mui/icons-material/Clear";
import { styled, IconButton, createStyles, Select, MenuItem, FormControl } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
// import { useCreateEditorContentDataMutation } from "../../../api/contentEditor";
import swal from "sweetalert";



const FieldTitle = styled(Typography)(({ theme }) => ({
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

const Para = styled(Typography)(({ theme }) => ({
  fontFamily: "Outfit",
  fontWeight: "500",
  fontSize: "12px",
  color: "#1A1824;",
  lineHeight: "16px",
}));

const FieldBox = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: "32px",
  border: "1px solid #E1E1E6",
}));

const Btn1 = styled(Button)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: "600",
  lineHeight: "20px",
  textTransform: "capitalize",
  color: "#2B817B",
  border: "1px solid #80B3B0",
  borderRadius: "4px",
  padding: "10px, 16px, 10px, 16px",
  width: "120px",
  height: "40px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
  },
  ":hover": {
    border: "1px solid #80B3B0",
  },
}));

const Btn2 = styled(Button)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: "600",
  lineHeight: "20px",
  textTransform: "capitalize",
  color: "#FFFFFF",
  backgroundColor: "#2B817B",
  borderRadius: "4px",
  padding: "10px, 16px, 10px, 16px",
  width: "120px",
  height: "40px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
  },
  ":hover": {
    backgroundColor: "#2B817B",
  },
}));


export const UpdateMediaFieldBox = ({formik}) => {

  // const [createEditorContentData,resdata] = useCreateEditorContentDataMutation()

  // const saveAsDraftHandler = () => {
  //   let formData = new FormData(); //formdata object
    
    
  //   Object.keys(formik.values).map((keys) => {
  //     formData.append(keys, formik.values[keys])
  //   });

  //   formData.append("publish", false)

  //   // Object.keys(formik.values).concat("publish").map((keys) => {
  //   //   console.log(`keys ${keys} = ${formData.get(keys)}`)
  //   // });

  //   if(formik.values?.type && formik.values?.link && formik.values?.title && formik.values?.question && formik.values?.response && formik.values?.image){
  //       createEditorContentData(formData).then((res) => {
  //         if (res.data){
  //           console.log("res.data createEditorContentData ", res?.data);
  //           swal("Success!", `Save As Draft`, "success");
  //           // swal("Success!", `${createEditorContentDataResponse.data.message}`, "success");
  //         }
  //       });
  //   }else{
  //     // console.log('plz fill all values')
  //     // console.log("contentEditor Form values => ", formik.values);
  //     swal("Error!", `Please fill all fields`, "error");
  //   }
  // }

  return (
    <div>
      <Box width="100%" >
        <FieldBox>
          <Box mt="16px">
            <Para display="inline" sx={{ fontSize: "14px", fontWeight: "500" }}>
              {/* Direct Link */}
              Content Type
            </Para>
            <FormControl fullWidth size="small">
              <Select
              name='type'
              value={formik.values.type} 
              onChange={formik.handleChange}
              // onChange={(e)=> formik.setFieldValue('type',e.target.value)}
              onBlur={formik.handleBlur} 
              errors={formik.errors.type} 
              touched={formik.touched.type}
              inputProps={{ 'aria-label': 'Without label' }}
              sx={{
                backgroundColor: "#F6F6F6",
                width: "100%",
                // height: "40px",
                mt: "8px",
                fontSize: "14px",
                mb: "12px",
              }}
              >
                <MenuItem value="Select">
                <Typography sx={{fontSize: { xs: "13px", md: "14px" },fontWeight: "500",color: "#545359"}}>Select</Typography>
                </MenuItem>
                <MenuItem value="FAQs">
                <Typography sx={{fontSize: { xs: "13px", md: "14px" },fontWeight: "500",color: "#545359"}}>FAQs</Typography>
                </MenuItem>
              </Select>
            </FormControl>
            {/* <OutlinedInput
              fullWidth
              // onClick={handleClick}
              // onChange={onChange}
              disabled
              style={{
                input: {
                  "&::placeholder": {
                    color: "#2B817B",
                  },
                },
              }}
              placeholder={"FAQ"}
              sx={{
                backgroundColor: "#F6F6F6",
                width: "100%",
                height: "40px",
                mt: "8px",
                fontSize: "14px",
                mb: "12px",
              }}
              endAdornment={
                <InputAdornment position="start">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src="./assets/images/blackArrowdown.svg"
                      alt=""
                      height="16px"
                      width="16px"
                    />
                  </Box>
                </InputAdornment>
              }
            /> */}
          </Box>

          <Box>
            <FieldTitle
              sx={{
                fontSize: "14px",
                fontWeight: "500",
                marginTop: "9px",
                mb: "8px",
                color: "#545359",
              }}
            >
              Direct Link
            </FieldTitle>

            <OutlinedInput
              placeholder="Type your link"
              size="small"
              name='link'
              value={formik.values.link} 
              onChange={formik.handleChange}
              // onChange={(e)=> formik.setFieldValue('link',e.target.value)}
              onBlur={formik.handleBlur} 
              errors={formik.errors.link} 
              touched={formik.touched.link}
              sx={{
                backgroundColor: "#F6F6F6",
                width: "100%",
                // height: "40px",
                fontSize: "14px",
              }}
            />
          </Box>

          <Box>
            <FieldTitle
              sx={{
                fontSize: "14px",
                fontWeight: "500",
                marginTop: "9px",
                mb: "8px",
                color: "#545359",
              }}
            >
              Title Content
            </FieldTitle>

            <OutlinedInput
              placeholder="Type your title content"
              size="small"
              name='title'
              value={formik.values.title} 
              onChange={formik.handleChange}
              // onChange={(e)=> formik.setFieldValue('title',e.target.value)}
              onBlur={formik.handleBlur} 
              errors={formik.errors.title} 
              touched={formik.touched.title}
              sx={{
                backgroundColor: "#F6F6F6",
                width: "100%",
                // height: "40px",
                fontSize: "14px",
              }}
            />
          </Box>

          <Box>
            <Box
              mt="16px"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <FieldTitle
                sx={{
                  fontSize: "14px",
                  fontWeight: "600",
                  marginTop: "9px",
                  mb: "8px",
                  color: "#545359",
                }}
              >
                Question
              </FieldTitle>
            </Box>

            <OutlinedInput
              fullWidth
              // inputProps={{ maxLength: 80 }}
              components="input"
              multiline
              rows={2}
              placeholder="Enter your question"
              name='question'
              value={formik.values.question} 
              onChange={formik.handleChange}
              // onChange={(e)=> formik.setFieldValue('question',e.target.value)}
              onBlur={formik.handleBlur} 
              errors={formik.errors.question} 
              touched={formik.touched.question}
              sx={{
                backgroundColor: "#F6F6F6",
                width: "100%",
                // height: "80px",
                // alignItems: "flex-start",
                fontSize: "14px",
              }}
            />
          </Box>

          <Box>
            <Box
              mt="16px"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <FieldTitle
                sx={{
                  fontSize: "14px",
                  fontWeight: "600",
                  marginTop: "9px",
                  mb: "8px",
                  color: "#545359",
                }}
              >
                Response
              </FieldTitle>
            </Box>

            <OutlinedInput
              fullWidth
              // inputProps={{ maxLength: 80 }}
              components="input"
              multiline
              rows={2}
              placeholder="Enter your response"
              name='response'
              value={formik.values.response} 
              onChange={formik.handleChange}
              // onChange={(e)=> formik.setFieldValue('response',e.target.value)}
              onBlur={formik.handleBlur} 
              errors={formik.errors.response} 
              touched={formik.touched.response}
              sx={{
                backgroundColor: "#F6F6F6",
                width: "100%",
                // height: "80px",
                // alignItems: "flex-start",
                fontSize: "14px",
              }}
            />
          </Box>

          <Box mt="16px" sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              {/* <Box>
                <Btn1 variant="outlined" 
                onClick={saveAsDraftHandler}
                >Save as Draft</Btn1>
              </Box> */}
              <Box ml="24px">
                <Btn2 type="submit" variant="contained">Submit</Btn2>
              </Box>
            </Box>
          </Box>
        </FieldBox>
      </Box>
    </div>
  );
};
