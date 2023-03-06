import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import { styled, Typography, Button } from "@mui/material";
import CustomCheckbox from "../CustomCheckbox";
import { CustomerCheckbox } from "./CustomerCheckbox";
import { CustomSelectField } from "./CustomSelectField";
import CustomerButtonGroup from "./CustomerButtonGroup";
import { useGetCustomersWithFilterMutation } from "../../../../api/customers";


const checkboxData = [
  {
    value: true,
    title: "All Order Type",
    name:"allOrderType"
  },
  {
    value: true,
    title: "Personal Subscription",
    name:"personalSubscription"
  },
  {
    value: true,
    title: "Single Order",
    name:"singleOrder"
  },
  {
    value: true,
    title: "Event Catering",
    name:"eventCatering"
  },
  {
    value: true,
    title: "Fitness Subscription",
    name:"fitnessSubscription"
  },
  {
    value: true,
    title: "Multiple Subscription",
    name:"multipleSubscription"
  },
];


const menuFieldsData = [
  {
    mainTitle: "Select City",
    initialMenuVal: "Select City",
    icon: "./assets/images/grayArrow-down.svg",
  },

  {
    mainTitle: "Select Menu",
    initialMenuVal: "Select Menu",
    icon: "./assets/images/grayArrow-down.svg",
    hasEndCheckbox: true,
    hasEndCheckboxTitle: "Only Dietary Menu",
  },
  {
    mainTitle: "Select Cuisine :",
    initialMenuVal: "Select Cuisine ",
    icon: "./assets/images/grayArrow-down.svg",
  },
  {
    mainTitle: "Date :",
    initialMenuVal: "2021/12/12 - 2021/12/12",
    icon: "./assets/images/calendar.svg",
  },
  {
    mainTitle: "Select Restaurant :",
    initialMenuVal: "Select Restaurant",
    icon: "./assets/images/grayArrow-down.svg",
  },
  {
    mainTitle: "Select Driver :",
    initialMenuVal: "Driver Name",
    icon: "./assets/images/grayArrow-down.svg",
  },
];

