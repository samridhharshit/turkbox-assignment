import React from 'react';
import * as d3 from 'd3';
import { Line } from "react-chartjs-2";

import data from '../covid19-in-india/covid_19_india.csv';

const ConfirmedIndianNational = [];
const ConfirmedForeignNational = [];
const Cured = [];
const Deaths = [];
const Confirmed = [];
d3.csv(data)
    .then(res => {
        console.log(res[0]);

        for (let i = 0; i < res.length - 1; i++) {
            ConfirmedIndianNational.push(parseInt(res[i].ConfirmedIndianNational))
        }
        for (let i = 0; i < res.length - 1; i++) {
            ConfirmedForeignNational.push(parseInt(res[i].ConfirmedForeignNational))
        }
        for (let i = 0; i < res.length - 1; i++) {
            Cured.push(parseInt(res[i].Cured))
        }
        for (let i = 0; i < res.length - 1; i++) {
            Deaths.push(parseInt(res[i].Deaths))
        }
        for (let i = 0; i < res.length - 1; i++) {
            Confirmed.push(parseInt(res[i].Confirmed))
        }
    })
    .catch(err => {
        console.log(err);

    })

export default class Overview extends React.Component {
    state = {
        chartData: {
            labels: ["Andhra Pradesh",
                "Arunachal Pradesh",
                "Assam",
                "Bihar",
                "Chhattisgarh",
                "Goa",
                "Gujarat",
                "Haryana",
                "Himachal Pradesh",
                "Jammu and Kashmir",
                "Jharkhand",
                "Karnataka",
                "Kerala",
                "Madhya Pradesh",
                "Maharashtra",
                "Manipur",
                "Meghalaya",
                "Mizoram",
                "Nagaland",
                "Odisha",
                "Punjab",
                "Rajasthan",
                "Sikkim",
                "Tamil Nadu",
                "Telangana",
                "Tripura",
                "Uttarakhand",
                "Uttar Pradesh",
                "West Bengal",
                "Andaman and Nicobar Islands",
                "Chandigarh",
                "Dadra and Nagar Haveli",
                "Daman and Diu",
                "Delhi",
                "Lakshadweep",
                "Puducherry"],
            datasets: [
                {
                    label: "ConfirmedIndianNational",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(225,0,0,0.4)",
                    borderColor: "red", // The main line color
                    borderCapStyle: 'square',
                    borderDash: [], // try [5, 15] for instance
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "black",
                    pointBackgroundColor: "white",
                    pointBorderWidth: 1,
                    pointHoverRadius: 8,
                    pointHoverBackgroundColor: "yellow",
                    pointHoverBorderColor: "brown",
                    pointHoverBorderWidth: 2,
                    pointRadius: 4,
                    pointHitRadius: 10,
                    data: ConfirmedIndianNational,
                    spanGaps: true

                },
                {
                    label: "ConfirmedForeignNational",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(225,0,0,0.4)",
                    borderColor: "red", // The main line color
                    borderCapStyle: 'square',
                    borderDash: [], // try [5, 15] for instance
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "black",
                    pointBackgroundColor: "white",
                    pointBorderWidth: 1,
                    pointHoverRadius: 8,
                    pointHoverBackgroundColor: "yellow",
                    pointHoverBorderColor: "brown",
                    pointHoverBorderWidth: 2,
                    pointRadius: 4,
                    pointHitRadius: 10,
                    data: ConfirmedForeignNational,
                    spanGaps: true
                },
                {
                    label: "Cured",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(225,0,0,0.4)",
                    borderColor: "red", // The main line color
                    borderCapStyle: 'square',
                    borderDash: [], // try [5, 15] for instance
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "black",
                    pointBackgroundColor: "white",
                    pointBorderWidth: 1,
                    pointHoverRadius: 8,
                    pointHoverBackgroundColor: "yellow",
                    pointHoverBorderColor: "brown",
                    pointHoverBorderWidth: 2,
                    pointRadius: 4,
                    pointHitRadius: 10,
                    data: Cured,
                    spanGaps: true
                },
                {
                    label: "Deaths",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(225,0,0,0.4)",
                    borderColor: "red", // The main line color
                    borderCapStyle: 'square',
                    borderDash: [], // try [5, 15] for instance
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "black",
                    pointBackgroundColor: "white",
                    pointBorderWidth: 1,
                    pointHoverRadius: 8,
                    pointHoverBackgroundColor: "yellow",
                    pointHoverBorderColor: "brown",
                    pointHoverBorderWidth: 2,
                    pointRadius: 4,
                    pointHitRadius: 10,
                    data: Deaths,
                    spanGaps: true
                },
                {
                    label: "Confirmed",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(225,0,0,0.4)",
                    borderColor: "red", // The main line color
                    borderCapStyle: 'square',
                    borderDash: [], // try [5, 15] for instance
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "black",
                    pointBackgroundColor: "white",
                    pointBorderWidth: 1,
                    pointHoverRadius: 8,
                    pointHoverBackgroundColor: "yellow",
                    pointHoverBorderColor: "brown",
                    pointHoverBorderWidth: 2,
                    pointRadius: 4,
                    pointHitRadius: 10,
                    data: Confirmed,
                    spanGaps: true
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Spread Stat by Age',
                fontSize: 25
            },
            legend: {
                display: false,
                position: 'bottom'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        min: 0,
                        max: 5,
                        stepSize: 1
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Cases',
                        fontSize: 20,
                        fontColor: '#1db954'
                    }
                }],
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'State',
                        fontSize: 20,
                        fontColor: '#1db954'
                    }
                }]
            }
        }
    }
    render() {
        return (
            <div className="row component-row">
                <Line
                    data={this.state.chartData}
                    options={this.state.options}
                />
            </div>
        );
    }
}
