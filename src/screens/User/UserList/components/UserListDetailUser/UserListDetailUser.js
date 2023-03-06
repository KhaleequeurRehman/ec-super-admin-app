import React from "react";
import {useState} from "react";

import Box from "@mui/material/Box";
import UserListBreadcrumbs from "./UserListBreadcrumbs";
import Typography from "@mui/material/Typography";
import { UserListImgBox } from "./UserListImgBox";
import { UserListFieldBox } from "./UserListFieldBox";
import { ModulePermission } from "../../../UserRole/components/ModulePermission/ModulePermission";
import { styled, IconButton, createStyles, Grid, Button } from "@mui/material";
import CancelSubscriptionComp from "../../../../Subscription/Component/CancelSubscription/CancelSubscriptionComp";
import { useUserUpdateMutation } from "api/users";
import { useFormik } from "formik";
import { useGetAllRolesQuery } from "api/roles";
import { useEffect } from "react";

const Typo1 = {
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "20px",
  letterSpacing: "0.015em",
  color: "#1A1824",
};

const Btn1 = styled(Button)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: "600",
  lineHeight: "20px",
  textTransform: "capitalize",
  color: "#2B817B",
  border: "1px solid #80B3B0",
  borderRadius: "4px",
  padding: "10px, 16px, 10px, 16px",
  width: "258px",
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
  width: "258px",
  height: "40px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
  },
  ":hover": {
    backgroundColor: "#2B817B",
  },
}));

export const UserListDetailUser = ({setShowUserDetail,selectedUser}) => {
  
  const [updateUser,resdata] = useUserUpdateMutation()

  // const { data: userRoles, isLoading } = useGetAllRolesQuery(`page=&size=&searchBy=`)
    
  //   const [userRoleData, setUserRoleData] = useState([])

    const [openCancelDialog, setOpenCancelDialog] = useState(false);


    const [totalSelectedCheckboxes, setTotalSelectedCheckboxes] = useState(0);


  function handleCheckCheckbox() {
    setTotalSelectedCheckboxes(
      document.querySelectorAll("input[type=checkbox]:checked").length
    );
    if( document.querySelectorAll("input[type=checkbox]:checked").length){

    } else if (document.querySelectorAll("input[type=checkbox]:checked").length === 0) {
    }
    console.log("checkbox", totalSelectedCheckboxes + 1);
  }


  const formik = useFormik({
    initialValues: {
      firstName: selectedUser?.firstName || "",
      lastName: selectedUser?.lastName || "",
      email:  selectedUser?.email || "",
      phone: selectedUser?.phone || "",
      password:"",
      role:""
    },
    onSubmit: (values, action) => {
      console.log("update user Form values => ", values);
      
      // if(values?.firstName && values?.lastName && values?.email && values?.phone && values?.role && values?.password){
      if(values?.firstName && values?.lastName && values?.email && values?.phone && values?.role){
        console.log("update user Form all values => ", values,selectedUser?._id);
      
        updateUser({id:selectedUser?._id,...values}).then((res) => {
              if (res.data){
                console.log("res.data updateUser ", res?.data);
                // swal("Success!", `${res?.data?.message}`, "success");
              }
            });

      }else{
        // console.log('plz fill all values')
        swal("Error!", `Please fill all fields`, "error");
      }

     
      // action.resetForm();
    },
  });


  // useEffect(() => {
  //   const tmpData = []
  //   if (userRoles && userRoles.data) {
  //     userRoles.data.map((item, index) => {
  //       tmpData.push({
  //         id: index,
  //         _id: item._id,
  //         title: item.title,
  //         modules: item.modules.join(", "),
  //         createdAt: item.createdAt
  //       })
  //     })
  //   }
  //   setUserRoleData(tmpData)
  // }, [userRoles])
    
  return (
    <div>
      <Box>
        <UserListBreadcrumbs setShowUserDetail={setShowUserDetail} />
      </Box>

      <Box mb="24px">
        {" "}
        <Typography sx={Typo1}>Upload New Media </Typography>
      </Box>

      <Box>
        <UserListImgBox formik={formik} selectedUser={selectedUser} />
      </Box>

      <Box mt="32px">
        <UserListFieldBox formik={formik} />
      </Box>

      <Box mt="24px">
        <ModulePermission hasTextBtn={true} handleCheckCheckbox={handleCheckCheckbox}  onClickFunc={() => {
                setOpenCancelDialog(true);
              }} />
        <Box mt="32px" sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                lg: "row",
                md: "row",
                sm: "column",
                xs: "column",
              },
            }}
          >
            {totalSelectedCheckboxes ? (
              <Box>
                <Btn1 variant="outlined">Back</Btn1>
              </Box>
            ) : (
              ""
            )}
            <Box
              sx={{
                ml: { lg: "16px", md: "16px", sm: "0px", xs: "0px" },
                mt: { lg: "0px", md: "0px", sm: "10px", xs: "10px" },
              }}
            >
              <Btn2 variant="contained" onClick={formik.handleSubmit}>Submit</Btn2>
            </Box>
          </Box>
        </Box>
      </Box>

      {openCancelDialog ? (
          <CancelSubscriptionComp
            open={openCancelDialog}
            setOpen={setOpenCancelDialog}
            title={"Are you sure ?"}
            subTitle={"You will not be able to recover this module"}
            BtnmarginTop={"30px"}
           
          />
        ) : (
          ""
        )}
    </div>
  );
};
