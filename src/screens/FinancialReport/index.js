import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { BsThreeDots } from "react-icons/bs";
import Layout from "../Layout";
import CustomSearchInputField from "../../components/CustomSearchInputField";
import CatererApps from "./CatererApps";
import DriverApps from "./DriverApps";
import CustomerApps from "./CustomerApps";
import CatererDetail from "./CatererApps/CatererDetail";
import DriverDetail from "./DriverApps/DriverDetail";
import CustomerDetail from "./CustomerApps/CustomerDetail";



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const FinancialReport = () => {
  
  const [value, setValue] = useState(0);

  const [showCatererDetail, setShowCatererDetail] = useState(false);
  const [selectedCaterer, setSelectedCaterer] = useState(false);

  const [showDriverDetail, setShowDriverDetail] = useState(false);
  const [selectedDriver, setSelectedDriver] = useState(false);

  const [showCustomerDetail, setShowCustomerDetail] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(false);


  const [searchVal, setSearchVal] = useState("");
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Layout>
        {
          showCatererDetail? 
          <>
            <CatererDetail selectedCaterer={selectedCaterer} setShowCatererDetailHandler={setShowCatererDetail}/>
          </>
          :
          showDriverDetail? 
          <>
            <DriverDetail selectedDriver={selectedDriver} setShowDriverDetailHandler={setShowDriverDetail}/>
          </>
          : showCustomerDetail?
          <>
            <CustomerDetail selectedCustomer={selectedCustomer} setShowCustomerDetailHandler={setShowCustomerDetail} />
          </>
          :
          <>
            <Box width="100%">
              {/* <Box sx={{my:{xs:"10px",md:"0px"}}}>
                <CustomSearchInputField
                  id="outlined-start-adornment"
                  sx={{ m: 1, width: "32ch",margin:{xs:"8px 0px",md:"8px"} }}
                  size="small"
                  placeholder="Search"
                  value={searchVal}
                  onChange={(e) => setSearchVal(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton aria-label="toggle password visibility">
                          <SearchIcon sx={{ color: "#9EA3AE" }} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box> */}
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  TabIndicatorProps={{
                    sx: { backgroundColor: "#2B817B" },
                  }}
                  sx={{ "& button.Mui-selected": { color: "#1A1b24" } }}
                >
                  <Tab
                    disableRipple={true}
                    label="Caterer Apps"
                    {...a11yProps(0)}
                    sx={{
                      marginBottom: "-20px",
                      fontFamily: "Outfit",
                      fontSize: "16px",
                      color: "#9EA3AE",
                      lineHeight: "30px",
                      fontWeight: "600",
                      textTransform: "none",
                    }}
                  />
                  <Tab
                    disableRipple={true}
                    label="Driver Apps"
                    {...a11yProps(1)}
                    sx={{
                      marginBottom: "-20px",
                      fontFamily: "Outfit",
                      fontSize: "16px",
                      color: "#9EA3AE",
                      lineHeight: "30px",
                      fontWeight: "400",
                      textTransform: "none"
                    }}
                  />
                  <Tab
                    disableRipple={true}
                    label="Customer Apps"
                    {...a11yProps(1)}
                    sx={{
                      marginBottom: "-20px",
                      fontFamily: "Outfit",
                      fontSize: "16px",
                      color: "#9EA3AE",
                      lineHeight: "30px",
                      fontWeight: "400",
                      textTransform: "none"
                    }}
                  />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <CatererApps setShowCatererDetailFunc={setShowCatererDetail} setSelectedCatererFunc={setSelectedCaterer} />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <DriverApps setShowDriverDetailFunc={setShowDriverDetail} setSelectedDriverFunc={setSelectedDriver} />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <CustomerApps setShowCustomerDetailFunc={setShowCustomerDetail} setSelectedCustomerFunc={setSelectedCustomer} />
              </TabPanel>
            </Box>
          </>
        }
        {/* <Box width="100%">
          <Box sx={{my:{xs:"10px",md:"0px"}}}>
            <CustomSearchInputField
              id="outlined-start-adornment"
              sx={{ m: 1, width: "32ch",margin:{xs:"8px 0px",md:"8px"} }}
              size="small"
              placeholder="Search"
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton aria-label="toggle password visibility">
                      <SearchIcon sx={{ color: "#9EA3AE" }} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              TabIndicatorProps={{
                sx: { backgroundColor: "#2B817B" },
              }}
              sx={{ "& button.Mui-selected": { color: "#1A1b24" } }}
            >
              <Tab
                disableRipple={true}
                label="Caterer Apps"
                {...a11yProps(0)}
                sx={{
                  marginBottom: "-20px",
                  fontFamily: "Outfit",
                  fontSize: "16px",
                  color: "#9EA3AE",
                  lineHeight: "30px",
                  fontWeight: "600",
                  textTransform: "none",
                }}
              />
              <Tab
                disableRipple={true}
                label="Driver Apps"
                {...a11yProps(1)}
                sx={{
                  marginBottom: "-20px",
                  fontFamily: "Outfit",
                  fontSize: "16px",
                  color: "#9EA3AE",
                  lineHeight: "30px",
                  fontWeight: "400",
                  textTransform: "none"
                }}
              />
              <Tab
                disableRipple={true}
                label="Customer Apps"
                {...a11yProps(1)}
                sx={{
                  marginBottom: "-20px",
                  fontFamily: "Outfit",
                  fontSize: "16px",
                  color: "#9EA3AE",
                  lineHeight: "30px",
                  fontWeight: "400",
                  textTransform: "none"
                }}
              />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <CatererApps setShowCatererDetailFunc={setShowCatererDetail} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <DriverApps />
          </TabPanel>
          <TabPanel value={value} index={2}>
            Customer Apps
          </TabPanel>
        </Box> */}
      </Layout>
    </>
  );
};

export default FinancialReport;