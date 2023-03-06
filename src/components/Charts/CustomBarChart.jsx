import React from "react";
import Charts from "react-apexcharts";

const CustomBarChart = () => {
  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1, 2, 3, 4, 5, 6, 7, 8],
    },
    colors: ["#42C677", "#A0E4B8"], // add this part to modify colours
    plotOptions: {
      bar: { horizontal: false, borderRadius: 5, columnWidth: "8px" },
    },
  };
  const series = [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ];

  return (
    <div>
      <Charts
        options={options}
        series={series}
        type="bar"
        width={"100%"}
        height="270px"
      />
    </div>
  );
};

export default CustomBarChart;
