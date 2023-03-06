// import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
// import React from "react";
// import Charts from "react-apexcharts";
// import { BiCheckCircle } from "react-icons/bi";
// import "./CatereChartCss.css";

// export const CateringChart = () => {
//   var options = {
//     // title: {
//     //     text: 'Caterer Earnings',
//     //     align: 'left',
//     //     style: {
//     //         fontFamily: 'Outfit',
//     //         fontWeight: '600',
//     //         fontSize: '18px',
//     //         lineHeight: '26px'
//     //     },
//     // },

//     markers: {
//       colors: "#A182F8",
//       strokeColors: "#A182F8",
//       strokeWidth: 1,
//       strokeOpacity: 0.9,
//       strokeDashArray: 0,
//       fillOpacity: 1,
//     },
//     chart: {
//       height: 380,
//       //   width: "100%",
//       type: "bar",
//       zoom: false,
//       toolbar: {
//         tools: {
//           download: false, //disable burgerMenu
//         },
//       },
//     },
//     // to set thickness of chart line
//     stroke: {
//       show: true,
//       curve: "smooth",
//       width: 2,
//       columnWidth: "8px",
//     },
//     //for chart shoswing tooltip
//     dataLabels: {
//       enabled: true,
//       enabledOnSeries: [1],
//       style: {
//         fontSize: "8px",
//       },
//       background: {
//         enabled: true,
//         foreColor: "#A182F8",
//         padding: 0,
//         borderRadius: 10,
//         borderWidth: 0,
//         borderColor: "#A182F8",
//         opacity: 1,
//       },
//       textAnchor: "middle",
//       offsetX: 0,
//       offsetY: 0,
//     },

//     legend: {
//       show: false
//     },

//     grid: {
//       // xaxis: {
//       //     lines: {
//       //         show: false
//       //     }
//       // },   
//       yaxis: {
//           lines: {
//               show: false
//           }
//       }
//   },

//     // series: [{
//     //     name: 'Order',
//     //     data: [11, 22, 32, 45, 67, 79, 81, 9, 58, 67,55,77,22,1,3,4],
//     //     style:{
//     //         fontSize: '8px ', fontFamily: 'Outfit', background: 'red'
//     //     }
//     //      }],

//     // series: [
//     //   {
//     //     name: "Website Blog",
//     //     type: "bar",
//     //     // data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
//     //     // data: [11, 22, 32, 45, 67, 79, 81, 9, 58, 67],
//     //     data: [35, 62, 42, 65, 98, 79, 98, 65, 42, 35],
//     //     style: {
//     //       width: "8px",
//     //     },

//     //   },
//     //   {
//     //     name: "Social Media",
//     //     type: "line",
//     //     // data: [23, 42, 35, 27, 43, 22, 100, 31, 22, 22]
//     //     data: [45, 72, 52, 75, 108, 89, 108, 75, 52, 45],
//     //   },
//     // ],

//     series: [
//       {
//         // name: "Social Media",
//         type: "line",
//         // data: [23, 42, 35, 27, 43, 22, 100, 31, 22, 22]
//         data: [
//           {
//             x: "May",
//             y: 58,
//             fillColor: "#A182F8",
//             strokeColor: "#A182F8",
//           },
//           {
//             x: "June",
//             y: 78,
//             fillColor: "#C2B3EE",
//             strokeColor: "#C2B3EE",
//           },
//           {
//             x: "July",
//             y: 58,
//             fillColor: "#A182F8",
//             strokeColor: "#A182F8",
//           },
//           {
//             x: "Aug",
//             y: 79,
//             fillColor: "#C2B3EE",
//             strokeColor: "#C2B3EE",
//           },
//           {
//             x: "Sept",
//             y: 114,
//             fillColor: "#A182F8",
//             strokeColor: "#A182F8",
//           },
//           {
//             x: "Oct",
//             y: 90,
//             fillColor: "#C2B3EE",
//             strokeColor: "#C2B3EE",
//           },
//           {
//             x: "Nov",
//             y: 114,
//             fillColor: "#A182F8",
//             strokeColor: "#A182F8",
//           },
//           {
//             x: "Dec",
//             y: 79,
//             fillColor: "#C2B3EE",
//             strokeColor: "#C2B3EE",
//           },
//           {
//             x: "Jan",
//             y: 58,
//             fillColor: "#A182F8",
//             strokeColor: "#A182F8",
//           },
//           {
//             x: "Feb",
//             y: 78,
//             fillColor: "#C2B3EE",
//             strokeColor: "#C2B3EE",
//           },
//         ],
//       },
    