export const CustomerFieldBox = ({setCustomersData}) => {

  const [getCustomersWithFilter, resdata] = useGetCustomersWithFilterMutation()
  const [customersWithFilterData, setCustomersWithFilterData] = useState("")
  // const [checkboxVal, setCheckboxVal] = useState({
  //   allOrderType:true,
  //   personalSubscription:true,
  //   singleOrder:true,
  //   eventCatering:true,
  //   fitnessSubscription:true,
  //   multipleSubscription:true,
  // })
  const [checkboxVal, setCheckboxVal] = useState({
    "All Order Type":false,
    "Personal Subscription":false,
    "Single Order":false,
    "Event Catering":false,
    "Fitness Subscription":false,
    "Multiple Subscription":false,
  })
  const [selectedCheckboxArray, setSelectedCheckboxArray] = useState([])


const checkboxOnChangeHandler = (e) =>{
  console.log('checkboxOnChangeHandler data ',e?.target?.name,e?.target?.checked,e?.target?.value)
  if(e?.target?.checked){
    setCheckboxVal({...checkboxVal,[e?.target?.name]:true})
    setSelectedCheckboxArray([...selectedCheckboxArray,e?.target?.name])
  }else{
    setCheckboxVal({...checkboxVal,[e?.target?.name]:false})
    const newSelectedCheckboxArray = selectedCheckboxArray.filter((currVal)=> currVal !== e?.target?.name)
    setSelectedCheckboxArray([...newSelectedCheckboxArray])
  }
}

const btnApplyCLickHandler = ()=> {
  console.log("btnApplyCLickHandler clicked")
  // getCustomersWithFilter().then((res) => {
  //   if (res.data){
  //     console.log("res.data customersData ", res?.data);
  //     setCustomersData(res?.data)
  //   }
  // });
}


  const MainBox = styled(Box)(({ theme }) => ({
    borderRadius: "6px",
    padding: "24px",
    width: "100%",
    border: "1px solid #D5E6E5",
    [theme.breakpoints.up("sm")]: {
      //   width: 'auto',
    },
  }));

  const Typo1 = styled(Typography)(({ theme }) => ({
    fontSize: "12px",
    fontWeight: "400",
    lineHeight: "16px",
    color: "#9EA3AE",
    [theme.breakpoints.up("sm")]: {
      //   width: 'auto',
    },
  }));

  const BtnTextTypo1 = {
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "22.4px",
    color: "#2B817B",
    textTransform: "capitalize",
    textDecoration: "underline",
  };

  const Button1 = styled(Button)(({ theme }) => ({
    fontSize: "14px",
    fontWeight: "600",
    lineHeight: "20px",
    textTransform: "capitalize",
    color: "#2B817B",
    border: "1px solid #80B3B0",
    borderRadius: "4px",
    paddingLeft: "16px",
    paddingRight: "16px",
    paddingTop: "10px",
    paddingBottom: "10px",
    width: "104px",
    height: "40px",

    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      width: "70px",

    },
  }));

  const Button2 = styled(Button)(({ theme }) => ({
    fontSize: "14px",
    fontWeight: "600",
    lineHeight: "20px",
    textTransform: "capitalize",
    color: "#FFFFFF",
    backgroundColor: "#2B817B",
    borderRadius: "4px",
    paddingLeft: "16px",
    paddingRight: "16px",
    paddingTop: "10px",
    paddingBottom: "10px",
    width: "104px",
    height: "40px",

    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      width: "70px",

    },
  }));

  console.log("checkboxVal state ", checkboxVal)
  console.log("selectedCheckboxArray state ", selectedCheckboxArray)
  return (
    <div>
      <MainBox mb="24px">


        <Box sx={{ display: "flex", flexDirection: {lg: "row", md: "row", sm: "row", xs: "column"} }}>
          <Box>
            <Box>
              <Box>
                <Typo1>Order type :</Typo1>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mt: "8px",
                  //   width: "70%",
                }}
              >
                <Grid
                  container
                  spacing={1}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  {/* {checkboxData.map((item,i) => {
                    return (
                        <Grid xl={6} item lg={6} md={6} sm={6} xs={12} key={i}>
                          <CustomerCheckbox item={item} />
                          <CustomerCheckbox item={item} name={item?.name} value={item.value} onClick={(e)=> {checkboxOnChangeHandler(e,item);}} />
                        </Grid>
                    );
                  })} */}
                  {Object.keys(checkboxVal).map((item,index) => {
                    return (
                      <Grid xl={6} item lg={6} md={6} sm={6} xs={12} key={index}>
                        <CustomerCheckbox item={{title:item}} name={item} 
                        checked={checkboxVal[item]} 
                        onChange={(e)=> checkboxOnChangeHandler(e)} 
                        />
                      </Grid>
                    );
                  })}
                    {/* <Grid xl={6} item lg={6} md={6} sm={6} xs={12}>
                      <CustomerCheckbox item={{title:"All Order Type"}} name="allOrderType" 
                      checked={checkboxVal?.allOrderType} 
                      onChange={(e)=> checkboxOnChangeHandler(e)} 
                      />
                    </Grid>
                    
                    <Grid xl={6} item lg={6} md={6} sm={6} xs={12}>
                      <CustomerCheckbox item={{title:"Personal Subscription"}} name="personalSubscription" 
                        checked={checkboxVal?.personalSubscription} 
                        onChange={(e)=> checkboxOnChangeHandler(e)} 
                        />
                    </Grid>
                    
                    <Grid xl={6} item lg={6} md={6} sm={6} xs={12}>
                      <CustomerCheckbox item={{title:"Single Order"}} name="singleOrder" 
                        checked={checkboxVal?.singleOrder} 
                        onChange={(e)=> checkboxOnChangeHandler(e)} 
                        />
                    </Grid>

                    <Grid xl={6} item lg={6} md={6} sm={6} xs={12}>
                      <CustomerCheckbox item={{title:"Event Catering"}} name="eventCatering" 
                        checked={checkboxVal?.eventCatering} 
                        onChange={(e)=> checkboxOnChangeHandler(e)} 
                        />
                    </Grid>

                    <Grid xl={6} item lg={6} md={6} sm={6} xs={12}>
                      <CustomerCheckbox item={{title:"Fitness Subscription"}} name="fitnessSubscription" 
                        checked={checkboxVal?.fitnessSubscription} 
                        onChange={(e)=> checkboxOnChangeHandler(e)} 
                        />
                    </Grid>

                    <Grid xl={6} item lg={6} md={6} sm={6} xs={12}>
                      <CustomerCheckbox item={{title:"Multiple Subscription"}} name="multipleSubscription" 
                        checked={checkboxVal?.multipleSubscription} 
                        onChange={(e)=> checkboxOnChangeHandler(e)} 
                        />
                    </Grid> */}
                    
                      
                      
                </Grid>
              </Box>
            </Box>

            <Box mt="24px" sx={{mb: {lg: "0px", md: "0px", sm: "0px", xs: "24px"}}}>
              <CustomerButtonGroup />
            </Box>
          </Box>

          <Box
            sx={{
              width: "100%",
            }}
          >
            <Grid
              container
              spacing={2}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              {menuFieldsData.map((item,i) => {
                return (
                  //<>
                    <Grid xl={6} item lg={6} md={6} sm={6} xs={12} key={i}>
                      <CustomSelectField
                        // mainTitle={"Select City"}
                        // initialMenuVal={"Select city"}
                        // icon={"./assets/images/grayArrow-down.svg"}
                        // hasEndCheckbox
                        item={item}
                      />
                    </Grid>
                  //</>
                );
              })}
            </Grid>
          </Box>
        </Box>




        <Box sx={{ display: "flex", justifyContent: "space-between", mt: "39px" }}>
        <Box>
          <Button variant="text">
            <Typography sx={BtnTextTypo1}>Clear History</Typography>
            <Box sx={{ width: "16px", height: "16px" }}></Box>
          </Button>
        </Box>


            <Box sx={{ display: "flex" }}>
            <Box>
              <Button1 variant="outlined" >Cancel</Button1>
            </Box>
            <Box ml="24px">
              <Button2 variant="contained" onClick={btnApplyCLickHandler}>Apply</Button2>
            </Box>
            </Box>
          </Box>
      </MainBox>
    </div>
  );
};
