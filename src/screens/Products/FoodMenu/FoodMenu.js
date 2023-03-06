import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import Layout from "../../Layout";
import Header from "../Components/Header/Header";
import notification from "../Components/Assets/notification.png";
import DataTable from "../Components/DataTable/DataTable";
import dish from "../Components/Assets/dish.png";
import ViewDetails from "../ViewDetails/ViewDetails";
import IconButton from "../Components/IconButton/IconButton";
function FoodMenu() {
  const [viewDetails, setViewDetails] = useState(false);
  const getSearchValue =(val)=>{
    console.log(val)

  }

  return (
    <React.Fragment>
      {viewDetails ? (
        <Box>
            <ViewDetails/>
        </Box>
      ) : (
        <Layout>
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                border: "2px dashed #80B3B0",
                borderRadius: "8px",
                background: " #F0FAF9",
                minHeight: "110px",
                alignItems: "center",
                padding: "0px 20px 0px 20px",
                marginBottom: 5,
                flexWrap: "wrap",
                padding: "10px",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <img
                  style={{
                    border: "1.5px solid #2B817B",
                    borderRadius: "3px",
                    padding: "2px",
                  }}
                  src={notification}
                  alt="notification icon"
                />
                <Box>
                  <Typography
                    sx={{
                      color: "#1A1824",
                      fontSize: { md: "18px", xs: "16px" },
                      fontWeight: "500",
                      fontFamily: "Outfit",
                      margin: "0px 0px 0px 15px",
                      lineHeight: "145%",
                    }}
                  >
                    You have new meal approval request
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Outfit",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "14px",
                      color: "#9EA3AE",
                      // lineHeight:'10%',
                      margin: "0px 0px 0px 15px",
                      width: { lg: "464px", md: "464px" },
                    }}
                  >
                    you have 4 meal approval request from 3 caterer that you
                    need to review
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Button
                  sx={{
                    textTransform: "none",
                    color: "#2B817B",
                    fontSize: { md: "16px", xs: "14px" },
                    fontWeight: { md: "600", xs: "500" },
                    height: "40px",
                    padding: "8px 24px",
                    backgroundColor: "#ffff",
                    borderRadius: "4px",
                    border: "1px solid #80B3B0",
                    width: { md: "157px", xs: "140px" },
                  }}
                >
                  See all request
                </Button>
              </Box>
            </Box>
            <Header
              title="All Menu"
              menu={[
                { title: "All Courses", items: ["item_1", "item_2", "item_3"] },
                { title: "Last Added" },
                { title: "Any Status" },
              ]}
              getSearchValue={getSearchValue}
            />
          </Box>
          <DataTable
            columns={[
              { id: "serial", label: "#", minWidth: 170 },
              { id: "image", label: "Image", minWidth: 100 },
              {
                id: "menuName",
                label: "Menu Name",
                minWidth: 170,
                align: "center",
                format: (value) => value.toLocaleString("en-US"),
              },
              {
                id: "cuisine",
                label: "Cuisine",
                minWidth: 150,
                align: "center",
                format: (value) => value.toLocaleString("en-US"),
              },
              {
                id: "caterer",
                label: "Caterer",
                minWidth: 150,
                align: "center",
                format: (value) => value.toLocaleString("en-US"),
              },
              {
                id: "period",
                label: "Period",
                minWidth: 150,
                align: "center",
                format: (value) => value.toLocaleString("en-US"),
              },
              {
                id: "status",
                label: "Status",
                minWidth: 150,
                align: "center",
                format: (value) => value.toLocaleString("en-US"),
              },
              {
                id: "action",
                label: "Action",
                minWidth: 150,
                align: "center",
                format: (value) => value.toLocaleString("en-US"),
              },
            ]}
            rowsdata={[
              {
                serial: 1,
                img: dish,
                menuName: "Arabian Kebab, Middle East Special",
                cuisine:'Arabic',
                caterer:'Chef Juna Caterer',
                period:'2021/09/12  2021/10/12',
                status:'Actvie',
                action:<IconButton setViewDetails={setViewDetails}/>

              },
              {
                serial: 2,
                img: dish,
                menuName: "Arabian Kebab, Middle East Special",
                cuisine:'Arabic',
                caterer:'Chef Juna Caterer',
                period:'2021/09/12  2021/10/12',
                status:'Actvie',
                action:<IconButton setViewDetails={setViewDetails}/>

              },
              {
                serial: 3,
                img: dish,
                menuName: "Arabian Kebab, Middle East Special",
                cuisine:'Arabic',
                caterer:'Chef Juna Caterer',
                period:'2021/09/12  2021/10/12',
                status:'Actvie',
                action:<IconButton setViewDetails={setViewDetails}/>

              },
              {
                serial: 4,
                img: dish,
                menuName: "Arabian Kebab, Middle East Special",
                cuisine:'Arabic',
                caterer:'Chef Juna Caterer',
                period:'2021/09/12  2021/10/12',
                status:'Actvie',
                action:<IconButton setViewDetails={setViewDetails}/>

              },
              {
                serial: 5,
                img: dish,
                menuName: "Arabian Kebab, Middle East Special",
                cuisine:'Arabic',
                caterer:'Chef Juna Caterer',
                period:'2021/09/12  2021/10/12',
                status:'Actvie',
                action:<IconButton setViewDetails={setViewDetails}/>

              },
              {
                serial: 6,
                img: dish,
                menuName: "Arabian Kebab, Middle East Special",
                cuisine:'Arabic',
                caterer:'Chef Juna Caterer',
                period:'2021/09/12  2021/10/12',
                status:'Actvie',
                action:<IconButton setViewDetails={setViewDetails}/>

              },
              {
                serial: 7,
                img: dish,
                menuName: "Arabian Kebab, Middle East Special",
                cuisine:'Arabic',
                caterer:'Chef Juna Caterer',
                period:'2021/09/12  2021/10/12',
                status:'Actvie',
                action:<IconButton setViewDetails={setViewDetails}/>

              },
              {
                serial: 8,
                img: dish,
                menuName: "Arabian Kebab, Middle East Special",
                cuisine:'Arabic',
                caterer:'Chef Juna Caterer',
                period:'2021/09/12  2021/10/12',
                status:'Actvie',
                action:<IconButton setViewDetails={setViewDetails}/>

              },
              {
                serial: 9,
                img: dish,
                menuName: "Arabian Kebab, Middle East Special",
                cuisine:'Arabic',
                caterer:'Chef Juna Caterer',
                period:'2021/09/12  2021/10/12',
                status:'Actvie',
                action:<IconButton setViewDetails={setViewDetails}/>

              },
              {
                serial: 10,
                img: dish,
                menuName: "Arabian Kebab, Middle East Special",
                cuisine:'Arabic',
                caterer:'Chef Juna Caterer',
                period:'2021/09/12  2021/10/12',
                status:'Actvie',
                action:<IconButton setViewDetails={setViewDetails}/>

              },
            ]}
          />
        </Layout>
      )}
    </React.Fragment>
  );
}

export default FoodMenu;
