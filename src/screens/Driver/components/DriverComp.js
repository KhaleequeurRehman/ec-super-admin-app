import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { styled, Typography, Button, Grid, CircularProgress, Pagination } from "@mui/material";
import { CatererRequestNotification } from "../../Caterer/components/CatererComp/CatererRequestNotification";
import { CustomerHeader } from "../../Customer/components/CustomerHeader";
import { DriverCard } from "./DriverCard";
import { useGetAllDriversWithFilterMutation, useGetAllDriversWithFilterWithStatusMutation, useGetDriversMutation, useSearchDriversMutation } from "../../../api/drivers";
import DriverContext from "../../../contexts/DriverContext/DriverContext";
import { DriverDetails } from "./DriverDetails/DriverDetails";
import { NewDriverRequest } from "./NewDriverRequest/NewDriverRequest";
import { DriverReqDetail } from "./DriverReqDetail/DriverReqDetail";
import NoResultMsg from '../../../components/NoResultMsg/NoResultMsg'
import Header from "screens/Product/Header";

const data = [
  {
    image: "./assets/images/iMacMemojiRed.svg",
    chipTitle: "Online",
    title: "John Lennon",
    subTitle: "ID Card : 12345678",
    subData: [
      { num: "120", numTitle: "Deliveries" },
      { num: "120", numTitle: "Deliveries" },
      { num: "120", numTitle: "Deliveries" },
    ],
    btnText: "View Details",
  },
  {
    image: "./assets/images/iMacMemojiRed.svg",
    chipTitle: "Online",
    title: "John Lennon",
    subTitle: "ID Card : 12345678",
    subData: [
      { num: "120", numTitle: "Deliveries" },
      { num: "120", numTitle: "Deliveries" },
      { num: "120", numTitle: "Deliveries" },
    ],
    btnText: "View Details",
  },
  {
    image: "./assets/images/iMacMemojiRed.svg",
    chipTitle: "Online",
    title: "John Lennon",
    subTitle: "ID Card : 12345678",
    subData: [
      { num: "120", numTitle: "Deliveries" },
      { num: "120", numTitle: "Deliveries" },
      { num: "120", numTitle: "Deliveries" },
    ],
    btnText: "View Details",
  },
  {
    image: "./assets/images/iMacMemojiRed.svg",
    chipTitle: "Online",
    title: "John Lennon",
    subTitle: "ID Card : 12345678",
    subData: [
      { num: "120", numTitle: "Deliveries" },
      { num: "120", numTitle: "Deliveries" },
      { num: "120", numTitle: "Deliveries" },
    ],
    btnText: "View Details",
  },
  {
    image: "./assets/images/iMacMemojiRed.svg",
    chipTitle: "Online",
    title: "John Lennon",
    subTitle: "ID Card : 12345678",
    subData: [
      { num: "120", numTitle: "Deliveries" },
      { num: "120", numTitle: "Deliveries" },
      { num: "120", numTitle: "Deliveries" },
    ],
    btnText: "View Details",
  },
  {
    image: "./assets/images/iMacMemojiRed.svg",
    chipTitle: "Online",
    title: "John Lennon",
    subTitle: "ID Card : 12345678",
    subData: [
      { num: "120", numTitle: "Deliveries" },
      { num: "120", numTitle: "Deliveries" },
      { num: "120", numTitle: "Deliveries" },
    ],
    btnText: "View Details",
  },
];

const NotificationData = [
  {
    icon: "./assets/images/greenNotification.svg",
    title: "You have new driver approval request",
    subTitle:
      "Review prospective caterer partner and validate their catering data",
    buttonText: "Review Request",
  },
];


const paginationSx = {
  "& .css-1awya33-MuiButtonBase-root-MuiPaginationItem-root": {
    border: "1px solid #E1E1E6",
    borderRadius: "8px",
    color: "#9EA3AE",
    background: "none",
  },
  "& .css-1awya33-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected": {
    backgroundColor: "#2b817b",
    color: "white",
    borderRadius: "8px",
  },
};

const Typo1 = {
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "20px",
  color: "#9EA3AE",
};


