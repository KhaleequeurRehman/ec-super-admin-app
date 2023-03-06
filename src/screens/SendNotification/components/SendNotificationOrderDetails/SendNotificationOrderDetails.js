import React from 'react'
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import OrderDetailsBreadcrumbs from './OrderDetailsBreadcrumbs';
import { H1Typo, H3Typo, LightTitle } from '../../../../components/Typography/index'
import { SendNotificationType } from './SendNotificationType/SendNotificationType';
import { SendNotificationsFields } from './SendNotificationsFields';
import { useFormik } from 'formik';
import { useCreateNotificationMutation } from '../../../../api/notification';

export const SendNotificationOrderDetails = ({setIsShownSendNotificationOrderDetails}) => {

  const [createNotification, resdata] = useCreateNotificationMutation()

  const formik = useFormik({
    initialValues: {
      to:"",
      title: "",
      description:  "",
      link: "",
      image:""
    },
    onSubmit: (values, action) => {
      console.log("Create New Notification Form values => ", values);

      let formData = new FormData(); //formdata object
        
      Object.keys(values).map((keys) => {
        formData.append(keys, values[keys])
      });
      
      Object.keys(formik.values).map((keys) => {
        console.log(`keys ${keys} = ${formData.get(keys)}`)
      });


      if(values?.to && values?.title && values?.description && values?.link && values?.image){
      
        createNotification(formData).then((res) => {
              if (res.data){
                console.log("res.data createNotification ", res?.data);
                // swal("Success!", `Content Saved Successfully`, "success");
                swal("Success!", `${res?.data?.message}`, "success");
              }
            });

      }else{
        // console.log('plz fill all values')
        swal("Error!", `Please fill all fields`, "error");
      }

     
      action.resetForm();
    },
  });

  return (
    <div>
        <Box>
            <OrderDetailsBreadcrumbs setIsShownSendNotificationOrderDetails={setIsShownSendNotificationOrderDetails}/>
        </Box>
        <Box>
          <H1Typo>Order Details</H1Typo>
        </Box>
       {/* <Box sx={{display: "flex", flexDirection: {lg: "row", md: "row", sm: "column", xs: "column"}}}component="form" onSubmit={formik.handleSubmit}> */}
       <Box sx={{display: "flex", flexDirection: {lg: "row", md: "row", sm: "column", xs: "column"}}}>
       <Box mt="18px" width="100%" >
          <SendNotificationType formik={formik} />
        </Box>
        <Box  width="100%" sx={{ml:{lg: "24px", md: "24px", sm: "0px", xs: "0px"}}}>
          <SendNotificationsFields formik={formik} />
        </Box>

       </Box>
    </div>
  )
}
