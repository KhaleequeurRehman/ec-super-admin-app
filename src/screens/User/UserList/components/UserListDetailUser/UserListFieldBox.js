import React from "react";
import { styled, IconButton, createStyles, Select, FormControl } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import { useEffect } from "react";
import { useGetAllRolesQuery } from "api/roles";
import { useState } from "react";

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

export const UserListFieldBox = ({formik}) => {

  const { data: userRoles, isLoading } = useGetAllRolesQuery(`page=&size=&searchBy=`)
    
  const [userRoleData, setUserRoleData] = useState([])

  const [menuVal, setMenuVal] = React.useState("Admin Role");
  const [open, setOpen] = React.useState(true);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openBox = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    // setDisableFunc(true);
  };
  const handleCloseBox = () => {
    setAnchorEl(null);
  };


  useEffect(() => {
    const tmpData = []
    if (userRoles && userRoles.data) {
      userRoles.data.map((item, index) => {
        tmpData.push({
          id: index,
          _id: item._id,
          title: item.title,
          // modules: item.modules.join(", "),
          modules: item.modules,
          createdAt: item.createdAt
        })
      })
    }
    setUserRoleData(tmpData)
  }, [userRoles])
  
  console.log("userRoleData ",userRoleData)

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
        }}
      >
        <Box width="100%" mr="20px">
          <FieldTitle
            sx={{
              fontSize: "14px",
              fontWeight: "500",
              marginTop: "9px",
              mb: "8px",
              color: "#545359",
            }}
          >
            First name :
          </FieldTitle>

          <OutlinedInput
            placeholder="Type your first name"
            name='firstName'
            value={formik.values.firstName} 
            onChange={formik.handleChange}
            // onChange={(e)=> formik.setFieldValue('firstName',e.target.value)}
            onBlur={formik.handleBlur} 
            errors={formik.errors.firstName} 
            touched={formik.touched.firstName}
            sx={{
              backgroundColor: "#F6F6F6",
              width: "100%",
              height: "40px",
              fontSize: "14px",
            }}
          />
        </Box>

        <Box width="100%" mr="20px">
          <FieldTitle
            sx={{
              fontSize: "14px",
              fontWeight: "500",
              marginTop: "9px",
              mb: "8px",
              color: "#545359",
            }}
          >
            Last name :
          </FieldTitle>

          <OutlinedInput
            placeholder="Type your last name"
            name='lastName'
            value={formik.values.lastName} 
            onChange={formik.handleChange}
            // onChange={(e)=> formik.setFieldValue('lastName',e.target.value)}
            onBlur={formik.handleBlur} 
            errors={formik.errors.lastName} 
            touched={formik.touched.lastName}
            sx={{
              backgroundColor: "#F6F6F6",
              width: "100%",
              height: "40px",
              fontSize: "14px",
            }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
        }}
      >
        <Box width="100%" mr="20px">
          <FieldTitle
            sx={{
              fontSize: "14px",
              fontWeight: "500",
              marginTop: "9px",
              mb: "8px",
              color: "#545359",
            }}
          >
            Email :
          </FieldTitle>

          <OutlinedInput
            placeholder="Type your email address"
            name='email'
            value={formik.values.email} 
            onChange={formik.handleChange}
            // onChange={(e)=> formik.setFieldValue('email',e.target.value)}
            onBlur={formik.handleBlur} 
            errors={formik.errors.email} 
            touched={formik.touched.email}
            sx={{
              backgroundColor: "#F6F6F6",
              width: "100%",
              height: "40px",
              fontSize: "14px",
            }}
          />
        </Box>

        <Box width="100%" mr="20px">
          <FieldTitle
            sx={{
              fontSize: "14px",
              fontWeight: "500",
              marginTop: "9px",
              mb: "8px",
              color: "#545359",
            }}
          >
            Role
          </FieldTitle>

          <FormControl fullWidth size="small">
              <Select
              name='role'
              value={formik.values.role} 
              onChange={formik.handleChange}
              // onChange={(e)=> formik.setFieldValue('role',e.target.value)}
              onBlur={formik.handleBlur} 
              errors={formik.errors.role} 
              touched={formik.touched.role}
              inputProps={{ 'aria-label': 'Without label' }}
              sx={{
                backgroundColor: "#F6F6F6",
                width: "100%",
                mt: "8px",
                fontSize: "14px",
                mb: "12px",
              }}
              >
                {
                      (Array.isArray(userRoleData) && userRoleData?.length>0) &&
                      userRoleData.map((item,i)=> (
                        // <MenuItem value={item?._id} key={i}>{item?.title}</MenuItem>
                        <MenuItem value={item?.title} key={i}>{item?.title}</MenuItem>
                      ))
                    }
                {/* <MenuItem value="Select">
                <Typography sx={{fontSize: { xs: "13px", md: "14px" },fontWeight: "500",color: "#545359"}}>Select</Typography>
                </MenuItem>
                <MenuItem value="Customer Service Driver">
                <Typography sx={{fontSize: { xs: "13px", md: "14px" },fontWeight: "500",color: "#545359"}}>Customer Service Driver</Typography>
                </MenuItem> */}
              </Select>
            </FormControl>

          {/* <Button
            fullWidth
            id="basic-button"
            aria-controls={openBox ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            endIcon={<KeyboardArrowDownOutlinedIcon />}
            sx={{
              textTransform: "capitalize",
              fontSize: {
                xl: "18px",
                lg: "14px",
                md: "14px",
                sm: "14px",
                xs: "14px",
              },
              fontWeight: "400",
              pl: "0px",
              borderColor: "#E1E1E6",
              border: "1px solid #E1E1E6",
              fontFamily: "outfit",
              height: {
                xl: "70px",
                lg: "48px",
                md: "48px",
                sm: "auto",
                xs: "auto",
              },
              borderRadius: "6px",
              backgroundColor: "#F6F6F6",
            //   color: "#9EA3AE",
              color: menuVal !== "Admin Role" ? "#1A1824" : "#9EA3AE",
              justifyContent: "space-between",
              pl: "16px",
              pr: "16px",
            }}
          >
            {menuVal}
          </Button>

          <Menu
            fullWidth
            id="basic-menu"
            anchorEl={anchorEl}
            open={openBox}
            onClose={handleCloseBox}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            // elevation={0}
            sx={{
              border: "1px solid #E1E1E6",
              borderRadius: "6px",
            
            }}
          >
            <MenuItem
              sx={{
                color: "#1A1824",
                width: {xl: "550px", lg: "450px", md: "450px", sm: "450px", xs: "100%",},
                
                fontSize: "14px",
                fontWeight: "600",
              }}
              onClick={(e) => {
                setMenuVal("Customer Service Driver");
                handleCloseBox();
                
              }}
            >
              <ListItemText
                primary="Customer Service Driver"
                sx={{ color: "#1A1824" }}
                primaryTypographyProps={{
                  fontSize: "14px",
                  fontFamily: "outfit",
                  fontWeight:  "400",
                }}
              />
             
             
            </MenuItem>
          
          </Menu> */}

          {/* <OutlinedInput
              placeholder="Admin Role"
              sx={{
                backgroundColor: "#F6F6F6",
                width: "100%",
                height: "40px",
                fontSize: "14px",
              }}
            /> */}
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
        }}
      >
        <Box width="100%" mr="20px">
          <FieldTitle
            sx={{
              fontSize: "14px",
              fontWeight: "500",
              marginTop: "9px",
              mb: "8px",
              color: "#545359",
            }}
          >
            Numberphone :
          </FieldTitle>

          <OutlinedInput
            placeholder="XXX - XXX - XXX"
            name='phone'
            value={formik.values.phone} 
            onChange={formik.handleChange}
            // onChange={(e)=> formik.setFieldValue('phone',e.target.value)}
            onBlur={formik.handleBlur} 
            errors={formik.errors.phone} 
            touched={formik.touched.phone}
            sx={{
              backgroundColor: "#F6F6F6",
              width: "100%",
              height: "40px",
              fontSize: "14px",
            }}
          />
        </Box>

        <Box width="100%" mr="20px">
          <FieldTitle
            sx={{
              fontSize: "14px",
              fontWeight: "500",
              marginTop: "9px",
              mb: "8px",
              color: "#545359",
            }}
          >
            Password 
          </FieldTitle>

          <OutlinedInput
            placeholder="Type your password"
            name='password'
            value={formik.values.password} 
            onChange={formik.handleChange}
            // onChange={(e)=> formik.setFieldValue('password',e.target.value)}
            onBlur={formik.handleBlur} 
            errors={formik.errors.password} 
            touched={formik.touched.password}
            sx={{
              backgroundColor: "#F6F6F6",
              width: "100%",
              height: "40px",
              fontSize: "14px",
            }}
          />
        </Box>
      </Box>
    </div>
  );
};