export const DriverComp = () => {

  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [totalDriversCount, setTotaDriversCount] = useState(1);

  const driverContextval = useContext(DriverContext)
  
  // const [getDrivers, resdata] = useGetDriversMutation()

  const [getDrivers, resdata] = useGetAllDriversWithFilterMutation()
  
  const [filterAllDriversWithStatus, responsedata] = useGetAllDriversWithFilterWithStatusMutation()

  const [searchDrivers, respdata] = useSearchDriversMutation()

  const [driversData, setDriversData] = useState("")

  const [searchVal, setSearchVal] = useState("");
  const [isShownNoResult, setIsShownNoResult] = useState(false);

  const NotificationData = [
    {
      icon: "./assets/images/greenNotification.svg",
      title: "You have new driver approval request",
      subTitle:
        "Review prospective caterer partner and validate their catering data",
      buttonText: "Review Request",
      btnOnClickHandler:()=> driverContextval?.openNewDriverRequest()
    },
  ];
  
  const getDriversList = ()=> {
    getDrivers({ page:page, size:size }).then((res) => {
      if (res.data){
        console.log("res.data driversData ", res?.data);
        setDriversData(res?.data?.data)
        setTotaDriversCount(res?.data?.totalDriversCount)
      }
    });
  }
  

  const getLastAddedDriversData = ()=> {
    getDrivers({ page:page, size:size,sortBy:"createdAt",orderBy:"desc" }).then((res) => {
      if (res.data){
        console.log("res.data getLastAddedDriversData ", res?.data);
        setDriversData(res?.data?.data)
        setTotaDriversCount(res?.data?.totalDriversCount)
      }
    });
  }

  const filterDriversWithStatusData = (status)=> {
    if(status === "approved" || status === "request"){
      filterAllDriversWithStatus({ page:page, size:10,status:status }).then((res) => {
        if (res.data){
          console.log("res.data filterDriversWithStatusData ", res?.data);
          setDriversData(res?.data?.data)
          setTotaDriversCount(res?.data?.totalDriversCount)
        }
      });
    }else if(status === "all"){
      getDriversList()
    }
  }

  const searchDriversFunc = (newValSearch)=> {
    if(newValSearch === ""){
      getDriversList()
      setIsShownNoResult(false)
    }else{
      searchDrivers({ search: newValSearch }).then((res) => {
        if (res.data){
          console.log("searchDrivers res.data driversData ", res?.data);
          setDriversData(res?.data?.data)
          setTotaDriversCount(res?.data?.totalDriversCount)
          if(res?.data?.data.length === 0) {
            setIsShownNoResult(true)
          }else{
            setIsShownNoResult(false)
          }
          // setDriversData(res?.data?.data)
        }
      });
    }
  }

  // searchDrivers({ search: newValSearch }).then((res) => {
    //   if (res.data){
    //     console.log("searchDrivers res.data driversData ", res?.data);
    //     if(res?.data?.data.length === 0) {
    //       setIsShownNoResult(true)
    //     }
    //     // setDriversData(res?.data?.data)
    //   }
    // });
  
  useEffect(() => {
    getDriversList()
  }, [page])

  console.log('driversData => ', driversData)

  return (
    <Box>
      {
        driverContextval?.state?.isShownDriverDetial?
          <DriverDetails />
        :
        driverContextval?.state?.isShownNewDriverRequest?
          <NewDriverRequest />
        :
        driverContextval?.state?.isShownDriverRequestDetail?
          <DriverReqDetail />
        :
        <>
          <div>
            {
              resdata?.isLoading ? (
                <Box sx={{minHeight:"30vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
                  <CircularProgress color="greenclr"/>
                </Box>
              ) 
              : 
              <>
                <Box>
                  <Box>
                    {NotificationData.map((item,index) => {
                      return (
                          <CatererRequestNotification item={item} key={index} />
                      );
                    })}
                  </Box>

                  <Box>
                  <Header
                    title=""
                    // addButtonTitle="New Menu"
                    // addButtonOnclickHandler={handleAddModalOpen}
                    isShownCustomBtn={false}
                    // hasNotificationButton={true}
                    // hasFilterBtn={true}
                    lastAddedBtnOnClickHandler={()=> {console.log('abc'); getLastAddedDriversData()}}
                    // lastAddedBtnOnClickHandler={getLastAddedDriversData}
                    // handleClickFilter={handleClickFilter}
                    searchVal={searchVal}
                    setSearchVal={setSearchVal}
                    searchFunc={searchDriversFunc}
                    menuItems={[
                      { name: "request", onClick: () => { filterDriversWithStatusData("request"); console.log('menuItem request click handler') }},
                      { name: "approved", onClick: () => { filterDriversWithStatusData("approved"); console.log('menuItem approved click handler') }},
                      { name: "all", onClick: () => { filterDriversWithStatusData("all"); console.log('menuItem all click handler') }},
                    ]}
                    />
                    {/* <CustomerHeader
                      hasTextButtonTitle1={"Last Added"}
                      hasTextButtonTitle2={"Any Status"}
                      hasTextButtonTitle3={"All Main Courses"}
                      hasFilterBtn={false}
                      searchVal={searchVal}
                      setSearchVal={setSearchVal}
                      searchFunc={searchDriversFunc}
                    /> */}
                  </Box>

                  {!isShownNoResult ? (
                    <Box mt="16px">
                      <Grid
                      container
                      spacing={4}
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        minHeight:"60vh"
                      }}
                      >
                        {/* {data.map((item, i) => {
                          return (
                            <>
                              <Grid xl={2} item lg={4} md={4} sm={6} xs={12}>
                                <Box>
                                  <DriverCard item={item} />
                                </Box>
                              </Grid>
                            </>
                          );
                        })} */}
                        {
                          driversData.length>0 ?  driversData.map((item, i) => {
                            const dataitem = {
                              image: "./assets/images/iMacMemojiRed.svg",
                              chipTitle: `${item?.status !== undefined ? item?.status : 'no data'}`,
                              title: `${item?.firstName !== undefined ? `${ item?.firstName} ${ item?.lastName}` : 'no data'}`,
                              // subTitle: "ID Card : 12345678",
                              subTitle: `${item?.driverId !== undefined ? item?.driverId : 'no data'}`,
                              subData: [
                                { num: `${item?.deliveries !== undefined ? item?.deliveries: 'no data'}`, numTitle: "Deliveries" },
                                { num: "120", numTitle: "Hours" },
                                { num: `${item?.deliveries !== undefined ? item?.deliveries: 'no data'}`, numTitle: "Deliveries" },
                              ],
                              btnOnClickHandler:()=> {
                                driverContextval?.selectRow(item); 
                                driverContextval?.openDriverDetail()
                              },
                              btnText: "View Details",
                            }
                            return (
                                <Grid xl={2} item lg={4} md={4} sm={6} xs={12} key={i}>
                                  <Box>
                                    <DriverCard item={dataitem} />
                                  </Box>
                                </Grid>
                            );
                          }) 
                          : <Typography sx={{mt:"30px",textAlign:"center"}}>no data</Typography>
                        }
                      </Grid>
                      <Box
                      sx={{
                        display: "flex",
                        flexDirection: {
                          lg: "row",
                          md: "row",
                          sm: "row",
                          xs: "column",
                        },
                        justifyContent:"flex-end",
                        mt: "35px",
                      }}
                      >
                        {/* <Box>
                          <Typography sx={Typo1}>Show 1-10 of 50 entries</Typography>
                        </Box> */}
                        <Box
                          sx={{ mt: { lg: "0px", md: "0px", sm: "0px", xs: "30px" } }}
                        >
                          <Pagination
                            sx={paginationSx}
                            count={totalDriversCount>size? totalDriversCount%size !==0? Math.round(totalDriversCount/size)+1 : Math.round(totalDriversCount/size) : 1}
                            page={page}
                            onChange={(event, value) =>{ console.log("value onChange => ", value); setPage(value)} }
                          />
                        </Box>
                      </Box>
                    </Box>
                  ) : (
                    // <NoResultMsg searchValueText={`“${searchVal}”`} />
                    <NoResultMsg searchValueText={searchVal} />
                  )}
                </Box>
              </>
            }
          </div>
        </>
      }
    </Box>
  );
};
