import React from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import UpdateMediaDropBox from "./UpdateMediaDropBox";
import { UpdateMediaFieldBox } from "./UpdateMediaFieldBox";
import { useFormik } from "formik";
import { useUpdateEditorContentDataMutation } from "../../../api/contentEditor";
import swal from "sweetalert";

const Typo1 = {
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "20px",
  letterSpacing: "0.015em",
  color: "#1A1824",
};

export const UpdateMedia = ({selectMediaItem}) => {

  const [updateEditorContentData,resdata] = useUpdateEditorContentDataMutation()
  
  const formik = useFormik({
    // initialValues: {
    //     type: selectMediaItem?.type || "Select",
    //     title: selectMediaItem?.title ||  "",
    //     question: "",
    //     response: "",
    //     image:  "",
    //     link: selectMediaItem?.link ||  "",
    // },
    initialValues: {
        type: "Select",
        title: "",
        question: "",
        response: "",
        image:  "",
        link: "",
    },
    onSubmit: (values, action) => {


      let formData = new FormData(); //formdata object
        
      Object.keys(values).map((keys) => {
        formData.append(keys, values[keys])
      });
      formData.append("publish", selectMediaItem?.publish)
      formData.append("id", selectMediaItem?._id)
      // Object.keys(formik.values).concat("publish").map((keys) => {
      //   console.log(`keys ${keys} = ${formData.get(keys)}`)
      // });


      if(values?.type && values?.link && values?.title && values?.question && values?.response && values?.image){
      
        updateEditorContentData(formData).then((res) => {
              if (res.data){
                console.log("res.data updateEditorContentData ", res?.data);
                // swal("Success!", `Content Saved Successfully`, "success");
                swal("Success!", `${res?.data?.message}`, "success");
              }
            });

      }else{
        // console.log('plz fill all values')
        // console.log("contentEditor Form values => ", values);
        // swal("Success!", `Please fill all fields`, "success");
        swal("Error!", `Please fill all fields`, "error");
      }

     
      action.resetForm();
    },
  });

  console.log('selectMediaItem in updateMedia ',selectMediaItem)

  return (
    <div>
      <Box mb="24px">
        <Typography sx={Typo1}>Update Media </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
        }}
        component="form"
        onSubmit={formik.handleSubmit}
      >
        <Box width="100%">
          <UpdateMediaDropBox formik={formik} />
        </Box>

        <Box
          width="100%"
          sx={{
            ml: { lg: "16px", md: "16px", sm: "0px", xs: "0px" },
            mt: { lg: "0px", md: "0px", sm: "20px", xs: "20px" },
          }}
        >
          <UpdateMediaFieldBox formik={formik} />
        </Box>
      </Box>
    </div>
  );
};
