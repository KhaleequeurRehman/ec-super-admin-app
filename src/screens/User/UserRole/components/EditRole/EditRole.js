import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { styled, IconButton, createStyles, Grid, Button } from "@mui/material";
import { CheckboxWithTitle } from "./CheckboxWithTitle";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAddUserRoleMutation, useUpdateRoleMutation } from "api/roles";
import TextInputField from "components/TextInputField";
import swal from "sweetalert";

const checkboxData = [
  {
    title: "Restaurant",
    value: "1",
  },
  {
    title: "Product",
    value: "2",
  },
  {
    title: "Subscription Bussiness",
    value: "3",
  },
  {
    title: "Inbox Driver",
    value: "4",
  },
  {
    title: "Content Editor",
    value: "5",
  },
  {
    title: "Order",
    value: "6",
  },
  {
    title: "Send Notification",
    value: "7",
  },
  {
    title: "Employee",
    value: "8",
  },
  {
    title: "Inbox Customer",
    value: "9",
  },
  {
    title: "Employee",
    value: "10",
  },
  {
    title: "Collect Cahs",
    value: "11",
  },
  {
    title: "Subscription Bussiness",
    value: "12",
  },
  {
    title: "Product",
    value: "13",
  },
  {
    title: "Inbox Caterer",
    value: "14",
  },
  {
    title: "Email",
    value: "15",
  },
];

const FieldTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontStyle: "normal",
  lineHeight: "16px",
  color: "#1A1824",
  fontSize: "14px",
  fontWeight: "500",

  // [theme.breakpoints.up("xl")]: {
  //   fontSize: "22px",
  // },
}));

const MainBox = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: "24px",
  border: "1px solid #E1E1E6",
  borderRadius: "6px",
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


const TextBtn = styled(Button)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "22.4px",
  textTransform: "capitalize",
  color: "#2B817B",
  textDecoration: "underline"
}));

export const userRoleSchema = Yup.object({
  title: Yup.string().required("Please enter role title"),
  modules: Yup.array().required("Please select modules"),
})

const initialValues = {
  title: "",
  modules: [],
};

export const EditRole = ({ hasRoleField, hasTextBtn, hasSubmitBn, onClickFunc, handleCheckCheckbox,selectedRole,handleEditRoleModalClose }) => {
  
  const initialValues = {
    title: selectedRole?.title || "",
    modules: [],
  };

  const [editRole,{isLoading}] = useUpdateRoleMutation()
  const { values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue } = useFormik({
    initialValues,
    validationSchema: userRoleSchema,
    onSubmit: (values, action) => {
      console.log("editRole form => ",values );
      editRole({id:selectedRole?._id,...values}).then((res)=>{
       if(res.data) {
        swal("Successfully",res.data.message,"success");
          action.resetForm();
        }
      })
      handleEditRoleModalClose();
    },
  });

  console.log("selectedRole => ",selectedRole)

  return (
    <div>
      {/* {hasRoleField &&
        <Box>
          <FieldTitle
            sx={{
              marginTop: "9px",
              mb: "8px",
            }}
          >Role Name</FieldTitle>

          <TextInputField
            name='title'
            value={values.title}
            onChangeHandler={handleChange}
            onBlurHandler={handleBlur}
            placeholder="Type your role name"
            sx={{
              backgroundColor: "#F6F6F6",
              width: "100%",
              height: "40px",
              fontSize: "14px",
            }}
            errors={errors.title}
            touched={touched.title}
          />
        </Box>
      } */}

        <Box>
          <FieldTitle
            sx={{
              marginTop: "9px",
              mb: "8px",
            }}
          >Role Name</FieldTitle>

          <TextInputField
            name='title'
            value={values.title}
            onChangeHandler={handleChange}
            onBlurHandler={handleBlur}
            placeholder="Type your role name"
            sx={{
              backgroundColor: "#F6F6F6",
              width: "100%",
              height: "40px",
              fontSize: "14px",
            }}
            errors={errors.title}
            touched={touched.title}
          />
        </Box>

      <Box mt="16px" mb="8px" sx={{ display: "flex", justifyContent: "space-between" }}>
        <FieldTitle>Module Permission :</FieldTitle>
        {hasTextBtn &&
          <TextBtn onClick={onClickFunc} variant="text" sx={{ padding: "0px", minWidth: "0px", minHeight: "0px" }}>
            Edit module
          </TextBtn>
        }
      </Box>
      <MainBox>
        <Grid container spacing={1} sx={{}}>
          {checkboxData.map((item, i) => {
            return (
              <Grid xl={2} item lg={12 / 4} md={3} sm={6} xs={12} key={i}>
                <CheckboxWithTitle data={item} handleCheckCheckbox={() => {
                  setFieldValue("modules", [...values.modules, item.title])
                }} />
              </Grid>
            );
          })}
        </Grid>
        <Box mt="32px" sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Btn2 variant="contained" onClick={handleSubmit} disabled={isLoading}>Submit</Btn2>
        </Box>
        {/* {hasSubmitBn &&
          <Box mt="32px" sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Btn2 variant="contained" onClick={handleSubmit} disabled={isLoading}>Submit</Btn2>
          </Box>
        } */}
      </MainBox>
    </div>
  );
};
