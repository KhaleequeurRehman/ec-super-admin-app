import React, { useContext } from "react";
import CatererDataGrid from "./CatererDataGrid";
import Box from "@mui/material/Box";
import { CustomerHeader } from "../../../Customer/components/CustomerHeader";
import { CatererRequestNotification } from "./CatererRequestNotification";
import CatererContext from "../../../../contexts/CatererContext/CatererContext";
import { CatererDetails } from "../CatererDetails/CatererDetails";
import { NewCatererRequest } from "../NewCatererRequest/NewCatererRequest";
import { CatererRequestDetail } from "../CatererRequestDetail/CatererRequestDetail";

// const NotificationData = [
//   {
//     icon: "./assets/images/greenNotification.svg",
//     title: "You have new caterer approval request",
//     subTitle: "Review prospective caterer partner and validate their catering data",
//     buttonText: "Review Request"
//   }
// ]

export const CatererComp = () => {

  const catererContextval = useContext(CatererContext)

  const NotificationData = [
    {
      icon: "./assets/images/greenNotification.svg",
      title: "You have new caterer approval request",
      subTitle: "Review prospective caterer partner and validate their catering data",
      buttonText: "Review Request",
      btnOnClickHandler:()=> catererContextval?.openNewCatererRequest()
    }
  ]
  
  console.log("catererContextval ",catererContextval)
  return (
    <div>
      {
        catererContextval?.state?.isShownCatererDetial?
        <CatererDetails/>
        :
        catererContextval?.state?.isShownNewCatererRequest?
        <NewCatererRequest/>
        :
        catererContextval?.state?.isShownCatererRequestDetail?
        <CatererRequestDetail/>
        :
        <>
          <Box>
            <Box mb="40px">
              {NotificationData.map((item,i) => {
                return (
                  <CatererRequestNotification item={item} key={i} />
                )
              })}
            </Box>
            <Box>
              {/* <CustomerHeader
                title={"All Caterer"}
                hasNotificationButton={true}
                hasTextButtonTitle1={"Last Added"}
                hasTextButtonTitle2={"Any Status"}
                hasTextButtonTitle3={"All Main Courses"}
                hasFilterBtn={false}
                // openFilter={openFilter}
                // setOpenFilter={setOpenFilter}
                // handleClickFilter={handleClickFilter}
              /> */}
            </Box>
            <Box>
              <CatererDataGrid />
            </Box>
          </Box>
        </>
      }
    </div>
  );
};

























// import React, { useContext } from "react";
// import CatererDataGrid from "./CatererDataGrid";
// import Box from "@mui/material/Box";
// import { CustomerHeader } from "../../../Customer/components/CustomerHeader";
// import { CatererRequestNotification } from "./CatererRequestNotification";
// import CatererContext from "../../../../contexts/CatererContext/CatererContext";
// import { CatererDetails } from "../CatererDetails/CatererDetails";

// const NotificationData = [
//   {
//     icon: "./assets/images/greenNotification.svg",
//     title: "You have new caterer approval request",
//     subTitle: "Review prospective caterer partner and validate their catering data",
//     buttonText: "Review Request"
//   }
// ]

// export const CatererComp = () => {
//   const catererContextval = useContext(CatererContext)


//   console.log("catererContextval ",catererContextval)
//   return (
//     <div>
//       {
//         catererContextval?.state?.isShownCatererDetial?
//         <CatererDetails/>
//         :
//         <>
//           <Box>
//             <Box mb="40px">
//               {NotificationData.map((item,i) => {
//                 return (
//                   //<>
//                   <CatererRequestNotification item={item} key={i} />
//                   //</>
//                 )
//               })}
//             </Box>
//             <Box>
//               <CustomerHeader
//                 title={"All Caterer"}
//                 hasNotificationButton={true}
//                 hasTextButtonTitle1={"Last Added"}
//                 hasTextButtonTitle2={"Any Status"}
//                 hasTextButtonTitle3={"All Main Courses"}
//                 hasFilterBtn={false}
//                 // openFilter={openFilter}
//                 // setOpenFilter={setOpenFilter}
//                 // handleClickFilter={handleClickFilter}
//               />
//             </Box>
//             <Box>
//               <CatererDataGrid />
//             </Box>
//           </Box>
//         </>
//       }
//     </div>
//   );
// };
