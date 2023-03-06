import React from "react";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import "./CatereChartCss.css";

export const CateringChart2 = () => {
  const [state, setstate] = useState({
    series: [
      {
        name: "Website Blog",
        type: "bar",
        // data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, ],
        data: [440, 201, 412, 552, 805, 550, 805, 552, 752, 320],
        fillColor: "#C2B3EE",
        strokeColor: "#C2B3EE",
      },
      {
        name: "Social Media",
        type: "line",
        // data: [590, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
        data: [470, 235, 450, 601, 857, 580, 850, 582, 798, 350],
        fillColor: "#C2B3EE",
        strokeColor: "#C2B3EE",
      },
    ],
    options: {
      //   chart: {
      //     height: 350,
      //     type: "line",
      //   },

      chart: {
        height: 380,
        columnWidth: "8px",
        type: "bar",
        zoom: false,
        toolbar: {
          tools: {
            download: false, //disable burgerMenu
          },
        },
      },
      markers: {
        colors: "#A182F8",
        strokeColors: "#A182F8",
        strokeWidth: 1,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 1,
        size: 1,
        // size: 6,
        //   discrete: [
        //     {
        //       seriesIndex: 0,
        //       dataPointIndex: 0,
        //       size: 0
        //     },
        //     {
        //       seriesIndex: 0,
        //       dataPointIndex: 1,
        //       fillColor: '#419EF7',
        //       strokeColor: '#fff',
        //       size: 6
        //     }
        //   ]
      },
      stroke: {
        // width: [0, 4]
        width: 4,
        show: true,
        curve: "smooth",
        columnWidth: "8px",
      },
      //   title: {
      //     text: "Traffic Sources",
      //   },
      dataLabels: {
        enabled: false,
        enabledOnSeries: [1],
        style: {
          //   fontSize: "8px",
        },
        background: {
          enabled: true,
          foreColor: "#A182F8",
          padding: 0,
          borderRadius: 10,
          borderWidth: 0,
          borderColor: "#A182F8",
          opacity: 1,
        },
        // textAnchor: "middle",
        offsetX: 0,
        offsetY: 0,
      },
      grid: {
        // xaxis: {
        //     lines: {
        //         show: false
        //     }
        // },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      // dataLabels: {
      //     enabled: false
      //   },
      plotOptions: {
        // column: {
        //   horizontal: false,
        //   columnWidth: "8px",
        //   // endingShape: "rounded",
        // },
        bar: {
          columnWidth: "24px",
          // background: "#A182F8",
          //   borderRadius: "2px 2px 0px 0px",
          //   distributed: true,
        },
      },
      legend: {
        show: false,
      },

      labels: [
        "01 May",
        "02 May",
        "03 May",
        "04 May",
        "05 May",
        "06 May",
        "07 May",
        "08 May",
        "09 May",
        "10 May",
        // "11 Jan 2001",
        // "12 Jan 2001",
      ],

      xaxis: {
        type: "datetime",
      },
      yaxis: [
        {
          //   title: {
          //     text: "Website Blog",
          //   },
          //   show: false,
          //   labels: {
          //     show: false,
          //   },
          //   axisBorder: {
          //     show: false,
          //   },
          //   axisTicks: {
          //     show: false,
          //   },
          //   crosshairs: {
          //     show: false,
          //   },
          //   tooltip: {
          //     enabled: false,
          //   },
        },

        // {
        //   opposite: true,
        //   title: {
        //     text: "Social Media",
        //   },
        // },
      ],

      legend: {
        show: false,
      },

      tooltip: {
        style: {
          background: "#A182F8",
        },
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
          var data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];
          return "<ul>" + "<li > " + data + "<b> Order </b> </li>" + "</ul>";
        },
      },
      colors: [
        function ({ value, seriesIndex, dataPointIndex, w }) {
          if (dataPointIndex) {
            return "#A182F8";
          } else {
            return "#C2B3EE";
          }
        },
      ],
    },
  });

  return (
    <>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="bar"
          height={280}
        />
      </div>
    </>
  );
};
