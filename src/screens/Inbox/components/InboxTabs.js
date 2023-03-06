import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { InboxSearchOptions } from "./InboxSearchOptions";
import InboxDataGrid from "./InboxDataGrid";
import { InboxDriverApps } from "./InboxDriverApps/InboxDriverApps";
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
        <Box>
          <Typography sx={{ fontFamily: "outfit" }}>{children}</Typography>
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

export default function InboxTabs({ onHandleClick }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: "1px solid #E1E1E6",
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor="#1A1824"
          padding="0px"
          // // textColor="secondary"
          // indicatorColor="#2B817B"
          TabIndicatorProps={{
            style: {
              backgroundColor: "#2B817B",
              paddingTop: "0px",
              margin: "0px",
            },
          }}
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "#2B817B",
              height: "4px",
            },
            "& .MuiTab-root": {
              color: "#9EA3AE",
              fontSize: { lg: "16px", md: "16px", sm: "16px", xs: "12px" },
              fontWeight: "400",
              lineHeight: "25.6px",
              paddingBottom: "0px",
              paddingLeft: { lg: "15px", md: "15px", sm: "auto", xs: "0px" },
              //   paddingTop : "0px"
            },
            "& .Mui-selected": {
              color: "#1A1824",
              fontSize: { lg: "16px", md: "16px", sm: "16px", xs: "12px" },
              fontWeight: "600",
              lineHeight: "25.6px",
            },
          }}
        >
          <Tab
            // label="Driver Apps "
            label={
              <>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box> Driver Apps </Box>
                  {value === 0 ? (
                    ""
                  ) : (
                    <Box ml="12px">
                      <Typography
                        sx={{
                          fontSize: "10px",
                          fontWeight: "500",
                          lineHeight: "12.6px",
                          color: "#2B817B",
                        }}
                      >
                        {" "}
                        12{" "}
                      </Typography>
                    </Box>
                  )}
                </Box>
              </>
            }
            {...a11yProps(0)}
            sx={{
              textTransform: "capitalize",
            }}
          />
          <Tab
            // label="Customer Apps"
            label={
              <>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box> Customer Apps </Box>
                  {value === 1 ? (
                    ""
                  ) : (
                    <Box ml="12px">
                      <Typography
                        sx={{
                          fontSize: "10px",
                          fontWeight: "500",
                          lineHeight: "12.6px",
                          color: "#2B817B",
                        }}
                      >
                        {" "}
                        12{" "}
                      </Typography>
                    </Box>
                  )}
                </Box>
              </>
            }
            {...a11yProps(1)}
            sx={{
              textTransform: "capitalize",
            }}
          />
          <Tab
            // label="Caterer Apps"
            label={
              <>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box> Caterer Apps </Box>
                  {value === 2 ? (
                    ""
                  ) : (
                    <Box ml="12px">
                      <Typography
                        sx={{
                          fontSize: "10px",
                          fontWeight: "500",
                          lineHeight: "12.6px",
                          color: "#2B817B",
                        }}
                      >
                        {" "}
                        12{" "}
                      </Typography>
                    </Box>
                  )}
                </Box>
              </>
            }
            {...a11yProps(2)}
            sx={{
              textTransform: "capitalize",
            }}
          />
          <Tab
            // label="Call List"
            label={
              <>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box> Call List </Box>
                  {value === 3 ? (
                    ""
                  ) : (
                    <Box ml="12px">
                      <Typography
                        sx={{
                          fontSize: "10px",
                          fontWeight: "500",
                          lineHeight: "12.6px",
                          color: "#2B817B",
                        }}
                      >
                        {" "}
                        12{" "}
                      </Typography>
                    </Box>
                  )}
                </Box>
              </>
            }
            {...a11yProps(3)}
            sx={{
              textTransform: "capitalize",
            }}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
       
        <InboxDriverApps/>
      </TabPanel>
      <TabPanel value={value} index={1}></TabPanel>
      <TabPanel value={value} index={2}>
        {" "}
      </TabPanel>
      <TabPanel value={value} index={3}>
        <InboxSearchOptions
          hasTextButtonTitle3={"All Main Courses"}
          hasTextButtonTitle1={"Last Added"}
          hasTextButtonTitle2={"Any Status"}
        />
        <Box mt="20px">
          <InboxDataGrid />
        </Box>
      </TabPanel>
    </Box>
  );
}
