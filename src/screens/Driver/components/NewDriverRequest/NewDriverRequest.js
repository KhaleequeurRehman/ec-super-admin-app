import React, { useContext, useEffect, useState } from 'react'
import Box from "@mui/material/Box";
import { CustomerHeader } from '../../../Customer/components/CustomerHeader';
import NewDriverBreadcrumbs from './NewDriverReqBreadcrumbs';
import { NewCatererReqCard } from '../../../Caterer/components/NewCatererRequest/NewCatererReqCard';
import { useGetAllDriverRequestsMutation } from '../../../../api/drivers';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import DriverContext from '../../../../contexts/DriverContext/DriverContext';
import { HeaderForNewDriverRequest } from './HeaderForNewDriverRequest';


const data = [
  {
    image: "./assets/images/iMacIcon.svg",
    chipTitle: "Pending",
    sheduleTitle: "12:00 - 03.00 Pm",
    title: "John Lennon",
    locationIcon: "./assets/images/location.svg",
    locationTitle: "Tamworth Rd, Long Eaton",
    textButtonTitle: "Details",
    pipeImg: "./assets/images/pipeImages/Rectangle 403.svg",
  },
  {
    image: "./assets/images/iMacIcon.svg",
    chipTitle: "Rejected",
    sheduleTitle: "12:00 - 03.00 Pm",
    title: "John Lennon",
    locationIcon: "./assets/images/location.svg",
    locationTitle: "Tamworth Rd, Long Eaton",
    textButtonTitle: "Details",
    pipeImg: "./assets/images/pipeImages/RedPipeIcon.svg",
    timeSchedule: "12:00 - 03.00 Pm",
  },
  {
    image: "./assets/images/iMacIcon.svg",
    chipTitle: "In Revision",
    sheduleTitle: "12:00 - 03.00 Pm",
    title: "John Lennon",
    locationIcon: "./assets/images/location.svg",
    locationTitle: "Tamworth Rd, Long Eaton",
    textButtonTitle: "Details",
    pipeImg: "./assets/images/pipeImages/yellowPipeIcon.svg",
  },
  {
    image: "./assets/images/iMacIcon.svg",
    chipTitle: "In Revision",
    sheduleTitle: "12:00 - 03.00 Pm",
    title: "John Lennon",
    locationIcon: "./assets/images/location.svg",
    locationTitle: "Tamworth Rd, Long Eaton",
    textButtonTitle: "Details",
    pipeImg: "./assets/images/pipeImages/yellowPipeIcon.svg",
  },
  {
    image: "./assets/images/iMacIcon.svg",
    chipTitle: "In Revision",
    sheduleTitle: "12:00 - 03.00 Pm",
    title: "John Lennon",
    locationIcon: "./assets/images/location.svg",
    locationTitle: "Tamworth Rd, Long Eaton",
    textButtonTitle: "Details",
    pipeImg: "./assets/images/pipeImages/yellowPipeIcon.svg",
  },
  {
    image: "./assets/images/iMacIcon.svg",
    chipTitle: "Rejected",
    sheduleTitle: "12:00 - 03.00 Pm",
    title: "John Lennon",
    locationIcon: "./assets/images/location.svg",
    locationTitle: "Tamworth Rd, Long Eaton",
    textButtonTitle: "Details",
    pipeImg: "./assets/images/pipeImages/RedPipeIcon.svg",
  },
  

]


export const NewDriverRequest = () => {
  
  const driverContextval = useContext(DriverContext)
  const [getAllDriverRequests, resdata] = useGetAllDriverRequestsMutation()
  const [allDriverRequestsData, setAllDriverRequestsData] = useState("")

  const getAllDriverRequestsData = ()=> {
    getAllDriverRequests({ page:1, size:10 }).then((res) => {
      if (res.data){
        console.log("res.data driverDetailData ", res?.data);
        setAllDriverRequestsData(res?.data?.data)
      }
    });
  }
  
  useEffect(() => {
    getAllDriverRequestsData()
  }, [])

  console.log('driversData => ', allDriverRequestsData)


  return (
    <div>
      {
        resdata?.isLoading ? (
          <Box sx={{minHeight:"30vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <CircularProgress color="greenclr"/>
          </Box>
        ) 
        : 
        <>
          <Box pl="20px" pb="20px">
          <Box>
          <NewDriverBreadcrumbs/>
          </Box>

          {/* <Box>
          <CustomerHeader
            title={"New Driver Request"}
            hasNotificationButton={false}
            hasTextButtonTitle1={"Last Added"}
            hasTextButtonTitle2={"Any Status"}
            hasTextButtonTitle3={"All Main Courses"}
            hasFilterBtn={false}
            TypoMarginBottom={"20px"}
            TypoMarginTop={"0px"}
            // openFilter={openFilter}
            // setOpenFilter={setOpenFilter}
            // handleClickFilter={handleClickFilter}
          />
          </Box> */}

          <Box pb="20px">
            <HeaderForNewDriverRequest
              title={"New Driver Request"}
              hasNotificationButton={false}
              // hasTextButtonTitle1={"Last Added"}
              hasTextButtonTitle2={"Any Status"}
              // hasTextButtonTitle3={"All Main Courses"}
              hasFilterBtn={false}
              TypoMarginBottom={"20px"}
              TypoMarginTop={"0px"}
              setAllDriverRequestsData={setAllDriverRequestsData}
              refetchAllDriverRequestsData={getAllDriverRequestsData}
              // openFilter={openFilter}
              // setOpenFilter={setOpenFilter}
              // handleClickFilter={handleClickFilter}
            />
          </Box>

          <Box>
            {/* {data.map((item,i) => {
            return(
              <Box mb="16px">
                <NewCatererReqCard item={item} key={i} />
              </Box>
            )

            })} */}

            {
            allDriverRequestsData !== undefined && allDriverRequestsData.length>0 ? 
            allDriverRequestsData.map((item,i) => {
              const dataitem = {
                image: "./assets/images/iMacIcon.svg",
                chipTitle: `${item?.status !== undefined ? `${item?.status}` : 'no data'}`,
                sheduleTitle: "12:00 - 03.00 Pm",
                title: `${item?.firstName !== undefined ? `${item?.firstName} ${item?.lastName}` : 'no data'}`,
                locationIcon: "./assets/images/location.svg",
                locationTitle: "Tamworth Rd, Long Eaton",
                textButtonTitle: "Details",
                pipeImg: "./assets/images/pipeImages/Rectangle 403.svg",
                btnOnClickHandler:()=> {
                  driverContextval?.selectRequest(item); 
                  driverContextval?.openDriverRequestDetail();
                }
              }
            return(
              <Box mb="16px">
                <NewCatererReqCard item={dataitem} key={i} />
              </Box>
            )

            })
            : 
            <Typography sx={{textAlign:"center",mt:"30px"}}>no data</Typography>
          }
          </Box>
          </Box>
        </>
     }
    </div>
  )
}
