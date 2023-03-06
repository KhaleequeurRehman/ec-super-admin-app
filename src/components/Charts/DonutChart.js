import React from 'react'
import Charts from 'react-apexcharts'
export const DonutChart = () => {

    const options = {
        series: [45, 52, 22, 51, 30],
        chart: {
            type: 'donut',
            width: '300px',
            height: '200px',
        },
        labels: ['Dietary subscription', 'Multiple subscription', 'Personal subscription', 'Single order',
            'Business subscription'],
        colors: ['#FF8D85', '#158FAD', '#7B49E5', '#7ECC49', '#FF9933'], // add this part to modify colours
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: '100%',
                    },
                    legend: {
                        show: true,
                        position: 'bottom',
                        horizontalAlign: 'center',
                        fontSize: '12px'
                    },
                }
            }
        ],
        legend: {
            show: true,
            position: 'right',
            horizontalAlign: 'center',
            fontSize: '13px',
            fontFamily: 'Outfit, sans-serif',
            fontWeight: 400,
            labels: {
                colors: ['#FF8D85', '#158FAD', '#7B49E5', '#7ECC49', '#FF9933'],
                useSeriesColors: true
            },
            markers: {
                onClick: function (chart, seriesIndex, opts) {
                    console.log("series- " + seriesIndex + "'s marker was clicked")
                }
            },
        },
        dataLabels: { // add this part to remove %
            enabled: false,
        },
        // tooltip: {
        //     custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        //         var series = w.globals.initialSeries[seriesIndex].series[dataPointIndex];
        //         return '<ul>' +
        //             '<li > ' + series + '<b> Order </b> </li>' +
        //             '</ul>';
        //     }
        // },
        plotOptions: {
            donut: {
                expandOnClick: false,

            },
            labels: {
                show: false,
                name: {
                    show: true,
                    foreColor: "red",
                    offsetY: 10,
                },
            }
        }
    };

    console.log(options)




    return (
        <div>

            <Charts options={options}
                series={options.series} type="donut" width={'100%'} />
        </div>
    )
}