//       {
//         // name: "Website Blog",
//         type: "bar",
//         data: [
//           {
//             x: "May",
//             y: 52,
//             fillColor: "#A182F8",
//             strokeColor: "#A182F8",
//           },
//           {
//             x: "June",
//             y: 72,
//             fillColor: "#C2B3EE",
//             strokeColor: "#C2B3EE",
//           },
//           {
//             x: "July",
//             y: 52,
//             fillColor: "#A182F8",
//             strokeColor: "#A182F8",
//           },
//           {
//             x: "Aug",
//             y: 75,
//             fillColor: "#C2B3EE",
//             strokeColor: "#C2B3EE",
//           },
//           {
//             x: "Sept",
//             y: 108,
//             fillColor: "#A182F8",
//             strokeColor: "#A182F8",
//           },
//           {
//             x: "Oct",
//             y: 89,
//             fillColor: "#C2B3EE",
//             strokeColor: "#C2B3EE",
//           },
//           {
//             x: "Nov",
//             y: 108,
//             fillColor: "#A182F8",
//             strokeColor: "#A182F8",
//           },
//           {
//             x: "Dec",
//             y: 75,
//             fillColor: "#C2B3EE",
//             strokeColor: "#C2B3EE",
//           },
//           {
//             x: "Jan",
//             y: 52,
//             fillColor: "#A182F8",
//             strokeColor: "#A182F8",
//           },
//           {
//             x: "Feb",
//             y: 72,
//             fillColor: "#C2B3EE",
//             strokeColor: "#C2B3EE",
//           },
//         ],
//       },
//     ],

//     plotOptions: {
//       column: {
//         horizontal: false,
//         // columnWidth: "8px",
//         // endingShape: "rounded",
//       },
//       bar: {
//         columnWidth: "16px",
//         // background: "#A182F8",
//         borderRadius: "2px 2px 0px 0px",
//         distributed: true,
//       },
//     },
//     tooltip: {
//       style: {
//         background: "#A182F8",
//       },
//       custom: function ({ series, seriesIndex, dataPointIndex, w }) {
//         var data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];
//         return "<ul>" + "<li > " + data.y + "<b> Order </b> </li>" + "</ul>";
//       },
//     },


    


//     colors: [
//       function ({ value, seriesIndex, dataPointIndex, w }) {
//         if (dataPointIndex) {
//           return "#A182F8";
//         } else {
//           return "#C2B3EE";
//         }
//       },
//     ],
//   };

//   const [dmonthly, setDmonthly] = React.useState("Monthly");
//   const [checked, setChecked] = React.useState(true);
//   const [checked1, setChecked1] = React.useState(false);

//   const handleChange = (event) => {
//     setDmonthly(event.target.value);
//   };
//   const handleChecked = () => {
//     setChecked(true);
//     setChecked1(false);
//   };
//   const handleChecked1 = () => {
//     setChecked1(true);
//     setChecked(false);
//   };

//   return (
//     <Box padding={2}>
//       <Box
//         display={"flex"}
//         alignItems={"center"}
//         justifyContent={"space-between"}
//       >
//         <Box></Box>
//         {/* <FormControl sx={{ width: "160px", marginTop: "-16px" }}>
//           <InputLabel id="demo-simple-select-label"> </InputLabel>
//           <Select
//             sx={{
//               boxShadow: "none",
//               margin: "10px",
//               lineHeight: "25px",
//               height: "30px",
//               padding: "0px",
//               "& .MuiSelect-select": {
//                 border: "1px solid transparent",
//                 color: "red",
//               },
//               "& .MuiSelect-icon": {
//                 fill: "#2B817B",
//               },
//               ".MuiOutlinedInput-notchedOutline": {
//                 border: "none !important",
//               },
//             }}
//             labelId="demo-simple-select-label"
//             id="demo-simple-select"
//             value={dmonthly}
//             placeholder="This Month"
//             onChange={handleChange}
//           >
            
//             <MenuItem
//               selected
//               onClick={handleChecked}
//               sx={{ marginRight: "0px", background: "#fff" }}
//               disableRiple={true}
//               value={"monthly"}
//             >
//               Monthly{" "}
//               {checked && (
//                 <BiCheckCircle
//                   sx={{ marginTop: "9px", marginLeft: "8px" }}
//                   color="#42C677"
//                 />
//               )}
//             </MenuItem>
//             <MenuItem
//               disableRiple={true}
//               onClick={handleChecked1}
//               value={"daily"}
//             >
//               Daily
//               {checked1 && (
//                 <BiCheckCircle
//                   sx={{ marginTop: "9px", marginLeft: "8px" }}
//                   color="#42C677"
//                 />
//               )}
//             </MenuItem>
//           </Select>
//         </FormControl> */}
//       </Box>
//       <Charts
//         options={options}
//         series={options.series}
//         type="line"
//         width="100%"
//         height="390px"
//       />
//     </Box>
//   );
// };
