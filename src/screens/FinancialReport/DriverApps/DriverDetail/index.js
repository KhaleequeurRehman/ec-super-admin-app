import React, { useEffect, useState } from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CustomBreadcrumbs from '../../../../components/CustomBreadcrumbs'
import Grid from '@mui/material/Grid';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import ProfileCard from '../../ProfileCard';
import BalanceCard from '../../BalanceCard';
import { SalesChart } from '../../../../components/Charts/SalesChart';
import WidthDrawHistoryItemCard from '../../WidthDrawHistoryItemCard';
import RecentOrder from '../../RecentOrder';
import Chip from '@mui/material/Chip';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';
import { useGetFinancialDetailOfDriverMutation, useGetSubscriptionForFinancialDetailOfDriverMutation, useMakeAdjustmentForFinancialDetailOfDriverMutation } from '../../../../api/drivers';
import { InputAdornment, OutlinedInput } from '@mui/material';

const breadcrumbsLinksDataArr = [
  {
      text:"Financial",
      url:"#",
  },
]


const DriverDetail = ({setShowDriverDetailHandler,selectedDriver}) => {

  
  const [dateValue, setDateValue] = useState(dayjs('2014-08-18T21:11:54'));

 const [getFinancialDetailOfDriver,resdata] = useGetFinancialDetailOfDriverMutation()
 const [financialDetailOfDriver, setFinancialDetailOfDriver] = useState("");

  const [getSubscriptionForFinancialDetailOfDriver,respdata] = useGetSubscriptionForFinancialDetailOfDriverMutation()

const [subscriptionForFinancialDetailOfDriver, setSubscriptionForFinancialDetailOfDriver] = useState("");


  const [makeAdjustmentForFinancialDetailOfDriver,responsedata] = useMakeAdjustmentForFinancialDetailOfDriverMutation()
  

  const getSubscriptionForFinancialDetailOfDriverFunc = () => {
    getSubscriptionForFinancialDetailOfDriver({id:selectedDriver?._id,page:1,size:10}).then((res) => {
      if (res.data){
        console.log("res.data subscriptionForFinancialDetailOfDriverData ", res?.data);
        setSubscriptionForFinancialDetailOfDriver(res?.data)
      }
    });
  }


  const getFinancialDetailOfDriverFunc = () => {
    getFinancialDetailOfDriver({id:selectedDriver?._id}).then((res) => {
      if (res.data){
        console.log("res.data financialDetailOfDriverData ", res?.data);
        setFinancialDetailOfDriver(res?.data?.details)
      }
    });
  }


  useEffect(() => {
    getFinancialDetailOfDriverFunc()
  }, [])


  useEffect(() => {
    getSubscriptionForFinancialDetailOfDriverFunc()
  }, [])
  

  const handleChange = (newDateValue) => {
    setDateValue(newDateValue);
  };

  const girdTableColumnsArr = [
    { field: "id", headerName: "#", width: 70 },
    { 
     field: "subId",
     headerName: "Id",
     width: 150 ,
    },
    {
      field: "date",
      headerName: "Date",
      width: 180,
      height:70,
      renderCell: (params) => {
        return (
          <>
            <Box sx={{p:"4px 10px",border:"1px solid #D5E6E5",borderRadius:"4px"}}>
              <Typography sx={{fontSize:"14px",fontWeight:"400"}}>{params.value}</Typography>
            </Box>
          </>
        );
      },
    },
    {
      field: "time",
      headerName: "Time",
      width: 180,
    },
    {
      field: "type",
      headerName: "Type",
      width: 210,
      renderCell: (params) => {
        const {value} = params
        let chipBgColor = ''
        if(value.toLowerCase() ==="Personal subscription" || value.toLowerCase() === "weekly subscription"|| value.toLowerCase() ==="Weekly subscription"){
          chipBgColor ='#7B49E5'
        }else if(value.toLowerCase() === "Multiple subscription"){
          chipBgColor ='#158FAD'
        }else if(value.toLowerCase() === "Bussines subscription"){
          chipBgColor ='#FF9933'
        }else if(value.toLowerCase() === "Single order"){
          chipBgColor ='#7ECC49'
        }else if(value.toLowerCase() === "Fitness subscription"){
          chipBgColor ='#FF8D85'
        }
        return (
          <>
            <Box>
              <Chip label={params.value} variant="contained" sx={{background: chipBgColor,
               borderRadius: '6px', color: '#fff'}} />
            </Box>
          </>
        );
      },
    },
    {
      field: "amount",
      headerName: "Amount",
      width: 170,
      renderCell: (params) => {
        return (
          <>
            <Typography sx={{fontSize:"14px",fontWeight:"600",color:"#42C677"}}>{params.value}</Typography>
          </>
        );
      },
    },
  ];
  
  const gridTableRowArr = [
    {
      id: 1,
      qty:"60 Order",
      distance:"60 Order",
      date: "Thu, 21 Nov 2021",
      time: "04.00 Pm - 06.00 Am",
      amount: "+ $ 230",
    },
    {
      id: 2,
      qty:"60 Order",
      distance:"60 Order",
      date: "Thu, 21 Nov 2021",
      time: "04.00 Pm - 06.00 Am",
      amount: "+ $ 230",
    },
    {
      id: 3,
      qty:"60 Order",
      distance:"60 Order",
      date: "Thu, 21 Nov 2021",
      time: "04.00 Pm - 06.00 Am",
      amount: "+ $ 230",
    },
    {
      id: 4,
      qty:"60 Order",
      distance:"60 Order",
      date: "Thu, 21 Nov 2021",
      time: "04.00 Pm - 06.00 Am",
      amount: "+ $ 230",
    },
    {
      id: 5,
      qty:"60 Order",
      distance:"60 Order",
      date: "Thu, 21 Nov 2021",
      time: "04.00 Pm - 06.00 Am",
      amount: "+ $ 230",
    },
    {
      id: 6,
      qty:"60 Order",
      distance:"60 Order",
      date: "Thu, 21 Nov 2021",
      time: "04.00 Pm - 06.00 Am",
      amount: "+ $ 230",
    },
    {
      id: 7,
      qty:"60 Order",
      distance:"60 Order",
      date: "Thu, 21 Nov 2021",
      time: "04.00 Pm - 06.00 Am",
      amount: "+ $ 230",
    },
    {
      id: 8,
      qty:"60 Order",
      distance:"60 Order",
      date: "Thu, 21 Nov 2021",
      time: "04.00 Pm - 06.00 Am",
      amount: "+ $ 230",
    },
    {
      id: 9,
      qty:"60 Order",
      distance:"60 Order",
      date: "Thu, 21 Nov 2021",
      time: "04.00 Pm - 06.00 Am",
      amount: "+ $ 230",
    },
  ];

  return (
    <>
    <Box width="100%">
      <Box width="100%" px="20px">
        <CustomBreadcrumbs typographyText="Muhammad Bairos" breadcrumbsLinksArr={breadcrumbsLinksDataArr} clickHandler={()=> setShowDriverDetailHandler(false) } />
        <Grid container gap={2}>
          <Grid item xs={12} md={7.5} my="10px">
            {/* <Box sx={{width: "100%",border:"1px solid #E1E1E6"}}> */}
            <Box sx={{width: "100%"}}>
              {/* <ProfileCard 
              imgSrc="assets/images/profilewithRedIMac.png"
              title="Chef Juna Catering"
              subTitle="ECD - 12345"
              address="Tamworth Rd, Long Eaton, Canada"
              /> */}
               <ProfileCard 
                  imgSrc="assets/images/profilewithRedIMac.png"
                  // title="Chef Juna Catering"
                  title={`${financialDetailOfDriver?.driver?.firstName !== undefined || financialDetailOfDriver?.driver?.firstName !== null ? `${financialDetailOfDriver?.driver?.firstName}` : "no data"}`}
                  // subTitle="ECD - 12345"
                  subTitle={`${financialDetailOfDriver?.driver?.driverId !== undefined || financialDetailOfDriver?.driver?.driverId !== null ? financialDetailOfDriver?.driver?.driverId : "no data"}`}
                  // address="Tamworth Rd, Long Eaton, Canada"
                  address={`${financialDetailOfDriver?.driver?.address !== undefined ? financialDetailOfDriver?.driver?.address : "no data"}`}
                  />
              <Box sx={{my:"20px"}}>
                {/* <BalanceCard 
                  title="Balance"
                  mainText="$ 312.00" 
                  superText="+ $ 120.00"
                  percentText="30%" 
                  labelSx={{fontSize:{xs:"13px",md:"18px"},fontWeight:"500",color:"#1A1824",my:"5px"}}
                /> */}
                    <BalanceCard 
                      title="Balance"
                      // mainText="$ 312.00" 
                      mainText={financialDetailOfDriver?.totalBalance !==undefined || financialDetailOfDriver?.totalBalance !== null ? `$${Number(financialDetailOfDriver?.totalBalance).toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 })}` : 'no data'}
                      // superText="+ $ 120.00"
                      superText={financialDetailOfDriver?.totalBalance !==undefined || financialDetailOfDriver?.totalBalance !== null ? `+ $ ${Number(financialDetailOfDriver?.totalBalance).toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 })}` : 'no data'}
                      percentText="30%" 
                      labelSx={{fontSize:{xs:"13px",md:"18px"},fontWeight:"500",color:"#1A1824",my:"5px"}}
                      balanceValue={financialDetailOfDriver?.totalBalance}
                      selectedRow={selectedDriver}
                      onSubmitHandler={makeAdjustmentForFinancialDetailOfDriver}
                    />
              </Box>
              <Box sx={{my:"20px",width:"100%",height:"355px",border:"1px solid #e1e1e6",borderRadius:"8px"}}>
                <SalesChart text="Overview" height="355px" hasMenu={false} />
                {/* <img src="assets/images/overallGrowth.svg" alt="overallGrowth_img" width="100%" height="100%" /> */}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} my="10px">
            {/* <Box sx={{width: "100%",border:"1px solid #E1E1E6"}}> */}
            <Box sx={{width: "100%"}}>
              <Box sx={{textAlign:"right"}}>
                <ButtonGroup
                  disableElevation
                  variant="contained"
                  aria-label="Disabled elevation buttons"
                >
                  <Button variant="contained" disableRipple sx={{borderColor:"unset",bgcolor:"#2B817B",fontWeight:"500",fontSize:"14px",minWidth:"127px",'&:hover':{bgcolor:"#2B817B",borderColor:"unset"}}}>Weekly</Button>
                  <Button variant="contained" disableRipple sx={{borderColor:"unset",bgcolor:"#F6F6F6",minWidth:"127px",fontWeight:"400",color:"#9EA3AE",fontSize:"14px",'&:hover':{bgcolor:"#F6F6F6",borderColor:"unset"}}}>Monthly</Button>
                </ButtonGroup>
              </Box>
            </Box>
            <Box sx={{my:"30px",width:"100%" }}>
              <Typography sx={{my:"10px",color:"#545359",fontSize:{xs:"13px",md:"14px"},fontWeight:"500"}}>Date</Typography>
              <Box>
                {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    // label="Date desktop"
                    inputFormat="MM/DD/YYYY"
                    value={dateValue}
                    onChange={handleChange}
                    renderInput={(params) => <TextField size='small' sx={{width:"100%"}} {...params} />}
                  />
                </LocalizationProvider> */}
                 <OutlinedInput
                  placeholder='Date'
                  fullWidth
                  value={`${new Date(financialDetailOfDriver?.dataFrom).toLocaleDateString()} - ${new Date(financialDetailOfDriver?.dataTo).toLocaleDateString()}`}
                  sx={{
                      backgroundColor: "#F6F6F6",
                      width: "100%",
                      height: "40px",
                      fontSize: "14px",
                  }}
                  disabled
                  endAdornment={
                    <InputAdornment position="end">
                      <img src="assets/images/calendar.svg" alt="calendar pic" height="16px" width="16px" />
                    </InputAdornment>
                  }
                  />
              </Box>
            </Box>
            {
              [
                {
                  title:"Working Hours",
                  mainText:"120", 
                  superText:"+ 20 Hours",  
                  lowerText:"Hours",
                  underlineText:"See Details",
                  percentText:"30%",
                  hasBtn:false,
                  isCalledFromDriverApps:true,
                },
                {
                  title:"Delivery Distance",
                  mainText:"120", 
                  superText:"+ 20 Mile",  
                  lowerText:"Mile",
                  underlineText:"See Details",
                  percentText:"30%",
                  hasBtn:false,
                  isCalledFromDriverApps:true,
                },
                {
                  title:"Total Delivery",
                  mainText:"120", 
                  superText:"+ 20 Delivery",  
                  lowerText:"Delivery",
                  underlineText:"See Details",
                  percentText:"30%",
                  hasBtn:false,
                  isCalledFromDriverApps:true,
                },
              ].map((item,index)=> (
                <Box sx={{my:"20px"}} key={index}>
                  <BalanceCard 
                    title={item.title}
                    mainText={item.mainText} 
                    superText={item.superText} 
                    lowerText={item.lowerText}
                    underlineText={item.underlineText}
                    percentText={item.percentText}
                    labelSx={{fontSize:{xs:"13px",md:"14px"},fontWeight:"400",color:"#9EA3AE",my:"5px"}}
                    hasBtn={item.hasBtn}
                    isCalledFromDriverApps={item.isCalledFromDriverApps}
                  />
                </Box>
              ))
            }
          </Grid>
        </Grid>
        <Box sx={{mt:"20px",mb:"60px"}}>
            <RecentOrder girdTableColumns={girdTableColumnsArr} gridTableRow={subscriptionForFinancialDetailOfDriver?.newSubscriptionData || []} />
        </Box>
      </Box>
    </Box>
    </>
  )
}

export default DriverDetail