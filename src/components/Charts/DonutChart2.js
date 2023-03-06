import { Box, Typography } from "@mui/material";
import React from "react";
import ReactApexChart from "react-apexcharts";

const DonutChart2 = ({donughtChartSeries=[],label}) => {

  const options = {
      chart: {
        type: 'donut',
      },
      colors:['#7B49E5','#FF8D85','#158FAD','#7ECC49','#158FAD'],
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90,
          offsetY: 10
        }
      },
      grid: {
        padding: {
          bottom: -80
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    }

  const series = [44, 55, 41, 17, 15]

  const state = {
          
    // series: [44, 55, 41, 17, 15],
    series: donughtChartSeries,
    options: {
      chart: {
        type: 'donut',
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90,
          offsetY: 10
        }
      },
      grid: {
        padding: {
          bottom: -80
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },
  
  
  };


  return (
    <div>
      <Box sx={{p:"10px",py:"20px"}}>
        <Typography sx={{fontSize:{xs:"14px",md:"16px",lg:'20px'},fontWeight:"500"}}>{label && label}</Typography>
      </Box>
      <ReactApexChart
        options={options}
        // series={series}
        series={donughtChartSeries}
        type="donut"
        // minHeight="250px"
        height="auto"
      />
    </div>
  );
};

export default DonutChart2;

