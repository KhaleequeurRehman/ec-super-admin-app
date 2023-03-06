import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CustomBreadcrumbs from "../../../../components/CustomBreadcrumbs";
import Grid from "@mui/material/Grid";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import ProfileCard from "../../ProfileCard";
import BalanceCard from "../../BalanceCard";
import { SalesChart } from "../../../../components/Charts/SalesChart";
import WidthDrawHistoryItemCard from "../../WidthDrawHistoryItemCard";
import RecentOrder from "../../RecentOrder";
import Chip from "@mui/material/Chip";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";
import { useGetPersonalDetailOfCustomerMutation,useGetFinancialDetailOfCustomerMutation } from "../../../../api/customers";
import { CircularProgress } from "@mui/material";

const breadcrumbsLinksDataArr = [
  {
    text: "Financial",
    url: "#",
  },
];

const CustomerDetail = ({ setShowCustomerDetailHandler,selectedCustomer }) => {

  const [dateValue, setDateValue] = useState(dayjs("2014-08-18T21:11:54"));
  
  const [getPersonalDetailOfCustomer, resdata] = useGetPersonalDetailOfCustomerMutation()
  const [personalDetailOfCustomer, setPersonalDetailOfCustomer] = useState("");

  const [getFinancialDetailOfCustomer, respdata] = useGetFinancialDetailOfCustomerMutation()
  const [financialDetailOfCustomer, setFinancialDetailOfCustomer] = useState("");
  
  const handleChange = (newDateValue) => {
    setDateValue(newDateValue);
  };

  
  const getPersonalDetailOfCustomerFunc = () => {
    getPersonalDetailOfCustomer({id:selectedCustomer?._id}).then((res) => {
      if (res.data){
        console.log("res.data personalDetailOfCustomerData ", res?.data?.data);
        setPersonalDetailOfCustomer(res?.data?.data)
      }
    });
  }
  
  const getFinancialDetailOfCustomerFunc = () => {
    getFinancialDetailOfCustomer({id:selectedCustomer?._id}).then((res) => {
      if (res.data){
        console.log("res.data financialDetailOfCustomerData ", res?.data);
        setFinancialDetailOfCustomer(res?.data)
      }
    });
  }


  useEffect(() => {
    getPersonalDetailOfCustomerFunc()
  }, [])

  useEffect(() => {
    getFinancialDetailOfCustomerFunc()
  }, [])

  const girdTableColumnsArr = [
    { field: "id", headerName: "#", width: 70 },
    {
      field: "image",
      headerName: "Image",
      width: 120,
      height: 70,
      renderCell: (params) => {
        return (
          <>
            <Box py="5px" sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ width: "48px", height: "48px", borderRadius: "6px" }}>
                <img
                  src={params.value}
                  alt="dishIcon"
                  width="100%"
                  height="100%"
                />
              </Box>
            </Box>
          </>
        );
      },
    },
    {
      field: "menuName",
      headerName: "Menu Name",
      width: 280,
    },
    {
      field: "caterer",
      headerName: "Caterer",
      width: 260,
      height: 70,
      renderCell: (params) => {
        return (
          <>
            <Box py="5px" sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ width: "16px", height: "16px", borderRadius: "50%" }}>
                {/* <img
                  src={params.value.img}
                  alt="catererIconimg"
                  width="100%"
                  height="100%"
                /> */}
              </Box>
              <Box ml="10px">
                <Typography sx={{ color: "#9EA3AE" }}>
                  {/* {params.value.name} */}
                  {params.value}
                </Typography>
              </Box>
            </Box>
          </>
        );
      },
    },
    {
      field: "type",
      headerName: "Type",
      width: 230,
      renderCell: (params) => {
        const { value } = params;
        let chipBgColor = "";
        if (value === "Personal subscription") {
          chipBgColor = "#7B49E5";
        } else if (value === "Multiple subscription") {
          chipBgColor = "#158FAD";
        } else if (value === "Bussines subscription") {
          chipBgColor = "#FF9933";
        } else if (value === "Single order") {
          chipBgColor = "#7ECC49";
        } else if (value === "Fitness subscription") {
          chipBgColor = "#FF8D85";
        }
        return (
          <>
            <Box>
              <Chip
                label={params.value}
                variant="contained"
                sx={{
                  background: chipBgColor,
                  borderRadius: "6px",
                  color: "#fff",
                }}
              />
            </Box>
          </>
        );
      },
    },
    {
      field: "date",
      headerName: "Date",
      width: 210,
    },
    {
      field: "price",
      headerName: "Total Paid",
      width: 140,
      renderCell: (params) => {
        return (
          <>
            <Box>
              {/* <Typography sx={{ color: "#E75C62" }}>{params.value}</Typography> */}
              <Typography>{params.value}</Typography>
            </Box>
          </>
        );
      },
    },
  ];

  const gridTableRowArr = [
    {
      id: 1,
      image: "assets/images/dish1.svg",
      menuName: "Arabian Kebab, Middle East Special",
      caterer: {
        img: "assets/images/catererwithiMacCircleIcon.png",
        name: "Chef Juna Food",
      },
      type: "Multiple subscription",
      date: "Thu, 21 Nov 2021",
      price: "- $ 230",
    },
    {
      id: 2,
      image: "assets/images/dish1.svg",
      menuName: "Arabian Kebab, Middle East Special",
      caterer: {
        img: "assets/images/catererwithiMacCircleIcon.png",
        name: "Chef Juna Food",
      },
      type: "Multiple subscription",
      date: "Thu, 21 Nov 2021",
      price: "- $ 230",
    },
    {
      id: 3,
      image: "assets/images/dish1.svg",
      menuName: "Arabian Kebab, Middle East Special",
      caterer: {
        img: "assets/images/catererwithiMacCircleIcon.png",
        name: "Chef Juna Food",
      },
      type: "Multiple subscription",
      date: "Thu, 21 Nov 2021",
      price: "- $ 230",
    },
    {
      id: 4,
      image: "assets/images/dish1.svg",
      menuName: "Arabian Kebab, Middle East Special",
      caterer: {
        img: "assets/images/catererwithiMacCircleIcon.png",
        name: "Chef Juna Food",
      },
      type: "Multiple subscription",
      date: "Thu, 21 Nov 2021",
      price: "- $ 230",
    },
    {
      id: 5,
      image: "assets/images/dish1.svg",
      menuName: "Arabian Kebab, Middle East Special",
      caterer: {
        img: "assets/images/catererwithiMacCircleIcon.png",
        name: "Chef Juna Food",
      },
      type: "Multiple subscription",
      date: "Thu, 21 Nov 2021",
      price: "- $ 230",
    },
    {
      id: 6,
      image: "assets/images/dish1.svg",
      menuName: "Arabian Kebab, Middle East Special",
      caterer: {
        img: "assets/images/catererwithiMacCircleIcon.png",
        name: "Chef Juna Food",
      },
      type: "Multiple subscription",
      date: "Thu, 21 Nov 2021",
      price: "- $ 230",
    },
    {
      id: 7,
      image: "assets/images/dish1.svg",
      menuName: "Arabian Kebab, Middle East Special",
      caterer: {
        img: "assets/images/catererwithiMacCircleIcon.png",
        name: "Chef Juna Food",
      },
      type: "Multiple subscription",
      date: "Thu, 21 Nov 2021",
      price: "- $ 230",
    },
    {
      id: 8,
      image: "assets/images/dish1.svg",
      menuName: "Arabian Kebab, Middle East Special",
      caterer: {
        img: "assets/images/catererwithiMacCircleIcon.png",
        name: "Chef Juna Food",
      },
      type: "Multiple subscription",
      date: "Thu, 21 Nov 2021",
      price: "- $ 230",
    },
    {
      id: 9,
      image: "assets/images/dish1.svg",
      menuName: "Arabian Kebab, Middle East Special",
      caterer: {
        img: "assets/images/catererwithiMacCircleIcon.png",
        name: "Chef Juna Food",
      },
      type: "Multiple subscription",
      date: "Thu, 21 Nov 2021",
      price: "- $ 230",
    },
  ];

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
          <CustomBreadcrumbs
            typographyText="Muhammad Bairos"
            breadcrumbsLinksArr={breadcrumbsLinksDataArr}
            clickHandler={() => setShowCustomerDetailHandler(false)}
          />
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} my="10px">
              {/* <Box sx={{width: "100%",border:"1px solid #E1E1E6"}}> */}
              <Box sx={{ width: "100%" }}>
                <ProfileCard
                  imgSrc="assets/images/profilewithRedIMac.png"
                  // title="Chef Juna Catering"
                  title={`${personalDetailOfCustomer?.fullName !== undefined? personalDetailOfCustomer?.fullName : 'no data'}`}
                  subTitle="ECD - 12345"
                  // subTitle={`${personalDetailOfCustomer?.fullName !== undefined? personalDetailOfCustomer?.fullName : 'no data'}`}
                  // address="Tamworth Rd, Long Eaton, Canada"
                  address={personalDetailOfCustomer.addresses !== undefined || personalDetailOfCustomer.addresses !== null && Array.isArray(personalDetailOfCustomer.addresses) ? `${personalDetailOfCustomer.addresses[0]?.address} ${personalDetailOfCustomer.addresses[0]?.city} ${personalDetailOfCustomer.addresses[0]?.country}`: "no data"}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6} my="10px">
              {/* <Box sx={{width: "100%",border:"1px solid #E1E1E6"}}> */}
              <Box sx={{ width: "100%" }}>
                <BalanceCard
                  title="Balance"
                  // lowerText="$ 312.00"
                  lowerText={`${personalDetailOfCustomer?.balance !== undefined? `$${personalDetailOfCustomer?.balance}` : 'no data'}`}
                  underlineText="Recent Activity"
                  labelSx={{
                    fontSize: { xs: "13px", md: "18px" },
                    fontWeight: "500",
                    color: "#1A1824",
                    my: "5px",
                  }}
                  hasBtn={false}
                  isCalledFromDriverApps={true}
                />
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ mt: "20px", mb: "60px" }}>
            <RecentOrder
              heading="Spending  Overview"
              girdTableColumns={girdTableColumnsArr}
              // gridTableRow={gridTableRowArr}
              gridTableRow={financialDetailOfCustomer?.financialDetailOfCustomersList || []}
            />
          </Box>
        </Box>
        </>
      }
      </Box>
    </>
  );
};

export default CustomerDetail;
