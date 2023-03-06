import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import DriverReqDetailBreadcrumbs from "./DriverReqDetailBreadcrumbs";
import { DriverReqMainCard } from "./DriverReqMainCard";
import { CatererReqDocument } from "../../../Caterer/components/CatererRequestDetail/CatererReqDocument/CatererReqDocument";
import { useGetDriverDetailMutation } from "../../../../api/drivers";
import { CircularProgress } from "@mui/material";
import { DriverReqDetailButtons } from "./DriverReqDetailButtons";
import DriverContext from "../../../../contexts/DriverContext/DriverContext";

const CardData = [
  {
    image: "./assets/images/directbox-notif.svg",
    title: "Driver License",
    subTitle: "Chef Juna Business License.jpg",
    textButtonTitle: "View",
  },
  {
    image: "./assets/images/directbox-notif.svg",
    title: "Vehicle Documents",
    subTitle: "Chef Juna Certificate .jpg",
    textButtonTitle: "View",
  },
  {
    image: "./assets/images/directbox-notif.svg",
    title: "Driving Record",
    subTitle: "Chef Juna Certificate .jpg",
    textButtonTitle: "View",
  },
];

export const DriverReqDetail = () => {

  const driverContextval = useContext(DriverContext)

  const [getDriverDetail, resdata] = useGetDriverDetailMutation()
  const [driverDetailData, setDriverDetailData] = useState("")

  const getDriverDetailData = ()=> {
    // getDriverDetail({ id:"6393157fb52b11dc22609461" }).then((res) => {
    getDriverDetail({ id:driverContextval?.state?.selectedRequestData?._id }).then((res) => {
      if (res.data){
        console.log("res.data driverDetailData ", res?.data);
        setDriverDetailData(res?.data?.details)
      }
    });
  }
  
  useEffect(() => {
    getDriverDetailData()
  }, [])

  console.log('driversData driverReqDetailData => ', driverDetailData)

  
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
          <Box>
            <Box>
              <DriverReqDetailBreadcrumbs />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
              }}
            >
              <Box width="100%">
                <DriverReqMainCard driverDetailData={driverDetailData} />
              </Box>

              <Box
                width="100%"
                sx={{
                  mt: { lg: "0px", md: "0px", sm: "20px", xs: "20px" },
                  ml: { lg: "24px", md: "24px", sm: "0px", xs: "0px" },
                }}
              >
                <Box>
                  <DriverReqDetailButtons refetchDriverDetailData={getDriverDetailData} />
                </Box>
                <Box mt="16px">
                  <CatererReqDocument Data={CardData} />
                </Box>
              </Box>
            </Box>
          </Box>
        </>
      }
    </div>
  );
};
