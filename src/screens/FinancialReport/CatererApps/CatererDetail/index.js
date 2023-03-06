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
import { useGetFinancialDetailOfCatererMutation, useGetSubscriptionForFinancialDetailOfCatererMutation,useMakeAdjustmentForFinancialDetailOfCatererMutation } from '../../../../api/caterers';
import { CircularProgress, InputAdornment, OutlinedInput } from '@mui/material';
import moment from 'moment';

const breadcrumbsLinksDataArr = [
  {
      text:"Financial",
      url:"#",
  },
]


const CatererDetail = ({setShowCatererDetailHandler,selectedCaterer}) => {

  
  const [dateValue, setDateValue] = useState(dayjs('2014-08-18T21:11:54'));
  
  const [getFinancialDetailOfCaterer,resdata] = useGetFinancialDetailOfCatererMutation()
  
  const [getSubscriptionForFinancialDetailOfCaterer,respdata] = useGetSubscriptionForFinancialDetailOfCatererMutation()

  const [makeAdjustmentForFinancialDetailOfCaterer,responsedata] = useMakeAdjustmentForFinancialDetailOfCatererMutation()
  
  const [financialDetailOfCaterer, setFinancialDetailOfCaterer] = useState("");

  const [subscriptionForFinancialDetailOfCaterer, setSubscriptionForFinancialDetailOfCaterer] = useState("");

  const handleChange = (newDateValue) => {
    setDateValue(newDateValue);
  };

  const getFinancialDetailOfCatererFunc = () => {
    getFinancialDetailOfCaterer({id:selectedCaterer?._id}).then((res) => {
      if (res.data){
        console.log("res.data financialDetailOfCatererData ", res?.data);
        setFinancialDetailOfCaterer(res?.data?.details)
      }
    });
  }

  const getSubscriptionForFinancialDetailOfCatererFunc = () => {
    // getSubscriptionForFinancialDetailOfCaterer({id:selectedCaterer?._id,page:1,size:10}).then((res) => {
    getSubscriptionForFinancialDetailOfCaterer({id:"63c00bce2197ca82a09533ec",page:1,size:10}).then((res) => {
      if (res.data){
        console.log("res.data subscriptionForFinancialDetailOfCatererData ", res?.data);
        setSubscriptionForFinancialDetailOfCaterer(res?.data)
      }
    });
    // makeAdjustmentForFinancialDetailOfCaterer({id:"63c00bce2197ca82a09533ec",page:1,size:10}).then((res) => {
    //   if (res.data){
    //     console.log("res.data subscriptionForFinancialDetailOfCatererData ", res?.data);
    //     setSubscriptionForFinancialDetailOfCaterer(res?.data)
    //   }
    // });
  }

useEffect(() => {
  getFinancialDetailOfCatererFunc()
}, [])

useEffect(() => {
  getSubscriptionForFinancialDetailOfCatererFunc()
}, [])


  const girdTableColumnsArr = [
    { field: "id", headerName: "#", width: 70 },
    { 
     field: "idOrder",
     headerName: "Id Order",
     width: 130 ,
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
        if(value==="Personal subscription" || value==="weekly subscription"|| value==="Weekly subscription"){
          chipBgColor ='#7B49E5'
        }else if(value==="Multiple subscription"){
          chipBgColor ='#158FAD'
        }else if(value==="Bussines subscription"){
          chipBgColor ='#FF9933'
        }else if(value==="Single order"){
          chipBgColor ='#7ECC49'
        }else if(value==="Fitness subscription"){
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
      idOrder:"EC - 12345",
      date: "Thu, 21 Nov 2021",
      time: "04.00 Pm - 06.00 Am",
      type: "Multiple subscription",
      amount: "+ $ 230",
    },
    {
      id: 2,
      idOrder:"EC - 12345",
      date: "Thu, 21 Nov 2021",
      time: "04.00 Pm - 06.00 Am",
      type: "Fitness subscription",
      amount: "+ $ 230",
    },
    {
      id: 3,
      idOrder:"EC - 12345",
      date: "Thu, 21 Nov 2021",
      time: "04.00 Pm - 06.00 Am",
      type: "Personal subscription",
      amount: "+ $ 230",
    },
    {
      id: 4,
      idOrder:"EC - 12345",
      date: "Thu, 21 Nov 2021",
      time: "04.00 Pm - 06.00 Am",
      type: "Single order",
      amount: "+ $ 230",
    },
    {
      id: 5,
      idOrder:"EC - 12345",
      date: "Thu, 21 Nov 2021",
      time: "04.00 Pm - 06.00 Am",
      type: "Personal subscription",
      amount: "+ $ 230",
    },
    {
      id: 6,
      idOrder:"EC - 12345",
      date: "Thu, 21 Nov 2021",
      time: "04.00 Pm - 06.00 Am",
      type: "Personal subscription",
      amount: "+ $ 230",
    },
    {
      id: 7,
      idOrder:"EC - 12345",
      date: "Thu, 21 Nov 2021",
      time: "04.00 Pm - 06.00 Am",
      type: "Multiple subscription",
      amount: "+ $ 230",
    },
    {
      id: 8,
      idOrder:"EC - 12345",
      date: "Thu, 21 Nov 2021",
      time: "04.00 Pm - 06.00 Am",
      type: "Personal subscription",
      amount: "+ $ 230",
    },
    {
      id: 9,
      idOrder:"EC - 12345",
      date: "Thu, 21 Nov 2021",
      time: "04.00 Pm - 06.00 Am",
      type: "Fitness subscription",
      amount: "+ $ 230",
    },
  ];

  console.log('selectedCaterer => ',selectedCaterer)
  console.log('financialDetailOfCaterer => ',financialDetailOfCaterer)

  console.log('subscriptionForFinancialDetailOfCaterer?.newSubscriptionData  => ',subscriptionForFinancialDetailOfCaterer?.newSubscriptionData)

  return (
    <>
    <Box width="100%">
      {
        resdata?.isLoading ? (
          <Box sx={{minHeight:"30vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <CircularProgress color="greenclr"/>
          </Box>
        ) 
        : 
        <>
          <Box width="100%" px="20px">
            <CustomBreadcrumbs typographyText="Chef Juna Catering" breadcrumbsLinksArr={breadcrumbsLinksDataArr}
            clickHandler={()=> setShowCatererDetailHandler(false) }
            />
            <Grid container gap={2}>
              <Grid item xs={12} md={7.5} my="10px">
                {/* <Box sx={{width: "100%",border:"1px solid #E1E1E6"}}> */}
                <Box sx={{width: "100%"}}>
                  <ProfileCard 
                  imgSrc="assets/images/profilewithRedIMac.png"
                  // title="Chef Juna Catering"
                  title={`${financialDetailOfCaterer?.caterer?.merchantName !== undefined || financialDetailOfCaterer?.caterer?.merchantName !== null ? financialDetailOfCaterer?.caterer?.merchantName : "no data"}`}
                  // subTitle="ECD - 12345"
                  subTitle={`${financialDetailOfCaterer?.caterer?.catererId !== undefined || financialDetailOfCaterer?.caterer?.catererId !== null ? financialDetailOfCaterer?.caterer?.catererId : "no data"}`}
                  // address="Tamworth Rd, Long Eaton, Canada"
                  address={`${financialDetailOfCaterer?.caterer?.address !== undefined || financialDetailOfCaterer?.caterer?.address !== null ? financialDetailOfCaterer?.caterer?.address : "no data"}`}
                  />
                  <Box sx={{my:"20px"}}>
                    <BalanceCard 
                      title="Balance"
                      // mainText="$ 312.00" 
                      mainText={financialDetailOfCaterer?.totalBalance !==undefined || financialDetailOfCaterer?.totalBalance !== null ? `$${Number(financialDetailOfCaterer?.totalBalance).toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 })}` : 'no data'}
                      // superText="+ $ 120.00"
                      superText={financialDetailOfCaterer?.totalBalance !==undefined || financialDetailOfCaterer?.totalBalance !== null ? `+ $ ${Number(financialDetailOfCaterer?.totalBalance).toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 })}` : 'no data'}
                      percentText="30%" 
                      labelSx={{fontSize:{xs:"13px",md:"18px"},fontWeight:"500",color:"#1A1824",my:"5px"}}
                      balanceValue={financialDetailOfCaterer?.totalBalance}
                      selectedRow={selectedCaterer}
                      onSubmitHandler={makeAdjustmentForFinancialDetailOfCaterer}
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
                      // defaultValue={`${moment(financialDetailOfCaterer?.dataFrom).format('ll').replace(',',"")} - ${moment(financialDetailOfCaterer?.dataTo).format('ll').replace(',',"")}`}
                      value={`${new Date(financialDetailOfCaterer?.dataFrom).toLocaleDateString()} - ${new Date(financialDetailOfCaterer?.dataTo).toLocaleDateString()}`}
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
                <Box sx={{my:"20px"}}>
                  <BalanceCard 
                    title="Total Sales"
                  // mainText="$ 312.00" 
                  mainText={financialDetailOfCaterer?.totalBalance !==undefined || financialDetailOfCaterer?.totalBalance !== null ? `$${Number(financialDetailOfCaterer?.totalBalance).toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 })}` : 'no data'} 
                  // superText="+ $ 120.00"
                  superText={financialDetailOfCaterer?.totalBalance !==undefined || financialDetailOfCaterer?.totalBalance !== null ? `+ $ ${Number(financialDetailOfCaterer?.totalBalance).toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 })}` : 'no data'}
                    percentText="30%" 
                    labelSx={{fontSize:{xs:"13px",md:"14px"},fontWeight:"400",color:"#9EA3AE",my:"5px"}}
                    hasBtn={false}
                  />
                  {/* <BalanceCard 
                    title="Working Hours"
                    mainText="120" 
                    superText="+ 20 Hours"  
                    lowerText="Hours"
                    underlineText="See Details"
                    percentText="30%"
                    labelSx={{fontSize:{xs:"13px",md:"14px"},fontWeight:"400",color:"#9EA3AE",my:"5px"}}
                    hasBtn={false}
                    isCalledFromDriverApps={true}
                  /> */}
                </Box>
                <Box sx={{width:"100%",border:"1px solid #E1E1E6",borderRadius:"8px",padding:"16px"}}>
                  <Typography sx={{fontSize:{xs:"13px",md:"16px"},fontWeight:"600",color:"#1A1824"}}>Withdraw history</Typography>
                  {
                    financialDetailOfCaterer?.widthdrawHistory !== undefined || 
                    financialDetailOfCaterer?.widthdrawHistory !== null && Array.isArray(financialDetailOfCaterer?.widthdrawHistory) ?(
                    financialDetailOfCaterer?.widthdrawHistory.map((currItem,index)=> (
                      <Box sx={{my:"15px"}} key={index}>
                        <WidthDrawHistoryItemCard date={currItem?.date} widthdraw={currItem?.widthdraw} remain={currItem?.remain} />
                      </Box>
                    )))
                    :
                    "no data"
                  }
                  <Box sx={{textAlign:"center"}}>
                    <Typography component="span" sx={{textAlign:"center",fontSize:{xs:"13px",md:"16px"}, fontWeight:"400", color:"#2B817B", borderBottom:"1.5px solid #2B817B", mr:"10px"}}>See More</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Box sx={{mt:"20px",mb:"60px"}}>
                {/* <RecentOrder girdTableColumns={girdTableColumnsArr} gridTableRow={gridTableRowArr} /> */}
                {
                  resdata?.isLoading ? (
                    <Box sx={{minHeight:"30vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
                      <CircularProgress color="greenclr"/>
                    </Box>
                  ) 
                  : 
                  <>
                    <RecentOrder girdTableColumns={girdTableColumnsArr} gridTableRow={subscriptionForFinancialDetailOfCaterer?.newSubscriptionData || []} />
                  </>
              }
            </Box>
          </Box>
        </>
      }
    </Box>
    </>
  )
}

export default CatererDetail