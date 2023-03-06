import React from "react";
import ReactApexChart from "react-apexcharts";
import { Box, Button, FormControl, InputLabel, ListItemIcon, ListItemText, Menu, MenuItem, Select, Typography } from '@mui/material';
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const DistributedColumnChart = ({distributedColumnChartCategories=[],distributedColumnChartSeries=[],label='',hasMenu=true}) => {
 
  const options = {
    chart: {
      height: 350,
      type: "bar",
      events: {
        click: function (chart, w, e) {
          // console.log(chart, w, e)
        },
      },
    },
    colors:['#A182F8','#C4B1FB','#E9E2FD'],
    plotOptions: {
      bar: {
        columnWidth: "67%",
        distributed: true,
        endingShape: 'rounded',
        borderRadius: 4
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    legend: {
      show: false,
    },
    xaxis: {
      // categories: ['Jan','Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','Nov','Dec'],
      categories: distributedColumnChartCategories,
      labels: {
        style: {
          colors:['#9EA3AE','#9EA3AE','#9EA3AE','#9EA3AE','#9EA3AE','#9EA3AE','#9EA3AE','#9EA3AE','#9EA3AE','#9EA3AE','#9EA3AE','#9EA3AE'],
          fontSize: "12px",
        },
      },
    },
  };

  const series = [
    {
      // data: [300, 360, 130, 100, 400,650, 140, 240, 400, 120,210, 100]
      data: distributedColumnChartSeries
    },
  ];

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
      setAnchorEl(null);
  };
  const [menu, setMenu] = React.useState('Select')
  const [checkbox, setCheckbox] = React.useState(false);
  const [checkbox2, setCheckbox2] = React.useState(false);
  const [checkbox3, setCheckbox3] = React.useState(false);

  const handleIcon = () => {
      setCheckbox(true);
      setCheckbox2(false);
      setCheckbox3(false);

  }
  const handleIcon2 = () => {
      setCheckbox(false);
      setCheckbox2(true);
      setCheckbox3(false);

  }

  return (
    <div>
      {
                hasMenu && (
                    <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between",p:"10px",py:"20px"}}>
                        <Box>
                          <Typography sx={{fontSize:{xs:"14px",md:"16px",lg:'20px'},fontWeight:"500"}}>{label && label}</Typography>
                        </Box>
                        <Button
                            id="basic-button"
                            aria-controls={open ? "basic-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleClick}
                            endIcon={<KeyboardArrowDownIcon sx={{ fill: '#2B817B ' }} />}
                            sx={{
                                color: "#545359",
                                marginLeft: '10px',
                                textTransform: "capitalize",
                                border: '1px solid #E1E1E6',
                                width: '76px',
                                borderRadius: '6px',
                                fontSize: {
                                    xl: "14px",
                                    lg: "14px",
                                    md: "13px",
                                    sm: "12px",
                                    xs: "12px",
                                },
                                fontWeight: "500",
                                pl: "0px",
                                width: '100px'
                            }}

                        >
                            {menu}
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            open={open}
                            MenuListProps={{
                                "aria-labelledby": "basic-button",
                            }}
                            sx={{
                                border: "1px solid #E1E1E6",
                                borderRadius: "6px",
                            }}
                        >
                            <MenuItem
                                sx={{
                                    color: "#9EA3AE",
                                    width: "120px",
                                    pt: "0px",
                                    pb: "0px",
                                    fontSize: "12px",
                                    fontWeight: "400",
                                }}
                                onClick={(e) => {
                                    setMenu('Select');
                                    handleClose(); 
                                }}
                            >
                                <ListItemText primary={'Select'}
                                    primaryTypographyProps={{ fontSize: '14px', fontFamily: "outfit", fontWeight: true ? '600' : '400', }} />

                            </MenuItem>
                            <MenuItem
                                sx={{
                                    color: "#9EA3AE",
                                    width: "120px",
                                    pt: "0px",
                                    pb: "0px",
                                    fontSize: "12px",
                                    fontWeight: "400",
                                }}
                                onClick={(e) => {
                                    setMenu('Month');
                                    handleClose(); handleIcon();
                                }}
                            >
                                <ListItemText primary={'Month'}
                                    primaryTypographyProps={{ fontSize: '14px', fontFamily: "outfit", fontWeight: true ? '600' : '400', }} />

                                <ListItemIcon>
                                    {checkbox ? (
                                        <CheckCircleOutlineIcon sx={{ fill: "#42C677" }} />
                                    ) : ''}
                                </ListItemIcon>

                            </MenuItem>

                            <MenuItem
                                sx={{
                                    color: "#9EA3AE",
                                    width: "120px",
                                    pt: "0px",
                                    pb: "0px",
                                    fontSize: "12px",
                                    fontWeight: "400",
                                }}
                                onClick={(e) => {
                                    setMenu('Daily');
                                    handleClose(); handleIcon2();
                                }}
                            >
                                <ListItemText primary={'Daily'}
                                    primaryTypographyProps={{ fontSize: '14px', fontFamily: "outfit", fontWeight: true ? '600' : '400', }} />

                                <ListItemIcon>
                                    {checkbox2 ? (
                                        <CheckCircleOutlineIcon sx={{ fill: "#42C677" }} />
                                    ) : ''}
                                </ListItemIcon>

                            </MenuItem>
                        </Menu>
                    </Box>
                )
            }
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        // minHeight="250px"
        height="auto"
      />
    </div>
  );
};

export default DistributedColumnChart;

// import React from "react";
// // import Charts from "react-apexcharts";
// import ReactApexChart from "react-apexcharts";

// const ColumnChart = () => {
// //   const options = {
// //     chart: {
// //       id: "basic-bar",
// //     },
// //     xaxis: {
// //       categories: [1, 2, 3, 4, 5, 6, 7, 8],
// //     },
// //     colors: ["#42C677", "#A0E4B8"], // add this part to modify colours
// //     plotOptions: {
// //       bar: { horizontal: false, borderRadius: 5, columnWidth: "8px" },
// //     },
// //   };
// //   const series = [
// //     {
// //       name: "series-1",
// //       data: [30, 40, 45, 50, 49, 60, 70, 91],
// //     },
// //   ];
//   const options = {
//     chart: {
//         type: 'bar',
//         height: 350
//       },
//       plotOptions: {
//         bar: {
//           horizontal: false,
//           columnWidth: '55%',
//           endingShape: 'rounded'
//         },
//       },
//       dataLabels: {
//         enabled: false
//       },
//       stroke: {
//         show: true,
//         width: 2,
//         colors: ['transparent']
//       },
//       xaxis: {
//         categories: ['Jan','Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','Nov','Dec'],
//       },
//       colors: ['#A182F8','#C4B1FB'],
//       yaxis: {
//         title: {
//           // text: '$ (thousands)'
//         },
//       },
//       fill: {
//         opacity: 1
//       },
//       tooltip: {
//         y: {
//           formatter: function (val) {
//             return "$ " + val + " thousands"
//           }
//         }
//       }
//   };

//   const series = [{
//     name: 'Overall  Growht',
//     data: [1000, 700, 500, 250, 100,1000, 700, 500, 250, 100,1000, 700]
//     // data: ['1k', 700, 500, 250, 100, 58, 63, 60, 66]
//   },
//   // {
//   //   name: 'Revenue',
//   //   data: [1000, 700, 500, 250, 100]
//   //   // data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
//   // },
// ]

//   return (
//     <div>
//       {/* <Charts
//         options={options}
//         series={series}
//         type="bar"
//         width={"100%"}
//         height="270px"
//       /> */}

//         {/* <ReactApexChart options={options} series={series} type="bar" height={350} /> */}
//         <ReactApexChart options={options} series={series} type="bar" height="270px" />
//     </div>
//   );
// };

// export default ColumnChart;
