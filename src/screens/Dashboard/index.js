import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Button, CircularProgress, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import NotificationsIcon from "@mui/icons-material/Notifications";
// import { DashboardStatsData, DashboardStatsData2 } from '../../config';
import { DashboardStatsData2 } from '../../config';
import { SalesChart } from "../../components/Charts/SalesChart";
import { DonutChart } from "../../components/Charts/DonutChart";
import CustomBarChart from "../../components/Charts/CustomBarChart";
import DistributedColumnChart from "../../components/Charts/DistributedColumnChart";
import DonutChart2 from "../../components/Charts/DonutChart2";
import { useNavigate } from "react-router-dom";
import { useGetDashboardAnalyticsQuery } from "../../api/dashboard";


const Dashboard = () => {

  const navigate = useNavigate();

  const {data,isLoading,refetch,isSuccess} = useGetDashboardAnalyticsQuery()

  const [dashboardAnalyticsData, setDashboardAnalyticsData] = useState(data || "");

  const DashboardStatsData = [
    {
      img: "assets/images/totalUsers.svg",
      // title: "510",activeCustomers
      title: `${dashboardAnalyticsData?.activeCustomers !== undefined ? dashboardAnalyticsData?.activeCustomers : "no data"}`,
      subTitle: "Active customers",
      onClick: () => navigate("/customer")
    },
    {
      img: "assets/images/totalListedMenus.svg",
      // title: "510",
      title: `${dashboardAnalyticsData?.menus !== undefined ? dashboardAnalyticsData?.menus : "no data"}`,
      subTitle: "Total listed menus",
      onClick: () => navigate("/food_Menu")
    },
    {
      img: "assets/images/activeSubscriptions.svg",
      // title: "510",
      title: `${dashboardAnalyticsData?.activeSubscriptions !== undefined ? dashboardAnalyticsData?.activeSubscriptions : "no data"}`,
      subTitle: "Active Subscription",
      onClick: () => navigate("/subscription")
    },
    {
      img: "assets/images/deliveryDrivers.svg",
      // title: "510",
      title: `${dashboardAnalyticsData?.drivers !== undefined ? dashboardAnalyticsData?.drivers : "no data"}`,
      subTitle: "Delivery Drivers",
      onClick: () => navigate("/driver")
    },
  ];

  const  revenueDataCard = {
    img: "assets/images/totalRevenue.svg",
    // title: "5124.00",
    title: dashboardAnalyticsData?.totalRevnue !==undefined || dashboardAnalyticsData?.totalRevnue !== null ? `$${Number(dashboardAnalyticsData?.totalRevnue).toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 })}` : 'no data',
    subTitle: "Total Revenue",
    // title2: "200.00",
    title2: dashboardAnalyticsData?.todayRevnue !==undefined || dashboardAnalyticsData?.todayRevnue !== null ? `$${Number(dashboardAnalyticsData?.todayRevnue).toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 })}` : 'no data',
    subTitle2: "*Revenue from new order today",
  }

  const  feeGenerateDataCard = {
    img: "assets/images/totalFeeGenerated.svg",
    // title: "5124.00",
    title: dashboardAnalyticsData?.totalFeeGenerated !==undefined || dashboardAnalyticsData?.totalFeeGenerated !== null ? `$${Number(dashboardAnalyticsData?.totalFeeGenerated).toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 })}` : 'no data',
    subTitle: "Total Fee Generated",
    // title2: "200.00",
    title2: dashboardAnalyticsData?.todayFeeGenerated !==undefined || dashboardAnalyticsData?.todayFeeGenerated !== null ? `$${Number(dashboardAnalyticsData?.todayFeeGenerated).toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 })}` : 'no data',
    subTitle2: "*Total fee from new order today",
  }

  const distributedColumnChartCategories = dashboardAnalyticsData?.overAllGrowth !== undefined ? [...Object.keys(dashboardAnalyticsData?.overAllGrowth )] : ['Jan','Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','Nov','Dec']
  
  const distributedColumnChartSeries = dashboardAnalyticsData?.overAllGrowth !== undefined ? [...Object.values(dashboardAnalyticsData?.overAllGrowth )] : ['300', '360', '130', '100', '400','650', '140', '240', '400', '120','210', '100']

  const newSubscripitonSalesChartSeries = dashboardAnalyticsData?.newSubscriptions !== undefined ? [...Object.values(dashboardAnalyticsData?.newSubscriptions )] : [11, 22, 32, 45, 67, 79, 81, 9, 58, 67,55,77,22,1,3,4]
  // const newSubscripitonSalesChartSeries = [11, 22, 32, 45, 67, 79, 81, 9, 58, 67,55,77,22,1,3,4]

  const singleOrderSalesChartSeries = dashboardAnalyticsData?.singleOrder !== undefined ? [...Object.values(dashboardAnalyticsData?.singleOrder )] : [11, 22, 32, 45, 67, 79, 81, 9, 58, 67,55,77,22,1,3,4]
  // const singleOrderSalesChartSeries = [11, 22, 32, 45, 67, 79, 81, 9, 58, 67,55,77,22,1,3,4]

  const donughtChartSeries = dashboardAnalyticsData?.allSubscriptions !== undefined ? [...Object.values(dashboardAnalyticsData?.allSubscriptions )] : [11, 22, 32, 45, 67, 79, 81, 9, 58, 67,55,77,22,1,3,4]
  // const singleOrderSalesChartSeries = [11, 22, 32, 45, 67, 79, 81, 9, 58, 67,55,77,22,1,3,4]

  
  useEffect(() => {
    if(isSuccess === true){
      setDashboardAnalyticsData(data?.data || "")
    }
  }, [isSuccess])


  console.log("newSubscripitonSalesChartSeries => ",newSubscripitonSalesChartSeries)
  console.log("singleOrderSalesChartSeries => ",singleOrderSalesChartSeries)
  console.log("donughtChartSeries => ",donughtChartSeries)

  return (
    <>
      <Box sx={{ width: "100%" }}>
        {
          isLoading ? (
            <Box sx={{minHeight:"30vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
              <CircularProgress color="greenclr"/>
            </Box>
          ) 
          : 
          <>
            <Box className='rowOne' 
            sx={{my:"20px",border:"2px dashed #80B3B0", minHeight:"110px",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#F0FAF9",borderRadius:"8px"}}
            >
                <Box sx={{width:"90%",display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center"}}>
                <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",my:"10px"}}>
                    <Box sx={{p:"6px 12px",border:"1px solid #D5E6E5",color:"#2B817B",borderRadius:"8px"}}>
                    <NotificationsIcon sx={{color:"#2B817B",fontSize:"30px"}}/>
                    </Box>
                    <Box ml="20px">
                    <Typography sx={{fontSize:"18px",fontWeight:"500"}}>You have new meal approval request</Typography>
                    <Typography sx={{fontSize:"14px",fontWeight:"400",color:"#9EA3AE"}}>you have 4 meal approval request from 3 caterer that you need to review</Typography>
                    </Box>
                </Box>
                <Box sx={{my:"10px"}}>
                    <Button sx={{p:"8px 24px 8px 24px",borderStyle:"dashed",borderColor:"#80B3B0",color:"#2B817B",'&:hover':{borderStyle:"dashed",borderColor:"#80B3B0"}}} variant='outlined' onClick={() => navigate("/food_Menu")}>See all Request</Button>
                </Box>
                </Box>
            </Box>
            <Box className='rowTwo'>
            <Grid container>
              <Grid item xs={12} md={9}>
                <Grid item container gap={1} xs={12} sx={{p:"5px",my:"10px",justifyContent:"space-around"}}>
                  {
                    DashboardStatsData && DashboardStatsData.map((item, index) => ( 
                    <Grid item xs={12} md={4} lg={2.9} sx={{mb:"10px"}} key={index}>
                      <Box sx={{border:"1px solid #E1E1E6",borderRadius:"6px",display:"flex",flexWrap:"wrap",justifyContent:"space-around",alignItems:"center"}}>
                        <Box sx={{my:"10px"}}>
                          <Box>
                            <img src={item?.img} alt={"stats_img"+index} />
                          </Box>
                          <Typography sx={{fontSize:"20px",fontWeight:"500",mt:"10px",mb:"10"}}>{item?.title}</Typography>
                          <Typography sx={{fontSize:"14px",fontWeight:"400",color:"#9EA3AE",mt:"5px",mb:"10"}}>{item?.subTitle}</Typography>
                        </Box>
                        <Box sx={{my:"10px",alignSelf:"flex-start"}}>
                          <Typography sx={{fontSize:"14px",fontWeight:"400",color:"#2B817B",borderBottom:"1.5px solid #2B817B"}} onClick={item?.onClick}>See all</Typography>
                        </Box>
                      </Box>
                    </Grid>
                    ))
                  }
                </Grid>
                <Grid item container xs={12} gap={2} sx={{p:"5px",my:"10px" }}>
                  <Grid item xs={12} md={6.5} sx={{my:"10px",border:"1px solid #e1e1e6",borderRadius:"6px"}}>
                    {/* <img src="assets/images/overallGrowth.svg" alt="overallGrowth_img" width="100%" /> */}
                    {/* <SalesChart /> */}
                    {/* <CustomBarChart /> */}
                    <DistributedColumnChart 
                    distributedColumnChartCategories={distributedColumnChartCategories}
                    distributedColumnChartSeries={distributedColumnChartSeries}
                    label="Overall  Growth" 
                    />
                  </Grid>
                  <Grid item xs={12} md={5} sx={{my:"10px",border:"1px solid #e1e1e6",borderRadius:"6px"}}>
                    {/* <img src="assets/images/allActiveSubscription.svg" alt="allActiveSubscription_img" width="100%" /> */}
                    {/* <DonutChart /> */}
                    <DonutChart2 donughtChartSeries={donughtChartSeries} label="All Active Subscription"/>
                  </Grid>
                </Grid>
              </Grid> 
              <Grid item xs={12} md={3} my="10px">
              {/* {
                DashboardStatsData2 && DashboardStatsData2.map((item, index) => ( 
                  <Box sx={{border:"1px solid #E1E1E6",p:"10px 12px",borderRadius:"6px",my:"5px"}} key={index}>
                    <Box sx={{display:"flex",flexDirection:"column",flexWrap:"wrap"}}>
                      <Box sx={{my:"10px"}}>
                        <Box>
                          <img src={item?.img} alt={"stats_imgs"+index} /> 
                        </Box>
                        <Typography sx={{fontSize:"20px",fontWeight:"500",mt:"10px",mb:"10"}}>
                          <span style={{fontSize:"14px",fontWeight:"400",mt:"10px",color:"#9EA3AE",paddingRight:"5px"}}>$</span>
                          {item?.title}</Typography>
                        <Typography sx={{fontSize:"14px",fontWeight:"400",color:"#9EA3AE",mt:"5px",mb:"10"}}> {item?.subTitle}</Typography>
                      </Box>
                      <Box sx={{my:"10px",backgroundColor:"#F0FAF9",p:"5px 5px 30px 5px",borderRadius:"6px"}}>
                        <Typography sx={{fontSize:"20px",fontWeight:"500",mt:"10px",mb:"10"}}>
                          <span style={{fontSize:"12px",fontWeight:"400",mt:"10px",color:"#9EA3AE",paddingRight:"5px"}}>$</span>
                          {item?.title2} <span style={{fontSize:"12px",fontWeight:"600",mt:"10px",color:"#42C677",paddingRight:"5px",verticalAlign:"top"}}>++</span></Typography>
                        <Typography sx={{fontSize:"14px",fontWeight:"400",color:"#9EA3AE",mt:"5px",mb:"10"}}>{item?.subTitle2}</Typography>
                      </Box>
                    </Box>
                  </Box>
                ))
              } */}
                <Box sx={{border:"1px solid #E1E1E6",p:"10px 12px",borderRadius:"6px",my:"5px"}}>
                  <Box sx={{display:"flex",flexDirection:"column",flexWrap:"wrap"}}>
                    <Box sx={{my:"10px"}}>
                      <Box>
                        <img src={revenueDataCard?.img} alt={"stats_imgs"} /> 
                      </Box>
                      <Typography sx={{fontSize:"20px",fontWeight:"500",mt:"10px",mb:"10"}}>
                        <span style={{fontSize:"14px",fontWeight:"400",mt:"10px",color:"#9EA3AE",paddingRight:"5px"}}>$</span>
                        {revenueDataCard?.title}</Typography>
                      <Typography sx={{fontSize:"14px",fontWeight:"400",color:"#9EA3AE",mt:"5px",mb:"10"}}> {revenueDataCard?.subTitle}</Typography>
                    </Box>
                    <Box sx={{my:"10px",backgroundColor:"#F0FAF9",p:"5px 5px 30px 5px",borderRadius:"6px"}}>
                      <Typography sx={{fontSize:"20px",fontWeight:"500",mt:"10px",mb:"10"}}>
                        <span style={{fontSize:"12px",fontWeight:"400",mt:"10px",color:"#9EA3AE",paddingRight:"5px"}}>$</span>
                        {revenueDataCard?.title2} <span style={{fontSize:"12px",fontWeight:"600",mt:"10px",color:"#42C677",paddingRight:"5px",verticalAlign:"top"}}>++</span></Typography>
                      <Typography sx={{fontSize:"14px",fontWeight:"400",color:"#9EA3AE",mt:"5px",mb:"10"}}>{revenueDataCard?.subTitle2}</Typography>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{border:"1px solid #E1E1E6",p:"10px 12px",borderRadius:"6px",my:"5px"}}>
                  <Box sx={{display:"flex",flexDirection:"column",flexWrap:"wrap"}}>
                    <Box sx={{my:"10px"}}>
                      <Box>
                        <img src={feeGenerateDataCard?.img} alt={"stats_imgs"} /> 
                      </Box>
                      <Typography sx={{fontSize:"20px",fontWeight:"500",mt:"10px",mb:"10"}}>
                        <span style={{fontSize:"14px",fontWeight:"400",mt:"10px",color:"#9EA3AE",paddingRight:"5px"}}>$</span>
                        {feeGenerateDataCard?.title}</Typography>
                      <Typography sx={{fontSize:"14px",fontWeight:"400",color:"#9EA3AE",mt:"5px",mb:"10"}}> {feeGenerateDataCard?.subTitle}</Typography>
                    </Box>
                    <Box sx={{my:"10px",backgroundColor:"#F0FAF9",p:"5px 5px 30px 5px",borderRadius:"6px"}}>
                      <Typography sx={{fontSize:"20px",fontWeight:"500",mt:"10px",mb:"10"}}>
                        <span style={{fontSize:"12px",fontWeight:"400",mt:"10px",color:"#9EA3AE",paddingRight:"5px"}}>$</span>
                        {feeGenerateDataCard?.title2} <span style={{fontSize:"12px",fontWeight:"600",mt:"10px",color:"#42C677",paddingRight:"5px",verticalAlign:"top"}}>++</span></Typography>
                      <Typography sx={{fontSize:"14px",fontWeight:"400",color:"#9EA3AE",mt:"5px",mb:"10"}}>{feeGenerateDataCard?.subTitle2}</Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            </Box>
            <Box className='rowThree'>
              <Grid item container xs={12} gap={1} sx={{p:"5px",my:"10px",justifyContent:"space-around" }}>
                <Grid item xs={12} md={5.8} my="10px">
                  <Box width="100%" sx={{border:"1px solid #e1e1e6",borderRadius:"6px"}}>
                    {/* <img src="assets/images/newSubscription.svg" alt="newSubscription_img" width="100%" /> */}
                    {/* <SalesChart /> */}
                    <SalesChart SalesChartSeries={newSubscripitonSalesChartSeries} label="New Subscription" />
                    {/* <DistributedColumnChart /> */}
                  </Box>
                </Grid>
                <Grid item xs={12} md={5.9} my="10px">
                  <Box width="100%" sx={{border:"1px solid #e1e1e6",borderRadius:"6px"}}>
                    {/* <img src="assets/images/singleOrderMade.svg" alt="singleOrderMade_img" width="100%" /> */}
                    {/* <SalesChart /> */}
                    <SalesChart SalesChartSeries={singleOrderSalesChartSeries} label="Single Order Made" />
                    {/* <DistributedColumnChart /> */}
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </>
        }
      </Box>
    </>
  );
};

export default Dashboard;
