import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { DriverOrderHistoryCard } from "./DriverOrderHistoryCard";
import { DriverHistoryMainBox } from "./DriverHistoryMainBox";


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

export default function DriverOrderHistoryTabs({ onHandleClick, driverDetailData }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
      //    sx={{borderBottom: "1px solid #E1E1E6", borderBottom: 1, borderColor: "divider" }}
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
            "& .MuiTabs-indicator": { backgroundColor: "#2B817B", height: "4px" },
            "& .MuiTab-root": {
              color: "#9EA3AE",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "25.6px",
              paddingBottom : "0px",
            //   paddingTop : "0px"
            },
            "& .Mui-selected": {
              color: "#1A1824",
              fontSize: "16px",
              fontWeight: "600",
              lineHeight: "25.6px",
            },
          }}
        >
          <Tab
            label="Current"
            {...a11yProps(0)}
            sx={{
              textTransform: "capitalize",
            }}
          />
          <Tab
            label="History"
            {...a11yProps(1)}
            sx={{
              textTransform: "capitalize",
            }}
          />
          
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}><DriverHistoryMainBox driverDetailDat={driverDetailData} /></TabPanel>
      <TabPanel value={value} index={1}></TabPanel>
    </Box>
  );
}
