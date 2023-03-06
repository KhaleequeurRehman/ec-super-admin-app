import React, { useContext, useEffect, useState } from "react";
import { CatererReqDetailBreadcrumbs } from "./CatererReqDetailBreadcrumbs";
import Box from "@mui/material/Box";
import { RequestMainCard } from "./RequestMainCard";
import { ReqOwnerInfo } from "./ReqOwnerInfo/ReqOwnerInfo";
import { useGetCatererDetailMutation } from "../../../../api/caterers";
import CircularProgress from "@mui/material/CircularProgress";
import CatererContext from "../../../../contexts/CatererContext/CatererContext";

export const CatererRequestDetail = () => {

  const catererContextval = useContext(CatererContext)

  const [getCatererDetail, resdata] = useGetCatererDetailMutation()
  const [catererDetailData, SetCatererDetailData] = useState("");

  const getCatererDetailData = ()=> {
    getCatererDetail({ id:catererContextval?.state?.selectedRequestData?._id }).then((res) => {
    // getCatererDetail({ id:"63a4166ecfa5dbf53dc59645" }).then((res) => {
      if (res.data){
        console.log("res.data CatererRequestDetail ", res?.data);
        SetCatererDetailData(res?.data?.details?.data)
      }
    });
  }
  
  useEffect(() => {
    getCatererDetailData()
  }, [])

  return (
    <Box>
      {
        resdata?.isLoading ? (
          <Box sx={{minHeight:"30vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <CircularProgress color="greenclr"/>
          </Box>
        ) 
        : 
        <>
        <div>
          <Box>
            <CatererReqDetailBreadcrumbs />
          </Box>

          <Box sx={{display: "flex",  flexDirection: {lg: "row", md: "row", sm: "column", xs: "column"}}}>
            <Box width="100%">
              <RequestMainCard data={catererDetailData} />
            </Box>

            <Box width="100%"  sx={{mt:{lg: "0px", md: "0px", sm: "20px", xs: "20px"}, ml:{lg: "20px", md: "20px", sm: "0px", xs: "0px"}}}>
              <ReqOwnerInfo data={catererDetailData} refetchCatererDetailData={getCatererDetailData} />
            </Box>
          </Box>
        </div>
        </>
      }
    </Box>
  );
};
