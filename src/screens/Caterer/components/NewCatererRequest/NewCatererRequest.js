import React, { useContext, useEffect, useState } from 'react'
import { NewCatererRequestBreadcrumbs } from './NewCatererRequestBreadcrumbs'
import Box from "@mui/material/Box";
import CircularProgress from '@mui/material/CircularProgress';
// import { CustomerHeader } from '../../../Customer/components/CustomerHeader';
import { CustomerHeader2 } from '../../../Customer/components/CustomerHeader2';
import { NewCatererReqCard } from './NewCatererReqCard';
import { useGetAllSubscriptionRequestsCatererMutation } from '../../../../api/caterers';
import CatererContext from '../../../../contexts/CatererContext/CatererContext';
import { Typography } from '@mui/material';


// const data = [
//   {
//     image: "./assets/images/iMacIcon.svg",
//     chipTitle: "Pending",
//     sheduleTitle: "12:00 - 03.00 Pm",
//     title: "John Lennon",
//     locationIcon: "./assets/images/location.svg",
//     locationTitle: "Tamworth Rd, Long Eaton",
//     textButtonTitle: "Details",
//     pipeImg: "./assets/images/pipeImages/Rectangle 403.svg",
//     timeSchedule: "12:00 - 03.00 Pm",
//   },
//   {
//     image: "./assets/images/iMacIcon.svg",
//     chipTitle: "Rejected",
//     sheduleTitle: "12:00 - 03.00 Pm",
//     title: "John Lennon",
//     locationIcon: "./assets/images/location.svg",
//     locationTitle: "Tamworth Rd, Long Eaton",
//     textButtonTitle: "Details",
//     pipeImg: "./assets/images/pipeImages/RedPipeIcon.svg",
//     timeSchedule: "12:00 - 03.00 Pm",
//   },
//   {
//     image: "./assets/images/iMacIcon.svg",
//     chipTitle: "In Revision",
//     sheduleTitle: "12:00 - 03.00 Pm",
//     title: "John Lennon",
//     locationIcon: "./assets/images/location.svg",
//     locationTitle: "Tamworth Rd, Long Eaton",
//     textButtonTitle: "Details",
//     pipeImg: "./assets/images/pipeImages/yellowPipeIcon.svg",
//     timeSchedule: "12:00 - 03.00 Pm",

//   },
//   {
//     image: "./assets/images/iMacIcon.svg",
//     chipTitle: "In Revision",
//     sheduleTitle: "12:00 - 03.00 Pm",
//     title: "John Lennon",
//     locationIcon: "./assets/images/location.svg",
//     locationTitle: "Tamworth Rd, Long Eaton",
//     textButtonTitle: "Details",
//     pipeImg: "./assets/images/pipeImages/yellowPipeIcon.svg",
//     timeSchedule: "12:00 - 03.00 Pm",

//   },
//   {
//     image: "./assets/images/iMacIcon.svg",
//     chipTitle: "In Revision",
//     sheduleTitle: "12:00 - 03.00 Pm",
//     title: "John Lennon",
//     locationIcon: "./assets/images/location.svg",
//     locationTitle: "Tamworth Rd, Long Eaton",
//     textButtonTitle: "Details",
//     pipeImg: "./assets/images/pipeImages/yellowPipeIcon.svg",
//     timeSchedule: "12:00 - 03.00 Pm",

//   },
//   {
//     image: "./assets/images/iMacIcon.svg",
//     chipTitle: "Rejected",
//     sheduleTitle: "12:00 - 03.00 Pm",
//     title: "John Lennon",
//     locationIcon: "./assets/images/location.svg",
//     locationTitle: "Tamworth Rd, Long Eaton",
//     textButtonTitle: "Details",
//     pipeImg: "./assets/images/pipeImages/RedPipeIcon.svg",
//     timeSchedule: "12:00 - 03.00 Pm",

//   },
  

// ]


export const NewCatererRequest = () => {

  const catererContextval = useContext(CatererContext)

  const [getNewCatererRequest, resdata] = useGetAllSubscriptionRequestsCatererMutation()

  const [newCatererRequestData, SetNewCatererRequestData] = useState("");

  const getNewCatererRequestData = ()=> {
    getNewCatererRequest({ page:1, size:10 }).then((res) => {
      if (res.data){
        console.log("res.data newCatererRequestData ", res?.data?.data);
        SetNewCatererRequestData(res?.data?.data)
      }
    });
  }
  
  useEffect(() => {
    getNewCatererRequestData()
  }, [])


  return (
    <div>
        <>
        <Box pl="20px" pb="20px">
        <Box>
        <NewCatererRequestBreadcrumbs/>
        </Box>

        <Box pb="20px">
          <CustomerHeader2
            title={"New Caterer Request"}
            hasNotificationButton={false}
            // hasTextButtonTitle1={"Last Added"}
            hasTextButtonTitle2={"Any Status"}
            // hasTextButtonTitle3={"All Main Courses"}
            hasFilterBtn={false}
            TypoMarginBottom={"20px"}
            TypoMarginTop={"0px"}
            SetNewCatererRequestData={SetNewCatererRequestData}
            refetchNewCatererRequestData={getNewCatererRequestData}
            // openFilter={openFilter}
            // setOpenFilter={setOpenFilter}
            // handleClickFilter={handleClickFilter}
          />
        </Box>

        {/* <Box>
          {data.map((item,i) => {
           return(
            //<>
             <Box mb="16px" key={i}>
              <NewCatererReqCard item={item}/>
            </Box>
            //</>
           )

          })}
        </Box> */}
        <Box>
          {
            resdata?.isLoading ? (
              <Box sx={{minHeight:"30vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <CircularProgress color="greenclr"/>
              </Box>
            ) 
            : 
            <>
              <Box>
                {
                newCatererRequestData && newCatererRequestData.length>0
                 ?
                newCatererRequestData.map((item,i) => {
                  const dataItem = {
                        image: "./assets/images/iMacIcon.svg",
                        chipTitle: item?.status || 'no data',
                        sheduleTitle: "12:00 - 03.00 Pm",
                        title: item?.merchantName || 'no data',
                        locationIcon: "./assets/images/location.svg",
                        locationTitle: item?.address || 'no data',
                        textButtonTitle: "Details",
                        pipeImg: "./assets/images/pipeImages/Rectangle 403.svg",
                        timeSchedule: "12:00 - 03.00 Pm",
                        btnOnClickHandler:()=> {
                          catererContextval?.selectRequest(item); 
                          catererContextval?.openCatererRequestDetail();
                        }
                      }
                return(
                  <Box mb="16px" key={i}>
                    <NewCatererReqCard item={dataItem}/>
                  </Box>
                )

                })
                :
                <Typography sx={{textAlign:"center",mt:"80px",mb:"20px"}}>no data</Typography>
              }
              </Box>
            </>
          }
        </Box>

        </Box>
        </>
    </div>
  )
}
